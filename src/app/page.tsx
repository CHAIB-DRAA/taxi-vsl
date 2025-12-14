import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Zones from "../components/home/Zones"; // Nouveau
import Documents from "../components/home/Documents";
import FAQ from "../components/home/FAQ"; // Nouveau
import ContactCTA from "../components/home/ContactCTA";
import BookingForm from "../components/home/BookingForm"; // Nouveau Import
import StickyMobileBar from "../components/layout/StickyMobileBar"; // Import Nouveau

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Hero />
      <Services />
      <BookingForm />

      <Zones />      {/* Ajouté ici pour le SEO Local */}
      <Documents />
      <FAQ />        {/* Ajouté ici pour le SEO Sémantique */}
      <ContactCTA />
      <StickyMobileBar />
    </main>
  );
}