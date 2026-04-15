import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/brand/site-metadata";

export default function robots(): MetadataRoute.Robots {
  const allowList = [
    "/",
    "/worlds",
    "/methodology",
    "/pricing",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/parental-controls",
    "/llms.txt",
    "/llms-full.txt",
    "/.well-known/llms.txt",
  ];

  const disallowList = ["/api/", "/app/", "/auth/", "/admin/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: allowList,
        disallow: disallowList,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "CCBot",
          "Applebot-Extended",
        ],
        allow: allowList,
        disallow: disallowList,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(absoluteUrl("/")).host,
  };
}
