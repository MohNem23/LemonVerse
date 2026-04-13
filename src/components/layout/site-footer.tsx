import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/logo.png";
import { Container } from "@/components/layout/container";
import { footerLinkGroups } from "@/content/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/80 bg-black/30 py-16">
      <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-4">
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
          <p className="max-w-xl text-sm leading-7 text-muted">
            LemonVerse Narrative Systems builds AI-powered language immersion
            through story worlds, roleplay, and family-friendly progression
            across every age band.
          </p>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Built for language learning, family continuity, and long-term
            retention.
          </p>
        </div>
        {footerLinkGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {group.title}
            </h2>
            <ul className="space-y-3 text-sm text-muted">
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
      </Container>
      <Container className="mt-10 border-t border-line/70 pt-6 text-xs tracking-[0.12em] text-muted uppercase">
        © {year} LemonVerse Narrative Systems. Narrative-driven language
        immersion.
      </Container>
    </footer>
  );
}
