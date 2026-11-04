import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
