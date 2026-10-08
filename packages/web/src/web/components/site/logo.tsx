export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 29C16 29 5 22 5 12.5C5 7 9.5 3 16 3C22.5 3 27 7 27 12.5C27 22 16 29 16 29Z" fill="#8FA08A" opacity=".25" />
        <path d="M16 29V9M16 21c-3-1-5.500-3.500-6-7M16 17c3-1 5.500-3.500 6-7" stroke="#44594A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[1.65rem] font-medium tracking-tight leading-none text-[color:var(--sage-dark)]">Afinare</span>
    </span>
  );
}
