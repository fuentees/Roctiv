import Hero from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/ProductsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import LabsSection from "@/components/sections/LabsSection";
import ContactSection from "@/components/sections/ContactSection";
import { site, labsEnabled } from "@/data/site";

export const metadata = { alternates: { canonical: site.url } };

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ExpertiseSection />
      <AboutSection />
      <PrinciplesSection />
      {labsEnabled && <LabsSection />}
      <ContactSection />
    </>
  );
}
