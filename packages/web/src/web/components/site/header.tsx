import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { CLINIC, TEL_LINK } from "../../lib/clinic";

const links = [
  { href: "#sobre", label: "O espaço" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-[#FAF7F2]/95 backdrop-blur border-b border-[color:var(--border)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#topo" aria-label="Afinare – início"><Logo /></a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-[color:var(--ink)]/80 transition-colors hover:text-[color:var(--sage-dark)]">{l.label}</a>
          ))}
          <a href={TEL_LINK} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sage-dark)] px-5 py-2.5 text-[15px] font-semibold text-[#FAF7F2] transition hover:bg-[#364a3c]">
            <Phone size={16} /> {CLINIC.phoneDisplay}
          </a>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-full text-[color:var(--ink)] md:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[color:var(--border)] bg-[#FAF7F2] px-5 pb-6 pt-3 md:hidden" aria-label="Menu móvel">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[color:var(--border)] py-4 font-display text-xl text-[color:var(--ink)]">{l.label}</a>
          ))}
          <a href={TEL_LINK} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[color:var(--sage-dark)] py-3.5 font-semibold text-[#FAF7F2]">
            <Phone size={18} /> Ligar {CLINIC.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
