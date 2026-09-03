import Image from "next/image";
import Link from "next/link";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";
const PRIVACY =
  "https://docs.google.com/document/d/1lAYHHEQAuaKjcjjFguUm-VnnO9p8V4lCfYc6BOHUVH4/edit?usp=sharing";
const SUPPORT =
  "https://docs.google.com/forms/d/e/1FAIpQLScDG6nD1RzDc5NEO31206FtgrPoTFgAzyPUReW3FoJSfIYDbg/viewform";

const techniques = [
  ["Weil Method", "4–7–8"],
  ["Box Breathing", "4–4–4–4"],
  ["Gentle Wave", "7–11"],
  ["Balance", "3–3–6–3"],
  ["Heart Coherence", "6–6"],
  ["Slow-Paced Breathing", "4–6"],
];

const habits = [
  ["💧", "Drink water", "Yes/no or a count"],
  ["💊", "Take vitamins", "Yes/no or a count"],
  ["📖", "Read", "Yes/no or a count"],
  ["⏳", "Fast", "Yes/no or a count"],
  ["🚶", "Walk", "Yes/no or a count"],
  ["🧘", "Meditate", "Yes/no or a count"],
  ["✨", "Custom", "Emoji, color, reminders"],
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
    "Can I track habits?",
    "Yes. Drink water, take vitamins, read, fast, walk, meditate, or create your own. Yes/no or a count, logged in one tap, shown beside your breathing across the week.",
  ],
];

