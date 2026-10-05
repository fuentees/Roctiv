import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import StructuredData from "@/components/ui/StructuredData";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Desenvolvimento de software sob medida", site.description, "/");
export default function Home() {
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Organization", "@id": site.url + "/#organization", name: site.name, url: site.url, email: site.email, telephone: "+" + site.whatsapp.number, description: site.description }} />
    <Hero /><ServicesSection /><PortfolioSection /><ProcessSection /><FaqSection /><ContactSection />
  </>;
}
