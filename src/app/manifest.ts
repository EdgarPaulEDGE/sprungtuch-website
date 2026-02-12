import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sprungtuch e.V. — Vielfalt in Bewegung",
    short_name: "Sprungtuch",
    description:
      "Sozialpädagogische Projekte für Familien, Kinder und ein respektvolles Miteinander.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFCFA",
    theme_color: "#0273B5",
    icons: [
      {
        src: "/images/sprungtuch-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
