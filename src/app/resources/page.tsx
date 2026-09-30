import { ResourceCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { featuredResources } from "@/content/resources";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { Sparkles, Layers, Terminal } from "lucide-react";

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resource Directory"
        title="Resources that keep work moving."
        description="Battle-tested templates, deployment checklists, and practical architecture guides engineered to save you hours of trial and error."
        image={{
          src: "/images/hero/atlas-studio-resources-hero.webp",
          alt: "Organized digital resource collection representing Atlas Studio resources",
          priority: true,
        }}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Curated Collection
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
                Ready-to-Deploy Assets
              </h2>
            </div>
            <p className="max-w-md text-sm text-[var(--color-muted-foreground)]">
              All resources are maintained and updated regularly to match evolving modern tooling and framework standards.
            </p>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {featuredResources.map((resource) => (
              <StaggerItem key={resource.slug}>
                <ResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Quick FAQ / Info Card */}
          <div className="mt-16 rounded-[2rem] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-violet-500/5 p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  <Terminal size={14} />
                  Continuous Growth
                </span>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-card-foreground)]">
                  Looking for a specific template or architecture checklist?
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)] max-w-xl">
                  We add new frameworks and kits weekly. Reach out through our contact page to request a custom resource or suggest a workflow.
                </p>
              </div>
              <a
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center font-semibold rounded-[var(--radius-md)] px-5 py-3 text-sm bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] transition-all shadow-sm"
              >
                Request a Resource
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}