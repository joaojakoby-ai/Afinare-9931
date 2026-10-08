import { Navigation, Phone } from "lucide-react";
import { MAPS_LINK, TEL_LINK } from "../../lib/clinic";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--border)] bg-[#FAF7F2]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={TEL_LINK} className="flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--sage-dark)] font-semibold text-[#FAF7F2]"><Phone size={18} /> Ligar</a>
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--sage-dark)] font-semibold text-[color:var(--sage-dark)]"><Navigation size={18} /> Como chegar</a>
      </div>
    </div>
  );
}
