
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TriangleAlert,
  FileText,
  Zap,
  Flame,
  ClipboardCheck,
} from "lucide-react";

const diagnostics = [
  {
    title: "Amiante",
    subtitle: "Repérage avant travaux",
    icon: ShieldCheck,
  },
  {
    title: "Plomb",
    subtitle: "Revêtements anciens",
    icon: TriangleAlert,
  },
  {
    title: "DPE",
    subtitle: "Performance énergétique",
    icon: FileText,
  },
  {
    title: "Électricité",
    subtitle: "Installation",
    icon: Zap,
  },
  {
    title: "Gaz",
    subtitle: "Installation",
    icon: Flame,
  },
  {
    title: "Autres",
    subtitle: "Selon votre projet",
    icon: ClipboardCheck,
  },
];

export function TravauxDiagnostics() {
  return (
    <section
      id="diagnostics-travaux"
      className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#b58a55]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Travaux & rénovation
              </span>
            </div>

            <h2 className="mt-4 max-w-[440px] text-[32px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#202020] sm:text-[38px] lg:text-[42px]">
              Quels diagnostics
              <br />
              avant travaux ?
            </h2>

            <p className="mt-5 max-w-[400px] text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6">
              Les diagnostics à prévoir dépendent notamment de l&apos;âge du
              bâtiment, de la nature des travaux et des matériaux concernés.
            </p>

            <Link
              href="/diagnostics"
              className="group mt-6 inline-flex items-center gap-2 border-b border-[#b58a55]/50 pb-1 text-[11px] font-medium text-[#202020] transition-colors hover:border-[#202020]"
            >
              Voir tous les diagnostics

              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#e9e1d5] bg-[#f8f4ee] sm:grid-cols-3">
            {diagnostics.map((diagnostic, index) => {
              const Icon = diagnostic.icon;

              return (
                <Link
                  key={diagnostic.title}
                  href="/diagnostics"
                  className={`group flex min-h-[145px] flex-col items-center justify-center px-4 py-6 text-center transition-colors duration-300 hover:bg-[#eee6da] sm:min-h-[160px] ${
                    index < 3 ? "border-b border-[#e9e1d5]" : ""
                  } ${
                    index % 2 === 0
                      ? "border-r border-[#e9e1d5] sm:border-r-0"
                      : ""
                  } ${
                    index % 3 !== 2
                      ? "sm:border-r sm:border-[#e9e1d5]"
                      : ""
                  }`}
                >
                  <div className="flex h-8 w-8 items-center justify-center text-[#9d7748]">
                    <Icon
                      size={19}
                      strokeWidth={1.35}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <p className="mt-2 text-[11px] font-semibold text-[#202020]">
                    {diagnostic.title}
                  </p>

                  <p className="mt-1 max-w-[110px] text-[8px] leading-3.5 text-neutral-500">
                    {diagnostic.subtitle}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
