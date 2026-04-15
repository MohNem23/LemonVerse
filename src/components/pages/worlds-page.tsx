import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";

const worlds = [
  {
    name: "LemonNoir",
    audience: "Teens & Adults",
    title: "LemonNoir is a world built for consequence.",
    description:
      "Here, the story doesn't move unless you speak. Designed for those who need real-world confidence, this is high-stakes immersion where every conversation is a mission. \n\n The Noir Library: 200+ Cinematic Scenarios In LemonNoir, you are the protagonist. Our AI acts as your professional scene partner, reacting in real-time to your tone, your vocabulary, and your decisions.",
    image: "/media/home/noir-scenario.jpg",
    alt: "A noir-style scene showing a tense dinner moment in dramatic light.",
    entries: [
      {
        title: "The Case Files",
        description:
          "You ARE the detective. Interrogate suspects, piece together clues, and solve mysteries in a masterfully scripted thriller.",
        image: "/media/worlds/games/case-files.png",
      },
      {
        title: "The Boardroom",
        description:
          "High-pressure interview loops and negotiation scenes designed to prepare you for the international stage.",
        image: "/media/worlds/games/boardroom.png",
      },
      {
        title: "The Social",
        description:
          "Navigate complex real-world moments, from high-stakes first dates in Paris to resolving travel crises in Tokyo.",
        image: "/media/worlds/games/social.png",
      },
    ],
  },
  {
    name: "LemonGrove",
    audience: "Children 3-12",
    title: "Where Curiosity Becomes Fluency.",
    description:
      "LemonGrove is a world of endless wonder. We've replaced the \"homework\" feel of traditional apps with a safe, narrator-led discovery engine. Children don't follow a curriculum; they follow their curiosity. \n\n 400+ Immersive Adventures The LemonGrove library is vast, designed to cover every interest a child can imagine. One day they are deep-sea explorers; the next, they are royalty or astronauts.",
    image: "/media/home/grove-fishtopus.jpg",
    alt: "An underwater scene with a whimsical character exploring a colorful reef.",
    entries: [
      {
        title: "The Explorer's Path",
        description:
          "From the coral reefs to the red dust of Mars outposts and the deep green of the Amazon jungle.",
        image: "/media/worlds/games/explorer-path.png",
      },
      {
        title: "The Creator's Studio",
        description:
          "High-engagement activities like baking in a French patisserie, designing for a Princess Ball, or running a mountain ski lodge.",
        image: "/media/worlds/games/creator-studio.png",
      },
      {
        title: "The Discovery Loops",
        description:
          'Rhythm-based games and "buddy building" scenarios that turn sound recognition and first-word confidence into a natural reflex.',
        image: "/media/worlds/games/discovery-loops.png",
      },
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
      "Short, high-frequency loops like rhythm games, memory plays, and character-driven mini-games that reinforce your vocabulary without breaking the immersion.",
  },
  {
    title: "The 600+ Promise",
    description:
      "With a launch library of over 600 battle-tested scenarios, LemonVerse provides the variety needed for true retention. We've done the work to ensure that \"boredom\" is never a barrier to your family's fluency.",
  },
] as const;

export function WorldsPage() {
  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="space-y-6">
          <span className="eyebrow">Worlds</span>
          <h1 className="max-w-3xl font-serif text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
            Two Worlds. Unlimited Journeys.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            LemonVerse is an ecosystem of immersion. We&apos;ve built two
            distinct flagship worlds: LemonNoir and LemonGrove which are
            designed to bridge the gap between &quot;studying&quot; a language
            and actually living in it. Inside these worlds, you&apos;ll find a
            library of over 600+ hand-crafted adventures, ensuring your path to
            fluency is never the same story twice.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/methodology">Explore the Methodology</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              See the Family Bundle
            </ButtonLink>
          </div>
        </Container>
      </section>

      {worlds.map((world, index) => (
        <section key={world.name} className="screen-section py-16">
          <Container className="space-y-10">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background/35 to-transparent" />
                <div className="glass-panel floating-card overflow-hidden rounded-[2rem] surface-ring">
                  <Image
                    src={world.image}
                    alt={world.alt}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 max-w-xs rounded-[1.4rem] border border-line bg-background/88 p-4 text-sm leading-6 text-foreground shadow-sm">
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
                <p className="text-base leading-8 text-muted whitespace-pre-line">
                  {world.description}
                </p>
              </div>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {world.entries.map((entry, entryIndex) => (
                <div
                  key={entry.title}
                  className="mb-6 break-inside-avoid text-center"
                >
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    width={400}
                    height={300}
                    className="mx-auto mb-4 w-full rounded-[1.4rem] object-cover"
                  />

                  <h3 className="mb-3 text-center text-lg font-semibold text-foreground">
                    {entry.title}
                  </h3>

                  <div
                    className={`rounded-[1.4rem] border border-line/80 bg-black/20 p-4 text-left ${
                      entryIndex % 2 === 0
                        ? "floating-card"
                        : "floating-card-alt"
                    }`}
                  >
                    <p className="text-sm leading-7 text-muted">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
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
                When you enter a LemonVerse world you are accessing a deep,
                intelligent library of content that adapts to your growth.
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
