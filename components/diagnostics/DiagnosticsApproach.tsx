const values = [
  {
    number: "01",
    title: "Expertise",
    text: "Des diagnostics réalisés avec rigueur et attention, dans le respect des exigences réglementaires.",
  },
  {
    number: "02",
    title: "Réactivité",
    text: "Des échanges simples et des rendez-vous adaptés à votre projet et à vos contraintes.",
  },
  {
    number: "03",
    title: "Proximité",
    text: "Une présence locale à Rouen et dans les départements de Seine-Maritime et de l'Eure.",
  },
];

export function DiagnosticsApproach() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#61766a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Notre approche
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[43px] font-semibold leading-[0.94] tracking-[-0.05em] text-[#202020] sm:text-[55px] lg:text-[68px]">
              Un diagnostic,
              <br />
              ce n&apos;est pas seulement
              <br />
              <span className="text-neutral-400">
                un document.
              </span>
            </h2>
          </div>

          <p className="max-w-[380px] text-[14px] leading-7 text-neutral-500 lg:pb-2">
            Notre rôle ne s&apos;arrête pas à la réalisation du diagnostic.
            Nous vous accompagnons pour que chaque étape de votre projet
            immobilier soit plus simple à comprendre.
          </p>
        </div>

        {/* VALUES */}
        <div className="mt-20 border-t border-black/[0.08]">
          <div className="grid lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`py-8 lg:px-8 lg:py-10 ${
                  index !== 0
                    ? "border-t border-black/[0.08] lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-medium tracking-[0.12em] text-neutral-400">
                    {value.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#61766a]" />
                </div>

                <h3 className="mt-12 text-[28px] font-semibold tracking-[-0.04em] text-[#202020]">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-neutral-500">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
