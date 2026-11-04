"use client";

import Image from "next/image";
import Link from "next/link";
import MoreFeatures from "./components/MoreFeatures";
import Reveal from "./components/Reveal";
import { Phone, Watch } from "./components/Devices";
import { SITE } from "./site";
import { APP, SiteFooter, SiteNav, StoreBadge } from "./components/Chrome";
import { GUIDES } from "./guides/data";
import { trackAppStoreClick } from "./PostHogProvider";

const RATING = "4.9";
const RATING_COUNT = "115";

const habits = [
  ["💧", "Drink water", "Count"],
  ["💊", "Take vitamins", "Yes/no"],
  ["📖", "Read", "Yes/no"],
  ["⏳", "Fast", "Yes/no"],
  ["🚶", "Walk", "Yes/no"],
  ["🧘", "Meditate", "Yes/no"],
  ["✨", "Your own", "Any emoji, any color"],
];

const moments = [
  { src: "/photos/window.webp", tag: "Morning · 4-7-8", alt: "A woman breathing slowly by a sunlit window" },
  { src: "/photos/water.webp", tag: "Drink water · 3 of 8", alt: "A woman pouring a glass of water in a bright kitchen" },
  { src: "/photos/sit.webp", tag: "Midday · Box breathing", alt: "A man sitting on a cushion with his eyes closed" },
  { src: "/photos/walk.webp", tag: "Walk · Done", alt: "A man walking on a path through a birch forest" },
  { src: "/photos/journal.webp", tag: "Vitamins · Done", alt: "Hands checking off a paper habit journal beside water and vitamins" },
  { src: "/photos/bed.webp", tag: "Evening · Gentle Wave 7-11", alt: "A woman resting in bed at dusk" },
];

const quotes = [
  "perfect. dont change.",
  "please dont bring in adds or forms of payment",
  "Love the simplicity",
  "Simple, ad free.",
];

const faqs = [
  [
    "What is 4-7-8 breathing?",
    "The Weil Method in Birch is inhale 4, hold 7, exhale 8. Follow the visual guide as you breathe. Birch also includes box breathing and four other patterns — pick one and follow along.",
  ],
  [
    "Is Birch free?",
    "Yes. Birch is free on the App Store. No ads, no subscription, no in-app purchases.",
  ],
  [
    "Do I need an account?",
    "No. Birch works without an account. There is nothing to sign up for.",
  ],
  [
    "Does Birch work with Apple Health?",
    "Sessions can count toward Mindful Minutes in Apple Health.",
  ],
  [
    "Is Birch on Apple Watch?",
    "Yes. Take a breathing break right from your wrist, with six breathing patterns, gentle haptic cues, and sessions from 1 to 5 minutes. Completed sessions sync to Birch on your iPhone and can save Mindful Minutes to Apple Health. Requires watchOS 11 or later.",
  ],
  [
    "Can I track habits?",
    "Yes. Drink water, take vitamins, read, fast, walk, meditate, or create your own. Yes/no or a count, logged in one tap, shown beside your breathing across your week and month.",
  ],
  [
    "Can Birch remind me about my habits?",
    "Yes. Set gentle reminders at times you choose. Missed one? Log today or update a recent day, then see breathing cycles, completed habits, streaks, and monthly summaries together. Progress without pressure.",
  ],
  [
    "How do I get help or report a bug?",
    "Use the support form at hellobirch.app/support. Tell us what happened, plus your device and Birch version if you can. Every message gets read.",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Birch: Breathe, Relax & Sleep",
  alternateName: "Birch",
  operatingSystem: "iOS, watchOS",
  applicationCategory: "HealthApplication",
  url: SITE,
  installUrl: APP,
  description:
    "Free 4-7-8 and box breathing for iPhone and Apple Watch, with simple habit tracking. No subscriptions. No ads. No account.",
  featureList: [
    "Six guided breathing techniques, including 4-7-8 and box breathing",
    "Yes/no or count-based habits with emoji and color",
    "Gentle reminders at times you choose",
    "Breathing and habits together across your week and calendar",
    "Streaks and monthly summaries",
    "Mindful Minutes in Apple Health",
    "Apple Watch breathing with gentle haptic cues",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING,
    ratingCount: RATING_COUNT,
    bestRating: "5",
  },
  author: { "@type": "Organization", name: "Tsukemen.io" },
};

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" width={size} height={size}>
          <path
            fill="currentColor"
            d="M10 1.6 12.4 7l5.8.5-4.4 3.8 1.4 5.6L10 13.8 4.8 16.9 6.2 11.3 1.8 7.5 7.6 7z"
          />
        </svg>
      ))}
    </span>
  );
}

