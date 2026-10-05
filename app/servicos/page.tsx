import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Desenvolvimento de sistemas, aplicativos e automações", "Conheça os serviços da ROCTIV: sistemas web, aplicativos móveis e automações sob medida. Entenda as entregas e converse sobre seu projeto.", "/servicos");
export default function ServicesPage() {
  return <><Container className="pt-32 pb-12 sm:pt-40"><MonoLabel className="mb-5 block">Serviços de desenvolvimento</MonoLabel><h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">Software sob medida para o que seu negócio precisa fazer.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">Organizar a operação, criar um novo produto ou conectar ferramentas. Escolha o ponto de partida; definimos o escopo a partir da sua necessidade.</p></Container><ServicesSection heading={false} /><ProcessSection /><ContactSection /></>;
}
