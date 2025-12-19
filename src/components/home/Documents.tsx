import { FileText, CreditCard, AlertTriangle } from 'lucide-react';

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Tiers Payant : <span className="text-blue-600">Zéro avance de frais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pour être remboursé à 100% par la Sécurité Sociale (CPAM) sans rien payer au chauffeur, 
            préparez simplement ces deux documents obligatoires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Carte Prescription */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Bon de Transport</h3>
            <p className="text-slate-600">
              Appelé aussi "Prescription Médicale". Elle doit être signée par le médecin <strong>avant</strong> le trajet.
            </p>
          </div>

          {/* Carte Vitale */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <CreditCard className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Carte Vitale</h3>
            <p className="text-slate-600">
              Votre carte vitale à jour. Si possible, munissez-vous aussi de votre attestation de droits papier (ALD).
            </p>
          </div>

        </div>

        {/* Alerte - Très important pour éviter les litiges */}
        <div className="mt-10 max-w-3xl mx-auto bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl flex gap-4">
          <AlertTriangle className="text-orange-500 shrink-0 h-6 w-6" />
          <div>
            <h4 className="font-bold text-orange-900">Règle d'or de la CPAM</h4>
            <p className="text-orange-800 text-sm md:text-base mt-1">
              La date de la prescription doit être impérativement <strong>antérieure ou égale</strong> à la date du transport. 
              Si le médecin date le bon <i>après</i> le trajet, le remboursement sera refusé et la course sera à votre charge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}