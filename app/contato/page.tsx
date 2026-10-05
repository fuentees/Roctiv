import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { site } from "@/data/site";

export const metadata = pageMetadata("Contato", "Converse com a ROCTIV sobre demonstrações de produtos, dúvidas e parcerias.", "/contato");

export default function ContatoPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center pt-32 pb-24 sm:pt-16 sm:pb-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <MonoLabel className="mb-6 block">Contato</MonoLabel>
          <h1 className="text-4xl font-medium text-balance text-fg sm:text-5xl">
            Como podemos ajudar?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-center text-base leading-relaxed text-fg-muted">
            Para solicitar uma demonstração, falar sobre um produto ou propor
            uma parceria, envie um e-mail. Conte qual produto interessa
            e o que você precisa avaliar.
          </p>

          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Contato com a ROCTIV")}`}
            className="group mt-10 inline-flex items-center gap-2 border-b border-border-strong pb-1 font-mono text-lg text-fg transition-colors hover:border-accent hover:text-accent sm:text-xl"
          >
            {site.email}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="mt-6 text-center text-sm leading-relaxed text-fg-muted">O link abre seu aplicativo de e-mail. Se preferir, copie o endereço acima e envie a mensagem pelo serviço que você utiliza.</p>
        </div>
      </Container>
    </div>
  );
}
