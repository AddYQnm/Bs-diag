import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Les données personnelles collectées sur le site
          bs-diag.fr sont traitées par :
        </p>

        <div className="mt-5 space-y-1 text-black/70">
          <p className="font-medium text-[#191919]">
            BELAOUNI Gregory
          </p>
          <p>50 rue Ettore Bugatti</p>
          <p>76800 Saint-Étienne-du-Rouvray</p>
          <p>France</p>
        </div>

        <p className="mt-5">
          Pour toute question concernant le traitement de vos
          données personnelles :
        </p>

        <a
          href="mailto:bsdiag2023@gmail.com"
          className="mt-2 inline-block underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
        >
          bsdiag2023@gmail.com
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "Données collectées",
    content: (
      <>
        <p>
          Selon votre utilisation du site, différentes catégories
          de données peuvent être collectées.
        </p>

        <ul className="mt-5 space-y-3">
          <li>
            <span className="font-medium text-[#191919]">
              Formulaire de contact :
            </span>{" "}
            nom, adresse e-mail, numéro de téléphone, nature du
            projet et contenu du message.
          </li>

          <li>
            <span className="font-medium text-[#191919]">
              Demande de devis :
            </span>{" "}
            informations nécessaires à l&apos;étude de votre demande
            et à la préparation d&apos;une proposition adaptée.
          </li>

          <li>
            <span className="font-medium text-[#191919]">
              Prise de rendez-vous :
            </span>{" "}
            informations nécessaires à l&apos;organisation et à la
            confirmation du rendez-vous.
          </li>

          <li>
            <span className="font-medium text-[#191919]">
              Navigation :
            </span>{" "}
            certaines données techniques peuvent être
            automatiquement recueillies par le site ou ses
            services techniques.
          </li>
        </ul>

        <p className="mt-5">
          Seules les informations nécessaires à la finalité
          concernée doivent être communiquées.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Finalités du traitement",
    content: (
      <>
        <p>
          Les données personnelles sont susceptibles d&apos;être
          utilisées afin de :
        </p>

        <ul className="mt-5 space-y-3">
          <li>
            répondre à vos demandes de contact ;
          </li>
          <li>
            traiter vos demandes de devis ;
          </li>
          <li>
            organiser et gérer vos rendez-vous ;
          </li>
          <li>
            assurer le suivi de votre demande ;
          </li>
          <li>
            échanger avec vous dans le cadre de la prestation
            demandée ;
          </li>
          <li>
            assurer le fonctionnement et la sécurité du site.
          </li>
        </ul>

        <p className="mt-5">
          Les données ne sont pas utilisées à des fins
          incompatibles avec les finalités pour lesquelles elles
          ont été collectées.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Base légale",
    content: (
      <>
        <p>
          Selon la nature du traitement, vos données peuvent être
          traitées sur la base de votre consentement, de
          l&apos;exécution de mesures précontractuelles ou
          contractuelles, ou de l&apos;intérêt légitime du responsable
          du traitement.
        </p>

        <p className="mt-5">
          Lorsque votre consentement est requis, celui-ci peut
          être retiré à tout moment pour les traitements concernés.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Durée de conservation",
    content: (
      <>
        <p>
          Les données personnelles sont conservées pendant une
          durée proportionnée à la finalité pour laquelle elles
          sont traitées et conformément aux obligations légales
          applicables.
        </p>

        <p className="mt-5">
          Les données relatives à une demande de contact ou de
          devis peuvent notamment être conservées pendant le
          temps nécessaire à son traitement et au suivi de la
          relation avec le demandeur.
        </p>

        <p className="mt-5">
          Lorsque des obligations légales ou comptables imposent
          une durée de conservation particulière, les données
          concernées sont conservées pendant la durée applicable.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Destinataires des données",
    content: (
      <>
        <p>
          Les données sont destinées aux personnes habilitées à
          traiter votre demande au sein de BS Diag.
        </p>

        <p className="mt-5">
          Certains prestataires techniques peuvent également
          intervenir pour assurer le fonctionnement du site ou
          des services associés, notamment pour l&apos;hébergement,
          la messagerie, les formulaires ou la prise de
          rendez-vous.
        </p>

        <p className="mt-5">
          Ces prestataires n&apos;accèdent aux données que dans la
          mesure nécessaire à la fourniture de leurs services.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Prise de rendez-vous",
    content: (
      <>
        <p>
          Le site peut proposer un service de prise de
          rendez-vous en ligne permettant de sélectionner
          directement un créneau disponible.
        </p>

        <p className="mt-5">
          Lorsque vous utilisez ce service, certaines
          informations nécessaires à la réservation peuvent être
          transmises au prestataire technique utilisé pour gérer
          les rendez-vous.
        </p>

        <p className="mt-5">
          Les informations effectivement collectées et les
          conditions applicables dépendent du service de
          réservation utilisé et de sa configuration.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Vos droits",
    content: (
      <>
        <p>
          Conformément à la réglementation applicable en matière
          de protection des données personnelles, vous disposez
          notamment, selon les conditions prévues par la
          réglementation, des droits suivants :
        </p>

        <ul className="mt-5 space-y-3">
          <li>
            droit d&apos;accès à vos données ;
          </li>
          <li>
            droit de rectification des données inexactes ;
          </li>
          <li>
            droit à l&apos;effacement dans les conditions prévues par
            la réglementation ;
          </li>
          <li>
            droit à la limitation du traitement ;
          </li>
          <li>
            droit d&apos;opposition à certains traitements ;
          </li>
          <li>
            droit à la portabilité de certaines données ;
          </li>
          <li>
            droit de retirer votre consentement lorsque le
            traitement repose sur celui-ci.
          </li>
        </ul>

        <p className="mt-5">
          Pour exercer vos droits, vous pouvez nous contacter à
          l&apos;adresse suivante :
        </p>

        <a
          href="mailto:bsdiag2023@gmail.com"
          className="mt-2 inline-block underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
        >
          bsdiag2023@gmail.com
        </a>
      </>
    ),
  },
  {
    number: "09",
    title: "Réclamation",
    content: (
      <>
        <p>
          Si vous estimez, après nous avoir contactés, que vos
          droits relatifs à vos données personnelles ne sont pas
          respectés, vous pouvez effectuer une réclamation auprès
          de l&apos;autorité de contrôle compétente.
        </p>

        <p className="mt-5">
          En France, cette autorité est la Commission nationale
          de l&apos;informatique et des libertés (CNIL).
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Cookies",
    content: (
      <>
        <p>
          Le site peut utiliser des cookies ou technologies
          similaires nécessaires à son fonctionnement ou destinés
          à améliorer l&apos;expérience utilisateur.
        </p>

        <p className="mt-5">
          Lorsque le dépôt ou la lecture de cookies nécessite
          votre consentement, celui-ci est recueilli avant leur
          utilisation conformément à la réglementation applicable.
        </p>

        <p className="mt-5">
          Vous pouvez également configurer votre navigateur afin
          de limiter ou refuser certains cookies.
        </p>
      </>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <main className="bg-[#f7f7f4] text-[#191919]">

      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#61766a]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Protection des données
                </span>
              </div>

              <h1 className="mt-7 max-w-[950px] text-[52px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[68px] lg:text-[92px]">
                Politique de
                <br />
                <span className="text-black/30">
                  confidentialité.
                </span>
              </h1>
            </div>

            <p className="max-w-[390px] text-[12px] leading-6 text-black/45 lg:justify-self-end">
              Cette page présente la manière dont BS Diag
              collecte, utilise et protège les données personnelles
              transmises lors de l&apos;utilisation du site.
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
        <div className="mx-auto max-w-[1440px]">

          <div className="border-t border-black/10">
            {sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-8 border-b border-black/10 py-10 sm:py-12 lg:grid-cols-[180px_280px_1fr] lg:gap-12 lg:py-14"
              >

                {/* NUMBER */}
                <div>
                  <span className="text-[10px] font-medium tracking-[0.12em] text-[#61766a]">
                    {section.number}
                  </span>
                </div>

                {/* TITLE */}
                <div>
                  <h2 className="text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#191919] sm:text-[28px]">
                    {section.title}
                  </h2>
                </div>

                {/* CONTENT */}
                <div className="max-w-[680px] text-[12px] leading-6 text-black/55 sm:text-[13px]">
                  {section.content}
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1440px]">

          <div className="rounded-[24px] bg-[#dce4dd] px-7 py-10 sm:px-10 sm:py-12 lg:px-12">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#61766a]">
                  Une question ?
                </p>

                <h2 className="mt-4 max-w-[650px] text-[30px] font-semibold leading-none tracking-[-0.045em] text-[#1d2922] sm:text-[38px]">
                  Une question sur
                  <br />
                  vos données ?
                </h2>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#191919] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#61766a]"
              >
                Nous contacter

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}