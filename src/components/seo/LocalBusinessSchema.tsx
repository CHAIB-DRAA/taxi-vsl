export default function LocalBusinessSchema() {
  // Liste élargie pour couvrir les trajets longue distance (SEO Régional)
  const cities = [
    "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
    "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
    "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
    "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
    "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
    "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
    "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
    "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax", "Lherm",
    "Albi", "Auch", "Montauban", "Castres", "Tarbes" // Villes régionales ajoutées
  ];

  const hospitals = [
    "Hôpital Purpan (CHU)", "Hôpital Rangueil", "Oncopole Claudius Regaud", 
    "Clinique Pasteur", "Clinique des Cèdres", "Clinique de l'Union", 
    "Clinique Croix du Sud", "Hôpital Larrey", "Clinique d'Occitanie"
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. L'ENTITÉ ORGANISATION (Pour l'Autorité)
      {
        "@type": "Organization",
        "@id": "https://www.taxi-31-toulouse.fr/#organization",
        "name": "OCCITANIE MEDI MOBILITY",
        "url": "https://www.taxi-31-toulouse.fr",
        "logo": "https://www.taxi-31-toulouse.fr/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33772339892",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French", "English"]
        }
      },
      // 2. LE SERVICE LOCAL (Pour le SEO Local)
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://www.taxi-31-toulouse.fr/#localbusiness",
        "name": "Taxi Conventionné 31 - Occitanie Médi Mobility",
        "description": `Taxi conventionné CPAM et VSL à Toulouse. Transport médical assis (Tiers Payant) vers ${hospitals.slice(0, 4).join(', ')}. Transferts Gare Matabiau et Aéroport Blagnac 24h/7j.`,
        "url": "https://www.taxi-31-toulouse.fr",
        "telephone": "+33772339892",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Route de Seysses",
          "addressLocality": "Toulouse",
          "postalCode": "31100",
          "addressRegion": "Occitanie",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5684",
          "longitude": "1.4152"
        },
        "image": [
          "https://www.taxi-31-toulouse.fr/photos/peugeot-5008-taxi.jpg",
          "https://www.taxi-31-toulouse.fr/photos/interieur-confort.jpg"
        ],
        // Zone de chalandise étendue
        "areaServed": cities.map(city => ({
          "@type": "City",
          "name": city
        })),
        // Horaires (Disponibilité Totale)
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        // Avis Clients (Crucial pour le SEO - Remplace par tes vrais chiffres)
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124"
        },
        // Catalogue d'offres avec types spécifiques
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catalogue de transport Occitanie Médi Mobility",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Conventionné CPAM / VSL",
                "description": "Transport médical assis pour ALD, chimiothérapie, dialyse. Tiers payant intégral sans avance de frais."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Aéroport Toulouse-Blagnac",
                "description": "Transferts aéroportuaires premium en Peugeot 5008 GT. Accueil personnalisé."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Gare Matabiau",
                "description": "Liaisons gares toulousaines et régionales vers la Haute-Garonne."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}