
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

type Diagnostic = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  purpose: string;
  mandatory: string;
  concerned: string;
};

type DiagnosticModalProps = {
  diagnostic: Diagnostic | null;
  onClose: () => void;
};

export function DiagnosticModal({
  diagnostic,
  onClose,
}: DiagnosticModalProps) {
  useEffect(() => {
    if (!diagnostic) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [diagnostic, onClose]);

  if (!diagnostic) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-[6px] sm:p-6"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="diagnostic-modal-title"
        className="relative w-full max-w-[1120px] overflow-hidden rounded-[24px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-neutral-700 backdrop-blur-md transition-all duration-300 hover:bg-black hover:text-white sm:right-5 sm:top-5"
        >
          <X size={16} strokeWidth={1.7} />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.92fr_1.08fr] lg:overflow-hidden">
          {/* IMAGE */}
          <div className="relative h-[270px] shrink-0 sm:h-[350px] lg:h-[650px]">
            <Image
              src={diagnostic.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
              <span className="text-[10px] font-medium tracking-[0.16em] text-white/55">
                {diagnostic.number}
              </span>

              <h2 className="mt-2 text-[46px] font-semibold leading-none tracking-[-0.055em] sm:text-[58px]">
                {diagnostic.title}
              </h2>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex min-h-0 flex-col p-7 sm:p-9 lg:h-[650px] lg:overflow-y-auto lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#61766a]">
                {diagnostic.subtitle}
              </p>

              <h3
                id="diagnostic-modal-title"
                className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#202020] sm:text-[42px]"
              >
                {diagnostic.description}
              </h3>
            </div>

            <div className="mt-10 border-t border-black/[0.08]">
              <div className="border-b border-black/[0.08] py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  À quoi sert-il ?
                </p>

                <p className="mt-3 max-w-[540px] text-[14px] leading-6 text-neutral-600">
                  {diagnostic.purpose}
                </p>
              </div>

              <div className="border-b border-black/[0.08] py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Quand est-il nécessaire ?
                </p>

                <p className="mt-3 max-w-[540px] text-[14px] leading-6 text-neutral-600">
                  {diagnostic.mandatory}
                </p>
              </div>

              <div className="py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Quels biens sont concernés ?
                </p>

                <p className="mt-3 max-w-[540px] text-[14px] leading-6 text-neutral-600">
                  {diagnostic.concerned}
                </p>
              </div>
            </div>

            <div className="mt-auto border-t border-black/[0.08] pt-7">
              <Link
                href="/contact"
                onClick={onClose}
                className="group inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:bg-[#61766a]"
              >
                Demander un devis

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
