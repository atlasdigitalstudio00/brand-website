import Link from "next/link";

import { footerNavigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card-muted)]">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="font-sans text-lg font-bold tracking-[-0.03em] text-[var(--color-foreground)]"><span className="text-[var(--color-accent)]">/</span> {siteConfig.name}</Link>
            <p className="mt-4 text-sm leading-6 text-[var(--color-muted-foreground)]">Practical digital resources, guides, tools, and content for modern work.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-foreground)]">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">{link.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted-foreground)]">© {new Date().getFullYear()} Atlas Studio. All rights reserved.</div>
      </Container>
    </footer>
  );
}
