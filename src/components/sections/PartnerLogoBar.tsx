"use client";

import { ExternalLink } from "lucide-react";
import type { Partner } from "@/data/partners";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// Einzelner Partner-Chip — mit oder ohne Link
function PartnerChip({ partner }: { partner: Partner }) {
  const content = (
    <>
      <span className="whitespace-nowrap text-sm font-medium text-warm-700 dark:text-warm-300">
        {partner.name}
      </span>
      {partner.url && (
        <ExternalLink
          size={12}
          className="ml-1.5 shrink-0 text-warm-400 dark:text-warm-500 group-hover:text-brand-blue"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex shrink-0 items-center justify-center rounded-xl bg-warm-200/60 dark:bg-warm-700/60 px-8 py-4 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex shrink-0 items-center justify-center rounded-xl bg-warm-200/60 dark:bg-warm-700/60 px-8 py-4">
      {content}
    </div>
  );
}

interface PartnerLogoBarProps {
  partners: Partner[];
  networks: Partner[];
}

export function PartnerLogoBar({ partners, networks }: PartnerLogoBarProps) {
  // Duplikate fuer nahtlose Endlosschleife
  const duplicatedPartners = [...partners, ...partners];
  const duplicatedNetworks = [...networks, ...networks];

  return (
    <section className="overflow-hidden py-16 px-6" aria-label="Partner und Netzwerke">
      {/* Partner */}
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-warm-800 dark:text-warm-100 sm:text-3xl">
          Unsere Partner & Förderer
        </h2>
      </ScrollReveal>

      <div className="relative mb-12" role="marquee" aria-label="Partnerliste">
        {/* Fade-Kanten */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

        {/* Sichtbare Liste fuer Screenreader */}
        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  {partner.name}
                </a>
              ) : (
                partner.name
              )}
            </li>
          ))}
        </ul>

        {/* Infinite Scroll */}
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          aria-hidden="true"
          style={{ animation: "partner-scroll 30s linear infinite" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <PartnerChip key={`partner-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Netzwerke */}
      <ScrollReveal>
        <h3 className="mb-8 text-center text-xl font-semibold text-warm-700 dark:text-warm-200 sm:text-2xl">
          Netzwerke & Mitgliedschaften
        </h3>
      </ScrollReveal>

      <div className="relative" role="marquee" aria-label="Netzwerkliste">
        {/* Fade-Kanten */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

        {/* Sichtbare Liste fuer Screenreader */}
        <ul className="sr-only">
          {networks.map((network) => (
            <li key={network.name}>
              {network.url ? (
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  {network.name}
                </a>
              ) : (
                network.name
              )}
            </li>
          ))}
        </ul>

        {/* Infinite Scroll — andere Richtung */}
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          aria-hidden="true"
          style={{ animation: "partner-scroll 35s linear infinite reverse" }}
        >
          {duplicatedNetworks.map((network, index) => (
            <PartnerChip key={`network-${index}`} partner={network} />
          ))}
        </div>
      </div>
    </section>
  );
}
