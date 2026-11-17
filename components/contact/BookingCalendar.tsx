"use client";

import Cal from "@calcom/embed-react";

export function BookingCalendar() {
  return (
    <section
      id="rendez-vous"
      className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#f5f5f2]">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* INTRO */}
            <div className="flex flex-col justify-between border-b border-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                  Prendre rendez-vous
                </span>

                <h2 className="mt-6 max-w-[420px] text-[38px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#191919] sm:text-[48px]">
                  Choisissez
                  <br />
                  votre créneau.
                </h2>

                <p className="mt-6 max-w-[360px] text-[12px] leading-6 text-black/45">
                  Sélectionnez directement une date et une heure qui vous
                  conviennent.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
                <div className="bg-[#f5f5f2] p-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                    Rendez-vous
                  </p>

                  <p className="mt-2 text-[13px] font-medium text-[#191919]">
                    En ligne
                  </p>
                </div>

                <div className="bg-[#f5f5f2] p-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                    Confirmation
                  </p>

                  <p className="mt-2 text-[13px] font-medium text-[#191919]">
                    Automatique
                  </p>
                </div>
              </div>
            </div>

            {/* CAL.COM */}
            <div className="min-h-[650px] bg-white p-3 sm:p-5 lg:p-8">
              <div className="h-full min-h-[600px] overflow-hidden rounded-2xl border border-black/10 bg-white">
                <Cal
                  calLink="diagnostic-immobilier"
                  config={{
                    layout: "month_view",
                    theme: "light",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "scroll",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}