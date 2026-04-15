import type { MetadataRoute } from "next";
import { absoluteUrl, lastUpdated } from "@/brand/site-metadata";

type RouteEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  images?: string[];
};

const routes: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1, images: ["/media/home/hero-cinematic.jpg"] },
  {
    path: "/worlds",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/media/home/grove-fishtopus.jpg", "/media/home/noir-scenario.jpg"],
  },
  {
    path: "/methodology",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/media/methodology/irena-portrait.jpg"],
  },
  {
    path: "/pricing",
    changeFrequency: "weekly",
    priority: 0.95,
    images: ["/media/pricing/family-parent.jpg"],
  },
  { path: "/faq", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.6 },
  { path: "/parental-controls", changeFrequency: "monthly", priority: 0.7 },
  { path: "/llms.txt", changeFrequency: "daily", priority: 0.7 },
  { path: "/llms-full.txt", changeFrequency: "daily", priority: 0.7 },
  { path: "/.well-known/llms.txt", changeFrequency: "daily", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: lastUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        "en-US": absoluteUrl(route.path),
      },
    },
    images: route.images?.map((image) => absoluteUrl(image)),
  }));
}
