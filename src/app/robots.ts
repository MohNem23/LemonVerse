import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/brand/site-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
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
      ],
      disallow: ["/api/", "/app/", "/auth/", "/admin/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
