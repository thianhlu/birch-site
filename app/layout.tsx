import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "./site";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = "Birch: Breathe, Relax & Sleep";
const description =
  "Free 4-7-8 and box breathing for iPhone and Apple Watch. Keep small daily habits beside your breath. No ads, no account, no subscription.";

export const viewport: Viewport = {
  themeColor: "#f3f1ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  applicationName: "Birch",
  authors: [{ name: "Tsukemen.io" }],
  keywords: [
    "breathing app",
    "4-7-8 breathing",
    "box breathing",
    "habit tracker",
    "relax",
    "sleep",
    "Apple Health",
    "Apple Watch",
    "free",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE,
    siteName: "Birch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Birch: Breathe better. Keep small habits. 4.9 stars from 115 US ratings.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/images/birch-icon.png",
    apple: "/images/birch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
