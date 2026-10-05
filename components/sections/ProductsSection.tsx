import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { projects } from "@/data/projects";

export default function ProductsSection() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <section id="produtos" className="py-16 sm:py-20">
      <Container>
        <RevealOnScroll className="mb-12 max-w-2xl sm:mb-14">
          <MonoLabel className="mb-4 block">
            Produtos <span className="text-accent">/</span> {count}
          </MonoLabel>
          <h2 className="text-3xl font-medium text-fg sm:text-4xl">
            O que construímos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
            Produtos próprios desenvolvidos e mantidos pela ROCTIV.
          </p>
        </RevealOnScroll>

        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <RevealOnScroll className="mt-14 flex justify-center sm:mt-16">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Ver todos os produtos
            <ArrowRight size={15} />
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
