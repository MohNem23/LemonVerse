export const lastUpdated = "2026-04-10";

const defaultSiteUrl =
  process.env.NODE_ENV === "production"
    ? "https://lemonverse.io"
    : "http://localhost:3000";

function normalizeSiteUrl(input: string) {
  try {
    const parsed = new URL(input);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return defaultSiteUrl;
  }
}

function normalizeHandle(handle?: string) {
  if (!handle) return undefined;
  return handle.startsWith("@") ? handle : `@${handle}`;
}

const socialProfiles = [
  process.env.NEXT_PUBLIC_X_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
  process.env.NEXT_PUBLIC_TIKTOK_URL,
  process.env.NEXT_PUBLIC_THREADS_URL,
].filter((url): url is string => Boolean(url));

export const siteConfig = {
  name: "LemonVerse",
  legalName: "LemonVerse Narrative Systems",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
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
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@lemonverse.io",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lemonverse.io",
  socialProfiles,
  twitterHandle: normalizeHandle(process.env.NEXT_PUBLIC_TWITTER_HANDLE),
  twitterSiteId: process.env.NEXT_PUBLIC_TWITTER_SITE_ID,
  twitterCreatorId: process.env.NEXT_PUBLIC_TWITTER_CREATOR_ID,
} as const;

export function getSiteUrl() {
  return siteConfig.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
