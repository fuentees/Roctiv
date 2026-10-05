export const site = {
  name: "ROCTIV",
  domain: "roctiv.com.br",
  url: "https://roctiv.com.br",
  email: "contato@roctiv.com.br",
  whatsapp: { number: "5511964563628", display: "(11) 96456-3628" },
  description:
    "Desenvolvimento de software sob medida: sistemas web, aplicativos e automações para organizar sua operação e transformar ideias em produtos digitais.",
  // Deixado preparado para quando a razão social for formalizada.
  legal: {
    razaoSocial: null as string | null,
    cnpj: null as string | null,
  },
};

export const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/produtos" },
  { label: "Processo", href: "/#processo" },
  { label: "Sobre", href: "/sobre" },
];

export const footerLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

// Ativa a seção ROCTIV Labs quando houver experimentos reais para mostrar.
export const labsEnabled = false;
