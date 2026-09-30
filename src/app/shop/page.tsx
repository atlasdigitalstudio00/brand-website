import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ExternalLink, Sparkles, ShoppingBag } from "lucide-react";

import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { products } from "@/content/products";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore Atlas Studio digital products, including Team Avatar Maker and planning templates for modern digital work.",
  openGraph: {
    title: "Atlas Studio Shop",
    description: "Explore Atlas Studio digital products, including Team Avatar Maker and planning templates for modern digital work.",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <>
      <PageIntro
        eyebrow="Digital Marketplace"
        title="High-Impact Digital Assets & Tools."
        description="Focused software kits, interactive generators, and planning blueprints designed to eliminate friction and upgrade your workflow."
        image={{
          src: "/images/hero/atlas-studio-shop-hero.webp",
          alt: "Curated collection of Atlas Studio digital products",
          priority: true,
        }}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Instant Access
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
              Available & Upcoming Products
            </h2>
            <p className="mt-3 text-base text-[var(--color-muted-foreground)]">
              Every item is built with production standards, clear documentation, and lifetime access to future updates.
            </p>
          </div>

          <StaggerContainer className="grid gap-8 lg:grid-cols-2" staggerDelay={0.12}>
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)] sm:p-10">
                  {/* Subtle top gradient bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {product.image ? (
                      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-muted)]">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={product.image.src}
                            alt={product.image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-7 flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                        <Sparkles size={11} />
                        {product.productType}
                      </span>
                      {product.badge ? (
                        <span className="rounded-full bg-[var(--color-card-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-foreground)] border border-[var(--color-border)]">
                          {product.badge}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-card-foreground)] group-hover:text-[var(--color-accent)] transition-colors sm:text-3xl">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                      {product.shortDescription}
                    </p>

                    <div className="mt-6 space-y-2.5 pt-6 border-t border-[var(--color-border)]/60">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-[var(--color-foreground)] font-medium">
                          <CheckCircle2 size={15} className="shrink-0 text-[var(--color-accent)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]/60">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[var(--color-muted-foreground)] font-semibold">
                        Pricing
                      </span>
                      <span className="text-xl font-extrabold text-[var(--color-foreground)]">
                        {product.price}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {product.purchaseUrl ? (
                        <Button
                          href={product.purchaseUrl}
                          target="_blank"
                          rel="noreferrer"
                          variant="gradient"
                          size="md"
                          rightIcon={<ExternalLink size={14} />}
                        >
                          Buy on Gumroad
                        </Button>
                      ) : null}
                      <Button
                        href={`/shop/${product.slug}`}
                        variant={product.purchaseUrl ? "secondary" : "primary"}
                        size="md"
                      >
                        {product.purchaseUrl ? "View Details" : "View Product"}
                      </Button>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
