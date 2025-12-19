import { Phone, FileCheck, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Image de fond avec Overlay Adapté */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay sombre pour faire ressortir le texte blanc */}
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      {/* 2. Contenu Principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        <div className="space-y-8 animate-fade-in-up">
          
          {/* Badge de confiance (CPAM) */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 border border-blue-500 shadow-lg shadow-blue-900/50 mx-auto mb-4">
            <ShieldCheck size={20} className="text-white" />
            <span className="text-white font-bold tracking-wide text-sm sm:text-base uppercase">
              Transport Assis Professionnalisé (TAP)
            </span>
          </div>

          {/* Titre H1 Optimisé pour taxi-31-toulouse.fr */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Taxi Conventionné <br />
            <span className="text-yellow-400">
              Toulouse & Haute-Garonne (31)
            </span>
          </h1>

          {/* Sous-titre rassurant */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
            Votre transport médical vers les hôpitaux et cliniques de la région.
            <br className="hidden md:block" />
            Prise en charge à 100% (Tiers Payant) et accompagnement administratif.
          </p>

          {/* Zone d'action (Boutons) */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
              
              {/* Bouton Appel Direct */}
              <a 
                href="tel:0772339892"
                className="w-full sm:w-auto px-8 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-extrabold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3"
              >
                <Phone size={24} className="fill-slate-900" />
                <span>COMMANDER AU 07 72 33 98 92</span>
              </a>
              
              {/* Bouton Documents */}
              <Link 
                href="#documents"
                className="w-full sm:w-auto px-8 py-5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <FileCheck size={24} className="text-blue-600" />
                <span>Documents requis</span>
              </Link>
            </div>
            
            {/* Petit texte sous le bouton pour rassurer sur la dispo */}
            <p className="text-slate-400 text-sm font-medium">
              Réponse rapide • Déplacement toutes distances (31)
            </p>
          </div>

          {/* Arguments de réassurance */}
          <div className="pt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-base font-medium text-slate-300">
            <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <Check size={18} className="text-green-400" /> Agrément Sécurité Sociale
            </span>
            <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <Check size={18} className="text-green-400" /> Chauffeurs Formés
            </span>
            <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <Check size={18} className="text-green-400" /> Aide à la marche
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}