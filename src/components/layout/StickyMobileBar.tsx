import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { siteConfig } from '../../../lib/siteConfig';

const { contact } = siteConfig;

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700 px-4 py-3">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${contact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-black text-sm"
        >
          <Phone size={18} strokeWidth={2.5} />
          Appeler
        </a>
        <a
          href={`sms:${contact.phone}?body=${encodeURIComponent(contact.smsBody)}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-white py-3 rounded-xl font-bold text-sm"
        >
          <MessageSquare size={18} />
          SMS
        </a>
        <a
          href="/reserver"
          className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 py-3 rounded-xl font-black text-sm"
        >
          <Calendar size={18} />
          Réserver
        </a>
      </div>
    </div>
  );
}
