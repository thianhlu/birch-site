import Image from "next/image";
import Link from "next/link";
import "../pages.css";

/*
 * Nav and footer for standalone pages (/privacy, /support).
 * Mirrors the homepage pill nav and footer so these pages feel like part of the site.
 */

export const APP_STORE =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";

/** Public contact address. Same address the app's "Bugs & Feedback" button uses. */
export const CONTACT_EMAIL = "footer-gas.9j@icloud.com";

export function PageNav() {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <Link className="brand" href="/">
          <Image src="/images/birch-mark.png" alt="" width={24} height={24} />
          <span>Birch</span>
        </Link>
        <div className="nav-links">
          <Link href="/#breathe">Breathing</Link>
          <Link href="/#habits">Habits</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/support">Support</Link>
        </div>
        <a className="nav-cta" href={APP_STORE} target="_blank" rel="noopener noreferrer">
          Get Birch
        </a>
      </nav>
    </header>
  );
}

export function PageFooter() {
  return (
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
          <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
            Download
          </a>
          <Link href="/#breathe">Breathing</Link>
          <Link href="/#habits">Habits</Link>
          <Link href="/#watch">Apple Watch</Link>
        </div>
        <div className="foot-col">
          <h2>Help</h2>
          <Link href="/#faq">FAQ</Link>
          <Link href="/support">Support</Link>
        </div>
        <div className="foot-col">
          <h2>Legal</h2>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
