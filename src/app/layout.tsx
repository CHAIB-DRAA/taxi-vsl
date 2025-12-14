import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 Avez-vous bien ces deux imports ?
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; 
import WhatsAppButton from "../components/ui/WhatsAppButton"; // Import
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi Occitanie",
  description: "Transport médical et privé",
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
      </body>
    </html>
  );
}