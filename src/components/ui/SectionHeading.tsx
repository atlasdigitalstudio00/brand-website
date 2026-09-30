import type { HTMLAttributes } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  gradientTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  gradientTitle = false,
  className,
  ...props
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]",
            isCenter && "mx-auto"
          )}
        >
          <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      
      <h2
        className={cn(
          "font-sans text-3xl font-extrabold tracking-[-0.035em] text-[var(--color-foreground)] sm:text-4xl md:text-5xl",
          gradientTitle && "text-gradient"
        )}
      >
        {title}
      </h2>
      
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
