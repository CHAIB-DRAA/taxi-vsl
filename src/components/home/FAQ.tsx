import { Plus, Minus } from 'lucide-react';

const faqs = [
  // ... Gardez vos questions/réponses ...
  {
    question: "Comment réserver un taxi conventionné CPAM ?",
    answer: "Pour réserver un taxi conventionné, vous devez être en possession d'une Prescription Médicale de Transport (Bon de transport) signée par votre médecin avant le trajet. Appelez-nous ensuite au 06 00 00 00 00 pour planifier votre prise en charge."
  },
  {
    question: "Dois-je avancer les frais de transport ?",
    answer: "Non. Si vous avez une prescription médicale valide et votre carte vitale à jour, nous pratiquons le tiers payant intégral. Vous n'avez aucune avance de frais à réaliser."
  },
  {
      question: "Faites-vous les gares et aéroports pour le privé ?",
      answer: "Oui, c'est une part importante de notre activité. Nous assurons les transferts vers Blagnac et Matabiau pour les particuliers et professionnels."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-slate-50 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg hover:text-medical-600 transition-colors select-none">
                <h3>{faq.question}</h3>
                <span className="relative size-5 shrink-0 text-slate-500">
                  <Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" />
                  <Minus className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed text-lg">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}