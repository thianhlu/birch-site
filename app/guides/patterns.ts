import type { PacerPattern } from "../components/BreathPacer";

/** Birch's in-app patterns (phase order confirmed by the developer). One count = one second. */
export const PATTERNS: Record<string, PacerPattern> = {
  weil: {
    id: "weil",
    name: "Weil Method 4-7-8",
    short: "4-7-8",
    phases: [
      { label: "Inhale", secs: 4 },
      { label: "Hold", secs: 7 },
      { label: "Exhale", secs: 8 },
    ],
  },
  box: {
    id: "box",
    name: "Box Breathing 4-4-4-4",
    short: "Box",
    phases: [
      { label: "Inhale", secs: 4 },
      { label: "Hold", secs: 4 },
      { label: "Exhale", secs: 4 },
      { label: "Hold", secs: 4 },
    ],
  },
  wave: {
    id: "wave",
    name: "Gentle Wave 7-11",
    short: "7-11",
    phases: [
      { label: "Inhale", secs: 7 },
      { label: "Exhale", secs: 11 },
    ],
  },
  balance: {
    id: "balance",
    name: "Balance 3-3-6-3",
    short: "3-3-6-3",
    phases: [
      { label: "Inhale", secs: 3 },
      { label: "Hold", secs: 3 },
      { label: "Exhale", secs: 6 },
      { label: "Hold", secs: 3 },
    ],
  },
  coherence: {
    id: "coherence",
    name: "Heart Coherence 6-6",
    short: "6-6",
    phases: [
      { label: "Inhale", secs: 6 },
      { label: "Exhale", secs: 6 },
    ],
  },
  slow: {
    id: "slow",
    name: "Slow-Paced 4-6",
    short: "4-6",
    phases: [
      { label: "Inhale", secs: 4 },
      { label: "Exhale", secs: 6 },
    ],
  },
};
