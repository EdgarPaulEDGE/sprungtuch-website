"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <section className={cn("py-20 px-6", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          {/* Durchgehende horizontale Verbindungslinie (Desktop) */}
          {steps.length > 1 && (
            <div
              className="absolute top-6 hidden h-0.5 bg-warm-200 dark:bg-warm-700 md:block"
              style={{
                left: `calc(${(100 / steps.length) * 0.5}%)`,
                right: `calc(${(100 / steps.length) * 0.5}%)`,
              }}
            />
          )}

          <StaggerChildren
            className={cn(
              // Mobile: vertikal
              "flex flex-col gap-8",
              // Desktop: horizontal
              "md:flex-row md:items-start md:gap-0"
            )}
            staggerDelay={0.12}
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-1 flex-col items-center text-center md:px-4"
              >
                {/* Schritt-Nummer */}
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white shadow-md shadow-red-500/20 dark:shadow-red-500/30">
                  {index + 1}
                </div>

                {/* Titel */}
                <h3 className="mb-2 text-lg font-semibold text-warm-800 dark:text-warm-200">
                  {step.title}
                </h3>

                {/* Beschreibung */}
                <p className="max-w-xs text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                  {step.description}
                </p>

                {/* Vertikale Verbindungslinie (nur Mobile, nicht beim letzten) */}
                {index < steps.length - 1 && (
                  <div className="mt-6 h-8 w-0.5 bg-warm-200 dark:bg-warm-700 md:hidden" />
                )}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
