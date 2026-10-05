export const site = {
  name: "ROCTIV",
  domain: "roctiv.com.br",
  url: "https://roctiv.com.br",
  email: "contato@roctiv.com.br",
  description:
    "A ROCTIV desenvolve e mantém produtos próprios para gestão de clínicas, transporte escolar e distribuição de ofertas.",
  // Deixado preparado para quando a razão social for formalizada.
  legal: {
    razaoSocial: null as string | null,
    cnpj: null as string | null,
  },
};

export const navLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Competências", href: "/#expertise" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

// Ativa a seção ROCTIV Labs quando houver experimentos reais para mostrar.
export const labsEnabled = false;
