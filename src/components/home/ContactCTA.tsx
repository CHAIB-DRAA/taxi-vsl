import { Phone, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 bg-yellow-500 overflow-hidden">
      
      {/* Texture de fond : Motif technique subtil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Effet de lumière "Spotlight" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-yellow-400 opacity-20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge de confiance (EEAT) */}
        <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <CheckCircle2 size={16} className="text-slate-900" />
          <span className="text-slate-900 font-bold text-sm tracking-wide uppercase">Chauffeur Agréé CPAM & Préfecture 31</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Réservez votre trajet <br className="hidden sm:block" />
          <span className="text-white drop-shadow-md">en toute sérénité</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-slate-800 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Pour un transport médical vers <strong>Purpan/Oncopole</strong> ou une navette <strong>Aéroport Blagnac</strong>.
          <br className="hidden md:block"/>
          Réponse immédiate garantie.
        </p>

        {/* Bloc des Actions (Conversion Max) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
          
          {/* 1. Bouton Appel (Le Graal) */}
          <a 
            href="tel:0772339892"
            className="group relative w-full md:w-auto min-w-[280px] bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 ring-4 ring-yellow-400/50"
          >
            <Phone className="text-yellow-400 animate-pulse" size={24} />
            <span>07 72 33 98 92</span>
            {/* Badge "Dispo" */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-slate-900 shadow-sm uppercase tracking-wide">
              Urgence 24/7
            </div>
          </a>

          {/* 2. Bouton SMS (L'arme secrète pour les timides/occupés) */}
          <a 
            href="sms:0772339892?body=Bonjour, je souhaite réserver un taxi pour..."
            className="w-full md:w-auto min-w-[280px] bg-white text-slate-900 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3 border-2 border-slate-900"
          >
            <MessageSquare className="text-blue-600" size={24} />
            <span>Envoyer un SMS</span>
          </a>

          {/* 3. Bouton Devis (Pour les prévoyants) */}
          <a 
            href="mailto:contact@taxi-31-toulouse.fr"
            className="w-full md:w-auto min-w-[280px] bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <Mail size={22} />
            <span>Devis par Email</span>
          </a>

        </div>

        {/* SEO LOCAL : La ligne de démarcation */}
        <div className="border-t border-slate-900/10 pt-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-slate-800 font-medium text-base opacity-80">
            <MapPin size={18} className="shrink-0" />
            <p>
              Intervention rapide sur : 
              <span className="font-bold ml-1">Toulouse Centre</span> • 
              <span className="font-bold ml-1">Colomiers</span> • 
              <span className="font-bold ml-1">Blagnac</span> • 
              <span className="font-bold ml-1">Muret</span> • 
              <span className="font-bold ml-1">L'Union</span> • 
              <span className="font-bold ml-1">Balma</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}