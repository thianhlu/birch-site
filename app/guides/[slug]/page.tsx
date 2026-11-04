import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import BreathPacer from "../../components/BreathPacer";
import { SiteFooter, SiteNav, StoreBadge } from "../../components/Chrome";
import { Phone, Watch } from "../../components/Devices";
import PhaseBar, { breathSecs, perMinute } from "../PhaseBar";
import { visualFor } from "../visuals";
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
  const v = visualFor(g.slug);
  const patterns = g.patterns.map((id) => PATTERNS[id]);
  const related = [...g.related, ...GUIDES.map((x) => x.slug).filter((s) => s !== g.slug && !g.related.includes(s))].map(
    (r) => getGuide(r)!,
  );
  const isWatch = g.slug === "apple-watch-breathing";
  const tone = { "--tone": v.tone, "--tone-ink": v.ink } as CSSProperties;

  return (
    <>
      <SiteNav />
      <main className="guide" style={tone}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(g)) }} />

        {/* Hero: solid pastel frame, display headline, quick answer, photo panel with a glass pacer. */}
        <div className="ghero">
          <div className="ghero-frame">
            <header className="guide-head">
              <nav className="crumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/guides">Guides</Link></li>
                  <li aria-current="page">{g.h1}</li>
                </ol>
              </nav>
              <p className="kicker">{g.kicker}</p>
              <h1><NoBreak text={g.h1} /></h1>
              <div className="answer" role="note" aria-label="Quick answer">
                <span className="answer-tag">Quick answer</span>
                <p><NoBreak text={g.answer} /></p>
              </div>
              <p className="byline">
                By Birch · Updated <time dateTime={g.updated}>{fmtDate(g.updated)}</time>
              </p>
            </header>
            <aside className={`ghero-visual${v.dock === "start" ? " dock-start" : ""}`} aria-label="Try it now">
              <Image
                className="ghero-photo"
                src={v.photo}
                alt={v.alt}
                fill
                priority
                sizes="(max-width: 880px) calc(100vw - 32px), 540px"
              />
              <span className="float-chip gchip-1">{v.chips[0]}</span>
              <span className={`float-chip gchip-2${isWatch ? " is-req" : ""}`}>{v.chips[1]}</span>
              <div className="guide-pacer">
                <BreathPacer patterns={patterns} />
              </div>
            </aside>
          </div>
        </div>

        <article className="guide-body">
          {/* Steps on a white band: timing bars, then a numbered timeline. */}
          <section id="steps" className="band band-white" aria-labelledby="steps-h">
            <div className="band-inner">
              <header className="band-head">
                <span className="eyebrow">Step by step</span>
                <h2 id="steps-h">{g.stepsHeading}</h2>
              </header>
              <div className="rhythm">
                {patterns.map((p) => (
                  <div className="rhythm-row" key={p.id}>
                    <div className="rhythm-meta">
                      <strong>{p.name}</strong>
                      <span>
                        {breathSecs(p)} s per breath · about {perMinute(p)} a minute
                      </span>
                    </div>
                    <PhaseBar pattern={p} />
                  </div>
                ))}
              </div>
              <ol className="steps">
                {g.steps.map((s, i) => (
                  <li key={s.name} id={`step-${i + 1}`}>
                    <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div className="step-card">
                      <div className="step-head">
                        <h3>{s.name}</h3>
                        {s.time && <span className="step-time">{s.time}</span>}
                      </div>
                      <p><Inline text={s.text} /></p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {g.sections.map((sec, idx) => {
            const isBirch = sec.id === "with-birch" || sec.id === "birch";
            const content = (
              <>
                {sec.body?.map((p, i) => <p key={i}><Inline text={p} /></p>)}
                {sec.bullets && (
                  <ul className={sec.id === "mistakes" ? "card-list" : undefined}>
                    {sec.bullets.map((b, i) => <li key={i}><Inline text={b} /></li>)}
                  </ul>
                )}
              </>
            );
            if (isBirch) {
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className={isWatch ? "gdevice is-dark" : "gdevice"}
                  aria-labelledby={`${sec.id}-h`}
                >
                  <div className="gdevice-copy">
                    <span className="eyebrow">{isWatch ? "On your wrist" : "In the app"}</span>
                    <h2 id={`${sec.id}-h`}>{sec.heading}</h2>
                    {content}
                    {isWatch && <span className="watch-req">Requires watchOS 11 or later.</span>}
                    <StoreBadge light={isWatch} location="guide_cta" guideSlug={g.slug} />
                  </div>
                  <div className="gdevice-art">
                    <Phone
                      screen={v.phone}
                      alt="The Birch app on iPhone"
                      className="gd-phone"
                      sizes="(max-width: 880px) 190px, 260px"
                    />
                    <Watch
                      screen={v.watch}
                      alt="Birch on Apple Watch"
                      className="gd-watch"
                      sizes="(max-width: 880px) 120px, 170px"
                    />
                  </div>
                </section>
              );
            }
            return (
              <div className="prose-wrap" key={sec.id}>
                <section id={sec.id} className="prose" aria-labelledby={`${sec.id}-h`}>
                  <h2 id={`${sec.id}-h`}>{sec.heading}</h2>
                  {content}
                </section>
                {idx === 0 && (
                  <figure className="pull">
                    <blockquote>
                      <p>{v.quote}</p>
                    </blockquote>
                  </figure>
                )}
              </div>
            );
          })}

          <section id="faq" className="gfaq" aria-labelledby="faq-h">
            <header className="band-head center">
              <span className="eyebrow">FAQ</span>
              <h2 id="faq-h">Frequently asked questions</h2>
            </header>
            <div className="faq-list guide-faq">
              {g.faqs.map(([q, a]) => (
                <details key={q}>
                  <summary><h3>{q}</h3></summary>
                  <p><Inline text={a} /></p>
                </details>
              ))}
            </div>
          </section>

          <section className="related" aria-labelledby="related-h">
            <header className="band-head center">
              <span className="eyebrow">Keep going</span>
              <h2 id="related-h">More breathing guides</h2>
            </header>
            <ul className="moments guide-row">
              {related.map((r) => (
                <li key={r.slug} className="moment">
                  <Link href={`/guides/${r.slug}`}>
                    <Image src={visualFor(r.slug).photo} alt="" width={864} height={1152} sizes="270px" loading="lazy" />
                    <span className="gr-label">
                      <span className="gc-kicker">{r.kicker.replace("Breathing guide · ", "")}</span>
                      <strong><NoBreak text={r.h1} /></strong>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="related-more">
              <Link href="/guides">All guides</Link> · <Link href="/">About the Birch app</Link>
            </p>
          </section>

          <section className="final guide-final" aria-labelledby="cta-h">
            <header className="section-head">
              <h2 id="cta-h" className="display">Breathe along with Birch</h2>
              <p>
                Birch paces {patterns.length === 1 ? patterns[0].name : "every pattern on this page"} for you on iPhone,
                and on Apple Watch with gentle haptic cues, so you can keep your eyes closed. Keep small daily
                habits beside your breathing. Free, with no ads, no account, and no subscription.
              </p>
              <StoreBadge location="guide_final_cta" guideSlug={g.slug} />
            </header>
            <div className="flatlay">
              <Image
                src="/photos/flatlay.webp"
                alt="Tea, an eye mask, a water bottle, a notebook, and a smartwatch laid out on a table"
                width={2560}
                height={1440}
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={86}
                loading="lazy"
              />
            </div>
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
