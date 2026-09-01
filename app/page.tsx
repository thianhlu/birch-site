import Image from "next/image";
import Link from "next/link";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";
const PRIVACY =
  "https://docs.google.com/document/d/1lAYHHEQAuaKjcjjFguUm-VnnO9p8V4lCfYc6BOHUVH4/edit?usp=sharing";
const SUPPORT =
  "https://docs.google.com/forms/d/e/1FAIpQLScDG6nD1RzDc5NEO31206FtgrPoTFgAzyPUReW3FoJSfIYDbg/viewform";

const techniques = [
  ["Weil Method", "4-7-8"],
  ["Box Breathing", "4-4-4-4"],
  ["Gentle Wave", "7-11"],
  ["Balance", "3-3-6-3"],
  ["Heart Coherence", "6-6"],
  ["Slow-Paced Breathing", "4-6"],
];

export default function Home() {
  return (
    <>
      <header>
        <div className="navpill">
          <Link className="brand" href="/">
            <Image src="/images/birch-icon.png" alt="" width={36} height={36} />
            <span>Birch</span>
          </Link>
          <a className="nav-app" href={APP} target="_blank" rel="noopener noreferrer">
            Get Birch
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Breathe better
              <br />
              in minutes.
            </h1>
            <p className="lede">
              No ads. No paywall. No account. Free 4-7-8 &amp; box breathing. Simple
              guided breathwork made for sleep.
            </p>
            <div className="cta-row">
              <a className="cta" href={APP} target="_blank" rel="noopener noreferrer">
                Get Birch free
              </a>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="features-head">
            <h2>Choose a breathing pattern. Follow the visual guide.</h2>
          </div>
          <div className="tile-grid">
            {techniques.map(([name, ratio]) => (
              <div className="tile" key={name}>
                <strong>{name}</strong>
                <span>{ratio}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bento wide wrap">
          <div className="bento-grid">
            <article className="bento-card">
              <Image
                className="bento-shot"
                src="/images/birch-ss1.jpg"
                alt="A Birch breathing session"
                width={420}
                height={840}
              />
              <h3>Follow the visual guide.</h3>
              <p>
                Choose a breathing pattern, set a time or number of cycles, and follow
                as you breathe, hold, and exhale.
              </p>
            </article>
            <article className="bento-card">
              <Image
                className="bento-shot"
                src="/images/birch-ss2.jpg"
                alt="Breathing techniques in Birch"
                width={420}
                height={840}
              />
              <h3>Six techniques.</h3>
              <p>
                Weil Method (4-7-8), Box Breathing, Gentle Wave, Balance, Heart
                Coherence, Slow-Paced Breathing.
              </p>
            </article>
            <article className="bento-card">
              <Image
                className="bento-shot"
                src="/images/birch-ss3.jpg"
                alt="Habits beside breathing in Birch"
                width={420}
                height={840}
              />
              <h3>Habits beside breathing.</h3>
              <p>
                Track a few things that matter - drink water, take vitamins, read,
                fast, walk, meditate, or create your own - and log them in one tap.
              </p>
            </article>
          </div>
        </section>

        <section className="flight">
          <div className="phone">
            <Image
              src="/images/birch-ss1.jpg"
              alt="Birch on iPhone"
              width={720}
              height={1280}
              priority
            />
          </div>
          <div className="cta-row">
            <a className="cta" href={APP} target="_blank" rel="noopener noreferrer">
              Get Birch free
            </a>
          </div>
        </section>

        <section className="privacy wrap">
          <p>
            <strong>No subscriptions. No ads. No account.</strong>
            <br />
            Birch works without an account. Sessions can count toward Mindful Minutes
            in Apple Health. Birch supports general wellness and is not a substitute
            for professional medical advice.
          </p>
        </section>
      </main>

      <footer>
        <div className="wide wrap">
          <div className="foot-brand">
            <strong>Birch</strong>
            <span>Breathe, relax, sleep.</span>
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
