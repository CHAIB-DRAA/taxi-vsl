import { Star } from 'lucide-react';
import { siteConfig } from '../../../lib/siteConfig';

const { brand, google } = siteConfig;

const reviews = [
  {
    id: 1,
    name: 'Martine R.',
    location: 'Muret',
    service: 'Chimiothérapie Oncopole',
    content: 'Pendant sept mois de chimio à l\'Oncopole, il était là à chaque séance. Il savait quand me parler et quand me laisser dormir. Le dernier jour, quand le médecin m\'a dit que c\'était terminé, il était dans la salle d\'attente.',
    rating: 5,
    time: 'il y a 2 mois',
    initials: 'MR',
    color: 'bg-rose-500',
  },
  {
    id: 2,
    name: 'Jean-Pierre L.',
    location: 'Colomiers',
    service: 'Dialyse 3×/semaine',
    content: 'Je suis dialysé depuis trois ans. Il sait que j\'aime arriver 10 minutes en avance et que le retour je suis épuisé. C\'est devenu une routine rassurante dans une vie qui l\'est moins. Le planning est posé pour 3 mois d\'avance.',
    rating: 5,
    time: 'il y a 3 mois',
    initials: 'JL',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Sophie M.',
    location: 'Pamiers',
    service: 'Transport vers CHU Purpan',
    content: 'Je fais le trajet Pamiers-Toulouse toutes les trois semaines. Maintenant je sais qu\'il m\'attend et connaît exactement où me déposer. Une tranquillité d\'esprit énorme. Je recommande vivement ce service.',
    rating: 5,
    time: 'il y a 1 mois',
    initials: 'SM',
    color: 'bg-emerald-500',
  },
  {
    id: 4,
    name: 'Marc-Antoine G.',
    location: 'Toulouse',
    service: 'Navette Aéroport Blagnac',
    content: 'Ponctuel même pour un vol à 5h30 du matin. Conduite douce et chauffeur professionnel. Je n\'utilise plus que ce service pour mes déplacements professionnels depuis Toulouse.',
    rating: 5,
    time: 'il y a 5 mois',
    initials: 'MG',
    color: 'bg-violet-500',
  },
  {
    id: 5,
    name: 'Isabelle D.',
    location: 'Blagnac',
    service: 'Suivi oncologique Rangueil',
    content: 'Mon médecin m\'a orientée vers ce service après mon opération. Je ne savais pas que mes transports seraient pris en charge à 100%. Aucune avance de frais, aucune démarche de ma part. Il s\'occupe de tout.',
    rating: 5,
    time: 'il y a 4 mois',
    initials: 'ID',
    color: 'bg-amber-500',
  },
  {
    id: 6,
    name: 'Cabinet Bertrand',
    location: 'Toulouse',
    service: 'Transport Business',
    content: `Nous faisons appel à ${brand.legalName} pour accueillir nos clients internationaux à l'aéroport. Discrétion, ponctualité, présentation impeccable. La facturation mensuelle simplifie notre comptabilité.`,
    rating: 5,
    time: 'il y a 6 mois',
    initials: 'CB',
    color: 'bg-teal-500',
  },
];

function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <GoogleLogo />
            <span className="text-slate-700 font-bold text-xs">Avis Google vérifiés</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Ce que disent nos <span className="text-blue-600">passagers</span>
          </h2>
          <div className="flex justify-center items-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="#FBBC05" stroke="none" size={22} />)}
            <span className="text-slate-900 font-black ml-2 text-lg">5,0</span>
            <span className="text-slate-500 text-sm ml-1">/ 5 — Note Google</span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Des patients en traitement médical, des voyageurs pressés, des familles — tous font confiance à {brand.legalName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white text-sm font-black">{review.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-tight">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.location} · {review.time}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FBBC05" stroke="none" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed text-sm mb-4">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Tag */}
              <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {review.service}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={google.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3 rounded-xl transition-all shadow-sm text-sm"
          >
            <GoogleLogo />
            Voir tous nos avis sur Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
