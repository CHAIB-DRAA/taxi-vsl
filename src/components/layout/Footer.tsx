import { MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-24 md:pb-12">
      {/* Note: pb-24 sur mobile pour éviter que le contenu soit caché par la barre d'appel sticky */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Colonne 1 : La Marque & Confiance */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-taxi-500 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-slate-50 tracking-tight">
                Taxi<span className="text-taxi-500">Occitanie</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-base leading-relaxed">
              Votre partenaire de confiance pour le transport médical assis (TAP) et privé. 
              Intervention rapide sur le Nord Toulousain et liaisons quotidiennes vers le Sud Haute-Garonne.
            </p>
            
            <div className="flex items-center gap-3 text-taxi-500 font-medium bg-slate-800/50 p-3 rounded-xl border border-slate-700 w-fit">
              <ShieldCheck size={20} />
              <span>Agrément CPAM & Tiers Payant</span>
            </div>
          </div>

          {/* Colonne 2 : Navigation Utile */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Plan du site</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="/" className="flex items-center gap-2 hover:text-taxi-500 transition-colors">
                  <ArrowRight size={16} className="text-slate-600" /> Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="flex items-center gap-2 hover:text-taxi-500 transition-colors">
                  <ArrowRight size={16} className="text-slate-600" /> Transport Médical
                </Link>
              </li>
              <li>
                <Link href="#documents" className="flex items-center gap-2 hover:text-taxi-500 transition-colors">
                  <ArrowRight size={16} className="text-slate-600" /> Documents à fournir
                </Link>
              </li>
              <li>
                <Link href="#contact" className="flex items-center gap-2 hover:text-taxi-500 transition-colors">
                  <ArrowRight size={16} className="text-slate-600" /> Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact Direct */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Nous Contacter</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-300">
                <MapPin className="text-taxi-500 shrink-0 mt-1" size={20} />
                <span>
                  <strong>Base :</strong> Aucamville (31)<br/>
                  <strong>Rayon :</strong> Toute la Haute-Garonne
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <Phone className="text-taxi-500 shrink-0" size={20} />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500">Urgence & Réservation 24/7</span>
                  <a href="tel:+33600000000" className="text-xl font-bold text-white hover:text-taxi-500 transition-colors">
                    06 00 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <Mail className="text-taxi-500 shrink-0" size={20} />
                <a href="mailto:contact@taxi-occitanie.fr" className="hover:text-white transition-colors">
                  contact@taxi-occitanie.fr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Mentions */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Taxi Occitanie. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Politique de Confidentialité</Link>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="text-slate-600">Site web par Taxi Occitanie</span>
          </div>
        </div>

      </div>
    </footer>
  );
}