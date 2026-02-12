"use client";

import { partners } from "@/data/partners";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function PartnerLogoBar() {
  // Duplikat fuer nahtlose Endlosschleife
  const duplicated = [...partners, ...partners];

  return (
    <section className="overflow-hidden py-16 px-6" aria-label="Partner und Netzwerke">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-warm-800 dark:text-warm-100 sm:text-3xl">
          Unsere Partner & Netzwerke
        </h2>
      </ScrollReveal>

      {/* Scroll-Container */}
      <div className="relative" role="marquee" aria-label="Partnerliste">
        {/* Fade-Kanten */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

        {/* Sichtbare Liste fuer Screenreader (nicht dupliziert) */}
        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>

        {/* Infinite Scroll — Inline-Style fuer die Animation */}
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          aria-hidden="true"
          style={{
            animation: "partner-scroll 30s linear infinite",
          }}
        >
          {duplicated.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex shrink-0 items-center justify-center rounded-xl bg-warm-200/60 dark:bg-warm-700/60 px-8 py-4"
            >
              <span className="whitespace-nowrap text-sm font-medium text-warm-700 dark:text-warm-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
