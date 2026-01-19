import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Importation indispensable pour Google Ads
import { Analytics } from "@vercel/analytics/next";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Google Tag (gtag.js) - Stratégie optimisée pour la vitesse */}
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
        <WhatsAppButton /> 
        <LocalBusinessSchema />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}