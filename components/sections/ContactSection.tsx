import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { site } from "@/data/site";

export default function ContactSection({ product }: { product?: string }) {
  const subject = product ? "Quero conhecer o " + product : "Contato com a ROCTIV";
  const href = "mailto:" + site.email + "?subject=" + encodeURIComponent(subject);
  return (
    <section id="contato" className="border-t border-border py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <MonoLabel className="mb-6 block">Vamos conversar</MonoLabel>
          <h2 className="text-3xl font-medium text-balance text-fg sm:text-4xl">
            {product ? "Quer conhecer o " + product + "?" : "Conheça nossos produtos de perto."}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-center text-base leading-relaxed text-fg-muted">
            Peça uma demonstração, tire dúvidas sobre os recursos ou converse sobre uma parceria.
          </p>
          <a href={href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg">
            {product ? "Solicitar demonstração" : "Conversar por e-mail"}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p className="mt-4 text-center text-sm text-fg-muted">{site.email}</p>
          <Link href="/contato" className="mt-4 inline-block text-sm text-fg-muted underline underline-offset-4 hover:text-accent">Outros assuntos e detalhes de contato</Link>
        </div>
      </Container>
    </section>
  );
}
