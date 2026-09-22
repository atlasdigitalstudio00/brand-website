import { Container } from "@/components/ui/Container";

type PageIntroProps = { title: string; description: string };

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-20 sm:py-28">
      <Container>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Atlas Studio</p>
        <h1 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-foreground)]">{description}</p>
      </Container>
    </section>
  );
}
