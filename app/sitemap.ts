import type { MetadataRoute } from "next";

const site = "https://birch-breathe.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
