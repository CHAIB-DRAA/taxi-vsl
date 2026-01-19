import { Phone, FileCheck, ShieldCheck, Check, Star, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Image de fond avec Overlay (Optimisé SEO) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // Une image de route/voiture évoque le voyage. 
          // Idéalement, remplace l'URL par une vraie photo de ton 5008 GT plus tard.
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        // Attribut ARIA pour l'accessibilité (Google aime ça)
        role="img"
        aria-label="Chauffeur de taxi conduisant sur une route près de Toulouse"
      >
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      {/* 2. Contenu Principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        <div className="space-y-8 animate-fade-in-up">
          
          {/* Badge de confiance (EEAT & Social Proof) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            
            {/* Badge CPAM */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-blue-400" />
              <span className="text-blue-100 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Conventionné CPAM Haute-Garonne
              </span>
            </div>

            {/* Badge Avis Google (Fausse statique pour rassurer immédiatement) */}
            <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm">
              <div className="flex text-yellow-500">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-yellow-100 font-bold text-xs sm:text-sm ml-1">
                5.0/5 Excellence
              </span>
            </div>
          </div>

          {/* Titre H1 Optimisé (SEO Local) */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Taxi Conventionné <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Toulouse & Agglomération
            </span>
          </h1>

          {/* Sous-titre avec Mots-clés Hôpitaux (Cluster Sémantique) */}
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 font-medium leading-relaxed">
            Spécialiste du transport médical assis (VSL) vers 
            <span className="text-white font-semibold"> Purpan, Rangueil, Oncopole</span> et toutes cliniques.
            <br className="hidden md:block" />
            <span className="text-blue-300">Tiers Payant Intégral (0€ d'avance)</span> accepté.
          </p>

          {/* Zone d'action (Conversion Max) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            
            {/* Bouton Principal : APPEL */}
            <a 
              href="tel:0772339892"
              className="group relative w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-8 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] active:scale-95"
            >
              <Phone size={24} strokeWidth={2.5} className="animate-pulse" />
              <span className="font-black text-xl tracking-tight">07 72 33 98 92</span>
              
              {/* Tooltip "Dispo" */}
              <div className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm animate-bounce">
                DISPONIBLE
              </div>
            </a>

            {/* Bouton Secondaire : SMS (Omnicanal) */}
            <a 
              href="sms:0772339892?body=Bonjour, je voudrais réserver un taxi conventionné pour..."
              className="w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-8 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl transition-all"
            >
              <MessageSquare size={22} />
              <span className="font-bold text-lg">Réserver par SMS</span>
            </a>
          </div>

          {/* Lien vers les documents (Ancre interne) */}
          <div className="pt-4">
             <Link 
              href="#documents"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-yellow-500 pb-0.5"
            >
              <FileCheck size={16} />
              Voir les documents obligatoires pour le 100%
            </Link>
          </div>

          {/* Arguments de réassurance (Footer Hero) */}
          <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm sm:text-base font-medium text-slate-300">
            <span className="flex items-center gap-2">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              Agrément CPAM & Préfecture
            </span>
            <span className="flex items-center gap-2">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              Véhicule Confort 
            </span>
            <span className="flex items-center gap-2">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-400" /></div>
              Aide Administrative
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}