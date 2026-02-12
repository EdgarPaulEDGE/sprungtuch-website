"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface QuoteCardProps {
  quote: string;
  author: string;
  context?: string;
  className?: string;
}

/**
 * Testimonial-Zitat-Karte mit dekorativem Anfuehrungszeichen,
 * kursivem Zitattext und Autoren-Angabe.
 */
export function QuoteCard({
  quote,
  author,
  context,
  className,
}: QuoteCardProps) {
  return (
    <ScrollReveal>
      <blockquote
        className={cn(
          "relative rounded-xl bg-warm-100 dark:bg-warm-800 p-6 md:p-8",
          "border border-warm-200 dark:border-warm-700",
          className,
        )}
      >
        {/* Dekoratives Anfuehrungszeichen */}
        <span
          className="absolute -top-4 left-6 text-6xl font-serif leading-none text-brand-red select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Zitattext */}
        <p className="relative z-10 text-warm-700 dark:text-warm-300 italic leading-relaxed text-lg pt-4">
          {quote}
        </p>

        {/* Autor und Kontext */}
        <footer className="mt-5 flex items-center gap-3">
          {/* Dekorativer Strich */}
          <span
            className="h-px w-8 bg-brand-red shrink-0"
            aria-hidden="true"
          />
          <div>
            <cite className="not-italic text-sm font-semibold text-warm-800 dark:text-warm-200">
              {author}
            </cite>
            {context && (
              <p className="text-sm text-warm-500 dark:text-warm-400 mt-0.5">{context}</p>
            )}
          </div>
        </footer>
      </blockquote>
    </ScrollReveal>
  );
}
