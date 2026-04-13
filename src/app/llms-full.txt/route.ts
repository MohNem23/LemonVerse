import { lastUpdated } from "@/brand/site-metadata";

const body = `# LemonVerse Full Summary

> Last updated: ${lastUpdated}

## Product
LemonVerse is an AI-powered language-learning platform centered on two core worlds: LemonGrove for children and LemonNoir for teens and adults. It uses guided immersion, story-led practice, and family plans to make language learning feel contextual rather than drill-only.

## Worlds
- LemonGrove: child-focused story experiences and guided play
- LemonNoir: teen and adult story experiences with more advanced roleplay and reading depth
- Library experiences: supporting games, prompts, and activities that sit inside the worlds rather than defining the whole product

## Methodology
LemonVerse emphasizes narrative acquisition, comprehensible context, repetition with variation, and learner agency. The methodology page explains the product principles in direct language for both readers and answer engines.

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
    },
  });
}
