export default function ProjectPlaceholder({ name }: { name: string }) {
  return (
    <div className="bg-grid relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-elevated">
      <span className="pointer-events-none absolute top-4 left-4 h-3 w-3 border-t border-l border-border-strong" />
      <span className="pointer-events-none absolute top-4 right-4 h-3 w-3 border-t border-r border-border-strong" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-border-strong" />
      <span className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-border-strong" />

      <span className="font-mono text-4xl tracking-tight text-fg-subtle/50 select-none sm:text-5xl">
        {name}
      </span>

      <span className="absolute bottom-4 font-mono text-[10px] tracking-widest text-fg-subtle uppercase">
        Screenshot em breve
      </span>
    </div>
  );
}
