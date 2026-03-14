// components/TrustSection.tsx
import { Star, Check, Euro } from 'lucide-react';

export default function TrustSection() {
  const reviews = [
    { name: "Jean-Pierre D.", text: "Chauffeur très ponctuel pour mes séances de dialyse à Purpan. Voiture impeccable.", stars: 5 },
    { name: "Marie L.", text: "Réservation facile via le site, SMS de confirmation reçu immédiatement. Je recommande.", stars: 5 }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* Partie Avis */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Avis de nos patients</h3>
          <div className="space-y-4">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(rev.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-2">"{rev.text}"</p>
                <p className="font-bold text-slate-900">- {rev.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partie Tarifs Indicatifs (Privé) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Euro className="text-yellow-600" />
            <h3 className="text-2xl font-bold">Tarifs Indicatifs (Privé)</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Toulouse Centre ↔ Aéroport</span>
              <span className="font-bold text-slate-900">À partir de 35€</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Toulouse ↔ Gare Matabiau</span>
              <span className="font-bold text-slate-900">À partir de 25€</span>
            </li>
            <li className="flex justify-between text-medical-600 font-bold">
              <span>Transport Médical (CPAM)</span>
              <span>100% Pris en charge*</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 italic">*Sous réserve de prescription médicale (Bon de transport).</p>
        </div>

      </div>
    </section>
  );
}