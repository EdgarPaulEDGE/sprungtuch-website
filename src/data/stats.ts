export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const impactStats: Stat[] = [
  { value: 35, suffix: "+", label: "Jahre Erfahrung" },
  { value: 30, suffix: "%", label: "Mehrsprachige Mitarbeitende" },
  { value: 7, suffix: "+", label: "Sprachen im Team" },
  { value: 1989, label: "Gegründet in Lübeck" },
];
