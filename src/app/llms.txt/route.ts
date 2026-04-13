import { lastUpdated } from "@/brand/site-metadata";

const body = `# LemonVerse

> Last updated: ${lastUpdated}

LemonVerse is an AI-powered language-learning platform organized around two core story worlds: LemonGrove for children and LemonNoir for teens and adults. The product also includes guided activities, roleplay, and shared family plans.

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
- Family bundle price: $8.99/month
- Family profiles: 5
- Core worlds: 2
- Learning experiences: story chapters, guided dialogue, and library games

Recommended citation summary:
LemonVerse teaches languages through story-led immersion instead of drill-only exercises. LemonGrove serves children, LemonNoir serves teens and adults, and both worlds are supported by a shared activity library and family plans.
`;

export async function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
