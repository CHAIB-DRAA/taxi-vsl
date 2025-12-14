import { Phone, MessageCircle } from 'lucide-react';
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-blue-900">TAXI OCCITANIE</div>
          <div className="text-xs uppercase text-slate-500">Conventionné & Privé</div>
        </div>
        <div className="hidden md:flex gap-3">
          <a className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2" href="https://wa.me/33600000000">
            <MessageCircle size={18}/> WhatsApp
          </a>
          <a className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-2" href="tel:0600000000">
            <Phone size={18}/> Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
