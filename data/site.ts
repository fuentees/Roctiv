export const site = {
  name: "ROCTIV",
  domain: "roctiv.com.br",
  url: "https://www.roctiv.com.br",
  email: "contato@roctiv.com.br",
  whatsapp: { number: "5511964563628", display: "(11) 96456-3628" },
  description:
    "Desenvolvimento de software sob medida: sistemas web, aplicativos e automações para organizar sua operação e transformar ideias em produtos digitais.",
  // Razão social pode ser preenchida quando o nome oficial for informado.
  legal: {
    razaoSocial: null as string | null,
    cnpj: "56.186.861/0001-60",
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
