import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { FaqList } from "@/components/shared/faq-list";
import { homeFaqs } from "@/content/faqs";
import { homeContent } from "@/content/home";

const worldCards = [
  {
    name: "LemonNoir",
    audience: "Teens and adults",
    title: "Intrigue. Tension. Choice.",
    description:
      "Step into LemonNoir, where every conversation moves the plot forward. Whether you're interrogating a suspect in a French villa, closing a high-stakes deal in Tokyo, or navigating a first date in Madrid, you are living through a masterfully scripted mystery.",
    image: homeContent.worlds[0].image,
    entries: ["Case files", "Boardroom missions", "Social stakes"],
  },
  {
    name: "LemonGrove",
    audience: "Children",
    title: "Curiosity without limits.",
    description:
      "In LemonGrove, children don't study; they explore. We've designed these worlds, from bioluminescent reefs to Mars outposts, to be the ultimate language playground.",
    image: homeContent.worlds[1].image,
    entries: ["Explorer quests", "Creator studio", "Discovery loops"],
  },
] as const;

export function HomePage() {
  return (
    <div className="pb-24">
      <section className="screen-section relative overflow-hidden pb-18 pt-10">
        <div className="absolute inset-0">
          <Image
            src={homeContent.hero.image.src}
            alt={homeContent.hero.image.alt}
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-background/60 to-background" />
        </div>
        <Container className="relative grid items-end gap-16 pt-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl space-y-8">
            <span className="eyebrow">{homeContent.hero.eyebrow}</span>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-6xl lg:text-8xl">
                Don&apos;t drill the language. <span className="gradient-text">Live the story.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {homeContent.hero.description}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {homeContent.hero.summary.map((item) => (
                <div
                  key={item}
                  className="copy-stack floating-card rounded-3xl p-4 text-sm leading-6 text-foreground surface-ring"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={homeContent.hero.primaryAction.href}
                className="sm:min-w-48"
              >
                {homeContent.hero.primaryAction.label}
              </ButtonLink>
              <ButtonLink
                href={homeContent.hero.secondaryAction.href}
                variant="secondary"
                className="sm:min-w-56"
              >
                {homeContent.hero.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
          <aside className="glass-panel dynamic-panel floating-card rounded-[2rem] p-6 surface-ring">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Quick answer
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
              Two Worlds. One Ecosystem.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              LemonVerse is built on the belief that language is acquired through immersion, not memorization. We&apos;ve designed LemonNoir and LemonGrove to meet learners exactly where they are.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {homeContent.factStrip.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`rounded-[1.5rem] border border-line/80 bg-black/20 p-4 ${
                    index % 2 === 0 ? "floating-card" : "floating-card-alt"
                  }`}
                >
                  <p className="text-2xl font-bold text-foreground">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <div className="py-8">
        <div
          className="story-outline home-separator mx-auto h-36 w-px"
          aria-hidden="true"
        />
      </div>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="eyebrow">Audience design</span>
              <h2 className="max-w-2xl font-serif text-4xl font-bold text-foreground sm:text-5xl">
                Two Worlds. One Ecosystem.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                LemonVerse balances high-stakes tension for adults with whimsical discovery for children. Each world is purpose-built, but both are designed around immersive language acquisition.
              </p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {worldCards.map((world, index) => (
              <article
                key={world.name}
                className={`copy-stack floating-card rounded-[2rem] p-6 surface-ring ${index === 1 ? "floating-card-alt" : ""}`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {world.audience}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                  {world.name}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-foreground">
                  {world.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {world.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {world.entries.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-full border border-line/80 bg-black/20 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-foreground"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <div className="story-outline">
        {worldCards.map((world, index) => (
          <section
            key={world.name}
            id={index === 0 ? "worlds" : "grove"}
            className="screen-section py-18"
          >
            <Container
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div
                  className={`absolute -inset-6 blur-3xl ${index === 0 ? "bg-primary/10" : "bg-accent/10"}`}
                />
                <div className="glass-panel floating-card relative overflow-hidden rounded-[2rem] surface-ring">
                  <Image
                    src={world.image.src}
                    alt={world.image.alt}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 max-w-xs rounded-[1.4rem] bg-background/88 p-4 text-sm leading-6 text-foreground shadow-2xl">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      {world.name}
                    </p>
                    <p className="mt-2">
                      {index === 0
                        ? "Every conversation changes the story."
                        : "Curiosity unlocks every path."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="copy-stack floating-card-slow space-y-6 rounded-[2rem] p-6 surface-ring lg:p-8">
                <span className="eyebrow">
                  {world.name} / {world.audience}
                </span>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">
                  {world.title}
                </h2>
                <p className="max-w-xl text-base leading-8 text-muted">
                  {world.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {world.entries.map((entry, entryIndex) => (
                    <div
                      key={entry}
                      className={`rounded-[1.4rem] border border-line/80 bg-black/20 p-4 ${entryIndex === 1 ? "floating-card-alt" : "floating-card"}`}
                    >
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                        Signature loop
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-foreground">
                        {entry}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className="screen-section py-16">
        <Container>
          <div className="glass-panel dynamic-panel grid gap-8 rounded-[2.5rem] p-8 surface-ring lg:grid-cols-[1fr_0.68fr] lg:p-12">
            <div className="space-y-6">
              <span className="eyebrow">The pricing section</span>
              <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
                {homeContent.bundle.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted">
                {homeContent.bundle.description}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {homeContent.bundle.features.map((feature, index) => (
                  <li
                    key={feature}
                    className={`copy-stack rounded-[1.5rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground ${index === 1 ? "floating-card-alt" : "floating-card"}`}
                  >
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-line/80 bg-gradient-to-br from-primary/12 to-accent/12 p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Monthly investment
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif text-5xl font-bold text-foreground sm:text-6xl">
                  $8.99
                </span>
                <span className="pb-2 text-sm font-semibold tracking-[0.16em] text-muted uppercase">
                  /month
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted">
                Shared progress. Individual journeys. One subscription for the whole household.
              </p>
              <ButtonLink
                href={homeContent.bundle.cta.href}
                className="mt-8 w-full"
              >
                {homeContent.bundle.cta.label}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Answers families ask first.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Direct answers for parents, professionals, and first-time learners deciding if LemonVerse fits their goals.
            </p>
          </div>
          <FaqList items={homeFaqs} />
        </Container>
      </section>
    </div>
  );
}
