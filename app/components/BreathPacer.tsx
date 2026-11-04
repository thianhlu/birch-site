"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export type Phase = { label: "Inhale" | "Hold" | "Exhale"; secs: number };
export type PacerPattern = { id: string; name: string; short: string; phases: Phase[] };

// Orb scale at the bottom of an exhale and the top of an inhale.
const LO = 0.64;
const HI = 1;
// Resting size before Start (room for the pattern name), eased into the first inhale.
const READY = 0.86;
const SETTLE_MS = 700;
const ease = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

function locate(p: PacerPattern, ms: number) {
  const cycleMs = p.phases.reduce((a, ph) => a + ph.secs, 0) * 1000;
  const inCycle = ms % cycleMs;
  const cycle = Math.floor(ms / cycleMs);
  let acc = 0;
  for (let i = 0; i < p.phases.length; i++) {
    const len = p.phases[i].secs * 1000;
    if (inCycle < acc + len) {
      return { i, t: (inCycle - acc) / len, left: Math.ceil((acc + len - inCycle) / 1000), cycle, p: inCycle / cycleMs };
    }
    acc += len;
  }
  return { i: 0, t: 0, left: p.phases[0].secs, cycle, p: 0 };
}

function scaleAt(p: PacerPattern, i: number, t: number) {
  const ph = p.phases[i];
  if (ph.label === "Inhale") return LO + (HI - LO) * ease(t);
  if (ph.label === "Exhale") return HI - (HI - LO) * ease(t);
  // Hold: stay where the previous phase ended.
  for (let k = 1; k <= p.phases.length; k++) {
    const prev = p.phases[(i - k + p.phases.length) % p.phases.length];
    if (prev.label === "Inhale") return HI;
    if (prev.label === "Exhale") return LO;
  }
  return LO;
}

const RM = "(prefers-reduced-motion: reduce)";
function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(RM);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReduced = () => window.matchMedia(RM).matches;

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M8 5.6v12.8a1 1 0 0 0 1.5.86l10.2-6.4a1 1 0 0 0 0-1.72L9.5 4.74A1 1 0 0 0 8 5.6Z" fill="currentColor" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="6.5" y="5" width="4" height="14" rx="1.4" fill="currentColor" />
      <rect x="13.5" y="5" width="4" height="14" rx="1.4" fill="currentColor" />
    </svg>
  );
}
function ResetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4.5 4.5v4h4" />
    </svg>
  );
}

/**
 * An in-page breathing pacer. One count = one second. The orb grows on the
 * inhale, rests on holds, and shrinks on the exhale; the ring around it fills
 * through each phase and a playhead moves along the timeline. With reduced
 * motion the orb keeps one size and the ring and playhead step once a second.
 */
