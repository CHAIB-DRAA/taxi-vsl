import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import AboutSection from "../app/a-propos/page";
import GoogleTrust from "../components/home/GoogleTrust";   
import Testimonials from "../components/home/Testimonials";
import GoogleMap from "../components/home/GoogleMap";       
import Zones from "../components/home/Zones";
import Documents from "../components/home/Documents";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import StickyMobileBar from "../components/layout/StickyMobileBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 text-slate-200">
      {/* 1. L'accroche visuelle */}
      <Hero />

      {/* 2. Ce que tu proposes (Médical / Privé) */}
      <Services />
      
      {/* 3. L'humain : Qui est le chauffeur ? */}
      <AboutSection />
      
      {/* 4. Le sceau de confiance Google (Preuve immédiate) */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-xl mx-auto px-4">
          <GoogleTrust />
        </div>
      </section>
      
      {/* 5. La preuve sociale : Les récits des passagers */}
      <Testimonials />

      {/* 6. L'ancrage local : Ta zone d'intervention sur la carte */}
      <GoogleMap />

      {/* 7. SEO & Informations pratiques */}
      <Zones />      {/* Liste des villes (Muret, Colomiers, etc.) */}
      <Documents />   {/* Papiers pour le CPAM */}
      <FAQ />        {/* Questions fréquentes */}
      
      {/* 8. L'appel à l'action final */}
      <ContactCTA />
      
      {/* 9. Navigation mobile persistante */}
      <StickyMobileBar />
    </main>
  );
}