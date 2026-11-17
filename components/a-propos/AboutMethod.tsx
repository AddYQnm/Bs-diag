const steps = [
  {
    number: "01",
    title: "Écouter",
    text: "Comprendre votre situation, votre bien et votre projet avant toute intervention.",
  },
  {
    number: "02",
    title: "Analyser",
    text: "Identifier les diagnostics nécessaires en fonction des caractéristiques du bien.",
  },
  {
    number: "03",
    title: "Intervenir",
    text: "Réaliser les contrôles avec méthode et attention sur l'ensemble des éléments concernés.",
  },
  {
    number: "04",
    title: "Restituer",
    text: "Vous transmettre des rapports clairs et exploitables pour la suite de votre projet.",
  },
];

export function AboutMethod() {
  return (
    <section className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 max-w-[620px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-[#61766a]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
              Notre méthode
            </span>
          </div>

          <h2 className="mt-6 text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#191919] sm:text-[54px]">
            Simple pour vous.
            <br />
            Rigoureux pour nous.
          </h2>
        </div>

        <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-black/10 py-8 sm:px-6 sm:py-10 lg:border-r lg:px-8 lg:py-12 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="text-[10px] font-medium tracking-[0.15em] text-black/30">
                {step.number}
              </span>

              <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.03em] text-[#191919]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[240px] text-[12px] leading-6 text-black/45">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}