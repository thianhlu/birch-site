import Link from "next/link";
import Image from "next/image";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";

export default function Privacy() {
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
      <main className="doc wrap">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 1, 2026</p>
        <p className="intro">
          Birch is designed so you can breathe without making an account. This page
          explains what stays on your iPhone and what does not.
        </p>
        <h2>No account required</h2>
        <p>
          You do not create a Birch account. You do not give us a name, email, or
          password to start a session.
        </p>
        <h2>Data that stays on your device</h2>
        <p>
          Breathing sessions, techniques, timers, and any habits you create are stored
          on your iPhone. Deleting the app deletes this data.
        </p>
        <h2>Apple Health</h2>
        <p>
          If you allow it, Birch can write Mindful Minutes to Apple Health. That data
          stays in Health on your device. Birch does not read your Health history.
        </p>
        <h2>What we do not do</h2>
        <ul>
          <li>No advertising SDKs and no ad tracking</li>
          <li>No selling or renting of personal data</li>
          <li>No account graph, no social feed</li>
        </ul>
        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:luthianh@gmail.com">luthianh@gmail.com</a>
        </p>
        <Link className="back" href="/">
          Back to home
        </Link>
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
