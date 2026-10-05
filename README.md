# ROCTIV — software sob medida

Site comercial em Next.js (App Router), TypeScript e Tailwind CSS v4.

## Desenvolvimento e validação

- `npm install` instala as dependências.
- `npm run dev` abre o ambiente local em http://localhost:3000.
- `npm run check` executa lint, build de produção e testes do HTML gerado.
- `npm start` serve a compilação de produção.

## Conteúdo

- `data/site.ts`: marca, domínio, e-mail, WhatsApp e navegação.
- `data/services.ts`: serviços, processo de contratação e perguntas frequentes. Os serviços geram páginas em /servicos/[slug].
- `data/projects.ts`: produtos próprios do portfólio e páginas em /produtos/[slug].
- `public/projects/`: logos e telas reais dos produtos.
- `lib/metadata.ts`: metadados e endereço canônico de cada página.

O formulário prepara a mensagem localmente e abre o WhatsApp para o visitante revisar e enviar. Não há envio automático, armazenamento de contatos nem backend de e-mail. Com JavaScript desativado, os links diretos de WhatsApp e e-mail continuam disponíveis.

## Publicação

Na Vercel, importe o repositório com preset Next.js e mantenha os comandos padrão. Não são necessárias variáveis de ambiente. Use o domínio definido em data/site.ts e siga os registros DNS exibidos pela Vercel.

Depois da publicação, valide a propriedade do domínio no Google Search Console e envie https://roctiv.com.br/sitemap.xml. Confira as páginas indexadas e acompanhe buscas e cliques. A configuração técnica facilita o rastreamento; posicionamento também depende de conteúdo útil, referências externas e concorrência.

Fontes: https://developers.google.com/search/docs/fundamentals/seo-starter-guide e https://vercel.com/docs/domains/set-up-custom-domain.

Nome profissional, biografia, fotos, depoimentos, resultados e informações legais devem ser publicados apenas com dados reais aprovados. Os projetos do portfólio são produtos próprios; o status de desenvolvimento é preservado.
