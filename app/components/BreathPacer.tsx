"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export type Phase = { label: "Inhale" | "Hold" | "Exhale"; secs: number };
export type PacerPattern = { id: string; name: string; short: string; phases: Phase[] };

const LO = 0.5;
const HI = 1;
const ease = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

function locate(p: PacerPattern, ms: number) {
  const cycleMs = p.phases.reduce((a, ph) => a + ph.secs, 0) * 1000;
  const inCycle = ms % cycleMs;
  const cycle = Math.floor(ms / cycleMs);
  let acc = 0;
  for (let i = 0; i < p.phases.length; i++) {
    const len = p.phases[i].secs * 1000;
    if (inCycle < acc + len) {
      return { i, t: (inCycle - acc) / len, left: Math.ceil((acc + len - inCycle) / 1000), cycle };
    }
    acc += len;
  }
  return { i: 0, t: 0, left: p.phases[0].secs, cycle };
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

/**
 * An in-page breathing pacer. One count = one second. The circle grows on the
 * inhale, rests on holds, and shrinks on the exhale. With reduced motion the
 * circle stays still and only the words and countdown change.
 */
export default function BreathPacer({ patterns }: { patterns: PacerPattern[] }) {
  const [pi, setPi] = useState(0);
  const [running, setRunning] = useState(false);
  const [view, setView] = useState({ i: -1, left: 0, cycle: 0 });
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const orb = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLOListElement>(null);
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
      const loc = locate(pattern, elapsed.current);
      if (orb.current) {
        const s = reduced ? 0.78 : scaleAt(pattern, loc.i, loc.t);
        orb.current.style.transform = `scale(${s.toFixed(4)})`;
      }
      if (bar.current && !reduced) {
        const cycleMs = pattern.phases.reduce((a, ph) => a + ph.secs, 0) * 1000;
        bar.current.style.setProperty("--p", ((elapsed.current % cycleMs) / cycleMs).toFixed(4));
      }
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
    if (orb.current) orb.current.style.transform = `scale(${reduced ? 0.78 : LO})`;
    bar.current?.style.setProperty("--p", "0");
    setPi(next);
  };

  const total = pattern.phases.reduce((a, ph) => a + ph.secs, 0);
  const perMin = Math.round((60 / total) * 10) / 10;
  const phase = view.i >= 0 ? pattern.phases[view.i] : null;

  return (
    <div className="pacer" role="group" aria-label={`${pattern.name} breathing pacer`}>
      {patterns.length > 1 && (
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
      )}
      <div className={`pacer-stage${phase ? " is-" + phase.label.toLowerCase() : ""}`}>
        <div className="pacer-ring" aria-hidden="true" />
        <div className="pacer-orb" ref={orb} aria-hidden="true" />
        <div className="pacer-readout">
          <span className="pacer-phase" aria-live="polite">
            {phase ? phase.label : running ? "" : "Ready"}
          </span>
          <span className="pacer-count" aria-hidden="true">
            {phase ? view.left : pattern.short}
          </span>
        </div>
      </div>
      <ol className={`pacer-phases${running && !reduced ? " is-running" : ""}`} aria-label="Pattern" ref={bar}>
        {pattern.phases.map((ph, k) => (
          <li
            key={k}
            className={`ph-${ph.label.toLowerCase()}${view.i === k ? " on" : ""}`}
            style={{ flexGrow: ph.secs }}
          >
            {ph.label} <b>{ph.secs}</b>
          </li>
        ))}
      </ol>
      <div className="pacer-controls">
        <button type="button" className="pacer-go" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : view.i >= 0 ? "Resume" : "Start"}
        </button>
        {view.i >= 0 && (
          <button type="button" className="pacer-reset" onClick={() => reset()}>
            Reset
          </button>
        )}
      </div>
      <p className="pacer-note">
        {pattern.name}. One count = one second, about {perMin} breaths a minute
        {view.cycle > 0 ? ` · ${view.cycle} ${view.cycle === 1 ? "breath" : "breaths"} done` : ""}.
      </p>
    </div>
  );
}
