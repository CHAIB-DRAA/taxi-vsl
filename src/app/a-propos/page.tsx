import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Heart, Award, Phone, MapPin, Star } from "lucide-react";
import StickyMobileBar from "../../components/layout/StickyMobileBar";

export const metadata: Metadata = {
  title: "À Propos — Occitanie Médi Mobility",
  description:
    "Découvrez Occitanie Médi Mobility : votre chauffeur de taxi conventionné CPAM à Toulouse. Plus de 10 ans d'expérience dans le transport médical et les courses privées en Occitanie.",
  alternates: {
    canonical: "https://www.taxi-31-toulouse.fr/a-propos",
  },
};

const values = [
  { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50", title: "Conventionné CPAM", desc: "Agrément de l'Assurance Maladie pour tous vos transports médicaux avec tiers payant intégral." },
  { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50", title: "Ponctualité Absolue", desc: "Vos rendez-vous médicaux, vos vols et vos rendez-vous professionnels n'attendent pas." },
  { icon: Heart, color: "text-red-500", bg: "bg-red-50", title: "Accompagnement Humain", desc: "Un soutien qui va au-delà du volant : aide administrative, accompagnement jusqu'au service." },
  { icon: Award, color: "text-purple-600", bg: "bg-purple-50", title: "Expertise Locale", desc: "Tous les hôpitaux, toutes les cliniques, toutes les entrées de Toulouse — nous les connaissons." },
];

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-32 md:pb-16">

      {/* Hero */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
                <Image
                  src="/taxi-pic.jpg"
                  alt="Chauffeur Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-2xl p-4 shadow-lg">
                  <p className="font-black text-slate-900">Occitanie Médi Mobility</p>
                  <p className="text-slate-500 text-sm flex items-center gap-1.5 mt-1">
                    <MapPin size={13} className="text-yellow-500" />
                    Toulouse & toute l'Occitanie
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 right-5 flex gap-3">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-xl text-center">
                  <span className="text-2xl font-black block">10+</span>
                  <span className="text-[10px] font-semibold opacity-80 uppercase tracking-wide">Ans d'expérience</span>
                </div>
                <div className="bg-yellow-500 text-slate-900 p-4 rounded-2xl shadow-xl text-center">
                  <div className="flex justify-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="text-slate-900" />)}
                  </div>
                  <span className="text-lg font-black block">5.0</span>
                  <span className="text-[10px] font-semibold opacity-70 uppercase tracking-wide">Note Google</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8 md:pt-0">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Votre Chauffeur à Toulouse</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Plus qu'un trajet, <br />
                <span className="text-yellow-500">un accompagnement de confiance</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Basé à Toulouse et intervenant sur toute l'Occitanie, je mets plus de 10 ans d'expérience au service de votre mobilité. Spécialisé dans le transport conventionné VSL, j'attache une importance capitale à la sérénité de chaque passager — qu'il se rende à une chimiothérapie, une dialyse, ou à l'aéroport pour un vol d'affaires.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Créer <strong>Occitanie Médi Mobility</strong>, c'était un choix délibéré : proposer un transport médical qui soit vraiment humain, pas seulement logistique. Parce qu'une personne malade qui monte dans un taxi n'a pas besoin d'un chauffeur — elle a besoin d'un partenaire de confiance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="tel:0772339892" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                  <Phone size={18} /> 07 72 33 98 92
                </a>
                <a href="https://wa.me/33772339892" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-green-400 hover:text-green-700 px-6 py-3 rounded-xl font-semibold transition-all text-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir Occitanie Médi Mobility ?</h2>
            <div className="h-1 w-16 bg-yellow-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow">
                  <div className={`${v.bg} p-3 rounded-2xl shrink-0`}>
                    <Icon className={`h-6 w-6 ${v.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Besoin d'un transport immédiat ou planifié ?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Disponible 24h/24 pour vos trajets médicaux vers les hôpitaux de Toulouse, l'aéroport ou la gare Matabiau.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="tel:0772339892" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-xl text-white flex items-center justify-center gap-2 transition-all">
              <Phone size={22} /> 07 72 33 98 92
            </a>
            <a href="/reserver" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-2 transition-all">
              <Award size={20} /> Réserver en ligne
            </a>
          </div>
        </div>
      </section>

      <StickyMobileBar />
    </main>
  );
}
