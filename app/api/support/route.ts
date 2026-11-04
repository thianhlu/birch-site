import { NextResponse } from "next/server";
import { LIMITS, TOPICS, type Topic } from "../../support/topics";

/*
 * POST /api/support
 *
 * Takes a support form submission and emails it to SUPPORT_EMAIL_TO through
 * AgentMail, sent from the Birch Support inbox, with reply-to set to the
 * submitter so a plain "Reply" answers them.
 *
 * If the email can't be sent (for example, env vars aren't configured), the
 * full submission is written to the server log so it isn't lost, and the
 * visitor gets a friendly message with a fallback email address.
 *
 * Env (set in Vercel, never committed):
 *   AGENTMAIL_API_KEY    AgentMail API key (Bearer)
 *   AGENTMAIL_INBOX_ID   inbox to send from, e.g. hellobirch@agentmail.to
 *   SUPPORT_EMAIL_TO     where support messages are delivered
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const AGENTMAIL_API = "https://api.agentmail.to/v0";
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

async function sendEmail(s: Submission, when: string): Promise<boolean> {
  const key = process.env.AGENTMAIL_API_KEY;
  const inbox = process.env.AGENTMAIL_INBOX_ID;
  const to = process.env.SUPPORT_EMAIL_TO;
  if (!key || !inbox || !to) return false;

  const text = [
    s.message,
    "",
    "--",
    `Topic: ${topicLabel(s.topic)}`,
    `From: ${s.name ? `${s.name} <${s.email}>` : s.email}`,
    `Device / OS: ${s.device || "(not given)"}`,
    `App version: ${s.appVersion || "(not given)"}`,
    `Received: ${when}`,
    "",
    "Sent from hellobirch.app/support. Reply to this email to answer the sender.",
  ].join("\n");

  const res = await fetch(`${AGENTMAIL_API}/inboxes/${encodeURIComponent(inbox)}/messages/send`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      to: [to],
      reply_to: [s.email],
      subject: `Birch support: ${topicLabel(s.topic)}`,
      text,
      labels: ["support-form"],
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`AgentMail ${res.status}: ${(await res.text()).slice(0, 300)}`);
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

  try {
    if (await sendEmail(s, when)) {
      console.info(`[support] ${ref} delivered`);
      return NextResponse.json({ ok: true });
    }
    console.error(`[support] ${ref} NOT delivered: AGENTMAIL_API_KEY / AGENTMAIL_INBOX_ID / SUPPORT_EMAIL_TO not set`, {
      submission: { ...s, receivedAt: when },
    });
  } catch (e) {
    // Nothing went out. Keep the whole submission in the server log so it can be recovered.
    console.error(`[support] ${ref} NOT delivered: ${(e as Error).message}`, { submission: { ...s, receivedAt: when } });
  }

  return NextResponse.json<Fail>(
    {
      ok: false,
      error: "Sorry, we couldn't send your message right now.",
    },
    { status: 503 },
  );
}
