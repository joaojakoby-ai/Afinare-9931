import { ChevronDown } from "lucide-react";
import { CLINIC } from "../../lib/clinic";

const items = [
  ["Qual o horário de funcionamento?", `O perfil público da Afinare informa que o estabelecimento fecha às ${CLINIC.closesAt}. Os dias e horários completos não estão publicados aqui; ligue para ${CLINIC.phoneDisplay} para confirmar.`],
  ["Quais serviços a Afinare oferece?", "A Afinare é um centro de saúde e beleza. Para saber exatamente o que está disponível, converse com a equipe pelo telefone."],
  ["Como faço para agendar?", `Este site não faz agendamento online. O contato é pelo telefone ${CLINIC.phoneDisplay}.`],
  ["Quais as formas de pagamento?", "Essa informação não está publicada aqui. A equipe pode explicar quando você ligar."],
  ["Onde fica a Afinare?", `${CLINIC.street} – ${CLINIC.district}, ${CLINIC.city}, CEP ${CLINIC.cep}.`],
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-[color:var(--sand)] py-20 md:py-28">
      <div className="reveal mx-auto max-w-[780px] px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--sage-dark)]">Dúvidas</p>
        <h2 className="font-display mt-3 text-4xl font-light tracking-tight md:text-5xl">Perguntas frequentes</h2>
        <div className="mt-10 divide-y divide-[color:var(--sand-deep)] border-y border-[color:var(--sand-deep)]">
          {items.map(([q, a]) => (
            <details key={q} className="group py-1">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown className="shrink-0 text-[color:var(--sage-dark)] transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 pr-8 text-[color:var(--muted-ink)]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
