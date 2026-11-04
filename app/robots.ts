import type { MetadataRoute } from "next";

const site = "https://birch-breathe.vercel.app";

// Search and AI crawlers are explicitly welcome; the whole site is public.
const BOTS = [
  "Googlebot",
  "Bingbot",
  "Applebot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...BOTS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
