import { Phone, Mail, Clock } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 bg-taxi-500 overflow-hidden">
      
      {/* Texture de fond : Points discrets pour habiller le jaune sans gêner la lecture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Besoin d'un transport ?
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-800 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Que ce soit pour une urgence médicale, un départ en gare ou un trajet planifié, 
          nous sommes disponibles pour vous répondre.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Bouton Appel (Prioritaire - Noir sur Jaune) */}
          <a 
            href="tel:+33600000000"
            className="group relative w-full sm:w-auto bg-slate-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <Phone className="text-taxi-500 animate-pulse" size={24} />
            <span className="tracking-wide">06 00 00 00 00</span>
            
            {/* Badge "24/7" Rouge pour l'urgence */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-taxi-500 animate-bounce">
              24/7
            </div>
          </a>

          {/* Bouton Email (Secondaire - Blanc Solide) */}
          {/* J'ai supprimé la transparence pour un bouton Blanc pur, beaucoup plus lisible pour les seniors */}
          <a 
            href="mailto:contact@taxi-occitanie.fr"
            className="w-full sm:w-auto bg-white border-2 border-white text-slate-900 px-8 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            <Mail className="text-slate-900" size={24} />
            <span>Demande de devis</span>
          </a>

        </div>

        {/* Message de réassurance en bas */}
        <div className="mt-10 flex items-center justify-center gap-2 text-slate-900 font-semibold text-lg">
          <Clock size={22} className="text-slate-800" />
          <span>Réponse garantie sous 30 minutes</span>
        </div>

      </div>
    </section>
  );
}