export default function BreathPacer({ patterns }: { patterns: PacerPattern[] }) {
  const [pi, setPi] = useState(0);
  const [running, setRunning] = useState(false);
  const [view, setView] = useState({ i: -1, left: 0, cycle: 0 });
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const orb = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const elapsed = useRef(0);
  const pattern = patterns[pi];

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    let shown = "";
    const frame = (now: number) => {
      elapsed.current += now - last;
      last = now;
      const ms = reduced ? Math.floor(elapsed.current / 1000) * 1000 : elapsed.current;
      const loc = locate(pattern, ms);
      if (orb.current && !reduced) {
        let s = scaleAt(pattern, loc.i, loc.t);
        if (elapsed.current < SETTLE_MS) s = READY + (s - READY) * ease(elapsed.current / SETTLE_MS);
        orb.current.style.transform = `scale(${s.toFixed(4)})`;
      }
      // Ring fills through the current phase; never fully empty so the cap shows.
      ring.current?.style.setProperty("stroke-dashoffset", (1 - Math.max(loc.t, 0.004)).toFixed(4));
      line.current?.style.setProperty("--p", loc.p.toFixed(4));
      const key = `${loc.i}-${loc.left}-${loc.cycle}`;
      if (key !== shown) {
        shown = key;
        setView({ i: loc.i, left: loc.left, cycle: loc.cycle });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [running, pattern, reduced]);

  const reset = (next = pi) => {
    setRunning(false);
    elapsed.current = 0;
    setView({ i: -1, left: 0, cycle: 0 });
    if (orb.current) orb.current.style.transform = "";
    ring.current?.style.setProperty("stroke-dashoffset", "1");
    line.current?.style.setProperty("--p", "0");
    setPi(next);
  };

  const total = pattern.phases.reduce((a, ph) => a + ph.secs, 0);
  const phase = view.i >= 0 ? pattern.phases[view.i] : null;
  const started = view.i >= 0;
  const state = phase ? phase.label.toLowerCase() : "ready";
  const goLabel = running ? "Pause" : started ? "Resume" : "Start";

  return (
    <div className={`pacer is-${state}${running ? " is-running" : ""}`} role="group" aria-label={`${pattern.name} breathing pacer`}>
      {patterns.length > 1 ? (
        <div className="pacer-tabs" role="tablist" aria-label="Choose a pattern">
          {patterns.map((p, k) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={k === pi}
              className={k === pi ? "on" : ""}
              onClick={() => reset(k)}
              type="button"
            >
              {p.short}
            </button>
          ))}
        </div>
      ) : (
        <div className="pacer-title">
          <strong>{pattern.name}</strong>
          <span>1 count = 1 second</span>
        </div>
      )}

      <div className="pacer-stage">
        <svg className="pacer-dial" viewBox="0 0 200 200" aria-hidden="true">
          <circle className="dial-guide" cx="100" cy="100" r="76" />
          <circle className="dial-guide" cx="100" cy="100" r="48.6" />
          <circle className="dial-track" cx="100" cy="100" r="93" />
          <circle className="dial-prog" ref={ring} cx="100" cy="100" r="93" pathLength={1} />
        </svg>
        <div className="pacer-orb" ref={orb} aria-hidden="true" />
        <div className="pacer-readout">
          <span className="pacer-phase" aria-live="polite">
            {phase ? phase.label : "Ready"}
          </span>
          <span className="pacer-count" aria-hidden="true">
            {phase ? view.left : pattern.short}
          </span>
          <span className="pacer-sub" aria-hidden="true">
            {phase ? pattern.short : `${total} s a breath`}
          </span>
        </div>
      </div>

      <div className="pacer-line" ref={line} aria-label={pattern.phases.map((ph) => `${ph.label} ${ph.secs} seconds`).join(", ")} role="img">
        <div className="pl-bar">
          {pattern.phases.map((ph, k) => (
            <span key={k} className={`ph-${ph.label.toLowerCase()}${view.i === k ? " on" : ""}`} style={{ flexGrow: ph.secs }} />
          ))}
          <span className="pl-head" />
        </div>
        <div className="pl-labels" aria-hidden="true">
          {pattern.phases.map((ph, k) => (
            <span key={k} className={view.i === k ? "on" : ""} style={{ flexGrow: ph.secs }}>
              {ph.label} <b>{ph.secs}s</b>
            </span>
          ))}
        </div>
      </div>

      <div className="pacer-controls">
        <button
          type="button"
          className="pacer-reset"
          onClick={() => reset()}
          aria-label="Reset"
          disabled={!started}
          tabIndex={started ? 0 : -1}
        >
          <ResetIcon />
        </button>
        <button type="button" className="pacer-go" onClick={() => setRunning((r) => !r)} aria-label={goLabel}>
          {running ? <PauseIcon /> : <PlayIcon />}
          <span>{goLabel}</span>
        </button>
        <span className="pacer-cycles" aria-hidden="true">
          {view.cycle > 0 ? `×${view.cycle}` : ""}
        </span>
      </div>
    </div>
  );
}
