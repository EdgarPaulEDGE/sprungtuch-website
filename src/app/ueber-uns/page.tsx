import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { Timeline } from "@/components/sections/Timeline";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Sprungtuch e.V. — über 35 Jahre Engagement für Vielfalt, Inklusion und ein respektvolles Miteinander in Lübeck.",
  openGraph: {
    title: "Über uns | Sprungtuch e.V.",
    description:
      "Über 35 Jahre Engagement für Vielfalt, Inklusion und ein respektvolles Miteinander in Lübeck. Lernen Sie unser Team kennen.",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        subtitle="Seit über 35 Jahren setzen wir uns in Lübeck für ein vielfältiges und respektvolles Miteinander ein — mit Herz, Haltung und Kompetenz."
        variant="warm"
      />

      {/* Leitbild / Mission */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-warm-800 sm:text-4xl">
              Unser Leitbild
            </h2>
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-warm-50 p-8 md:p-12">
              {/* Dekoratives Anführungszeichen */}
              <Quote
                size={48}
                className="mx-auto mb-6 text-brand-blue/20"
                aria-hidden="true"
              />
              <blockquote className="text-xl font-medium leading-relaxed text-warm-800 md:text-2xl">
                &bdquo;Wir betrachten die Vielfalt der Gesellschaft als große
                Stärke&ldquo;
              </blockquote>
              <p className="mt-6 text-warm-600 leading-relaxed">
                Sprungtuch e.V. steht für eine offene, inklusive Gesellschaft.
                Wir begleiten Menschen in unterschiedlichen Lebenssituationen und
                fördern ein respektvolles Zusammenleben — unabhängig von
                Herkunft, Sprache oder sozialer Lage. Unser Team vereint über 30
                Prozent mehrsprachige Mitarbeitende aus verschiedenen Kulturen
                und bringt damit die Vielfalt, die wir leben, direkt in unsere
                Arbeit ein.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Timeline — Geschichte */}
      <Section background="alt">
        <Timeline />
      </Section>

      {/* Team */}
      <Section>
        <TeamGrid />
      </Section>

      {/* Statistiken */}
      <StatsCounter />
    </>
  );
}
