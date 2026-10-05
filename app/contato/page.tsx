import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import ProjectBrief from "@/components/contact/ProjectBrief";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Converse sobre seu projeto de software", "Fale com a ROCTIV por WhatsApp ou e-mail sobre sistemas web, aplicativos e automações sob medida. Conte sua necessidade para iniciar uma proposta.", "/contato");
export default function ContactPage() {
  return <Container className="grid gap-12 pt-32 pb-20 sm:pt-40 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
    <div><MonoLabel className="mb-5 block">Vamos entender seu projeto</MonoLabel><h1 className="text-4xl font-medium tracking-tight text-balance sm:text-5xl">Você conta o problema. A conversa começa por aí.</h1><p className="mt-6 text-lg leading-relaxed text-fg-muted">Uma ideia ainda no papel, um processo manual ou um produto que precisa evoluir. Conte o cenário para avaliarmos o próximo passo.</p>
      <ul className="mt-8 space-y-4 text-sm text-fg-muted">{["Entender a necessidade e os usuários", "Avaliar o que vale construir primeiro", "Definir escopo antes de combinar investimento e prazo"].map(item => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
      <div className="mt-10 border-t border-border pt-6"><h2 className="text-sm font-medium">Prefere falar direto?</h2><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-2 text-accent hover:text-fg">WhatsApp · {site.whatsapp.display}<ArrowUpRight size={16} aria-hidden="true" /></a><a href={"mailto:" + site.email} className="mt-4 inline-block break-all text-sm text-fg-muted underline underline-offset-4 hover:text-accent">{site.email}</a></div>
    </div><ProjectBrief />
  </Container>;
}
