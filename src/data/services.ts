export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // Lucide icon name
  href: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon?: string; // Lucide icon name
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
}

// Main service areas for homepage
export const serviceAreas: Service[] = [
  {
    id: "familien",
    title: "Für Familien",
    shortDescription: "Wir begleiten Familien in schwierigen Lebenssituationen mit individueller Unterstützung und professioneller Beratung.",
    description: "Sozialpädagogische Familienhilfe, Begleiteter Umgang, Familiengerichtshilfe und mehr.",
    icon: "Heart",
    href: "/fuer-familien",
  },
  {
    id: "kinder",
    title: "Für Kinder & Jugendliche",
    shortDescription: "Von der Kita bis zur Jugendarbeit — wir schaffen Räume, in denen junge Menschen wachsen können.",
    description: "Kindertagesstätten, Schulsozialarbeit, Jugendnetzwerk und kreative Projekte.",
    icon: "GraduationCap",
    href: "/fuer-kinder",
  },
  {
    id: "schulen",
    title: "Für Schulen & Institutionen",
    shortDescription: "Workshops und Programme für ein respektvolles Miteinander an Schulen und in Einrichtungen.",
    description: "Anti-Bias-Workshops, Gewaltprävention, Berufsorientierung und Selbstbehauptungstraining.",
    icon: "School",
    href: "/fuer-schulen",
  },
];

// Detailed services for /fuer-familien
export const familyServices: ServiceDetail[] = [
  {
    id: "spfh",
    title: "Sozialpädagogische Familienhilfe (SPFH)",
    description: "Wir unterstützen Familien direkt in ihrem Zuhause bei der Bewältigung von Alltagsproblemen, Erziehungsfragen und Krisensituationen.",
    icon: "Home",
    details: [
      "Beratung und Begleitung bei Erziehungsfragen",
      "Unterstützung bei Behördenangelegenheiten",
      "Hilfe bei der Strukturierung des Familienalltags",
      "Stärkung der Elternkompetenzen",
      "Vermittlung an weitere Hilfsangebote",
    ],
  },
  {
    id: "begleiteter-umgang",
    title: "Begleiteter Umgang",
    description: "Wir ermöglichen Kindern den Kontakt zu beiden Elternteilen in einem geschützten Rahmen.",
    icon: "Shield",
    details: [
      "Geschützter Rahmen für Eltern-Kind-Kontakte",
      "Professionelle Begleitung durch Fachkräfte",
      "Zusammenarbeit mit Familiengerichten",
      "Dokumentation und Berichterstattung",
    ],
  },
  {
    id: "familienanker",
    title: "Projekt Familienanker",
    description: "Ein niedrigschwelliges Angebot für Familien, die Orientierung und Unterstützung in ihrem Stadtteil suchen.",
    icon: "Anchor",
    details: [
      "Offene Beratungsangebote",
      "Gruppenangebote für Eltern und Kinder",
      "Vernetzung im Stadtteil",
      "Kulturelle Brückenarbeit",
    ],
  },
  {
    id: "kind-im-blick",
    title: "Kind im Blick",
    description: "Unterstützung für Kinder, deren Geschwister schwer erkrankt sind — damit auch sie gesehen werden.",
    icon: "Eye",
    details: [
      "Individuelle Begleitung für Geschwisterkinder",
      "Altersgerechte Gesprächsangebote",
      "Entlastung für die gesamte Familie",
      "Freizeitangebote und Auszeiten",
    ],
  },
];

// Children/Education services for /fuer-kinder
export const childrenServices: ServiceDetail[] = [
  {
    id: "buntekuh",
    title: "KITA & Familienzentrum BunteKuh",
    description: "Eine Kindertagesstätte, in der Vielfalt gelebt wird — mit Platz zum Spielen, Lernen und Wachsen.",
    icon: "Baby",
    details: [
      "Ganztägige Betreuung für Kinder von 1-6 Jahren",
      "Mehrsprachige Fachkräfte",
      "Inklusive Pädagogik",
      "Eltern-Kind-Angebote im Familienzentrum",
    ],
  },
  {
    id: "lauerholz",
    title: "Bildungshaus Lauerholz",
    description: "KITA und offene Ganztagsschule unter einem Dach — Bildung als durchgängiger Weg.",
    icon: "TreePine",
    details: [
      "Kindertagesstätte mit Vorschulbereich",
      "Offene Ganztagsschule (OGS)",
      "Nahtloser Übergang von Kita zur Schule",
      "Naturnahe Pädagogik",
    ],
  },
  {
    id: "schulsozialarbeit",
    title: "Schulsozialarbeit",
    description: "Direkt an Schulen präsent — als Ansprechperson für Schüler:innen, Eltern und Lehrkräfte.",
    icon: "GraduationCap",
    details: [
      "Einzelberatung und Krisenintervention",
      "Soziales Lernen in Klassen",
      "Elternberatung",
      "Netzwerkarbeit mit Jugendhilfe",
    ],
  },
  {
    id: "vernetzbar",
    title: "VernetzBar",
    description: "Ein Treffpunkt für junge Menschen zwischen 14 und 30 — Sport, Kultur und Gemeinschaft.",
    icon: "Users",
    details: [
      "Offene Angebote für Jugendliche und junge Erwachsene",
      "Sport- und Kulturprojekte",
      "Berufliche Orientierung",
      "Interkultureller Austausch",
    ],
  },
  {
    id: "lastenrad",
    title: "Leih mich! — Das E-Lastenfahrrad",
    description: "Ein kostenloses E-Lastenrad für Jugendprojekte und Aktionen im Stadtteil.",
    icon: "Bike",
    details: [
      "Kostenlose Ausleihe für Jugendarbeit",
      "Umweltfreundliche Mobilität",
      "Einsatz bei Veranstaltungen und Projekten",
    ],
  },
];

