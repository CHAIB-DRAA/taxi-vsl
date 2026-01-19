import Link from 'next/link';
import { FileText, CreditCard, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Administratif Simplifié
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-4 mb-4">
            Tiers Payant : <span className="text-blue-600">Zéro avance de frais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pour être <Link href="/blog/remboursement-transport-ald-100-tiers-payant" className="text-blue-700 font-bold underline hover:text-blue-800 decoration-2 underline-offset-2">remboursé à 100% par la Sécurité Sociale</Link> sans rien payer au chauffeur, 
            préparez simplement ces deux documents obligatoires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Carte Prescription */}
          <div className="relative group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
            <div className="absolute top-4 right-4">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Obligatoire</span>
            </div>
            <div className="bg-blue-100 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Bon de Transport</h3>
            <p className="text-slate-600 mb-4">
              Appelé aussi "Prescription Médicale". Elle doit être remplie par votre médecin traitant ou spécialiste.
            </p>
            <ul className="text-sm text-left w-full space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
               <li className="flex items-start gap-2 text-slate-700">
                 <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                 <span>Doit être signée & tamponnée</span>
               </li>
               <li className="flex items-start gap-2 text-slate-700">
                 <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                 <span>Mode "Taxi" ou "VSL" coché</span>
               </li>
            </ul>
          </div>

          {/* Carte Vitale */}
          <div className="relative group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:border-green-200">
             <div className="absolute top-4 right-4">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Obligatoire</span>
            </div>
            <div className="bg-green-100 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <CreditCard className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Carte Vitale</h3>
            <p className="text-slate-600 mb-4">
              Votre carte vitale à jour. Elle permet au chauffeur de vérifier vos droits ALD en direct.
            </p>
             <ul className="text-sm text-left w-full space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
               <li className="flex items-start gap-2 text-slate-700">
                 <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                 <span>Attestation papier (conseillée)</span>
               </li>
               <li className="flex items-start gap-2 text-slate-700">
                 <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                 <span>À présenter au début du trajet</span>
               </li>
            </ul>
          </div>

        </div>

        {/* Alerte - Très important pour éviter les litiges */}
        <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl flex flex-col sm:flex-row gap-4 shadow-sm">
                <AlertTriangle className="text-orange-500 shrink-0 h-8 w-8" />
                <div>
                    <h4 className="font-bold text-orange-900 text-lg">⚠️ Règle d'or de la CPAM (Date de prescription)</h4>
                    <p className="text-orange-800 text-sm md:text-base mt-2 leading-relaxed">
                    La date de signature du médecin doit être impérativement <strong>antérieure ou égale</strong> à la date du transport. 
                    Si le médecin date le bon <i>après</i> le trajet, le remboursement sera automatiquement refusé et la course sera à votre charge.
                    </p>
                </div>
            </div>

            {/* BOUTON CLUSTER : Lien vers l'article détaillé */}
            <div className="text-center mt-8">
                <Link 
                    href="/blog/remboursement-transport-ald-100-tiers-payant"
                    className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline hover:text-blue-900 transition-colors"
                >
                    <FileText size={20} />
                    Lire notre dossier complet sur le remboursement ALD et Tiers Payant
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
}