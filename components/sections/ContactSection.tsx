import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/contact";

export default function ContactSection({ product }: { product?: string }) {
  const message = product ? "Olá! Gostaria de conhecer o " + product + " e conversar sobre uma solução para minha operação." : undefined;
  return <section id="contato" className="border-t border-border bg-bg-elevated py-16 sm:py-24"><Container>
    <div className="mx-auto max-w-3xl text-center"><MonoLabel className="mb-5 block">O próximo passo é uma conversa</MonoLabel>
      <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">{product ? "Uma solução como o " + product + " faz sentido para você?" : "Conte o que você quer melhorar. Vamos pensar no caminho."}</h2>
      <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-fg-muted">{product ? "Converse sobre o produto, peça uma demonstração ou explique o que sua operação precisa." : "Pode ser uma ideia, um processo manual ou um sistema que precisa evoluir. Comece pelo problema; o escopo vem depois."}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg hover:bg-fg">{product ? "Solicitar demonstração" : "Conversar no WhatsApp"}<ArrowUpRight size={17} aria-hidden="true" /></a><Link href="/contato" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm hover:border-fg-muted">Descrever meu projeto <ArrowRight size={16} aria-hidden="true" /></Link></div>
      <p className="mt-5 text-center text-xs text-fg-muted">Prefere e-mail? <a href={"mailto:" + site.email} className="underline underline-offset-4 hover:text-accent">{site.email}</a></p>
    </div>
  </Container></section>;
}
