import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import ContactSection from "@/components/sections/ContactSection";
import { projects } from "@/data/projects";

export const metadata = pageMetadata("Sobre", "Conheça a ROCTIV e seus produtos próprios para gestão de clínicas, transporte escolar e distribuição de ofertas.", "/sobre");

export default function SobrePage() {
  const productCount = projects.length;

  return (
    <div>
      <div className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <MonoLabel className="mb-6 block">Sobre a ROCTIV</MonoLabel>
          <h1 className="max-w-2xl text-4xl font-medium text-balance text-fg sm:text-5xl">
            Produtos próprios, da construção à operação.
          </h1>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
            <p className="text-[15px] leading-relaxed text-fg-muted sm:text-base">
              A ROCTIV desenvolve e mantém software próprio em três áreas:
              gestão de clínicas de estética, transporte escolar e distribuição
              de ofertas. Nosso trabalho reúne desenvolvimento, experiência de
              uso e evolução dos produtos.
            </p>
            <p className="text-[15px] leading-relaxed text-fg-muted sm:text-base">
              Cada produto é tratado como um sistema que precisa continuar
              evoluindo: arquitetura, experiência, segurança, desempenho e
              escalabilidade fazem parte do mesmo processo. Hoje, isso se
              traduz em {productCount}{" "}
              {productCount === 1 ? "produto" : "produtos"} em construção ou
              operação.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/produtos/${project.slug}`} className="rounded-xl border border-border bg-bg-elevated p-5 transition-colors hover:border-accent/50">
                <span className="block text-lg font-medium">{project.name}</span>
                <span className="mt-2 block text-sm text-fg-muted">{project.category}</span>
                <span className="mt-4 block font-mono text-xs text-accent">{project.status}</span>
                <span className="mt-4 block text-sm text-fg-muted">Conhecer recursos e interface →</span>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <PrinciplesSection />
      <ContactSection />
    </div>
  );
}
