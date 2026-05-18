import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site taxi-31-toulouse.fr — Occitanie Médi Mobility, SASU, SIREN 994 307 486.",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors text-sm">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 className="text-3xl font-black text-slate-900 mb-2">Mentions Légales</h1>
        <p className="text-slate-500 text-sm mb-10">Dernière mise à jour : janvier 2025</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-10 text-sm text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">1. Éditeur du site</h2>
            <p>Le site <strong>taxi-31-toulouse.fr</strong> est édité par :</p>
            <ul className="mt-3 space-y-1.5 pl-4 border-l border-slate-100">
              <li><strong>Raison sociale :</strong> OCCITANIE MEDI MOBILITY</li>
              <li><strong>Forme juridique :</strong> SASU</li>
              <li><strong>Capital social :</strong> 100,00 €</li>
              <li><strong>Siège social :</strong> 6 rue Buissonnière Bat A, 31140 Fonbeauzard</li>
              <li><strong>SIREN :</strong> 994 307 486</li>
              <li><strong>RCS :</strong> 994 307 486 R.C.S. Toulouse</li>
              <li><strong>Responsable de publication :</strong> M. Chaib Draa Laid</li>
              <li><strong>Email :</strong> contact@taxi-31-toulouse.fr</li>
              <li><strong>Téléphone :</strong> 07 72 33 98 92</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">2. Hébergement</h2>
            <p>Ce site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA — vercel.com</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">3. Protection des données (RGPD)</h2>
            <p>Dans le cadre de la réservation de transport de voyageurs (taxi et VSL), <strong>OCCITANIE MEDI MOBILITY</strong> collecte des données personnelles strictement nécessaires : nom, téléphone, adresse de prise en charge, et le cas échéant des informations de santé aux fins de télétransmission CPAM (Tiers Payant).</p>
            <p className="mt-3"><strong>Ces données ne sont jamais vendues à des tiers.</strong></p>
            <p className="mt-3">Conformément au RGPD et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et de suppression. Pour l'exercer : contact@taxi-31-toulouse.fr ou par courrier au siège social.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">4. Médiation à la consommation</h2>
            <p>En cas de litige non résolu à l'amiable, vous pouvez contacter le médiateur compétent pour les artisans taxis conformément aux articles L.616-1 et R.616-1 du Code de la consommation.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">5. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, photos, structure) est protégé par le droit d'auteur. Toute reproduction sans autorisation écrite est interdite.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
