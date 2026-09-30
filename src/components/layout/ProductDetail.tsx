import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/types/content";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden">
      <header className="relative border-b border-[var(--color-border)] py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-violet-600/10 blur-[100px]" />

        <Container className="relative z-10 max-w-5xl">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Back to shop
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                  <Sparkles size={12} />
                  {product.productType}
                </span>
                {product.badge ? (
                  <span className="rounded-full bg-[var(--color-card-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-foreground)] border border-[var(--color-border)]">
                    {product.badge}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                {product.description}
              </p>

              {product.image ? (
                <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              ) : null}
            </div>

            {/* Price & Checkout Card */}
            <div className="sticky top-28 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                License & Access
              </span>
              <p className="mt-3 text-4xl font-extrabold text-[var(--color-foreground)]">
                {product.price}
              </p>
              <p className="mt-2 text-xs text-[var(--color-muted-foreground)]">
                One-time purchase • Lifetime updates • Personal & Commercial use
              </p>

              <div className="mt-8">
                {product.purchaseUrl ? (
                  <Button
                    href={product.purchaseUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    rightIcon={<ExternalLink size={16} />}
                  >
                    Buy on Gumroad
                  </Button>
                ) : (
                  <Button type="button" disabled variant="outline" size="lg" className="w-full">
                    Purchase Link Coming Soon
                  </Button>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--color-border)] space-y-3 text-xs text-[var(--color-muted-foreground)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                  <span>Secure 256-bit payment via Gumroad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-500 shrink-0" />
                  <span>Instant digital download upon purchase</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Details / Features */}
      <section className="py-20 sm:py-28">
        <Container className="max-w-5xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 sm:p-10 shadow-sm">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-foreground)]">
                What is included
              </h2>
              <ul className="mt-6 space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-foreground)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card-muted)]/60 p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-foreground)]">
                Who this is built for
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                {product.whoItIsFor}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
