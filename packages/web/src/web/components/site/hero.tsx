import { MapPin, Phone, Star } from "lucide-react";
import { CLINIC, MAPS_LINK, TEL_LINK } from "../../lib/clinic";

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-[color:var(--sand)]">
      {/* Mobile: foto em cima, texto embaixo. Desktop: texto sobre a parede livre da foto */}
      <div className="relative h-[46vh] min-h-[300px] md:absolute md:inset-0 md:h-auto">
        <img src="/images/recepcao.jpg" alt="Recepção acolhedora da Afinare, com luz natural, plantas e madeira clara" className="h-full w-full object-cover object-[70%_50%] md:object-center" fetchPriority="high" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#FAF7F2]/90 via-[#FAF7F2]/55 to-transparent md:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--sand)] to-transparent md:hidden" />
      </div>
      <div className="relative mx-auto flex max-w-[1200px] flex-col justify-center px-5 pb-14 pt-4 md:min-h-[min(780px,100svh)] md:px-8 md:pb-24 md:pt-36">
        <div className="max-w-[560px]">
          <p className="rise text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--sage-dark)]" style={{ animationDelay: ".05s" }}>
            {CLINIC.category} · Rio Verde – GO
          </p>
          <h1 className="rise font-display mt-4 text-[2.6rem] font-light leading-[1.05] tracking-tight text-[color:var(--ink)] md:text-[4.1rem]" style={{ animationDelay: ".15s" }}>
            Um espaço para cuidar de você, <em className="font-normal text-[color:var(--sage-dark)]">com calma</em>.
          </h1>
          <p className="rise mt-5 max-w-[480px] text-lg text-[color:var(--ink)]/85" style={{ animationDelay: ".28s" }}>
            Conheça a Afinare, no Setor Central de Rio Verde. Fale com a nossa equipe e tire suas dúvidas, sem pressa e sem compromisso.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".4s" }}>
            <a href={TEL_LINK} className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--sage-dark)] px-7 py-4 font-semibold text-[#FAF7F2] shadow-[0_10px_30px_-12px_rgba(68,89,74,.7)] transition hover:bg-[#364a3c]">
              <Phone size={18} /> Ligar agora
            </a>
            <a href="#contato" className="inline-flex items-center justify-center rounded-full border border-[color:var(--sage-dark)]/40 bg-[#FAF7F2]/70 px-7 py-4 font-semibold text-[color:var(--sage-dark)] backdrop-blur transition hover:bg-[#FAF7F2]">
              Enviar uma mensagem
            </a>
          </div>
          <div className="rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-[color:var(--ink)]/85" style={{ animationDelay: ".5s" }}>
            <span className="inline-flex items-center gap-1.5"><Star size={16} className="fill-[#C79A3B] text-[#C79A3B]" /> <strong>{CLINIC.rating}</strong> no Google · {CLINIC.reviews} avaliações</span>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"><MapPin size={16} /> Como chegar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
