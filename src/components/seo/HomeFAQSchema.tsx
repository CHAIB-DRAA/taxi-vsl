import { siteConfig } from "../../../lib/siteConfig";

export default function HomeFAQSchema() {
  const { contact, domain } = siteConfig;
  const faqItems = [
    {
      question: "Comment réserver un taxi conventionné CPAM à Toulouse ?",
      answer: `Munissez-vous d'une Prescription Médicale de Transport (PMT) signée par votre médecin, puis appelez-nous au ${contact.phoneDisplay}. Nous aurons besoin de votre numéro de sécurité sociale, de la date et du lieu de votre rendez-vous médical.`
    },
    {
      question: "Dois-je avancer les frais de transport médical ?",
      answer: "Non. Si vous êtes en ALD (Affection Longue Durée) à 100%, nous pratiquons le tiers payant intégral : nous facturons directement la CPAM. Vous ne déboursez pas un seul euro. Pour les autres situations, un remboursement partiel est possible selon votre situation."
    },
    {
      question: "Quelles maladies donnent droit au transport médical remboursé ?",
      answer: "Les principales ALD prises en charge : cancer, insuffisance rénale chronique (dialyse), diabète insulino-dépendant, maladies cardiovasculaires graves, sclérose en plaques, maladie de Parkinson. La liste complète comporte 30 ALD reconnues par la Sécurité Sociale."
    },
    {
      question: "Assurez-vous les transports depuis l'Ariège, le Tarn ou les Hautes-Pyrénées ?",
      answer: "Oui. Nous assurons les trajets longue distance depuis tous les départements d'Occitanie vers les hôpitaux de Toulouse. Ces trajets sont remboursables par la CPAM si votre médecin précise que la spécialité n'est pas disponible dans l'établissement de proximité."
    },
    {
      question: "Faites-vous aussi les courses privées (aéroport, gare, mariages) ?",
      answer: "Absolument. En dehors du transport médical, nous assurons les transferts vers l'Aéroport Toulouse-Blagnac (24h/24, dès 4h du matin), la Gare Matabiau, et les événements privés (mariages, séminaires, déplacements professionnels)."
    },
    {
      question: "Intervenez-vous depuis Cahors, Carcassonne, Rodez ou Mende ?",
      answer: "Oui. Nous couvrons toute l'Occitanie : Lot (Cahors, Figeac), Aude (Carcassonne, Narbonne), Aveyron (Rodez, Millau), Lozère (Mende) et Hautes-Pyrénées (Lourdes). Ces trajets longue distance vers les hôpitaux spécialisés de Toulouse sont remboursables par la CPAM si la spécialité n'est pas disponible localement."
    },
    {
      question: "La radiothérapie et la sclérose en plaques sont-elles prises en charge ?",
      answer: "Oui. La radiothérapie (séances quotidiennes sur plusieurs semaines) et la sclérose en plaques (SEP, ALD à 100%) donnent toutes deux droit au tiers payant intégral. Nous établissons un planning sur toute la durée du traitement pour que vous n'ayez pas à réorganiser votre transport à chaque séance."
    },
    {
      question: "Quel véhicule utilisez-vous pour le transport médical ?",
      answer: "Nous utilisons une Peugeot 5008 GT, véhicule spacieux, confortable et régulièrement désinfecté — particulièrement important pour les patients immunodéprimés (greffe, chimiothérapie). Le véhicule est équipé pour les personnes à mobilité réduite et des sièges auto enfants sont disponibles sur demande."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${domain}/#faq`,
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
