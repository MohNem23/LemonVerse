"use client";

import { useState, type FormEvent } from "react";
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
  topic: "Families",
  message: "",
};

const sharedTrackDescription =
  "At LemonVerse, we value real conversation as much as we value immersion. Reach out, and let's write the next chapter together.";

const contactTracks = [
  {
    key: "families",
    tabLabel: "Families",
    topic: "Families",
    body: "Need help with your subscription? Curious about a specific scenario in the library? Our team is ready to assist.",
  },
  {
    key: "educators",
    tabLabel: "Educators",
    topic: "Educators",
    body: "Interested in bringing Narrative Immersion to your classroom? We are currently selecting partners for our school pilot programs.",
  },
  {
    key: "partners",
    tabLabel: "Partners",
    topic: "Partners",
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

export function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [activeTrack, setActiveTrack] = useState<
    (typeof contactTracks)[number]["key"]
  >(contactTracks[0].key);
  const [activePanel, setActivePanel] = useState<"form" | "while-you-wait">(
    "form",
  );
  const [submissionMessage, setSubmissionMessage] = useState(
    "Message received. A team member will follow up.",
  );
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeTrackData =
    contactTracks.find((track) => track.key === activeTrack) ??
    contactTracks[0];

  function handleTrackChange(track: (typeof contactTracks)[number]) {
    setActiveTrack(track.key);
    setForm((current) => ({
      ...current,
      topic: track.topic,
    }));
    setStatus(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);
    setActivePanel("form");

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

      const nextMessage =
        payload?.message ?? "Message received. A team member will follow up.";

      setForm({
        ...initialState,
        topic: activeTrackData.topic,
      });
      setSubmissionMessage(nextMessage);
      setStatus({
        kind: "success",
        message: nextMessage,
      });
      setActivePanel("while-you-wait");
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
            <span className="eyebrow">Contact Us</span>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              Let&apos;s write the next chapter together.
            </h1>
            <div className="max-w-xl space-y-3">
              <p className="text-lg leading-8 text-muted">
                {sharedTrackDescription}
              </p>
              <p className="text-base leading-8 text-foreground">
                {activeTrackData.body}
              </p>
            </div>
          </div>

          <div className="glass-panel floating-card-alt relative overflow-hidden rounded-[2.3rem] p-6 surface-ring">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,208,63,0.18),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />
            <div className="relative overflow-hidden">
              <div
                className={cn(
                  "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  activePanel === "form"
                    ? "relative translate-x-0 opacity-100"
                    : "absolute inset-0 translate-x-full opacity-0 pointer-events-none",
                )}
                aria-hidden={activePanel !== "form"}
              >
                <form
                  className="relative grid content-start gap-5 overflow-y-auto pr-1"
                  onSubmit={handleSubmit}
                >
                  <div className="rounded-[1.3rem] border border-line/80 bg-black/20 p-2">
                    <div
                      role="tablist"
                      aria-label="Contact audience"
                      className="grid grid-cols-3 gap-1"
                    >
                      {contactTracks.map((track) => {
                        const isActive = track.key === activeTrack;

                        return (
                          <button
                            key={track.key}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => handleTrackChange(track)}
                            className={cn(
                              "rounded-[0.95rem] border px-2 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition sm:px-3",
                              isActive
                                ? "border-primary/45 bg-background/85 text-foreground"
                                : "border-transparent bg-black/10 text-muted hover:border-primary/25 hover:text-foreground",
                            )}
                          >
                            {track.tabLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

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
                      className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.16em] text-black uppercase transition-all duration-200 hover:bg-primary-soft disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                    <p className="text-sm leading-7 text-muted">
                      Every inquiry is reviewed by a human team member.
                    </p>
                  </div>

                  {status?.kind === "error" ? (
                    <div
                      className="rounded-[1.4rem] border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm leading-7 text-foreground"
                      aria-live="polite"
                    >
                      {status.message}
                    </div>
                  ) : null}
                </form>
              </div>

              <div
                className={cn(
                  "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  activePanel === "while-you-wait"
                    ? "relative translate-x-0 opacity-100"
                    : "absolute inset-0 translate-x-full opacity-0 pointer-events-none",
                )}
                aria-hidden={activePanel !== "while-you-wait"}
              >
                <div className="relative grid content-start gap-5 rounded-[1.6rem] border border-line/80 bg-black/20 p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    While You Wait...
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Explore, learn, and connect.
                  </h2>
                  <p
                    className="text-sm leading-7 text-muted"
                    aria-live="polite"
                  >
                    {submissionMessage}
                  </p>

                  <a
                    href="/methodology"
                    className="block rounded-[1.2rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground transition hover:border-primary/40"
                  >
                    Explore the Science: Read our Methodology to see why
                    narrative immersion works.
                  </a>
                  <a
                    href="/faq"
                    className="block rounded-[1.2rem] border border-line/80 bg-black/20 p-4 text-sm leading-7 text-foreground transition hover:border-primary/40"
                  >
                    Find Quick Answers: Check our FAQ for immediate info on
                    pricing and bundles.
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

                  <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setActivePanel("form");
                        setStatus(null);
                      }}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold tracking-[0.14em] text-black uppercase transition-colors duration-200 hover:bg-primary-soft"
                    >
                      Send another message
                    </button>
                    <ButtonLink href="/faq" variant="secondary">
                      Open FAQ
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <article className="rounded-[2rem] p-8">
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
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}
