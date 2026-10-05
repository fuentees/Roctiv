import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servicos", "/produtos", "/sobre", "/contato", ...projects.map(project => "/produtos/" + project.slug), ...services.map(service => "/servicos/" + service.slug)].map(path => ({ url: site.url + path }));
}
