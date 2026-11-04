import type { MetadataRoute } from "next";
import { GUIDES, GUIDES_INDEX } from "./guides/data";

const site = "https://birch-breathe.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${site}/guides`,
      lastModified: new Date(GUIDES_INDEX.updated),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...GUIDES.map((g) => ({
      url: `${site}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
