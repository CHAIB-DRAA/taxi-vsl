import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Martine R.',
    age: '58 ans, Muret',
    service: 'Transport Chimiothérapie',
    content: 'Pendant sept mois de chimio à l\'Oncopole, il était là à chaque séance. Il savait quand me parler et quand me laisser dormir. Le dernier jour, quand le médecin m\'a dit que c\'était terminé, il était dans la salle d\'attente. C\'est le genre de moment qu\'on n\'oublie pas.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jean-Pierre L.',
    age: '68 ans, Colomiers',
    service: 'Dialyse 3x/semaine',
    content: 'Je suis dialysé depuis trois ans. Il sait que j\'aime arriver 10 minutes en avance et que le retour je suis épuisé. C\'est devenu une routine rassurante dans une vie qui l\'est moins. Le planning est posé pour 3 mois d\'avance, je n\'ai plus rien à gérer.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophie M.',
    age: '45 ans, Pamiers',
    service: 'Transport vers CHU Purpan',
    content: 'Je fais le trajet Pamiers-Toulouse toutes les trois semaines. Au début j\'étais angoissée : comment trouver le bon bâtiment ? Comment rentrer seule après les soins ? Maintenant je sais qu\'il m\'attend et connaît exactement où me déposer. Une tranquillité d\'esprit énorme.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Marc-Antoine G.',
    age: 'Client régulier',
    service: 'Navette Aéroport Blagnac',
    content: 'Ponctuel même pour un vol à 5h30 du matin. Conduite douce et chauffeur professionnel. Je n\'utilise plus que ce service pour mes déplacements professionnels depuis Toulouse.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Cabinet Bertrand Associés',
    age: 'Toulouse',
    service: 'Transport Business',
    content: 'Nous faisons appel à Occitanie Médi Mobility pour accueillir nos clients internationaux à l\'aéroport. Discrétion, ponctualité, présentation impeccable. La facturation mensuelle simplifie notre comptabilité.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Isabelle D.',
    age: '72 ans, Blagnac',
    service: 'Suivi oncologique Rangueil',
    content: 'Mon médecin m\'a orientée vers ce service après mon opération. Je ne savais pas que mes transports seraient pris en charge à 100%. Aucune avance de frais, aucune démarche de ma part. Il s\'occupe de tout avec la CPAM.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 mb-4">
            Ce que disent nos <span className="text-blue-600">passagers</span>
          </h2>
          <div className="flex justify-center items-center gap-2 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={22} />)}
            <span className="text-slate-900 font-black ml-2 text-lg">5.0/5</span>
            <span className="text-slate-500 text-sm ml-1">sur Google</span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Des patients en traitement médical, des voyageurs pressés, des familles — tous font confiance à Occitanie Médi Mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative p-7 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-5 right-6 text-slate-100" size={36} />

              <div className="flex items-center gap-0.5 text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 text-sm italic">
                &ldquo;{review.content}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{review.age}</p>
                <span className="inline-block mt-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/Cbh2nxTvVS7cEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm"
          >
            Laisser un avis sur
            <span className="font-bold text-slate-700">Google Maps</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
