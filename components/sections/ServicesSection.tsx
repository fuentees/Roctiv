import Link from "next/link";
import { ArrowUpRight, Workflow, PanelsTopLeft, Smartphone } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { services } from "@/data/services";

const icons = [PanelsTopLeft, Smartphone, Workflow];
export default function ServicesSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="servicos" className="border-t border-border py-16 sm:py-24">
      <Container>
        {heading && <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div><MonoLabel className="mb-4 block">O que você pode contratar</MonoLabel><h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">A solução começa pelo que você precisa resolver.</h2></div>
          <p className="max-w-md text-base leading-relaxed text-fg-muted lg:justify-self-end">Um processo que precisa de organização. Um serviço que precisa chegar ao celular. Uma tarefa que não deveria continuar manual.</p>
        </div>}
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service,index) => { const Icon = icons[index]; return <Link key={service.slug} href={"/servicos/" + service.slug} className="group flex flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/50 sm:p-7">
            <Icon size={26} strokeWidth={1.5} className="mb-8 text-accent" aria-hidden="true" />
            <h3 className="text-xl font-medium">{service.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{service.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium">Entender este serviço <ArrowUpRight size={16} className="text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
          </Link>; })}
        </div>
      </Container>
    </section>
  );
}
