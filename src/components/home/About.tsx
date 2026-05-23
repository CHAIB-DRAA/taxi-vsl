import { ShieldCheck, Clock, Heart, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../../../lib/siteConfig';

const { contact, brand } = siteConfig;

const values = [
  {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'Conventionné CPAM',
    desc: 'Agréé par l\'Assurance Maladie pour vos transports médicaux avec tiers payant intégral.',
  },
  {
    icon: Clock,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    title: 'Ponctualité Rigoureuse',
    desc: 'Vos rendez-vous médicaux et vos vols n\'attendent pas. Nous non plus.',
  },
  {
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Accompagnement Humain',
    desc: 'Un soutien au-delà du volant : aide aux démarches, accompagnement jusqu\'au service.',
  },
];

export default function About() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo + stats */}
          <div className="relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
              <Image
                src="/taxi-pic.jpg"
                alt="Chauffeur Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              {/* Badge flottant */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                <div className="bg-yellow-500 p-2.5 rounded-xl">
                  <Award className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{brand.legalName}</p>
                  <p className="text-slate-500 text-xs">Taxi VSL conventionné CPAM — Toulouse</p>
                </div>
              </div>
            </div>

            {/* Chiffres */}
            <div className="absolute -bottom-6 right-6 flex gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-xl text-center min-w-[90px]">
                <span className="text-2xl font-black block">10+</span>
                <span className="text-xs font-semibold opacity-80 uppercase tracking-wide">Ans d'expérience</span>
              </div>
              <div className="bg-yellow-500 text-slate-900 p-4 rounded-2xl shadow-xl text-center min-w-[90px]">
                <span className="text-2xl font-black block">5.0</span>
                <span className="text-xs font-semibold opacity-70 uppercase tracking-wide">Note Google</span>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6 md:pt-0 pt-10">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Votre Chauffeur à Toulouse</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Plus qu'un trajet, <br />
              <span className="text-yellow-500">un accompagnement de confiance</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Basé à Toulouse et intervenant sur toute l'Occitanie, je mets plus de 10 ans d'expérience au service de votre mobilité. Spécialisé dans le transport conventionné VSL, j'attache une importance capitale à la sérénité de mes passagers — qu'ils se rendent à une chimio, à une dialyse, ou à l'aéroport.
            </p>

            {/* Valeurs */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className={`${v.bg} p-2.5 rounded-xl shrink-0`}>
                      <Icon className={`h-5 w-5 ${v.color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{v.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                <Phone size={18} /> {contact.phoneDisplay}
              </a>
              <Link
                href="/a-propos"
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 px-6 py-3 rounded-xl font-semibold transition-all text-sm"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
