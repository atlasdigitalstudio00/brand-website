import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Resource } from "@/types/content";

export function ResourceDetail({ resource }: { resource: Resource }) {
  const isGumroad = resource.externalUrl?.includes("gumroad.com");

  return (
    <article className="overflow-hidden">
      <header className="relative border-b border-[var(--color-border)] py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-violet-600/10 blur-[100px]" />

        <Container className="relative z-10 max-w-5xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Back to resources
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              <Sparkles size={12} />
              {resource.type}
            </span>
            <span className="text-xs font-medium text-[var(--color-muted-foreground)]">
              {resource.category}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl">
            {resource.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
            {resource.description}
          </p>

          {resource.image ? (
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={resource.image.src}
                  alt={resource.image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_320px] max-w-5xl">
          <div className="space-y-8 text-base leading-relaxed text-[var(--color-muted-foreground)]">
            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--color-card-foreground)]">
                About this resource
              </h2>
              <p className="mt-4 leading-relaxed">
                {resource.slug === "ats-resume-toolkit"
                  ? "Most resumes are discarded before any human reads them because automated Applicant Tracking Systems (ATS) fail to parse poorly formatted layouts. This toolkit gives you 3 ATS-ready resume templates (minimalist, modern, and executive), 2 high-conversion cover letters, and an audit checklist to ensure 99% parsing accuracy."
                  : "This asset was built to eliminate boilerplate and provide an opinionated, clean structure that you can import immediately into your projects or workflows."}
              </p>
              <div className="mt-6 space-y-3 pt-6 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-2.5 text-sm text-[var(--color-foreground)]">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>
                    {resource.slug === "ats-resume-toolkit"
                      ? "3 ATS-Ready Resume Templates (Minimalist, Modern, Executive)"
                      : "Curated and reviewed for modern standards"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[var(--color-foreground)]">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>
                    {resource.slug === "ats-resume-toolkit"
                      ? "2 High-Conversion Cover Letter layouts engineered for recruiter attention"
                      : "Free from vendor lock-in or proprietary dependencies"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[var(--color-foreground)]">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>
                    {resource.slug === "ats-resume-toolkit"
                      ? "1 Comprehensive step-by-step ATS audit and keyword checklist"
                      : "Regularly updated with framework versions"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[var(--color-foreground)]">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>
                    {resource.slug === "ats-resume-toolkit"
                      ? "100% Editable in Microsoft Word (.docx) & Google Docs"
                      : "Ready for immediate production deployment"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action sidebar */}
          <aside className="h-fit rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-sm sticky top-28">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Asset Access
            </p>
            <div className="mt-4 space-y-3">
              {resource.downloadUrl ? (
                <Button
                  href={resource.downloadUrl}
                  variant="gradient"
                  size="md"
                  className="w-full"
                  rightIcon={<Download size={16} />}
                >
                  Download Asset
                </Button>
              ) : resource.externalUrl ? (
                <>
                  <Button
                    href={resource.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                    size="md"
                    className="w-full"
                    rightIcon={isGumroad ? <ExternalLink size={16} /> : <ArrowUpRight size={16} />}
                  >
                    {isGumroad ? "Get on Gumroad" : "Open Resource"}
                  </Button>
                  <Button
                    href={`/shop/${resource.slug}`}
                    variant="secondary"
                    size="md"
                    className="w-full text-xs"
                  >
                    View Product Details
                  </Button>
                </>
              ) : (
                <div className="rounded-xl bg-[var(--color-card-muted)] p-4 text-center">
                  <p className="text-xs font-semibold text-[var(--color-foreground)]">
                    In Active Curation
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    Direct download link is being refreshed for the next release.
                  </p>
                </div>
              )}
            </div>

            {isGumroad && (
              <div className="mt-6 pt-6 border-t border-[var(--color-border)] space-y-2 text-xs text-[var(--color-muted-foreground)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>Instant download after secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-500 shrink-0" />
                  <span>Includes lifetime updates & future styles</span>
                </div>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </article>
  );
}
