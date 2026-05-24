import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Plane, Train, Heart, Briefcase, CheckCircle2, ArrowRight, Star } from "lucide-react";
import StickyMobileBar from "../../../components/layout/StickyMobileBar";
import ServiceSchema from "../../../components/seo/ServiceSchema";
import { siteConfig } from "../../../../lib/siteConfig";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Taxi Privé Toulouse — Aéroport Blagnac, Gare, Mariage & Business",
  description:
    "Taxi privé à Toulouse : navette Aéroport Toulouse-Blagnac dès 4h (24h/24), Gare Matabiau, transport mariage & événements, déplacements pros. Tarif fixe garanti — ☎ 07 72 33 98 92.",
  alternates: {
    canonical: "https://www.taxi-31-toulouse.fr/courses-privees",
  },
  openGraph: {
    title: "Taxi Privé Toulouse — Aéroport, Gare, Mariage & Business",
    description: "Navette Aéroport Toulouse-Blagnac 24h/24, Gare Matabiau, mariages, séminaires. Tarif fixe, ponctualité garantie.",
    url: "https://www.taxi-31-toulouse.fr/courses-privees",
    type: "website",
    siteName: "Taxi 31 Toulouse",
    locale: "fr_FR",
    images: [{ url: "https://www.taxi-31-toulouse.fr/og-image.jpg", width: 1200, height: 630, alt: "Taxi Privé Toulouse Aéroport Mariage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Privé Toulouse — Aéroport, Gare, Mariage & Business",
    description: "Navette aéroport 24h/24, gare Matabiau, mariages. Tarif fixe garanti. ☎ 07 72 33 98 92",
    images: ["https://www.taxi-31-toulouse.fr/og-image.jpg"],
  },
};

const services = [
  {
    id: "aeroport",
    icon: Plane,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Aéroport Toulouse-Blagnac",
    slug: "taxi-prive-aeroport-toulouse-blagnac",
    features: [
      "Disponible dès 4h du matin",
      "Accueil personnalisé à l'arrivée (pancarte)",
      "Suivi des vols en temps réel",
      "Sièges auto enfants gratuits",
      "Tarif fixe annoncé à la réservation",
    ],
    desc: "Votre vol ne vous attend pas. Nous non plus. Ponctualité absolue pour vos départs et arrivées à Blagnac, même aux horaires les plus improbables.",
  },
  {
    id: "gare",
    icon: Train,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Gare Matabiau",
    slug: "taxi-gare-matabiau-toulouse",
    features: [
      "Ponctualité garantie — marge de sécurité calculée",
      "Aide au chargement des bagages",
      "Suivi des retards SNCF",
      "Prise en charge à la sortie du quai",
      "Tarif fixe sans compteur",
    ],
    desc: "TGV, Intercités, liaisons régionales — pour ne jamais rater votre train, faites-nous confiance pour le trajet jusqu'à Matabiau.",
  },
  {
    id: "evenements",
    icon: Heart,
    color: "text-pink-600",
    bg: "bg-pink-50",
    title: "Mariages & Événements",
    slug: "taxi-mariage-evenement-toulouse-occitanie",
    features: [
      "Véhicule sobre et élégant (Peugeot 5008 GT)",
      "Chauffeur en tenue professionnelle",
      "Navettes mairie, église, salle de réception",
      "Retour tardif après soirée",
      "Devis personnalisé sur demande",
    ],
    desc: "Pour que le jour J soit parfait jusque dans les détails du transport. Mariés, témoins, famille — nous assurons les navettes avec discrétion et élégance.",
  },
  {
    id: "business",
    icon: Briefcase,
    color: "text-slate-700",
    bg: "bg-slate-100",
    title: "Business & Professionnel",
    slug: "taxi-professionnel-entreprise-toulouse",
    features: [
      "Facturation mensuelle pour les entreprises",
      "Discrétion absolue",
      "Accueil clients et partenaires",
      "Disponibilité étendue (soirées, week-ends)",
      "Séminaires et salons professionnels",
    ],
    desc: "Un transport qui reflète l'image de votre entreprise. Pour accueillir vos clients, accompagner vos collaborateurs et gérer vos déplacements pro sans tracas.",
  },
];

export default function CoursesPrivees() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-32 md:pb-16">
      <ServiceSchema
        name="Taxi Privé Toulouse — Aéroport Blagnac, Gare Matabiau, Mariage & Business"
        description="Taxi privé à Toulouse disponible 24h/24 : navette Aéroport Toulouse-Blagnac dès 4h du matin, Gare Matabiau avec suivi des retards, transport mariage et événements, déplacements professionnels. Tarif fixe garanti à la réservation."
        url="https://www.taxi-31-toulouse.fr/courses-privees"
        serviceType="Private Car Service"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-1.5 rounded-full mb-6">
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-yellow-200 font-bold text-xs uppercase tracking-wider">Tarif fixe · Ponctualité garantie</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Courses Privées à Toulouse
            <br />
            <span className="text-yellow-400">Aéroport · Gare · Mariages · Business</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Un chauffeur fiable, un véhicule confortable, un tarif fixe sans surprise. Pour vos déplacements personnels et professionnels à Toulouse et en Occitanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-black text-xl transition-all shadow-xl"
            >
              <Phone size={22} strokeWidth={2.5} />
              {contact.phoneDisplay}
            </a>
            <a
              href={`sms:${contact.phone}?body=${encodeURIComponent(contact.smsBody)}`}
              className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Devis par SMS
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Nos services de courses privées</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Chaque déplacement est unique. Nous adaptons notre service à vos besoins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} id={s.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className={`${s.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`h-7 w-7 ${s.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                  <div className="space-y-2.5 mb-6">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${s.slug}`}
                    className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:underline"
                  >
                    En savoir plus <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarifs indicatifs */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Tarifs indicatifs</h2>
            <p className="text-slate-500">Tarifs fixes, annoncés à la réservation. Pas de surprise.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {[
              { trajet: "Toulouse Centre → Aéroport Blagnac", prix: "À partir de 35€" },
              { trajet: "Muret / Cugnaux → Aéroport", prix: "À partir de 45€" },
              { trajet: "Toulouse Centre → Gare Matabiau", prix: "À partir de 20€" },
              { trajet: "Blagnac / Colomiers → Gare Matabiau", prix: "À partir de 30€" },
              { trajet: "Transport Mariage (forfait journée)", prix: "Sur devis" },
              { trajet: "Mise à disposition (heure)", prix: "Sur devis" },
            ].map((t, i) => (
              <div key={t.trajet} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-slate-50/50" : ""} border-b border-slate-100 last:border-0`}>
                <span className="text-slate-700 font-medium text-sm">{t.trajet}</span>
                <span className="font-black text-slate-900 text-sm shrink-0 ml-4">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">* Tarifs indicatifs. Le tarif définitif est confirmé lors de la réservation selon les modalités exactes du trajet.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-yellow-500 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Réservez votre course privée</h2>
          <p className="text-slate-700 mb-8">Appelez-nous ou envoyez un SMS. Nous confirmons en quelques minutes.</p>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-black text-xl transition-all shadow-xl"
          >
            <Phone size={22} /> {contact.phoneDisplay}
          </a>
        </div>
      </section>

      <StickyMobileBar />
    </main>
  );
}
