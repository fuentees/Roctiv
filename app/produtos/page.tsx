import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { projects } from "@/data/projects";

export const metadata = pageMetadata("Produtos", "Conheça Vilagi, TECO e CompreiNaPromo: os produtos digitais desenvolvidos pela ROCTIV.", "/produtos");

export default function ProdutosPage() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <header className="mb-14 max-w-2xl sm:mb-16">
          <MonoLabel className="mb-4 block">
            Produtos <span className="text-accent">/</span> {count}
          </MonoLabel>
          <h1 className="text-4xl font-medium text-fg sm:text-5xl">
            O que construímos
          </h1>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            Produtos próprios desenvolvidos e mantidos pela ROCTIV.
          </p>
        </header>

        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
