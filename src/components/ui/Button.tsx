import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "gradient" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonProps = ButtonBaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-sm hover:bg-[var(--color-primary-hover)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  gradient:
    "relative text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 shadow-md shadow-violet-500/25 hover:shadow-lg hover:shadow-violet-500/35 hover:-translate-y-0.5 active:translate-y-0 border border-white/10",
  secondary:
    "border border-[var(--color-border-strong)] bg-[var(--color-card)]/80 backdrop-blur-sm text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 active:translate-y-0 shadow-sm",
  outline:
    "border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-card-muted)] hover:-translate-y-0.5",
  ghost:
    "text-[var(--color-muted-foreground)] hover:bg-[var(--color-card-muted)] hover:text-[var(--color-foreground)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-xs font-semibold rounded-[var(--radius-md)] gap-1.5",
  md: "min-h-11 px-5 text-sm font-semibold rounded-[var(--radius-md)] gap-2",
  lg: "min-h-13 px-7 text-base font-semibold rounded-[var(--radius-lg)] gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
