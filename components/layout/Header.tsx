"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const mainInert = main?.inert ?? false;
    const footerInert = footer?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key !== "Tab") return;
      const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
      const focusable = [toggle, ...links].filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement as HTMLAnchorElement))) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    };
    desktop.addEventListener("change", onResize);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = mainInert;
      if (footer) footer.inert = footerInert;
      desktop.removeEventListener("change", onResize);
      document.removeEventListener("keydown", onKeyDown);
      if (!desktop.matches) toggle?.focus();
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        The blur/background live on this inner wrapper rather than <header> itself:
        backdrop-filter establishes a new containing block, which would make the
        fixed-position mobile menu below size itself against this element instead
        of the viewport.
      */}
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled || open
            ? "border-b border-border bg-bg/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} aria-label="ROCTIV — página inicial">
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group/nav relative flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
                <span className="h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contato"
              className="inline-flex items-center rounded-full border border-border-strong px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Fale conosco
            </Link>
          </div>

          <button
            ref={toggleRef}
            aria-controls={open ? "menu-mobile" : undefined}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-fg md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </div>

      {open && (
        <div ref={menuRef} id="menu-mobile" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-border bg-bg md:hidden">
          <Container className="flex min-h-full flex-col justify-between gap-8 py-10">
            <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-xl text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center rounded-full border border-border-strong px-5 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Fale conosco
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
