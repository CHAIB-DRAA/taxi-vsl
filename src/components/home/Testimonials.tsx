'use client';

import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Mme Sophie Laurent",
    date: "Il y a 2 semaines",
    service: "Transport Médical (VSL)",
    content: "Chauffeur d'une grande gentillesse. Il m'a aidée pour mon admission à l'Oncopole et m'a attendue malgré le retard de mon rendez-vous. Voiture très confortable.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Marc-Antoine G.",
    date: "Le mois dernier",
    service: "Navette Aéroport",
    content: "Ponctuel, même pour un vol à 6h du matin. Conduite souple et chauffeur très professionnel. Je referai appel à Taxi 31 sans hésiter.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Cabinet Juridique T.",
    date: "Il y a 3 jours",
    service: "Transport Business",
    content: "Service impeccable pour nos clients internationaux. Discrétion et présentation parfaite.",
    rating: 5,
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ce que disent nos <span className="text-blue-600">passagers</span>
          </h2>
          <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            <span className="text-slate-900 font-bold ml-2">5.0/5 sur Google</span>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            La confiance de nos patients est notre plus grande réussite. Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-8 text-slate-200 group-hover:text-blue-100 transition-colors" size={40} />
              
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{review.content}"
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      {review.name}
                      {review.verified && <CheckCircle2 size={16} className="text-blue-500" />}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                      {review.service}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge Google My Business */}
        <div className="mt-12 text-center">
          <a 
            href="https://g.page/r/Cbh2nxTvVS7cEAE/review" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors"
          >
            Consulter les 124 autres avis sur 
            <span className="font-bold flex items-center gap-1">
              Google <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}