"use client";

import type { TimelineEvent } from "@/data/timeline";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-bold text-warm-800 dark:text-warm-100 sm:text-4xl">
            Unsere Geschichte
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-warm-600 dark:text-warm-400">
            Von der Gründung 1989 bis heute: über drei Jahrzehnte
            Engagement für Vielfalt und Zusammenhalt.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertikale Verbindungslinie */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200/60 md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={event.year}
                  direction={isLeft ? "left" : "right"}
                  delay={index * 0.08}
                >
                  <div
                    className={cn(
                      "relative flex items-start gap-6",
                      // Desktop: alternierend links/rechts
                      "md:gap-0",
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Jahres-Badge */}
                    <div
                      className={cn(
                        "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white shadow-md",
                        // Auf Mobile: links ausgerichtet
                        // Auf Desktop: mittig auf der Linie
                        "md:absolute md:left-1/2 md:-translate-x-1/2"
                      )}
                    >
                      <span className="text-xs">{event.year}</span>
                    </div>

                    {/* Inhalt-Karte */}
                    <div
                      className={cn(
                        "flex-1 rounded-xl bg-white dark:bg-warm-800 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md",
                        // Desktop: links oder rechts der Mittellinie
                        isLeft
                          ? "md:mr-[calc(50%+2rem)] md:text-right"
                          : "md:ml-[calc(50%+2rem)]"
                      )}
                    >
                      <span className="mb-1 inline-block text-xs font-semibold text-brand-blue md:hidden">
                        {event.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-warm-800 dark:text-warm-200">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
