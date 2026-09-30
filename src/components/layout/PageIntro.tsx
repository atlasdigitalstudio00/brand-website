import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PageIntroImage = {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
};

type PageIntroProps = {
  title: string;
  description: string;
  image?: PageIntroImage;
  eyebrow?: string;
};

export function PageIntro({
  title,
  description,
  image,
  eyebrow = "Atlas Studio",
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] py-20 sm:py-28">
      {/* Subtle ambient light */}
      <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-violet-600/10 blur-[100px]" />
      
      <Container className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="max-w-4xl font-sans text-4xl font-extrabold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
          {description}
        </p>

        {image ? (
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/20 bg-[var(--color-card)]/80 p-3 shadow-2xl backdrop-blur-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-slate-900/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
                style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
              />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
