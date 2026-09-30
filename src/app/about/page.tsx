import { CheckCircle2, Target, Zap, Shield, Sparkles, Compass } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    icon: <Target className="size-6 text-violet-500" />,
    title: "Useful Before Impressive",
    description: "Every tool and template solves a real pain point with tangible speed. We prioritize practical clarity over decorative complexity.",
  },
  {
    icon: <Zap className="size-6 text-cyan-500" />,
    title: "Immediate Application",
    description: "Built to be copied, customized, and deployed straight into your existing workflow in minutes, not hours.",
  },
  {
    icon: <Shield className="size-6 text-emerald-500" />,
    title: "Battle-Tested Standards",
    description: "Designed by seasoned practitioners using modern engineering patterns, TypeScript, accessible markup, and scalable architecture.",
  },
];

const stats = [
  { label: "Community Builders", value: "1,200+" },
  { label: "Curated Frameworks", value: "50+" },
  { label: "Production Uptime", value: "99.9%" },
  { label: "Hours Saved / Month", value: "300+" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Mission"
        title="Engineering clarity for modern digital work."
        description="Atlas Studio crafts production-ready templates, comprehensive guides, automation tools, and software resources for developers, creators, and teams."
        image={{
          src: "/images/hero/atlas-studio-about-hero.webp",
          alt: "Abstract digital studio system representing the work behind Atlas Studio",
          priority: true,
        }}
      />

      {/* Mission & Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <AnimateOnScroll animation="slide-right">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  <Compass size={13} />
                  The Philosophy
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[var(--color-foreground)] sm:text-4xl">
                  A clearer path from technical idea to working software.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
                  Modern technology moves fast, but the groundwork—scaffolding projects, writing clear architecture decision records, configuring deployment pipelines—often drags teams down.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  Atlas Studio provides the building blocks so you can bypass boilerplate and focus your energy on what makes your project unique.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="scale-in" delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-violet-500/5 p-8 shadow-xl sm:p-10">
                <div className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-violet-500/10 blur-2xl" />
                <h3 className="text-xl font-bold text-[var(--color-card-foreground)]">
                  What Atlas Delivers
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Production-ready Next.js & TypeScript templates",
                    "ATS-optimized career assets and technical portfolios",
                    "Interactive workflow tools and digital creators",
                    "Comprehensive deployment blueprints & checklists",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-muted-foreground)]">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span className="font-medium text-[var(--color-foreground)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-card-muted)]/50 py-12">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-[var(--color-foreground)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Pillars */}
      <section className="py-20 sm:py-28">
        <Container>
          <AnimateOnScroll animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Core Standards
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                Guiding Principles Behind Every Resource
              </h2>
            </div>
          </AnimateOnScroll>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group h-full rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--color-card-muted)] border border-[var(--color-border)] transition-transform duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-[var(--color-card-foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
