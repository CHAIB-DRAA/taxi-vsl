'use client';

import { ShieldCheck, Clock, Heart, Award, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Conventionné CPAM",
      desc: "Agréé par la sécurité sociale pour tous vos transports médicaux avec tiers payant."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Ponctualité Rigoureuse",
      desc: "Parce que vos rendez-vous médicaux et vos vols n'attendent pas."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Accompagnement Humain",
      desc: "Une aide au déplacement et aux formalités administratives pour les patients."
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Section : L'Humain avant tout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Section Photo du chauffeur / véhicule */}
<div className="absolute inset-0 overflow-hidden group">
  
<img src="/taxi-pic.jpg" alt="Taxi 31" />    alt="Chauffeur Taxi 31 Toulouse" 
  
  
  {/* Overlay léger pour faire ressortir le texte si besoin */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
            </div>
            
            <div className="space-y-6">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Votre Chauffeur à Toulouse</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Plus qu'un trajet, un <span className="text-yellow-600">accompagnement</span> de confiance.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Basé à Toulouse et desservant toute l'Occitanie, je mets mon expertise de chauffeur au service de votre mobilité. 
                Spécialisé dans le transport conventionné (VSL), j'attache une importance capitale à la sérénité de mes passagers.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900">10+</span>
                  <span className="text-sm text-slate-500 uppercase">Ans d'expérience</span>
                </div>
                <div className="w-px h-12 bg-slate-200 mx-4"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900">100%</span>
                  <span className="text-sm text-slate-500 uppercase">Avis Positifs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Nos Valeurs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir Taxi 31 Toulouse ?</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA : Engagement immédiat */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un transport immédiat ou planifié ?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Disponible 24h/24 et 7j/7 pour vos trajets vers les hôpitaux de Toulouse, l'aéroport ou la gare Matabiau.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:0772339892" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-2 transition-all">
              <Phone /> 07 72 33 98 92
            </a>
            <Link href="https://vsl-taxi.onrender.com/" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-2 transition-all">
              <Award /> Réserver en ligne
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}