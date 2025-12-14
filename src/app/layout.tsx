import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 Avez-vous bien ces deux imports ?
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; 
import WhatsAppButton from "../components/ui/WhatsAppButton"; // Import
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema"; // Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://taxi-occitanie.fr'), // Indispensable pour les images de partage
  title: {
    default: "Taxi Occitanie | Conventionné CPAM & VSL Toulouse",
    template: "%s | Taxi Occitanie" // Vos titres de blog deviendront "Taxi Muret | Taxi Occitanie"
  },
  description: "Transport médical assis (TAP) et privé en Haute-Garonne. Réservez votre taxi conventionné vers hôpitaux, gares et aéroports. Tiers payant intégral.",
  openGraph: {
    title: 'Taxi Occitanie - Transport Médical & Privé',
    description: 'Votre taxi conventionné CPAM en Haute-Garonne. Tiers payant accepté.',
    url: 'https://taxi-occitanie.fr',
    siteName: 'Taxi Occitanie',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        
        {children}  {/* <-- Le contenu de la page (Hero, Services, etc.) */}
        <WhatsAppButton /> {/* Le bouton flottant se met ici */}
        <Footer />  {/* 👈 LE FOOTER DOIT ÊTRE ICI */}
        <LocalBusinessSchema />
      </body>
    </html>
  );
}