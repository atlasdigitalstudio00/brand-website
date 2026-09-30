import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label="Atlas Studio home"
      className="group inline-flex min-w-0 items-center gap-3 rounded-[var(--radius-md)] text-[var(--color-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-400/20 p-1 border border-white/20 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-violet-500/20 sm:size-11">
        <Image
          src="/logo.png"
          alt="Atlas Studio logo"
          width={compact ? 36 : 42}
          height={compact ? 36 : 42}
          priority
          className="size-8 shrink-0 object-contain sm:size-9"
        />
      </div>
      {!compact ? (
        <div className="flex flex-col">
          <span className="truncate font-sans text-lg font-extrabold tracking-[-0.03em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
            Atlas Studio
          </span>
          <span className="text-[10px] font-medium tracking-wider uppercase text-[var(--color-muted-foreground)] -mt-1 hidden sm:block">
            Digital Workspace
          </span>
        </div>
      ) : null}
    </Link>
  );
}