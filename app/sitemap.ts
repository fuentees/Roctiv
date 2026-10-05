import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/produtos", "/sobre", "/contato"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  const productRoutes = projects.map((project) => ({
    url: `${site.url}/produtos/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
