"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";

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
        className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-card-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      {isOpen ? (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[var(--color-background)] px-6 py-4 shadow-[var(--shadow-md)]">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-[var(--color-border)] py-4 text-sm font-semibold text-[var(--color-foreground)] last:border-0 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">
                {item.label}
              </Link>
            ))}
            <Link href="/resources" onClick={() => setIsOpen(false)} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-semibold text-[var(--color-primary-foreground)]">
              Explore Resources
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
