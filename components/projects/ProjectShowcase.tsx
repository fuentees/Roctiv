import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPlaceholder from "./ProjectPlaceholder";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const GLOW =
  "shadow-[0_25px_70px_-25px_rgba(0,0,0,0.7),0_0_60px_-20px_rgba(232,161,61,0.18)]";

function StatusBadge({ status }: { status: Project["status"] }) {
  const positive = status !== "Em desenvolvimento";
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase",
        positive
          ? "border-accent/40 text-accent"
          : "border-border-strong text-fg-subtle",
      )}
    >
      {status}
    </span>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-fg-subtle uppercase">
          {project.category}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <div className="flex items-center gap-3">
        {project.logo && (
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-border bg-bg-elevated-2">
            <Image src={project.logo} alt="" fill sizes="40px" className="object-contain p-1.5" />
          </span>
        )}
        <h3 className="text-2xl font-medium text-fg sm:text-3xl">{project.name}</h3>
      </div>
    </>
  );
}

function Cta({ project }: { project: Project }) {
  return (
    <Link
      href={`/produtos/${project.slug}`}
      className="group/cta mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
    >
      Explorar {project.name}
      <ArrowRight
        size={15}
        className="transition-transform duration-200 group-hover/cta:translate-x-1"
      />
    </Link>
  );
}

function Screenshot({
  project,
  className,
  imageClassName,
}: {
  project: Project;
  className?: string;
  imageClassName?: string;
}) {
  if (project.images.length === 0) {
    return (
      <div className={className}>
        <ProjectPlaceholder name={project.name} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated-2 ring-1 ring-inset ring-white/[0.06] transition-transform duration-500 ease-out",
        GLOW,
        className,
      )}
    >
      <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:rotate-1 group-hover:scale-[1.02]">
        <Image
          src={project.images[0]}
          alt={`Interface do produto ${project.name}`}
          fill
          className={cn("object-contain p-3", imageClassName)}
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </div>
  );
}

function FramedLayout({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Text renders first in markup so it appears above the image on mobile;
          lg:order flips the visual position back to left/right on desktop. */}
      <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>
        <Meta project={project} />
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <Cta project={project} />
      </div>
      <div className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
        <Screenshot project={project} className="aspect-[4/3] w-full" />
      </div>
    </div>
  );
}

function FloatingLayout({ project }: { project: Project }) {
  const hasImage = project.images.length > 0;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div>
        <Meta project={project} />
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <Cta project={project} />
      </div>
      <div>
        {hasImage ? (
          <div
            className={cn(
              "group relative mx-auto aspect-[4/3] w-full max-w-md -rotate-2 overflow-hidden rounded-2xl ring-1 ring-inset ring-white/[0.06] transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02]",
              GLOW,
            )}
          >
            <Image
              src={project.images[0]}
              alt={`Interface do produto ${project.name}`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        ) : (
          <ProjectPlaceholder name={project.name} />
        )}
      </div>
    </div>
  );
}

function StackedLayout({ project }: { project: Project }) {
  return (
    <div>
      <Screenshot project={project} className="aspect-[5/2] w-full" imageClassName="p-5" />
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Meta project={project} />
        <div>
          <p className="max-w-lg text-[15px] leading-relaxed text-fg-muted">
            {project.description}
          </p>
          <Cta project={project} />
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowcase({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <RevealOnScroll>
      {project.layout === "stacked" ? (
        <StackedLayout project={project} />
      ) : project.layout === "floating" ? (
        <FloatingLayout project={project} />
      ) : (
        <FramedLayout project={project} reverse={reverse} />
      )}
    </RevealOnScroll>
  );
}
