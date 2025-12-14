import Link from 'next/link';
import { Phone, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      
      {/* Gros chiffre 404 stylisé */}
      <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
      
      <div className="absolute">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
          Oups, vous êtes perdu ?
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          Cette page n'existe pas, mais nos taxis sont bien réels.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-bold"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>
          
          <a 
            href="tel:+33600000000"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-taxi-500 text-slate-900 rounded-xl hover:bg-taxi-400 transition-colors font-bold"
          >
            <Phone size={20} />
            Appeler le standard
          </a>
        </div>
      </div>

    </div>
  );
}