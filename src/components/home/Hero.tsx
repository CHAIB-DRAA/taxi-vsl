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
        {/* Overlay Slate-900 à 90% d'opacité :
            Crée un fond quasi-uni pour une lisibilité parfaite du texte blanc,
            tout en gardant subtilement l'ambiance de la route en fond. */}
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      {/* 2. Contenu Principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        <div className="space-y-10 animate-fade-in-up">
          
          {/* Badge de confiance (Style Sécu/Médical) */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-2.5 rounded-full bg-medical-600 border border-medical-500 shadow-lg shadow-medical-900/50 mx-auto">
            <ShieldCheck size={20} className="text-white" />
            <span className="text-white font-bold tracking-wide text-sm sm:text-base uppercase">
              Taxi Conventionné CPAM & Tiers Payant
            </span>
          </div>

          {/* Titre Principal (Très Gros & Lisible) */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Votre Transport Médical <br />
            <span className="text-taxi-400">
              en toute sérénité.
            </span>
          </h1>

          {/* Sous-titre (Police agrandie pour seniors) */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
            Spécialiste du transport assis (TAP) vers les hôpitaux de Toulouse et d'Occitanie.
            <br className="hidden md:block" />
            Nous nous occupons de votre trajet et de l'administratif.
          </p>

          {/* Boutons d'action (Design "Bouton Physique") */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
            
            {/* Bouton Primaire : APPEL (Jaune sur Noir pour contraste max) */}
            <a 
              href="tel:+33600000000"
              className="w-full sm:w-auto px-8 py-5 bg-taxi-500 hover:bg-taxi-400 text-slate-900 font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-taxi-500/20 flex items-center justify-center gap-3"
            >
              <Phone size={24} className="fill-slate-900" />
              <span>COMMANDER UN TAXI</span>
            </a>
            
            {/* Bouton Secondaire : DOCUMENTS (Blanc Solide, pas transparent) */}
            <Link 
              href="#documents"
              className="w-full sm:w-auto px-8 py-5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <FileCheck size={24} className="text-medical-600" />
              <span>Documents à préparer</span>
            </Link>
          </div>

          {/* Arguments de réassurance (Liste à puces claire) */}
          <div className="pt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-base font-medium text-slate-300">
            <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <Check size={18} className="text-green-400" /> Agrément CPAM
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