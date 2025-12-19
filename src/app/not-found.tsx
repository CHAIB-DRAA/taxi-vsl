import Link from 'next/link';
import { Phone, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center overflow-hidden">
      
      {/* Gros chiffre 404 en fond (Décoratif) */}
      <h1 className="text-[10rem] md:text-[14rem] font-extrabold text-slate-200 select-none leading-none opacity-50">
        404
      </h1>
      
      {/* Contenu par-dessus */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
          Oups, page introuvable.
        </h2>
        <p className="text-slate-600 mb-10 text-xl max-w-md mx-auto font-medium">
          Il semblerait que vous soyez perdu. Pas de panique, nos taxis savent toujours où aller !
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md px-6">
          {/* Bouton Accueil */}
          <Link 
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-transform active:scale-95 font-bold shadow-lg"
          >
            <Home size={20} />
            Accueil
          </Link>
          
          {/* Bouton Appel (Jaune Taxi) */}
          <a 
            href="tel:0772339892"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-yellow-500 text-slate-900 rounded-xl hover:bg-yellow-400 transition-transform active:scale-95 font-extrabold shadow-lg shadow-yellow-500/20"
          >
            <Phone size={20} className="fill-slate-900" />
            07 72 33 98 92
          </a>
        </div>
      </div>

    </div>
  );
}