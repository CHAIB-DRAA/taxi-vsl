import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      {/* pb-safe gère l'espace pour la barre en bas des iPhones récents */}
      
      <div className="bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex h-20">
        
        {/* Bouton Gauche : WhatsApp (Vert) */}
        <a 
          href="https://wa.me/33600000000"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-green-50 active:bg-green-100 transition-colors border-r border-slate-100"
        >
          <MessageCircle size={28} className="text-[#25D366]" />
          <span className="text-xs font-bold text-slate-700">WhatsApp</span>
        </a>

        {/* Bouton Droit : Appeler (Bleu Médical ou Jaune Taxi) */}
        {/* J'ai choisi Bleu pour le côté "Sérieux/Médical" rassurant pour les seniors */}
        <a 
          href="tel:+33600000000"
          className="flex-[1.5] flex flex-col items-center justify-center gap-1 bg-blue-600 active:bg-blue-700 text-white transition-colors"
        >
          <Phone size={28} className="animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-wide">Appeler le Taxi</span>
        </a>

      </div>
    </div>
  );
}