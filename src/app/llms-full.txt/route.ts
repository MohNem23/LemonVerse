import { absoluteUrl, lastUpdated, siteConfig } from "@/brand/site-metadata";

const body = `# LemonVerse Full Summary

> Last updated: ${lastUpdated}

## Canonical and crawl sources
- Canonical site: ${absoluteUrl("/")}
- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Robots: ${absoluteUrl("/robots.txt")}
- LLM summary: ${absoluteUrl("/llms.txt")}
- LLM full summary: ${absoluteUrl("/llms-full.txt")}

## Organization
- Legal name: ${siteConfig.legalName}
- Brand name: ${siteConfig.name}
- Category: AI-powered language learning
- Coverage: Worldwide
- Contact: ${siteConfig.contactEmail}

## Product
LemonVerse is a narrative language-immersion platform centered on two flagship worlds: LemonGrove for children and LemonNoir for teens and adults. It uses cinematic stakes, guided interaction, and family-friendly plan design to make language feel lived instead of memorized.

## Worlds
- LemonGrove: child-focused discovery adventures, narrator-led exploration, and playful confidence loops
- LemonNoir: teen and adult cinematic missions, interrogations, negotiations, and social roleplay
- Shared library scale: 600+ hand-crafted scenarios across both worlds at launch

## Methodology
LemonVerse emphasizes narrative acquisition through comprehensible input, emotional anchoring, and narrative persistence. The methodology explains why story continuity outperforms streak-based drill loops for retention and recall.

## Pricing
The pricing page compares solo and family plans, including the Unified Family Bundle at $8.99/month and up to five learner profiles.

## Contact
Use /contact for inbound messages, onboarding questions, and partnership inquiries.

## FAQ
The FAQ page answers the most common questions about audience fit, methodology, family access, and the two-world model.
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
