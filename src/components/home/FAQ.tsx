import { Plus, Minus, Phone } from 'lucide-react';

const faqs = [
  {
    question: "Comment réserver mon taxi conventionné ?",
    answer: "C'est très simple. Vous devez avoir une Prescription Médicale de Transport (Bon de transport) signée par votre médecin. Ensuite, appelez-nous au 07 72 33 98 92 pour bloquer votre créneau. Nous nous occupons du reste."
  },
  {
    question: "Dois-je avancer les frais de transport ?",
    answer: "Non, pas d'avance de frais ! Si vous êtes en ALD (Affection Longue Durée) ou si votre prescription mentionne une prise en charge à 100%, nous pratiquons le Tiers Payant intégral avec la CPAM. Vous n'avez rien à payer à bord."
  },
  {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "Nous sommes basés près de Toulouse et couvrons toute la Haute-Garonne (31). Que vous soyez à Muret, Colomiers, L'Union ou en centre-ville, nous venons vous chercher pour vous emmener vers n'importe quel hôpital ou clinique."
  },
  {
      question: "Faites-vous aussi les gares et aéroports ?",
      answer: "Oui, tout à fait. En dehors des transports médicaux, nous assurons les transferts privés vers l'aéroport de Toulouse-Blagnac et la Gare Matabiau, sur réservation."
  },
  {
      question: "Acceptez-vous les animaux ou accompagnants ?",
      answer: "Un accompagnant est autorisé si cela est précisé sur votre prescription médicale. Pour les animaux d'assistance (chiens guides), ils sont bien entendu les bienvenus à bord."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Aide & Infos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-slate-600 text-lg">
            Tout ce que vous devez savoir pour votre transport.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-slate-50 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-md open:border-blue-100 transition-all duration-300"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors select-none">
                <h3 className="text-left">{faq.question}</h3>
                <span className="relative size-5 shrink-0 text-blue-500">
                  <Plus className="absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity rotate-0 group-open:rotate-90 duration-300" />
                  <Minus className="absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity rotate-90 group-open:rotate-0 duration-300" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base md:text-lg border-t border-transparent group-open:border-slate-100 mt-2">
                <p>{faq.answer}</p>
                
                {/* Petit bonus si c'est la question sur la résa */}
                {index === 0 && (
                   <div className="mt-4">
                     <a href="tel:0772339892" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
                       <Phone size={18} /> Appeler le 07 72 33 98 92
                     </a>
                   </div>
                )}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}