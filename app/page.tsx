import Image from "next/image";
import Link from "next/link";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";

const techniques = [
  ["Weil Method", "4-7-8"],
  ["Box Breathing", "4-4-4-4"],
  ["Gentle Wave", "7-11"],
  ["Balance", "3-3-6-3"],
  ["Heart Coherence", "6-6"],
  ["Slow-Paced", "4-6"],
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
              Free 4-7-8 and box breathing for iPhone. Four more patterns, optional
              habits. No ads, no paywall, no account.
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
            <h2>Six techniques. Pick one and follow the card.</h2>
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
              <h3>
                Watch the card.
                <br />
                Breathe with it.
              </h3>
              <p>
                Inhale, hold, exhale. Set a time or a number of cycles. The grainy
                green-to-blue pulse is the session.
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
              <h3>
                Six techniques.
                <br />
                Switch anytime.
              </h3>
              <p>
                Weil 4-7-8, box breathing, gentle wave, balance, heart coherence,
                slow-paced.
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
              <h3>
                Habits beside
                <br />
                breathing.
              </h3>
              <p>
                Optional. Water, walks, vitamins, or anything you name. Log today in
                one tap and see the week.
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
            <strong>No ads. No subscriptions. No account.</strong>
            <br />
            Sessions can count toward Mindful Minutes in Apple Health. Birch is for
            general wellness, not a substitute for professional medical advice.
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
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
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
