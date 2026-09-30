import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)]/80 bg-[var(--color-background)]/85 backdrop-blur-md transition-all">
      <Container className="flex h-20 items-center justify-between gap-8">
        <BrandMark />

        <nav aria-label="Main navigation" className="hidden items-center gap-1.5 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted-foreground)] transition-all duration-200 hover:text-[var(--color-foreground)] hover:bg-[var(--color-card-muted)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/resources"
            variant="gradient"
            size="sm"
            rightIcon={<ArrowRight size={14} />}
          >
            Explore Resources
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