function RatingLine({ dark = false }: { dark?: boolean }) {
  return (
    <p className={dark ? "rating-line dark" : "rating-line"}>
      <Stars />
      <span>
        {RATING} / {RATING_COUNT} ratings · Free
      </span>
    </p>
  );
}

function Laurel({ children }: { children: React.ReactNode }) {
  const leaf = (
    <svg viewBox="0 0 24 56" width="18" height="44" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="14" cy="8" rx="3" ry="6" transform="rotate(25 14 8)" />
        <ellipse cx="10" cy="19" rx="3" ry="6" transform="rotate(15 10 19)" />
        <ellipse cx="8" cy="31" rx="3" ry="6" transform="rotate(0 8 31)" />
        <ellipse cx="10" cy="43" rx="3" ry="6" transform="rotate(-25 10 43)" />
        <path d="M17 2c-9 12-11 30-1 52" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </g>
    </svg>
  );
  return (
    <div className="laurel">
      {leaf}
      <span>{children}</span>
      <span className="flip">{leaf}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <SiteNav home />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="hero">
          <div className="hero-frame">
            <Image
              className="hero-bg"
              src="/photos/hero-birch.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <div className="hero-copy">
              <h1>
                Breathe better.
                <br />
                Keep small habits.
              </h1>
              <p className="hero-sub">
                Free 4-7-8 and box breathing for iPhone and Apple Watch, with a
                few daily habits beside your breath.
              </p>
              <StoreBadge location="hero" />
              <RatingLine />
            </div>
            <div className="hero-devices">
              <Phone
                className="hero-phone"
                screen="breathe"
                alt="A box breathing session in Birch on iPhone"
                priority
                sizes="(max-width: 880px) 60vw, 320px"
              />
              <Watch
                className="hero-watch"
                screen="breathing"
                alt="Birch on Apple Watch guiding an exhale"
                sizes="(max-width: 880px) 36vw, 190px"
              />
              <div className="chip chip-a">
                <span className="chip-dot lime" />
                <span>
                  <strong>Weil Method</strong>
                  <small>Inhale 4 · Hold 7 · Exhale 8</small>
                </span>
              </div>
              <div className="chip chip-b">
                <span className="chip-emoji" aria-hidden="true">💧</span>
                <span>
                  <strong>Drink water</strong>
                  <small>3 of 8 today</small>
                </span>
              </div>
              <div className="chip chip-c">
                <span className="chip-emoji" aria-hidden="true">🫁</span>
                <span>
                  <strong>Mindful Minutes</strong>
                  <small>Saved to Apple Health</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile app card */}
        <div className="app-card-wrap">
          <a className="app-card" href={APP} target="_blank" rel="noopener noreferrer" onClick={() => trackAppStoreClick("app_card")}>
            <Image src="/images/birch-icon.png" alt="" width={56} height={56} />
            <span className="app-card-text">
              <strong>Birch</strong>
              <span>Breathe, Relax &amp; Sleep</span>
              <span className="app-card-rating">
                <Stars size={12} /> {RATING}
              </span>
            </span>
            <span className="app-card-get">Get</span>
          </a>
        </div>

        {/* Social proof + moments carousel */}
        <section className="section proof">
          <div className="laurels reveal">
            <Laurel>
              {RATING} average
              <br />
              on the App Store
            </Laurel>
            <Laurel>
              Free.
              <br />
              No ads, no account.
            </Laurel>
          </div>
          <h2 className="display reveal">
            A calm minute,
            <br />
            whenever you need one
          </h2>
          <div className="moments home-moments" tabIndex={0} aria-label="Moments with Birch">
            {moments.map((m) => (
              <figure className="moment" key={m.src}>
                <Image src={m.src} alt={m.alt} width={600} height={800} sizes="260px" />
                <figcaption>{m.tag}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Breathing */}
        <section className="section" id="breathe">
          <header className="section-head reveal">
            <h2 className="display">
              Start with
              <br />
              your breath
            </h2>
            <p>
              Choose a pattern. Set a time or a number of cycles. Follow inhale,
              hold, and exhale on screen.
            </p>
          </header>
          <div className="trio">
            <article className="tall-card tint-lime reveal">
              <div className="tall-copy">
                <h3>Follow the guide</h3>
                <p>
                  A visual guide paces every inhale, hold, and exhale, so you can
                  stop counting and just breathe.
                </p>
              </div>
              <Phone
                className="peek"
                screen="breathe"
                alt="Birch guiding an inhale during box breathing"
                sizes="(max-width: 880px) 70vw, 280px"
              />
            </article>
            <article className="tall-card tint-blue reveal">
              <div className="tall-copy">
                <h3>Six patterns</h3>
                <p>
                  Weil Method 4-7-8, box breathing, Gentle Wave, Balance, Heart
                  Coherence, and slow-paced breathing.
                </p>
              </div>
              <Phone
                className="peek"
                screen="techniques"
                alt="The six breathing techniques in Birch"
                sizes="(max-width: 880px) 70vw, 280px"
              />
            </article>
            <article className="tall-card tint-night reveal">
              <div className="tall-copy">
                <h3>Wind down at night</h3>
                <p>
                  Slow down before sleep, reset during a busy day, or take a
                  quiet minute for yourself.
                </p>
              </div>
              <div className="tall-photo">
                <Image
                  src="/photos/night.webp"
                  alt="A nightstand with a warm lamp and a cup of tea"
                  width={864}
                  height={1152}
                  sizes="(max-width: 880px) 90vw, 360px"
                />
              </div>
            </article>
          </div>
        </section>

        {/* Habits */}
        <section className="section" id="habits">
          <header className="section-head reveal">
            <h2 className="display">
              Keep small habits
              <br />
              beside it
            </h2>
            <p>
              Log today or a recent day in one tap. Yes/no or a count, with
              emoji, color, and gentle reminders.
            </p>
          </header>
          <article className="wide-card tint-sage reveal">
            <div className="wide-copy">
              <h3>One tap a day</h3>
              <p>
                Drink water, take vitamins, read, fast, walk, meditate, or make
                your own. Birch keeps them next to your breathing, not in another
                app.
              </p>
            </div>
            <div className="wide-visual habits-visual">
              <ul className="habit-list">
                {habits.map(([emoji, name, kind]) => (
                  <li key={name}>
                    <span className="habit-emoji" aria-hidden="true">
                      {emoji}
                    </span>
                    <span className="habit-name">{name}</span>
                    <span className="habit-kind">{kind}</span>
                  </li>
                ))}
              </ul>
              <Phone
                className="habit-phone"
                screen="habits"
                alt="Today's habits in Birch: daily walk, meditate, cold plunge, vitamins"
                sizes="(max-width: 880px) 60vw, 260px"
              />
            </div>
          </article>
          <article className="wide-card tint-blush reverse reveal">
            <div className="wide-visual photo-visual">
              <Image
                src="/photos/journal.webp"
                alt="Hands checking off habits in a paper journal beside water and vitamins"
                width={1152}
                height={864}
                sizes="(max-width: 880px) 92vw, 560px"
              />
              <div className="float-chip fc-1">
                <span aria-hidden="true">🔥</span> 12-day streak
              </div>
              <div className="float-chip fc-2">
                <span aria-hidden="true">🔔</span> Vitamins · 8:00 AM
              </div>
              <div className="float-chip fc-3">
                <span aria-hidden="true">📅</span> October · 24 of 31 days
              </div>
            </div>
            <div className="wide-copy">
              <h3>Progress without pressure</h3>
              <p>
                Gentle reminders at times you choose. Streaks and monthly
                summaries, with breathing and habits together across your week
                and month. Missed a day? Fill it in.
              </p>
            </div>
          </article>
        </section>

        {/* Apple Watch — dark band */}
        <section className="dark-band" id="watch">
          <div className="dark-inner">
            <header className="watch-copy on-dark reveal">
              <span className="new-pill">New in Birch 3.5</span>
              <h2 className="display">
                Now on
                <br />
                Apple Watch
              </h2>
              <p>
                Take a breathing break right from your wrist. Haptic cues pace
                each breath, so you can keep your eyes closed.
              </p>
              <ul className="watch-facts">
                <li>Six patterns</li>
                <li>1 to 5 minutes</li>
                <li>Syncs to iPhone</li>
                <li>Mindful Minutes in Apple Health</li>
              </ul>
              <small className="watch-req">Requires watchOS 11 or later.</small>
            </header>
            <div className="watch-row reveal" aria-label="Birch on Apple Watch">
              <Watch
                className="w1"
                screen="start"
                alt="Starting a one-minute slow-paced session on Apple Watch"
              />
              <Watch
                className="w2"
                screen="breathing"
                alt="An exhale in progress on Apple Watch"
              />
              <Watch
                className="w3"
                screen="patterns"
                alt="Choosing a breathing pattern on Apple Watch"
              />
            </div>
          </div>
        </section>

        {/* And there's more */}
        <section className="section" id="more">
          <header className="section-head left reveal">
            <h2 className="display">And there&rsquo;s more</h2>
            <p>Small, quiet details that make Birch easy to come back to.</p>
          </header>
          <MoreFeatures />
        </section>

        {/* Privacy */}
        <section className="section tight" id="why">
          <article className="free-band reveal">
            <p className="free-price" aria-hidden="true">$0</p>
            <div className="free-copy">
              <h2>Birch is completely free.</h2>
              <p>
                Breathing, habits, and the Apple Watch app are all included. No
                trial, nothing locked.
              </p>
            </div>
            <ul className="free-list">
              <li>No ads</li>
              <li>No subscription</li>
              <li>No in-app purchases</li>
              <li>No account</li>
            </ul>
          </article>
        </section>

        {/* Reviews */}
        <section className="section reviews" id="reviews">
          <div className="mosaic" aria-hidden="true">
            {[
              "/photos/sit.webp",
              "/photos/water.webp",
              "/photos/window.webp",
              "/photos/walk.webp",
              "/photos/bed.webp",
              "/photos/journal.webp",
            ].map((src, i) => (
              <div className={`tile t${i}`} key={src}>
                <Image src={src} alt="" width={300} height={400} sizes="160px" />
              </div>
            ))}
          </div>
          <header className="section-head reveal">
            <h2 className="display">
              Made with care.
              <br />
              Kept simple.
            </h2>
            <p>
              {RATING} stars from {RATING_COUNT} US App Store ratings. These are
              real reviews, word for word.
            </p>
          </header>
          <div className="marquee" aria-label="App Store reviews">
            <div className="marquee-track">
              {[...quotes, ...quotes, ...quotes].map((q, i) => (
                <blockquote className="review" key={i} aria-hidden={i >= quotes.length}>
                  <Stars size={16} />
                  <p>&ldquo;{q}&rdquo;</p>
                  <cite>US App Store review</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="section" id="guides">
          <header className="section-head reveal">
            <h2 className="display">Learn the patterns</h2>
            <p>
              Free step-by-step guides, each with a pacer you can follow right
              on the page.
            </p>
          </header>
          <ul className="guide-cards home-guides reveal">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`}>
                  <span className="gc-kicker">{g.kicker.replace("Breathing guide · ", "")}</span>
                  <strong>{g.h1}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <p className="related-more reveal">
            <Link href="/guides">All breathing guides</Link>
          </p>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <header className="section-head reveal">
            <h2 className="display">Questions</h2>
            <p>The short version.</p>
          </header>
          <div className="faq-list reveal">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <header className="section-head reveal">
            <h2 className="display">Your next breath is free</h2>
            <p>
              Open Birch, pick a pattern, and follow along. Add a habit
              whenever you like. Free on the App Store, with no ads, no account,
              and no subscription.
            </p>
            <StoreBadge location="final_cta" />
          </header>
          <div className="flatlay">
            <Image
              src="/photos/flatlay.webp"
              alt="Tea, an eye mask, a water bottle, a notebook, and a smartwatch laid out on a table"
              width={2560}
              height={1440}
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={86}
            />
          </div>
          <p className="fineprint">
            Birch supports general wellness and is not a substitute for
            professional medical advice.
          </p>
        </section>
      </main>

      <a className="qr-card" href={APP} target="_blank" rel="noopener noreferrer" onClick={() => trackAppStoreClick("qr_card")}>
        <Image src="/images/appstore-qr.svg" alt="" width={64} height={64} unoptimized />
        <span>
          <strong>Get Birch for iOS</strong>
          <small>Scan to open the App Store. Free.</small>
        </span>
      </a>

      <SiteFooter home />
    </>
  );
}
