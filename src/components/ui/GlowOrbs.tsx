"use client";

import { motion } from "framer-motion";

type GlowOrbProps = {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
};

export function GlowOrbs({ className, color1, color2, color3 }: GlowOrbProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <motion.div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: color1 ?? "var(--accent)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: color2 ?? "var(--accent-2)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full opacity-15 blur-[90px]"
        style={{ background: color3 ?? "var(--accent-3)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
