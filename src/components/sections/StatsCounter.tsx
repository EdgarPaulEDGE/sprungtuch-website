"use client";

import { impactStats } from "@/data/stats";
import { CountUp } from "@/components/motion/CountUp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function StatsCounter() {
  return (
    <section className="bg-blue-50 dark:bg-blue-900/30 py-20 px-6" aria-label="Statistiken">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-warm-800 dark:text-warm-100 sm:text-4xl">
            Unser Engagement in Zahlen
          </h2>
        </ScrollReveal>

        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-warm-800 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
                <dt className="order-2 mt-3 text-sm font-medium text-warm-600 dark:text-warm-400 sm:text-base">
                  {stat.label}
                </dt>
                <dd className="order-1">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-4xl font-extrabold text-brand-blue sm:text-5xl"
                  />
                  {/* Screenreader-zugaenglicher Wert */}
                  <span className="sr-only">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </span>
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
