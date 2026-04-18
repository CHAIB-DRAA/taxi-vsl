/**
 * HomeFAQSchema — Schema FAQ à importer UNIQUEMENT dans app/page.tsx
 *
 * Ce composant est séparé de LocalBusinessSchema volontairement :
 * le schema FAQPage doit correspondre au contenu de la page sur laquelle
 * il est injecté. Le placer dans le layout global le mettait sur toutes
 * les pages (villes, hôpitaux...) où il n'y a pas de FAQ — ce qui peut
 * invalider le rich snippet ou être considéré comme trompeur par Google.
 *
 * Usage dans app/page.tsx :
 *   import HomeFAQSchema from "@/components/seo/HomeFAQSchema";
 *   ...
 *   <HomeFAQSchema />
 */
export default function HomeFAQSchema() {
  const faqItems = [
    {
      question: "Comment réserver mon taxi conventionné ?",
      answer: "Munissez-vous d'une Prescription Médicale de Transport (bon de transport) signée par votre médecin, puis appelez-nous au 07 72 33 98 92. Nous aurons besoin de votre numéro de sécurité sociale et de la date du rendez-vous."
    },
    {
      question: "Dois-je avancer les frais de transport ?",
      answer: "Non, pas d'avance de frais avec Taxi 31 ! Si vous êtes en ALD (Affection Longue Durée) à 100%, nous pratiquons le Tiers Payant intégral avec la CPAM de la Haute-Garonne et les autres caisses."
    },
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "Nous couvrons toute la région Occitanie et ses 13 départements. Nous assurons les trajets longue distance depuis l'Ariège, le Tarn, les Hautes-Pyrénées, le Gers et tous les autres départements vers les hôpitaux de Toulouse."
    },
    {
      question: "Faites-vous aussi les gares et aéroports ?",
      answer: "Oui, nous assurons les transferts vers l'Aéroport de Toulouse-Blagnac et la Gare Matabiau, 24h/24 sur réservation, y compris pour les départs matinaux dès 4h du matin."
    },
    {
      question: "Acceptez-vous les animaux ou accompagnants ?",
      answer: "Un accompagnant est autorisé si la mention 'Nécessite un accompagnant' est cochée sur la prescription médicale. Les animaux d'assistance sont les bienvenus. Pour les animaux de compagnie, merci de le préciser à la réservation."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.taxi-31-toulouse.fr/#faq",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}