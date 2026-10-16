import { FileText, ImageIcon, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type CoverPlaceholderProps = {
  title: string;
  label?: string;
  icon?: LucideIcon;
  className?: string;
};

/** Branded stand-in cover for products and resources that don't have artwork yet. */
export function CoverPlaceholder({ title, label, icon: Icon = FileText, className }: CoverPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${title} — preview coming soon`}
      className={cn("@container relative h-full w-full overflow-hidden", className)}
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute -right-10 -top-10 size-1/2 rounded-full bg-violet-400/30 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 size-1/2 rounded-full bg-cyan-400/25 blur-3xl" />

      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center @md:gap-4">
        <span className="flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 @md:size-16">
          <Icon aria-hidden="true" className="size-6 @md:size-8" strokeWidth={1.75} />
        </span>

        {label ? (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-200/80 @md:text-xs">{label}</span>
        ) : null}

        <p className="line-clamp-2 max-w-[90%] text-base font-bold leading-snug tracking-[-0.02em] text-white @md:text-2xl">{title}</p>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
          <ImageIcon aria-hidden="true" size={12} />
          Preview coming soon
        </span>
      </div>
    </div>
  );
}
