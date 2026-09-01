import type { Metadata } from "next";
import "./globals.css";

const description =
  "No ads. No paywall. No account. Free 4-7-8 and box breathing. Keep a few small daily habits beside it.";

export const metadata: Metadata = {
  title: "Birch: Breathe, Relax & Sleep",
  description,
  authors: [{ name: "Thianh Lu" }],
  openGraph: {
    title: "Birch: Breathe, Relax & Sleep",
    description,
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
