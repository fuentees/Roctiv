# ROCTIV — site institucional

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde editar o quê

- **Produtos** — `data/projects.ts`. Cada objeto vira uma página em `/produtos/[slug]` automaticamente (via `generateStaticParams`). O nome de um produto é só o campo `name` desse arquivo — trocar ali já atualiza o site inteiro.
- **Screenshots reais** — coloque as imagens em `public/projects/<slug>/` e adicione os caminhos no array `images` do produto correspondente em `data/projects.ts`. Enquanto `images` estiver vazio, o site usa um placeholder neutro (`components/projects/ProjectPlaceholder.tsx`).
- **Stack / expertise** — `data/expertise.ts` (áreas de atuação e o mapeamento "tecnologia → usada em qual produto", usado no tooltip de hover da seção Expertise).
- **Princípios** — `data/principles.ts`.
- **Dados da marca** (nome, domínio, e-mail, links de navegação) — `data/site.ts`. `site.legal` está reservado para quando a razão social e o CNPJ forem formalizados; hoje fica `null` e não aparece em lugar nenhum publicamente.
- **ROCTIV Labs** — a seção existe (`components/sections/LabsSection.tsx`) mas fica desativada por `labsEnabled` em `data/site.ts` até haver experimentos reais para mostrar.

## SEO

Sitemap, robots.txt, manifest e a imagem de Open Graph são gerados dinamicamente (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`) a partir dos mesmos dados de `data/`. Não precisam de manutenção manual ao adicionar produtos.

## Validação antes de publicar

Execute `npm run check` para verificar lint, compilar para produção e testar o HTML gerado (SEO, conteúdo acessível sem JavaScript e navegação interna). A mesma validação roda no GitHub Actions.

Os metadados das páginas internas ficam em `lib/metadata.ts`. O contato abre o aplicativo de e-mail com o assunto preenchido; não há formulário nem serviço de envio configurado.

Informações de equipe, depoimentos, resultados e dados legais devem ser adicionados apenas quando houver dados reais aprovados.
