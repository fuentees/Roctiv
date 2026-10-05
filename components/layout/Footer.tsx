import Link from "next/link";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import { footerLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-24">
        <Logo className="text-lg" />

        <nav aria-label="Navegação do rodapé" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {footerLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-3">
              {index > 0 && (
                <span className="font-mono text-sm text-accent">/</span>
              )}
              <Link
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="font-mono text-sm text-fg-muted transition-colors hover:text-accent"
        >
          {site.email}
        </a>

        <span className="font-mono text-xs text-fg-subtle">
          © {year} {site.name}
        </span>
      </Container>
      {/*
        Espaço reservado para quando a razão social for formalizada:
        Razão social, CNPJ, link para /privacidade e /termos.
        Ver data/site.ts (site.legal) para preencher esses dados.
      */}
    </footer>
  );
}
