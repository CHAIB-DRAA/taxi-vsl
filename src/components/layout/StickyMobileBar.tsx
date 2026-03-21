'use client';

import { Phone, Calendar } from 'lucide-react';

export default function StickyMobileNav() {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 pb-6 flex gap-3 z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.1)]">
      
      {/* Bouton RÉSERVER (Bleu Médical) */}
      <a 
        href="/reserver"
        
        rel="noopener noreferrer"
        className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-blue-600/20"
      >
        <Calendar size={18} /> 
        <span className="text-sm">RÉSERVER</span>
      </a>

      {/* Bouton APPELER (Jaune Taxi) */}
      <a 
        href="tel:0772339892"
        className="flex-[1.2] bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-900 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-black transition-all shadow-lg shadow-yellow-400/20"
      >
        <Phone size={18} className="fill-slate-900" /> 
        <span className="text-sm">APPELER</span>
      </a>

    </div>
  );
}