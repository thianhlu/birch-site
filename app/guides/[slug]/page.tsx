import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreathPacer from "../../components/BreathPacer";
import { SiteFooter, SiteNav, StoreBadge } from "../../components/Chrome";
import { GUIDES, getGuide } from "../data";
import { PATTERNS } from "../patterns";
import { guideJsonLd, ogUrl } from "../schema";
import Inline, { NoBreak } from "../Inline";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  const url = `/guides/${g.slug}`;
  const image = { url: ogUrl(g.slug), width: 1200, height: 630, alt: `${g.h1}, a Birch breathing guide` };
  return {
    title: { absolute: g.title },
    description: g.description,
    alternates: {
      canonical: url,
      types: { "text/markdown": `${url}.md` },
    },
    openGraph: {
      type: "article",
      url,
      title: g.title,
      description: g.description,
      siteName: "Birch",
      locale: "en_US",
      publishedTime: g.published,
      modifiedTime: g.updated,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: g.title, description: g.description, images: [image] },
  };
}

const fmtDate = (d: string) =>
  new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const patterns = g.patterns.map((id) => PATTERNS[id]);
  const related = g.related.map((r) => getGuide(r)!);

  return (
    <>
      <SiteNav />
      <main className="guide">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(g)) }} />
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li aria-current="page">{g.h1}</li>
          </ol>
        </nav>

        <div className="guide-top">
          <header className="guide-head">
            <p className="kicker">{g.kicker}</p>
            <h1><NoBreak text={g.h1} /></h1>
            <div className="answer" role="note" aria-label="Quick answer">
              <span className="answer-tag">Quick answer</span>
              <p>{g.answer}</p>
            </div>
            <p className="byline">
              By Birch · Updated <time dateTime={g.updated}>{fmtDate(g.updated)}</time>
            </p>
          </header>
          <aside className="guide-pacer" aria-label="Try it now">
            <BreathPacer patterns={patterns} />
          </aside>
        </div>

        <article className="guide-body">
          <section id="steps" aria-labelledby="steps-h">
            <h2 id="steps-h">{g.stepsHeading}</h2>
            <ol className="steps">
              {g.steps.map((s, i) => (
                <li key={s.name} id={`step-${i + 1}`}>
                  <div className="step-head">
                    <h3>{s.name}</h3>
                    {s.time && <span className="step-time">{s.time}</span>}
                  </div>
                  <p><Inline text={s.text} /></p>
                </li>
              ))}
            </ol>
          </section>

          {g.sections.map((sec) => (
            <section key={sec.id} id={sec.id} aria-labelledby={`${sec.id}-h`}>
              <h2 id={`${sec.id}-h`}>{sec.heading}</h2>
              {sec.body?.map((p, i) => <p key={i}><Inline text={p} /></p>)}
              {sec.bullets && (
                <ul>
                  {sec.bullets.map((b, i) => <li key={i}><Inline text={b} /></li>)}
                </ul>
              )}
            </section>
          ))}

          <section id="faq" aria-labelledby="faq-h">
            <h2 id="faq-h">Frequently asked questions</h2>
            <div className="faq-list guide-faq">
              {g.faqs.map(([q, a]) => (
                <details key={q}>
                  <summary><h3>{q}</h3></summary>
                  <p><Inline text={a} /></p>
                </details>
              ))}
            </div>
          </section>

          <section className="guide-cta" aria-labelledby="cta-h">
            <div>
              <h2 id="cta-h">Breathe along with Birch</h2>
              <p>
                Birch paces {patterns.length === 1 ? patterns[0].name : "every pattern on this page"} for you on iPhone,
                and on Apple Watch with gentle haptic cues, so you can keep your eyes closed. Keep small daily
                habits beside your breathing. Free, with no ads, no account, and no subscription.
              </p>
              <StoreBadge />
            </div>
          </section>

          <section className="related" aria-labelledby="related-h">
            <h2 id="related-h">More breathing guides</h2>
            <ul className="guide-cards">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/guides/${r.slug}`}>
                    <span className="gc-kicker">{r.kicker}</span>
                    <strong><NoBreak text={r.h1} /></strong>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="related-more">
              <Link href="/guides">All guides</Link> · <Link href="/">About the Birch app</Link>
            </p>
          </section>

          <section className="sources" aria-labelledby="sources-h">
            <h2 id="sources-h">Sources</h2>
            <ol>
              {g.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ol>
            <p className="fineprint">
              This guide is for general wellness and education. Birch is not a substitute for professional medical
              advice. Stop if you feel dizzy or unwell, and talk to a clinician about any health concern.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
