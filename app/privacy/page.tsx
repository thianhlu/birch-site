import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, PageFooter, PageNav } from "../components/PageChrome";

const EFFECTIVE = "November 3, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Birch",
  description:
    "How Birch handles your data: no account, no ads, nothing sold. Your breathing and habits stay on your device, and Apple Health access is write-only.",
  alternates: { canonical: "https://hellobirch.app/privacy" },
  openGraph: {
    title: "Birch Privacy Policy",
    description:
      "No account, no ads, nothing sold. Your breathing and habits stay on your device.",
    url: "https://hellobirch.app/privacy",
  },
};

const sections = [
  ["who", "Who we are"],
  ["device", "What stays on your device"],
  ["health", "Apple Health"],
  ["analytics", "Anonymous usage analytics"],
  ["support", "Support messages"],
  ["website", "This website"],
  ["providers", "Who helps us"],
  ["sharing", "What we never do"],
  ["retention", "How long we keep data"],
  ["choices", "Your choices and rights"],
  ["children", "Children"],
  ["security", "Security"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact"],
] as const;

export default function Privacy() {
  const mail = `mailto:${CONTACT_EMAIL}?subject=Privacy%20question`;
  return (
    <>
      <PageNav />
      <main className="page">
        <header className="page-head">
          <span className="page-kicker">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="page-lede">
            Birch is a breathing and habits app. It works without an account,
            shows no ads, and doesn&apos;t sell your data. This page explains,
            in plain English, what data Birch handles and why.
          </p>
          <p className="page-meta">Effective {EFFECTIVE}</p>
        </header>

        <div className="legal-grid">
          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {sections.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-body">
            <section className="legal-card legal-summary" aria-labelledby="short">
              <h2 id="short">The short version</h2>
              <ul>
                <li>
                  <strong>No account.</strong> Birch never asks for your name,
                  email, or password.
                </li>
                <li>
                  <strong>Your data stays on your device.</strong> Breathing
                  sessions, habits, and reminders are stored on your iPhone and
                  Apple Watch, not on our servers.
                </li>
                <li>
                  <strong>Apple Health is write-only.</strong> Birch can save
                  Mindful Minutes if you allow it. It never reads your Health
                  data.
                </li>
                <li>
                  <strong>Anonymous analytics only.</strong> Birch sends basic
                  usage events, such as &ldquo;a session finished,&rdquo; so we
                  can improve the app. They aren&apos;t tied to who you are.
                </li>
                <li>
                  <strong>No ads, no tracking, no selling.</strong> We don&apos;t
                  sell or share personal information, or track you across apps
                  and websites.
                </li>
                <li>
                  <strong>You&apos;re in control.</strong> Deleting the app
                  removes its data from your device. Questions?{" "}
                  <Link href="/support">Contact us</Link>.
                </li>
              </ul>
            </section>

            <section className="legal-card" id="who">
              <h2>Who we are</h2>
              <p>
                Birch: Breathe, Relax &amp; Sleep (&ldquo;Birch&rdquo;) is made
                by Thianh Lu, publishing as Tsukemen.io (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;). This policy covers the Birch app for iPhone,
                iPad, and Apple Watch, and this website, hellobirch.app. Where
                a law such as the GDPR applies, we are the party responsible
                for the personal data described here.
              </p>
            </section>

            <section className="legal-card" id="device">
              <h2>What stays on your device</h2>
              <p>
                Everything you create in Birch is stored locally on your
                device: your breathing sessions and history, the habits you
                track and log, your reminders, and your settings. We don&apos;t
                run accounts or servers that hold this information, so we
                can&apos;t see it.
              </p>
              <ul>
                <li>
                  <strong>Apple Watch.</strong> Sessions you finish on Apple
                  Watch are sent to Birch on your paired iPhone using
                  Apple&apos;s device-to-device connection.
                </li>
                <li>
                  <strong>Reminders.</strong> Habit reminders and progress
                  summaries are scheduled on your device as local
                  notifications. You can turn them off in Birch or in iOS
                  Settings.
                </li>
                <li>
                  <strong>Backups.</strong> If you back up your device with
                  iCloud or a computer, Apple may include Birch&apos;s data in
                  that backup. Apple&apos;s privacy policy covers backups.
                </li>
              </ul>
            </section>

            <section className="legal-card" id="health">
              <h2>Apple Health</h2>
              <p>
                Connecting Apple Health is optional. If you turn it on, Birch
                asks for permission to <strong>write</strong> Mindful Minutes,
                so completed breathing sessions show up in the Health app.
                Birch doesn&apos;t ask to read any Health data, and it
                doesn&apos;t read any.
              </p>
              <p>
                Information from Apple Health (HealthKit) is never sold, never
                used for advertising or marketing, never shared with data
                brokers, and never sent to our analytics provider. You can
                change or remove Birch&apos;s Health access at any time in the
                Health app or in Settings &gt; Privacy &amp; Security &gt;
                Health.
              </p>
            </section>

            <section className="legal-card" id="analytics">
              <h2>Anonymous usage analytics</h2>
              <p>
                To understand which features people use and what to fix, the
                app sends a small set of usage events to PostHog, our analytics
                provider. These events are tied to a random identifier that the
                app creates. They aren&apos;t linked to your name, email, Apple
                ID, or any account, and we don&apos;t build profiles of
                individual people.
              </p>
              <h3>What an event can include</h3>
              <ul>
                <li>
                  App activity: the app was installed, updated, opened, or
                  closed, and which screens were viewed.
                </li>
                <li>
                  Breathing: a session started, finished, or ended early, with
                  the pattern and the planned and actual length.
                </li>
                <li>
                  Habits: a habit was created or logged, with its type (yes/no
                  or count) and target. Not the habit&apos;s name.
                </li>
                <li>
                  Device basics: device model, operating system and version,
                  app version, language, time zone, screen size, and whether
                  you&apos;re on Wi-Fi or cellular.
                </li>
                <li>
                  Approximate location: like most internet services, PostHog
                  receives your device&apos;s IP address and uses it to estimate
                  a rough location, such as city and country. We use this only
                  for aggregate counts, such as how many people use Birch in
                  each country.
                </li>
              </ul>
              <p>
                Analytics never include your Health data, your habit names, or
                anything you type into the app.
              </p>
            </section>

            <section className="legal-card" id="support">
              <h2>Support messages</h2>
              <p>
                If you contact us through the{" "}
                <Link href="/support">support form</Link> or by email, we get
                what you send: your email address, your name if you add one,
                your message, and any device or app version details you
                include. We use this only to reply to you and to fix bugs or
                plan features you ask about.
              </p>
              <p>
                Support form messages are sent to our email inbox and saved as
                an issue in our private GitHub project, which only we can see,
                so we can track the fix. The website&apos;s host briefly
                processes your IP address to deliver the form and to limit
                spam.
              </p>
            </section>

            <section className="legal-card" id="website">
              <h2>This website</h2>
              <p>
                hellobirch.app doesn&apos;t use cookies, analytics, or ads. It
                is hosted by Vercel. Like any web host, Vercel processes basic
                request information, such as your IP address, browser, and the
                pages you request, to serve the site and protect it from abuse.
              </p>
            </section>

            <section className="legal-card" id="providers">
              <h2>Who helps us</h2>
              <p>
                We rely on a few service providers. Each one gets only what it
                needs to do its job.
              </p>
              <ul>
                <li>
                  <strong>Apple.</strong> App Store distribution, Apple Health,
                  Apple Watch connectivity, notifications, and device backups.
                  See{" "}
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
                    Apple&apos;s privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>PostHog</strong> (United States). Anonymous app usage
                  analytics, as described above. See{" "}
                  <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">
                    PostHog&apos;s privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Vercel</strong> (United States). Website hosting and
                  processing support form submissions. See{" "}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Vercel&apos;s privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>GitHub</strong> (United States). Private issue
                  tracking for support requests. See{" "}
                  <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                    GitHub&apos;s privacy statement
                  </a>
                  .
                </li>
                <li>
                  <strong>Google</strong> (United States). Email, for receiving
                  and answering support messages. See{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Google&apos;s privacy policy
                  </a>
                  .
                </li>
              </ul>
              <p>
                These providers are based in the United States, so your data
                may be processed there. We may also disclose information if the
                law requires it, or to protect the safety of our users or
                others.
              </p>
            </section>

            <section className="legal-card" id="sharing">
              <h2>What we never do</h2>
              <ul>
                <li>Sell your personal information, or &ldquo;share&rdquo; it for targeted advertising.</li>
                <li>Show ads, or include advertising SDKs in the app.</li>
                <li>Track you across other companies&apos; apps or websites.</li>
                <li>Use Apple Health data for anything except saving the Mindful Minutes you asked for.</li>
              </ul>
            </section>

            <section className="legal-card" id="retention">
              <h2>How long we keep data</h2>
              <ul>
                <li>
                  <strong>On-device data</strong> stays until you delete it in
                  the app or delete the app.
                </li>
                <li>
                  <strong>Analytics events</strong> are kept in PostHog for as
                  long as they help us understand how the app is used, and no
                  longer than our PostHog plan retains them.
                </li>
                <li>
                  <strong>Support messages</strong> are kept while we help you
                  and afterward as a record of the bug or request. You can ask
                  us to delete them at any time.
                </li>
              </ul>
            </section>

            <section className="legal-card" id="choices">
              <h2>Your choices and rights</h2>
              <ul>
                <li>
                  <strong>Delete your data.</strong> Deleting Birch from your
                  devices removes the data it stores there.
                </li>
                <li>
                  <strong>Health and notifications.</strong> Turn Apple Health
                  access or reminders off at any time in iOS Settings.
                </li>
                <li>
                  <strong>Support messages.</strong> Ask us to access, correct,
                  or delete anything you&apos;ve sent us.
                </li>
              </ul>
              <p>
                Depending on where you live, privacy laws may give you more
                rights. Residents of California (under the CCPA) and of the
                European Economic Area, the UK, and Switzerland (under the
                GDPR) can ask to know, access, correct, or delete their
                personal information, and won&apos;t be treated differently
                for asking. Because we don&apos;t sell or share personal
                information, there is nothing to opt out of.
              </p>
              <p>
                Under the GDPR, we process analytics and support messages on
                the basis of our legitimate interest in running and improving
                Birch and in answering you. Apple Health writing is based on
                your permission, which you can withdraw at any time. You can
                also complain to your local data protection authority.
              </p>
              <p>
                Analytics events aren&apos;t linked to your identity, so we
                usually can&apos;t find the events that came from your device.
                To make a request, <Link href="/support">contact us</Link>.
                We&apos;ll reply as soon as we can, within the time the law
                requires.
              </p>
            </section>

            <section className="legal-card" id="children">
              <h2>Children</h2>
              <p>
                Birch is a general wellness app and isn&apos;t directed to
                children under 13. We don&apos;t knowingly collect personal
                information from children. If you believe a child has sent us
                personal information, <Link href="/support">contact us</Link>{" "}
                and we&apos;ll delete it.
              </p>
            </section>

            <section className="legal-card" id="security">
              <h2>Security</h2>
              <p>
                We keep the data we handle to a minimum and use reputable
                providers that encrypt data in transit. Still, no method of
                storage or transmission is completely secure, so we can&apos;t
                promise absolute security.
              </p>
            </section>

            <section className="legal-card" id="changes">
              <h2>Changes to this policy</h2>
              <p>
                If we change this policy, we&apos;ll post the new version on
                this page and update the effective date at the top. If a change
                is significant, such as collecting a new kind of data, we&apos;ll
                also point it out on this website or in the app before it takes
                effect.
              </p>
            </section>

            <section className="legal-card" id="contact">
              <h2>Contact</h2>
              <p>
                Questions or requests about privacy? Use the{" "}
                <Link href="/support">support form</Link> or email{" "}
                <a href={mail}>{CONTACT_EMAIL}</a>.
              </p>
              <p>Birch is not a substitute for professional medical advice.</p>
            </section>
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
