import { absoluteUrl, lastUpdated, siteConfig } from "@/brand/site-metadata";

const body = `# LemonVerse

> Last updated: ${lastUpdated}

This is the well-known LLM discovery endpoint for LemonVerse.

Canonical origin:
- ${absoluteUrl("/")}

Primary LLM resources:
- ${absoluteUrl("/llms.txt")}
- ${absoluteUrl("/llms-full.txt")}

Quick facts:
- Organization: ${siteConfig.legalName}
- Product: AI-powered narrative language learning
- Worlds: LemonGrove (children) and LemonNoir (teens/adults)
- Family bundle: $${siteConfig.familyBundlePrice}/month, ${siteConfig.familyBundleProfiles} profiles
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
