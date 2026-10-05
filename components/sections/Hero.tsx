import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { whatsappUrl } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[100px]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <MonoLabel className="mb-6 block">Sistemas web · Aplicativos · Automações</MonoLabel>
          <h1 className="max-w-2xl text-[2.65rem] leading-[1.08] font-medium tracking-tight text-balance sm:text-6xl lg:text-[3.8rem]">
            Software sob medida para <span className="text-accent">seu negócio avançar.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
            Transformamos processos espalhados e ideias de negócio em sistemas web, aplicativos e automações feitos para a sua necessidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-fg">
              Conversar sobre meu projeto <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link href="/produtos" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm hover:border-fg-muted">
              Ver projetos reais <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-fg-muted sm:text-sm">
            {["Escopo definido antes de construir", "Validação por etapas"].map(item => <li key={item} className="flex items-center gap-2"><Check size={14} className="text-accent" aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
              <span className="flex items-center gap-2 text-xs text-fg-muted"><span className="h-2 w-2 rounded-full bg-accent" />Vilagi · produto próprio</span>
              <span className="font-mono text-[10px] text-fg-subtle">EM PRODUÇÃO</span>
            </div>
            <div className="relative aspect-[4/3] bg-[#111113]">
              <Image src="/projects/vilagi/screenshot-dashboard.png" alt="Painel do Vilagi, plataforma de gestão de clínicas desenvolvida pela ROCTIV" fill sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 100vw" preload className="object-contain p-3 sm:p-4" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-4">
              <p className="text-xs text-fg-muted">Pacientes, tratamentos, agenda e cobranças.</p>
              <Link href="/produtos/vilagi" className="inline-flex items-center gap-1 text-xs font-medium text-accent">Conhecer o projeto <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] tracking-wide text-fg-subtle">INTERFACE REAL · SOFTWARE DESENVOLVIDO PELA ROCTIV</p>
        </div>
      </Container>
    </section>
  );
}
