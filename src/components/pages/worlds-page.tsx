import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";

const worlds = [
  {
    name: "LemonNoir",
    audience: "Teens & Adults",
    title: "LemonNoir is a world built for consequence.",
    description:
      "Here, the story doesn't move unless you speak. Designed for those who need real-world confidence, this is high-stakes immersion where every conversation is a mission.",
    image: "/media/home/noir-scenario.jpg",
    alt: "A noir-style scene showing a tense dinner moment in dramatic light.",
    entries: [
      "The Noir Library: 200+ cinematic scenarios",
      "The Case Files: interrogate suspects and solve mysteries",
      "The Boardroom: interviews and negotiations for the international stage",
      "The Social: high-stakes real-world moments from dates to travel crises",
    ],
  },
  {
    name: "LemonGrove",
    audience: "Children 3-12",
    title: "Where curiosity becomes fluency.",
    description:
      "LemonGrove is a world of endless wonder. We've replaced the homework feel of traditional apps with a safe, narrator-led discovery engine. Children don't follow a curriculum; they follow their curiosity.",
    image: "/media/home/grove-fishtopus.jpg",
    alt: "An underwater scene with a whimsical character exploring a colorful reef.",
    entries: [
      "The Grove Library: 400+ immersive adventures",
      "The Explorer's Path: from coral reefs to Mars outposts and the Amazon",
      "The Creator's Studio: baking, design, and role-based creative missions",
      "The Discovery Loops: rhythm games and buddy-building confidence loops",
    ],
  },
] as const;

const worldEngine = [
  {
    title: "Cinematic Scenarios",
    description:
      "Guided scenes from detective beats to travel tasks that move the world forward and force you to use language to progress.",
  },
  {
    title: "Immersive Interactions",
    description:
      "Short, high-frequency loops like rhythm games, memory plays, and character-driven mini-games that reinforce your vocabulary without breaking immersion.",
  },
  {
    title: "The 600+ Promise",
    description:
      "With a launch library of over 600 battle-tested scenarios, LemonVerse provides the variety needed for true retention. You never have to solve the same mystery twice.",
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
              Two Worlds. Unlimited Journeys.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              LemonVerse is an ecosystem of immersion. We&apos;ve built two distinct flagship worlds, LemonNoir and LemonGrove, designed to bridge the gap between studying a language and actually living in it.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/methodology">Explore the Methodology</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                See the Family Bundle
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
                      ? "Every conversation drives the mission."
                      : "Every choice opens a new path."}
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
              <div className="grid gap-4">
                {world.entries.map((entry, entryIndex) => (
                  <div
                    key={entry}
                    className={`rounded-[1.4rem] border border-line/80 bg-black/20 p-4 ${entryIndex % 2 === 0 ? "floating-card" : "floating-card-alt"}`}
                  >
                    <p className="text-sm font-semibold leading-7 text-foreground">
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
            <div className="space-y-4">
              <span className="eyebrow">The engine behind the story</span>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                What Makes a World work.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted">
                When you enter a LemonVerse world you are accessing a deep, intelligent library of content that adapts to your growth.
              </p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {worldEngine.map((item, index) => (
                <article
                  key={item.title}
                  className={`copy-stack rounded-[1.6rem] border border-line/80 bg-black/20 p-5 ${index === 1 ? "floating-card-alt" : "floating-card"}`}
                >
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
