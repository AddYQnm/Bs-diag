import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Une intervention rapide et professionnelle. Les explications étaient très claires et le diagnostic nous a été remis dans les délais.",
    name: "Client particulier",
    location: "Rouen",
  },
  {
    quote:
      "Très bon accompagnement du début à la fin. Une équipe sérieuse, ponctuelle et disponible.",
    name: "Client particulier",
    location: "Bois-Guillaume",
  },
  {
    quote:
      "Professionnel et réactif. Nous avons apprécié la simplicité des échanges et la qualité du travail réalisé.",
    name: "Client particulier",
    location: "Seine-Maritime",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-6">
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-[620px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#61766a]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Ils nous font confiance
              </span>
            </div>

            <h2 className="mt-5 text-[42px] font-semibold leading-[0.96] tracking-[-0.045em] text-[#202020] sm:text-[48px] lg:text-[56px]">
              Une relation de confiance,
              <br />
              avant tout.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-black/10 px-5 py-3 text-[12px] font-medium text-neutral-800 transition hover:bg-black hover:text-white"
          >
            Parlons de votre projet

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/5 transition-all group-hover:bg-white/10">
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>

        {/* REVIEWS */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">

          {/* AVIS PRINCIPAL */}
          <article className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#181818] p-8 text-white sm:p-10 lg:p-12">

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <div className="mt-12 max-w-[720px]">
              <span className="text-[54px] font-serif leading-none text-white/20">
                “
              </span>

              <blockquote className="-mt-2 text-[25px] font-medium leading-[1.25] tracking-[-0.025em] sm:text-[30px] lg:text-[34px]">
                {testimonials[0].quote}
              </blockquote>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-12 lg:left-12 lg:right-12">
              <div>
                <p className="text-sm font-semibold">
                  {testimonials[0].name}
                </p>

                <p className="mt-1 text-xs text-white/45">
                  {testimonials[0].location}
                </p>
              </div>

              <div className="hidden text-right sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Avis client
                </p>

                <p className="mt-1 text-xs text-white/60">
                  5.0 / 5
                </p>
              </div>
            </div>

          </article>

          {/* AVIS SECONDAIRES */}
          <div className="grid gap-4">

            {testimonials.slice(1).map((testimonial) => (
              <article
                key={testimonial.quote}
                className="group flex min-h-[172px] flex-col justify-between rounded-[28px] border border-black/8 bg-[#f5f5f3] p-7 transition-colors duration-300 hover:bg-[#eeeeeb]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={12}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="mt-8">
                  <p className="max-w-[420px] text-[15px] leading-6 text-neutral-700">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-xs font-semibold">
                      {testimonial.name}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-neutral-300" />

                    <span className="text-xs text-neutral-400">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* NOTE GOOGLE */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-black/8 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-400">
            Les avis présentés sur cette page proviennent de nos clients.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 transition hover:text-black"
          >
            Découvrir BS Diag
            <ArrowUpRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}