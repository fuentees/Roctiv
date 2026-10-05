import Link from "next/link";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-32">
      <Container>
        <MonoLabel className="mb-6 block">404</MonoLabel>
        <h1 className="max-w-md text-3xl font-medium text-fg sm:text-4xl">
          Essa página não existe.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex items-center text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          Voltar para a página inicial
        </Link>
      </Container>
    </div>
  );
}
