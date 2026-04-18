export default function LocalBusinessSchema() {

  // ══════════════════════════════════════════════════════════════════
  // COUVERTURE MAXIMALE : Région + 13 Départements + Villes par dept
  // Logique : du plus large au plus précis (entonnoir SEO)
  // ══════════════════════════════════════════════════════════════════

  const areaServed = [

    // ── NIVEAU 1 : Région ─────────────────────────────────────────
    {
      "@type": "AdministrativeArea",
      "name": "Occitanie",
      "sameAs": "https://www.wikidata.org/wiki/Q18578307"
    },

    // ── NIVEAU 2 + 3 : Départements + leurs villes principales ───

    // Haute-Garonne (31) — base d'opération
    { "@type": "AdministrativeArea", "name": "Haute-Garonne", "identifier": "31" },
    { "@type": "City", "name": "Toulouse" },
    { "@type": "City", "name": "Muret" },
    { "@type": "City", "name": "Blagnac" },
    { "@type": "City", "name": "Colomiers" },
    { "@type": "City", "name": "Tournefeuille" },
    { "@type": "City", "name": "Plaisance-du-Touch" },
    { "@type": "City", "name": "Cugnaux" },
    { "@type": "City", "name": "Balma" },
    { "@type": "City", "name": "Ramonville-Saint-Agne" },
    { "@type": "City", "name": "Castanet-Tolosan" },
    { "@type": "City", "name": "Saint-Gaudens" },
    { "@type": "City", "name": "Fonsorbes" },
    { "@type": "City", "name": "L'Union" },
    { "@type": "City", "name": "Saint-Orens-de-Gameville" },
    { "@type": "City", "name": "Saint-Jean" },
    { "@type": "City", "name": "Castelginest" },
    { "@type": "City", "name": "Portet-sur-Garonne" },
    { "@type": "City", "name": "Auterive" },
    { "@type": "City", "name": "Revel" },
    { "@type": "City", "name": "Saint-Lys" },
    { "@type": "City", "name": "Leguevin" },
    { "@type": "City", "name": "Frouzins" },
    { "@type": "City", "name": "Grenade" },
    { "@type": "City", "name": "Aussonne" },
    { "@type": "City", "name": "Cornebarrieu" },
    { "@type": "City", "name": "Launaguet" },
    { "@type": "City", "name": "Aucamville" },
    { "@type": "City", "name": "Fronton" },
    { "@type": "City", "name": "Villemur-sur-Tarn" },
    { "@type": "City", "name": "Beauzelle" },
    { "@type": "City", "name": "Bruguières" },
    { "@type": "City", "name": "Fenouillet" },
    { "@type": "City", "name": "Saint-Jory" },
    { "@type": "City", "name": "Gratentour" },
    { "@type": "City", "name": "Montastruc-la-Conseillère" },
    { "@type": "City", "name": "Verfeil" },
    { "@type": "City", "name": "Carbonne" },
    { "@type": "City", "name": "Cazères" },
    { "@type": "City", "name": "Rieumes" },
    { "@type": "City", "name": "Seysses" },
    { "@type": "City", "name": "Eaunes" },
    { "@type": "City", "name": "Labarthe-sur-Lèze" },
    { "@type": "City", "name": "Pins-Justaret" },
    { "@type": "City", "name": "Roques" },
    { "@type": "City", "name": "Saubens" },
    { "@type": "City", "name": "Mondonville" },
    { "@type": "City", "name": "Pibrac" },
    { "@type": "City", "name": "Brax" },
    { "@type": "City", "name": "Lherm" },

    // Tarn (81)
    { "@type": "AdministrativeArea", "name": "Tarn", "identifier": "81" },
    { "@type": "City", "name": "Albi" },
    { "@type": "City", "name": "Castres" },
    { "@type": "City", "name": "Gaillac" },
    { "@type": "City", "name": "Mazamet" },
    { "@type": "City", "name": "Lavaur" },
    { "@type": "City", "name": "Carmaux" },
    { "@type": "City", "name": "Graulhet" },
    { "@type": "City", "name": "Saint-Sulpice-la-Pointe" },

    // Ariège (09)
    { "@type": "AdministrativeArea", "name": "Ariège", "identifier": "09" },
    { "@type": "City", "name": "Foix" },
    { "@type": "City", "name": "Pamiers" },
    { "@type": "City", "name": "Saint-Girons" },
    { "@type": "City", "name": "Tarascon-sur-Ariège" },
    { "@type": "City", "name": "Mirepoix" },
    { "@type": "City", "name": "Saverdun" },
    { "@type": "City", "name": "Lavelanet" },

    // Tarn-et-Garonne (82)
    { "@type": "AdministrativeArea", "name": "Tarn-et-Garonne", "identifier": "82" },
    { "@type": "City", "name": "Montauban" },
    { "@type": "City", "name": "Castelsarrasin" },
    { "@type": "City", "name": "Moissac" },
    { "@type": "City", "name": "Caussade" },
    { "@type": "City", "name": "Lafrançaise" },

    // Gers (32)
    { "@type": "AdministrativeArea", "name": "Gers", "identifier": "32" },
    { "@type": "City", "name": "Auch" },
    { "@type": "City", "name": "Condom" },
    { "@type": "City", "name": "Fleurance" },
    { "@type": "City", "name": "Vic-Fezensac" },
    { "@type": "City", "name": "Mirande" },
    { "@type": "City", "name": "L'Isle-Jourdain" },

    // Hautes-Pyrénées (65)
    { "@type": "AdministrativeArea", "name": "Hautes-Pyrénées", "identifier": "65" },
    { "@type": "City", "name": "Tarbes" },
    { "@type": "City", "name": "Lourdes" },
    { "@type": "City", "name": "Bagnères-de-Bigorre" },
    { "@type": "City", "name": "Vic-en-Bigorre" },
    { "@type": "City", "name": "Luz-Saint-Sauveur" },

    // Aude (11)
    { "@type": "AdministrativeArea", "name": "Aude", "identifier": "11" },
    { "@type": "City", "name": "Carcassonne" },
    { "@type": "City", "name": "Narbonne" },
    { "@type": "City", "name": "Limoux" },
    { "@type": "City", "name": "Castelnaudary" },

    // Aveyron (12)
    { "@type": "AdministrativeArea", "name": "Aveyron", "identifier": "12" },
    { "@type": "City", "name": "Rodez" },
    { "@type": "City", "name": "Millau" },
    { "@type": "City", "name": "Villefranche-de-Rouergue" },
    { "@type": "City", "name": "Decazeville" },

    // Lot (46)
    { "@type": "AdministrativeArea", "name": "Lot", "identifier": "46" },
    { "@type": "City", "name": "Cahors" },
    { "@type": "City", "name": "Figeac" },
    { "@type": "City", "name": "Gourdon" },

    // Hérault (34)
    { "@type": "AdministrativeArea", "name": "Hérault", "identifier": "34" },
    { "@type": "City", "name": "Montpellier" },
    { "@type": "City", "name": "Béziers" },
    { "@type": "City", "name": "Sète" },

    // Gard (30)
    { "@type": "AdministrativeArea", "name": "Gard", "identifier": "30" },
    { "@type": "City", "name": "Nîmes" },
    { "@type": "City", "name": "Alès" },
    { "@type": "City", "name": "Bagnols-sur-Cèze" },

    // Pyrénées-Orientales (66)
    { "@type": "AdministrativeArea", "name": "Pyrénées-Orientales", "identifier": "66" },
    { "@type": "City", "name": "Perpignan" },
    { "@type": "City", "name": "Canet-en-Roussillon" },

    // Lozère (48)
    { "@type": "AdministrativeArea", "name": "Lozère", "identifier": "48" },
    { "@type": "City", "name": "Mende" },
    { "@type": "City", "name": "Florac" },
  ];

  const hospitals = [
    "Hôpital Purpan (CHU)", "Hôpital Rangueil",
    "Oncopole Claudius Regaud", "Clinique Pasteur",
    "Clinique des Cèdres", "Clinique de l'Union",
    "Hôpital Larrey", "Clinique d'Occitanie"
  ];

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
      answer: "Nous couvrons toute la région Occitanie et ses 13 départements. Nous assurons les trajets longue distance depuis l'Ariège, le Tarn, les Hautes-Pyrénées, le Gers, l'Aveyron et tous les autres départements vers les hôpitaux de Toulouse."
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
    "@graph": [

      // ── 1. ORGANISATION ──────────────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://www.taxi-31-toulouse.fr/#organization",
        "name": "OCCITANIE MEDI MOBILITY",
        "url": "https://www.taxi-31-toulouse.fr",
        "logo": "https://www.taxi-31-toulouse.fr/logo.png",
        "sameAs": [
          "https://g.page/r/Cbh2nxTvVS7cEAE",
          // "https://www.facebook.com/VOTRE_PAGE",
          // "https://www.pagesjaunes.fr/VOTRE_FICHE",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33772339892",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French"]
        }
      },

      // ── 2. SERVICE LOCAL ─────────────────────────────────────────────────
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://www.taxi-31-toulouse.fr/#localbusiness",
        "name": "Taxi Conventionné 31 - Occitanie Médi Mobility",
        "description": `Taxi conventionné CPAM en Occitanie. Transport médical assis (VSL) avec Tiers Payant intégral (0€ avance) vers ${hospitals.slice(0, 4).join(', ')}. Trajets longue distance depuis tous les départements d'Occitanie : Albi, Foix, Pamiers, Montauban, Auch, Tarbes, Carcassonne, Rodez, Cahors → Toulouse. Transferts Aéroport Toulouse-Blagnac et Gare Matabiau 24h/24 7j/7.`,
        "url": "https://www.taxi-31-toulouse.fr",
        "telephone": "+33772339892",
        "email": "contact@taxi-31-toulouse.fr",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Route de Seysses", // ← Ajouter le numéro si possible
          "addressLocality": "Toulouse",
          "postalCode": "31100",
          "addressRegion": "Haute-Garonne",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5684",
          "longitude": "1.4152"
        },
        // ⚠️ Vérifiez que ces images existent sur le serveur avant déploiement
        "image": [
          "https://www.taxi-31-toulouse.fr/photos/peugeot-5008-taxi.jpg",
          "https://www.taxi-31-toulouse.fr/photos/interieur-confort.jpg"
        ],
        // ✅ Couverture maximale : région + 13 départements + ~100 villes
        "areaServed": areaServed,
        "openingHoursSpecification": [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday"
        ].map(day => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": day,
          "opens": "00:00",
          "closes": "23:59"
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "124",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de transport Occitanie Médi Mobility",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Conventionné CPAM / VSL Occitanie",
                "description": "Transport médical assis pour ALD, chimiothérapie, dialyse depuis toute l'Occitanie vers les hôpitaux de Toulouse. Tiers payant intégral, 0€ d'avance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Longue Distance Occitanie → Toulouse",
                "description": "Trajets inter-départements depuis Albi, Foix, Pamiers, Auch, Tarbes, Lourdes, Montauban, Carcassonne, Rodez, Cahors vers Toulouse et ses hôpitaux (Purpan, Rangueil, Oncopole). Devis sur demande."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Aéroport Toulouse-Blagnac",
                "description": "Transferts aéroportuaires depuis toute la région Occitanie. Accueil personnalisé avec pancarte, sièges auto gratuits, disponible dès 4h du matin."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Gare Matabiau Toulouse",
                "description": "Liaisons depuis et vers la Gare Matabiau depuis toute l'Occitanie. Ponctualité garantie."
              }
            }
          ]
        }
      },

      // ── 3. FAQ PAGE (rich snippets Google) ──────────────────────────────
      {
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
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}