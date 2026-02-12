"use client";

import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { IconCircle } from "@/components/brand/IconCircle";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

/**
 * Benefit-Karte fuer die Karriere-Seite.
 * Zeigt einen IconCircle mit dynamisch geladenem Lucide-Icon,
 * Titel und Beschreibung.
 */
export function BenefitCard({
  title,
  description,
  icon,
  className,
}: BenefitCardProps) {
  // Dynamischer Lucide-Icon-Import anhand des Icon-Namens
  const IconComponent = Icons[icon as keyof typeof Icons] as Icons.LucideIcon;

  return (
    <ScrollReveal>
      <article
        className={cn(
          "rounded-xl border border-warm-200 dark:border-warm-700 bg-warm-50 dark:bg-warm-900",
          "p-6",
          "transition-shadow duration-300",
          "hover:shadow-sm",
          className,
        )}
      >
        {/* Icon */}
        <div className="mb-4">
          {IconComponent ? (
            <IconCircle icon={IconComponent} color="blue" size="md" />
          ) : (
            <IconCircle icon={Icons.Star} color="blue" size="md" />
          )}
        </div>

        {/* Titel */}
        <h3 className="text-lg font-semibold text-warm-900 dark:text-warm-100 mb-2">{title}</h3>

        {/* Beschreibung */}
        <p className="text-warm-600 dark:text-warm-400 text-sm leading-relaxed">{description}</p>
      </article>
    </ScrollReveal>
  );
}
