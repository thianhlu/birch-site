import Link from "next/link";
import { Fragment } from "react";

/** Renders the tiny inline syntax used in guide data: [text](href) and **bold**. */
export default function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href}>
              <NoBreak text={label} />
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              <NoBreak text={label} />
            </a>
          );
        }
        const bold = p.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}><NoBreak text={bold[1]} /></strong>;
        return <NoBreak key={i} text={p} />;
      })}
    </>
  );
}

/** Keeps patterns like "4-7-8" or "7-11" on one line. */
export function NoBreak({ text }: { text: string }) {
  const parts = text.split(/(\d+(?:-\d+)+)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\d+(?:-\d+)+$/.test(p) ? (
          <span key={i} className="nowrap">{p}</span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
