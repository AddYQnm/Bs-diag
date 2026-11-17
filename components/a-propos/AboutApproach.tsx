// components/a-propos/AboutApproach.tsx

import { ArrowUpRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Expertise",
    text: "Des diagnostics réalisés avec rigueur et une attention particulière portée à chaque bien.",
  },
  {
    number: "02",
    title: "Clarté",
    text: "Des explications simples pour vous permettre de comprendre réellement vos diagnostics.",
  },
  {
    number: "03",
    title: "Réactivité",
    text: "Une organisation pensée pour vous accompagner efficacement, sans complexifier votre projet.",
  },
];

export function AboutApproach() {
  return (
    <section
      id="notre-approche"
      className="px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#61766a]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Notre approche
              </span>
            </div>

            <h2 className="mt-6 max-w-[500px] text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#191919] sm:text-[52px]">
              Le sérieux,
              <br />
              sans la
              <br />
              complexité.
            </h2>

            <p className="mt-7 max-w-[420px] text-[13px] leading-6 text-black/50">
              Un projet immobilier implique déjà suffisamment de démarches.
              Notre rôle est de rendre la partie diagnostic aussi simple et
              fluide que possible.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {values.map((value) => (
              <div
                key={value.number}
                className="group grid gap-5 py-8 sm:grid-cols-[70px_180px_1fr] sm:items-start sm:py-10"
              >
                <span className="text-[10px] font-medium tracking-[0.15em] text-black/30">
                  {value.number}
                </span>

                <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#191919]">
                  {value.title}
                </h3>

                <div className="flex items-start justify-between gap-8">
                  <p className="max-w-[390px] text-[12px] leading-6 text-black/45">
                    {value.text}
                  </p>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 text-black/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}