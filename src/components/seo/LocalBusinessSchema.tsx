const CITIES_31 = [
  "Toulouse","Muret","Colomiers","Tournefeuille","Blagnac","Plaisance-du-Touch",
  "Cugnaux","Balma","Ramonville-Saint-Agne","Castanet-Tolosan","Fonsorbes",
  "L'Union","Saint-Orens-de-Gameville","Saint-Jean","Castelginest","Portet-sur-Garonne",
  "Auterive","Revel","Saint-Lys","Léguevin","Frouzins","Grenade","Aussonne",
  "Cornebarrieu","Launaguet","Aucamville","Fronton","Villemur-sur-Tarn","Beauzelle",
  "Bruguières","Fenouillet","Saint-Jory","Gratentour","Montastruc-la-Conseillère",
  "Verfeil","Carbonne","Cazères","Rieumes","Seysses","Eaunes","Labarthe-sur-Lèze",
  "Pins-Justaret","Roques","Saubens","Mondonville","Pibrac","Brax","Lherm",
  "Labège","Escalquens","Lanta","Caraman","Nailloux","Villefranche-de-Lauragais",
  "Montgiscard","L'Isle-Jourdain","Cintegabelle","Rieux-Volvestre"
];

const REGIONAL_CITIES = [
  "Pamiers","Foix","Saint-Girons","Albi","Castres","Montauban","Auch","Tarbes",
  "Cahors","Carcassonne","Rodez","Millau","Mende","Figeac","Lourdes","Narbonne"
];

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.taxi-31-toulouse.fr/#organization",
        "name": "OCCITANIE MEDI MOBILITY",
        "alternateName": "Taxi 31 Toulouse",
        "url": "https://www.taxi-31-toulouse.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.taxi-31-toulouse.fr/logo.png",
          "width": 300,
          "height": 100
        },
        "sameAs": [
          "https://g.page/r/Cbh2nxTvVS7cEAE",
          "https://www.taxi-31-toulouse.fr"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33772339892",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French"],
          "contactOption": "TollFree",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      },
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://www.taxi-31-toulouse.fr/#localbusiness",
        "name": "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
        "description": "Taxi conventionné CPAM et VSL en Occitanie. Transport médical assis (ALD, chimiothérapie, dialyse, radiothérapie) avec tiers payant intégral — 0€ d'avance. Courses privées : aéroport Toulouse-Blagnac, gare Matabiau, mariages, événements. Disponible 24h/24.",
        "url": "https://www.taxi-31-toulouse.fr",
        "telephone": "+33772339892",
        "email": "contact@taxi-31-toulouse.fr",
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Carte bancaire, Tiers payant CPAM",
        "hasMap": "https://maps.google.com/?cid=15905025186406049849",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6 rue Buissonnière Bat A",
          "addressLocality": "Fonbeauzard",
          "postalCode": "31140",
          "addressRegion": "Haute-Garonne",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.6843",
          "longitude": "1.4230"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Occitanie" },
          { "@type": "AdministrativeArea", "name": "Haute-Garonne", "identifier": "31" },
          { "@type": "AdministrativeArea", "name": "Ariège", "identifier": "09" },
          { "@type": "AdministrativeArea", "name": "Tarn", "identifier": "81" },
          { "@type": "AdministrativeArea", "name": "Tarn-et-Garonne", "identifier": "82" },
          { "@type": "AdministrativeArea", "name": "Gers", "identifier": "32" },
          { "@type": "AdministrativeArea", "name": "Hautes-Pyrénées", "identifier": "65" },
          { "@type": "AdministrativeArea", "name": "Lot", "identifier": "46" },
          { "@type": "AdministrativeArea", "name": "Aude", "identifier": "11" },
          { "@type": "AdministrativeArea", "name": "Aveyron", "identifier": "12" },
          { "@type": "AdministrativeArea", "name": "Lozère", "identifier": "48" },
          ...CITIES_31.map(name => ({ "@type": "City", "name": name })),
          ...REGIONAL_CITIES.map(name => ({ "@type": "City", "name": name })),
        ],
        "openingHoursSpecification": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ].map(day => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": day,
          "opens": "00:00",
          "closes": "23:59"
        })),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Occitanie Médi Mobility",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transport Médical Conventionné CPAM (VSL/TAP)",
                "serviceType": "Medical Transport",
                "description": "Transport médical assis pour ALD, chimiothérapie, dialyse, radiothérapie, sclérose en plaques, insuffisance rénale. Tiers payant intégral, 0€ d'avance. Depuis toute l'Occitanie vers les hôpitaux de Toulouse."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Navette Aéroport Toulouse-Blagnac",
                "serviceType": "Airport Transfer",
                "description": "Transferts aéroport 24h/24, accueil personnalisé, sièges auto gratuits, suivi des vols en temps réel. Tarif fixe garanti."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Gare Matabiau Toulouse",
                "serviceType": "Train Station Transfer",
                "description": "Transferts gare SNCF, aide aux bagages, ponctualité garantie, suivi des horaires de train en temps réel."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Transport Événementiel & Business",
                "serviceType": "Private Hire",
                "description": "Taxi pour mariages, séminaires, événements professionnels en Occitanie. Facturation mensuelle entreprise disponible."
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
