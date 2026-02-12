import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ServiceDetailCard } from "@/components/shared/ServiceDetailCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { familyServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Für Familien",
  description:
    "Wir begleiten Familien in Lübeck — mit Sozialpädagogischer Familienhilfe, Begleitetem Umgang und weiteren Hilfsangeboten.",
  openGraph: {
    title: "Für Familien | Sprungtuch e.V.",
    description:
      "Sozialpädagogische Familienhilfe, Begleiteter Umgang und mehr — individuelle Unterstützung für Familien in Lübeck.",
  },
};

export default function FuerFamilienPage() {
  return (
    <>
      <PageHero
        title="Für Familien"
        subtitle="Wir begleiten Familien in schwierigen Lebenssituationen, individuell, wertschätzend und mit Herz."
        variant="warm"
      />

      {/* Prozess-Schritte: So kommen Sie zu uns */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            So kommen Sie zu uns
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Der Weg zu unserer Unterstützung ist einfach und unkompliziert.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Kontakt aufnehmen",
              description:
                "Rufen Sie uns an oder schreiben Sie uns. Unverbindlich und vertraulich.",
            },
            {
              title: "Erstgespräch",
              description:
                "Wir lernen Ihre Situation kennen und besprechen gemeinsam mögliche Hilfen.",
            },
            {
              title: "Begleitung",
              description:
                "Unsere Fachkräfte begleiten Sie individuell, direkt bei Ihnen vor Ort.",
            },
          ]}
        />
      </Section>

      {/* Angebote für Familien */}
      <Section background="alt">
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800 dark:text-warm-200">
            Unsere Angebote für Familien
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600 dark:text-warm-400">
            Von der Sozialpädagogischen Familienhilfe bis zum Projekt
            Familienanker: Wir bieten vielfältige Unterstützung für jede
            Lebenslage.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {familyServices.map((service) => (
            <ServiceDetailCard key={service.id} {...service} />
          ))}
        </div>
      </Section>

      {/* Kontakt-CTA */}
      <Section background="brand-red">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <Phone size={28} className="text-white" />
            </div>
            <h2 className="mb-3 text-3xl font-bold text-white">
              Wir sind für Sie da
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-red-100">
              Sie haben Fragen zu unseren Familienangeboten oder möchten ein
              unverbindliches Erstgespräch vereinbaren? Kontaktieren Sie uns,
              wir helfen Ihnen gerne weiter.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-red-600 transition-all duration-300 hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
