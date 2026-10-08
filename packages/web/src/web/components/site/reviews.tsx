import { ExternalLink, Star } from "lucide-react";
import { CLINIC, MAPS_LINK } from "../../lib/clinic";

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-[color:var(--sand)] py-20 md:py-28">
      <div className="reveal mx-auto max-w-[900px] px-5 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--sage-dark)]">Avaliações</p>
        <div className="font-display mt-4 text-[5.5rem] font-light leading-none tracking-tight text-[color:var(--sage-dark)] md:text-[8rem]">{CLINIC.rating}</div>
        <div className="mt-4 flex justify-center gap-1" role="img" aria-label={`Nota ${CLINIC.rating} de 5`}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="relative inline-block h-7 w-7">
              <Star size={28} className="absolute inset-0 text-[#C79A3B]/35" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: i < 4 ? "100%" : "70%" }}>
                <Star size={28} className="fill-[#C79A3B] text-[#C79A3B]" />
              </span>
            </span>
          ))}
        </div>
        <p className="font-display mt-6 text-2xl font-light md:text-3xl">
          Nota {CLINIC.rating} em {CLINIC.reviews} avaliações no Google.
        </p>
        <p className="mx-auto mt-3 max-w-[520px] text-[color:var(--muted-ink)]">
          Valores do perfil público da Afinare no Google. Veja os comentários completos por lá e tire suas próprias conclusões.
        </p>
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[color:var(--sage-dark)] transition hover:bg-[color:var(--sage-dark)] hover:text-[#FAF7F2]">
          Ver no Google <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
