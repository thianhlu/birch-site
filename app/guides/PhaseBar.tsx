import type { PacerPattern } from "../components/BreathPacer";

/** A static timing bar: one segment per phase, width proportional to its seconds. */
export default function PhaseBar({ pattern, mini = false }: { pattern: PacerPattern; mini?: boolean }) {
  const total = pattern.phases.reduce((a, ph) => a + ph.secs, 0);
  const label = pattern.phases.map((ph) => `${ph.label} ${ph.secs}`).join(", ");
  return (
    <div className={mini ? "pbar mini" : "pbar"} role="img" aria-label={`${pattern.name}: ${label}. ${total} seconds per breath.`}>
      {pattern.phases.map((ph, k) => (
        <span key={k} className={`ph-${ph.label.toLowerCase()}`} style={{ flexGrow: ph.secs }}>
          {!mini && (
            <>
              <b>{ph.secs}s</b> {ph.label}
            </>
          )}
        </span>
      ))}
    </div>
  );
}

export const breathSecs = (p: PacerPattern) => p.phases.reduce((a, ph) => a + ph.secs, 0);
export const perMinute = (p: PacerPattern) => Math.round((60 / breathSecs(p)) * 10) / 10;