// School services for /fuer-schulen
export const schoolServices: ServiceDetail[] = [
  {
    id: "bik",
    title: "BIK — Berufsintegrationsklassen",
    description: "Sprachförderung und berufliche Orientierung für zugewanderte Jugendliche an Berufsschulen.",
    icon: "BookOpen",
    details: [
      "Intensive Deutschförderung",
      "Berufliche Orientierung und Praktika",
      "Sozialpädagogische Begleitung",
      "Übergang in Ausbildung oder Beruf",
    ],
  },
  {
    id: "ksi",
    title: "KSI — Kurzzeitige Sozialpädagogische Intervention",
    description: "Schnelle, gezielte Hilfe bei akuten sozialen Herausforderungen im Schulalltag.",
    icon: "Zap",
    details: [
      "Krisenintervention",
      "Einzelfallberatung",
      "Gruppenpädagogische Angebote",
      "Kooperation mit Lehrkräften",
    ],
  },
  {
    id: "anti-bias",
    title: "Anti-Bias & Anti-Diskriminierung",
    description: "Workshops, die sensibilisieren und einen respektvollen Umgang fördern.",
    icon: "Scale",
    details: [
      "Bewusstseinsbildung für Vorurteile",
      "Handlungsstrategien gegen Diskriminierung",
      "Fortbildungen für Fachkräfte",
      "Altersgerechte Formate für Schüler:innen",
    ],
  },
  {
    id: "gewaltpraevention",
    title: "Gewaltprävention",
    description: "Programme für ein gewaltfreies Miteinander an Schulen.",
    icon: "HandHeart",
    details: [
      "Konfliktkompetenz-Training",
      "Deeskalationsstrategien",
      "Arbeit mit gewaltbereiten Jugendlichen",
      "Peer-Mediation",
    ],
  },
  {
    id: "selbstbehauptung",
    title: "Selbstbehauptung",
    description: "Stärkung des Selbstbewusstseins und der persönlichen Grenzen.",
    icon: "Sparkles",
    details: [
      "Selbstverteidigungselemente",
      "Rollenspiele und Übungen",
      "Stärkung von Selbstwert und Durchsetzungsfähigkeit",
      "Geschlechtersensible Angebote",
    ],
  },
];

// Inclusion services for /inklusion
export const inclusionServices: ServiceDetail[] = [
  {
    id: "ambulante-hilfen",
    title: "Ambulante Eingliederungshilfe",
    description: "Unterstützung für Menschen mit seelischer Behinderung im Alltag — für mehr Selbstständigkeit und Teilhabe.",
    icon: "HeartHandshake",
    details: [
      "Alltagsbegleitung und -strukturierung",
      "Unterstützung bei Behördengängen",
      "Soziale Integration und Teilhabe",
      "Individuelle Hilfeplanung (SGB IX)",
    ],
  },
  {
    id: "sprachmittlung",
    title: "Sprach- und Kulturmittlung",
    description: "Unsere mehrsprachigen Fachkräfte überbrücken sprachliche und kulturelle Barrieren.",
    icon: "Languages",
    details: [
      "Dolmetschen in über 7 Sprachen",
      "Kulturelle Vermittlung bei Behördenterminen",
      "Begleitung zu Ärzt:innen und Beratungsstellen",
      "Sprachen: Türkisch, Kurdisch, Arabisch, Polnisch, Russisch, Englisch, Deutsch",
    ],
  },
  {
    id: "flow",
    title: "FLOW 4.0",
    description: "Ein Projekt für gesellschaftliche Teilhabe von Menschen mit Migrationserfahrung.",
    icon: "Workflow",
    details: [
      "Empowerment und Qualifizierung",
      "Digitale Kompetenzen",
      "Berufliche Integration",
      "Netzwerkaufbau",
    ],
  },
];

// Engagement services for /engagement
export const engagementServices: ServiceDetail[] = [
  {
    id: "demokratie",
    title: "Partnerschaft für Demokratie Lübeck",
    description: "Wir stärken demokratische Werte und bürgerschaftliches Engagement in Lübeck.",
    icon: "Vote",
    details: [
      "Förderung zivilgesellschaftlicher Projekte",
      "Jugendforum und Jugendbeteiligung",
      "Veranstaltungen und Vernetzung",
      "Teil des Bundesprogramms 'Demokratie leben!'",
    ],
  },
  {
    id: "hospiz",
    title: "Kultursensible Hospizbegeleitung",
    description: "Würdevolle Begleitung am Lebensende — kultursensibel und mehrsprachig.",
    icon: "Heart",
    details: [
      "Begleitung schwerstkranker und sterbender Menschen",
      "Unterstützung für Angehörige",
      "Mehrsprachiges Team",
      "Berücksichtigung kultureller und religiöser Bedürfnisse",
    ],
  },
  {
    id: "ehrenamt",
    title: "Ehrenamtliches Engagement",
    description: "Es gibt viele Möglichkeiten, sich bei Sprungtuch einzubringen.",
    icon: "HandHelping",
    details: [
      "Unterstützung in der Hospizbegeleitung",
      "Mithilfe bei Veranstaltungen",
      "Patenschaften und Mentoring",
      "Kontaktieren Sie uns für aktuelle Möglichkeiten",
    ],
  },
];
