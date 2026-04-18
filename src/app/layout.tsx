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

  // ✅ CORRIGÉ : couvre toute l'Occitanie (cohérent avec votre zone de service réelle)
  description: "Taxi conventionné CPAM en Occitanie. Transport médical assis (VSL) depuis le 31, l'Ariège, le Tarn, les Hautes-Pyrénées vers les hôpitaux de Toulouse. Tiers payant intégral — 0€ d'avance.",

  // ❌ SUPPRIMÉ : balise keywords — ignorée par Google depuis 2009
  // Elle n'apporte aucun bénéfice et révèle votre stratégie à vos concurrents

  // ✅ E-E-A-T : Crédibilité de l'auteur (Experience, Expertise, Authoritativeness, Trust)
  authors: [{ name: "OCCITANIE MEDI MOBILITY" }],
  // ✅ CORRIGÉ : nom de société à la place du nom de personne (RGPD + cohérence)
  creator: "OCCITANIE MEDI MOBILITY",
  publisher: "OCCITANIE MEDI MOBILITY",

  // ✅ Contrôle fin des robots Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',  // Permet les grandes images dans Google Images
      'max-snippet': -1,              // Permet les extraits longs dans les résultats
    },
  },

  // ❌ SUPPRIMÉ : canonical: '/' dans le layout global
  // C'était l'erreur la plus grave — cela disait à Google que TOUTES vos pages
  // (Blagnac, Rangueil, Aéroport...) étaient des doublons de la homepage.
  // → Définissez le canonical individuellement dans chaque generateMetadata()
  // Exemple dans une page ville :
  //   alternates: { canonical: 'https://www.taxi-31-toulouse.fr/blog/taxi-conventionne-vsl-blagnac' }

  openGraph: {
    title: 'Taxi 31 Toulouse - Transport Médical Conventionné CPAM',
    description: 'Taxi VSL conventionné en Occitanie. Prise en charge 100% CPAM, Tiers Payant intégral, trajets vers Purpan, Rangueil, Oncopole et tous les hôpitaux de Toulouse.',
    url: 'https://www.taxi-31-toulouse.fr',
    siteName: 'Taxi 31 Toulouse',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // ⚠️ Vérifiez que ce fichier existe dans /public
        width: 1200,
        height: 630,
        alt: 'Taxi Conventionné CPAM Toulouse - OCCITANIE MEDI MOBILITY',
      },
    ],
  },

  // ✅ AJOUTÉ : Twitter/X Card — manquait dans la version précédente
  // Sans ça, les partages sur X affichent un aperçu générique
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi 31 Toulouse - Transport Médical Conventionné CPAM',
    description: 'Taxi VSL conventionné en Occitanie. Tiers Payant intégral, 0€ d\'avance. Disponible 24h/24.',
    images: ['/og-image.jpg'], // ⚠️ Même image que OpenGraph
  },

  // ✅ Balises géographiques (signal local complémentaire)
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
        {/* Google Ads — chargé après interaction pour préserver les Core Web Vitals */}
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

        {/*
          ✅ CORRIGÉ : LocalBusinessSchema sans FAQPage (présent sur toutes les pages)
          Le FAQPage schema doit être importé UNIQUEMENT dans app/page.tsx
          car il représente les questions de la homepage uniquement.

          Dans app/page.tsx, ajoutez :
            import HomeFAQSchema from "@/components/seo/HomeFAQSchema";
            ...
            <HomeFAQSchema />
        */}
        <LocalBusinessSchema />

        <Footer />
      </body>
    </html>
  );
}