import Link from 'next/link';
import { MapPin, Building2, Navigation, ArrowRight } from 'lucide-react';

const cities = [
  { name: 'Muret', slug: 'taxi-conventionne-muret-toulouse' },
  { name: 'Blagnac', slug: 'taxi-conventionne-blagnac-colomiers-toulouse' },
  { name: 'Colomiers', slug: 'taxi-conventionne-blagnac-colomiers-toulouse' },
  { name: 'Tournefeuille', slug: null },
  { name: 'Cugnaux', slug: null },
  { name: 'Balma', slug: null },
  { name: 'L\'Union', slug: null },
  { name: 'Castanet-Tolosan', slug: null },
  { name: 'Ramonville', slug: null },
  { name: 'Portet-sur-Garonne', slug: null },
  { name: 'Plaisance-du-Touch', slug: null },
  { name: 'Launaguet', slug: null },
  { name: 'Aucamville', slug: null },
  { name: 'Fonsorbes', slug: null },
  { name: 'Cornebarrieu', slug: null },
];

const longDistance = [
  { name: 'Pamiers (Ariège)', slug: 'taxi-vsl-ariege-pamiers-foix-toulouse', dist: '70 km' },
  { name: 'Foix (Ariège)', slug: 'taxi-vsl-ariege-pamiers-foix-toulouse', dist: '85 km' },
  { name: 'Albi (Tarn)', slug: 'taxi-vsl-albi-tarn-toulouse-hopital', dist: '80 km' },
  { name: 'Montauban (82)', slug: null, dist: '50 km' },
  { name: 'Tarbes (65)', slug: null, dist: '155 km' },
  { name: 'Auch (Gers)', slug: null, dist: '75 km' },
];

const hospitals = [
  { name: 'CHU Purpan & Riquet', slug: 'taxi-vsl-hopital-purpan-chu-toulouse', tag: 'Quotidien' },
  { name: 'Oncopole Claudius Regaud', slug: 'taxi-vsl-oncopole-chimiotherapie-toulouse', tag: 'Chimio/Radio' },
  { name: 'Hôpital Rangueil', slug: 'taxi-vsl-hopital-rangueil-toulouse', tag: 'Cardio/Dialyse' },
  { name: 'Clinique Pasteur', slug: null, tag: 'Cardiologie' },
  { name: 'Clinique de l\'Union', slug: null, tag: 'Dialyse' },
  { name: 'Clinique d\'Occitanie Muret', slug: null, tag: 'Zone Sud' },
];

export default function Zones() {
  return (
    <section id="zones" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Zone d'intervention
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-6 mb-4">
            De Toulouse à toute l'<span className="text-yellow-500">Occitanie</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Nous intervenons dans toute la Haute-Garonne et assurons les trajets longue distance depuis les départements voisins vers les hôpitaux spécialisés de Toulouse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Villes Haute-Garonne */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Navigation className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Haute-Garonne (31)</h3>
                <p className="text-xs text-slate-500">Toulouse & agglomération</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) =>
                city.slug ? (
                  <Link
                    key={city.name}
                    href={`/blog/${city.slug}`}
                    className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition-all"
                  >
                    {city.name}
                  </Link>
                ) : (
                  <span key={city.name} className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-600 border border-slate-200">
                    {city.name}
                  </span>
                )
              )}
              <Link
                href="/blog"
                className="px-3 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
              >
                Toutes les villes <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Longue distance */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-100 p-2.5 rounded-xl">
                <MapPin className="h-5 w-5 text-yellow-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Longue Distance</h3>
                <p className="text-xs text-slate-500">Autres départements d'Occitanie</p>
              </div>
            </div>
            <div className="space-y-3">
              {longDistance.map((city) => (
                <div key={city.name} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                  {city.slug ? (
                    <Link href={`/blog/${city.slug}`} className="text-sm font-medium text-blue-700 hover:underline">
                      {city.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-slate-700">{city.name}</span>
                  )}
                  <span className="text-xs text-slate-400 font-mono">{city.dist}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">Remboursement CPAM possible sur prescription médicale avec mention de l'éloignement.</p>
          </div>

          {/* Hôpitaux */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2.5 rounded-xl">
                <Building2 className="h-5 w-5 text-red-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Hôpitaux & Cliniques</h3>
                <p className="text-xs text-slate-500">Destinations médicales principales</p>
              </div>
            </div>
            <div className="space-y-2">
              {hospitals.map((h) => (
                <div
                  key={h.name}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-slate-400 shrink-0" />
                    {h.slug ? (
                      <Link href={`/blog/${h.slug}`} className="text-sm font-medium text-slate-800 hover:text-blue-700">
                        {h.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-slate-800">{h.name}</span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                    {h.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
