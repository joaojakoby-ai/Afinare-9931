import { useState } from "react";
import { Check, Clock, Copy, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { CLINIC, FULL_ADDRESS, MAPS_EMBED, MAPS_LINK, TEL_LINK } from "../../lib/clinic";

const subjects = ["Quero conhecer os serviços", "Quero saber dias e horários", "Quero saber como chegar", "Outro assunto"];

function Info({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--sand)] text-[color:var(--sage-dark)]"><Icon size={20} /></span>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--muted-ink)]">{title}</h3>
        <div className="mt-0.5 text-[17px] text-[color:var(--ink)]">{children}</div>
      </div>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", subject: subjects[0], message: "" });
  const [copied, setCopied] = useState<"msg" | "addr" | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const text = [
    `Olá, equipe da Afinare! Meu nome é ${form.name || "(nome)"}.`,
    `Assunto: ${form.subject}.`,
    form.message && `Mensagem: ${form.message}`,
    form.phone && `Meu telefone para retorno: ${form.phone}`,
  ].filter(Boolean).join("\n");

  const copy = async (what: "msg" | "addr", value: string) => {
    try { await navigator.clipboard.writeText(value); } catch {
      const t = document.createElement("textarea"); t.value = value; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove();
    }
    setCopied(what); setTimeout(() => setCopied(null), 2200);
  };

  const wa = CLINIC.whatsappNumber ? `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}` : "";
  const mail = CLINIC.email ? `mailto:${CLINIC.email}?subject=${encodeURIComponent("Contato pelo site – " + form.subject)}&body=${encodeURIComponent(text)}` : "";

  const field = "w-full rounded-xl border border-[color:var(--sand-deep)] bg-white px-4 py-3.5 text-[16px] text-[color:var(--ink)] outline-none transition placeholder:text-[#8a8f82] focus:border-[color:var(--sage-dark)] focus:ring-2 focus:ring-[color:var(--sage-dark)]/25";

  return (
    <section id="contato" className="bg-[color:var(--paper)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="reveal max-w-[640px]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--sage-dark)]">Contato</p>
          <h2 className="font-display mt-3 text-4xl font-light leading-tight tracking-tight md:text-5xl">Venha nos <em className="font-normal text-[color:var(--sage-dark)]">conhecer</em>.</h2>
          <p className="mt-4 text-lg text-[color:var(--muted-ink)]">O jeito mais rápido é ligar. Se preferir, deixe sua mensagem pronta aqui embaixo.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="reveal space-y-8">
            <Info icon={Phone} title="Telefone"><a href={TEL_LINK} className="font-display text-3xl font-normal text-[color:var(--sage-dark)] hover:underline">{CLINIC.phoneDisplay}</a></Info>
            <Info icon={MapPin} title="Endereço">
              {CLINIC.street} – {CLINIC.district}<br />{CLINIC.city} · CEP {CLINIC.cep}
            </Info>
            <Info icon={Clock} title="Horário">
              Segundo o perfil público, a Afinare fecha às {CLINIC.closesAt}. Ligue para confirmar dias e horários de atendimento.
            </Info>
            <div className="flex flex-wrap gap-3">
              <a href={TEL_LINK} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[#FAF7F2] transition hover:bg-[#364a3c]"><Phone size={17} /> Ligar</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[color:var(--sage-dark)] transition hover:bg-[color:var(--sage-dark)] hover:text-[#FAF7F2]"><Navigation size={17} /> Como chegar</a>
              <button type="button" onClick={() => copy("addr", FULL_ADDRESS)} className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-medium text-[color:var(--muted-ink)] transition hover:text-[color:var(--sage-dark)]">
                {copied === "addr" ? <><Check size={17} /> Copiado</> : <><Copy size={17} /> Copiar endereço</>}
              </button>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--sand)]">
              <img src="/images/fachada.jpg" alt="Entrada acolhedora da clínica, com porta de vidro, madeira clara e plantas" className="aspect-[16/9] w-full object-cover" loading="lazy" />
              <iframe title="Mapa da Afinare em Rio Verde – GO" src={MAPS_EMBED} className="h-[260px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <form className="reveal h-fit rounded-[28px] border border-[color:var(--border)] bg-[color:var(--sand)]/60 p-6 md:p-9" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl font-normal">Prepare sua mensagem</h3>
            <p className="mt-1 text-[15px] text-[color:var(--muted-ink)]">Preencha, copie a mensagem e envie ou apenas leia para a equipe ao ligar.</p>
            <div className="mt-6 space-y-4">
              <label className="block"><span className="mb-1.5 block text-sm font-medium">Seu nome</span><input className={field} autoComplete="name" value={form.name} onChange={set("name")} placeholder="Como podemos te chamar?" /></label>
              <label className="block"><span className="mb-1.5 block text-sm font-medium">Telefone para retorno (opcional)</span><input className={field} type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="(64) 00000-0000" /></label>
              <label className="block"><span className="mb-1.5 block text-sm font-medium">Assunto</span><select className={field} value={form.subject} onChange={set("subject")}>{subjects.map((s) => <option key={s}>{s}</option>)}</select></label>
              <label className="block"><span className="mb-1.5 block text-sm font-medium">Mensagem (opcional)</span><textarea className={field} rows={4} value={form.message} onChange={set("message")} placeholder="Conte brevemente o que você procura." /></label>
            </div>
            <div className="mt-5 whitespace-pre-line rounded-xl bg-white/80 p-4 text-[15px] text-[color:var(--muted-ink)]" aria-live="polite">{text}</div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => copy("msg", text)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[#FAF7F2] transition hover:bg-[#364a3c]">
                {copied === "msg" ? <><Check size={17} /> Mensagem copiada</> : <><Copy size={17} /> Copiar mensagem</>}
              </button>
              <a href={TEL_LINK} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[color:var(--sage-dark)] transition hover:bg-white"><Phone size={17} /> Ligar</a>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[color:var(--sage-dark)]">WhatsApp <ExternalLink size={15} /></a>}
              {mail && <a href={mail} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--sage-dark)] px-6 py-3.5 font-semibold text-[color:var(--sage-dark)]">E-mail</a>}
            </div>
            <p className="mt-4 text-xs text-[color:var(--muted-ink)]">Nenhum dado é enviado ou armazenado por este site.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
