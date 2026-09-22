import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...props}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{eyebrow}</p> : null}
      <h2 className="font-sans text-3xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--color-muted-foreground)]">{description}</p> : null}
    </div>
  );
}
