import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  return <section id="projetos" className="border-t border-border py-16 sm:py-24"><Container>
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div className="max-w-2xl"><MonoLabel className="mb-4 block">Experiência colocada em prática</MonoLabel><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Produtos que mostram como construímos.</h2><p className="mt-5 max-w-xl leading-relaxed text-fg-muted">São produtos próprios, em operação ou desenvolvimento. Conheça as interfaces, os problemas abordados e os recursos de cada um.</p></div><Link href="/produtos" className="inline-flex items-center gap-2 text-sm text-accent">Ver portfólio completo <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    <div className="grid gap-5 md:grid-cols-3">{projects.map(project => <Link key={project.slug} href={"/produtos/" + project.slug} className="group overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-colors hover:border-accent/50">
      <div className="relative aspect-[4/3] border-b border-border bg-bg-elevated-2"><Image src={project.images[0]} alt={"Interface do " + project.name} fill sizes="(min-width: 1024px) 340px, (min-width: 768px) 33vw, 100vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]" /></div>
      <div className="p-6"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-medium">{project.name}</h3><span className="font-mono text-[10px] text-accent">{project.status}</span></div><p className="mt-3 text-sm text-fg-muted">{project.tagline}</p><span className="mt-6 inline-flex items-center gap-2 text-sm">Conhecer o projeto <ArrowUpRight size={15} aria-hidden="true" /></span></div>
    </Link>)}</div>
  </Container></section>;
}
