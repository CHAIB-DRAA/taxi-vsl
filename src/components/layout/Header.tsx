import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '../../../lib/siteConfig';

const { contact, brand } = siteConfig;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo cliquable qui ramène à l'accueil */}
        <Link href="/">
          <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
            TAXI <span className="text-yellow-500">{brand.highlight}</span> TOULOUSE
          </div>
          <div className="text-xs uppercase text-slate-500 font-semibold tracking-wider">
            {brand.taglineAlt}
          </div>
        </Link>

        {/* Boutons d'action */}
        <div className="hidden md:flex gap-3">
          {/* Bouton WhatsApp avec ton vrai numéro */}
          <a 
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all font-medium" 
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18}/> 
            <span>WhatsApp</span>
          </a>

          {/* Bouton Appel avec ton vrai numéro affiché (plus rassurant que juste "Appeler") */}
          <a 
            className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-900/20 font-bold" 
            href={`tel:${contact.phone}`}
          >
            <Phone size={18}/>
            <span>{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}