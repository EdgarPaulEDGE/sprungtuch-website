import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { BenefitCard } from "@/components/shared/BenefitCard";
import { JobList } from "@/components/sections/JobList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { getBenefits, getCurrentJobs } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Karriere bei Sprungtuch e.V. in Lübeck. Werde Teil unseres engagierten Teams. Offene Stellen, Benefits und Bewerbungsprozess.",
  openGraph: {
    title: "Karriere | Sprungtuch e.V.",
    description:
      "Werde Teil unseres Teams in Lübeck. Offene Stellen, Benefits und ein wertschätzendes Arbeitsumfeld.",
  },
};

export default async function KarrierePage() {
  const [benefits, jobs] = await Promise.all([getBenefits(), getCurrentJobs()]);

  return (
    <>
      <PageHero
        title="Karriere bei Sprungtuch"
        subtitle="Werde Teil eines Teams, das Vielfalt lebt und Familien stärkt. Wir suchen engagierte Menschen, die mit Herz und Haltung arbeiten."
        variant="energetic"
      />

      {/* Benefits */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 sm:text-4xl">
            Warum Sprungtuch?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600">
            Bei uns erwartet dich ein wertschätzendes Arbeitsumfeld mit echtem
            gesellschaftlichem Impact.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </Section>

      {/* Offene Stellen */}
      <Section background="alt">
        <JobList jobs={jobs} />
      </Section>

      {/* Bewerbungsprozess */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 sm:text-4xl">
            So bewirbst du dich
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600">
            Dein Weg zu uns ist unkompliziert: in nur vier Schritten.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Stellenanzeige lesen",
              description:
                "Finde die passende Stelle und informiere dich über die Anforderungen.",
            },
            {
              title: "Bewerbung senden",
              description:
                "Schicke uns deine Unterlagen per E-Mail oder über unser Kontaktformular.",
            },
            {
              title: "Kennenlerngespräch",
              description:
                "Wir laden dich zu einem persönlichen Gespräch ein, locker und auf Augenhöhe.",
            },
            {
              title: "Willkommen im Team",
              description:
                "Nach einer erfolgreichen Hospitation starten wir gemeinsam durch.",
            },
          ]}
        />
      </Section>
    </>
  );
}
