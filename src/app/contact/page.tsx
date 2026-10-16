import { PageIntro } from "@/components/layout/PageIntro";
import { ContactForm } from "@/components/navigation/ContactForm";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Mail, Clock, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get in Touch"
        title="Let’s make useful work easier."
        description="Have a question about an Atlas Studio template, a custom partnership, or an idea for a new resource? Drop us a line below."
        image={{
          src: "/images/hero/atlas-studio-contact-hero.webp",
          alt: "Abstract connected digital structures representing communication",
          priority: true,
        }}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
            <AnimateOnScroll animation="fade-up">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  Direct Inquiries
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">
                  Send a Message
                </h2>
                <p className="mt-3 text-base text-[var(--color-muted-foreground)] mb-8">
                  Fill in the fields below and our team will get back to you promptly.
                </p>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Sidebar info */}
            <AnimateOnScroll animation="fade-up" delay={0.15}>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-accent)]/25 bg-[var(--color-card)] p-8 shadow-sm">
                  <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-[var(--color-accent-soft)] blur-2xl" />
                  <div className="relative">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 mb-4">
                      <Mail size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-card-foreground)]">
                      Prefer Email?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                      Skip the form and write to us directly. Questions about purchases, partnerships, or custom work are all welcome.
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="focus-ring group mt-5 inline-flex max-w-full items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card-muted)] px-4 py-2.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      <span className="truncate">{siteConfig.email}</span>
                      <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 mb-4">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-card-foreground)]">
                    Fast Response Times
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    We review messages daily. You can typically expect a response within 24 to 48 business hours.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-card-foreground)]">
                    Resource Requests
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    Have an idea for a developer kit or workflow guide you&apos;d love to see built? Tell us your pain point!
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
