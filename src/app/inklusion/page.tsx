import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Globe, Languages } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ServiceDetailCard } from "@/components/shared/ServiceDetailCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { inclusionServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Inklusion & Teilhabe",
  description:
    "Ambulante Eingliederungshilfe, Sprach- und Kulturmittlung und Projekte für gesellschaftliche Teilhabe. Sprungtuch e.V. Lübeck.",
  openGraph: {
    title: "Inklusion & Teilhabe | Sprungtuch e.V.",
    description:
      "Eingliederungshilfe, Sprach- und Kulturmittlung. Wir fördern gleichberechtigte Teilhabe in Lübeck.",
  },
};

// Sprachen, die unser Team spricht
const languages = [
  "Deutsch",
  "Türkisch",
  "Kurdisch",
  "Arabisch",
  "Polnisch",
  "Russisch",
  "Englisch",
];

export default function InklusionPage() {
  return (
    <>
      <PageHero
        title="Inklusion & Teilhabe"
        subtitle="Wir setzen uns dafür ein, dass alle Menschen gleichberechtigt am gesellschaftlichen Leben teilhaben können, unabhängig von Herkunft, Sprache oder Behinderung."
        variant="warm"
      />

      {/* Sprach-Feature: 7+ Sprachen */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-2xl border border-warm-200 dark:border-warm-700 bg-gradient-to-br from-warm-50 to-white dark:from-warm-800 dark:to-warm-900 p-8 shadow-sm md:p-12">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-10">
              {/* Icon */}
              <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 md:mb-0">
                <Languages size={40} className="text-brand-red" />
              </div>

              {/* Inhalt */}
              <div>
                <h2 className="mb-3 text-2xl font-bold text-warm-800 dark:text-warm-200 md:text-3xl">
                  Wir sprechen Ihre Sprache
                </h2>
                <p className="mb-6 text-warm-600 dark:text-warm-400 leading-relaxed">
                  Unser mehrsprachiges Team überbrückt sprachliche und kulturelle
                  Barrieren. Wir begleiten Sie bei Behördenterminen, Arztbesuchen
                  und Beratungsgesprächen in über 7 Sprachen.
                </p>

                {/* Sprach-Tags */}
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center gap-1.5 rounded-full bg-warm-100 dark:bg-warm-800 px-4 py-1.5 text-sm font-medium text-warm-700 dark:text-warm-300 transition-colors hover:bg-brand-red/10 hover:text-brand-red"
                    >
                      <Globe size={14} className="shrink-0" />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Prozess-Schritte */}
      <Section background="alt">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            So unterstützen wir Sie
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Der Zugang zu unseren Angeboten ist niedrigschwellig und
            unkompliziert.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Kontakt aufnehmen",
              description:
                "Rufen Sie uns an oder schreiben Sie uns, gerne auch in Ihrer Muttersprache.",
            },
            {
              title: "Bedarf klären",
              description:
                "Gemeinsam besprechen wir Ihre Situation und finden das passende Unterstützungsangebot.",
            },
            {
              title: "Begleitung starten",
              description:
                "Unsere Fachkräfte begleiten Sie individuell, ob im Alltag, bei Behörden oder im Beruf.",
            },
          ]}
        />
      </Section>

      {/* Unsere Angebote */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800 dark:text-warm-200">
            Unsere Angebote für Inklusion & Teilhabe
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600 dark:text-warm-400">
            Von der ambulanten Eingliederungshilfe bis zur Sprach- und
            Kulturmittlung. Wir öffnen Türen und bauen Brücken.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inclusionServices.map((service) => (
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
              Wir helfen Ihnen gerne weiter
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-red-100">
              Benötigen Sie Unterstützung im Alltag, bei Behördengängen oder
              suchen Sie eine Sprach- und Kulturmittlung? Kontaktieren Sie uns,
              wir sind für Sie da.
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
