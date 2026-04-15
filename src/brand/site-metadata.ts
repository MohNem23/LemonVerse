export const lastUpdated = "2026-04-10";

export const siteConfig = {
  name: "LemonVerse",
  legalName: "LemonVerse Narrative Systems",
  locale: "en_US",
  defaultTitle: "Immersive AI Language Learning for Kids, Teens, Adults, and Families",
  tagline: "Don't drill the language. Live the story.",
  description:
    "LemonVerse unlocks fluency through high-stakes narrative immersion for children, teens, adults, and families across LemonGrove and LemonNoir.",
  keywords: [
    "AI language learning",
    "immersive language learning",
    "family language app",
    "story-based language learning",
    "language acquisition",
    "narrative learning",
    "children language learning",
    "adult language learning",
  ],
  organizationType: "EducationalOrganization",
  familyBundlePrice: "8.99",
  currency: "USD",
  familyBundleProfiles: 5,
  worldCount: "600+",
  worlds: ["LemonGrove", "LemonNoir"],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
