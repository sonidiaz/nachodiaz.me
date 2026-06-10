import Hero from "@/components/Hero/Hero";
import ServiciosSection from "@/components/ServiciosSection/ServiciosSection";
import ProyectosSection from "@/components/ProyectosSection/ProyectosSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PropositoSection from "@/components/PropositoSection/PropositoSection";
import SobreSection from "@/components/SobreSection/SobreSection";
import ContactoSection from "@/components/ContactoSection/ContactoSection";
import Footer from "@/components/Footer/Footer";
import RevealProvider from "@/components/RevealProvider/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <Hero />
      <ServiciosSection />
      <ProyectosSection />
      <CtaBanner />
      <PropositoSection />
      <SobreSection />
      <ContactoSection />
      <Footer />
    </RevealProvider>
  );
}
