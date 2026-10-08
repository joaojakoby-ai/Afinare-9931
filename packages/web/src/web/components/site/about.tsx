import { Leaf, MapPin, MessageCircle } from "lucide-react";

const points = [
  { icon: Leaf, title: "Ambiente tranquilo", text: "Espaços claros, organizados e pensados para você se sentir à vontade desde a chegada." },
  { icon: MessageCircle, title: "Conversa sem pressa", text: "Antes de qualquer decisão, você pode ligar e tirar suas dúvidas com a equipe." },
  { icon: MapPin, title: "No centro de Rio Verde", text: "Fácil de encontrar, no Setor Central, na Rua Almiro de Moraes." },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-[color:var(--paper)] py-20 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 md:grid-cols-[1fr_1.05fr] md:gap-20 md:px-8">
        <div className="reveal relative mx-auto w-full max-w-[460px] md:mx-0">
          <img src="/images/sala.jpg" alt="Sala de atendimento da Afinare, limpa e confortável, com iluminação suave" className="arch aspect-[4/5] w-full object-cover" loading="lazy" />
          <img src="/images/autocuidado.jpg" alt="Toalhas claras, planta e elementos neutros de bem-estar sobre uma bancada" className="absolute -bottom-8 -right-3 w-[46%] rounded-2xl border-[6px] border-[color:var(--paper)] object-cover shadow-xl md:-right-10" loading="lazy" />
        </div>
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--sage-dark)]">O espaço</p>
          <h2 className="font-display mt-3 text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Saúde e beleza em um lugar <em className="font-normal text-[color:var(--sage-dark)]">que acolhe</em>.
          </h2>
          <p className="mt-5 max-w-[520px] text-lg text-[color:var(--muted-ink)]">
            A Afinare é um centro de saúde e beleza em Rio Verde. Nosso convite é simples: venha conhecer, converse com a equipe e entenda com tranquilidade o que faz sentido para você.
          </p>
          <ul className="mt-10 space-y-6">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--sand)] text-[color:var(--sage-dark)]"><Icon size={22} /></span>
                <div>
                  <h3 className="font-display text-xl font-medium">{title}</h3>
                  <p className="text-[color:var(--muted-ink)]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
