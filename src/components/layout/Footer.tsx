import { MapPin, Phone, Mail, ShieldCheck, HeartPulse, Car, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Colonne 1 : Marque */}
          <div className="md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Taxi<span className="text-yellow-500">31</span>Toulouse
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transport médical conventionné CPAM et courses privées en Occitanie. Disponible 24h/24, 7j/7.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm bg-slate-800/60 p-3 rounded-xl border border-slate-700 w-fit">
              <ShieldCheck size={18} />
              Agréé CPAM Haute-Garonne
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Nos Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/transport-medical" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <HeartPulse size={15} className="text-blue-400" /> Transport Médical VSL
                </Link>
              </li>
              <li>
                <Link href="/transport-medical#dialyse" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <HeartPulse size={15} className="text-blue-400" /> Dialyse & Chimiothérapie
                </Link>
              </li>
              <li>
                <Link href="/courses-privees" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Car size={15} className="text-yellow-500" /> Aéroport Toulouse-Blagnac
                </Link>
              </li>
              <li>
                <Link href="/courses-privees#gare" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Car size={15} className="text-yellow-500" /> Gare Matabiau
                </Link>
              </li>
              <li>
                <Link href="/courses-privees#evenements" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Car size={15} className="text-yellow-500" /> Mariages & Événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Guides & Zones */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Guides Pratiques</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/blog/guide-taxi-vsl-conventionne-cpam-toulouse" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <BookOpen size={15} className="text-slate-500" /> Guide VSL CPAM
                </Link>
              </li>
              <li>
                <Link href="/blog/tiers-payant-transport-medical-ald-toulouse" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <BookOpen size={15} className="text-slate-500" /> Tiers Payant ALD
                </Link>
              </li>
              <li>
                <Link href="/blog/taxi-vsl-oncopole-chimiotherapie-toulouse" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <BookOpen size={15} className="text-slate-500" /> Transport Oncopole
                </Link>
              </li>
              <li>
                <Link href="/blog/transport-dialyse-conventionne-toulouse" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <BookOpen size={15} className="text-slate-500" /> Transport Dialyse
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <BookOpen size={15} className="text-slate-500" /> Tous les guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                <span>Toulouse & Occitanie<br /><span className="text-slate-500">Haute-Garonne (31)</span></span>
              </li>
              <li>
                <a href="tel:0772339892" className="flex items-center gap-3 group">
                  <Phone className="text-yellow-500 shrink-0" size={18} />
                  <div>
                    <span className="text-xs text-slate-500 block">Disponible 24h/24</span>
                    <span className="text-lg font-black text-white group-hover:text-yellow-400 transition-colors">
                      07 72 33 98 92
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@taxi-31-toulouse.fr"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="text-yellow-500 shrink-0" size={18} />
                  contact@taxi-31-toulouse.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {year} Occitanie Médi Mobility — Taxi Conventionné CPAM Toulouse. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-300 transition-colors">Confidentialité</Link>
            <Link href="/a-propos" className="hover:text-slate-300 transition-colors">À Propos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
