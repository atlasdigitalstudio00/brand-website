import Image from "next/image";
import type { ReactNode } from "react";

import type { ImageAsset } from "@/types/content";

type ImagePlaceholderProps = {
  image?: ImageAsset;
  label?: string;
  children?: ReactNode;
};

export function ImagePlaceholder({ image, label = "Visual coming soon", children }: ImagePlaceholderProps) {
  if (image) {
    return <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]"><Image src={image.src} alt={image.alt} width={1200} height={700} className="h-full w-full object-cover" /></div>;
  }

  return <div aria-label={label} className="flex min-h-36 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-card-muted)] p-6 text-center text-sm text-[var(--color-muted-foreground)]">{children ?? label}</div>;
}
