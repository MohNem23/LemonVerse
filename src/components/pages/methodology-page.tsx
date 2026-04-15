import Image from "next/image";
import { BookOpenText, Quote, Sparkle, Target } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { FaqList } from "@/components/shared/faq-list";
import { methodologyFaqs } from "@/content/faqs";
import { methodologyContent } from "@/content/methodology";

export function MethodologyPage() {
  const heroQuote = methodologyContent.hero.quote;

  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="space-y-10">
          {/* TOP ROW */}
          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="space-y-7">
              <span className="eyebrow">{methodologyContent.hero.eyebrow}</span>

              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
                Language isn&apos;t{" "}
                <span className="italic text-primary-soft">learned</span>.
                It&apos;s <span className="gradient-text">acquired.</span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-muted">
                {methodologyContent.hero.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/pricing">Compare Plans</ButtonLink>
                <ButtonLink href="/worlds" variant="secondary">
                  Explore the Worlds
                </ButtonLink>
              </div>
            </article>

            <aside className="glass-panel floating-card-alt overflow-hidden rounded-[2rem] surface-ring">
              <div className="grid gap-5 p-6">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={methodologyContent.hero.image.src}
                    alt={methodologyContent.hero.image.alt}
                    width={900}
                    height={1100}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="floating-card-slow rounded-[1.6rem] border border-line/80 bg-black/20 p-5">
                  <Quote className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-serif text-xl italic leading-8 text-foreground sm:text-2xl sm:leading-9">
                    {heroQuote}
                  </p>
                  <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {methodologyContent.author.name} &middot;{" "}
                    {methodologyContent.author.role}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* 👇 SUMMARY — NOW FULL WIDTH BELOW */}
          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {methodologyContent.hero.summary.map((item, index) => (
              <li
                key={item}
                className={`mb-4 break-inside-avoid rounded-[1.5rem] p-4 text-sm leading-7 text-foreground surface-ring ${
                  index === 1
                    ? "floating-card-alt"
                    : index === 2
                      ? "floating-card-slow"
                      : "floating-card"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="screen-section py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why traditional apps fail</span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              {methodologyContent.shift.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              {methodologyContent.shift.description}
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-line/70 bg-background/70 backdrop-blur-sm">
            {/* subtle background accents */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* mobile shift label */}
            <div className="flex items-center justify-center border-b border-line/70 px-6 py-4 lg:hidden">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkle className="h-4 w-4" />
                The shift
              </div>
            </div>

            <div className="relative grid lg:grid-cols-2">
              {/* left */}
              <article className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line/80 bg-foreground/[0.03] text-muted-foreground">
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                      Old model
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {methodologyContent.shift.columns[0].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                      {methodologyContent.shift.columns[0].body}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-line/70 pt-6">
                  <ul className="space-y-4">
                    {methodologyContent.shift.columns[0].bullets.map(
                      (bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-foreground/85"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                          <span>{bullet}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </article>

              {/* center divider desktop */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 lg:flex items-center justify-center">
                <div className="relative flex h-full items-center justify-center">
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line/70" />
                  <div className="relative z-10 flex flex-col items-center gap-3"></div>
                </div>
              </div>

              {/* right */}
              <article className="border-t border-line/70 px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:border-line/70 lg:px-10 lg:py-12">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <Sparkle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      LemonNoir model
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {methodologyContent.shift.columns[1].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                      {methodologyContent.shift.columns[1].body}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-line/70 pt-6">
                  <ul className="space-y-4">
                    {methodologyContent.shift.columns[1].bullets.map(
                      (bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-foreground"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-[10px] font-bold text-primary">
                            +
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="glass-panel floating-card relative overflow-hidden rounded-[2.3rem] p-8 surface-ring">
            <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Text */}
              <div className="flex flex-col justify-center space-y-4">
                <span className="eyebrow">Narrative pedagogy</span>

                <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
                  {methodologyContent.bento.title}
                </h2>

                <p className="text-base leading-7 text-muted">
                  {methodologyContent.bento.description}
                </p>
              </div>

              {/* Image */}
              <div className="h-full overflow-hidden rounded-[2rem]">
                <Image
                  src={methodologyContent.bento.image.src}
                  alt={methodologyContent.bento.image.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
          <article className="glass-panel floating-card-slow overflow-hidden rounded-[2.3rem] surface-ring">
            <div className="overflow-hidden">
              <Image
                src={methodologyContent.bento.sideCard.image.src}
                alt={methodologyContent.bento.sideCard.image.alt}
                width={900}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-4 p-7">
              <span className="eyebrow">Outcome</span>
              <h3 className="font-serif text-3xl font-bold text-foreground">
                {methodologyContent.bento.sideCard.title}
              </h3>
              <p className="text-sm leading-7 text-muted">
                {methodologyContent.bento.sideCard.description}
              </p>
            </div>
          </article>
        </Container>
      </section>

      <section className="screen-section py-20">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-line/70">
            {methodologyContent.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex min-w-0 flex-col gap-4 px-8 py-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpenText className="h-5 w-5" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-muted">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Methodology FAQ</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Questions learners and families ask first.
            </h2>
          </div>
          <FaqList items={methodologyFaqs} />
        </Container>
      </section>
    </div>
  );
}
