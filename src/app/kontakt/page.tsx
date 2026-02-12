import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { contactInfo } from "@/data/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit Sprungtuch e.V. in Lübeck auf, per Telefon, E-Mail oder über unser Kontaktformular.",
  openGraph: {
    title: "Kontakt | Sprungtuch e.V.",
    description:
      "Kontaktieren Sie Sprungtuch e.V. in Lübeck per Telefon, E-Mail oder Kontaktformular. Wir helfen Ihnen gerne.",
  },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht. Melden Sie sich gerne bei uns."
        variant="professional"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Linke Spalte: Kontaktinfos + Karte */}
          <div className="space-y-8">
            {/* Karten-Platzhalter */}
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white shadow-lg md:p-10">
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <MapPin size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mb-1 text-xl font-bold">Unser Standort</h3>
                  <p className="text-blue-100">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.zip} {contactInfo.address.city}
                  </p>
                </div>
                {/* Dekoratives Pattern */}
                <div
                  className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/5"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            {/* Kontaktdaten */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-warm-800 dark:text-warm-200">
                  Kontaktdaten
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-4 text-warm-700 dark:text-warm-300 transition-all duration-200 hover:border-brand-blue/30 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                      <Phone size={18} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-warm-500 dark:text-warm-400">
                        Telefon
                      </p>
                      <p className="font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-4 text-warm-700 dark:text-warm-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                      <Printer size={18} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-warm-500 dark:text-warm-400">Fax</p>
                      <p className="font-medium">{contactInfo.fax}</p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-4 text-warm-700 dark:text-warm-300 transition-all duration-200 hover:border-brand-blue/30 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                      <Mail size={18} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-warm-500 dark:text-warm-400">
                        E-Mail
                      </p>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-4 text-warm-700 dark:text-warm-300">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                      <Clock size={18} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-warm-500 dark:text-warm-400">
                        Öffnungszeiten
                      </p>
                      <p className="font-medium">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Rechte Spalte: Kontaktformular */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="rounded-2xl border border-warm-200 dark:border-warm-700 bg-warm-50 dark:bg-warm-900 p-6 md:p-8">
              <h3 className="mb-2 text-xl font-bold text-warm-800 dark:text-warm-200">
                Schreiben Sie uns
              </h3>
              <p className="mb-6 text-sm text-warm-600 dark:text-warm-400">
                Füllen Sie das Formular aus und wir melden uns zeitnah bei
                Ihnen.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
