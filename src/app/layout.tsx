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
  metadataBase: new URL("https://www.taxi-31-toulouse.fr"),

  title: {
    default: "Taxi Conventionné CPAM Toulouse | Transport Médical & Courses Privées",
    template: "%s | Taxi 31 Toulouse — Occitanie Médi Mobility",
  },

  description:
    "Taxi VSL conventionné CPAM à Toulouse et en Occitanie. Transport médical (dialyse, chimiothérapie, ALD) avec tiers payant intégral — 0€ d'avance. Courses privées : Aéroport Blagnac, Gare Matabiau, événements. Disponible 24h/24.",

  authors: [{ name: "OCCITANIE MEDI MOBILITY" }],
  creator: "OCCITANIE MEDI MOBILITY",
  publisher: "OCCITANIE MEDI MOBILITY",

  verification: {
    google: "ETCwhGEYjo9LoL4TK82q9VWvXsOc5TTg8gg0WJzOZI",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
    description:
      "Transport médical VSL remboursé CPAM (dialyse, chimio, ALD) et courses privées (aéroport, gare, mariages) à Toulouse et en Occitanie. Tiers payant intégral — 0€ d'avance.",
    url: "https://www.taxi-31-toulouse.fr",
    siteName: "Taxi 31 Toulouse",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
    description:
      "Transport médical VSL et courses privées à Toulouse. Tiers payant intégral, 0€ d'avance. Disponible 24h/24.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.region": "FR-OCC",
    "geo.placename": "Toulouse",
    "geo.position": "43.6047;1.4442",
    ICBM: "43.6047, 1.4442",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
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
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
