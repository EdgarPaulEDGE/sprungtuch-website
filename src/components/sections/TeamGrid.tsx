"use client";

import type { TeamMember } from "@/data/team";
import { PersonCard } from "@/components/shared/PersonCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

interface TeamGridProps {
  leadership: TeamMember[];
  departments: TeamMember[];
}

export function TeamGrid({ leadership, departments }: TeamGridProps) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Geschaeftsfuehrung */}
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-bold text-warm-800 dark:text-warm-100 sm:text-4xl">
            Unser Team
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-warm-600 dark:text-warm-400">
            Engagierte Menschen, die Vielfalt leben und Familien begleiten.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="mb-6 text-xl font-semibold text-warm-700 dark:text-warm-300">
            Geschäftsführung
          </h3>
        </ScrollReveal>

        <StaggerChildren
          className="mb-16 grid gap-6 sm:grid-cols-2"
          staggerDelay={0.1}
        >
          {leadership.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              role={person.role}
              phone={person.phone}
              email={person.email}
            />
          ))}
        </StaggerChildren>

        {/* Abteilungen */}
        <ScrollReveal>
          <h3 className="mb-6 text-xl font-semibold text-warm-700 dark:text-warm-300">
            Abteilungen
          </h3>
        </ScrollReveal>

        <StaggerChildren
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {departments.map((person) => (
            <PersonCard
              key={`${person.name}-${person.role}`}
              name={person.name}
              role={person.role}
              department={person.department}
              phone={person.phone}
              email={person.email}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
