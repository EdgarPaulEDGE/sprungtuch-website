import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import { PartnerLogoBar } from "@/components/sections/PartnerLogoBar";
import Section from "@/components/layout/Section";
import { serviceAreas } from "@/data/services";

export const metadata: Metadata = {
  title: "Sprungtuch e.V. | Vielfalt in Bewegung | Sozialpädagogik in Lübeck",
  description:
    "Sprungtuch e.V. Lübeck: Sozialpädagogische Projekte für Familien, Kinder und Jugendliche. Inklusion, Engagement und ein respektvolles Miteinander seit 1989.",
  openGraph: {
    title: "Sprungtuch e.V. | Vielfalt in Bewegung",
    description:
      "Sozialpädagogische Projekte für Familien, Kinder und ein respektvolles Miteinander in Lübeck. Seit 1989.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-warm-800 dark:text-warm-100 sm:text-4xl">
            Unsere Angebote
          </h2>
          <p className="mt-4 text-lg text-warm-600 dark:text-warm-400 max-w-2xl mx-auto">
            Wir begleiten Menschen in verschiedenen Lebenssituationen, mit Herz, Kompetenz und Respekt.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {serviceAreas.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </Section>
      <CTABand />
      <PartnerLogoBar />
    </>
  );
}
