export const lastUpdated = "2026-04-10";

export const siteConfig = {
  name: "LemonVerse",
  legalName: "LemonVerse Narrative Systems",
  locale: "en_US",
  defaultTitle: "Immersive AI Language Learning for Kids, Teens, Adults, and Families",
  tagline: "Where words become worlds.",
  description:
    "LemonVerse is an AI-powered language-learning platform that teaches through story, roleplay, and guided immersion for children, teens, adults, and shared family plans.",
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
  worldCount: "24+",
  worlds: ["LemonGrove", "LemonNoir", "Narrative Hub", "Legacy Archive"],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
