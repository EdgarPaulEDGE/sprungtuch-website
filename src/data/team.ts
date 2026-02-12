export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  phone?: string;
  email?: string;
}

export const leadership: TeamMember[] = [
  {
    name: "Julius Schorpp",
    role: "Geschäftsführung",
    phone: "0451 7060434",
    email: "info@sprungtuchev.de",
  },
  {
    name: "Karoline Stojan-Brauer",
    role: "Geschäftsführung",
    phone: "0451 7060434",
    email: "info@sprungtuchev.de",
  },
];

export const departments: TeamMember[] = [
  {
    name: "Ambulante Soziale Hilfen",
    role: "Sozialpädagogische Familienhilfe, Begleiteter Umgang und mehr",
    department: "familien",
    phone: "0451 7060434",
  },
  {
    name: "Bildung und Erziehung",
    role: "Kindertagesstätten, Schulsozialarbeit und Jugendprojekte",
    department: "kinder",
    phone: "0451 7060434",
  },
  {
    name: "Projekte",
    role: "Demokratieförderung, Engagement und Inklusion",
    department: "engagement",
    phone: "0451 7060434",
  },
];
