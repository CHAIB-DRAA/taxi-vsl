import type { Metadata } from "next";
import Link from "next/link";
import { Phone, HeartPulse, ShieldCheck, CheckCircle2, ArrowRight, FileText, Clock } from "lucide-react";
import StickyMobileBar from "../../../components/layout/StickyMobileBar";

export const metadata: Metadata = {
  title: "Transport Médical Conventionné CPAM Toulouse — VSL & TAP 0€ d'avance",
  description:
    "Taxi VSL conventionné CPAM à Toulouse. Chimiothérapie Oncopole, dialyse Rangueil, consultations ALD — tiers payant intégral, 0€ d'avance. Depuis toute l'Occitanie. ☎ 07 72 33 98 92",
  alternates: {
    canonical: "https://www.taxi-31-toulouse.fr/transport-medical",
  },
  openGraph: {
    title: "Transport Médical VSL Conventionné CPAM Toulouse — 0€ d'avance",
    description: "Taxi VSL agréé CPAM : chimiothérapie, dialyse, ALD. Tiers payant intégral depuis toute l'Occitanie vers les hôpitaux de Toulouse.",
    url: "https://www.taxi-31-toulouse.fr/transport-medical",
    type: "website",
    siteName: "Taxi 31 Toulouse",
    locale: "fr_FR",
    images: [{ url: "https://www.taxi-31-toulouse.fr/og-image.jpg", width: 1200, height: 630, alt: "Transport Médical VSL CPAM Toulouse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport Médical VSL CPAM Toulouse — 0€ d'avance",
    description: "Taxi VSL agréé CPAM : chimiothérapie, dialyse, ALD. Tiers payant intégral. ☎ 07 72 33 98 92",
    images: ["https://www.taxi-31-toulouse.fr/og-image.jpg"],
  },
};

const hospitals = [
  { name: "CHU Purpan", spec: "Neurologie, Pédiatrie, Traumatologie", slug: "taxi-vsl-hopital-purpan-chu-toulouse" },
  { name: "Hôpital Rangueil", spec: "Cardiologie, Greffe rénale, Dialyse", slug: "taxi-vsl-hopital-rangueil-toulouse" },
  { name: "Oncopole Claudius Regaud", spec: "Chimiothérapie, Radiothérapie, Immunothérapie", slug: "taxi-vsl-oncopole-chimiotherapie-toulouse" },
  { name: "Clinique Pasteur", spec: "Cardiologie interventionnelle", slug: null },
  { name: "Clinique de l'Union", spec: "Dialyse, Chirurgie", slug: null },
  { name: "Clinique d'Occitanie (Muret)", spec: "Chirurgie, Urgences", slug: null },
];

const soins = [
  { titre: "Chimiothérapie & Immunothérapie", desc: "Séances à l'Oncopole Claudius Regaud. Planning sur toute la durée du traitement.", icon: "🔬" },
  { titre: "Dialyse (3x/semaine)", desc: "Service régulier avec planning mensuel. Conduite douce après séance.", icon: "💧" },
  { titre: "Radiothérapie", desc: "Trajets quotidiens sur plusieurs semaines, gestion administrative intégrale.", icon: "⚡" },
  { titre: "Consultations spécialisées", desc: "Cardiologie, neurologie, oncologie, rhumatologie... tout type de spécialité.", icon: "🏥" },
  { titre: "Suivi post-opératoire", desc: "Retour à la maison après chirurgie, surveillance médicale en voiture.", icon: "🩺" },
  { titre: "Longue distance Occitanie", desc: "Depuis Ariège, Tarn, Hautes-Pyrénées, Gers vers Toulouse. CPAM remboursable.", icon: "📍" },
];

export default function TransportMedical() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-32 md:pb-16">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={15} className="text-blue-300" />
            <span className="text-blue-200 font-bold text-xs uppercase tracking-wider">Conventionné CPAM Haute-Garonne</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Transport Médical Conventionné
            <span className="text-yellow-400"> à Toulouse</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-10">
            Taxi VSL agréé pour vos soins en ALD. <strong className="text-white">Tiers payant intégral — 0€ d'avance.</strong> Nous gérons tout avec la CPAM à votre place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0772339892"
              className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-black text-xl transition-all shadow-xl"
            >
              <Phone size={22} strokeWidth={2.5} />
              07 72 33 98 92
            </a>
            <Link
              href="/blog/guide-taxi-vsl-conventionne-cpam-toulouse"
              className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all"
            >
              <FileText size={18} /> Guide complet VSL & CPAM
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Comment fonctionne le transport médical remboursé ?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">En 5 étapes simples, de la prescription à la prise en charge complète.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: "1", t: "Votre médecin prescrit", d: "Il rédige une Prescription Médicale de Transport (PMT) mentionnant votre ALD et la destination." },
              { n: "2", t: "Vous appelez", d: "Un appel au 07 72 33 98 92 suffit. Nous réservons, nous nous souvenons de vos habitudes." },
              { n: "3", t: "Nous venons vous chercher", d: "À l'heure convenue, à votre domicile ou au lieu de départ de votre choix." },
              { n: "4", t: "Nous vous accompagnons", d: "Jusqu'à l'entrée de votre service si besoin. Nous attendons si votre RDV déborde." },
              { n: "5", t: "Zéro démarche", d: "Nous télétransmettons la facturation à la CPAM. Vous ne payez rien, vous ne faites rien." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{step.t}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de soins */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Pour quels soins faisons-nous le transport ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soins.map((s) => (
              <div key={s.titre} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-slate-900 mb-2">{s.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hôpitaux */}
      <section id="hopitaux" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Hôpitaux & Cliniques desservis</h2>
            <p className="text-slate-500">Nous connaissons chaque établissement, chaque pavillon, chaque accès.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hospitals.map((h) => (
              <div key={h.name} className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="bg-red-100 p-2.5 rounded-xl shrink-0">
                  <HeartPulse className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{h.name}</h3>
                  <p className="text-slate-500 text-sm">{h.spec}</p>
                </div>
                {h.slug && (
                  <Link href={`/blog/${h.slug}`} className="shrink-0 text-blue-600 hover:text-blue-800">
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialyse section */}
      <section id="dialyse" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-2xl shrink-0">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Service Dialyse — Planning Mensuel</h2>
                <p className="text-slate-600 leading-relaxed">
                  La dialyse impose un rythme strict : 3 séances par semaine, pendant des mois voire des années.
                  Nous construisons avec vous un planning stable sur plusieurs mois. Vous n'appelez qu'une seule fois — nous gérons tout le reste.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { t: "Planning mensuel", d: "Réservation unique, trajets automatiques à chaque séance" },
                { t: "Conduite adaptée", d: "Douce et confortable pour votre retour post-séance" },
                { t: "0€ d'avance", d: "Tiers payant CPAM intégral sur prescription néphrologue" },
              ].map((item) => (
                <div key={item.t} className="bg-white p-4 rounded-xl border border-blue-100">
                  <CheckCircle2 size={18} className="text-green-500 mb-2" />
                  <h3 className="font-bold text-slate-900 text-sm">{item.t}</h3>
                  <p className="text-slate-500 text-xs mt-1">{item.d}</p>
                </div>
              ))}
            </div>
            <Link href="/blog/transport-dialyse-conventionne-toulouse" className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:underline">
              En savoir plus sur notre service dialyse <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 bg-slate-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Prêt à réserver votre transport médical ?</h2>
          <p className="text-slate-400 mb-8">Un appel ou un SMS suffit. Nous vous rappelons pour confirmer et organiser vos trajets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0772339892" className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-black text-xl transition-all">
              <Phone size={22} /> 07 72 33 98 92
            </a>
            <a href="sms:0772339892?body=Bonjour, je souhaite un transport médical..." className="flex items-center justify-center gap-2 border border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition-all">
              Envoyer un SMS
            </a>
          </div>
        </div>
      </section>

      <StickyMobileBar />
    </main>
  );
}
