import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ServiceDetailCard } from "@/components/shared/ServiceDetailCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { childrenServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Für Kinder & Jugendliche",
  description:
    "Von der Kita bis zur Jugendarbeit — wir schaffen Räume, in denen junge Menschen wachsen können. Sprungtuch e.V. Lübeck.",
  openGraph: {
    title: "Für Kinder & Jugendliche | Sprungtuch e.V.",
    description:
      "Kindertagesstätten, Schulsozialarbeit und Jugendprojekte — sichere Räume für junge Menschen in Lübeck.",
  },
};

// Die ersten beiden Eintraege sind die KITAs
const kitaServices = childrenServices.filter((s) =>
  ["buntekuh", "lauerholz"].includes(s.id)
);
const otherServices = childrenServices.filter(
  (s) => !["buntekuh", "lauerholz"].includes(s.id)
);

export default function FuerKinderPage() {
  return (
    <>
      <PageHero
        title="Fur Kinder & Jugendliche"
        subtitle="Von der Kita bis zur Jugendarbeit -- wir schaffen Raume, in denen junge Menschen wachsen, lernen und sich entfalten konnen."
        variant="playful"
      />

      {/* Unsere KITAs -- hervorgehobene Karten */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800">
            Unsere Kindertagesstatten
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600">
            Zwei Orte, an denen Kinder Geborgenheit, Vielfalt und
            Entdeckungsfreude erleben.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {kitaServices.map((service) => (
            <div key={service.id} className="relative">
              {/* Featured-Badge */}
              <div className="absolute -top-3 left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-semibold text-white shadow-md">
                <Star size={14} className="fill-current" />
                KITA
              </div>
              <ServiceDetailCard {...service} className="pt-8" />
            </div>
          ))}
        </div>
      </Section>

      {/* Prozess-Schritte */}
      <Section background="alt">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800">
            So begleiten wir junge Menschen
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600">
            Ob Kita-Platz, Schulsozialarbeit oder Jugendprojekt -- der Einstieg
            ist unkompliziert.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Anfrage stellen",
              description:
                "Melden Sie sich telefonisch oder per E-Mail bei uns. Wir beraten Sie gerne.",
            },
            {
              title: "Kennenlernen",
              description:
                "Besuchen Sie unsere Einrichtung und lernen Sie unser Team und die Raume kennen.",
            },
            {
              title: "Ankommen",
              description:
                "Ihr Kind wird behutsam eingewohnt und von unseren Fachkraften begleitet.",
            },
          ]}
        />
      </Section>

      {/* Weitere Angebote */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800">
            Weitere Angebote fur junge Menschen
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600">
            Schulsozialarbeit, Jugendnetzwerk und kreative Projekte -- wir sind
            dort, wo junge Menschen uns brauchen.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service) => (
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
              Interesse an einem Platz fur Ihr Kind?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-red-100">
              Ob Kita-Platz, Schulsozialarbeit oder ein Jugendprojekt -- wir
              freuen uns auf Ihre Anfrage und beraten Sie gerne personlich.
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
