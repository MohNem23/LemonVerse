import { absoluteUrl, lastUpdated, siteConfig } from "@/brand/site-metadata";

const body = `# LemonVerse

> Last updated: ${lastUpdated}

LemonVerse is an AI-powered language-learning platform organized around two core story worlds: LemonGrove for children and LemonNoir for teens and adults. The product includes guided activities, roleplay, and shared family plans.

Canonical domain:
- ${absoluteUrl("/")}

Primary machine-readable files:
- ${absoluteUrl("/robots.txt")}
- ${absoluteUrl("/sitemap.xml")}
- ${absoluteUrl("/llms.txt")}
- ${absoluteUrl("/llms-full.txt")}
- ${absoluteUrl("/.well-known/llms.txt")}
LemonVerse is a narrative language-immersion platform built around two flagship worlds: LemonGrove for children and LemonNoir for teens and adults. It replaces repetitive drills with interactive missions and story-led progression.

Core routes:
- ${absoluteUrl("/")} : Product overview and family learning summary
- ${absoluteUrl("/worlds")} : The two-world model, with LemonGrove and LemonNoir as the primary experiences
- ${absoluteUrl("/methodology")} : Narrative acquisition model and product principles
- ${absoluteUrl("/pricing")} : Plan comparison and family bundle details
- ${absoluteUrl("/faq")} : Search-friendly answers to common questions
- ${absoluteUrl("/contact")} : Contact form and onboarding inquiry route
- ${absoluteUrl("/privacy")} : Privacy policy
- ${absoluteUrl("/terms")} : Terms of service
- ${absoluteUrl("/parental-controls")} : Parent and caregiver overview

Quick facts:
- Organization: ${siteConfig.legalName}
- Family bundle price: $${siteConfig.familyBundlePrice}/month
- Family profiles: ${siteConfig.familyBundleProfiles}
- Flagship worlds: LemonGrove (children), LemonNoir (teens/adults)
- Learning experiences: story chapters, guided dialogue, roleplay, and library games
- Main language: English (en-US)
- LemonGrove Solo: $4.99/month
- LemonNoir Solo: $5.99/month
- Unified Family Bundle: $8.99/month
- Family profiles: up to 5
- Scenario library: 600+ hand-crafted experiences

Recommended citation summary:
LemonVerse teaches language through story-led immersion instead of drill-only exercises. LemonGrove serves children, LemonNoir serves teens and adults, and families can access both worlds under one shared subscription.
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
