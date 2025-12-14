import { Map, Navigation, Building2, ArrowRight } from 'lucide-react';

export default function Zones() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne Gauche : Zone Géographique (Haute-Garonne) */}
          <div>
            <div className="inline-flex items-center gap-2 text-medical-600 font-bold mb-4 uppercase tracking-wider text-sm bg-medical-50 px-3 py-1 rounded-full">
              <Map size={16} />
              Zone d'intervention 31
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Votre Taxi partout en <span className="text-taxi-500">Haute-Garonne</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Basés au Nord de Toulouse, nous couvrons l'ensemble du département. 
              Nous assurons quotidiennement les liaisons longue distance depuis 
              le <strong>Sud Toulousain (Muret, Cazères)</strong> vers les grands centres hospitaliers de la métropole.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2 text-lg">
                <Navigation size={20} className="text-taxi-500" />
                Communes desservies régulièrement :
              </h3>
              
              {/* Liste de tags optimisée SEO Local */}
              <div className="flex flex-wrap gap-2">
                {[
                  // Nord & Base
                  'Aucamville', 'Toulouse', 'L\'Union', 'Castelginest',
                  // Sud & Muret (Gros volume CPAM)
                  'Muret', 'Cazères', 'Carbonne', 'Auterive',
                  // Ouest & Aéro
                  'Colomiers', 'Blagnac', 'Tournefeuille', 'Plaisance',
                  // Sud Profond
                  'Saint-Gaudens', 'Martres-Tolosane'
                ].map((city) => (
                  <span key={city} className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:border-taxi-400 hover:bg-taxi-50 transition-colors cursor-default">
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-slate-50 text-slate-500 text-sm italic border border-transparent">
                  Et alentours...
                </span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Les Destinations de Soins (Flux CPAM) */}
          <div className="relative mt-8 lg:mt-0">
             {/* Déco d'arrière-plan discrète */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-medical-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-medical-100 p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-medical-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Liaisons Hôpitaux & Cliniques
                </h3>
              </div>

              <ul className="space-y-0 divider-y divide-slate-100">
                {/* Liste des trajets fréquents */}
                <li className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">CHU Purpan & Pierre-Paul Riquet</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    Quotidien
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Oncopole (Claudius Regaud)</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    Quotidien
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Hôpital Rangueil & Larrey</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    Fréquent
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Clinique d'Occitanie (Muret)</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    Zone Sud
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Clinique de l'Union</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    Zone Nord
                  </span>
                </li>
              </ul>

              {/* Petit encart info */}
              <div className="mt-6 bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3 text-sm text-slate-600">
                <ArrowRight className="shrink-0 text-taxi-500 mt-0.5" size={16} />
                <p>
                  Nous desservons également <strong>tous les spécialistes libéraux</strong> 
                  (Kiné, Ophtalmo, Dialyse) sur simple prescription.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}