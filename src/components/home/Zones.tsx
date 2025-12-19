import { Map, Navigation, Building2, ArrowRight } from 'lucide-react';

export default function Zones() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne Gauche : Zone Géographique (Haute-Garonne) */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Map size={16} />
              Zone d'intervention 31
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Votre Taxi partout en <span className="text-yellow-500">Haute-Garonne</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Basés sur l'agglomération toulousaine, nous couvrons l'ensemble du département. 
              Nous assurons quotidiennement les liaisons depuis 
              le <strong>centre de Toulouse</strong> et sa périphérie vers tous les établissements de soins.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2 text-lg">
                <Navigation size={20} className="text-yellow-500" />
                Communes desservies régulièrement :
              </h3>
              
              {/* Liste de tags optimisée SEO Local */}
              <div className="flex flex-wrap gap-2">
                {[
                  // Cœur de cible (Agglo)
                  'Toulouse Centre', 'Blagnac', 'Colomiers', 'Balma',
                  // Nord & Est
                  'L\'Union', 'Castelginest', 'Aucamville', 'Saint-Jean',
                  // Sud & Ouest
                  'Muret', 'Cugnaux', 'Tournefeuille', 'Plaisance',
                  // Sud 31 (Longue distance)
                  'Carbonne', 'Saint-Gaudens'
                ].map((city) => (
                  <span key={city} className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors cursor-default">
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-white text-slate-500 text-sm italic border border-slate-100">
                  Et alentours...
                </span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Les Destinations de Soins (Flux CPAM) */}
          <div className="relative mt-8 lg:mt-0">
             {/* Déco d'arrière-plan discrète */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Liaisons Hôpitaux & Cliniques
                </h3>
              </div>

              <ul className="space-y-0 divide-y divide-slate-100">
                {/* Liste des trajets fréquents */}
                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">CHU Purpan & Pierre-Paul Riquet</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    Quotidien
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Oncopole (Claudius Regaud)</span>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    Quotidien
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Hôpital Rangueil & Larrey</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    Fréquent
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Clinique d'Occitanie (Muret)</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                    Zone Sud
                  </span>
                </li>

                <li className="flex items-center justify-between py-4 group hover:bg-slate-50 transition-colors px-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-700">Clinique de l'Union & Pasteur</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                    Zone Nord/Centre
                  </span>
                </li>
              </ul>

              {/* Petit encart info */}
              <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 text-sm text-slate-700">
                <ArrowRight className="shrink-0 text-yellow-500 mt-0.5" size={16} />
                <p>
                  Nous desservons également <strong>tous les spécialistes libéraux</strong> 
                  (Kiné, Ophtalmo, Dialyse) sur simple prescription médicale.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}