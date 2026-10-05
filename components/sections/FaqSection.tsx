import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { questions } from "@/data/services";

export default function FaqSection() {
  return <section className="border-t border-border py-16 sm:py-24"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div><MonoLabel className="mb-4 block">Antes de começar</MonoLabel><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Perguntas que fazem parte de uma boa decisão.</h2></div>
    <div>{questions.map(item => <details key={item.question} className="group border-b border-border py-5 first:border-t"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium [&::-webkit-details-marker]:hidden">{item.question}<Plus size={18} className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted">{item.answer}</p></details>)}</div>
  </Container></section>;
}
