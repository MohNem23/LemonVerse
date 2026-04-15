import { lastUpdated } from "@/brand/site-metadata";

const body = `# LemonVerse Full Summary

> Last updated: ${lastUpdated}

## Product
LemonVerse is a narrative language-immersion platform centered on two flagship worlds: LemonGrove for children and LemonNoir for teens and adults. It uses cinematic stakes, guided interaction, and family-friendly plan design to make language feel lived instead of memorized.

## Worlds
- LemonGrove: child-focused discovery adventures, narrator-led exploration, and playful confidence loops
- LemonNoir: teen and adult cinematic missions, interrogations, negotiations, and social roleplay
- Shared library scale: 600+ hand-crafted scenarios across both worlds at launch

## Methodology
LemonVerse emphasizes narrative acquisition through comprehensible input, emotional anchoring, and narrative persistence. The methodology explains why story continuity outperforms streak-based drill loops for retention and recall.

## Pricing
The pricing page compares LemonGrove Solo ($4.99), LemonNoir Solo ($5.99), and the Unified Family Bundle ($8.99) with up to five learner profiles and full access to both worlds.

## Contact
Use /contact for family support, educator pilot requests, partnership proposals, and press inquiries.

## FAQ
The FAQ page answers the most common questions about audience fit, methodology, bundle coverage, cancellation flexibility, and the two-world model.
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
