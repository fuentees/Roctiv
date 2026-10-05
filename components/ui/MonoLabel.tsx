import { cn } from "@/lib/utils";

export default function MonoLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-[0.18em] text-fg-subtle uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
