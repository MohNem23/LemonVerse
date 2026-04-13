import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";

const worlds = [
  {
    name: "LemonNoir",
    audience: "Teens and adults",
    title: "A mature world for intrigue, conversation, and social stakes.",
    description:
      "LemonNoir is the world. Inside it, the library contains scenarios, games, and story beats that teach through pressure, nuance, and choice.",
    image: "/media/home/noir-scenario.jpg",
    alt: "A noir-style scene showing a tense dinner moment in dramatic light.",
    entries: ["Mystery cases", "Interview scenes", "Negotiation loops"],
  },
  {
    name: "LemonGrove",
    audience: "Children",
    title: "A playful world for first words, rhythm, and repetition.",
    description:
      "LemonGrove is the world. Fishtopus is one library entry inside a larger child-friendly set of scenarios and games.",
    image: "/media/home/grove-fishtopus.jpg",
    alt: "An underwater scene with a whimsical character exploring a colorful reef.",
    entries: ["Fishtopus quests", "Sound games", "Buddy building"],
  },
] as const;

export function WorldsPage() {
  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <span className="eyebrow">Worlds</span>
            <h1 className="max-w-3xl font-serif text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
              Two worlds, many library entries.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              LemonNoir and LemonGrove are the worlds. Scenarios and games are
              the entries inside the library that powers each world, which keeps
              the product model clear and expandable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pricing">See Pricing</ButtonLink>
              <ButtonLink href="/methodology" variant="secondary">
                Read the Method
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {worlds.map((world, index) => (
              <article
                key={world.name}
                className={`copy-stack floating-card rounded-[1.8rem] p-6 surface-ring ${index === 1 ? "floating-card-alt" : ""}`}
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  {world.audience}
                </p>
                <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">
                  {world.name}
                </h2>
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

      <section className="screen-section py-10">
        <Container>
          <div className="story-outline mx-auto h-28 w-px" aria-hidden="true" />
        </Container>
      </section>

      {worlds.map((world, index) => (
        <section key={world.name} className="screen-section py-16">
          <Container
            className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <div
                className={`absolute -inset-6 blur-3xl ${index === 0 ? "bg-primary/10" : "bg-accent/10"}`}
              />
              <div className="glass-panel floating-card overflow-hidden rounded-[2rem] surface-ring">
                <Image
                  src={world.image}
                  alt={world.alt}
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
                      ? "Tone: high-stakes, precise, and conversational."
                      : "Tone: playful, rhythmic, and easy to repeat."}
                  </p>
                </div>
              </div>
            </div>
            <div className="copy-stack floating-card-slow space-y-6 rounded-[2rem] p-6 surface-ring lg:p-8">
              <span className="eyebrow">
                {world.name} / {world.audience}
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
                {world.title}
              </h2>
              <p className="text-base leading-8 text-muted">
                {world.description}
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {world.entries.map((entry, entryIndex) => (
                  <div
                    key={entry}
                    className={`rounded-[1.4rem] border border-line/80 bg-black/20 p-4 ${entryIndex === 1 ? "floating-card-alt" : "floating-card"}`}
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                      Library entry
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

      <section className="screen-section py-16">
        <Container>
          <div className="glass-panel dynamic-panel rounded-[2.4rem] p-8 surface-ring lg:p-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <span className="eyebrow">Library model</span>
                <h2 className="font-serif text-4xl font-bold text-foreground">
                  A world is bigger than any single game.
                </h2>
                <p className="text-base leading-8 text-muted">
                  The game or scenario you see on screen is only one entry in
                  the library. Each world can contain multiple entry types, from
                  short interactions to longer story loops.
                </p>
              </div>
              <div className="grid gap-4">
                <article className="copy-stack floating-card rounded-[1.6rem] border border-line/80 bg-black/20 p-5">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Scenarios
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Interview rooms, detective beats, travel tasks, and other
                    guided scenes that move the world forward.
                  </p>
                </article>
                <article className="copy-stack floating-card-alt rounded-[1.6rem] border border-line/80 bg-black/20 p-5">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Games
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Rhythm loops, memory plays, and character-driven mini games
                    that sit inside the world rather than replacing it.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
