import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Sobre a ROCTIV e nossa experiência com software", "Conheça a ROCTIV: desenvolvimento de software sob medida e produtos próprios para clínicas, transporte escolar e distribuição de ofertas.", "/sobre");
export default function AboutPage() {
  return <><Container className="pt-32 pb-16 sm:pt-40 sm:pb-24"><MonoLabel className="mb-5 block">Sobre a ROCTIV</MonoLabel><h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">Experiência de produto para construir o software do seu negócio.</h1>
    <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-16"><p className="text-base leading-relaxed text-fg-muted">A ROCTIV reúne desenvolvimento de sistemas web, aplicativos e automações. A experiência vem também da construção de produtos próprios: Vilagi, TECO e CompreiNaPromo, em diferentes estágios de operação e desenvolvimento.</p><p className="text-base leading-relaxed text-fg-muted">Essa prática envolve mais do que telas: regras de negócio, dados, integrações e o caminho até a operação. Para um projeto contratado, o ponto de partida é entender a necessidade e definir uma entrega que faça sentido para ela.</p></div>
    <section className="mt-14 border-t border-border pt-10"><h2 className="text-2xl font-medium">Conheça o trabalho por trás da apresentação.</h2><p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">O portfólio apresenta produtos próprios, com interfaces e recursos para você avaliar. O status de cada projeto aparece de forma explícita.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{projects.map(project => <Link key={project.slug} href={"/produtos/" + project.slug} className="rounded-xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/50"><h3 className="text-xl font-medium">{project.name}</h3><p className="mt-3 text-sm text-fg-muted">{project.category}</p><p className="mt-5 font-mono text-xs text-accent">{project.status}</p><span className="mt-5 inline-flex items-center gap-2 text-sm">Ver projeto<ArrowUpRight size={15} aria-hidden="true" /></span></Link>)}</div></section>
  </Container><ProcessSection /><ContactSection /></>;
}
