import { ArticleCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageIntro } from "@/components/layout/PageIntro";
import { latestArticles } from "@/content/blog";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Knowledge Base"
        title="Ideas & Patterns for Modern Digital Work."
        description="Practical, fluff-free writeups on engineering workflows, deployment routines, ATS resume optimization, and high-leverage digital systems."
        image={{
          src: "/images/hero/atlas-studio-blog-hero.webp",
          alt: "Editorial digital composition representing technology knowledge and articles",
          priority: true,
        }}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Field Notes
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
                Latest Articles & Field Guides
              </h2>
            </div>
            <span className="text-xs font-semibold text-[var(--color-muted-foreground)]">
              {latestArticles.length} Published Articles
            </span>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {latestArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}