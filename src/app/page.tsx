import type { Metadata } from "next";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import Zones from "../components/home/Zones";
import Documents from "../components/home/Documents";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import GoogleMap from "../components/home/GoogleMap";
import StickyMobileBar from "../components/layout/StickyMobileBar";
import HomeFAQSchema from "../components/seo/HomeFAQSchema";

export const metadata: Metadata = {
  title: "Taxi Conventionné CPAM Toulouse | Transport Médical & Courses Privées — 0€ d'avance",
  description:
    "Taxi VSL conventionné CPAM à Toulouse. Transport médical (dialyse, chimiothérapie, ALD) tiers payant intégral. Aéroport Blagnac, Gare Matabiau, mariages. Disponible 24h/24 — 07 72 33 98 92.",
  alternates: {
    canonical: "https://www.taxi-31-toulouse.fr",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200">
      <HomeFAQSchema />

      {/* 1. Accroche visuelle + CTAs principaux */}
      <Hero />

      {/* 2. Nos deux services : médical & privé */}
      <Services />

      {/* 3. Le chauffeur : l'humain derrière le service */}
      <About />

      {/* 4. Preuve sociale — témoignages patients & clients */}
      <Testimonials />

      {/* 5. Zone d'intervention — SEO local */}
      <Zones />

      {/* 6. Documents nécessaires — éducation patient */}
      <Documents />

      {/* 7. Questions fréquentes — conversion & rich snippets */}
      <FAQ />

      {/* 8. Carte Google Maps — signal de confiance local */}
      <GoogleMap />

      {/* 9. Appel à l'action final */}
      <ContactCTA />

      {/* 10. Barre mobile persistante */}
      <StickyMobileBar />
    </main>
  );
}
