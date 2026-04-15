import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { FaqList } from "@/components/shared/faq-list";
import { pricingFaqs } from "@/content/faqs";
import { pricingContent } from "@/content/pricing";

const worlds = [
  {
    name: "LemonNoir",
    audience: "Teens and adults",
    description:
      "High-stakes immersion where every conversation is a mission and every decision drives the story.",
    image: pricingContent.personas[1].image,
  },
  {
    name: "LemonGrove",
    audience: "Children",
    description:
      "Narrator-led adventures built for curiosity, confidence, and real language absorption through play.",
    image: pricingContent.personas[0].image,
  },
] as const;

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
      "Full access to both worlds",
      "600+ Total Scenarios",
      "Shared Family Progress",
    ],
  },
};

export function PricingPage() {
  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container>
          <div className="glass-panel dynamic-panel rounded-[2.6rem] p-8 surface-ring lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6">
                <span className="eyebrow">{pricingContent.hero.eyebrow}</span>
                <h1 className="max-w-3xl font-serif text-4xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                  {pricingContent.hero.title}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted">
                  {pricingContent.hero.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {pricingContent.hero.summary.map((item) => (
                    <div
                      key={item}
                      className="copy-stack floating-card rounded-[1.4rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-serif text-5xl font-bold text-foreground sm:text-6xl">
                    {pricingContent.hero.price}
                  </span>
                  <span className="pb-2 text-sm font-semibold tracking-[0.16em] text-muted uppercase">
                    {pricingContent.hero.cadence}
                  </span>
                </div>
                <ButtonLink href="/contact" className="sm:min-w-56">
                  Contact us
                </ButtonLink>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {worlds.map((world, index) => (
                  <article
                    key={world.name}
                    className={`copy-stack floating-card overflow-hidden rounded-[1.8rem] border border-line/80 bg-black/20 ${index === 1 ? "floating-card-alt" : ""}`}
                  >
                    <div className="relative">
                      <Image
                        src={world.image.src}
                        alt={world.image.alt}
                        width={800}
                        height={1000}
                        className="h-72 w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                          {world.audience}
                        </p>
                        <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                          {world.name}
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-3 p-5 text-sm leading-7 text-muted">
                      <p>{world.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Choose your path</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Compare solo access with the Unified Family Bundle.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Three plans. One goal: keep you inside the story long enough for fluency to become second nature.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingContent.offers.map((offer, index) => {
              const featured = offer.name === "Unified Family Bundle";
              const meta = offerMeta[offer.name];

              return (
                <article
                  key={offer.name}
                  className={`copy-stack floating-card rounded-[2rem] p-7 ${featured ? "glass-panel border border-primary/30 shadow-2xl" : "border border-line/80 bg-black/20"} ${index === 1 ? "floating-card-alt" : ""}`}
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    {meta.subtitle}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-bold text-foreground">
                    {offer.name}
                  </h3>
                  <p className="mt-5 font-serif text-5xl font-bold text-foreground">
                    {offer.price}
                    <span className="ml-2 text-base font-semibold text-muted">/ month</span>
                  </p>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {offer.description}
                  </p>
                  <ul className="mt-6 grid gap-2">
                    {meta.bullets.map((label) => (
                      <li
                        key={label}
                        className="rounded-[1.2rem] border border-line/80 bg-black/20 px-3 py-2 text-xs font-semibold tracking-[0.08em] text-foreground"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/contact"
                    className="mt-6 w-full"
                    variant={featured ? "primary" : "secondary"}
                  >
                    {meta.cta}
                  </ButtonLink>
                </article>
              );
            })}
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
                Shared progress, individual journeys across ages and worlds.
              </li>
              <li className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4">
                The 600-scenario vault from years of hand-crafted mission design.
              </li>
              <li className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4">
                Zero hidden fees. Cancel any time with no per-lesson upsells.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">The Comparison</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Feature-by-feature plan snapshot.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {["LemonNoir Solo", "LemonGrove Solo", "Unified Family Bundle"].map(
              (plan) => (
                <article
                  key={plan}
                  className="copy-stack floating-card rounded-[1.6rem] border border-line/80 bg-black/20 p-5"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {plan}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {pricingContent.comparisonRows.map((row) => {
                      const value =
                        plan === "LemonNoir Solo"
                          ? row.noirSolo
                          : plan === "LemonGrove Solo"
                            ? row.groveSolo
                            : row.bundle;

                      return (
                        <li
                          key={row.feature}
                          className="flex items-start justify-between gap-4 border-b border-line/60 pb-3 last:border-b-0 last:pb-0"
                        >
                          <span className="text-foreground">{row.feature}</span>
                          <span className="text-right font-semibold text-foreground">
                            {value}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ),
            )}
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
