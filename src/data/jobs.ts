export interface Job {
  id: string;
  title: string;
  department: string;
  type: string; // Vollzeit, Teilzeit, etc.
  description: string;
  requirements: string[];
}

export const benefits = [
  { title: "Flache Hierarchien", description: "Kollegiale Beratung statt steile Hierarchien", icon: "Users" },
  { title: "Vielfältiges Team", description: "30% mehrsprachige Kolleg:innen aus verschiedenen Kulturen", icon: "Globe" },
  { title: "Sinnvolle Arbeit", description: "Direkter positiver Einfluss auf das Leben von Familien und Kindern", icon: "Heart" },
  { title: "Weiterbildung", description: "Regelmäßige Fortbildungen und Supervision", icon: "BookOpen" },
  { title: "Zentrale Lage", description: "Unser Büro liegt mitten in der Lübecker Altstadt", icon: "MapPin" },
  { title: "Seit 1989", description: "Ein etablierter Träger mit über 35 Jahren Erfahrung", icon: "Award" },
];

export const currentJobs: Job[] = [
  {
    id: "spfh-fachkraft",
    title: "Sozialpädagogische Fachkraft (m/w/d)",
    department: "Ambulante Soziale Hilfen",
    type: "Teilzeit / Vollzeit",
    description: "Für unser Team der Sozialpädagogischen Familienhilfe suchen wir engagierte Fachkräfte, die Familien in herausfordernden Lebenssituationen begleiten möchten.",
    requirements: [
      "Abgeschlossenes Studium der Sozialen Arbeit oder vergleichbar",
      "Erfahrung in der Jugendhilfe wünschenswert",
      "Empathie und Kommunikationsstärke",
      "Führerschein Klasse B",
    ],
  },
];
