import Link from "next/link";
import StructuredData from "./StructuredData";
import { site } from "@/data/site";

interface Crumb { label: string; href: string }
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: new URL(item.href, site.url).toString() })) }} />
    <nav aria-label="Caminho da página" className="mb-10 text-sm text-fg-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">{items.map((item,index) => <li key={item.href} className="flex min-w-0 items-center gap-2">{index > 0 && <span aria-hidden="true" className="text-fg-subtle">/</span>}{index === items.length - 1 ? <span aria-current="page" className="break-words text-fg">{item.label}</span> : <Link href={item.href} className="hover:text-accent">{item.label}</Link>}</li>)}</ol>
    </nav>
  </>;
}
