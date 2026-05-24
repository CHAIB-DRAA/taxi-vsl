import type { Metadata } from "next";
import { Phone, CheckCircle2, AlertCircle, Info, Shield, CreditCard, HeartPulse, Car, Zap } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../../../lib/siteConfig";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Tarifs Taxi VSL Toulouse | Transport Médical & Courses Privées | Taxi31",
  description: "Consultez les tarifs taxi VSL conventionné CPAM à Toulouse. Transport médical pris en charge à 100% avec prescription. Courses privées, aéroport, longue distance. Devis gratuit.",
  keywords: ["tarifs taxi toulouse", "prix taxi VSL", "tarif transport médical CPAM", "taxi conventionné prix", "tarif navette aéroport toulouse"],
  alternates: {
    canonical: "https://www.taxi-31-toulouse.fr/tarifs",
  },
  openGraph: {
    title: "Tarifs Taxi VSL & Transport Médical — Toulouse",
    description: "Tarifs clairs pour votre transport médical conventionné CPAM ou votre course privée depuis Toulouse.",
    url: "https://www.taxi-31-toulouse.fr/tarifs",
    type: "website",
    siteName: "Taxi 31 Toulouse",
    locale: "fr_FR",
    images: [{ url: "https://www.taxi-31-toulouse.fr/og-image.jpg", width: 1200, height: 630, alt: "Tarifs Taxi VSL Conventionné CPAM Toulouse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs Taxi VSL & Transport Médical — Toulouse",
    description: "Tarifs clairs pour votre transport médical conventionné CPAM ou votre course privée depuis Toulouse.",
    images: ["https://www.taxi-31-toulouse.fr/og-image.jpg"],
  },
};

const medicalItems = [
  { label: "Prise en charge", price: "2,40 €", note: "Fixe à chaque course" },
  { label: "Prix au kilomètre", price: "1,05 €/km", note: "Tarif réglementé Occitanie" },
  { label: "Attente & immobilisation", price: "35,00 €/h", note: "Calcul au centième" },
  { label: "Supplément de nuit (20h–7h)", price: "+25 %", note: "Sur le tarif horaire" },
  { label: "Supplément dimanche / jour férié", price: "+25 %", note: "Jours fériés inclus" },
];

const privateItems = [
  { label: "Aéroport Blagnac ↔ Toulouse centre", price: "dès 30 €", note: "Aller simple" },
  { label: "Gare Matabiau ↔ Toulouse centre", price: "dès 15 €", note: "Aller simple" },
  { label: "Navette Toulouse ↔ Muret / Colomiers", price: "dès 25 €", note: "Zone 1 couronne" },
  { label: "Course longue distance (> 100 km)", price: "Sur devis", note: "Tarif au km négociable" },
  { label: "Mise à disposition (demi-journée)", price: "dès 150 €", note: "4h — événements, business" },
  { label: "Transport nuit (20h–7h)", price: "+25 %", note: "Supplément appliqué" },
];

const tarifsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.taxi-31-toulouse.fr/tarifs#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mon transport est-il remboursé par la CPAM ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, si vous avez une prescription médicale de transport. Le remboursement est de 65% pour la majorité des patients et de 100% (sans avance de frais) pour les ALD, dialyse, chimiothérapie et autres cas d'exonération."
      }
    },
    {
      "@type": "Question",
      "name": "Qui peut bénéficier du transport à 100% ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Patients en Affection Longue Durée (ALD 30), dialysés, sous chimiothérapie, hospitalisés ou bénéficiaires de la Complémentaire Santé Solidaire (CSS). La mutuelle prend en charge le reste pour les autres."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il avancer les frais pour le transport médical ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, pour les patients exonérés à 100%. Nous établissons directement la feuille de soins avec la CPAM. Pour les patients avec ticket modérateur, une avance partielle peut être demandée selon votre couverture mutuelle."
      }
    },
    {
      "@type": "Question",
      "name": "Comment est calculé le prix d'un trajet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif est calculé par le taximètre certifié : prise en charge fixe + kilomètres parcourus + temps d'attente éventuel. Les suppléments de nuit et weekend s'appliquent selon les horaires définis par l'arrêté préfectoral."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je demander un devis avant ma course ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, appelez-nous au 07 72 33 98 92 ou réservez via le formulaire en ligne. Nous vous confirmons le tarif estimé avant la course, surtout pour les longues distances."
      }
    }
  ]
};

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tarifsFaqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 px-4 py-1.5 rounded-full mb-6">
            <Zap size={13} className="text-yellow-400" fill="currentColor" />
            <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Tarifs transparents</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Tarifs taxi VSL<br />
            <span className="text-yellow-400">Toulouse & Occitanie</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Transport médical conventionné pris en charge par la CPAM, ou course privée — les prix sont réglementés et affichés sans surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black px-7 py-3.5 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-yellow-500/25"
            >
              <Phone size={18} />
              Devis gratuit : {contact.phoneDisplay}
            </a>
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-2xl transition-all"
            >
              Réserver en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* CPAM Banner */}
      <div className="bg-blue-600 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-sm text-center">
          <Shield size={18} className="shrink-0" />
          <span>
            <strong>Transport médical 100% remboursé</strong> sur prescription médicale (ALD, dialyse, chimiothérapie…) — aucune avance de frais pour les patients en exonération totale.
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* Section 1 : Transport médical */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <HeartPulse className="text-blue-600" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Transport médical conventionné (VSL / Taxi)</h2>
              <p className="text-slate-500 text-sm mt-0.5">Tarifs préfectoraux Occitanie — réglementés et affichés dans le véhicule</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Prestation</th>
                  <th className="text-right px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tarif</th>
                  <th className="hidden sm:table-cell text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Détail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {medicalItems.map((item, i) => (
                  <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4 text-slate-800 font-semibold text-sm">{item.label}</td>
                    <td className="px-6 py-4 text-right font-black text-blue-700 text-sm whitespace-nowrap">{item.price}</td>
                    <td className="hidden sm:table-cell px-6 py-4 text-slate-500 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm leading-relaxed">
              Ces tarifs sont définis par arrêté préfectoral. Le ticket modérateur (35%) est pris en charge par votre mutuelle si vous bénéficiez d&apos;un contrat responsable.
              Pour les patients en <strong>ALD, dialyse ou chimiothérapie</strong>, la prise en charge est à <strong>100%</strong> sans avance de frais.
            </p>
          </div>
        </section>

        {/* Section 2 : Courses privées */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-100 p-2.5 rounded-xl">
              <Car className="text-yellow-600" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Courses privées</h2>
              <p className="text-slate-500 text-sm mt-0.5">Aéroport, gare, longue distance, événementiel — tarifs indicatifs</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Trajet</th>
                  <th className="text-right px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Prix indicatif</th>
                  <th className="hidden sm:table-cell text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Détail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {privateItems.map((item, i) => (
                  <tr key={i} className="hover:bg-yellow-50/40 transition-colors">
                    <td className="px-6 py-4 text-slate-800 font-semibold text-sm">{item.label}</td>
                    <td className="px-6 py-4 text-right font-black text-yellow-700 text-sm whitespace-nowrap">{item.price}</td>
                    <td className="hidden sm:table-cell px-6 py-4 text-slate-500 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              Les tarifs des courses privées sont donnés à titre indicatif et peuvent varier selon la distance réelle, les conditions de circulation et les suppléments applicables.
              Contactez-nous pour un <strong>devis précis et gratuit</strong>.
            </p>
          </div>
        </section>

        {/* Section 3 : Ce qui est inclus */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-8">Ce qui est inclus dans tous nos transports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Véhicule confortable", desc: "Berline récente climatisée, espace bagages, transport fauteuil roulant léger" },
              { title: "Ponctualité garantie", desc: "Alertes SMS de départ, suivi en temps réel, jamais de retard sur vos rendez-vous" },
              { title: "Aide aux démarches CPAM", desc: "Ordonnance de transport, bons de transport, entente préalable : on vous guide" },
              { title: "Disponible 7j/7", desc: "Tôt le matin pour les premiers rendez-vous, tard le soir après les soins" },
              { title: "Conducteur formé", desc: "TPMR, premiers secours, discrétion médicale assurée" },
              { title: "Aucune avance de frais", desc: "Pour les patients 100% (ALD, chimio, dialyse) : la CPAM règle directement" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 : FAQ Tarifs */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-8">Questions fréquentes sur les tarifs</h2>
          <div className="space-y-4">
            {[
              {
                q: "Mon transport est-il remboursé par la CPAM ?",
                a: "Oui, si vous avez une prescription médicale de transport. Le remboursement est de 65% pour la majorité des patients et de 100% (sans avance de frais) pour les ALD, dialyse, chimiothérapie et autres cas d'exonération.",
              },
              {
                q: "Qui peut bénéficier du transport à 100% ?",
                a: "Patients en Affection Longue Durée (ALD 30), dialysés, sous chimiothérapie, hospitalisés ou bénéficiaires de la Complémentaire Santé Solidaire (CSS). La mutuelle prend en charge le reste pour les autres.",
              },
              {
                q: "Faut-il avancer les frais pour le transport médical ?",
                a: "Non, pour les patients exonérés à 100%. Nous établissons directement la feuille de soins avec la CPAM. Pour les patients avec ticket modérateur, une avance partielle peut être demandée selon votre couverture mutuelle.",
              },
              {
                q: "Comment est calculé le prix d'un trajet ?",
                a: "Le tarif est calculé par le taximètre certifié : prise en charge fixe + kilomètres parcourus + temps d'attente éventuel. Les suppléments de nuit et weekend s'appliquent selon les horaires définis par l'arrêté préfectoral.",
              },
              {
                q: "Puis-je demander un devis avant ma course ?",
                a: `Oui, appelez-nous au ${contact.phoneDisplay} ou réservez via le formulaire en ligne. Nous vous confirmons le tarif estimé avant la course, surtout pour les longues distances.`,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard size={20} className="text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Devis immédiat</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Un doute sur le tarif ? Appelez-nous.</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Nous calculons votre trajet, vérifions vos droits CPAM et confirmons le prix avant toute réservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-yellow-500/25"
            >
              <Phone size={20} />
              {contact.phoneDisplay}
            </a>
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all"
            >
              Réserver en ligne
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
