"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { cn } from "@/lib/cn";

type ContactFormState = {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  organization: "",
  topic: "For Families",
  message: "",
};

const contactTracks = [
  {
    title: "For Families",
    body: "Need help with your subscription? Curious about a specific scenario in the library? Our team is ready to assist.",
  },
  {
    title: "For Educators",
    body: "Interested in bringing Narrative Immersion to your classroom? We are currently selecting partners for our school pilot programs.",
  },
  {
    title: "For Partners & Press",
    body: "Looking to collaborate on a world-building project or share the LemonVerse story with your audience?",
  },
] as const;

const promiseItems = [
  {
    title: "A Human Touch",
    body: "We don't believe in automated loops for our partners. Every inquiry is reviewed by a member of our team to ensure you get a thoughtful, direct response.",
  },
  {
    title: "Direct Routing",
    body: "Whether it's a question about pedagogy or engineering, your message is routed immediately to the person best equipped to answer it.",
  },
  {
    title: "Rapid Response",
    body: "We know your time is valuable. Expect to hear back from us within 24-48 hours, if not sooner.",
  },
] as const;

const topics = [
  "For Families",
  "For Educators",
  "For Partners & Press",
  "School Pilot",
  "Billing / account",
] as const;

export function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json().catch(() => null)) as {
        message?: string;
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus({
          kind: "error",
          message:
            payload?.error ??
            "We could not send that message yet. Please try again.",
        });
        return;
      }

      setForm(initialState);
      setStatus({
        kind: "success",
        message:
          payload?.message ??
          "Message received. A team member will follow up.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pb-24">
      <section className="screen-section py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <span className="eyebrow">Contact us</span>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              Let&apos;s write the next chapter together.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Whether you&apos;re a parent with a question, an educator looking for a school pilot, or a partner ready to help us expand the universe, we&apos;d love to hear from you.
              At LemonVerse, we value real conversation as much as we value immersion.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactTracks.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(
                    "glass-panel rounded-[1.6rem] border border-line/80 bg-black/20 p-5 surface-ring",
                    index === 0 && "floating-card",
                    index === 1 && "floating-card-alt",
                    index === 2 && "floating-card-slow",
                  )}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/methodology">Explore the Science</ButtonLink>
              <ButtonLink href="/faq" variant="secondary">
                Find Quick Answers
              </ButtonLink>
            </div>
          </div>

          <div className="glass-panel floating-card-alt relative overflow-hidden rounded-[2.3rem] p-6 surface-ring">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,208,63,0.18),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />
            <form className="relative grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="rounded-[1.2rem] border border-line/80 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="rounded-[1.2rem] border border-line/80 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    placeholder="name@domain.com"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Organization
                </span>
                <input
                  value={form.organization}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      organization: event.target.value,
                    }))
                  }
                  className="rounded-[1.2rem] border border-line/80 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Family, school, studio, or company"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Topic
                </span>
                <select
                  value={form.topic}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      topic: event.target.value,
                    }))
                  }
                  className="rounded-[1.2rem] border border-line/80 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Message
                </span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="rounded-[1.4rem] border border-line/80 bg-background/70 px-4 py-3 text-sm leading-7 text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us what you need and who should follow up."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-primary px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_36px_rgba(244,208,63,0.2)] [text-shadow:0_1px_1px_rgba(0,0,0,0.76),0_0_10px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
                <p className="text-sm leading-7 text-muted">
                  Every inquiry is reviewed by a human team member.
                </p>
              </div>

              {status ? (
                <div
                  className={cn(
                    "rounded-[1.4rem] border px-4 py-3 text-sm leading-7",
                    status.kind === "success"
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-red-400/30 bg-red-400/10 text-foreground",
                  )}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </div>
        </Container>
      </section>

      <section className="screen-section py-10">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="glass-panel floating-card rounded-[2rem] p-8 surface-ring">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Our Communication Promise
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
              A direct response path, every time.
            </h2>
            <div className="mt-5 grid gap-4">
              {promiseItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4"
                >
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel floating-card-slow overflow-hidden rounded-[2rem] surface-ring">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-gradient-to-br from-primary/14 via-background/20 to-accent/14 p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  While You Wait...
                </p>
                <h3 className="mt-4 font-serif text-3xl font-bold text-foreground">
                  Explore, learn, and connect.
                </h3>
              </div>
              <div className="space-y-4 p-8">
                <a
                  href="/methodology"
                  className="block rounded-[1.2rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground transition hover:border-primary/40"
                >
                  Explore the Science: Read our Methodology to see why narrative immersion works.
                </a>
                <a
                  href="/faq"
                  className="block rounded-[1.2rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground transition hover:border-primary/40"
                >
                  Find Quick Answers: Check our FAQ for immediate info on pricing and bundles.
                </a>
                <div className="rounded-[1.2rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground">
                  Join the Community: Follow our journey on{" "}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-primary/60 underline-offset-4 transition hover:text-primary"
                  >
                    YouTube
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-primary/60 underline-offset-4 transition hover:text-primary"
                  >
                    Instagram
                  </a>
                  .
                </div>
                <ButtonLink href="/faq" variant="secondary">
                  Open FAQ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}
