export default function LocalBusinessSchema() {
  const cities = [
    "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
    "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
    "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
    "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
    "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
    "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
    "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
    "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax"
  ];

  const hospitals = [
    "Hôpital Purpan (CHU)", "Hôpital Rangueil", "Oncopole Claudius Regaud", 
    "Clinique Pasteur", "Clinique des Cèdres", "Clinique de l'Union", 
    "Clinique d'Occitanie (Muret)", "Hôpital Pierre-Paul Riquet", "Clinique Rive Gauche",
    "Clinique Croix du Sud", "Hôpital Larrey", "Hôpital des Enfants", "Hôpital Joseph Ducuing",
    "Clinique Saint-Exupéry", "Hôpital Marchant"
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService", // Type spécifique reconnu par Google
    "name": "OCCITANIE MEDI MOBILITY - Taxi Conventionné 31",
    "alternateName": "Taxi 31 Toulouse",
    "image": [
        "https://www.taxi-31-toulouse.fr/icon.png",
        // Idéalement, ajoute ici l'URL de la photo de ton 5008 GT
    ],
    "@id": "https://www.taxi-31-toulouse.fr/#organization",
    "url": "https://www.taxi-31-toulouse.fr",
    "telephone": "+33772339892", // Format international requis
    "email": "contact@taxi-31-toulouse.fr",
    "priceRange": "€€",
    
    // Description optimisée SEO et Mots-clés
    "description": `Service de Taxi Conventionné CPAM et VSL basé à Toulouse. Transport médical assis avec prise en charge à 100% (Tiers Payant) vers ${hospitals.slice(0, 5).join(', ')} et tous les établissements de soins. Navette Aéroport Blagnac et Gare Matabiau 24h/24.`,
    
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Route de Seysses",
      "addressLocality": "Toulouse",
      "postalCode": "31100",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    
    // Coordonnées GPS (Mets les tiennes précisément si possible pour le Local SEO)
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5684",
      "longitude": "1.4152"
    },

    // Zone d'intervention (Stratégie Cluster Géographique)
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city,
      "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR",
          "addressRegion": "Occitanie"
      }
    })),

    // Signaux de confiance (EEAT)
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "paymentAccepted": "Cash, Credit Card, Tiers Payant CPAM, Virement",
    "currenciesAccepted": "EUR",

    // Catalogue des services (Mots-clés sémantiques)
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport Médical et Privé",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Taxi Conventionné VSL (Tiers Payant)",
            "description": "Transport médical remboursé à 100% pour ALD, Dialyse, Radiothérapie."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Navette Aéroport Toulouse-Blagnac",
            "description": "Transfert privé vers l'aéroport départ 24h/24 sur réservation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport d'Enfant (CMPP/CAMSP)",
            "description": "Accompagnement sécurisé pour enfants vers les centres de soins."
          }
        }
      ]
    },

    // Action possible (Réservation directe depuis Google)
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.taxi-31-toulouse.fr/#contact",
        "inLanguage": "fr-FR",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Commander un taxi"
      }
    },

    // Liens d'autorité (Remplis avec tes vrais liens quand tu les auras)
    "sameAs": [
      "https://www.linkedin.com/in/ton-profil", 
      // "https://www.facebook.com/ton-page-taxi",
      // L'URL de ta fiche Google Maps sera cruciale ici
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}