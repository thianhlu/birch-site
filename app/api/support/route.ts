import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { LIMITS, TOPICS, type Topic } from "../../support/topics";

/*
 * POST /api/support
 *
 * Takes a support form submission, then:
 *   1. opens an issue (label "support") on the app repo, if SUPPORT_GITHUB_TOKEN is set
 *   2. emails it to SUPPORT_EMAIL_TO over SMTP (reply-to = submitter), if SMTP_* is set
 *
 * If neither delivery works (for example, secrets aren't configured), the full
 * submission is written to the server log so it isn't lost, and the visitor
 * gets a friendly message with a fallback email address.
 *
 * Env (all optional; each channel switches on when its vars are present):
 *   SUPPORT_GITHUB_TOKEN  fine-grained token, Issues: read & write, app repo only
 *   SUPPORT_GITHUB_REPO   owner/name, defaults to thianhlu/breath
 *   SMTP_USER, SMTP_PASS  e.g. a Gmail address + a Google App Password
 *   SMTP_HOST, SMTP_PORT  default smtp.gmail.com / 465
 *   SUPPORT_EMAIL_TO      where notifications go
 *   SUPPORT_EMAIL_FROM    optional From address, defaults to SMTP_USER
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GITHUB_API = process.env.SUPPORT_GITHUB_API || "https://api.github.com";
const LABEL = "support";
const MIN_FILL_MS = 3_000;
const MAX_FILL_MS = 24 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;

type Submission = {
  name: string;
  email: string;
  topic: Topic;
  device: string;
  appVersion: string;
  message: string;
};

type Fail = { ok: false; error: string; fields?: Record<string, string> };

// Best-effort, per-instance rate limit. Serverless instances don't share memory,
// so this slows bursts rather than enforcing a hard global cap.
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(k);
  }
  return recent.length > RATE_MAX;
}

function str(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  // Drop control characters except newlines and tabs, then trim.
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max + 1);
}

const oneLine = (s: string) => s.replace(/\s+/g, " ").trim();
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

function validate(body: Record<string, unknown>): Submission | Fail {
  const fields: Record<string, string> = {};
  const name = oneLine(str(body.name, LIMITS.name));
  const email = oneLine(str(body.email, LIMITS.email));
  const topic = str(body.topic, 20) as Topic;
  const device = oneLine(str(body.device, LIMITS.device));
  const appVersion = oneLine(str(body.appVersion, LIMITS.appVersion));
  const message = str(body.message, LIMITS.message);

  if (name.length > LIMITS.name) fields.name = `Please keep your name under ${LIMITS.name} characters.`;
  if (!email) fields.email = "Please add your email so we can reply.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) fields.email = "That email doesn't look right.";
  if (!TOPICS.some((t) => t.value === topic)) fields.topic = "Please pick a topic.";
  if (device.length > LIMITS.device) fields.device = "Please shorten this.";
  if (appVersion.length > LIMITS.appVersion) fields.appVersion = "Please shorten this.";
  if (message.length < LIMITS.messageMin) fields.message = "Please tell us a little more.";
  else if (message.length > LIMITS.message) fields.message = `Please keep it under ${LIMITS.message} characters.`;

  if (Object.keys(fields).length) return { ok: false, error: "Please check the highlighted fields.", fields };
  return { name, email, topic, device, appVersion, message };
}

const topicLabel = (t: Topic) => TOPICS.find((x) => x.value === t)?.label ?? "Other";

function snippet(message: string, n = 60) {
  const s = oneLine(message);
  return s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s;
}

function fence(text: string) {
  const longest = Math.max(2, ...(text.match(/`+/g) ?? []).map((m) => m.length));
  const f = "`".repeat(longest + 1);
  return `${f}text\n${text}\n${f}`;
}

async function gh(path: string, token: string, init?: RequestInit) {
  return fetch(`${GITHUB_API}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "birch-support-form",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
    },
    signal: AbortSignal.timeout(10_000),
  });
}

async function ensureLabel(repo: string, token: string) {
  const res = await gh(`/repos/${repo}/labels/${LABEL}`, token);
  if (res.status !== 404) return;
  await gh(`/repos/${repo}/labels`, token, {
    method: "POST",
    body: JSON.stringify({
      name: LABEL,
      color: "49d27a",
      description: "Sent from the support form on hellobirch.app",
    }),
  });
}

async function createIssue(s: Submission, when: string): Promise<string | null> {
  const token = process.env.SUPPORT_GITHUB_TOKEN;
  if (!token) return null;
  const repo = process.env.SUPPORT_GITHUB_REPO || "thianhlu/breath";

  await ensureLabel(repo, token).catch(() => {});

  const body = [
    `**Topic:** ${topicLabel(s.topic)}`,
    `**From:** ${s.name || "(no name)"} <${s.email}>`,
    `**Device / OS:** ${s.device || "(not given)"}`,
    `**App version:** ${s.appVersion || "(not given)"}`,
    `**Received:** ${when}`,
    "",
    "**Message**",
    "",
    fence(s.message),
    "",
    "<sub>Sent from hellobirch.app/support. Reply to the submitter by email, not on this issue.</sub>",
  ].join("\n");

  const payload = {
    title: `[Support] ${topicLabel(s.topic)}: ${snippet(s.message)}`,
    body,
    labels: [LABEL],
  };
  let res = await gh(`/repos/${repo}/issues`, token, { method: "POST", body: JSON.stringify(payload) });
  if (res.status === 422) {
    // Label problems shouldn't lose the report; retry without labels.
    res = await gh(`/repos/${repo}/issues`, token, {
      method: "POST",
      body: JSON.stringify({ ...payload, labels: undefined }),
    });
  }
  if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const issue = (await res.json()) as { html_url: string };
  return issue.html_url;
}

async function sendEmail(s: Submission, when: string, issueUrl: string | null): Promise<boolean> {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.SUPPORT_EMAIL_TO;
  if (!user || !pass || !to) return false;
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  const text = [
    `Topic: ${topicLabel(s.topic)}`,
    `From: ${s.name || "(no name)"} <${s.email}>`,
    `Device / OS: ${s.device || "(not given)"}`,
    `App version: ${s.appVersion || "(not given)"}`,
    `Received: ${when}`,
    issueUrl ? `GitHub issue: ${issueUrl}` : "GitHub issue: (not created)",
    "",
    s.message,
    "",
    "--",
    "Sent from hellobirch.app/support. Reply to this email to answer the sender.",
  ].join("\n");
  await transport.sendMail({
    from: { name: "Birch Support Form", address: process.env.SUPPORT_EMAIL_FROM || user },
    to,
    replyTo: s.name ? { name: s.name, address: s.email } : s.email,
    subject: `[Birch support] ${topicLabel(s.topic)}: ${snippet(s.message, 50)}`,
    text,
  });
  return true;
}

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json<Fail>({ ok: false, error: "Please send this from hellobirch.app." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json<Fail>({ ok: false, error: "Something went wrong reading the form." }, { status: 400 });
  }

  // Honeypot: people never see this field. Pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Time check: real people take more than a few seconds to fill the form in.
  const startedAt = Number(body.startedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return NextResponse.json<Fail>(
      { ok: false, error: "That was quick! Please wait a moment and send it again." },
      { status: 400 },
    );
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json<Fail>(
      { ok: false, error: "You've sent a few messages already. Please try again in a little while." },
      { status: 429 },
    );
  }

  const result = validate(body);
  if ("ok" in result) return NextResponse.json<Fail>(result, { status: 400 });
  const s = result;
  const when = new Date().toISOString();
  const ref = `sup_${Date.now().toString(36)}`;

  let issueUrl: string | null = null;
  let emailed = false;
  const problems: string[] = [];

  try {
    issueUrl = await createIssue(s, when);
    if (!issueUrl) problems.push("github: SUPPORT_GITHUB_TOKEN not set");
  } catch (e) {
    problems.push(`github: ${(e as Error).message}`);
  }
  try {
    emailed = await sendEmail(s, when, issueUrl);
    if (!emailed) problems.push("email: SMTP_USER / SMTP_PASS / SUPPORT_EMAIL_TO not set");
  } catch (e) {
    problems.push(`email: ${(e as Error).message}`);
  }

  if (issueUrl || emailed) {
    if (problems.length) console.warn(`[support] ${ref} partially delivered`, { issueUrl, emailed, problems });
    else console.info(`[support] ${ref} delivered`, { issueUrl });
    return NextResponse.json({ ok: true });
  }

  // Nothing went out. Keep the whole submission in the server log so it can be recovered.
  console.error(`[support] ${ref} NOT delivered`, { problems, submission: { ...s, receivedAt: when } });
  return NextResponse.json<Fail>(
    {
      ok: false,
      error:
        "Sorry, we couldn't send your message right now. Your note was saved on our side, but to be sure we see it, please email us instead.",
    },
    { status: 503 },
  );
}
