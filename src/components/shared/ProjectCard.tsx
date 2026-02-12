"use client";

import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  className?: string;
}

/**
 * Projekt-Karte mit Icon-Bereich, Titel, Beschreibung und Detail-Liste.
 * Verwendet brand-blue als Akzentfarbe.
 */
export function ProjectCard({
  title,
  description,
  details,
  className,
}: ProjectCardProps) {
  return (
    <ScrollReveal>
      <article
        className={cn(
          "group rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800",
          "p-6 md:p-8",
          "shadow-sm transition-shadow duration-300",
          "hover:shadow-md",
          className,
        )}
      >
        {/* Icon-Bereich */}
        <div
          className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400"
          aria-hidden="true"
        >
          <FolderOpen size={24} strokeWidth={1.8} />
        </div>

        {/* Titel */}
        <h3 className="text-xl font-semibold text-warm-900 dark:text-warm-100 mb-2">{title}</h3>

        {/* Beschreibung */}
        <p className="text-warm-600 dark:text-warm-400 leading-relaxed mb-5">{description}</p>

        {/* Detail-Liste */}
        {details.length > 0 && (
          <ul className="space-y-2" role="list">
            {details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-warm-700 dark:text-warm-300"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm leading-snug">{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Brand-Blue Akzent-Linie am unteren Rand */}
        <div
          className="mt-6 h-0.5 w-12 rounded-full bg-brand-blue opacity-40 transition-all duration-300 group-hover:w-20 group-hover:opacity-70"
          aria-hidden="true"
        />
      </article>
    </ScrollReveal>
  );
}
