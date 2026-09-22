import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Header() {
  return (
    <header className="relative z-20 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between gap-8">
        <Link href="/" className="font-sans text-lg font-bold tracking-[-0.03em] text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">
          <span className="text-[var(--color-accent)]">/</span> Atlas Studio
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">
              {item.label}
            </Link>
          ))}
          <Button href="/resources" className="ml-2 min-h-10 px-4 text-xs">Explore Resources</Button>
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}
