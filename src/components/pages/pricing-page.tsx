import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { FaqList } from "@/components/shared/faq-list";
import { pricingFaqs } from "@/content/faqs";
import { pricingContent } from "@/content/pricing";

const offerMeta: Record<
  string,
  {
    subtitle: string;
    cta: string;
    bullets: string[];
  }
> = {
  "LemonGrove Solo": {
    subtitle: "For the Early Explorers",
    cta: "Start Adventure",
    bullets: [
      "1 Learner Profile",
      "Full access to LemonGrove",
      "400+ Discovery Quests",
      "100% Chatbot-free",
    ],
  },
  "LemonNoir Solo": {
    subtitle: "For the Mystery Seekers",
    cta: "Enter the Noir",
    bullets: [
      "1 Learner Profile",
      "Full access to LemonNoir",
      "200+ Cinematic Mysteries",
      "AI-Driven Roleplay",
    ],
  },
  "Unified Family Bundle": {
    subtitle: "The Household Standard",
    cta: "CLAIM THE BUNDLE",
    bullets: [
      "Up to 5 Unique Profiles",
      "Full access to BOTH Worlds",
      "600+ Total Scenarios",
      "Shared Family Progress",
    ],
  },
};

const featureComparisonRows: Array<{
  feature: string;
  values: Record<string, string>;
}> = [
  {
    feature: "Monthly Price",
    values: {
      "LemonGrove Solo": "$4.99 / month",
      "LemonNoir Solo": "$5.99 / month",
      "Unified Family Bundle": "$8.99 / month",
    },
  },
  {
    feature: "Plan Positioning",
    values: {
      "LemonGrove Solo": "For the Early Explorers",
      "LemonNoir Solo": "For the Mystery Seekers",
      "Unified Family Bundle": "The Household Standard",
    },
  },
  {
    feature: "Profile Limit",
    values: {
      "LemonGrove Solo": "1 Learner Profile",
      "LemonNoir Solo": "1 Learner Profile",
      "Unified Family Bundle": "Up to 5 Unique Profiles",
    },
  },
  {
    feature: "World Access",
    values: {
      "LemonGrove Solo": "Full access to LemonGrove",
      "LemonNoir Solo": "Full access to LemonNoir",
      "Unified Family Bundle": "Full access to BOTH Worlds",
    },
  },
  {
    feature: "Scenario Library",
    values: {
      "LemonGrove Solo": "400+ Discovery Quests",
      "LemonNoir Solo": "200+ Cinematic Mysteries",
      "Unified Family Bundle": "600+ Total Scenarios",
    },
  },
  {
    feature: "Signature Advantage",
    values: {
      "LemonGrove Solo": "100% Chatbot-free",
      "LemonNoir Solo": "AI-Driven Roleplay",
      "Unified Family Bundle": "Shared Family Progress",
    },
  },
];

export function PricingPage() {
  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container>
          <div className="rounded-[2.6rem] p-8 lg:p-12">
            <div className=" gap-10 ">
              <div className="space-y-6">
                <span className="eyebrow">{pricingContent.hero.eyebrow}</span>
                <h1 className="font-serif text-4xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                  {pricingContent.hero.title}
                </h1>
                <p className="text-lg leading-8 text-muted">
                  {pricingContent.hero.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-1">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Scroll to compare plans
            </span>

            <div className="relative flex h-12 w-7 items-start justify-center rounded-full border border-line/80 bg-background/60 p-1">
              <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary" />
            </div>

            <div className="h-10 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-10">
          <div className="space-y-4">
            <span className="eyebrow">Choose your path</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Compare solo access with the Unified Family Bundle.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Three plans. One goal: keep you inside the story long enough for
              fluency to become second nature.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[900px] rounded-[2rem] border border-line/70 bg-background/40 backdrop-blur-sm">
              {/* Header */}
              <div className="grid grid-cols-[1.1fr_repeat(3,minmax(0,1fr))] border-b border-line/70">
                <div className="px-6 py-6" />

                {pricingContent.offers.map((offer) => {
                  const featured = offer.name === "Unified Family Bundle";
                  const meta = offerMeta[offer.name];

                  return (
                    <div
                      key={offer.name}
                      className={`px-6 py-6 ${
                        featured ? "bg-primary/[0.04]" : ""
                      }`}
                    >
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          featured ? "text-primary" : "text-muted"
                        }`}
                      >
                        {meta.subtitle}
                      </p>

                      <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">
                        {offer.name}
                      </h3>

                      <p className="mt-4 font-serif text-4xl font-bold text-foreground">
                        {offer.price}
                        <span className="ml-2 text-sm font-medium text-muted">
                          / month
                        </span>
                      </p>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        {offer.description}
                      </p>

                      <ButtonLink
                        href="/contact"
                        className="mt-6 w-full"
                        variant={featured ? "primary" : "secondary"}
                      >
                        {meta.cta}
                      </ButtonLink>
                    </div>
                  );
                })}
              </div>

              {/* Feature rows */}
              <div className="divide-y divide-line/70">
                {featureComparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1.1fr_repeat(3,minmax(0,1fr))]"
                  >
                    <div className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.feature}
                    </div>

                    {pricingContent.offers.map((offer) => {
                      const featured = offer.name === "Unified Family Bundle";
                      const value = row.values[offer.name] ?? "—";

                      return (
                        <div
                          key={`${offer.name}-${row.feature}`}
                          className={`px-6 py-4 ${
                            featured ? "bg-primary/[0.04]" : ""
                          }`}
                        >
                          <div className="flex items-center justify-center lg:justify-start">
                            <span className="text-sm font-semibold text-foreground">
                              {value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container>
          <div className="copy-stack floating-card rounded-[2.5rem] border border-line/80 bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-12 sm:px-8 sm:py-14">
            <p className="font-serif text-4xl font-bold italic text-primary sm:text-5xl">
              Why the Bundle Wins
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
              {pricingContent.banner}
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground lg:grid-cols-3">
              <li className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4">
                Shared Progress, Individual Journeys: Dad solves a mystery in
                Madrid while the kids explore the bioluminescent reefs of Mars.
              </li>
              <li className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4">
                The 600-Scenario Vault: Access every hand-crafted mission
                we&apos;ve built over the last 7 years.
              </li>
              <li className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4">
                Zero Hidden Fees: Cancel any time. No &quot;per-lesson&quot;
                charges. No upsells.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Pricing FAQ</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Straight answers before you subscribe.
            </h2>
          </div>
          <FaqList items={pricingFaqs} />
        </Container>
      </section>
    </div>
  );
}
