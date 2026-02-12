import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Sprungtuch e.V. Lübeck — Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise.",
  openGraph: {
    title: "Impressum | Sprungtuch e.V.",
    description:
      "Impressum von Sprungtuch e.V. Lübeck — Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Hinweise.",
  },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" variant="professional" />

      <Section>
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-warm max-w-none space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Sprungtuch e.V.
                <br />
                Wahmstraße 43-45
                <br />
                23552 Lübeck
              </p>
            </div>

            {/* Vertretung */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Vertreten durch
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Julius Schorpp (Geschäftsführung)
                <br />
                Karoline Stojan-Brauer (Geschäftsführung)
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">Kontakt</h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Telefon: 0451 7060434
                <br />
                E-Mail: info@sprungtuchev.de
              </p>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Registereintrag
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Eintragung im Vereinsregister.
                <br />
                Registergericht: Amtsgericht Lübeck
              </p>
            </div>

            {/* Verantwortlich nach § 18 MStV */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Julius Schorpp
                <br />
                Karoline Stojan-Brauer
                <br />
                Wahmstraße 43-45
                <br />
                23552 Lübeck
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Haftung für Inhalte
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">
                Haftung für Links
              </h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800">Urheberrecht</h2>
              <p className="mt-3 text-warm-700 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
