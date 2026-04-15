"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoImage from "@/app/logo.png";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { headerLinks } from "@/content/navigation";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-xl">
      <Container className="max-w-[82rem] flex items-center justify-between gap-4 py-3 xl:px-8 2xl:px-10">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="LemonVerse home"
        >
          <Image
            src={logoImage}
            alt="LemonVerse"
            priority
            sizes="(max-width: 640px) 36px, 40px"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
        </Link>
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.14em] text-primary uppercase transition hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="LemonVerse home"
          >
            LemonVerse
          </Link>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm font-semibold tracking-[0.16em] text-muted uppercase lg:flex xl:gap-6">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link-chip transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive(link.href) && "nav-link-chip-active text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink
            href="/pricing"
            variant="primary"
            className="shrink-0 whitespace-nowrap px-4 py-2.5 text-[0.78rem] tracking-[0.12em]"
          >
            Begin your journey.
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line/80 bg-black/30 p-3 text-foreground transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-line/80 bg-background/95 lg:hidden">
          <Container className="max-w-[82rem] pb-4 xl:px-8 2xl:px-10">
            <nav className="grid gap-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              {headerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "nav-link-chip block px-4 py-3 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive(link.href) && "nav-link-chip-active text-primary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ButtonLink
              href="/pricing"
              variant="primary"
              className="mt-4 w-full sm:hidden"
            >
              Begin your journey.
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
