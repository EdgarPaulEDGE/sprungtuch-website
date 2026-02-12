"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-Advance alle 6 Sekunden
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-warm-100 dark:bg-warm-800 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-warm-800 dark:text-warm-100 sm:text-4xl">
            Was andere sagen
          </h2>
        </ScrollReveal>

        {/* Karussell-Container */}
        <div
          className="relative min-h-[280px] sm:min-h-[240px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Dekoratives Anfuehrungszeichen */}
          <Quote
            size={64}
            className="absolute -top-2 left-4 text-brand-red/10 sm:left-0"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              role="group"
              aria-roledescription="Folie"
              aria-label={`Testimonial ${current + 1} von ${testimonials.length}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl bg-white dark:bg-warm-900 p-8 shadow-sm sm:p-10"
            >
              {/* Zitat */}
              <blockquote className="mb-6 text-lg leading-relaxed text-warm-700 dark:text-warm-300 italic sm:text-xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Autor */}
              <footer className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center" aria-hidden="true">
                  <span className="text-sm font-bold text-brand-blue">
                    {testimonials[current].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-warm-800 dark:text-warm-200">
                    {testimonials[current].author}
                  </p>
                  <p className="text-xs text-warm-500 dark:text-warm-400">
                    {testimonials[current].context}
                  </p>
                </div>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Testimonial-Navigation"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={current === index}
              onClick={() => setCurrent(index)}
              aria-label={`Testimonial ${index + 1} von ${testimonials.length} anzeigen`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-brand-red"
                  : "w-2.5 bg-warm-300 hover:bg-warm-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
