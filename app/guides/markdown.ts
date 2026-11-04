import { SITE, APP } from "../components/Chrome";
import { GUIDES, getGuide, type Guide } from "./data";

const abs = (s: string) => s.replace(/\]\(\//g, `](${SITE}/`);

/** Markdown mirror of a guide for LLMs and other plain-text readers. */
export function guideMarkdown(g: Guide) {
  const out: string[] = [];
  out.push(`# ${g.h1}`, "");
  out.push(`> ${g.answer}`, "");
  out.push(`Canonical: ${SITE}/guides/${g.slug}  `, `Updated: ${g.updated}  `, `Publisher: Birch (Tsukemen.io)`, "");
  out.push(`## ${g.stepsHeading}`, "");
  g.steps.forEach((s, i) => out.push(`${i + 1}. **${s.name}**${s.time ? ` (${s.time})` : ""}: ${abs(s.text)}`));
  out.push("");
  for (const sec of g.sections) {
    out.push(`## ${sec.heading}`, "");
    sec.body?.forEach((p) => out.push(abs(p), ""));
    if (sec.bullets) {
      sec.bullets.forEach((b) => out.push(`- ${abs(b)}`));
      out.push("");
    }
  }
  out.push("## FAQ", "");
  g.faqs.forEach(([q, a]) => out.push(`### ${q}`, "", abs(a), ""));
  out.push("## Practice with Birch", "");
  out.push(
    `Birch is a free iPhone and Apple Watch app with six breathing patterns (Weil Method 4-7-8, Box 4-4-4-4, Gentle Wave 7-11, Balance 3-3-6-3, Heart Coherence 6-6, Slow-Paced 4-6) and simple daily habit tracking. No ads, no account, no subscription. App Store: ${APP}`,
    "",
  );
  out.push("## Related guides", "");
  g.related.map((r) => getGuide(r)!).forEach((r) => out.push(`- [${r.h1}](${SITE}/guides/${r.slug})`));
  out.push("");
  out.push("## Sources", "");
  g.sources.forEach((s) => out.push(`- [${s.label}](${s.url})`));
  out.push("", "---", "", "Birch supports general wellness and is not a substitute for professional medical advice.", "");
  return out.join("\n");
}

export const allGuideSlugs = () => GUIDES.map((g) => g.slug);
