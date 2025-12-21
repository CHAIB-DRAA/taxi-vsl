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
    "@type": "TaxiService",
    "name": "OCCITANIE MEDI MOBILITY",
    "image": "https://www.taxi-31-toulouse.fr/icon.png",
    "@id": "https://www.taxi-31-toulouse.fr",
    "url": "https://www.taxi-31-toulouse.fr",
    "telephone": "07 72 33 98 92",
    "priceRange": "$$",
    "description": `Taxi conventionné CPAM assurant le transport médical vers ${hospitals.join(', ')}. Service disponible sur Toulouse et l'ensemble de la Haute-Garonne.`,
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
    // Génération automatique des zones desservies à partir de ta liste
    "areaServed": cities.map(city => ({
      "@type": "AdministrativeArea",
      "name": city
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport OCCITANIE MEDI MOBILITY",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Taxi Conventionné CPAM - Prise en charge 100%"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport de personnes à mobilité réduite (PMR)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Liaisons Hôpitaux et Cliniques Toulouse"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}