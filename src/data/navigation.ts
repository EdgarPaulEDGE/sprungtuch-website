export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Für Familien", href: "/fuer-familien" },
  { label: "Für Kinder", href: "/fuer-kinder" },
  { label: "Für Schulen", href: "/fuer-schulen" },
  { label: "Inklusion", href: "/inklusion" },
  { label: "Engagement", href: "/engagement" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNavigation = {
  about: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  services: [
    { label: "Für Familien", href: "/fuer-familien" },
    { label: "Für Kinder", href: "/fuer-kinder" },
    { label: "Für Schulen", href: "/fuer-schulen" },
    { label: "Inklusion", href: "/inklusion" },
    { label: "Engagement", href: "/engagement" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Hinweisgeberschutz", href: "/datenschutz" },
  ],
};
