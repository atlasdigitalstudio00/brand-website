import Link from "next/link";
import { ArrowUpRight, FileText, Wrench } from "lucide-react";
import type { ReactNode } from "react";

import type { Article, Resource, Tool } from "@/types/content";

const cardClass = "group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]";

export function CategoryCard({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return <Link href="/resources" className={`${cardClass} flex min-h-48 flex-col`}><span className="mb-8 flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">{icon}</span><span className="mt-auto flex items-center justify-between gap-4"><span><span className="block font-semibold text-[var(--color-card-foreground)]">{title}</span><span className="mt-2 block text-sm leading-6 text-[var(--color-muted-foreground)]">{description}</span></span><ArrowUpRight aria-hidden="true" className="shrink-0 text-[var(--color-muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} /></span></Link>;
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return <article className={cardClass}><span className="flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-card-muted)] text-[var(--color-accent)]"><FileText aria-hidden="true" size={19} /></span><p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">{resource.category}</p><h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-[var(--color-card-foreground)]">{resource.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">{resource.description}</p><Link href={resource.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">Explore resource <ArrowUpRight aria-hidden="true" size={16} /></Link></article>;
}

export function ArticleCard({ article }: { article: Article }) {
  return <article className={cardClass}><div className="flex items-center justify-between gap-3 text-xs font-semibold text-[var(--color-muted-foreground)]"><span className="text-[var(--color-accent)]">{article.category}</span><span>{article.readingTime}</span></div><h3 className="mt-6 text-lg font-semibold leading-7 tracking-[-0.02em] text-[var(--color-card-foreground)]">{article.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">{article.description}</p><div className="mt-6 flex items-center justify-between gap-3"><time className="text-xs text-[var(--color-muted-foreground)]">{article.date}</time><Link href={article.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">Read article <ArrowUpRight aria-hidden="true" size={16} /></Link></div></article>;
}

export function ToolCard({ tool }: { tool: Tool }) {
  return <article className={cardClass}><span className="flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-card-muted)] text-[var(--color-accent)]"><Wrench aria-hidden="true" size={19} /></span><p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">{tool.category}</p><h3 className="mt-3 text-lg font-semibold text-[var(--color-card-foreground)]">{tool.name}</h3><p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">{tool.description}</p><a href={tool.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]">Visit tool <ArrowUpRight aria-hidden="true" size={16} /></a></article>;
}