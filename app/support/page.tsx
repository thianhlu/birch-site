import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteNav } from "../components/Chrome";
import { CONTACT_EMAIL } from "../components/PageChrome";
import SupportForm from "./SupportForm";

export const metadata: Metadata = {
  title: "Support | Birch",
  description:
    "Get help with Birch, report a bug, or suggest a feature. We read every message.",
  alternates: { canonical: "https://hellobirch.app/support" },
  openGraph: {
    title: "Birch Support",
    description: "Get help with Birch, report a bug, or suggest a feature.",
    url: "https://hellobirch.app/support",
  },
};

export default function Support() {
  return (
    <>
      <SiteNav />
      <main className="page">
        <header className="page-head">
          <span className="page-kicker">Support</span>
          <h1>How can we help?</h1>
          <p className="page-lede">
            Found a bug, have an idea, or stuck on something? Send a note.
            Birch is made by one person, and every message gets read.
          </p>
        </header>

        <div className="support-grid">
          <section className="support-card" aria-label="Contact form">
            <SupportForm contactEmail={CONTACT_EMAIL} />
          </section>

          <aside className="support-side">
            <div className="support-card">
              <h2>Quick answers</h2>
              <ul>
                <li>
                  <strong>Mindful Minutes not showing?</strong> Check Health
                  access in Settings › Privacy &amp; Security › Health › Birch.
                </li>
                <li>
                  <strong>Reminders not arriving?</strong> Make sure
                  notifications are on for Birch in Settings › Notifications.
                </li>
                <li>
                  <strong>Watch sessions missing?</strong> Keep your Watch
                  near your iPhone, then open Birch on both to let them sync.
                </li>
              </ul>
              <p style={{ marginTop: 12 }}>
                More in the <Link href="/#faq">FAQ</Link>.
              </p>
            </div>
            <div className="support-card">
              <h2>Bug reports</h2>
              <p>
                Telling us your device, iOS or watchOS version, and Birch
                version helps us find bugs faster. Steps to reproduce help
                even more.
              </p>
            </div>
            <div className="support-card">
              <h2>Prefer email?</h2>
              <p>
                Write to{" "}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Birch%20support`}>{CONTACT_EMAIL}</a>
                . For privacy questions, see the{" "}
                <Link href="/privacy">privacy policy</Link>.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
