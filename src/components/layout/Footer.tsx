import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerNavigation } from "@/data/navigation";
import { getContactInfo } from "@/lib/sanity/queries";

export default async function Footer() {
  const contactInfo = await getContactInfo();

  return (
    <footer className="bg-warm-100 dark:bg-warm-900" role="contentinfo" aria-label="Seitenfuss">
      {/* Hauptbereich */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4 lg:gap-8">
          {/* Spalte 1: Marke */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/sprungtuch-logo.png"
                alt="Sprungtuch e.V. Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold text-warm-800 dark:text-warm-100">
                Sprungtuch e.V.
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-600 dark:text-warm-400">
              Kinder- und Jugendhilfe in Lübeck. Wir begleiten Familien, stärken
              Kinder und schaffen Raum für Entwicklung und Inklusion.
            </p>

            {/* Kontaktinfos */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-warm-600 dark:text-warm-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <span>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.zip} {contactInfo.address.city}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-warm-600 dark:text-warm-400">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand-blue"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-warm-600 dark:text-warm-400">
                <Mail className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-brand-blue"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-warm-600 dark:text-warm-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <nav aria-label="Seitennavigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-800 dark:text-warm-200">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-600 transition-colors hover:text-brand-red dark:text-warm-400 dark:hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Spalte 3: Angebote */}
          <nav aria-label="Angebote">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-800 dark:text-warm-200">
              Angebote
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-600 transition-colors hover:text-brand-red dark:text-warm-400 dark:hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Spalte 4: Rechtliches */}
          <nav aria-label="Rechtliches">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-800 dark:text-warm-200">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-600 transition-colors hover:text-brand-red dark:text-warm-400 dark:hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright-Leiste */}
      <div className="border-t border-warm-200 dark:border-warm-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-xs text-warm-500 dark:text-warm-500">
              &copy; {new Date().getFullYear()} Sprungtuch e.V. Lübeck
            </p>
            <p className="text-xs text-warm-400 dark:text-warm-600">
              Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