function Stars({ size = 16 }: { size?: number }) {
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

function StoreBadge() {
  return (
    <a className="store-badge" href={APP} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 16 20" width="16" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.2 10.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.3.9 1.2 1.9 2.6 3.3 2.6 1.3 0 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.2 3.2-2.5.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.5-1-2.5-3.8zM11 3.8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.3-.6 3-1.6z"
        />
      </svg>
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
  );
}

function ProofPill() {
  return (
    <p className="proof-pill">
      <Stars />
      <span>
        <strong>4.9</strong> from 111 US ratings
      </span>
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="navpill">
          <Link className="brand" href="/">
            <Image src="/images/birch-mark.png" alt="" width={28} height={28} />
            <span>Birch</span>
          </Link>
          <nav className="nav-links" aria-label="Page">
            <a href="#breathe">Breathing</a>
            <a href="#habits">Habits</a>
            <a href="#faq">FAQ</a>
          </nav>
          <StoreBadge />
        </div>
      </header>

      <main>
        <section className="hero band wash-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <ProofPill />
              <h1>
                Breathe better
                <br />
                in minutes.
              </h1>
              <p className="lede">
                Choose a pattern. Follow the visual guide. Keep a few small daily
                habits beside your breath. No ads, no account, no subscription.
              </p>
              <div className="cta-row">
                <a className="cta" href={APP} target="_blank" rel="noopener noreferrer">
                  Get Birch free
                </a>
                <StoreBadge />
              </div>
            </div>
            <div className="hero-visual">
              <div className="shot shot-left">
                <Image src="/images/birch-ss2.jpg" alt="" width={420} height={908} />
              </div>
              <div className="shot shot-primary">
                <Image
                  src="/images/birch-ss1.jpg"
                  alt="Birch breathing session"
                  width={480}
                  height={1038}
                  priority
                />
              </div>
              <div className="shot shot-right">
                <Image src="/images/birch-ss3.jpg" alt="" width={420} height={908} />
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="breathe">
          <div className="band-inner">
            <header className="band-head">
              <h2>Six techniques. Follow the visual guide.</h2>
              <p>
                Start with 4-7-8 or box breathing. Set a time or a number of
                cycles, then follow inhale, hold, and exhale.
              </p>
            </header>
            <div className="tech-grid">
              {techniques.map(([name, ratio], i) => (
                <article className={i === 0 ? "tile featured" : "tile"} key={name}>
                  <span className="ratio">{ratio}</span>
                  <strong>{name}</strong>
                </article>
              ))}
            </div>
            <figure className="phone-stage">
              <div className="poster poster-blue">
                <Image
                  src="/images/birch-ss2.jpg"
                  alt="Six breathing techniques in Birch"
                  width={620}
                  height={1340}
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="band wash-lime" id="habits">
          <div className="band-inner">
            <header className="band-head">
              <h2>Keep small daily habits beside your breath.</h2>
              <p>
                Log today in one tap. Yes/no or a count, with emoji, color, and
                gentle reminders. See breathing and habits together across your
                week.
              </p>
            </header>
            <div className="habit-grid">
              {habits.map(([emoji, name, detail]) => (
                <article className="tile habit" key={name}>
                  <span className="habit-emoji" aria-hidden="true">
                    {emoji}
                  </span>
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </article>
              ))}
            </div>
            <figure className="phone-stage">
              <div className="poster">
                <Image
                  src="/images/birch-ss3.jpg"
                  alt="Habits beside breathing in Birch"
                  width={620}
                  height={1340}
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="band" id="why">
          <div className="band-inner">
            <header className="band-head">
              <h2>Why Birch</h2>
              <p>Free, private, and quiet on purpose.</p>
            </header>
            <div className="why-grid">
              <article className="card">
                <h3>Free. Forever.</h3>
                <p>No ads, no paywall, no subscription. Download it and breathe.</p>
              </article>
              <article className="card">
                <h3>No account.</h3>
                <p>Nothing to sign up for. Your practice stays on your phone.</p>
              </article>
              <article className="card">
                <h3>Private by default.</h3>
                <p>No feed, no tracking for ads. Just the session in front of you.</p>
              </article>
              <article className="card">
                <h3>Apple Health.</h3>
                <p>Sessions can count toward Mindful Minutes in Apple Health.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="band wash-blue" id="screens">
          <div className="band-inner">
            <header className="band-head">
              <h2>Designed to be followed, not fidgeted with.</h2>
              <p>The same screens, presented with a little more room to look.</p>
            </header>
            <div className="gallery">
              <figure>
                <div className="poster">
                  <Image
                    src="/images/birch-ss1.jpg"
                    alt="A Birch breathing session"
                    width={620}
                    height={1340}
                  />
                </div>
                <figcaption>
                  <h3>Follow the visual guide.</h3>
                  <p>Choose a pattern, set a time or cycles, and follow along.</p>
                </figcaption>
              </figure>
              <figure>
                <div className="poster poster-blue">
                  <Image
                    src="/images/birch-ss2.jpg"
                    alt="Breathing techniques in Birch"
                    width={620}
                    height={1340}
                  />
                </div>
                <figcaption>
                  <h3>Six techniques.</h3>
                  <p>4-7-8, box breathing, and four more. Switch anytime.</p>
                </figcaption>
              </figure>
              <figure>
                <div className="poster">
                  <Image
                    src="/images/birch-ss3.jpg"
                    alt="Habit tracking in Birch"
                    width={620}
                    height={1340}
                  />
                </div>
                <figcaption>
                  <h3>Habits beside breathing.</h3>
                  <p>Water, vitamins, read, fast, walk, meditate, or your own.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="band" id="reviews">
          <div className="band-inner">
            <header className="band-head">
              <h2>What people actually wrote.</h2>
              <p>Real US App Store reviews. Nothing invented.</p>
            </header>
            <div className="quote-grid">
              {quotes.map((quote) => (
                <blockquote key={quote}>
                  <p>“{quote}”</p>
                  <cite>US App Store review</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="band wash-lime" id="faq">
          <div className="band-inner narrow">
            <header className="band-head">
              <h2>Frequently asked questions</h2>
              <p>The short version.</p>
            </header>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="band wash-hero close">
          <div className="band-inner narrow close-inner">
            <Stars size={36} />
            <h2>4.9 from 111 US ratings</h2>
            <p>Free on the App Store. No ads, no account, no subscription.</p>
            <div className="cta-row">
              <a className="cta" href={APP} target="_blank" rel="noopener noreferrer">
                Get Birch free
              </a>
              <StoreBadge />
            </div>
            <p className="fineprint">
              Birch supports general wellness and is not a substitute for
              professional medical advice.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wide wrap">
          <div className="foot-brand">
            <strong>Birch</strong>
            <span>Breathe, relax, sleep.</span>
            <StoreBadge />
          </div>
          <div className="links">
            <a href={SUPPORT} target="_blank" rel="noopener noreferrer">
              Support
            </a>
            <a href={PRIVACY} target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
            <a href={APP} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
          </div>
          <span className="foot-note">© 2026 Tsukemen.io</span>
        </div>
      </footer>
    </>
  );
}
