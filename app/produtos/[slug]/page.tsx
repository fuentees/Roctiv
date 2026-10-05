import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import ProjectPlaceholder from "@/components/projects/ProjectPlaceholder";
import { getProjectBySlug, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return pageMetadata(project.name, project.description, `/produtos/${project.slug}`);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        <Link
          href="/produtos"
          className="mb-12 inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} />
          Todos os produtos
        </Link>

        <header className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <MonoLabel>{project.category}</MonoLabel>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase",
                project.status !== "Em desenvolvimento"
                  ? "border-accent/40 text-accent"
                  : "border-border-strong text-fg-subtle",
              )}
            >
              {project.status}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {project.logo && (
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-border bg-bg-elevated-2">
                <Image
                  src={project.logo}
                  alt=""
                  fill
                  className="object-contain p-2"
                />
              </span>
            )}
            <h1 className="text-4xl font-medium text-fg sm:text-5xl">
              {project.name}
            </h1>
          </div>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {project.description}
          </p>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              Acessar {project.name}
              <ArrowUpRight size={15} />
            </a>
          )}
        </header>

        <div className="mt-14 sm:mt-16">
          {project.images.length > 0 ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated">
              <Image
                src={project.images[0]}
                alt={`Interface principal do ${project.name}`}
                fill
                priority
                className="object-contain p-6"
                sizes="100vw"
              />
            </div>
          ) : (
            <ProjectPlaceholder name={project.name} />
          )}
        </div>

        <div className="mt-14 grid gap-12 border-t border-border pt-10 sm:mt-16 sm:grid-cols-2 sm:gap-16 sm:pt-12">
          <div>
            <MonoLabel className="mb-4 block">Problema</MonoLabel>
            <p className="text-[15px] leading-relaxed text-fg-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <MonoLabel className="mb-4 block">Solução</MonoLabel>
            <p className="text-[15px] leading-relaxed text-fg-muted">
              {project.solution}
            </p>
          </div>
        </div>

        {project.features.length > 0 && (
          <div className="mt-14 border-t border-border pt-10 sm:mt-16 sm:pt-12">
            <MonoLabel className="mb-6 block">Principais recursos</MonoLabel>
            <ul className="flex flex-wrap gap-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-fg-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies.length > 0 && (
          <div className="mt-14 border-t border-border pt-10 sm:mt-16 sm:pt-12">
            <MonoLabel className="mb-6 block">Tecnologias utilizadas</MonoLabel>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-fg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.images.length > 1 && (
          <div className="mt-14 border-t border-border pt-10 sm:mt-16 sm:pt-12">
            <MonoLabel className="mb-6 block">Telas do produto</MonoLabel>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.images.slice(1).map((image) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-bg-elevated"
                >
                  <Image
                    src={image}
                    alt={`Screenshot do ${project.name}`}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
      <div className="mt-16"><ContactSection product={project.name} /></div>
    </div>
  );
}
