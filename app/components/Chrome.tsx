import Image from "next/image";
import Link from "next/link";

import { SITE } from "../site";
export { SITE };
export const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";
export const PRIVACY = "/privacy";
export const SUPPORT = "/support";

export function AppleGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 20" width={size * 0.8} height={size} aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.2 10.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.3.9 1.2 1.9 2.6 3.3 2.6 1.3 0 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.2 3.2-2.5.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.5-1-2.5-3.8zM11 3.8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.3-.6 3-1.6z"
      />
    </svg>
  );
}

export function StoreBadge({ light = false }: { light?: boolean }) {
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

/** Floating pill nav. On the home page links are in-page anchors; elsewhere they point home. */
export function SiteNav({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <Link className="brand" href="/">
          <Image src="/images/birch-mark.png" alt="" width={24} height={24} />
          <span>Birch</span>
        </Link>
        <div className="nav-links">
          <a href={`${base}#breathe`}>Breathing</a>
          <a href={`${base}#habits`}>Habits</a>
          <a href={`${base}#watch`}>Watch</a>
          <Link href="/guides">Guides</Link>
          <a href={`${base}#faq`}>FAQ</a>
          <Link href={SUPPORT}>Support</Link>
        </div>
        <Link className="nav-guides-m" href="/guides">
          Guides
        </Link>
        <a className="nav-cta" href={APP} target="_blank" rel="noopener noreferrer">
          Get Birch
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
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
          <a href={APP} target="_blank" rel="noopener noreferrer">
            Download
          </a>
          <a href={`${base}#breathe`}>Breathing</a>
          <a href={`${base}#habits`}>Habits</a>
          <a href={`${base}#watch`}>Apple Watch</a>
        </div>
        <div className="foot-col">
          <h2>Guides</h2>
          <Link href="/guides/4-7-8-breathing">4-7-8 breathing</Link>
          <Link href="/guides/box-breathing">Box breathing</Link>
          <Link href="/guides/breathing-exercises-for-sleep">Breathing for sleep</Link>
          <Link href="/guides">All guides</Link>
        </div>
        <div className="foot-col">
          <h2>Help</h2>
          <a href={`${base}#faq`}>FAQ</a>
          <Link href={SUPPORT}>Support</Link>
        </div>
        <div className="foot-col">
          <h2>Legal</h2>
          <Link href={PRIVACY}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
