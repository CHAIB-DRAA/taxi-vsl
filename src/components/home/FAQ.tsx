import Link from 'next/link';
import { Plus, Minus, Phone, FileText, MapPin } from 'lucide-react';

const faqs = [
  {
    question: "Comment réserver mon taxi conventionné ?",
    answer: (
      <>
        C'est très simple. Vous devez avoir une <strong>Prescription Médicale de Transport</strong> (Bon de transport) signée par votre médecin au préalable.
        <br /><br />
        Ensuite, appelez-nous directement. Nous aurons besoin de votre numéro de sécu et de la date du rendez-vous.
      </>
    ),
    // Ajout d'un bouton d'action direct (CTA)
    action: (
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a href="tel:0772339892" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          <Phone size={18} /> Appeler le 07 72 33 98 92
        </a>
      </div>
    )
  },
  {
    question: "Dois-je avancer les frais de transport ?",
    answer: (
      <>
        Non, <strong>pas d'avance de frais</strong> avec Taxi 31 ! Si vous êtes en ALD (Affection Longue Durée) à 100%, nous pratiquons le <strong>Tiers Payant intégral</strong> avec la CPAM de la Haute-Garonne et les autres caisses.
        <br /><br />
        Pour comprendre exactement quels documents fournir au chauffeur, consultez notre guide complet sur le remboursement.
      </>
    ),
    // LIEN CLUSTER VERS ARTICLE ALD/REMBOURSEMENT
    action: (
      <div className="mt-3">
        <Link href="/blog/remboursement-transport-ald-100-tiers-payant" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline">
          <FileText size={16} /> Voir le guide du remboursement à 100%
        </Link>
      </div>
    )
  },
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer: (
      <>
        Nous sommes basés au nord de Toulouse et couvrons <strong>toute la Haute-Garonne (31)</strong>. 
        <br /><br />
        Nous assurons les départs depuis toutes les communes périphériques (Muret, Blagnac, Colomiers, L'Union...) vers les centres de soins de la région.
      </>
    ),
    // LIEN CLUSTER VERS LA LISTE DES VILLES
    action: (
      <div className="mt-3">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline">
          <MapPin size={16} /> Vérifier si ma ville est desservie
        </Link>
      </div>
    )
  },
  {
    question: "Faites-vous aussi les gares et aéroports ?",
    answer: (
      <>
        Oui, tout à fait. En dehors des transports médicaux, nous assurons les transferts privés vers l'<strong>Aéroport de Toulouse-Blagnac</strong> et la Gare Matabiau, 24h/24 sur réservation.
        <br/>
        Idéal pour les départs matinaux (4h du matin) où les VTC se font rares.
      </>
    ),
    // LIEN CLUSTER VERS ARTICLE AEROPORT
    action: (
      <div className="mt-3">
        <Link href="/blog/reservation-taxi-aeroport-toulouse-blagnac-nuit" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline">
          ✈️ Voir les tarifs Aéroport & Gare
        </Link>
      </div>
    )
  },
  {
    question: "Acceptez-vous les animaux ou accompagnants ?",
    answer: (
      <>
        Un accompagnant est autorisé si la mention "Nécessite un accompagnant" est cochée sur votre prescription médicale. 
        <br/>
        Pour les animaux d'assistance (chiens guides), ils sont bien entendu les bienvenus à bord. Pour les animaux de compagnie en transport privé, merci de nous le préciser à la réservation.
      </>
    ),
    action: null
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Aide & Infos Pratiques
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-6 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-slate-600 text-lg">
            Tout ce que vous devez savoir avant de monter à bord.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-slate-50 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-blue-100/50 open:border-blue-200 transition-all duration-300"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-slate-900 font-bold text-lg hover:text-blue-700 transition-colors select-none">
                <h3 className="text-left">{faq.question}</h3>
                <span className="relative size-5 shrink-0 text-blue-500 bg-white rounded-full shadow-sm p-0.5">
                  <Plus className="absolute inset-0 size-full opacity-100 group-open:opacity-0 transition-opacity rotate-0 group-open:rotate-90 duration-300" />
                  <Minus className="absolute inset-0 size-full opacity-0 group-open:opacity-100 transition-opacity rotate-90 group-open:rotate-0 duration-300" />
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base border-t border-transparent group-open:border-slate-100 mt-2">
                <p>{faq.answer}</p>
                
                {/* Insertion dynamique des liens/actions */}
                {faq.action && (
                   <div className="mt-2 pt-2">
                     {faq.action}
                   </div>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Note de bas de page rassurante (EEAT) */}
        <div className="mt-12 text-center bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
            <p className="text-slate-700 font-medium">
                Une question spécifique non traitée ici ? 
                <br className="hidden sm:block" />
                N'hésitez pas à nous envoyer un SMS, nous répondons généralement dans les 10 minutes.
            </p>
            <a href="sms:0772339892" className="inline-block mt-3 text-yellow-700 font-bold underline hover:text-yellow-800">
                Envoyer un SMS au 07 72 33 98 92
            </a>
        </div>

      </div>
    </section>
  );
}