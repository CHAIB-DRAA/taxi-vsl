import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33772339892" // ✅ Ton vrai numéro
      target="_blank"
      rel="noopener noreferrer"
      // 👇 J'ai ajouté 'hidden md:flex'. 
      // Cela signifie : "Caché par défaut (mobile), mais Flexible sur écran Moyen et + (PC)"
      // Comme ça, il ne gêne pas ta barre de navigation mobile en bas.
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-110 group"
    >
      <MessageCircle size={24} fill="white" className="text-white" />
      <span className="font-bold">WhatsApp</span>
      
      {/* Petit point de notification pour attirer l'oeil */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}