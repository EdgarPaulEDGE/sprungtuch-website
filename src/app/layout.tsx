import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sprungtuch e.V. | Vielfalt in Bewegung",
    template: "%s | Sprungtuch e.V.",
  },
  description:
    "Sprungtuch e.V. Lübeck: Sozialpädagogische Projekte für Familien, Kinder und ein respektvolles Miteinander. Seit 1989.",
  keywords: [
    "Sprungtuch",
    "Lübeck",
    "Sozialpädagogik",
    "Familienhilfe",
    "Jugendhilfe",
    "Inklusion",
    "Vielfalt",
  ],
  metadataBase: new URL("https://www.sprungtuchev.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sprungtuch e.V.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: Dark Mode Klasse sofort setzen, bevor CSS geladen wird */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme:dark)").matches;if(s==="dark"||(!s&&d)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              name: "Sprungtuch e.V.",
              url: "https://www.sprungtuchev.de",
              logo: "https://www.sprungtuchev.de/images/sprungtuch-logo.png",
              description:
                "Sozialpädagogische Projekte für Familien, Kinder und ein respektvolles Miteinander in Lübeck. Seit 1989.",
              foundingDate: "1989",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Wahmstraße 43-45",
                addressLocality: "Lübeck",
                postalCode: "23552",
                addressCountry: "DE",
              },
              telephone: "+494512902960",
              email: "info@sprungtuchev.de",
            }),
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <ThemeProvider>
          {/* Skip Navigation Link — sichtbar nur bei Fokus */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white dark:focus:bg-warm-800 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-brand-red focus:font-semibold"
          >
            Zum Hauptinhalt springen
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
