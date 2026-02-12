export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Sprungtuch hat unserer Familie in einer sehr schwierigen Zeit geholfen. Wir haben uns immer ernst genommen gefühlt.",
    author: "Eine Mutter aus Lübeck",
    context: "Sozialpädagogische Familienhilfe",
  },
  {
    quote: "Die Schulsozialarbeit ist für unsere Schüler:innen ein unverzichtbarer Anker im Alltag geworden.",
    author: "Schulleitung einer Partnerschule",
    context: "Schulsozialarbeit",
  },
  {
    quote: "Durch die Sprachmittlung konnte ich endlich verstehen, welche Rechte ich habe. Das hat alles verändert.",
    author: "Teilnehmer:in Sprachmittlung",
    context: "Sprach- und Kulturmittlung",
  },
];
