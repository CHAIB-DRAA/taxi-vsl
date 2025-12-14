import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales - Taxi Occitanie",
  description: "Informations légales, confidentialité et conditions d'utilisation.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bouton Retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Mentions Légales
        </h1>
        <p className="text-slate-500 mb-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 space-y-12">
          
          {/* Section 1 : Éditeur */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-taxi-500 pl-4">
              1. Éditeur du site
            </h2>
            <div className="text-slate-600 space-y-2">
              <p>Le site <strong>Taxi Occitanie</strong> est édité par :</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Raison sociale :</strong> [VOTRE NOM OU NOM DE SOCIÉTÉ]</li>
                <li><strong>Statut Juridique :</strong> [Ex: Artisan / Auto-entrepreneur / SASU]</li>
                <li><strong>Adresse :</strong> [VOTRE ADRESSE COMPLÈTE À AUCAMVILLE]</li>
                <li><strong>SIRET :</strong> [VOTRE NUMÉRO SIRET]</li>
                <li><strong>Numéro ADS (Autorisation de Stationnement) :</strong> [NUMÉRO DE LICENCE TAXI] (si applicable)</li>
                <li><strong>Responsable de publication :</strong> [VOTRE NOM]</li>
                <li><strong>Email :</strong> contact@taxi-occitanie.fr</li>
                <li><strong>Téléphone :</strong> 06 00 00 00 00</li>
              </ul>
            </div>
          </section>

          {/* Section 2 : Hébergeur */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-taxi-500 pl-4">
              2. Hébergement
            </h2>
            <p className="text-slate-600">
              Ce site est hébergé par la société <strong>Vercel Inc.</strong><br/>
              Adresse : 440 N Barranca Ave #4133 Covina, CA 91723, USA.<br/>
              Site web : https://vercel.com
            </p>
          </section>

          {/* Section 3 : RGPD & Données */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-taxi-500 pl-4">
              3. Protection des données (RGPD)
            </h2>
            <div className="text-slate-600 space-y-4">
              <p>
                Dans le cadre de la réservation de transport médical, nous sommes amenés à collecter des données personnelles (Nom, Téléphone, Adresses, Informations de santé strictes nécessaires au transport).
              </p>
              <p>
                <strong>Finalité :</strong> Ces données servent uniquement à la gestion de votre course et à la télétransmission à la CPAM (si tiers payant). Elles ne sont jamais vendues à des tiers.
              </p>
              <p>
                <strong>Vos droits :</strong> Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous par email.
              </p>
            </div>
          </section>

          {/* Section 4 : Médiation */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-taxi-500 pl-4">
              4. Médiation à la consommation
            </h2>
            <p className="text-slate-600">
              Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation. En cas de litige, vous pouvez déposer votre réclamation sur le site du médiateur compétent.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}