"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/contact";

export default function ProjectBrief() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notice, setNotice] = useState("");
  const message = ["Olá! Quero conversar sobre um projeto com a ROCTIV.", name.trim() && "Meu nome: " + name.trim(), service && "Interesse: " + service, goal.trim() && "O que preciso resolver: " + goal.trim(), deadline.trim() && "Prazo ou contexto: " + deadline.trim()].filter(Boolean).join("\n\n");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!goal.trim()) { setNotice("Descreva em uma frase o que você precisa resolver."); return; }
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setNotice("Continue no WhatsApp para revisar e enviar a mensagem. Se a janela não abriu, use o link abaixo.");
  }
  const field = "mt-2 w-full rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-fg placeholder:text-fg-subtle focus:border-accent";
  return <form onSubmit={submit} className="project-brief rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
    <h2 className="text-xl font-medium">Um ponto de partida para a conversa.</h2>
    <p className="mt-3 text-sm leading-relaxed text-fg-muted">Não precisa de um documento técnico. Explique a necessidade com suas palavras.</p>
    <div className="mt-6 space-y-5">
      <div><label htmlFor="brief-name" className="text-sm">Seu nome <span className="text-fg-muted">(opcional)</span></label><input id="brief-name" name="name" autoComplete="name" maxLength={100} value={name} onChange={event => setName(event.target.value)} className={field} placeholder="Como podemos chamar você?" /></div>
      <div><label htmlFor="brief-service" className="text-sm">O que você tem em mente?</label><select id="brief-service" name="service" value={service} onChange={event => setService(event.target.value)} className={field}><option value="">Ainda quero entender o melhor caminho</option>{services.map(item => <option key={item.slug} value={item.name}>{item.name}</option>)}<option value="Conhecer um produto da ROCTIV">Conhecer um produto da ROCTIV</option></select></div>
      <div><label htmlFor="brief-goal" className="text-sm">O que você precisa resolver? <span className="text-accent">*</span></label><textarea id="brief-goal" name="goal" rows={5} required maxLength={1200} value={goal} onChange={event => { setGoal(event.target.value); setNotice(""); }} className={field + " resize-y"} placeholder="Ex.: hoje usamos planilhas para organizar os pedidos e queremos acompanhar tudo em um sistema." aria-describedby="brief-goal-help" /><p id="brief-goal-help" className="mt-2 text-xs text-fg-muted">Conte quem vai usar e como funciona hoje. Evite incluir senhas ou informações de clientes.</p></div>
      <div><label htmlFor="brief-deadline" className="text-sm">Existe um prazo ou prioridade? <span className="text-fg-muted">(opcional)</span></label><input id="brief-deadline" name="deadline" maxLength={120} value={deadline} onChange={event => setDeadline(event.target.value)} className={field} placeholder="Ex.: começar pela gestão de pedidos" /></div>
    </div>
    <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg hover:bg-fg">Continuar no WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></button>
    <p className="mt-3 text-xs leading-relaxed text-fg-muted">A mensagem é preparada neste navegador. Você revisa e envia no WhatsApp; o site não armazena este formulário.</p>
    <p role="status" aria-live="polite" className="mt-3 text-sm leading-relaxed text-accent">{notice}</p>
    {notice && <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm underline underline-offset-4">Abrir a conversa no WhatsApp</a>}
    <a href={"mailto:" + site.email + "?subject=" + encodeURIComponent("Projeto de software sob medida") + "&body=" + encodeURIComponent(message)} className="mt-4 block text-center text-sm text-fg-muted underline underline-offset-4 hover:text-accent">Prefiro continuar por e-mail</a>
    <noscript><style>{".project-brief { display: none; }"}</style></noscript>
  </form>;
}
