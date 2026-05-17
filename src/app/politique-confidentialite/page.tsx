import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles — Occitanie Médi Mobility.",
  robots: { index: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors text-sm">
          <ArrowLeft size={18} /> Retour à l'accueil
        </Link>

        <h1 className="text-3xl font-black text-slate-900 mb-2">Politique de Confidentialité</h1>
        <p className="text-slate-500 text-sm mb-10">Dernière mise à jour : janvier 2025</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-10 text-sm text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">1. Responsable du traitement</h2>
            <p>OCCITANIE MEDI MOBILITY — SASU, SIREN 994 307 486 — 6 rue Buissonnière Bat A, 31140 Fonbeauzard. Contact : contact@taxi-31-toulouse.fr</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">2. Données collectées</h2>
            <ul className="space-y-2 pl-4 border-l border-slate-100">
              <li><strong>Données de contact :</strong> nom, prénom, numéro de téléphone, adresse email.</li>
              <li><strong>Données de transport :</strong> adresse de départ et d'arrivée, date et heure du trajet.</li>
              <li><strong>Données médicales (transport conventionné uniquement) :</strong> numéro de sécurité sociale, informations ALD nécessaires à la télétransmission CPAM. Ces données sont traitées avec une confidentialité renforcée.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">3. Finalités du traitement</h2>
            <ul className="space-y-1.5 pl-4 border-l border-slate-100">
              <li>Gestion et exécution de votre réservation de transport</li>
              <li>Facturation et télétransmission à la CPAM (tiers payant)</li>
              <li>Communication liée à votre course (confirmation, rappel)</li>
              <li>Amélioration de nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">4. Base légale</h2>
            <p>Le traitement de vos données repose sur l'exécution du contrat de transport et, pour les données médicales, sur votre consentement explicite et les obligations légales liées à la convention CPAM.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">5. Partage des données</h2>
            <p>Vos données ne sont jamais vendues. Elles peuvent être transmises à :</p>
            <ul className="mt-2 space-y-1 pl-4 border-l border-slate-100">
              <li>La CPAM / Assurance Maladie (uniquement pour le tiers payant)</li>
              <li>Les établissements de soins désignés dans votre prescription</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">6. Durée de conservation</h2>
            <p>Vos données sont conservées pendant 5 ans à compter de votre dernière course, durée légale applicable à la facturation.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, suppression, portabilité, opposition et limitation du traitement. Pour les exercer, contactez-nous à <strong>contact@taxi-31-toulouse.fr</strong>.</p>
            <p className="mt-3">Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">8. Cookies</h2>
            <p>Ce site utilise uniquement des cookies techniques indispensables à son fonctionnement et des cookies de mesure d'audience anonymisés (Google Analytics). Aucun cookie publicitaire de ciblage n'est déposé sans votre consentement.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
