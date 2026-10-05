import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { principles } from "@/data/principles";

export default function PrinciplesSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <RevealOnScroll className="mb-10 max-w-lg sm:mb-12">
          <MonoLabel className="mb-4 block">Princípios</MonoLabel>
          <h2 className="text-3xl font-medium text-fg sm:text-4xl">
            Como a ROCTIV decide o que construir.
          </h2>
        </RevealOnScroll>

        <div className="border-t border-border">
          {principles.map((principle, index) => (
            <RevealOnScroll key={principle.number} delay={index * 0.04}>
              <div className="grid gap-3 border-b border-border py-8 sm:grid-cols-[100px_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:py-10">
                <span className="font-mono text-sm text-fg-subtle">
                  {principle.number}
                  <span className="text-accent">.</span>
                </span>
                <h3 className="text-lg font-medium text-fg sm:text-xl">
                  {principle.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-fg-muted">
                  {principle.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
