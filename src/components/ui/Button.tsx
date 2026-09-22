import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = ButtonBaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)]",
  secondary: "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-foreground)] hover:border-[var(--color-foreground)] hover:bg-[var(--color-card-muted)]",
  ghost: "text-[var(--color-muted-foreground)] hover:bg-[var(--color-card-muted)] hover:text-[var(--color-foreground)]",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  );

  if (typeof props.href === "string") {
    const { href, ...anchorProps } = props;
    return <Link href={href} className={classes} {...anchorProps} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
