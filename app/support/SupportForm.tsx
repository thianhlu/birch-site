"use client";

import { useEffect, useRef, useState } from "react";
import { LIMITS, TOPICS } from "./topics";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; email: string }
  | { kind: "error"; message: string; fields: Record<string, string> };

export default function SupportForm({ contactEmail }: { contactEmail: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: Record<string, string>;
      };
      if (res.ok && json.ok) {
        setStatus({ kind: "sent", email: data.email });
        formRef.current?.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      setStatus({
        kind: "error",
        message: json.error || "Something went wrong. Please try again.",
        fields: json.fields || {},
      });
      requestAnimationFrame(() =>
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't reach the server. Check your connection and try again.",
        fields: {},
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="sf-done" role="status">
        <span className="sf-done-badge" aria-hidden="true">
          ✓
        </span>
        <h2>Thanks, we got it.</h2>
        <p>
          Your message is on its way. We read every one and will reply to{" "}
          <strong>{status.email}</strong>, usually within a few days.
        </p>
        <button
          type="button"
          className="sf-again"
          onClick={() => {
            startedAt.current = Date.now();
            setStatus({ kind: "idle" });
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fields = status.kind === "error" ? status.fields : {};
  const err = (k: string) =>
    fields[k] ? (
      <span className="sf-err" id={`${k}-err`}>
        {fields[k]}
      </span>
    ) : null;
  const described = (k: string) => (fields[k] ? `${k}-err` : undefined);

  return (
    <form ref={formRef} className="sf" onSubmit={onSubmit} noValidate={false}>
      {status.kind === "error" && (
        <div className="sf-alert" role="alert">
          {status.message}{" "}
          {Object.keys(status.fields).length === 0 && (
            <>
              Please email us at{" "}
              <a href={`mailto:${contactEmail}?subject=Birch%20support`}>{contactEmail}</a>{" "}
              instead.
            </>
          )}
        </div>
      )}

      <div className="sf-row">
        <label className="sf-field">
          <span>
            Name <small>(optional)</small>
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={LIMITS.name}
            aria-describedby={described("name")}
          />
          {err("name")}
        </label>
        <label className="sf-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={LIMITS.email}
            aria-invalid={!!fields.email}
            aria-describedby={described("email")}
          />
          {err("email")}
        </label>
      </div>

      <fieldset>
        <legend>What&apos;s this about?</legend>
        <div className="sf-topics">
          {TOPICS.map((t, i) => (
            <label key={t.value}>
              <input type="radio" name="topic" value={t.value} defaultChecked={i === 0} required />
              <span>{t.label}</span>
            </label>
          ))}
        </div>
        {err("topic")}
      </fieldset>

      <div className="sf-row">
        <label className="sf-field">
          <span>
            Device and iOS / watchOS version <small>(optional)</small>
          </span>
          <input
            type="text"
            name="device"
            placeholder="iPhone 15, iOS 26.1"
            maxLength={LIMITS.device}
            aria-describedby={described("device")}
          />
          {err("device")}
        </label>
        <label className="sf-field">
          <span>
            Birch version <small>(optional)</small>
          </span>
          <input
            type="text"
            name="appVersion"
            placeholder="e.g. 3.5"
            maxLength={LIMITS.appVersion}
            aria-describedby={described("appVersion")}
          />
          {err("appVersion")}
        </label>
      </div>

      <label className="sf-field">
        <span>Message</span>
        <textarea
          name="message"
          required
          minLength={LIMITS.messageMin}
          maxLength={LIMITS.message}
          placeholder="What happened, or what would you like to see?"
          aria-invalid={!!fields.message}
          aria-describedby={described("message")}
        />
        {err("message")}
      </label>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="sf-hp" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button className="sf-submit" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="sf-note">
        We use what you send only to reply and to improve Birch. See our{" "}
        <a href="/privacy#support">privacy policy</a>.
      </p>
    </form>
  );
}
