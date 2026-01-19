import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; 
import WhatsAppButton from "../components/ui/WhatsAppButton"; 
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taxi-31-toulouse.fr'), 
  
  title: {
    default: "Taxi 31 Toulouse | Conventionné CPAM & Transport Médical",
    template: "%s | Taxi 31 Toulouse"
  },
  description: "Taxi conventionné CPAM à Toulouse et Haute-Garonne (31). Transport médical assis (TAP) vers hôpitaux et cliniques. Tiers payant intégral avec OCCITANIE MEDI MOBILITY.",
  
  // ✅ AJOUT STRATÉGIQUE : Mots-clés sémantiques
  keywords: [
    "Taxi conventionné Toulouse", 
    "VSL Haute-Garonne", 
    "Transport médical assis", 
    "Taxi CPAM Muret", 
    "Taxi Blagnac Aéroport", 
    "Taxi Colomiers", 
    "Tiers payant taxi"
  ],

  // ✅ AJOUT STRATÉGIQUE : Crédibilité (EEAT)
  authors: [{ name: "OCCITANIE MEDI MOBILITY" }],
  creator: "M. Chaib Draa",
  publisher: "OCCITANIE MEDI MOBILITY",

  // ✅ AJOUT STRATÉGIQUE : Contrôle total des robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/', 
  },

  openGraph: {
    title: 'Taxi 31 Toulouse - Transport Médical Conventionné',
    description: 'Votre taxi VSL conventionné en Haute-Garonne avec OCCITANIE MEDI MOBILITY. Prise en charge 100% et Tiers payant.',
    url: 'https://www.taxi-31-toulouse.fr',
    siteName: 'Taxi 31 Toulouse',
    locale: 'fr_FR',
    type: 'website',
    // Si tu as une image de partage (ex: photo du 5008), mets-la dans /public/og-image.jpg
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Taxi Conventionné Toulouse - OCCITANIE MEDI MOBILITY',
      },
    ],
  },

  // ✅ AJOUT STRATÉGIQUE : Balises Géo pour le SEO Local (Invisible mais puissant)
  other: {
    "geo.region": "FR-OCC",
    "geo.placename": "Toulouse",
    "geo.position": "43.6047;1.4442",
    "ICBM": "43.6047, 1.4442"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Google Tag (gtag.js) - Script Pub */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17844653906"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17844653906');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        
        {/* Bouton flottant WhatsApp toujours visible */}
        <WhatsAppButton /> 
        
        {/* Les données structurées (Schema.org) injectées sur toutes les pages */}
        <LocalBusinessSchema />
        
        <Footer />
      </body>
    </html>
  );
}