export interface Partner {
  name: string;
  url?: string;
  logo?: string; // path to logo image, placeholder for now
}

// Foerderer und Partner
export const partners: Partner[] = [
  {
    name: "Der Paritätische",
    url: "https://www.paritaet-sh.de",
  },
  {
    name: "Hansestadt Lübeck",
    url: "https://www.luebeck.de",
  },
  {
    name: "Possehl-Stiftung",
    url: "https://www.possehl-stiftung.de",
  },
  {
    name: "Demokratie leben!",
    url: "https://www.demokratie-leben.de",
  },
  {
    name: "Leibniz Gymnasium Bad Schwartau",
    url: "https://www.leibniz-bad-schwartau.de",
  },
  {
    name: "Gewerbeschule Nahrung und Gastronomie Lübeck",
    url: "https://www.gng-luebeck.de",
  },
  {
    name: "Hanse-Schule für Wirtschaft und Verwaltung",
    url: "https://www.hanse-schule.de",
  },
];

// Netzwerke und Mitgliedschaften
export const networks: Partner[] = [
  {
    name: "AWO Schleswig-Holstein",
    url: "https://www.awo-sh.de",
  },
  {
    name: "Kinderschutz-Zentrum Lübeck",
    url: "https://www.kinderschutz-zentrum-luebeck.de",
  },
  {
    name: "Flüchtlingsforum Lübeck",
    url: "https://www.fluechtlingsforum-luebeck.de",
  },
  {
    name: "Runder Tisch gegen häusliche Gewalt",
  },
  {
    name: "Netzwerk Frühe Hilfen Lübeck",
  },
  {
    name: "LAG Soziale Brennpunkte",
    url: "https://www.lag-sh.de",
  },
];
