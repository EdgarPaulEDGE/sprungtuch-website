"use client";

import Link from "next/link";
import { Heart, GraduationCap, School } from "lucide-react";
import { IconCircle } from "@/components/brand/IconCircle";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  GraduationCap,
  School,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  index = 0,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] ?? Heart;

  return (
    <ScrollReveal delay={index * 0.15}>
      <Link href={href} className="group block h-full">
        <div className="flex h-full flex-col rounded-2xl bg-white dark:bg-warm-800 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          {/* Icon */}
          <IconCircle
            icon={IconComponent}
            color="red"
            size="lg"
            className="mb-6 transition-transform duration-300 group-hover:scale-110"
          />

          {/* Titel */}
          <h3 className="mb-3 text-xl font-bold text-warm-800 dark:text-warm-100 sm:text-2xl">
            {title}
          </h3>

          {/* Beschreibung */}
          <p className="mb-6 flex-1 text-base leading-relaxed text-warm-600 dark:text-warm-400">
            {description}
          </p>

          {/* Link */}
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red dark:text-red-400 transition-colors group-hover:text-red-600 dark:group-hover:text-red-300">
            Mehr erfahren
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
