"use client";

import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface PersonCardProps {
  name: string;
  role: string;
  department?: string;
  phone?: string;
  email?: string;
  className?: string;
}

/**
 * Generiert Initialen aus einem Namen (maximal 2 Buchstaben).
 */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Erzeugt eine konsistente Hintergrundfarbe basierend auf dem Namen.
 */
function getAvatarColor(name: string): string {
  const colors = [
    "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    "bg-red-200 dark:bg-red-900/40 text-red-700 dark:text-red-400",
    "bg-blue-200 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Team-Mitglieder-Karte mit Avatar-Platzhalter (farbiger Kreis mit Initialen),
 * Name, Rolle und optionalen Kontaktdaten.
 */
export function PersonCard({
  name,
  role,
  department,
  phone,
  email,
  className,
}: PersonCardProps) {
  const initials = getInitials(name);
  const avatarColor = getAvatarColor(name);

  return (
    <ScrollReveal>
      <article
        className={cn(
          "group rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-6",
          "shadow-sm transition-all duration-300",
          "hover:shadow-md hover:-translate-y-1",
          className,
        )}
      >
        <div className="flex items-start gap-4">
          {/* Avatar-Platzhalter mit Initialen */}
          <div
            className={cn(
              "flex items-center justify-center rounded-full shrink-0",
              "h-14 w-14 text-lg font-semibold",
              avatarColor,
            )}
            aria-hidden="true"
          >
            {initials}
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-warm-900 dark:text-warm-100 truncate">
              {name}
            </h3>
            <p className="text-warm-600 dark:text-warm-400 text-sm">{role}</p>
            {department && (
              <span className="inline-block mt-1.5 text-xs font-medium text-brand-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 rounded-full">
                {department}
              </span>
            )}
          </div>
        </div>

        {/* Kontaktdaten */}
        {(phone || email) && (
          <div className="mt-4 pt-4 border-t border-warm-100 dark:border-warm-700 flex flex-col gap-2">
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-warm-600 dark:text-warm-400 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={15} className="shrink-0 text-warm-400" aria-hidden="true" />
                {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 text-sm text-warm-600 dark:text-warm-400 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={15} className="shrink-0 text-warm-400" aria-hidden="true" />
                {email}
              </a>
            )}
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}
