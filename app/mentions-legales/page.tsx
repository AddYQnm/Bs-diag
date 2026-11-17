import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Éditeur du site",
    content: (
      <>
        <p>
          Le site <strong>bs-diag.fr</strong> est édité par :
        </p>

        <div className="mt-5 space-y-1 text-black/70">
          <p className="font-medium text-[#191919]">BELAOUNI Gregory</p>
          <p>50 rue Ettore Bugatti</p>
          <p>76800 Saint-Étienne-du-Rouvray</p>
          <p>France</p>
        </div>

        <div className="mt-6 space-y-1">
          <p>
            <span className="text-black/40">RCS :</span>{" "}
            924 901 663
          </p>
          <p>
            <span className="text-black/40">Email :</span>{" "}
            <a
              href="mailto:bsdiag2023@gmail.com"
              className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
            >
              bsdiag2023@gmail.com
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    number: "02",
    title: "Responsable de publication",
    content: (
      <>
        <p>
          Le responsable de la publication du site est :
        </p>

        <p className="mt-5 font-medium text-[#191919]">
          BELAOUNI Gregory
        </p>

        <p className="mt-2">
          Contact :{" "}
          <a
            href="mailto:bsdiag2023@gmail.com"
            className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
          >
            bsdiag2023@gmail.com
          </a>
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Création du site",
    content: (
      <>
        <p>
          Le site internet a été réalisé par :
        </p>

        <p className="mt-5 font-medium text-[#191919]">
          Quenum Tiego
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Hébergement",
    content: (
      <>
        <p>
          Le site est hébergé par :
        </p>

        <div className="mt-5 space-y-1 text-black/70">
          <p className="font-medium text-[#191919]">
            OVH SAS
          </p>
          <p>2 rue Kellermann</p>
          <p>59100 Roubaix</p>
          <p>France</p>
        </div>

        <div className="mt-6 space-y-1">
          <p>
            <span className="text-black/40">
              RCS Lille Métropole :
            </span>{" "}
            424 761 419 00045
          </p>

          <p>
            <span className="text-black/40">Code APE :</span>{" "}
            2620Z
          </p>

          <p>
            <span className="text-black/40">TVA :</span>{" "}
            FR 22 424 761 419
          </p>
        </div>
      </>
    ),
  },
  {
    number: "05",
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L&apos;ensemble des éléments présents sur le site
          bs-diag.fr, notamment les textes, images, photographies,
          graphismes, logos, icônes et éléments techniques, est
          protégé par les dispositions applicables en matière de
          propriété intellectuelle.
        </p>

        <p className="mt-5">
          Sauf autorisation préalable et écrite de leur
          propriétaire, toute reproduction, représentation,
          adaptation, modification ou exploitation, totale ou
          partielle, de ces éléments est interdite.
        </p>

        <p className="mt-5">
          Toute utilisation non autorisée est susceptible de
          constituer une contrefaçon au sens des dispositions
          du Code de la propriété intellectuelle.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Responsabilité",
    content: (
      <>
        <p>
          BS Diag s&apos;efforce de maintenir sur le site des
          informations aussi précises et à jour que possible.
          Toutefois, les informations publiées sont susceptibles
          d&apos;évoluer et ne peuvent garantir l&apos;exhaustivité ou
          l&apos;absence d&apos;erreur.
        </p>

        <p className="mt-5">
          BS Diag ne saurait être tenu responsable des dommages
          directs ou indirects pouvant résulter de l&apos;utilisation
          du site ou des informations qui y sont publiées.
        </p>

        <p className="mt-5">
          Le site peut également contenir des liens vers des
          sites tiers. BS Diag ne contrôle pas le contenu de ces
          sites et ne peut être tenu responsable de leur contenu
          ou de leur fonctionnement.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Données personnelles",
    content: (
      <>
        <p>
          Certaines données personnelles peuvent être collectées
          lorsque vous utilisez les services proposés sur le site,
          notamment lorsque vous nous contactez ou demandez un
          rendez-vous.
        </p>

        <p className="mt-5">
          Les modalités de collecte, d&apos;utilisation, de conservation
          et d&apos;exercice de vos droits sont détaillées dans notre
          <Link
            href="/confidentialite"
            className="ml-1 underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Cookies",
    content: (
      <>
        <p>
          Le site peut être amené à utiliser des cookies ou
          technologies similaires nécessaires à son bon
          fonctionnement ou permettant d&apos;améliorer l&apos;expérience
          utilisateur.
        </p>

        <p className="mt-5">
          Lorsque cela est nécessaire, votre consentement sera
          recueilli conformément à la réglementation applicable.
        </p>

        <p className="mt-5">
          Vous pouvez également gérer les paramètres relatifs
          aux cookies depuis votre navigateur.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Disponibilité du site",
    content: (
      <>
        <p>
          Le site est normalement accessible 24 heures sur 24
          et 7 jours sur 7, sous réserve des opérations de
          maintenance, des mises à jour, des interruptions
          techniques ou des cas de force majeure.
        </p>

        <p className="mt-5">
          BS Diag ne peut garantir une disponibilité permanente
          du site et se réserve la possibilité d&apos;en interrompre
          temporairement l&apos;accès lorsque cela est nécessaire.
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
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
                  Informations légales
                </span>
              </div>

              <h1 className="mt-7 max-w-[900px] text-[52px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[68px] lg:text-[92px]">
                Mentions
                <br />
                <span className="text-black/30">
                  légales.
                </span>
              </h1>
            </div>

            <p className="max-w-[390px] text-[12px] leading-6 text-black/45 lg:justify-self-end">
              Retrouvez ici les informations relatives à
              l&apos;éditeur, à l&apos;hébergement et aux conditions
              d&apos;utilisation du site BS Diag.
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
                  Besoin d&apos;informations
                  <br />
                  complémentaires ?
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