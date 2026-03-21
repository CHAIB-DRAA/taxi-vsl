import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 pb-6 flex gap-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {/* Note: pb-6 ajoute un peu d'espace en bas pour les iPhones récents sans barre physique */}

      {/* Bouton WhatsApp (Vert) */}
      <a 
        className="flex-1 bg-green-500 hover:bg-green-600 active:scale-95 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition-all" 
        href="https://wa.me/33772339892"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} /> 
        <span className="text-sm">WhatsApp</span>
      </a>

      {/* Bouton Appeler (Jaune Taxi - Plus large et plus visible) */}
      <a 
        className="flex-[1.5] bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-900 py-3 rounded-xl flex items-center justify-center gap-2 font-extrabold shadow-sm transition-all" 
        href="tel:0772339892"
      >
        <Phone size={20} className="fill-slate-900" /> 
        <span className="text-sm">APPELER</span>
      </a>

    </div>
  );
}