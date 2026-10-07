import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const routes = ["/servicos", "/servicos/sistemas-web", "/servicos/aplicativos", "/servicos/automacoes-e-integracoes", "/", "/sobre", "/contato", "/produtos", "/produtos/vilagi", "/produtos/teco", "/produtos/compreinapromo"];
const siteUrl = "https://www.roctiv.com.br";
const builtPath = route => ".next/server/app/" + (route === "/" ? "index" : route.slice(1)) + ".html";
for (const route of routes) {
  test("HTML de produção: " + route, async () => {
    const html = await readFile(builtPath(route), "utf8");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.equal(canonical?.[1], route === "/" ? siteUrl : siteUrl + route);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, "Título ausente em " + route);
    assert.match(title, / — ROCTIV$/);
    assert.equal((title.match(/ — ROCTIV/g) ?? []).length, 1);
    assert.equal((html.match(/<h1(?: |>|\n)/g) ?? []).length, 1);
    assert.match(html, /<html[^>]*lang="pt-BR"/);
    assert.match(html, /id="conteudo"/);
    assert.doesNotMatch(html, /opacity:0;transform:translateY\(16px\)/);
    assert.match(html, /<meta property="og:title" content="[^"]+"/);
    assert.equal(html.match(/<meta property="og:url" content="([^"]+)"/)?.[1], canonical?.[1]);
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
    const payload = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(payload, "Dados estruturados ausentes em " + route);
    const data = JSON.parse(payload[1]);
    assert.equal(data["@type"], "Service");
    assert.equal(data.url, siteUrl + route);
  }
});

test("Página inicial identifica a marca e o site para o Google", async () => {
  const html = await readFile(builtPath("/"), "utf8");
  const entities = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const websites = entities.filter(entity => entity["@type"] === "WebSite");
  assert.equal(websites.length, 1);
  assert.equal(websites[0].name, "ROCTIV");
  assert.equal(websites[0].url, siteUrl);
  assert.equal(websites[0].inLanguage, "pt-BR");
  assert.equal(websites[0].publisher["@id"], entities.find(entity => entity["@type"] === "Organization")["@id"]);
});

test("Sitemap e robots usam o domínio publicado e cobrem as páginas canônicas", async () => {
  const sitemap = await readFile(".next/server/app/sitemap.xml.body", "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(urls.sort(), routes.map(route => route === "/" ? siteUrl : siteUrl + route).sort());
  const robots = await readFile(".next/server/app/robots.txt.body", "utf8");
  assert.match(robots, /User-Agent: \*\nAllow: \//);
  assert.ok(robots.includes("Sitemap: " + siteUrl + "/sitemap.xml"));
  assert.doesNotMatch(robots, /Disallow: \//);
});
