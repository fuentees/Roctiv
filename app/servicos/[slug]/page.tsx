import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MonoLabel from "@/components/ui/MonoLabel";
import StructuredData from "@/components/ui/StructuredData";
import ContactSection from "@/components/sections/ContactSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { services } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/contact";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(service.title, service.description, "/servicos/" + service.slug);
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const project = getProjectBySlug(service.project);
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, url: site.url + "/servicos/" + slug, provider: { "@type": "Organization", "@id": site.url + "/#organization", name: site.name, url: site.url } }} />
    <Container className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: service.name, href: "/servicos/" + slug }]} />
      <MonoLabel className="mb-5 block">Software para sua necessidade</MonoLabel>
      <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">{service.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">{service.intro}</p>
      <a href={whatsappUrl("Olá! Quero conversar sobre " + service.name.toLowerCase() + " para meu projeto.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg hover:bg-fg">Conversar sobre este serviço <ArrowUpRight size={16} aria-hidden="true" /></a>
      <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 sm:gap-16">
        <div><h2 className="text-2xl font-medium">Quando faz sentido</h2><p className="mt-4 leading-relaxed text-fg-muted">{service.fit}</p><ul className="mt-6 space-y-3">{service.examples.map(item => <li key={item} className="flex gap-3 text-sm text-fg-muted"><Check size={17} className="shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div>
        <div><h2 className="text-2xl font-medium">O que entra no planejamento</h2><ul className="mt-5 space-y-4">{service.deliverables.map((item,index) => <li key={item} className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed"><span className="font-mono text-accent">0{index + 1}</span>{item}</li>)}</ul><p className="mt-4 text-xs leading-relaxed text-fg-muted">As entregas finais e as responsabilidades são definidas na proposta do seu projeto.</p></div>
      </div>
      <div className="mt-12 rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8"><h2 className="text-xl font-medium">Uma decisão que vale avaliar antes</h2><p className="mt-3 max-w-3xl leading-relaxed text-fg-muted">{service.consideration}</p></div>
      {project && <section className="mt-16 border-t border-border pt-12"><MonoLabel className="mb-4 block">Experiência relacionada</MonoLabel><h2 className="mb-4 text-3xl font-medium">Veja essa experiência em um produto próprio.</h2><p className="mb-10 max-w-2xl leading-relaxed text-fg-muted">{service.evidence}</p><ProjectShowcase project={project} /></section>}
      <div className="mt-14 flex flex-wrap gap-5">{services.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={"/servicos/" + item.slug} className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent">{item.name}<ArrowUpRight size={15} aria-hidden="true" /></Link>)}</div>
    </Container><ContactSection />
  </>;
}
