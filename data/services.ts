export interface Service {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  fit: string;
  examples: string[];
  deliverables: string[];
  consideration: string;
  project: string;
  evidence: string;
}

export const services: Service[] = [
  {
    slug: "sistemas-web", name: "Sistemas web e plataformas", title: "Desenvolvimento de sistemas web sob medida",
    description: "Sistemas web, portais e plataformas SaaS sob medida para organizar processos, conectar informações e colocar seu produto em operação.",
    intro: "Quando planilhas, conversas e ferramentas isoladas já não dão conta da operação, um sistema próprio pode reunir o trabalho em um lugar só.",
    fit: "Para empresas que precisam organizar uma operação ou transformar uma ideia em um produto digital com uma primeira versão bem definida.",
    examples: ["Gestão de clientes, agenda e fluxos internos", "Portais com acessos e permissões diferentes", "Plataformas SaaS e primeiras versões de produto", "Painéis para acompanhar a operação"],
    deliverables: ["Mapeamento dos fluxos e definição das prioridades", "Interface adaptada a computador e celular", "Desenvolvimento das regras, acessos e banco de dados", "Validação dos fluxos e preparação para publicação"],
    consideration: "Antes de construir, avaliamos se adaptar uma ferramenta existente resolve a necessidade. Um sistema próprio faz sentido quando as regras e os fluxos do negócio exigem mais controle.",
    project: "vilagi", evidence: "O Vilagi reúne pacientes, agenda, tratamentos, sessões e cobranças em uma plataforma de gestão para clínicas de estética.",
  },
  {
    slug: "aplicativos", name: "Aplicativos móveis", title: "Desenvolvimento de aplicativos sob medida",
    description: "Aplicativos móveis sob medida para conectar usuários, acompanhar atividades e levar seus serviços ao celular, com escopo e integrações definidos.",
    intro: "Um aplicativo faz sentido quando o celular é parte central da experiência: notificações, localização, acompanhamento de atividades e acesso frequente ao serviço.",
    fit: "Para negócios que precisam conectar pessoas em movimento, entregar uma experiência recorrente ou testar uma ideia de aplicativo.",
    examples: ["Aplicativos para clientes e equipes em campo", "Acompanhamento de rotas e atividades", "Comunicação e notificações", "Aplicativos conectados a um sistema de gestão"],
    deliverables: ["Definição das jornadas e da primeira versão", "Interface e desenvolvimento multiplataforma", "Integração com dados, serviços e notificações", "Testes dos fluxos e preparação para distribuição"],
    consideration: "Publicação em lojas, uso de localização, contas de desenvolvedor e requisitos dos dispositivos entram no planejamento. Se uma aplicação web atender melhor, essa alternativa também é avaliada.",
    project: "teco", evidence: "O TECO está em desenvolvimento para conectar motoristas, auxiliares e responsáveis, com rotas, check-in de alunos e acompanhamento por GPS.",
  },
  {
    slug: "automacoes-e-integracoes", name: "Automações e integrações", title: "Automação de processos e integração de sistemas",
    description: "Automação de processos e integração de sistemas para conectar ferramentas, reduzir tarefas manuais e organizar fluxos de informação.",
    intro: "Copiar dados entre ferramentas e repetir a mesma tarefa todos os dias consome tempo. Uma integração bem definida conecta as etapas e deixa claro o que acontece quando algo falha.",
    fit: "Para operações que dependem de tarefas repetitivas, distribuição de informações ou ferramentas que precisam conversar entre si.",
    examples: ["Integração entre sistemas e APIs", "Publicação e distribuição de conteúdo", "Notificações e lembretes automáticos", "Sincronização de cadastros e informações"],
    deliverables: ["Mapeamento da tarefa e das ferramentas envolvidas", "Verificação de APIs, permissões e limites", "Implementação do fluxo e tratamento de falhas", "Validação, registros de execução e orientação de uso"],
    consideration: "A viabilidade depende dos acessos e das APIs disponíveis. Custos de serviços externos, frequência de execução e manutenção são considerados na proposta.",
    project: "compreinapromo", evidence: "O CompreiNaPromo organiza ofertas e sua distribuição por canais como Telegram, com automações e links de afiliados.",
  },
];

export const processSteps = [
  { title: "Entender antes de propor", description: "Você explica a necessidade, quem vai usar e o que existe hoje. Identificamos o que precisa mudar e o que vale construir primeiro.", output: "Contexto e prioridades" },
  { title: "Definir o que será entregue", description: "A proposta organiza escopo, etapas, investimento e responsabilidades. Prazo e condições são combinados antes do desenvolvimento.", output: "Proposta com escopo definido" },
  { title: "Construir e validar por etapas", description: "Interface e funcionalidades são desenvolvidas em etapas, com validação dos fluxos para corrigir a direção durante o projeto.", output: "Entregas para avaliação" },
  { title: "Publicar e planejar a evolução", description: "Validamos os fluxos previstos e organizamos a entrada em operação. Hospedagem, suporte e próximas melhorias ficam definidos na contratação.", output: "Entrada em operação planejada" },
];

export const questions = [
  { question: "O que posso contratar?", answer: "Desenvolvimento de sistemas web, plataformas, aplicativos e automações sob medida. Os produtos próprios do portfólio mostram experiências de construção; seu projeto recebe um escopo específico." },
  { question: "Preciso chegar com tudo definido?", answer: "Não. Comece contando o problema, quem usará a solução e como ele é resolvido hoje. Isso ajuda a decidir se é melhor construir uma primeira versão, integrar ferramentas ou ajustar um sistema existente." },
  { question: "Quanto custa e quanto tempo leva?", answer: "Depende do escopo, das integrações e da complexidade dos fluxos. Depois de entender a necessidade, a proposta apresenta investimento, etapas e prazo. Não há um preço único que sirva para todos os projetos." },
  { question: "Posso começar com uma versão menor?", answer: "Sim. É possível definir uma primeira versão com os fluxos essenciais e deixar outras funcionalidades para etapas seguintes. O importante é estabelecer o que essa versão precisa resolver." },
  { question: "O que acontece depois da entrega?", answer: "Hospedagem, manutenção, suporte e evolução são combinados na proposta. Também ficam definidos os acessos, a documentação prevista e as condições sobre o código-fonte e a propriedade intelectual." },
];
