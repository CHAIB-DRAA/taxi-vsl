import { Phone, Mail, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../../lib/siteConfig';

const { contact } = siteConfig;

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 bg-yellow-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-yellow-400 opacity-20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-700/30 px-4 py-1.5 rounded-full mb-8">
          <ShieldCheck size={15} className="text-slate-900" />
          <span className="text-slate-900 font-bold text-xs uppercase tracking-wider">Agréé CPAM & Préfecture 31</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
          Réservez votre transport
          <br />
          <span className="text-white drop-shadow-sm">en toute sérénité</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Transport médical, aéroport ou événement — un seul appel suffit. Réponse garantie.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={`tel:${contact.phone}`}
            className="relative w-full md:w-auto min-w-[260px] bg-slate-900 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl ring-4 ring-yellow-400/40"
          >
            <Phone className="text-yellow-400 animate-pulse" size={24} />
            {contact.phoneDisplay}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-slate-900 uppercase tracking-wide shadow-sm">
              24h/24
            </div>
          </a>

          <a
            href={`sms:${contact.phone}?body=${encodeURIComponent(contact.smsBody)}`}
            className="w-full md:w-auto min-w-[260px] bg-white text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl border-2 border-slate-900"
          >
            <MessageSquare className="text-blue-600" size={22} />
            Envoyer un SMS
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="w-full md:w-auto min-w-[260px] bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            Devis par Email
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-slate-800 font-medium text-sm opacity-80">
          <MapPin size={16} className="shrink-0" />
          <span>Toulouse • Muret • Blagnac • Colomiers • L'Union • Balma • Toute la Haute-Garonne (31)</span>
        </div>

      </div>
    </section>
  );
}
