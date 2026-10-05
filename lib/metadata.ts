import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title + " — " + site.name;
  return {
    title, description, alternates: { canonical: url },
    openGraph: { type: "website", locale: "pt_BR", siteName: site.name, url, title: fullTitle, description },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
