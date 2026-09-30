import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Wrench, Sparkles, BookOpen, Clock, Calendar } from "lucide-react";
import type { ReactNode } from "react";
import type { Article, Resource, Tool } from "@/types/content";

export function CategoryCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href="/resources"
      className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)]"
    >
      {/* Ambient gradient hover effect */}
      <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-[var(--color-accent-soft)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mb-6 inline-flex size-12 items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-cyan-500/10 text-[var(--color-accent)] border border-[var(--color-accent)]/15 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-violet-500/15">
          {icon}
        </div>
        <h3 className="font-semibold text-lg tracking-[-0.02em] text-[var(--color-card-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {description}
        </p>
      </div>

      <div className="relative mt-6 flex items-center justify-between pt-4 border-t border-[var(--color-border)]/60 text-xs font-semibold text-[var(--color-accent)]">
        <span>Explore Collection</span>
        <div className="flex size-7 items-center justify-center rounded-full bg-[var(--color-accent-soft)] transition-all duration-200 group-hover:bg-[var(--color-accent)] group-hover:text-white">
          <ArrowUpRight
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={14}
          />
        </div>
      </div>
    </Link>
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)]">
      {/* Subtle top accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div>
        {resource.image ? (
          <div className="mb-6 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card-muted)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={resource.image.src}
                alt={resource.image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3">
          <span className="flex size-11 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-card-muted)] text-[var(--color-accent)] border border-[var(--color-border)] transition-transform duration-300 group-hover:scale-105">
            <FileText aria-hidden="true" size={20} />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[var(--color-accent)] border border-[var(--color-accent)]/20">
            <Sparkles size={11} className="shrink-0" />
            {resource.type}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-[var(--color-card-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
          {resource.title}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {resource.description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-[var(--color-border)]/60 flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--color-muted-foreground)]">
          {resource.category}
        </span>
        <Link
          href={resource.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
        >
          <span>{resource.cta ?? "Explore"}</span>
          <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)]">
      <div>
        <div className="flex items-center justify-between gap-3 text-xs font-semibold">
          <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] tracking-wide text-[var(--color-accent)] border border-[var(--color-accent)]/15">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[var(--color-muted-foreground)]">
            <Clock size={12} />
            {article.readingTime}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.02em] text-[var(--color-card-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
          <Link href={article.href}>
            {article.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)] line-clamp-3">
          {article.description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-[var(--color-border)]/60 flex items-center justify-between">
        <time className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]" dateTime={article.isoDate}>
          <Calendar size={12} />
          {article.date}
        </time>

        <Link
          href={article.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
        >
          <span>Read article</span>
          <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-card-hover)]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex size-11 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-card-muted)] text-[var(--color-accent)] border border-[var(--color-border)] transition-transform duration-300 group-hover:scale-105">
            <Wrench aria-hidden="true" size={20} />
          </span>
          <span className="rounded-full bg-[var(--color-card-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)] border border-[var(--color-border)]">
            {tool.category}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-[var(--color-card-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
          {tool.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {tool.description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-[var(--color-border)]/60">
        {tool.href === "#" ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted-foreground)]">
            Curated recommendation
          </span>
        ) : (
          <a
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          >
            <span>Visit tool</span>
            <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}