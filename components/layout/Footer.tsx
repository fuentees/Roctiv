import Link from "next/link";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import { footerLinks, site } from "@/data/site";
import { whatsappUrl } from "@/lib/contact";

export default function Footer() {
  return <footer className="border-t border-border"><Container className="py-12 sm:py-16"><div className="grid gap-8 sm:grid-cols-[1fr_auto]">
    <div><Logo /><p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">Software sob medida. Sistemas web, aplicativos e automações para o seu negócio.</p></div>
    <div><nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 gap-y-3">{footerLinks.map(link => <Link key={link.href} href={link.href} className="text-sm text-fg-muted hover:text-accent">{link.label}</Link>)}</nav><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-5 block text-sm text-accent">WhatsApp · {site.whatsapp.display}</a><a href={"mailto:" + site.email} className="mt-3 block text-sm text-fg-muted hover:text-accent">{site.email}</a></div>
  </div><div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-border pt-6 text-xs text-fg-subtle"><span>© {new Date().getFullYear()} {site.name}</span><span>CNPJ {site.legal.cnpj}</span></div></Container></footer>;
}
