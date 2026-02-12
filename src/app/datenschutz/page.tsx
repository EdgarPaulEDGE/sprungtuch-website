import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Sprungtuch e.V. Lübeck. Informationen zum Schutz Ihrer personenbezogenen Daten.",
  openGraph: {
    title: "Datenschutz | Sprungtuch e.V.",
    description:
      "Datenschutzerklärung von Sprungtuch e.V. Lübeck. Informationen zum Schutz Ihrer personenbezogenen Daten.",
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero title="Datenschutz" variant="professional" />

      <Section>
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-warm max-w-none space-y-8">
            {/* Verantwortliche Stelle */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800 dark:text-warm-200">
                1. Verantwortliche Stelle
              </h2>
              <p className="mt-3 text-warm-700 dark:text-warm-300 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Sprungtuch e.V.
                <br />
                Wahmstraße 43-45
                <br />
                23552 Lübeck
                <br />
                Telefon: 0451 7060434
                <br />
                E-Mail: info@sprungtuchev.de
              </p>
            </div>

            {/* Allgemeine Hinweise */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800 dark:text-warm-200">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Datenschutz
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung. Die Nutzung unserer Website ist in
                der Regel ohne Angabe personenbezogener Daten möglich.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist im Abschnitt 1 genannt. Verantwortliche Stelle ist
                die natürliche oder juristische Person, die allein oder gemeinsam
                mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der
                bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Zuständige Aufsichtsbehörde ist das Unabhängige Landeszentrum
                für Datenschutz Schleswig-Holstein (ULD).
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Recht auf Auskunft, Berichtigung, Sperrung und Löschung
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
                auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten können
                Sie sich jederzeit unter der im Impressum angegebenen Adresse an
                uns wenden.
              </p>
            </div>

            {/* Datenerfassung auf dieser Website */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800 dark:text-warm-200">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Cookies
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Unsere Internetseiten verwenden teilweise sogenannte Cookies.
                Cookies richten auf Ihrem Rechner keinen Schaden an und
                enthalten keine Viren. Cookies dienen dazu, unser Angebot
                nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                und die Ihr Browser speichert. Die von uns verwendeten Cookies
                sind sogenannte Session-Cookies. Sie werden nach Ende Ihres
                Besuchs automatisch gelöscht. Sie können Ihren Browser so
                einstellen, dass Sie über das Setzen von Cookies informiert
                werden und Cookies nur im Einzelfall erlauben.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Server-Log-Dateien
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch an uns übermittelt. Dies sind: Browsertyp und
                Browserversion, verwendetes Betriebssystem, Referrer URL,
                Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
                und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
                Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="mt-4 text-lg font-semibold text-warm-800 dark:text-warm-200">
                Kontaktformular
              </h3>
              <p className="mt-2 text-warm-700 dark:text-warm-300 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter. Die Verarbeitung der in das Kontaktformular eingegebenen
                Daten erfolgt somit ausschließlich auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </div>

            {/* SSL/TLS-Verschlüsselung */}
            <div>
              <h2 className="text-2xl font-bold text-warm-800 dark:text-warm-200">
                4. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mt-3 text-warm-700 dark:text-warm-300 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und
                an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
                TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
                uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
