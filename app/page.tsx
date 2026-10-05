import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Desenvolvimento de software sob medida", site.description, "/");
export default function Home() {
  return <>
    <Hero /><ServicesSection /><PortfolioSection /><ProcessSection /><FaqSection /><ContactSection />
  </>;
}
