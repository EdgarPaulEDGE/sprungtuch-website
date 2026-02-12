"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/data/jobs";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  ChevronDown,
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Ueberschrift */}
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-bold text-warm-800 dark:text-warm-200 sm:text-4xl">
            Offene Stellen
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-warm-600 dark:text-warm-400">
            Werde Teil eines engagierten Teams und gestalte mit uns
            ein respektvolles Miteinander in Lübeck.
          </p>
        </ScrollReveal>

        {/* Job-Karten */}
        {jobs.length === 0 ? (
          <ScrollReveal>
            <div className="rounded-2xl border-2 border-dashed border-warm-200 dark:border-warm-700 p-12 text-center">
              <Briefcase size={48} className="mx-auto mb-4 text-warm-300 dark:text-warm-600" aria-hidden="true" />
              <p className="text-lg font-medium text-warm-600 dark:text-warm-400">
                Aktuell keine offenen Stellen
              </p>
              <p className="mt-2 text-sm text-warm-500 dark:text-warm-400">
                Initiativbewerbungen sind jederzeit willkommen!
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="flex flex-col gap-4">
            {jobs.map((job, index) => {
              const isExpanded = expandedJob === job.id;

              return (
                <ScrollReveal key={job.id} delay={index * 0.1}>
                  <div className="overflow-hidden rounded-2xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    {/* Header — klickbar */}
                    <button
                      onClick={() => toggleJob(job.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleJob(job.id);
                        }
                      }}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-warm-50 dark:hover:bg-warm-700"
                      aria-expanded={isExpanded}
                      aria-controls={`job-details-${job.id}`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-warm-800 dark:text-warm-200">
                            {job.title}
                          </h3>
                          <span className="inline-block rounded-full bg-red-50 dark:bg-red-900/30 px-3 py-0.5 text-xs font-medium text-brand-red">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-sm text-warm-500 dark:text-warm-400">
                          {job.department}
                        </p>
                      </div>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={cn(
                          "shrink-0 text-warm-400 transition-transform duration-300",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Expandierbarer Inhalt */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`job-details-${job.id}`}
                          role="region"
                          aria-label={`Details zu ${job.title}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                            opacity: { duration: 0.2 },
                          }}
                        >
                          <div className="border-t border-warm-100 dark:border-warm-700 px-6 pb-6 pt-4">
                            {/* Beschreibung */}
                            <p className="mb-4 text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                              {job.description}
                            </p>

                            {/* Anforderungen */}
                            <h4 className="mb-3 text-sm font-semibold text-warm-700 dark:text-warm-300">
                              Anforderungen
                            </h4>
                            <ul className="mb-6 flex flex-col gap-2">
                              {job.requirements.map((req) => (
                                <li
                                  key={req}
                                  className="flex items-start gap-2 text-sm text-warm-600 dark:text-warm-400"
                                >
                                  <CheckCircle2
                                    size={16}
                                    className="mt-0.5 shrink-0 text-brand-blue"
                                    aria-hidden="true"
                                  />
                                  {req}
                                </li>
                              ))}
                            </ul>

                            {/* Bewerben-Button */}
                            <Link
                              href="/kontakt"
                              className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20"
                            >
                              Jetzt bewerben
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
