import { FileText, CreditCard, AlertTriangle } from 'lucide-react';

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-medical-50 border-y border-medical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Tiers Payant : <span className="text-medical-600">Zéro avance de frais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pour être remboursé à 100% par la Sécurité Sociale sans rien payer au chauffeur, 
            préparez simplement ces deux documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Carte Prescription */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <FileText className="h-10 w-10 text-medical-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Bon de Transport</h3>
            <p className="text-slate-600">
              Prescription médicale signée par le médecin <strong>avant</strong> le trajet.
            </p>
          </div>

          {/* Carte Vitale */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <CreditCard className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Carte Vitale</h3>
            <p className="text-slate-600">
              À jour. L'attestation de droits papier est appréciée si possible.
            </p>
          </div>

        </div>

        {/* Alerte */}
        <div className="mt-10 max-w-3xl mx-auto bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl flex gap-4">
          <AlertTriangle className="text-orange-500 shrink-0" />
          <div>
            <h4 className="font-bold text-orange-800">Attention aux dates</h4>
            <p className="text-orange-700">
              La date de la prescription doit être antérieure ou égale à la date du transport. 
              Sinon, la CPAM refusera le remboursement et le trajet sera à votre charge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}