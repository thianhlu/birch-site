import Link from "next/link";
import Image from "next/image";

const APP =
  "https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381";
const PRIVACY =
  "https://docs.google.com/document/d/1lAYHHEQAuaKjcjjFguUm-VnnO9p8V4lCfYc6BOHUVH4/edit?usp=sharing";
const SUPPORT =
  "https://docs.google.com/forms/d/e/1FAIpQLScDG6nD1RzDc5NEO31206FtgrPoTFgAzyPUReW3FoJSfIYDbg/viewform";

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
          Need help with Birch?{" "}
          <a href={SUPPORT} target="_blank" rel="noopener noreferrer">
            Open the support form
          </a>
          .
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
