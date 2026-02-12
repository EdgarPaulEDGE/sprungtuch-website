"use client";

import Link from "next/link";
import { ArrowRight, Users, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function CTABand() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 py-16 px-6">
      <ScrollReveal>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Karriere CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 dark:bg-white/10">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              Werde Teil unseres Teams
            </h3>
            <p className="mb-6 max-w-md text-red-100 dark:text-red-200">
              Wir suchen engagierte Menschen, die Vielfalt leben und Familien
              begleiten moechten.
            </p>
            <Link
              href="/karriere"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-red-600 dark:hover:bg-red-50"
            >
              Offene Stellen
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Kontakt CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 dark:bg-white/10">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              Kontaktiere uns
            </h3>
            <p className="mb-6 max-w-md text-red-100 dark:text-red-200">
              Fragen zu unseren Angeboten? Wir sind gerne fuer dich da
              — telefonisch, per E-Mail oder persoenlich.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-red-600 hover:-translate-y-0.5 dark:border-white dark:hover:bg-white dark:hover:text-red-700"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
