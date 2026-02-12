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
    name: "Abteilungsleitung",
    role: "Ambulante Soziale Hilfen",
    department: "familien",
    phone: "0451 7060434",
  },
  {
    name: "Abteilungsleitung",
    role: "Bildung und Erziehung",
    department: "kinder",
    phone: "0451 7060434",
  },
  {
    name: "Abteilungsleitung",
    role: "Projekte",
    department: "engagement",
    phone: "0451 7060434",
  },
];
