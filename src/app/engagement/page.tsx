import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Megaphone, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import { ServiceDetailCard } from "@/components/shared/ServiceDetailCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { getEngagementServices } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Engagement & Demokratie",
  description:
    "Demokratie stärken, Ehrenamt fördern, Gesellschaft gestalten. Engagieren Sie sich mit Sprungtuch e.V. in Lübeck.",
  openGraph: {
    title: "Engagement & Demokratie | Sprungtuch e.V.",
    description:
      "Demokratieförderung, kultursensible Hospizbegleitung und ehrenamtliches Engagement in Lübeck.",
  },
};

export default async function EngagementPage() {
  const engagementServices = await getEngagementServices();

  return (
    <>
      <PageHero
        title="Engagement & Demokratie"
        subtitle="Demokratie lebt vom Mitmachen. Wir stärken bürgerschaftliches Engagement und setzen uns für ein respektvolles Zusammenleben in Lübeck ein."
        variant="energetic"
      />

      {/* Warum Engagement wichtig ist */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            Gemeinsam Gesellschaft gestalten
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Ob Demokratieförderung, kultursensible Hospizbegleitung oder
            ehrenamtliches Engagement: Jede:r kann etwas bewegen.
          </p>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="flex flex-col items-center rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-brand-red">
                <Megaphone size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Stimme erheben
              </h3>
              <p className="text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                Demokratie braucht Menschen, die sich einbringen und Haltung
                zeigen.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-brand-red">
                <Users size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Gemeinschaft stärken
              </h3>
              <p className="text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                Zusammenhalt entsteht dort, wo Menschen füreinander da sind und
                Verantwortung übernehmen.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-brand-red">
                <HeartHandshake size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Würde bewahren
              </h3>
              <p className="text-sm leading-relaxed text-warm-600 dark:text-warm-400">
                Kultursensible Begleitung am Lebensende, für alle Menschen,
                unabhängig von Herkunft und Glauben.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Prozess-Schritte */}
      <Section background="alt">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold text-warm-800 dark:text-warm-200">
            So können Sie sich engagieren
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-warm-600 dark:text-warm-400">
            Der Einstieg ins Ehrenamt ist leichter als gedacht.
          </p>
        </ScrollReveal>
        <ProcessSteps
          steps={[
            {
              title: "Informieren",
              description:
                "Erfahren Sie mehr über unsere Projekte und finden Sie heraus, was zu Ihnen passt.",
            },
            {
              title: "Kontakt aufnehmen",
              description:
                "Melden Sie sich bei uns. Wir freuen uns über Ihr Interesse und beraten Sie gerne.",
            },
            {
              title: "Loslegen",
              description:
                "Wir begleiten Sie beim Einstieg und sorgen für eine gute Vorbereitung.",
            },
          ]}
        />
      </Section>

      {/* Unsere Angebote */}
      <Section>
        <ScrollReveal>
          <h2 className="mb-2 text-3xl font-bold text-warm-800 dark:text-warm-200">
            Unsere Projekte & Angebote
          </h2>
          <p className="mb-10 max-w-2xl text-warm-600 dark:text-warm-400">
            Demokratieförderung, kultursensible Hospizbegleitung und vielfältige
            Möglichkeiten, sich ehrenamtlich einzubringen.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engagementServices.map((service) => (
            <ServiceDetailCard key={service.id} {...service} />
          ))}
        </div>
      </Section>

      {/* Ehrenamt-CTA */}
      <Section background="brand-red">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <HeartHandshake size={28} className="text-white" />
            </div>
            <h2 className="mb-3 text-3xl font-bold text-white">
              Werden Sie Teil unserer Gemeinschaft
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-red-100">
              Ob als ehrenamtliche:r Hospizbegleiter:in, bei Veranstaltungen
              oder als Mentor:in: Es gibt viele Wege, sich bei Sprungtuch
              einzubringen. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-red-600 transition-all duration-300 hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Jetzt ehrenamtlich engagieren
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-red-600 hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
