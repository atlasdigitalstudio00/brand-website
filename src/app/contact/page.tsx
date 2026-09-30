import { PageIntro } from "@/components/layout/PageIntro";
import { ContactForm } from "@/components/navigation/ContactForm";
import { Container } from "@/components/ui/Container";
import { Mail, Clock, MessageSquare, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

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
                    Have an idea for a developer kit or workflow guide you'd love to see built? Tell us your pain point!
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
