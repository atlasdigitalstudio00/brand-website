import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckSquare,
  FolderKanban,
  Layers3,
  Sparkles,
  Rocket,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Star,
  ExternalLink,
} from "lucide-react";

import { ArticleCard, CategoryCard, ResourceCard, ToolCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowOrbs } from "@/components/ui/GlowOrbs";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { latestArticles } from "@/content/blog";
import { recommendedTools, products } from "@/content/products";
import { featuredResources } from "@/content/resources";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export default function Home() {
  const liveProducts = products.filter((p) => Boolean(p.purchaseUrl));

  return (
    <div className="relative overflow-hidden">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)] py-20 sm:py-28 lg:py-36">
        <GlowOrbs />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

        <Container className="relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <AnimateOnScroll animation="fade-up" delay={0.05}>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-md">
                <span className="size-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span>Atlas Digital Workspace</span>
                <span className="rounded-full bg-violet-500/20 px-1.5 py-0.5 text-[10px] text-violet-400">
                  v2.0
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.15}>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[var(--color-foreground)] sm:text-7xl">
                Practical Digital Resources for{" "}
                <span className="text-gradient">Modern Work</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.25}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
                Curated templates, step-by-step guides, automation tools, and workflow systems engineered to help developers, creators, and professionals build faster.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.35}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button
                  href="/resources"
                  variant="gradient"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore Resources
                </Button>
                <Button href="/shop" variant="secondary" size="lg">
                  Browse Digital Shop
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--color-border)]/60 text-xs font-semibold text-[var(--color-muted-foreground)]">
                <span className="inline-flex items-center gap-2">
                  <Zap size={15} className="text-amber-500" />
                  Instant Access
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-500" />
                  Battle-Tested
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star size={15} className="text-violet-500" />
                  No Fluff Quality
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Hero Visual Mockup */}
          <AnimateOnScroll animation="scale-in" delay={0.2} className="relative mx-auto w-full max-w-xl">
            <div className="relative">
              {/* Back glow behind card */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 opacity-20 blur-xl transition-all duration-500" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-[var(--color-card)]/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-violet-950/20 to-slate-900/40">
                  <Image
                    src="/images/hero/atlas-studio-homepage-hero.webp"
                    alt="Abstract digital ecosystem representing the Atlas Studio platform"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -left-4 -top-4 rounded-xl border border-white/20 bg-[var(--color-card)]/95 px-4 py-2.5 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                  <Rocket size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                    Curated Assets
                  </p>
                  <p className="text-xs font-bold text-[var(--color-card-foreground)]">
                    50+ Verified Kits
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -right-4 -bottom-4 rounded-xl border border-white/20 bg-[var(--color-card)]/95 px-4 py-2.5 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                    Community Approved
                  </p>
                  <p className="text-xs font-bold text-[var(--color-card-foreground)]">
                    Developer Ready
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ─── Proof / Value Bar ─── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-card-muted)]/50 py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
                100%
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Practical Focus
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
                Zero
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Unnecessary Fluff
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
                Weekly
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Curated Updates
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
                Instant
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Digital Delivery
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Explore by Category ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              eyebrow="Taxonomy"
              title="Explore by Category"
              description="Start with a focused collection of blueprints, guides, and tools designed for your exact workflow."
            />
          </AnimateOnScroll>

          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.08}>
            <StaggerItem>
              <CategoryCard
                title="Developer Resources"
                description="Build clearer, maintainable software faster."
                icon={<Boxes size={22} />}
              />
            </StaggerItem>
            <StaggerItem>
              <CategoryCard
                title="AI & Automation"
                description="Turn repetitive chores into automated leverage."
                icon={<Sparkles size={22} />}
              />
            </StaggerItem>
            <StaggerItem>
              <CategoryCard
                title="Digital Products"
                description="Transform technical ideas into profitable assets."
                icon={<Layers3 size={22} />}
              />
            </StaggerItem>
            <StaggerItem>
              <CategoryCard
                title="Productivity"
                description="Reliable systems that keep your projects moving."
                icon={<FolderKanban size={22} />}
              />
            </StaggerItem>
            <StaggerItem>
              <CategoryCard
                title="Guides & Tutorials"
                description="Real-world case studies and practical tutorials."
                icon={<CheckSquare size={22} />}
              />
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* ─── Featured Resources ─── */}
      <section className="relative border-y border-[var(--color-border)] bg-[var(--color-card-muted)]/70 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <AnimateOnScroll animation="fade-up">
              <SectionHeading
                eyebrow="Handpicked Assets"
                title="Featured Resources"
                description="Practical blueprints and checklists built to save hours of setup and research."
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <Button href="/resources" variant="outline" rightIcon={<ArrowRight size={16} />}>
                All Resources
              </Button>
            </AnimateOnScroll>
          </div>

          <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
            {featuredResources.map((resource) => (
              <StaggerItem key={resource.title}>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ─── Flagship Digital Products ─── */}
      {liveProducts.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end mb-12">
              <AnimateOnScroll animation="fade-up">
                <SectionHeading
                  eyebrow="Instant Access"
                  title="Flagship Digital Products"
                  description="Production-tested generators, resume systems, and audit toolkits engineered to give you an immediate edge."
                />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <Button href="/shop" variant="outline" rightIcon={<ArrowRight size={16} />}>
                  Explore All Products
                </Button>
              </AnimateOnScroll>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {liveProducts.map((prod, index) => (
                <AnimateOnScroll key={prod.slug} animation="fade-up" delay={index * 0.15}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-[var(--color-card-muted)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)] sm:p-10">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-violet-600/10 blur-3xl" />

                    <div>
                      {prod.image && (
                        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-2.5 shadow-md">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                            <Image
                              src={prod.image.src}
                              alt={prod.image.alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-7 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                          <Sparkles size={11} />
                          {prod.productType}
                        </span>
                        <span className="rounded-full bg-[var(--color-card-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-foreground)] border border-[var(--color-border)]">
                          {prod.badge ?? "Digital Product"}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl">
                        {prod.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)] sm:text-base">
                        {prod.shortDescription}
                      </p>

                      <div className="mt-6 space-y-2.5 pt-6 border-t border-[var(--color-border)]/60">
                        {prod.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 text-xs text-[var(--color-foreground)] font-medium">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]/60">
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-[var(--color-muted-foreground)] font-semibold">
                          Pricing
                        </span>
                        <span className="text-base font-extrabold text-[var(--color-foreground)]">
                          {prod.price}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {prod.purchaseUrl && (
                          <Button
                            href={prod.purchaseUrl}
                            target="_blank"
                            rel="noreferrer"
                            variant="gradient"
                            size="md"
                            rightIcon={<ExternalLink size={15} />}
                          >
                            Get on Gumroad
                          </Button>
                        )}
                        <Button href={`/shop/${prod.slug}`} variant="secondary" size="md">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─── From the Blog ─── */}
      <section className="border-t border-[var(--color-border)] py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <AnimateOnScroll animation="fade-up">
              <SectionHeading
                eyebrow="Knowledge Base"
                title="From the Blog"
                description="Tested approaches, system architectures, and practical breakdowns for modern builders."
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <Button href="/blog" variant="outline" rightIcon={<ArrowRight size={16} />}>
                All Articles
              </Button>
            </AnimateOnScroll>
          </div>

          <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
            {latestArticles.slice(0, 3).map((article) => (
              <StaggerItem key={article.title}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ─── Recommended Tools ─── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-card-muted)]/60 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <AnimateOnScroll animation="fade-up">
              <SectionHeading
                eyebrow="Tech Stack"
                title="Tools Worth Exploring"
                description="A curated shortlist of software and platforms that simplify development and multiply output."
              />
            </AnimateOnScroll>
            <span className="text-xs font-semibold text-[var(--color-muted-foreground)]">
              Curated by the Atlas Team
            </span>
          </div>

          <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
            {recommendedTools.map((tool) => (
              <StaggerItem key={tool.name}>
                <ToolCard tool={tool} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ─── Newsletter Section ─── */}
      <section className="py-20 sm:py-28">
        <Container>
          <AnimateOnScroll animation="fade-up">
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-violet-500/5 p-8 shadow-xl sm:p-14">
              <div className="pointer-events-none absolute -bottom-16 -right-16 size-72 rounded-full bg-violet-600/10 blur-3xl" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                    <Sparkles size={12} />
                    Direct Dispatch
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[var(--color-foreground)] sm:text-4xl">
                    High-Signal Ideas.{" "}
                    <span className="text-gradient">Zero Spam.</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                    Join forward-thinking developers and digital creators receiving our weekly digest of new templates, automation guides, and software kits.
                  </p>
                </div>

                <NewsletterForm />
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="relative overflow-hidden border-t border-[var(--color-border)] bg-gradient-to-br from-[#120a2e] via-[#1a1235] to-[#251347] py-24 text-white sm:py-32">
        {/* Glow circles */}
        <div className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 size-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <Container className="relative z-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-300">
                Ready to accelerate?
              </span>
              <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl text-white">
                Build smarter. Ship faster.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-violet-200/80">
                Unlock proven frameworks and ready-to-deploy digital resources designed to eliminate busywork.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button
                href="/resources"
                variant="gradient"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore All Resources
              </Button>
              <Button
                href="/shop"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                Browse Shop
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
