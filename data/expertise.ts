export interface ExpertiseArea {
  name: string;
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    name: "Engenharia de produto",
    description:
      "Arquitetura e decisões técnicas pensadas para o produto crescer sem precisar ser reconstruído.",
  },
  {
    name: "Aplicações web",
    description: "Aplicações web rápidas, acessíveis e prontas para produção.",
  },
  {
    name: "Aplicativos móveis",
    description: "Aplicativos multiplataforma com foco em performance real de uso.",
  },
  {
    name: "Plataformas SaaS",
    description: "Plataformas multiusuário com operação, cobrança e permissões.",
  },
  {
    name: "Backend e APIs",
    description: "APIs e serviços estruturados para escalar com o produto.",
  },
  {
    name: "Sistemas em tempo real",
    description: "Comunicação em tempo real entre dispositivos, usuários e serviços.",
  },
  {
    name: "Bancos de dados",
    description: "Modelagem de dados consistente com o domínio do produto.",
  },
  {
    name: "Infraestrutura",
    description: "Ambientes de deploy e operação preparados para crescer.",
  },
  {
    name: "Automação",
    description: "Processos repetitivos substituídos por fluxos automatizados.",
  },
];

export interface TechUsage {
  name: string;
  usedIn: string[];
}

export const techStack: TechUsage[] = [
  { name: "TypeScript", usedIn: ["Vilagi"] },
  { name: "Next.js", usedIn: ["Vilagi"] },
  { name: "React", usedIn: ["Vilagi"] },
  { name: "Flutter", usedIn: ["TECO"] },
  { name: "Node.js", usedIn: ["TECO"] },
  { name: "Express", usedIn: ["TECO"] },
  { name: "PostgreSQL", usedIn: ["TECO"] },
  { name: "Supabase", usedIn: ["Vilagi"] },
  { name: "WebSocket", usedIn: ["TECO"] },
  { name: "Firebase", usedIn: ["TECO"] },
];
