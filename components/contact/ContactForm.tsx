// components/contact/ContactForm.tsx

import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#61766a]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Une autre question ?
              </span>
            </div>

            <h2 className="mt-6 text-[40px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#191919] sm:text-[50px]">
              Vous préférez
              <br />
              nous écrire ?
            </h2>

            <p className="mt-6 max-w-[350px] text-[12px] leading-6 text-black/45">
              Utilisez le formulaire et expliquez-nous votre besoin. Nous
              reviendrons vers vous rapidement.
            </p>
          </div>

          <form className="border-t border-black/10">
            <div className="grid gap-x-8 sm:grid-cols-2">
              <label className="border-b border-black/10 py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/35">
                  Nom
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="mt-3 w-full bg-transparent text-[13px] text-black outline-none placeholder:text-black/25"
                />
              </label>

              <label className="border-b border-black/10 py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/35">
                  Téléphone
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="06 00 00 00 00"
                  className="mt-3 w-full bg-transparent text-[13px] text-black outline-none placeholder:text-black/25"
                />
              </label>

              <label className="border-b border-black/10 py-5 sm:col-span-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/35">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="vous@exemple.fr"
                  className="mt-3 w-full bg-transparent text-[13px] text-black outline-none placeholder:text-black/25"
                />
              </label>

              <label className="border-b border-black/10 py-5 sm:col-span-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/35">
                  Votre projet
                </span>

                <select
                  name="project"
                  defaultValue=""
                  className="mt-3 w-full bg-transparent text-[13px] text-black outline-none"
                >
                  <option value="" disabled>
                    Sélectionnez une option
                  </option>
                  <option value="vente">Vente immobilière</option>
                  <option value="location">Mise en location</option>
                  <option value="travaux">Travaux / rénovation</option>
                  <option value="autre">Autre demande</option>
                </select>
              </label>

              <label className="border-b border-black/10 py-5 sm:col-span-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/35">
                  Message
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                  className="mt-3 w-full resize-none bg-transparent text-[13px] leading-6 text-black outline-none placeholder:text-black/25"
                />
              </label>
            </div>

            <div className="flex justify-end pt-7">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#191919] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#61766a]"
              >
                Envoyer ma demande

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={11}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}