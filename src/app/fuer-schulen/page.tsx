import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, BookOpen, Shield, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ServiceDetailCard } from "@/components/shared/ServiceDetailCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { schoolServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Für Schulen & Institutionen",
  description:
    "Workshops und Programme für ein respektvolles Miteinander an Schulen und in Einrichtungen. Sprungtuch e.V. Lübeck.",
  openGraph: {
    title: "Für Schulen & Institutionen | Sprungtuch e.V.",
    description:
      "Anti-Bias-Workshops, Gewaltprävention und mehr — praxisnahe Programme für Schulen und Einrichtungen in Lübeck.",
  },
};

// Highlights für Schulen
const highlights = [
  {
    icon: BookOpen,
    title: "Praxisnahe Formate",
    description:
      "Alle Workshops sind interaktiv und auf den Schulalltag zugeschnitten.",
  },
  {
    icon: Shield,
    title: "Erfahrene Fachkräfte",
    description:
      "Unsere Trainer:innen bringen jahrelange Erfahrung in der Schularbeit mit.",
  },
  {
    icon: Users,
    title: "Für alle Altersgruppen",
    description:
      "Von der Grundschule bis zur Berufsschule, wir passen unsere Angebote an.",
  },
];

export default function FuerSchulenPage() {
  return (
    <>
      <PageHero
        title="Für Schulen & Institutionen"
        subtitle="Workshops, Programme und Begleitung für ein respektvolles Miteinander, direkt an Ihrer Schule."
        variant="professional"
      />

      {/* Warum Sprungtuch: Highlights */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            Warum mit uns arbeiten?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Seit über 30 Jahren unterstützen wir Schulen in Lübeck mit
            praxisnahen Angeboten.
          </p>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="flex flex-col items-center rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-brand-blue">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-warm-800 dark:text-warm-200">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Prozess-Schritte */}
      <Section background="alt">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            So funktioniert die Zusammenarbeit
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Vom Erstgespräch bis zur Durchführung begleiten wir Sie
            professionell.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Bedarf besprechen",
              description:
                "Kontaktieren Sie uns und schildern Sie Ihre Situation. Wir beraten Sie zu passenden Formaten.",
            },
            {
              title: "Konzept entwickeln",
              description:
                "Wir erstellen ein maßgeschneidertes Angebot für Ihre Schule oder Einrichtung.",
            },
            {
              title: "Durchführung",
              description:
                "Unsere Fachkräfte kommen zu Ihnen und führen die Workshops professionell durch.",
            },
          ]}
        />
      </Section>

      {/* Unsere Angebote */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800 dark:text-warm-200">
            Unsere Angebote für Schulen
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600 dark:text-warm-400">
            Von Anti-Bias-Workshops bis Gewaltprävention bieten wir
            vielfältige Programme für Schüler:innen und Lehrkräfte.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {schoolServices.map((service) => (
            <ServiceDetailCard key={service.id} {...service} />
          ))}
        </div>
      </Section>

      {/* Kontakt-CTA */}
      <Section background="brand-blue">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <Mail size={28} className="text-white" />
            </div>
            <h2 className="mb-3 text-3xl font-bold text-white">
              Interesse an einem Workshop?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-blue-100">
              Wir entwickeln gerne ein passendes Angebot für Ihre Schule oder
              Einrichtung. Nehmen Sie Kontakt mit uns auf, wir beraten Sie
              unverbindlich.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Jetzt anfragen
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
