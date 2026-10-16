"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Compass, CornerDownLeft, FileText, Home, Search, ShoppingBag, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowOrbs } from "@/components/ui/GlowOrbs";
import { cn } from "@/lib/utils";

export type Destination = {
  title: string;
  description: string;
  href: string;
  kind: "Page" | "Resource" | "Product" | "Article";
};

const NOT_FOUND_IMAGE = "/images/404/atlas-studio-404.webp";
const MAX_RESULTS = 6;

const kindIcons = {
  Page: Home,
  Resource: FileText,
  Product: ShoppingBag,
  Article: BookOpen,
} as const;

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 1);
}

function rankDestinations(destinations: Destination[], query: string) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  return destinations
    .map((destination) => {
      const title = destination.title.toLowerCase();
      const haystack = `${title} ${destination.description.toLowerCase()} ${destination.href.toLowerCase()}`;
      const score = tokens.reduce((total, token) => {
        if (title.includes(token)) return total + 3;
        if (haystack.includes(token)) return total + 1;
        return total;
      }, 0);
      return { destination, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.destination);
}

export function NotFoundExperience({ destinations }: { destinations: Destination[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const [spins, setSpins] = useState(0);
  const [surprise, setSurprise] = useState<Destination | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const compassRef = useRef<HTMLButtonElement>(null);

  // Suggestions guessed from the broken URL, e.g. /blog/docker-deploy → "docker deploy".
  const guessed = rankDestinations(destinations, pathname ?? "").slice(0, 3);
  const popular = destinations.filter((d) => d.kind !== "Page").slice(0, 4);
  const results = query.trim() ? rankDestinations(destinations, query).slice(0, MAX_RESULTS) : [];
  const list = query.trim() ? results : guessed.length > 0 ? guessed : popular;

  // Card tilt + parallax driven by the pointer.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const digitsX = useTransform(springX, [-0.5, 0.5], [-24, 24]);
  const digitsY = useTransform(springY, [-0.5, 0.5], [-16, 16]);
  const imageX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const imageY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  // Compass needle follows the cursor anywhere on the page.
  const needle = useMotionValue(0);
  const needleSpring = useSpring(needle, { stiffness: 90, damping: 14 });

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      if (event.key === "/" && !typing) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    function onPointerMove(event: globalThis.PointerEvent) {
      const rect = compassRef.current?.getBoundingClientRect();
      if (!rect) return;
      const angle = Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2));
      needle.set((angle * 180) / Math.PI + 90 + spins * 360);
    }
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [needle, reduceMotion, spins]);

  function handleCardPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetCard() {
    pointerX.set(0);
    pointerY.set(0);
  }

  function spinCompass() {
    const pool = destinations.filter((d) => d.kind !== "Page" && d.href !== surprise?.href);
    setSurprise(pool[Math.floor(Math.random() * pool.length)] ?? null);
    setSpins((count) => count + 1);
    needle.set(needle.get() + 360);
  }

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (list.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % list.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + list.length) % list.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      router.push(list[Math.min(activeIndex, list.length - 1)].href);
    } else if (event.key === "Escape") {
      setQuery("");
    }
  }

  const listLabel = query.trim()
    ? results.length > 0
      ? `${results.length} match${results.length === 1 ? "" : "es"}`
      : "No matches"
    : guessed.length > 0
      ? "Did you mean"
      : "Popular destinations";

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] py-16 sm:py-24">
      <GlowOrbs />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <Container className="relative z-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* ─── Copy, search & actions ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>Error 404 · Off the map</span>
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[var(--color-foreground)] sm:text-6xl">
            This page wandered <span className="text-gradient">off the map</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            We couldn&apos;t find{" "}
            <code className="break-all rounded-md border border-[var(--color-border)] bg-[var(--color-card-muted)] px-1.5 py-0.5 font-mono text-sm text-[var(--color-foreground)]">
              {pathname}
            </code>
            . It may have moved, been renamed, or never existed. Let&apos;s get you back on track.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <label htmlFor="not-found-search" className="sr-only">
              Search Atlas Studio
            </label>
            <div className="glass-card flex items-center gap-3 rounded-[var(--radius-lg)] px-4 shadow-sm transition-shadow focus-within:shadow-[var(--shadow-glow)] focus-within:ring-2 focus-within:ring-[var(--color-accent)]/40">
              <Search size={18} className="shrink-0 text-[var(--color-muted-foreground)]" aria-hidden="true" />
              <input
                ref={inputRef}
                id="not-found-search"
                type="search"
                autoComplete="off"
                placeholder="Search pages, resources, articles…"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleSearchKeyDown}
                role="combobox"
                aria-expanded={list.length > 0}
                aria-controls="not-found-results"
                aria-activedescendant={list.length > 0 ? `not-found-result-${activeIndex}` : undefined}
                className="min-h-13 w-full bg-transparent text-base text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-muted-foreground)]"
              />
              <kbd className="hidden shrink-0 rounded-md border border-[var(--color-border-strong)] px-1.5 py-0.5 font-mono text-xs text-[var(--color-muted-foreground)] sm:inline">
                /
              </kbd>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">{listLabel}</p>
              {query.trim() && results.length === 0 ? (
                <p className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] px-4 py-3 text-sm text-[var(--color-muted-foreground)]">
                  Nothing matches &ldquo;{query}&rdquo;. Try a broader word like &ldquo;resume&rdquo; or &ldquo;docker&rdquo;.
                </p>
              ) : (
                <ul id="not-found-results" role="listbox" className="space-y-1.5">
                  <AnimatePresence initial={false} mode="popLayout">
                    {list.map((destination, index) => {
                      const Icon = kindIcons[destination.kind];
                      const active = index === activeIndex;
                      return (
                        <motion.li
                          key={destination.href}
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                          id={`not-found-result-${index}`}
                          role="option"
                          aria-selected={active}
                          onPointerEnter={() => setActiveIndex(index)}
                        >
                          <Link
                            href={destination.href}
                            className={cn(
                              "focus-ring group flex items-center gap-3 rounded-[var(--radius-md)] border px-3 py-2.5 transition-all",
                              active
                                ? "border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)]"
                                : "border-transparent hover:border-[var(--color-border)]"
                            )}
                          >
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-card-muted)] text-[var(--color-accent)]">
                              <Icon size={16} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-[var(--color-foreground)]">{destination.title}</span>
                              <span className="block truncate text-xs text-[var(--color-muted-foreground)]">
                                {destination.kind} · {destination.description}
                              </span>
                            </span>
                            {active ? (
                              <CornerDownLeft size={14} className="shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                            ) : (
                              <ArrowRight size={14} className="shrink-0 text-[var(--color-muted-foreground)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/" variant="gradient" size="lg" leftIcon={<Home size={18} />}>
              Take me home
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<ArrowLeft size={18} />}
              onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
            >
              Go back
            </Button>
          </div>
        </motion.div>

        {/* ─── Interactive visual ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="[perspective:1200px]"
        >
          <motion.div
            onPointerMove={handleCardPointerMove}
            onPointerLeave={resetCard}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/20 bg-[var(--color-card)]/80 p-3 shadow-2xl backdrop-blur-md sm:aspect-[4/3.4]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]" style={{ background: "var(--gradient-hero)" }}>
              {!imageFailed && (
                <motion.div className="absolute -inset-4" style={{ x: imageX, y: imageY }}>
                  <Image
                    src={NOT_FOUND_IMAGE}
                    alt="An explorer holding a glowing compass beside a torn map with a missing piece shaped like 404"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    onError={() => setImageFailed(true)}
                  />
                </motion.div>
              )}

              {/* Fallback / overlay digits */}
              {imageFailed && (
                <>
                  <div className="dot-grid absolute inset-0 opacity-20" />
                  <motion.div
                    style={{ x: digitsX, y: digitsY }}
                    className="absolute inset-0 flex select-none items-center justify-center text-[9rem] font-extrabold leading-none tracking-[-0.08em] text-white/90 sm:text-[12rem]"
                    aria-hidden="true"
                  >
                    4<span className="text-gradient px-2">0</span>4
                  </motion.div>
                </>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Compass: needle tracks the cursor, click to spin for a random destination */}
            <button
              ref={compassRef}
              type="button"
              onClick={spinCompass}
              aria-label="Spin the compass for a random destination"
              style={{ transform: "translateZ(40px)" }}
              className="focus-ring glass-card absolute bottom-7 left-7 flex size-20 cursor-pointer items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Compass size={64} strokeWidth={1} className="absolute text-[var(--color-muted-foreground)]/50" aria-hidden="true" />
              <motion.span style={{ rotate: needleSpring }} className="relative block h-12 w-2" aria-hidden="true">
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-[var(--color-accent)] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
                <span className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-full bg-[var(--color-muted-foreground)]/60 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              </motion.span>
              <span className="absolute size-2 rounded-full bg-[var(--color-foreground)]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={surprise?.href ?? "hint"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                style={{ transform: "translateZ(30px)" }}
                className="glass-card absolute bottom-8 left-32 right-7 rounded-[var(--radius-md)] px-4 py-3 text-sm shadow-lg"
                aria-live="polite"
              >
                {surprise ? (
                  <Link href={surprise.href} className="focus-ring group flex items-center gap-2 font-semibold text-[var(--color-foreground)]">
                    <Sparkles size={14} className="shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                    <span className="truncate">{surprise.title}</span>
                    <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="text-[var(--color-muted-foreground)]">Lost? Spin the compass for a surprise destination.</span>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
