import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBackground = "default" | "alt" | "brand-blue" | "brand-red";

interface SectionProps {
  className?: string;
  children: ReactNode;
  id?: string;
  background?: SectionBackground;
}

const backgroundStyles: Record<SectionBackground, string> = {
  default: "bg-white dark:bg-warm-900",
  alt: "bg-warm-50 dark:bg-warm-800",
  "brand-blue": "bg-brand-blue text-white",
  "brand-red": "bg-brand-red text-white",
};

export default function Section({
  className,
  children,
  id,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        backgroundStyles[background],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
