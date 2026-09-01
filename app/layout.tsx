import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birch: Breathe, Relax & Sleep",
  description:
    "Free guided breathing for iPhone. No ads, no paywall, no account required.",
  authors: [{ name: "Thianh Lu" }],
  openGraph: {
    title: "Birch: Breathe, Relax & Sleep",
    description:
      "Free guided breathing for iPhone. No ads, no paywall, no account required.",
    type: "website",
  },
  icons: { icon: "/images/birch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
