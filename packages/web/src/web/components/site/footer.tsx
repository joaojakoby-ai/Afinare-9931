import { Logo } from "./logo";
import { CLINIC, MAPS_LINK, TEL_LINK } from "../../lib/clinic";

export function Footer() {
  return (
    <footer className="bg-[#2A2E27] pb-28 pt-14 text-[#E9E4D9] md:pb-12">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <span className="inline-flex rounded-full bg-[#FAF7F2] px-4 py-2"><Logo /></span>
          <p className="mt-4 max-w-[280px] text-[15px] text-[#BDB8AB]">{CLINIC.category} em Rio Verde – GO.</p>
        </div>
        <div className="text-[15px]">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#BDB8AB]">Endereço</h3>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">{CLINIC.street} – {CLINIC.district}<br />{CLINIC.city} · CEP {CLINIC.cep}</a>
        </div>
        <div className="text-[15px]">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#BDB8AB]">Telefone</h3>
          <a href={TEL_LINK} className="font-display text-2xl hover:underline">{CLINIC.phoneDisplay}</a>
          <p className="mt-2 text-[#BDB8AB]">Fecha às {CLINIC.closesAt} (confirme dias e horários por telefone).</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1200px] border-t border-white/10 px-5 pt-6 text-sm text-[#BDB8AB] md:px-8">
        © {new Date().getFullYear()} Afinare. Nota e número de avaliações conforme perfil público no Google.
      </div>
    </footer>
  );
}
