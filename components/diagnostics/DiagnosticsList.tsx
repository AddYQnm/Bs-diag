
"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { DiagnosticModal } from "./DiagnosticModal";

const diagnostics = [
  {
    number: "01",
    title: "DPE",
    subtitle: "Diagnostic de performance énergétique",
    description:
      "Évaluez la performance énergétique et l'impact environnemental de votre logement.",
    image: "/diagnostics/dpe.png",
    purpose:
      "Le DPE permet d'évaluer la consommation d'énergie d'un logement ainsi que ses émissions de gaz à effet de serre.",
    mandatory:
      "Il est notamment requis dans le cadre de la vente ou de la location d'un logement, selon les conditions prévues par la réglementation.",
    concerned:
      "La plupart des logements et bâtiments à usage d'habitation sont concernés.",
  },
  {
    number: "02",
    title: "Amiante",
    subtitle: "Repérage amiante",
    description:
      "Identifiez la présence éventuelle d'amiante dans les bâtiments concernés.",
    image: "/diagnostics/amiante.png",
    purpose:
      "Le diagnostic permet de repérer les matériaux et produits susceptibles de contenir de l'amiante.",
    mandatory:
      "Les obligations dépendent notamment de la date de construction du bâtiment et de la nature du projet.",
    concerned:
      "Principalement les bâtiments dont le permis de construire a été délivré avant juillet 1997.",
  },
  {
    number: "03",
    title: "Plomb",
    subtitle: "Constat de risque d'exposition au plomb",
    description:
      "Vérifiez la présence de plomb dans les logements concernés par la réglementation.",
    image: "/diagnostics/plomb.png",
    purpose:
      "Le constat permet de rechercher la présence de plomb notamment dans certains revêtements anciens.",
    mandatory:
      "Il concerne notamment les logements construits avant le 1er janvier 1949 dans le cadre d'une vente ou d'une location.",
    concerned:
      "Les logements anciens concernés par la réglementation relative au risque d'exposition au plomb.",
  },
  {
    number: "04",
    title: "Électricité",
    subtitle: "État de l'installation électrique",
    description:
      "Contrôlez la sécurité de l'installation électrique de votre logement.",
    image: "/diagnostics/electricite.png",
    purpose:
      "L'état de l'installation permet d'identifier certains défauts susceptibles d'affecter la sécurité des occupants.",
    mandatory:
      "Il est notamment demandé lorsque l'installation électrique a plus de 15 ans, dans les situations prévues par la réglementation.",
    concerned:
      "Les logements dont l'installation électrique présente une ancienneté supérieure au seuil réglementaire.",
  },
  {
    number: "05",
    title: "Gaz",
    subtitle: "État de l'installation gaz",
    description:
      "Évaluez l'état et la sécurité de l'installation intérieure de gaz.",
    image: "/diagnostics/gaz.png",
    purpose:
      "Le diagnostic vise à identifier certains défauts susceptibles de présenter un risque pour les occupants.",
    mandatory:
      "Il concerne notamment les installations de gaz de plus de 15 ans dans le cadre des ventes et locations concernées.",
    concerned:
      "Les logements équipés d'une installation intérieure de gaz répondant aux critères réglementaires.",
  },
  {
    number: "06",
    title: "Termites",
    subtitle: "État relatif à la présence de termites",
    description:
      "Vérifiez la présence éventuelle de termites dans les zones concernées.",
    image: "/diagnostics/termites.png",
    purpose:
      "Le diagnostic recherche les indices révélant la présence éventuelle de termites dans le bâtiment.",
    mandatory:
      "L'obligation dépend notamment de la localisation du bien et de la réglementation applicable dans la zone concernée.",
    concerned:
      "Les biens situés dans les secteurs faisant l'objet d'un arrêté préfectoral relatif aux termites.",
  },
  {
    number: "07",
    title: "ERP",
    subtitle: "État des risques",
    description:
      "Informez les futurs occupants sur les risques auxquels le bien est exposé.",
    image: "/diagnostics/erp.png",
    purpose:
      "L'état des risques informe l'acquéreur ou le locataire sur les risques naturels, miniers, technologiques et autres informations réglementaires.",
    mandatory:
      "Il est requis dans les situations prévues par la réglementation, notamment lors d'une vente ou d'une location.",
    concerned:
      "Les biens immobiliers situés dans les secteurs concernés par les informations réglementaires relatives aux risques.",
  },
  {
    number: "08",
    title: "Loi Carrez",
    subtitle: "Mesurage de la superficie privative",
    description:
      "Déterminez précisément la superficie privative d'un lot de copropriété.",
    image: "/diagnostics/carrez.png",
    purpose:
      "Le mesurage permet de déterminer la superficie privative du lot de copropriété selon les règles de la loi Carrez.",
    mandatory:
      "Il est notamment nécessaire lors de la vente de certains lots de copropriété.",
    concerned:
      "Les lots de copropriété concernés par l'obligation de mentionner la superficie privative.",
  },
];

export function DiagnosticsList() {
  const [selectedDiagnostic, setSelectedDiagnostic] =
    useState<(typeof diagnostics)[number] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedDiagnostic ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDiagnostic]);

  return (
    <>
      <section
  id="diagnostics"
  className="bg-[#b5c4b7] px-6 py-20 sm:py-24 lg:px-8 lg:py-32"
>
  <div className="mx-auto max-w-[1440px]">
    <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      
      <div>
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-4 bg-[#61766a]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#61766a]">
            Nos prestations
          </span>
        </div>

        <h2 className="mt-5 max-w-[720px] text-[40px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1d2922] sm:text-[50px] lg:text-[58px]">
          Les diagnostics dont
          <br />
          <span className="text-[#617066]">
            votre bien peut avoir besoin.
          </span>
        </h2>
      </div>

      <div className="flex items-end justify-between gap-6 lg:pb-1">
        <p className="max-w-[350px] text-[13px] leading-6 text-[#536158]">
          Chaque bien et chaque projet répondent à des obligations
          différentes. Découvrez les principaux diagnostics réalisés
          par BS Diag.
        </p>

        <span className="hidden shrink-0 text-[11px] font-medium text-[#718076] sm:block">
          08 diagnostics
        </span>
      </div>
    </div>

    <div className="grid gap-px overflow-hidden rounded-[24px] border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2">
      {diagnostics.map((diagnostic) => (
        <button
          key={diagnostic.number}
          type="button"
          onClick={() => setSelectedDiagnostic(diagnostic)}
          className="group relative flex min-h-[280px] flex-col justify-between bg-white p-7 text-left transition-colors duration-300 hover:bg-[#202020] sm:p-8 lg:min-h-[310px] lg:p-10"
        >
          <div className="flex items-start justify-between">
            <span className="text-[10px] font-medium tracking-[0.12em] text-[#8a958e] transition-colors duration-300 group-hover:text-white/40">
              {diagnostic.number}
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>

          <div>
            <h3 className="text-[30px] font-semibold tracking-[-0.04em] text-[#202020] transition-colors duration-300 group-hover:text-white lg:text-[36px]">
              {diagnostic.title}
            </h3>

            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#617066] transition-colors duration-300 group-hover:text-white/40">
              {diagnostic.subtitle}
            </p>

            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-[#59655d] transition-colors duration-300 group-hover:text-white/60">
              {diagnostic.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>

      <DiagnosticModal
        diagnostic={selectedDiagnostic}
        onClose={() => setSelectedDiagnostic(null)}
      />
    </>
  );
}
