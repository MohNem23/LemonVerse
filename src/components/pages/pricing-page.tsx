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
      "Intrigue, negotiation, and real conversation. This is the mature world in the bundle.",
    image: pricingContent.personas[1].image,
  },
  {
    name: "LemonGrove",
    audience: "Children",
    description:
      "Playful discovery, rhythm, and repetition. This is the child world in the bundle.",
    image: pricingContent.personas[0].image,
  },
] as const;

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
                  One subscription covers the two worlds, while scenarios and
                  games stay organized as library entries inside each world.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Two worlds", "Five learner profiles", "$8.99 / month"].map(
                    (item) => (
                      <div
                        key={item}
                        className="copy-stack floating-card rounded-[1.4rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground"
                      >
                        {item}
                      </div>
                    ),
                  )}
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
                      <p className="text-foreground">
                        Scenarios and games are library entries inside the
                        world, not the entire product.
                      </p>
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
            <span className="eyebrow">Offer catalog</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Compare solo access with the family bundle.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              The cards below make the plan structure obvious without relying on
              a table to do all the work.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingContent.offers.map((offer, index) => {
              const featured = offer.name === "Unified Family Bundle";

              return (
                <article
                  key={offer.name}
                  className={`copy-stack floating-card rounded-[2rem] p-7 ${featured ? "glass-panel border border-primary/30 shadow-2xl" : "border border-line/80 bg-black/20"} ${index === 1 ? "floating-card-alt" : ""}`}
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    {featured ? "Recommended" : "Plan"}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl font-bold text-foreground">
                    {offer.name}
                  </h3>
                  <p className="mt-5 font-serif text-5xl font-bold text-foreground">
                    {offer.price}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {offer.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(featured
                      ? [
                          "Full access",
                          "Shared progress",
                          "Mixed-age households",
                        ]
                      : offer.name === "Noir Solo"
                        ? ["1 profile", "LemonNoir only", "Advanced"]
                        : ["1 profile", "LemonGrove only", "Beginner"]
                    ).map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-line/80 bg-black/20 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  {featured && (
                    <p className="mt-6 rounded-[1.3rem] border border-primary/20 bg-primary/10 px-4 py-3 text-sm leading-7 text-foreground">
                      Best for mixed-age households that want one shared plan
                      across both worlds.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Plan comparison</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              The bundle is the simplest path across both worlds.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {["Noir Solo", "Grove Solo", "Unified Family Bundle"].map(
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
                        plan === "Noir Solo"
                          ? row.noirSolo
                          : plan === "Grove Solo"
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
        <Container>
          <div className="copy-stack floating-card rounded-[2.5rem] border border-line/80 bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-12 text-center sm:px-8 sm:py-14">
            <p className="font-serif text-4xl font-bold italic text-primary sm:text-5xl">
              Started at 4. Still using it at 84.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">
              {pricingContent.banner}
            </p>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Pricing FAQ</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Pricing answers in a format that is easy to quote.
            </h2>
          </div>
          <FaqList items={pricingFaqs} />
        </Container>
      </section>
    </div>
  );
}
