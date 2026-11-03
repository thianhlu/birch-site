import Image from "next/image";
import Link from "next/link";
import MoreFeatures from "./components/MoreFeatures";
import Reveal from "./components/Reveal";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";
const PRIVACY =
  "https://docs.google.com/document/d/1lAYHHEQAuaKjcjjFguUm-VnnO9p8V4lCfYc6BOHUVH4/edit?usp=sharing";
const SUPPORT =
  "https://docs.google.com/forms/d/e/1FAIpQLScDG6nD1RzDc5NEO31206FtgrPoTFgAzyPUReW3FoJSfIYDbg/viewform";

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
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Birch: Breathe, Relax & Sleep",
  alternateName: "Birch",
  operatingSystem: "iOS, watchOS",
  applicationCategory: "HealthApplication",
  url: "https://birch-breathe.vercel.app",
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

function AppleGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 20" width={size * 0.8} height={size} aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.2 10.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.3.9 1.2 1.9 2.6 3.3 2.6 1.3 0 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.2 3.2-2.5.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.5-1-2.5-3.8zM11 3.8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.3-.6 3-1.6z"
      />
    </svg>
  );
}

function StoreBadge({ light = false }: { light?: boolean }) {
  return (
    <a
      className={light ? "store-badge light" : "store-badge"}
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AppleGlyph size={22} />
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
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

function Phone({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "320px",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <span className="island" aria-hidden="true" />
      <Image src={src} alt={alt} width={800} height={1272} priority={priority} sizes={sizes} />
    </div>
  );
}

function Watch({ className = "" }: { className?: string }) {
  return (
    <div className={`watch ${className}`} aria-hidden="true">
      <span className="watch-band top" />
      <span className="watch-band bottom" />
      <span className="watch-crown" />
      <div className="watch-case">
        <div className="watch-screen">
          <span className="watch-time">9:41</span>
          <span className="watch-orb" />
          <span className="watch-label">Breathe</span>
        </div>
      </div>
    </div>
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
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main">
          <Link className="brand" href="/">
            <Image src="/images/birch-mark.png" alt="" width={24} height={24} />
            <span>Birch</span>
          </Link>
          <div className="nav-links">
            <a href="#breathe">Breathing</a>
            <a href="#habits">Habits</a>
            <a href="#watch">Watch</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href={APP} target="_blank" rel="noopener noreferrer">
            Get Birch
          </a>
        </nav>
      </header>

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
              src="/photos/sky.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <div className="aurora" aria-hidden="true" />
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
              <StoreBadge />
              <RatingLine />
            </div>
            <div className="hero-devices">
              <Phone
                className="hero-phone"
                src="/images/screen-breathe.webp"
                alt="A box breathing session in Birch"
                priority
                sizes="(max-width: 880px) 62vw, 330px"
              />
              <Watch className="hero-watch" />
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
          <a className="app-card" href={APP} target="_blank" rel="noopener noreferrer">
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

        {/* Works with */}
        <section className="works reveal">
          <h2>Works with</h2>
          <ul>
            <li>
              <AppleGlyph size={16} /> iPhone
            </li>
            <li>
              <AppleGlyph size={16} /> Watch
            </li>
            <li>
              <span className="heart" aria-hidden="true">♥</span> Apple Health
            </li>
          </ul>
        </section>

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
          <div className="moments" tabIndex={0} aria-label="Moments with Birch">
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
                src="/images/screen-breathe.webp"
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
                src="/images/screen-techniques.webp"
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
                src="/images/screen-habits.webp"
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
            <header className="section-head on-dark reveal">
              <span className="new-pill">New in Birch 3.5</span>
              <h2 className="display">
                Now on
                <br />
                Apple Watch
              </h2>
              <p>
                Take a breathing break right from your wrist. Gentle haptic cues
                pace each breath, so you can keep your eyes closed.
              </p>
            </header>
            <article className="watch-hero reveal">
              <Image
                src="/photos/wrist.webp"
                alt="A wrist with a smartwatch resting on a knee in a misty birch forest"
                fill
                sizes="(max-width: 880px) 100vw, 1180px"
              />
              <div className="watch-hero-copy">
                <h3>A breath on your wrist</h3>
                <p>Six patterns, from 1 to 5 minutes, wherever you are.</p>
              </div>
            </article>
            <div className="watch-grid">
              <article className="glow-card glow-lime reveal">
                <Watch className="card-watch" />
                <h3>Feel the rhythm</h3>
                <p>Gentle haptic cues for inhale, hold, and exhale.</p>
              </article>
              <article className="glow-card glow-blue reveal">
                <div className="sync" aria-hidden="true">
                  <span>⌚︎</span>
                  <i />
                  <span>📱</span>
                  <i />
                  <span className="heart">♥</span>
                </div>
                <h3>Syncs to your iPhone</h3>
                <p>
                  Completed sessions sync to Birch on iPhone and can save Mindful
                  Minutes to Apple Health.
                </p>
              </article>
              <article className="glow-card glow-blush reveal">
                <div className="durations" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((m) => (
                    <span key={m} className={m === 3 ? "on" : ""}>
                      {m}m
                    </span>
                  ))}
                </div>
                <h3>1 to 5 minutes</h3>
                <p>Short enough for a meeting break. Requires watchOS 11 or later.</p>
              </article>
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
          <article className="privacy reveal">
            <Image
              className="privacy-mark"
              src="/images/birch-mark.png"
              alt=""
              width={371}
              height={371}
            />
            <div className="privacy-copy">
              <h2 className="display">Free, private, quiet</h2>
              <p>
                No ads, no paywall, no subscription, no account. Breathing and
                habits are both included. Nothing to sign up for, and no feed to
                keep up with.
              </p>
            </div>
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
            <h2 className="display">Ready when you are</h2>
            <p>
              Take one calm breath, then build from there. Free on the App
              Store. No ads, no account, no subscription.
            </p>
            <StoreBadge />
          </header>
          <div className="flatlay">
            <Image
              src="/photos/flatlay.webp"
              alt="Tea, an eye mask, a water bottle, a notebook, and a smartwatch laid out on a table"
              width={1280}
              height={720}
              sizes="100vw"
            />
          </div>
          <p className="fineprint">
            Birch supports general wellness and is not a substitute for
            professional medical advice.
          </p>
        </section>
      </main>

      <a className="qr-card" href={APP} target="_blank" rel="noopener noreferrer">
        <Image src="/images/appstore-qr.svg" alt="" width={64} height={64} unoptimized />
        <span>
          <strong>Get Birch for iOS</strong>
          <small>Scan to open the App Store. Free.</small>
        </span>
      </a>

      <footer className="footer">
        <div className="footer-inner">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <Image src="/images/birch-mark.png" alt="" width={22} height={22} />
              <span>Birch</span>
            </Link>
            <span>© 2026 Tsukemen.io</span>
          </div>
          <div className="foot-col">
            <h2>App</h2>
            <a href={APP} target="_blank" rel="noopener noreferrer">
              Download
            </a>
            <a href="#breathe">Breathing</a>
            <a href="#habits">Habits</a>
            <a href="#watch">Apple Watch</a>
          </div>
          <div className="foot-col">
            <h2>Help</h2>
            <a href="#faq">FAQ</a>
            <a href={SUPPORT} target="_blank" rel="noopener noreferrer">
              Support
            </a>
          </div>
          <div className="foot-col">
            <h2>Legal</h2>
            <a href={PRIVACY} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
