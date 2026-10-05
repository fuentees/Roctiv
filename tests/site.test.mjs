import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const routes = ["/", "/sobre", "/contato", "/produtos", "/produtos/vilagi", "/produtos/teco", "/produtos/compreinapromo"];
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
    assert.match(html, /mailto:contato@roctiv.com.br\?subject=/);
  }
});
