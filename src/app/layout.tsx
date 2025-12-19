import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 👇 Assure-toi que ces fichiers existent bien dans tes dossiers
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; 
import WhatsAppButton from "../components/ui/WhatsAppButton"; 
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema"; 

const inter = Inter({ subsets: ["latin"] });

// 🚀 CONFIGURATION SEO PRINCIPALE
export const metadata: Metadata = {
  // C'est l'URL officielle de ton site (très important pour le SEO)
  metadataBase: new URL('https://taxi-31-toulouse.fr'), 
  
  title: {
    default: "Taxi 31 Toulouse | Conventionné CPAM & Transport Médical",
    template: "%s | Taxi 31 Toulouse" // Les autres pages s'appelleront "Contact | Taxi 31 Toulouse"
  },
  
  description: "Taxi conventionné CPAM à Toulouse et Haute-Garonne (31). Transport médical assis (TAP) vers hôpitaux et cliniques. Tiers payant intégral. Réservez au 07 72 33 98 92.",
  
  openGraph: {
    title: 'Taxi 31 Toulouse - Transport Médical Conventionné',
    description: 'Votre taxi VSL conventionné en Haute-Garonne. Prise en charge 100% et Tiers payant. Déplacement toutes distances.',
    url: 'https://taxi-31-toulouse.fr',
    siteName: 'Taxi 31 Toulouse',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg', // Pense à ajouter une image nommée ainsi dans ton dossier public plus tard
        width: 1200,
        height: 630,
        alt: 'Taxi 31 Toulouse Transport Médical',
      },
    ],
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
        {/* Barre de navigation en haut */}
        <Navbar />
        
        {/* Contenu de la page */}
        {children}
        
        {/* Boutons et Scripts flottants */}
        <WhatsAppButton /> 
        <LocalBusinessSchema />
        
        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  );
}