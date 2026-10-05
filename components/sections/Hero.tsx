"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";

function ParallaxCard({
  mouseX,
  mouseY,
  depth,
  className,
  style,
  children,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  depth: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const x = useTransform(mouseX, [-1, 1], [-depth, depth]);
  const y = useTransform(mouseY, [-1, 1], [-depth, depth]);

  return (
    <motion.div style={{ x, y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

function DashboardFragment() {
  const bars = [40, 65, 30, 80, 55, 70, 45];
  return (
    <div className="h-full w-full rounded-xl border border-border bg-bg-elevated p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-fg-subtle uppercase">
          Sessões
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      <div className="flex h-16 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-[2px] bg-border-strong"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function CodeFragment() {
  const lines = [
    { n: 1, content: "const session = await" },
    { n: 2, content: "  db.sessions.find(patientId)" },
    { n: 3, content: "" },
    { n: 4, content: "return session.status" },
  ];
  return (
    <div className="h-full w-full rounded-xl border border-border bg-bg-elevated p-4 font-mono text-[11px] leading-relaxed shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      {lines.map((line) => (
        <div key={line.n} className="flex gap-3">
          <span className="text-fg-subtle/60 select-none">{line.n}</span>
          <span className="text-fg-muted">{line.content}</span>
        </div>
      ))}
    </div>
  );
}

function MapFragment() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--color-border-strong)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M 12 70 C 40 20, 70 90, 110 30"
          fill="none"
          stroke="var(--color-fg-subtle)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>
      <span className="absolute top-[24%] left-[85%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/20" />
      <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-fg-subtle uppercase">
        Rota / ativa
      </span>
    </div>
  );
}

function ProductListFragment() {
  const rows = [
    { name: "Vilagi", status: "Ativo" },
    { name: "TECO", status: "Em dev" },
  ];
  return (
    <div className="h-full w-full rounded-xl border border-border bg-bg-elevated p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
      <span className="mb-3 block font-mono text-[10px] tracking-widest text-fg-subtle uppercase">
        Produtos
      </span>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between">
            <span className="text-xs text-fg">{row.name}</span>
            <span className="font-mono text-[10px] text-fg-subtle">
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroComposition() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduced = useReducedMotion();

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:max-w-none"
    >
      <ParallaxCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={10}
        className="absolute top-[4%] left-0 w-[62%]"
        style={{ height: "38%", rotate: "-2deg" }}
      >
        <DashboardFragment />
      </ParallaxCard>

      <ParallaxCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={16}
        className="absolute top-[10%] right-0 w-[44%]"
        style={{ height: "34%", rotate: "2deg" }}
      >
        <MapFragment />
      </ParallaxCard>

      <ParallaxCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={14}
        className="absolute top-[48%] left-[2%] w-[52%]"
        style={{ height: "32%", rotate: "1.5deg" }}
      >
        <CodeFragment />
      </ParallaxCard>

      <ParallaxCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={8}
        className="absolute top-[54%] right-0 w-[42%]"
        style={{ height: "30%", rotate: "-1.5deg" }}
      >
        <ProductListFragment />
      </ParallaxCard>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-bg-elevated)_0%,_var(--color-bg)_60%)]" />
      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div>
          <MonoLabel className="mb-6 block">
            ROCTIV <span className="text-accent">/</span> Engenharia de produto
          </MonoLabel>
          <h1 className="max-w-xl text-4xl leading-[1.08] font-medium text-balance text-fg sm:text-5xl lg:text-[3.4rem]">
            Software pensado para funcionar no mundo real.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
            Criamos e mantemos produtos próprios para gestão de clínicas,
            transporte escolar e distribuição de ofertas. Conheça as interfaces,
            os recursos e o estágio de cada produto.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/produtos"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
            >
              Conheça nossos produtos
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Sobre a ROCTIV
            </Link>
          </div>
        </div>

        <HeroComposition />
      </Container>
    </section>
  );
}
