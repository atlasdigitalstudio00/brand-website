import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { Article } from "@/types/content";

export function ArticleLayout({ article, related }: { article: Article; related: Article[] }) {
  return (
    <article className="overflow-hidden">
      <header className="relative border-b border-[var(--color-border)] py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-violet-600/10 blur-[100px]" />

        <Container className="relative z-10 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Back to blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[var(--color-muted-foreground)]">
              <Clock size={13} />
              {article.readingTime}
            </span>
            <span className="text-[var(--color-border-strong)]">•</span>
            <time className="inline-flex items-center gap-1.5 text-[var(--color-muted-foreground)]" dateTime={article.isoDate}>
              <Calendar size={13} />
              {article.date}
            </time>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
            {article.description}
          </p>
        </Container>
      </header>

      <div className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,44rem)_16rem] lg:justify-center">
          <div className="space-y-12">
            {article.body.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-6 space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[var(--color-foreground)] leading-relaxed">
                        <span className="mt-1 size-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {/* Sidebar tags */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)] mb-4 flex items-center gap-1.5">
                <Tag size={13} />
                Topics Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-[var(--color-card-muted)] border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-card-muted)]/50 py-16 sm:py-24">
          <Container>
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Keep Reading
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                Related Articles
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-bold text-lg leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-muted-foreground)]">
                    <span>{item.readingTime}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
