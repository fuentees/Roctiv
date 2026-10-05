import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const routes = ["/servicos", "/servicos/sistemas-web", "/servicos/aplicativos", "/servicos/automacoes-e-integracoes", "/", "/sobre", "/contato", "/produtos", "/produtos/vilagi", "/produtos/teco", "/produtos/compreinapromo"];
const builtPath = route => ".next/server/app/" + (route === "/" ? "index" : route.slice(1)) + ".html";
for (const route of routes) {
  test("HTML de produção: " + route, async () => {
    const html = await readFile(builtPath(route), "utf8");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.equal(canonical?.[1], route === "/" ? "https://roctiv.com.br" : "https://roctiv.com.br" + route);
    assert.equal((html.match(/<h1(?: |>|\n)/g) ?? []).length, 1);
    assert.match(html, /<html[^>]*lang="pt-BR"/);
    assert.match(html, /id="conteudo"/);
    assert.doesNotMatch(html, /opacity:0;transform:translateY\(16px\)/);
    assert.match(html, /<meta property="og:title" content="[^"]+"/);
    if (route !== "/") assert.match(html, new RegExp('<meta property="og:url" content="https://roctiv.com.br' + route + '"'));
    for (const [, href] of html.matchAll(/<a[^>]*href="([^"#]+)"/g)) {
      if (href.startsWith("/") && !href.startsWith("//")) {
        const path = href.split(/[?#]/)[0];
        assert.ok(routes.includes(path), "Link interno sem destino: " + href);
      }
    }
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/projects\/[^"?]+)"/g)) {
      await access("public" + asset);
    }
  });
}

test("Produtos têm um próximo passo de contato", async () => {
  for (const route of routes.filter(route => route.startsWith("/produtos/"))) {
    const html = await readFile(builtPath(route), "utf8");
    assert.match(html, /Solicitar demonstração/);
    assert.match(html, /https:\/\/wa.me\/5511964563628\?text=/);
  }
});

 test("Serviços apresentam contato comercial e dados estruturados válidos", async () => {
  for (const route of routes.filter(route => route.startsWith("/servicos/"))) {
    const html = await readFile(builtPath(route), "utf8");
    assert.match(html, /Conversar sobre este serviço/);
    const payloads = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const data = payloads.find(item => item["@type"] === "Service");
    assert.ok(data, "Dados do serviço ausentes em " + route);
    assert.equal(data.url, "https://roctiv.com.br" + route);
  }
});

 test("Sitemap contém todas as páginas canônicas", async () => {
  const xml = await readFile(".next/server/app/sitemap.xml.body", "utf8");
  for (const route of routes) assert.ok(xml.includes("<loc>https://roctiv.com.br" + (route === "/" ? "" : route) + "</loc>"), "Página ausente do sitemap: " + route);
});

test("Navegação estruturada identifica a página atual", async () => {
  for (const route of routes.filter(route => /\/(servicos|produtos)\//.test(route))) {
    const html = await readFile(builtPath(route), "utf8");
    const payloads = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const breadcrumb = payloads.find(item => item["@type"] === "BreadcrumbList");
    assert.ok(breadcrumb, "Breadcrumb ausente em " + route);
    assert.equal(breadcrumb.itemListElement.at(-1).item, "https://roctiv.com.br" + route);
    assert.match(html, /aria-current="page"/);
  }
});
