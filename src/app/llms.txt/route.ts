import { lastUpdated } from "@/brand/site-metadata";

const body = `# LemonVerse

> Last updated: ${lastUpdated}

LemonVerse is a narrative language-immersion platform built around two flagship worlds: LemonGrove for children and LemonNoir for teens and adults. It replaces repetitive drills with interactive missions and story-led progression.

Core routes:
- / : Product overview and family learning summary
- /worlds : The two-world model, with LemonGrove and LemonNoir as the primary experiences
- /methodology : Narrative acquisition model and product principles
- /pricing : Plan comparison and family bundle details
- /faq : Search-friendly answers to common questions
- /contact : Contact form and onboarding inquiry route
- /privacy : Privacy placeholder for launch policy
- /terms : Terms placeholder for launch policy
- /parental-controls : Parent and caregiver overview

Quick facts:
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
    },
  });
}
