# Publicar a ROCTIV: Vercel, Registro.br e Google

## 1. Publicar a branch main

1. Importe fuentees/Roctiv em https://vercel.com/new, com preset Next.js.
2. Se o projeto já existe, abra Settings → Environments → Production → Branch Tracking, selecione main e salve.
3. Faça um deployment da versão atual da main. Se o deployment já apareceu como Preview, promova-o a Production pelo painel.
4. Confirme que o deployment ficou Ready e que a URL vercel.app abre o site.

O projeto usa os comandos padrão do Next.js e não depende de variáveis de ambiente.

## 2. Adicionar os domínios na Vercel

Em Settings → Domains, adicione roctiv.com.br e www.roctiv.com.br.

Use roctiv.com.br como endereço principal. Configure www.roctiv.com.br para redirecionar ao domínio sem www, pois os endereços canônicos do site usam https://roctiv.com.br.

Copie os valores DNS exibidos pela Vercel para este projeto. O endereço IP e o destino CNAME devem vir do painel, não de um exemplo antigo.

## 3. Configurar no Registro.br

O domínio está usando servidores d.sec.dns.br e e.sec.dns.br, consultados em 5 de outubro de 2026. A configuração pode ser feita na zona DNS do Registro.br.

1. Entre em https://registro.br e selecione roctiv.com.br.
2. Na área DNS, abra Configurar zona DNS (ou Editar zona). Se aparecer o modo básico, selecione Modo avançado.
3. Crie ou ajuste as entradas abaixo e salve:

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | Em branco, para a raiz roctiv.com.br | IP informado pela Vercel |
| CNAME | www | Destino CNAME informado pela Vercel |

Se a Vercel solicitar uma entrada TXT para verificar o domínio, adicione exatamente o nome e o valor exibidos.

Mantenha os registros de e-mail existentes, incluindo MX e TXT de SPF/DKIM/DMARC. Não é necessário trocar os servidores DNS para publicar por A e CNAME.

Volte à Vercel e aguarde Valid Configuration. Confira https://roctiv.com.br e https://www.roctiv.com.br. A Vercel emite o certificado HTTPS após validar a configuração.

## 4. Cadastrar no Google Search Console

1. Abra https://search.google.com/search-console.
2. Adicione uma propriedade do tipo Domínio: roctiv.com.br, sem https nem www.
3. Copie a entrada TXT de verificação gerada pelo Google.
4. No Registro.br, adicione uma nova entrada TXT na raiz, com o valor google-site-verification fornecido. Preserve as outras entradas TXT.
5. Salve e volte ao Google para verificar a propriedade.
6. Em Sitemaps, envie https://roctiv.com.br/sitemap.xml.
7. Use Inspeção de URL para conferir a homepage e as páginas de serviços. Se estiverem acessíveis ao Google e ainda não indexadas, solicite indexação.

Páginas prioritárias:

- https://roctiv.com.br/
- https://roctiv.com.br/servicos/sistemas-web
- https://roctiv.com.br/servicos/aplicativos
- https://roctiv.com.br/servicos/automacoes-e-integracoes

## 5. Acompanhar a presença nas buscas

Confira os relatórios de indexação e desempenho do Search Console: páginas indexadas, buscas, impressões e cliques. Conteúdo deve responder dúvidas reais dos compradores e mostrar trabalho verificável. Publicar e enviar o sitemap ajuda a descoberta; não garante indexação nem uma posição específica.

Fontes oficiais:

- [Domínios na Vercel](https://vercel.com/docs/domains/set-up-custom-domain)
- [Branch de produção](https://vercel.com/kb/guide/can-i-use-a-non-default-branch-for-production)
- [DNS autoritativo e painel Registro.br — NIC.br](https://semanacap.bcp.nic.br/files/apresentacao/arquivo/2153/DNS%20Autoritativo%20%281%29.pdf)
- [Verificação no Google](https://support.google.com/webmasters/answer/9008080?hl=pt-BR)
- [Sitemaps no Search Console](https://support.google.com/webmasters/answer/7451001?hl=pt-BR)
- [Rastreamento e indexação](https://developers.google.com/search/help/crawling-index-faq)
