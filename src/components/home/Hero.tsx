import { Phone, ShieldCheck, Check, Star, MessageSquare, HeartPulse, Car } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Fond gradient — pas de dépendance externe */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(234,179,8,0.08),transparent_50%)]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="space-y-8 animate-fade-in-up">

          {/* Badges de confiance */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50">
              <ShieldCheck size={15} className="text-blue-400" />
              <span className="text-blue-100 font-bold text-xs uppercase tracking-wider">
                Conventionné CPAM Haute-Garonne
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              </div>
              <span className="text-yellow-100 font-bold text-xs ml-1">5.0 Google</span>
            </div>
          </div>

          {/* H1 — un seul sur la page */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Taxi Conventionné CPAM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Toulouse & Occitanie
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Transport médical remboursé à <span className="text-white font-bold">0€ d'avance</span> vers
            <span className="text-white font-semibold"> Purpan, Rangueil, Oncopole</span> et toutes les cliniques.
            <br className="hidden md:block" />
            Courses privées <span className="text-blue-300 font-semibold">Aéroport · Gare · Événements</span> — disponible 24h/24.
          </p>

          {/* 2 piliers de service */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <Link
              href="/transport-medical"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/40 rounded-xl text-blue-200 font-semibold hover:bg-blue-600/30 transition-all text-sm"
            >
              <HeartPulse size={18} className="text-blue-400" />
              Transport Médical VSL
            </Link>
            <Link
              href="/courses-privees"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-200 font-semibold hover:bg-yellow-500/20 transition-all text-sm"
            >
              <Car size={18} className="text-yellow-400" />
              Courses Privées
            </Link>
          </div>

          {/* CTA principaux */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:0772339892"
              className="group relative w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-8 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-xl font-black text-xl transition-all shadow-[0_0_25px_rgba(234,179,8,0.35)] hover:shadow-[0_0_35px_rgba(234,179,8,0.55)] active:scale-95"
            >
              <Phone size={22} strokeWidth={2.5} className="animate-pulse" />
              07 72 33 98 92
              <div className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm animate-bounce">
                DISPO 24H
              </div>
            </a>
            <a
              href="sms:0772339892?body=Bonjour, je voudrais réserver un taxi..."
              className="w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-8 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl font-bold text-lg transition-all"
            >
              <MessageSquare size={20} />
              Réserver par SMS
            </a>
          </div>

          {/* Arguments de réassurance */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
            {[
              "Tiers Payant Intégral (0€ d'avance)",
              "Agréé CPAM & Préfecture",
              "Véhicule Peugeot 5008 GT",
              "Disponible 24h/24 — 7j/7",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
