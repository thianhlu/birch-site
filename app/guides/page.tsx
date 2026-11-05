import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter, SiteNav, StoreBadge } from "../components/Chrome";
import { GUIDES, GUIDES_INDEX } from "./data";
import { indexJsonLd, ogUrl } from "./schema";
import { NoBreak } from "./Inline";
import { PATTERNS } from "./patterns";
import PhaseBar from "./PhaseBar";
import { visualFor } from "./visuals";

export const metadata: Metadata = {
  title: { absolute: GUIDES_INDEX.title },
  description: GUIDES_INDEX.description,
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: "/guides",
    title: GUIDES_INDEX.title,
    description: GUIDES_INDEX.description,
    siteName: "Birch",
    locale: "en_US",
    images: [{ url: ogUrl("index"), width: 1200, height: 630, alt: "Birch breathing guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: GUIDES_INDEX.title,
    description: GUIDES_INDEX.description,
    images: [ogUrl("index")],
  },
};

const table = [
  ["weil", "4-7-8 (Weil Method)", "In 4 · Hold 7 · Out 8", "~3", "Short set of 4 breaths; winding down", "/guides/4-7-8-breathing"],
  ["box", "Box", "In 4 · Hold 4 · Out 4 · Hold 4", "~4", "Steady daytime reset", "/guides/box-breathing"],
  ["wave", "7-11 (Gentle Wave)", "In 7 · Out 11", "~3", "No holds; several minutes", "/guides/7-11-breathing"],
  ["coherence", "Coherent (Heart Coherence)", "In 6 · Out 6", "5", "Even, meditative sessions", "/guides/coherent-breathing"],
  ["slow", "4-6 (Slow-Paced)", "In 4 · Out 6", "6", "Easiest long exhale; beginners", "/guides/4-6-breathing"],
  ["balance", "Balance 3-3-6-3", "In 3 · Hold 3 · Out 6 · Hold 3", "4", "Short holds with a longer exhale", ""],
] as const;

export default function GuidesIndex() {
  const patternGuides = GUIDES.slice(0, 5);
  const topicGuides = GUIDES.slice(5);
  return (
    <>
      <SiteNav />
      <main className="guide guides-index">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indexJsonLd()) }} />
        <div className="ghero index-hero">
          <div className="ihero-frame">
            <Image
              className="ihero-bg"
              src="/photos/sky.webp"
              alt="A calm sky with soft clouds above birch trees"
              fill
              priority
              sizes="100vw"
            />
            <header className="ihero-copy">
              <nav className="crumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-current="page">Guides</li>
                </ol>
              </nav>
              <p className="kicker">Free guides from Birch</p>
              <h1 className="display">Breathing guides</h1>
              <p>
                Step-by-step guides to the breathing patterns in Birch, each with a live pacer you can follow on the
                page. Pick one, try it for a minute, and keep the one you&apos;ll actually do.
              </p>
              <ul className="ihero-chips" aria-label="At a glance">
                <li>8 guides</li>
                <li>6 patterns</li>
                <li>Live pacer on every page</li>
              </ul>
            </header>
          </div>
        </div>

        <section aria-labelledby="patterns-h" className="index-block">
          <header className="band-head">
            <span className="eyebrow">Patterns</span>
            <h2 id="patterns-h">Breathing patterns</h2>
          </header>
          <ul className="pcards">
            {patternGuides.map((g, i) => {
              const v = visualFor(g.slug);
              const p = PATTERNS[g.patterns[0]];
              return (
                <li key={g.slug} style={{ "--tone": v.tone, "--tone-ink": v.ink } as CSSProperties}>
                  <Link href={`/guides/${g.slug}`}>
                    <span className="pcard-photo">
                      <Image src={v.photo} alt="" width={864} height={1152} sizes="(max-width: 880px) 100vw, 380px" loading={i < 3 ? "eager" : "lazy"} />
                      <span className="float-chip pcard-chip">{p.short === "Box" ? "4-4-4-4" : p.short}</span>
                    </span>
                    <span className="pcard-body">
                      <span className="gc-kicker">{g.kicker}</span>
                      <strong><NoBreak text={g.h1} /></strong>
                      <span className="gc-desc">{g.answer.split(". ")[0]}.</span>
                      <PhaseBar pattern={p} mini />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="compare-h" className="index-block band band-white">
          <div className="band-inner">
            <header className="band-head">
              <span className="eyebrow">Side by side</span>
              <h2 id="compare-h">Compare the patterns</h2>
            </header>
            <div className="table-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th scope="col">Pattern</th>
                    <th scope="col">Timing (seconds)</th>
                    <th scope="col">Breaths/min</th>
                    <th scope="col">Good for</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(([id, name, timing, bpm, good, href]) => (
                    <tr key={name}>
                      <th scope="row">
                        {href ? <Link href={href}>{name}</Link> : <span>{name}</span>}
                      </th>
                      <td>
                        <span className="timing">{timing}</span>
                        <PhaseBar pattern={PATTERNS[id]} mini />
                      </td>
                      <td className="bpm">{bpm}</td>
                      <td>{good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="legend" aria-hidden="true">
              <span className="ph-inhale">Inhale</span>
              <span className="ph-hold">Hold</span>
              <span className="ph-exhale">Exhale</span>
            </div>
            <p className="table-note">
              One count is one second in Birch, so each bar is drawn to scale. <strong>Balance 3-3-6-3</strong> is
              in the app and on <Link href="/guides/apple-watch-breathing">Apple Watch</Link>; it doesn&apos;t have
              its own guide yet.
            </p>
          </div>
        </section>

        <section aria-labelledby="topics-h" className="index-block">
          <header className="band-head">
            <span className="eyebrow">Topics</span>
            <h2 id="topics-h">Sleep, Apple Watch, and habits</h2>
          </header>
          <ul className="tcards">
            {topicGuides.map((g) => {
              const v = visualFor(g.slug);
              return (
                <li key={g.slug} style={{ "--tone": v.tone, "--tone-ink": v.ink } as CSSProperties}>
                  <Link href={`/guides/${g.slug}`}>
                    <Image src={v.photo} alt="" width={864} height={1152} sizes="(max-width: 880px) 100vw, 380px" loading="lazy" />
                    <span className="tcard-label">
                      <span className="gc-kicker">{g.kicker}</span>
                      <strong><NoBreak text={g.h1} /></strong>
                      <span className="gc-desc">{g.answer.split(". ")[0]}.</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="final guide-final" aria-labelledby="cta-h">
          <header className="section-head">
            <h2 id="cta-h" className="display">Every pattern, on your iPhone and wrist</h2>
            <p>
              Birch paces all six patterns for you, with haptic cues on Apple Watch, and keeps small daily habits
              beside your breathing. Free, with no ads, no account, and no subscription.
            </p>
            <StoreBadge />
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
          <p className="fineprint">
            Birch supports general wellness and is not a substitute for professional medical advice.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
