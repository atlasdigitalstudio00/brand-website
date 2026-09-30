"use client";

import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-card-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto border-b border-[var(--color-border)] bg-[var(--color-background)]/95 p-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-card-muted)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <Button
                href="/resources"
                onClick={() => setIsOpen(false)}
                variant="gradient"
                size="lg"
                className="w-full"
                rightIcon={<ArrowRight size={16} />}
              >
                Explore Resources
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
