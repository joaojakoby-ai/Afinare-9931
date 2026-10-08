import { Check, Phone } from "lucide-react";
import { CLINIC, TEL_LINK } from "../../lib/clinic";

const asks = [
  "Quais serviços estão disponíveis hoje",
  "Dias e horários de atendimento",
  "Como funciona a primeira visita",
  "Formas de pagamento",
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-[color:var(--sage-dark)] py-20 text-[#FAF7F2] md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D9E2D4]">Serviços</p>
          <h2 className="font-display mt-3 text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Saúde e beleza, <em className="font-normal">explicadas por quem atende</em>.
          </h2>
          <p className="mt-5 max-w-[500px] text-lg text-[#EDF1E9]">
            Preferimos que você receba informações corretas e atualizadas diretamente da equipe da Afinare. Ligue e conte o que você procura; assim você recebe a orientação certa para o seu caso.
          </p>
          <a href={TEL_LINK} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] px-7 py-4 font-semibold text-[color:var(--sage-dark)] transition hover:bg-white">
            <Phone size={18} /> Ligar {CLINIC.phoneDisplay}
          </a>
        </div>
        <div className="reveal rounded-[28px] border border-white/20 bg-white/10 p-7 backdrop-blur md:p-10">
          <h3 className="font-display text-2xl font-normal">O que você pode perguntar na ligação</h3>
          <ul className="mt-6 space-y-4">
            {asks.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#FAF7F2] text-[color:var(--sage-dark)]"><Check size={14} strokeWidth={3} /></span>
                <span className="text-[17px]">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/20 pt-5 text-sm text-[#DCE5D8]">
            Nenhum compromisso: é só uma conversa para você se sentir segura(o) antes de decidir.
          </p>
        </div>
      </div>
    </section>
  );
}
