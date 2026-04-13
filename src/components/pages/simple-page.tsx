import { Container } from "@/components/layout/container";

type SimpleSection = {
  title: string;
  body: string[];
};

export function SimplePage({
  eyebrow,
  title,
  description,
  facts,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  facts: string[];
  sections: SimpleSection[];
}) {
  const motionClasses = [
    "floating-card",
    "floating-card-alt",
    "floating-card-slow",
  ] as const;

  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="font-serif text-5xl font-bold text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">
              {description}
            </p>
          </div>
          <div className="glass-panel floating-card rounded-[2rem] p-7 surface-ring">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Quick summary
            </p>
            <ul className="mt-5 grid gap-3">
              {facts.map((fact, index) => (
                <li
                  key={fact}
                  className={`rounded-[1.4rem] border border-line/80 bg-black/20 px-4 py-3 text-sm leading-7 text-foreground ${motionClasses[index % motionClasses.length]}`}
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="screen-section py-10">
        <Container className="grid gap-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`glass-panel rounded-[2rem] p-8 surface-ring ${motionClasses[index % motionClasses.length]}`}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4">
                {section.body.map((paragraph, paragraphIndex) => (
                  <article
                    key={paragraph}
                    className={`signal-strip rounded-[1.4rem] border border-line/80 bg-black/20 px-5 py-4 ${motionClasses[(index + paragraphIndex) % motionClasses.length]}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="signal-dot mt-1" aria-hidden="true" />
                      <p className="max-w-4xl text-sm leading-8 text-muted">
                        {paragraph}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </div>
  );
}
