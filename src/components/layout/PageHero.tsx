"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroVariant = "warm" | "playful" | "professional" | "energetic";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  variant?: HeroVariant;
  children?: ReactNode;
}

// Hintergrund-Styles je nach Variante
const variantStyles: Record<
  HeroVariant,
  { container: string; title: string; subtitle: string }
> = {
  warm: {
    container: "bg-gradient-to-br from-red-50 to-warm-50 dark:from-warm-900 dark:to-warm-800",
    title: "text-warm-800 dark:text-warm-100",
    subtitle: "text-warm-600 dark:text-warm-400",
  },
  playful: {
    container:
      "bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-900/30 dark:to-red-900/20 overflow-hidden",
    title: "text-warm-800 dark:text-warm-100",
    subtitle: "text-warm-600 dark:text-warm-400",
  },
  professional: {
    container: "bg-gradient-to-br from-blue-900 to-blue-700",
    title: "text-white",
    subtitle: "text-blue-200",
  },
  energetic: {
    container: "bg-gradient-to-br from-red-500 to-brand-red dark:from-red-600 dark:to-red-800",
    title: "text-white",
    subtitle: "text-red-100",
  },
};

// Animierte Kreise fuer die "playful" Variante
function FloatingCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-200/30 dark:bg-blue-500/10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-red-200/30 dark:bg-red-500/10"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-blue-100/40 dark:bg-blue-400/10"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

export default function PageHero({
  title,
  subtitle,
  variant = "warm",
  children,
}: PageHeroProps) {
  const styles = variantStyles[variant];

  return (
    <section className={cn("relative pt-20 md:pt-24", styles.container)}>
      {/* Animierte Kreise nur bei "playful" */}
      {variant === "playful" && <FloatingCircles />}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20">
          {/* Breadcrumbs oder andere Kinder-Elemente */}
          {children && <div className="mb-6">{children}</div>}

          {/* Titel mit Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
              styles.title
            )}
          >
            {title}
          </motion.h1>

          {/* Untertitel */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className={cn(
                "mt-4 max-w-2xl text-lg md:text-xl",
                styles.subtitle
              )}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
