import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import { processSteps } from "@/data/services";

export default function ProcessSection() {
  return <section id="processo" className="border-t border-border py-16 sm:py-24"><Container>
    <div className="mb-12 max-w-2xl"><MonoLabel className="mb-4 block">Como o projeto acontece</MonoLabel><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Clareza antes do código. Acompanhamento durante a construção.</h2><p className="mt-5 leading-relaxed text-fg-muted">Você precisa entender o que será construído, como acompanhar as entregas e o que vem depois. É assim que organizamos a contratação.</p></div>
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map((step,index) => <li key={step.title} className="border-t border-border-strong pt-5"><span className="font-mono text-sm text-accent">0{index + 1}</span><h3 className="mt-5 text-lg font-medium">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.description}</p><p className="mt-5 text-xs font-medium text-fg">{step.output}</p></li>)}</ol>
  </Container></section>;
}
