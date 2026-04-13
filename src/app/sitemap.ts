import type { MetadataRoute } from "next";
import { absoluteUrl, lastUpdated } from "@/brand/site-metadata";

const routes = [
  "/",
  "/worlds",
  "/methodology",
  "/pricing",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/parental-controls",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: lastUpdated,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/pricing" ? 0.9 : 0.8,
  }));
}
