import Link from "next/link";
import Image from "next/image";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";

export default function Support() {
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
        <h1>Support</h1>
        <p className="intro">
          Need help with Birch? Email{" "}
          <a href="mailto:luthianh@gmail.com">luthianh@gmail.com</a>. Include your
          iPhone model, iOS version, and what happened.
        </p>
        <h2>About Birch</h2>
        <p>
          Birch is a free breathing and habit app for iPhone, created by Thianh Lu. No
          subscriptions, no ads, no account required. It needs iOS 18 or later.
        </p>
        <h2>Privacy</h2>
        <p>
          Read the <Link href="/privacy">Privacy Policy</Link>, or email the address
          above.
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
