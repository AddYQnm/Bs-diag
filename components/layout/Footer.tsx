import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const CURRENT_YEAR = 2026;

const navigation = [
  ["Accueil", "/"],
  ["Diagnostics", "/diagnostics"],
  ["Vendre", "/vendre"],
  ["Louer", "/louer"],
  ["Travaux", "/travaux"],
  ["À propos", "/a-propos"],
  ["Contact", "/contact"],
];

const diagnostics = [
  ["DPE", "/diagnostics"],
  ["Amiante", "/diagnostics"],
  ["Plomb", "/diagnostics"],
  ["Électricité", "/diagnostics"],
  ["Gaz", "/diagnostics"],
  ["Termites", "/diagnostics"],
  ["ERP", "/diagnostics"],
  ["Loi Carrez", "/diagnostics"],
];

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">

        {/* =====================================================
            MAIN
        ====================================================== */}

        <div className="py-14 sm:py-16 lg:py-20">

          {/* BRAND */}
          <div className="max-w-[400px]">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15">
                <span className="text-[11px] font-semibold">
                  BS
                </span>
              </div>

              <div>
                <p className="text-[16px] font-semibold tracking-[-0.03em]">
                  BS Diag
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/35">
                  Diagnostics immobiliers
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[340px] text-[13px] leading-6 text-white/45">
              Votre partenaire en diagnostic immobilier à Rouen,
              en Seine-Maritime et dans l&apos;Eure.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-[11px] font-medium text-black transition hover:bg-neutral-200"
            >
              Demander un devis

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={11} />
              </span>
            </Link>
          </div>

          {/* =====================================================
              NAVIGATION + DIAGNOSTICS
          ====================================================== */}

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:mt-20 lg:grid-cols-[0.8fr_1fr_1.2fr]">

            {/* NAVIGATION */}
            <div>
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Navigation
              </p>

              <ul className="space-y-3">
                {navigation.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-[12px] text-white/60 transition hover:text-white"
                    >
                      {label}

                      <ArrowUpRight
                        size={10}
                        className="hidden opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70 sm:block"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* DIAGNOSTICS */}
            <div>
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Diagnostics
              </p>

              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-1">
                {diagnostics.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-[12px] text-white/60 transition hover:text-white"
                    >
                      {label}

                      <ArrowUpRight
                        size={10}
                        className="hidden opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70 sm:block"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Contact
              </p>

              <div className="space-y-5">

                {/* EMAIL */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-[12px] text-white/60 transition hover:text-white"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <span className="break-all">
                    {siteConfig.email}
                  </span>
                </a>

                {/* PHONE */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-[12px] text-white/60 transition hover:text-white"
                >
                  <Phone
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <span>
                    {siteConfig.phone}
                  </span>
                </a>

                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <p className="text-[12px] leading-5 text-white/60">
                    50 rue Ettore Bugatti
                    <br />
                    76800 Saint-Étienne-du-Rouvray
                  </p>
                </div>

                {/* HORAIRES */}
                <div className="flex items-start gap-3">
                  <Clock
                    size={14}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <div className="text-[11px] leading-5 text-white/45">
                    <p className="text-white/60">
                      Lundi — Vendredi
                    </p>

                    <p>
                      08:00 — 18:00
                    </p>

                    <p className="mt-2 text-white/60">
                      Samedi
                    </p>

                    <p>
                      08:00 — 12:00
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            ZONE D'INTERVENTION
        ====================================================== */}

        <div className="border-t border-white/10">
          <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Zone d&apos;intervention
              </p>

              <p className="mt-2 text-[12px] text-white/45">
                Rouen · Seine-Maritime · Eure
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[11px] font-medium text-white/60 transition hover:text-white"
            >
              Prendre rendez-vous

              <ArrowUpRight
                size={11}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>
        </div>

        {/* =====================================================
            LEGAL
        ====================================================== */}

        <div className="border-t border-white/10 py-5">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[10px] text-white/30">
              © {CURRENT_YEAR} BS Diag. Tous droits réservés.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">

              <Link
                href="/mentions-legales"
                className="text-[10px] text-white/30 transition hover:text-white/70"
              >
                Mentions légales
              </Link>

              <Link
                href="/confidentialite"
                className="text-[10px] text-white/30 transition hover:text-white/70"
              >
                Confidentialité
              </Link>

              <Link
                href="/documents/cgv-bdiag.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-white/30 transition hover:text-white/70"
              >
                CGV
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}