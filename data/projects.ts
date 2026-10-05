export interface Project {
  slug: string;
  /** Nome público do produto. Para produtos em transição de nome,
   * este é o único lugar que precisa ser alterado quando o nome for definido. */
  name: string;
  tagline: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  status: "Em produção" | "Em desenvolvimento" | "Ativo";
  website?: string;
  /** Ícone/mark do produto em /public/projects/<slug>/. */
  logo?: string;
  technologies: string[];
  features: string[];
  /** Caminhos em /public/projects/<slug>/. Vazio até screenshots reais serem adicionados. */
  images: string[];
  featured: boolean;
  /** Tratamento visual do card na listagem — evita repetir o mesmo layout para todo produto. */
  layout: "framed" | "floating" | "stacked";
}

export const projects: Project[] = [
  {
    slug: "vilagi",
    name: "Vilagi",
    tagline: "Gestão para clínicas de estética",
    category: "Gestão para clínicas de estética",
    description:
      "Uma plataforma criada para centralizar a operação de clínicas e profissionais de estética, reunindo pacientes, tratamentos, sessões, evolução, documentos, pagamentos e comunicação em um único ambiente.",
    problem:
      "Clínicas de estética costumam operar com informação espalhada entre agenda, planilhas, prontuários em papel e conversas soltas — o que dificulta acompanhar tratamentos, sessões restantes e a evolução real de cada paciente.",
    solution:
      "O Vilagi centraliza pacientes, tratamentos e pacotes em um único ambiente, com histórico de sessões, evolução fotográfica, documentos e cobranças conectados ao mesmo fluxo operacional da clínica.",
    status: "Em produção",
    logo: "/projects/vilagi/logo.svg",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    features: [
      "Cadastro e gestão de pacientes",
      "Tratamentos e pacotes",
      "Sessões realizadas e restantes",
      "Agenda",
      "Fotos de evolução e comparação de resultados",
      "Documentos e prescrições",
      "Termos com assinatura eletrônica",
      "Cobranças e pagamentos",
      "Lembretes e automações",
      "Comunicação com pacientes",
      "Portal da paciente",
    ],
    images: ["/projects/vilagi/screenshot-dashboard.png"],
    featured: true,
    layout: "framed",
  },
  {
    slug: "teco",
    name: "TECO",
    tagline: "Transporte Escolar Conectado",
    category: "Tecnologia para transporte escolar",
    description:
      "Uma plataforma para conectar motoristas de transporte escolar, auxiliares e responsáveis, centralizando rotas, alunos, comunicação e acompanhamento do transporte.",
    problem:
      "O transporte escolar normalmente depende de comunicação informal entre motoristas e responsáveis, sem visibilidade real sobre rotas, horários e a localização do veículo durante o trajeto.",
    solution:
      "O TECO conecta motoristas, auxiliares e responsáveis em um mesmo fluxo: rotas com início e encerramento controlados, check-in de alunos, acompanhamento por GPS e notificações em tempo real.",
    status: "Em desenvolvimento",
    logo: "/projects/teco/logo.png",
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSocket",
      "Firebase Cloud Messaging",
      "AES-GCM",
    ],
    features: [
      "Cadastro de alunos",
      "Contratos",
      "Gestão de rotas",
      "Início e encerramento de rota",
      "Check-in de alunos",
      "Acompanhamento por GPS",
      "Notificações",
      "Histórico de viagens",
      "Comunicação com responsáveis",
      "Gestão operacional do motorista",
    ],
    images: ["/projects/teco/screenshot-app.png"],
    featured: true,
    layout: "floating",
  },
  {
    slug: "compreinapromo",
    name: "CompreiNaPromo",
    tagline: "Ofertas e afiliados",
    category: "Ofertas e afiliados",
    description:
      "Uma plataforma criada para organizar e distribuir ofertas selecionadas de produtos através de canais digitais.",
    problem:
      "Encontrar boas ofertas exige acompanhar dezenas de fontes diferentes, e distribuir ofertas selecionadas para uma audiência exige processos manuais e repetitivos.",
    solution:
      "A plataforma organiza a descoberta e publicação de ofertas, distribuindo-as por canais como Telegram através de automações e links de afiliados.",
    status: "Ativo",
    website: "https://www.compreinapromo.shop/",
    logo: "/projects/compreinapromo/logo.svg",
    technologies: [],
    features: [
      "Descoberta de ofertas",
      "Publicação de ofertas",
      "Distribuição multicanal",
      "Integração com Telegram",
      "Automações de envio",
      "Links de afiliados",
    ],
    images: ["/projects/compreinapromo/screenshot-home.png"],
    featured: false,
    layout: "framed",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
