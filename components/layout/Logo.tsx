import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[15px] font-medium tracking-[0.14em] text-fg",
        className,
      )}
    >
      ROCTIV<span className="text-accent">.</span>
    </span>
  );
}
