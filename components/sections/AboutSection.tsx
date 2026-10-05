import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="sobre" className="border-t border-border py-14 sm:py-16">
      <Container>
        <RevealOnScroll className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <MonoLabel className="mb-3 block">Sobre</MonoLabel>
            <h2 className="text-2xl font-medium text-fg sm:text-3xl">ROCTIV</h2>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-fg-muted">
              Desenvolvemos e operamos produtos próprios de software em
              diferentes áreas.
            </p>
          </div>

          <Link
            href="/sobre"
            className="group/cta inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Saiba mais
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover/cta:translate-x-1"
            />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
