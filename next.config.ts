import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 86 is used for the large footer flat-lay so it stays crisp at 2x DPR.
    qualities: [75, 86],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Markdown mirrors of each guide for LLMs: /guides/<slug>.md
        { source: "/guides/:slug([a-z0-9-]+)\\.md", destination: "/guides-md/:slug" },
      ],
    };
  },
  async redirects() {
    return [
      // Old production host -> canonical domain, path and query preserved (308).
      // Matches only this exact host, so preview URLs and hellobirch.app never loop.
      {
        source: "/:path*",
        has: [{ type: "host", value: "birch-breathe.vercel.app" }],
        destination: "https://hellobirch.app/:path*",
        permanent: true,
      },
      {
        source: "/privacy",
        destination:
          "https://docs.google.com/document/d/1lAYHHEQAuaKjcjjFguUm-VnnO9p8V4lCfYc6BOHUVH4/edit?usp=sharing",
        permanent: false,
      },
      {
        source: "/support",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScDG6nD1RzDc5NEO31206FtgrPoTFgAzyPUReW3FoJSfIYDbg/viewform",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
