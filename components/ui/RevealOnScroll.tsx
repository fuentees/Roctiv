import { cn } from "@/lib/utils";

/** Keep server-rendered content readable without JavaScript or motion. */
export default function RevealOnScroll({ children, className }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
