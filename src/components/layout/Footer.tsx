import Link from "next/link";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { footerNavigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-card)] pt-20 pb-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 size-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] pb-16 border-b border-[var(--color-border)]">
          <div className="max-w-md">
            <BrandMark />
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              Atlas Studio delivers battle-tested templates, guides, checklists, and digital tools created specifically for developers, designers, and modern digital professionals.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                Updated Weekly
              </span>
              <span className="text-xs text-[var(--color-muted-foreground)]">
                100% Practical & Curated
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-foreground)]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-[var(--color-muted-foreground)] transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                      >
                        <span>{link.label}</span>
                        {link.href.startsWith("http") && (
                          <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[var(--color-muted-foreground)] sm:flex-row">
          <p>© {new Date().getFullYear()} Atlas Studio. Designed for creators & developers.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-foreground)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-foreground)] transition-colors">
              Terms of Service
            </Link>
            <a
              href="#top"
              className="hover:text-[var(--color-foreground)] transition-colors font-medium text-[var(--color-accent)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
