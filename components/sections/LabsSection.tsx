import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function LabsSection() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <RevealOnScroll className="max-w-xl">
          <MonoLabel className="mb-4 block">ROCTIV Labs</MonoLabel>
          <h2 className="text-3xl font-medium text-fg sm:text-4xl">
            Experimentos, ferramentas e projetos em desenvolvimento.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
            Um espaço reservado para pesquisas e protótipos da ROCTIV. Em
            breve, novidades por aqui.
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
