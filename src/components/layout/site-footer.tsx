import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/logo.png";
import { Container } from "@/components/layout/container";
import { footerLinkGroups } from "@/content/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/80 bg-black/30 py-10">
      <Container className="space-y-8">
        {/* Top row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand block */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="LemonVerse home"
              >
                <Image
                  src={logoImage}
                  alt="LemonVerse"
                  sizes="40px"
                  className="h-10 w-10 object-contain"
                />
              </Link>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  LemonVerse Narrative Systems
                </p>
                <p className="font-serif text-lg font-bold text-foreground">
                  Two Worlds. 600+ Stories. One Household.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted">
              LemonVerse replaces repetitive drills with high-stakes immersion.
              From the cinematic mysteries of LemonNoir to the whimsical
              adventures of LemonGrove, we build narrative engines that turn
              language acquisition into a lifelong reflex.
            </p>
          </div>

          {/* Nav row */}
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-12">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="min-w-[140px]">
                <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </h2>
                <ul className="space-y-2 text-sm text-muted">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle meta row */}
        <div className="flex flex-col gap-3 border-t border-line/70 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <span>Built by a teacher</span>
          <span>Tested by 2,000 students</span>
          <span>Loved by families</span>
          <span>Story over streaks</span>
          <span>Acquisition over memorization</span>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col gap-2 border-t border-line/70 pt-5 text-[11px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} LemonVerse Narrative Systems</span>
          <span>Narrative-driven language immersion.</span>
        </div>
      </Container>
    </footer>
  );
}
