import { cn } from "@/lib/utils";

interface BrandPatternProps {
  className?: string;
}

/**
 * Dekoratives SVG-Hintergrundmuster mit Kreisen und Quadraten
 * in den Markenfarben. Wird als Hintergrunddekoration auf Sektionen verwendet.
 */
export function BrandPattern({ className }: BrandPatternProps) {
  return (
    <svg
      className={cn("pointer-events-none select-none", className)}
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Grosse Kreise — Brand Red */}
      <circle cx={120} cy={80} r={24} fill="#E21E48" opacity={0.06} />
      <circle cx={680} cy={140} r={32} fill="#E21E48" opacity={0.05} />
      <circle cx={400} cy={520} r={28} fill="#E21E48" opacity={0.07} />

      {/* Mittlere Kreise — Brand Blue */}
      <circle cx={300} cy={200} r={18} fill="#0273B5" opacity={0.06} />
      <circle cx={720} cy={420} r={20} fill="#0273B5" opacity={0.05} />
      <circle cx={80} cy={480} r={16} fill="#0273B5" opacity={0.07} />

      {/* Kleine Kreise */}
      <circle cx={520} cy={60} r={10} fill="#E21E48" opacity={0.08} />
      <circle cx={180} cy={340} r={12} fill="#0273B5" opacity={0.06} />
      <circle cx={620} cy={300} r={8} fill="#E21E48" opacity={0.05} />
      <circle cx={450} cy={380} r={14} fill="#0273B5" opacity={0.04} />

      {/* Abgerundete Quadrate — Brand Blue */}
      <rect
        x={560}
        y={180}
        width={36}
        height={36}
        rx={6}
        fill="#0273B5"
        opacity={0.05}
      />
      <rect
        x={60}
        y={220}
        width={28}
        height={28}
        rx={5}
        fill="#0273B5"
        opacity={0.06}
      />
      <rect
        x={340}
        y={440}
        width={32}
        height={32}
        rx={6}
        fill="#0273B5"
        opacity={0.04}
      />

      {/* Abgerundete Quadrate — Brand Red */}
      <rect
        x={200}
        y={100}
        width={24}
        height={24}
        rx={4}
        fill="#E21E48"
        opacity={0.05}
      />
      <rect
        x={700}
        y={520}
        width={30}
        height={30}
        rx={5}
        fill="#E21E48"
        opacity={0.06}
      />
      <rect
        x={480}
        y={260}
        width={20}
        height={20}
        rx={4}
        fill="#E21E48"
        opacity={0.04}
      />

      {/* Kleine dekorative Quadrate */}
      <rect
        x={150}
        y={520}
        width={16}
        height={16}
        rx={3}
        fill="#0273B5"
        opacity={0.05}
      />
      <rect
        x={750}
        y={60}
        width={18}
        height={18}
        rx={3}
        fill="#E21E48"
        opacity={0.04}
      />
    </svg>
  );
}
