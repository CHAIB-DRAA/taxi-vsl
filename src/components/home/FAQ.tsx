import Link from 'next/link';
import { Phone, FileText, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../../lib/siteConfig';

const { contact } = siteConfig;

const faqs = [
  {
    question: 'Comment réserver un taxi conventionné à Toulouse ?',
    answer: `Il vous faut d'abord une Prescription Médicale de Transport (PMT) signée par votre médecin. Ensuite, appelez-nous au ${contact.phoneDisplay} avec votre numéro de sécurité sociale et la date de votre rendez-vous. Nous nous occupons du reste.`,
    action: {
      label: `Appeler le ${contact.phoneDisplay}`,
      href: `tel:${contact.phone}`,
      icon: Phone,
    },
  },
  {
    question: 'Dois-je avancer les frais de transport médical ?',
    answer: 'Non. Si vous êtes en ALD (Affection de Longue Durée) à 100%, nous appliquons le tiers payant intégral : nous facturons directement la CPAM. Vous ne déboursez pas un seul euro. Même pour les trajets longue distance depuis l\'Ariège ou le Tarn.',
    action: {
      label: 'Comprendre le tiers payant',
      href: '/blog/tiers-payant-transport-medical-ald-toulouse',
      icon: FileText,
    },
  },
  {
    question: 'Quelles maladies donnent droit au transport médical remboursé ?',
    answer: 'Les 30 ALD reconnues par la Sécurité Sociale : cancer, insuffisance rénale chronique (dialyse), diabète, maladies cardiovasculaires, sclérose en plaques, Parkinson... La grossesse à partir du 5ème mois, les hospitalisations et les accidents du travail y donnent également droit.',
    action: {
      label: 'Guide complet VSL & CPAM',
      href: '/blog/guide-taxi-vsl-conventionne-cpam-toulouse',
      icon: FileText,
    },
  },
  {
    question: 'Intervenez-vous depuis l\'Ariège, le Tarn ou les Hautes-Pyrénées ?',
    answer: 'Oui. Nous assurons les trajets longue distance depuis tous les départements d\'Occitanie vers les hôpitaux spécialisés de Toulouse. Ces trajets sont remboursables par la CPAM si votre médecin certifie que la spécialité n\'est pas disponible localement.',
    action: {
      label: 'Transport depuis l\'Ariège',
      href: '/blog/taxi-vsl-ariege-pamiers-foix-toulouse',
      icon: MapPin,
    },
  },
  {
    question: 'Faites-vous aussi l\'aéroport et la gare ?',
    answer: 'Absolument. En dehors du transport médical, nous assurons les transferts vers l\'Aéroport Toulouse-Blagnac (24h/24, même à 4h du matin) et la Gare Matabiau. Tarif fixe, suivi des vols et trains en temps réel, aide aux bagages.',
    action: {
      label: 'Service aéroport & gare',
      href: '/courses-privees',
      icon: MapPin,
    },
  },
  {
    question: 'Acceptez-vous les accompagnants et les animaux ?',
    answer: 'Un accompagnant est autorisé si la mention est cochée sur la prescription médicale. Les animaux d\'assistance sont bienvenus. Pour les animaux de compagnie (transport privé), précisez-le lors de la réservation.',
    action: null,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-6 mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-slate-500 text-lg">
            Avant de monter à bord, voici les réponses aux questions que tout le monde se pose.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden open:shadow-lg open:border-blue-200 transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 select-none">
                <h3 className="text-left font-bold text-slate-900 group-open:text-blue-700 transition-colors text-base leading-snug">
                  {faq.question}
                </h3>
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-blue-100 flex items-center justify-center transition-colors">
                  <ArrowRight size={14} className="text-slate-500 group-open:text-blue-600 rotate-90 group-open:rotate-[270deg] transition-transform duration-300" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-0 pt-4">
                <p>{faq.answer}</p>
                {faq.action && (() => {
                  const Icon = faq.action.icon;
                  return (
                    <div className="mt-4">
                      {faq.action.href.startsWith('tel:') ? (
                        <a
                          href={faq.action.href}
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors"
                        >
                          <Icon size={16} /> {faq.action.label}
                        </a>
                      ) : (
                        <Link
                          href={faq.action.href}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
                        >
                          <Icon size={15} /> {faq.action.label} →
                        </Link>
                      )}
                    </div>
                  );
                })()}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center">
          <p className="text-slate-700 font-medium mb-3">
            Une question non couverte ici ? Envoyez-nous un SMS, nous répondons en moins de 10 minutes.
          </p>
          <a
            href={`sms:${contact.phone}`}
            className="inline-block text-yellow-700 font-black hover:text-yellow-800 underline underline-offset-2"
          >
            Envoyer un SMS au {contact.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
}
