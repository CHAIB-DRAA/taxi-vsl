import { Phone, FileCheck, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Image de fond avec Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
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

          {/* Titre H1 Optimisé */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Taxi Conventionné <br />
            <span className="text-yellow-400">
              Toulouse & Haute-Garonne (31)
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
            Votre transport médical vers les hôpitaux et cliniques de la région.
            <br className="hidden md:block" />
            Prise en charge à 100% (Tiers Payant) et accompagnement administratif.
          </p>

          {/* Zone d'action (Boutons) */}
          <div className="flex flex-col items-center gap-6 mt-12">
            
            {/* Bouton d'appel "Le Hub" */}
            <div className="group relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative flex flex-col items-center bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl">
                <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold py-2">
                  Besoin d'un taxi maintenant ?
                </span>
                
                <a 
                  href="tel:0772339892"
                  className="w-full flex items-center justify-center gap-4 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  <div className="bg-slate-950/10 p-2 rounded-lg">
                    <Phone size={24} strokeWidth={3} />
                  </div>
                  <span className="font-black text-2xl tracking-tighter">07 72 33 98 92</span>
                </a>
              </div>
            </div>

            {/* Lien secondaire discret */}
            <Link 
              href="#documents"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold underline underline-offset-8 decoration-slate-800 hover:decoration-blue-500"
            >
              <FileCheck size={18} />
              Quels documents préparer ? 
            </Link>
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