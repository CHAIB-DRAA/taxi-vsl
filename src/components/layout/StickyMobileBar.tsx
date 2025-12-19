import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      {/* pb-safe gère l'espace pour la barre en bas des iPhones récents */}
      
      <div className="bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex h-20">
        
        {/* Bouton Gauche : WhatsApp (Vert pour l'habitude utilisateur) */}
        <a 
          href="https://wa.me/33772339892"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-slate-50 active:bg-green-50 hover:bg-green-50 transition-colors border-r border-slate-200"
        >
          <MessageCircle size={24} className="text-[#25D366]" />
          <span className="text-xs font-bold text-slate-600">WhatsApp</span>
        </a>

        {/* Bouton Droit : APPEL PRIORITAIRE (Jaune Taxi) */}
        <a 
          href="tel:0772339892"
          className="flex-[1.6] flex flex-col items-center justify-center gap-1 bg-yellow-500 active:bg-yellow-600 text-slate-900 transition-colors"
        >
          <Phone size={24} className="fill-slate-900 animate-pulse" />
          <span className="text-sm font-extrabold uppercase tracking-wide">
            APPELER LE TAXI
          </span>
        </a>

      </div>
    </div>
  );
}