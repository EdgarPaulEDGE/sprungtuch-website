"use client";

import {
  Phone,
  Mail,
  User,
  CheckCircle,
  Home,
  Shield,
  Anchor,
  Eye,
  Baby,
  TreePine,
  GraduationCap,
  Users,
  Bike,
  BookOpen,
  Zap,
  Scale,
  HandHeart,
  Sparkles,
  HeartHandshake,
  Languages,
  Workflow,
  Vote,
  Heart,
  HandHelping,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

// Icon-Mapping: String-Name → Lucide Komponente
const iconMap: Record<string, LucideIcon> = {
  Home,
  Shield,
  Anchor,
  Eye,
  Baby,
  TreePine,
  GraduationCap,
  Users,
  Bike,
  BookOpen,
  Zap,
  Scale,
  HandHeart,
  Sparkles,
  HeartHandshake,
  Languages,
  Workflow,
  Vote,
  Heart,
  HandHelping,
};

interface ServiceDetailCardProps {
  title: string;
  description: string;
  details: string[];
  icon?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  className?: string;
}

/**
 * Detaillierte Service-Karte fuer Unterseiten.
 * Zeigt Icon, Titel, Beschreibung, Details als Liste und optionale Kontaktdaten.
 * Linker Akzent-Rand in brand-red.
 */
export function ServiceDetailCard({
  title,
  description,
  details,
  icon,
  contactPerson,
  contactPhone,
  contactEmail,
  className,
}: ServiceDetailCardProps) {
  const hasContact = contactPerson || contactPhone || contactEmail;
  const IconComponent = icon ? iconMap[icon] : null;

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
        {/* Icon + Titel */}
        <div className="flex items-start gap-4 mb-2">
          {IconComponent && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-brand-red">
              <IconComponent size={22} aria-hidden="true" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-warm-900 dark:text-warm-100 pt-1.5">{title}</h3>
        </div>

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
