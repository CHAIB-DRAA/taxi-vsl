import Link from 'next/link';
import { Map, Navigation, Building2, ArrowRight, MapPin } from 'lucide-react';

// LISTE 1 : Les Villes Stratégiques (Top Requêtes)
// Les slugs doivent correspondre EXACTEMENT à ceux générés dans lib/articles.ts
const topCities = [
  { name: 'Toulouse Centre', slug: 'taxi-conventionne-vsl-toulouse' }, // Cas particulier si tu as l'article
  { name: 'Blagnac', slug: 'taxi-conventionne-vsl-blagnac' },
  { name: 'Colomiers', slug: 'taxi-conventionne-vsl-colomiers' },
  { name: 'Balma', slug: 'taxi-conventionne-vsl-balma' },
  { name: 'L\'Union', slug: 'taxi-conventionne-vsl-l-union' },
  { name: 'Castelginest', slug: 'taxi-conventionne-vsl-castelginest' },
  { name: 'Aucamville', slug: 'taxi-conventionne-vsl-aucamville' },
  { name: 'Saint-Jean', slug: 'taxi-conventionne-vsl-saint-jean' },
  { name: 'Muret', slug: 'taxi-conventionne-vsl-muret' },
  { name: 'Cugnaux', slug: 'taxi-conventionne-vsl-cugnaux' },
  { name: 'Tournefeuille', slug: 'taxi-conventionne-vsl-tournefeuille' },
  { name: 'Plaisance', slug: 'taxi-conventionne-vsl-plaisance-du-touch' },
];

// LISTE 2 : Les Hôpitaux Stratégiques (Top Destinations)
const topHospitals = [
  { 
    name: 'CHU Purpan & Riquet', 
    slug: 'transport-taxi-hopital-purpan-chu',
    tag: 'Quotidien',
    color: 'text-green-600 bg-green-50 border-green-100'
  },
  { 
    name: 'Oncopole (Claudius Regaud)', 
    slug: 'transport-taxi-oncopole-claudius-regaud',
    tag: 'Quotidien',
    color: 'text-green-600 bg-green-50 border-green-100'
  },
  { 
    name: 'Hôpital Rangueil & Larrey', 
    slug: 'transport-taxi-hopital-rangueil',
    tag: 'Fréquent',
    color: 'text-blue-600 bg-blue-50 border-blue-100'
  },
  { 
    name: 'Clinique d\'Occitanie (Muret)', 
    slug: 'transport-taxi-clinique-doccitanie-muret',
    tag: 'Zone Sud',
    color: 'text-slate-600 bg-slate-100 border-slate-200'
  },
  { 
    name: 'Clinique de l\'Union', 
    slug: 'transport-taxi-clinique-de-lunion',
    tag: 'Zone Nord',
    color: 'text-slate-600 bg-slate-100 border-slate-200'
  }
];

export default function Zones() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne Gauche : Zone Géographique (Maillage Villes) */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-xs bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              <Map size={14} />
              Zone d'intervention 31
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Votre Taxi partout en <span className="text-yellow-500">Haute-Garonne</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Basés au nord de Toulouse, nous couvrons l'ensemble du département. 
              Nous assurons quotidiennement les liaisons depuis 
              le <strong>centre de Toulouse</strong> et sa périphérie vers tous les établissements de soins.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold mb-6 flex items-center gap-2 text-lg">
                <Navigation size={20} className="text-yellow-500" />
                Sélectionnez votre ville de départ :
              </h3>
              
              {/* CLUSTER SEO : On transforme les spans en Liens réels */}
              <div className="flex flex-wrap gap-2">
                {topCities.map((city) => (
                  <Link 
                    key={city.name} 
                    href={`/blog/${city.slug}`}
                    title={`Taxi conventionné à ${city.name}`}
                    className="px-3 py-1.5 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-800 transition-all cursor-pointer"
                  >
                    {city.name}
                  </Link>
                ))}
                
                {/* Lien vers la liste complète (Page Blog) */}
                <Link 
                  href="/blog"
                  className="px-3 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
                >
                  Voir les 50 villes <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Les Destinations (Maillage Hôpitaux) */}
          <div className="relative mt-8 lg:mt-0">
             {/* Déco d'arrière-plan */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Liaisons Hôpitaux & Cliniques
                  </h3>
                  <p className="text-sm text-slate-500">Accès directs et dépose prioritaire</p>
                </div>
              </div>

              <div className="space-y-2">
                {topHospitals.map((hospital) => (
                  <Link 
                    key={hospital.name}
                    href={`/blog/${hospital.slug}`}
                    className="flex items-center justify-between py-4 px-3 rounded-xl group hover:bg-blue-50/50 hover:scale-[1.02] transition-all border border-transparent hover:border-blue-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                      <span className="font-medium text-slate-700 group-hover:text-blue-900">
                        {hospital.name}
                      </span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${hospital.color}`}>
                      {hospital.tag}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Encadré de réassurance */}
              <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3 text-sm text-slate-600">
                <div className="shrink-0 bg-yellow-100 rounded-full p-1 h-fit">
                  <ArrowRight className="text-yellow-600" size={14} />
                </div>
                <p>
                  Nous desservons également <strong>tous les spécialistes libéraux</strong> 
                  (Kiné, Ophtalmo, Centres de Dialyse) sur simple prescription médicale.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}