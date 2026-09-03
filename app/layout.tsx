import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = "Birch: Breathe, Relax & Sleep";
const description =
  "Free 4-7-8 and box breathing for iPhone. Keep small daily habits beside your breath. No ads, no account, no subscription.";

export const viewport: Viewport = {
  themeColor: "#e7e3d8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://birch-breathe.vercel.app"),
  title,
  description,
  applicationName: "Birch",
  authors: [{ name: "Thianh Lu" }],
  keywords: [
    "breathing app",
    "4-7-8 breathing",
    "box breathing",
    "habit tracker",
    "relax",
    "sleep",
    "Apple Health",
    "free",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://birch-breathe.vercel.app",
    siteName: "Birch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Birch: Breathe better in minutes. 4.9 stars from 111 US ratings.",
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
