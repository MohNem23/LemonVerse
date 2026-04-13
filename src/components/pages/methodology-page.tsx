import Image from "next/image";
import { BookOpenText, Quote, Sparkle, Target } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { FaqList } from "@/components/shared/faq-list";
import { methodologyFaqs } from "@/content/faqs";
import { methodologyContent } from "@/content/methodology";

export function MethodologyPage() {
  const heroQuote =
    "Today she played with her Barbie in English. She didn't even notice. That was the moment I knew she had stopped translating and started living.";

  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
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
            <ul className="grid gap-3 sm:grid-cols-3">
              {methodologyContent.hero.summary.map((item, index) => (
                <li
                  key={item}
                  className={`glass-panel rounded-[1.5rem] p-4 text-sm leading-7 text-foreground surface-ring ${
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pricing">Compare Plans</ButtonLink>
              <ButtonLink href="/faq" variant="secondary">
                Read FAQ
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
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Method overview</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              {methodologyContent.shift.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted">
              {methodologyContent.shift.description}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {methodologyContent.shift.columns.map((column, index) => (
              <article
                key={column.title}
                className={`glass-panel rounded-[2rem] p-8 surface-ring ${
                  index === 0 ? "floating-card" : "floating-card-alt"
                }`}
              >
                <div className="inline-flex rounded-full p-3 text-primary">
                  {index === 0 ? (
                    <Target className="h-5 w-5" />
                  ) : (
                    <Sparkle className="h-5 w-5" />
                  )}
                </div>
                <h3 className="mt-5 font-serif text-3xl font-bold text-foreground">
                  {column.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {column.body}
                </p>
                <ul className="mt-6 grid gap-3">
                  {column.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[1.4rem] border border-line/80 bg-black/20 px-4 py-3 text-sm leading-7 text-foreground"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {methodologyContent.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`glass-panel rounded-[2rem] p-7 surface-ring ${
                index === 1 ? "floating-card-alt" : "floating-card"
              }`}
            >
              <BookOpenText className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <section className="screen-section py-16">
        <Container className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="glass-panel floating-card relative overflow-hidden rounded-[2.3rem] p-8 surface-ring">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <span className="eyebrow">Neurolinguistics</span>
                <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
                  {methodologyContent.bento.title}
                </h2>
                <p className="text-base leading-8 text-muted">
                  {methodologyContent.bento.description}
                </p>
                <div className="rounded-[1.5rem] border border-line/80 bg-black/20 p-5">
                  <p className="font-serif text-4xl font-bold text-foreground">
                    {methodologyContent.bento.stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {methodologyContent.bento.stat.label}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem]">
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
              <span className="eyebrow">Flow</span>
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

      <section className="screen-section py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Method FAQ</span>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Questions parents, learners, and search engines ask first.
            </h2>
          </div>
          <FaqList items={methodologyFaqs} />
        </Container>
      </section>
    </div>
  );
}
