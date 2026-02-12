"use client";

import { Phone, Mail, User, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ServiceDetailCardProps {
  title: string;
  description: string;
  details: string[];
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  className?: string;
}

/**
 * Detaillierte Service-Karte fuer Unterseiten.
 * Zeigt Titel, Beschreibung, Details als Liste und optionale Kontaktdaten.
 * Linker Akzent-Rand in brand-red.
 */
export function ServiceDetailCard({
  title,
  description,
  details,
  contactPerson,
  contactPhone,
  contactEmail,
  className,
}: ServiceDetailCardProps) {
  const hasContact = contactPerson || contactPhone || contactEmail;

  return (
    <ScrollReveal>
      <article
        className={cn(
          "group rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800",
          "border-l-4 border-l-brand-red",
          "p-6 md:p-8",
          "shadow-sm transition-shadow duration-300",
          "hover:shadow-md",
          className,
        )}
      >
        {/* Titel */}
        <h3 className="text-xl font-semibold text-warm-900 dark:text-warm-100 mb-2">{title}</h3>

        {/* Beschreibung */}
        <p className="text-warm-600 dark:text-warm-400 leading-relaxed mb-5">{description}</p>

        {/* Detail-Liste */}
        <ul className="space-y-2.5 mb-6" role="list">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-warm-700 dark:text-warm-300">
              <CheckCircle
                size={18}
                className="mt-0.5 shrink-0 text-brand-red"
                aria-hidden="true"
              />
              <span className="leading-snug">{detail}</span>
            </li>
          ))}
        </ul>

        {/* Optionaler Kontaktbereich */}
        {hasContact && (
          <div className="border-t border-warm-200 dark:border-warm-700 pt-5 mt-2">
            <p className="text-sm font-medium text-warm-500 dark:text-warm-400 uppercase tracking-wide mb-3">
              Kontakt
            </p>
            <div className="flex flex-col gap-2">
              {contactPerson && (
                <div className="flex items-center gap-2.5 text-warm-700 dark:text-warm-300">
                  <User size={16} className="shrink-0 text-warm-400" aria-hidden="true" />
                  <span className="text-sm">{contactPerson}</span>
                </div>
              )}
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-warm-700 dark:text-warm-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-warm-400" aria-hidden="true" />
                  <span className="text-sm">{contactPhone}</span>
                </a>
              )}
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2.5 text-warm-700 dark:text-warm-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-warm-400" aria-hidden="true" />
                  <span className="text-sm">{contactEmail}</span>
                </a>
              )}
            </div>
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}
