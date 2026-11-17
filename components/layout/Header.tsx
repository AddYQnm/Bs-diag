"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const diagnostics = [
  ["DPE", "/diagnostics/dpe"],
  ["Amiante", "/diagnostics/amiante"],
  ["Plomb", "/diagnostics/plomb"],
  ["Électricité", "/diagnostics/electricite"],
  ["Gaz", "/diagnostics/gaz"],
  ["Termites", "/diagnostics/termites"],
  ["ERP", "/diagnostics/erp"],
  ["Loi Carrez", "/diagnostics/carrez"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/[0.06] bg-white">

      {/* DESKTOP / MOBILE TOP BAR */}
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10">
            <span className="text-[10px] font-semibold">BS</span>
          </div>

          <div className="leading-none">
            <span className="block text-[16px] font-semibold tracking-[-0.03em]">
              BS Diag
            </span>

            <span className="mt-1 block text-[7px] uppercase tracking-[0.14em] text-neutral-400">
              Diagnostics immobiliers
            </span>
          </div>
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-[12px] font-medium text-black"
          >
            Accueil
          </Link>

          <div className="group relative">
            <Link
              href="/diagnostics"
              className="flex items-center gap-1.5 py-5 text-[12px] font-medium text-neutral-600 transition hover:text-black"
            >
              Diagnostics
              <ChevronDown
                size={13}
                className="transition-transform group-hover:rotate-180"
              />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {diagnostics.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-xs text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
                >
                  {label}
                  <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>

          <Link href="/vendre" className="text-[12px] text-neutral-600 hover:text-black">
            Vente
          </Link>

          <Link href="/louer" className="text-[12px] text-neutral-600 hover:text-black">
            Location
          </Link>

          <Link href="/a-propos" className="text-[12px] text-neutral-600 hover:text-black">
            À propos
          </Link>

          <Link href="/contact" className="text-[12px] text-neutral-600 hover:text-black">
            Contact
          </Link>
        </nav>


        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-full bg-[#1b1b1b] px-5 py-2.5 text-[11px] font-medium text-white transition hover:bg-black lg:inline-flex"
        >
          Demander un devis

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
            <ArrowUpRight size={11} />
          </span>
        </Link>


        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1b1b] text-white lg:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-black/[0.06] bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6">

          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-black/[0.06] py-4 text-[15px] font-medium"
            >
              Accueil
            </Link>

            <button
              type="button"
              onClick={() => setDiagnosticsOpen(!diagnosticsOpen)}
              className="flex items-center justify-between border-b border-black/[0.06] py-4 text-left text-[15px] font-medium"
            >
              Diagnostics
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  diagnosticsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {diagnosticsOpen && (
              <div className="grid grid-cols-2 border-b border-black/[0.06] py-2">
                {diagnostics.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-[12px] text-neutral-500"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/vendre"
              onClick={() => setOpen(false)}
              className="border-b border-black/[0.06] py-4 text-[15px] font-medium"
            >
              Vente
            </Link>

            <Link
              href="/louer"
              onClick={() => setOpen(false)}
              className="border-b border-black/[0.06] py-4 text-[15px] font-medium"
            >
              Location
            </Link>

            <Link
              href="/a-propos"
              onClick={() => setOpen(false)}
              className="border-b border-black/[0.06] py-4 text-[15px] font-medium"
            >
              À propos
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-4 text-[15px] font-medium"
            >
              Contact
            </Link>

          </nav>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 rounded-full bg-black px-5 py-3.5 text-[12px] font-medium text-white"
          >
            Demander un devis
            <ArrowUpRight size={13} />
          </Link>

        </div>
      </div>

    </header>
  );
}