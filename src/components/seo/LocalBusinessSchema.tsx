export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi 31 Toulouse", // ✅ Ton nouveau nom
    "image": "https://taxi-31-toulouse.fr/opengraph-image.jpg", // Image par défaut
    "@id": "https://taxi-31-toulouse.fr",
    "url": "https://taxi-31-toulouse.fr",
    "telephone": "+33772339892", // ✅ Ton vrai numéro (+33...)
    "priceRange": "€€",
    "paymentAccepted": "Espèces, Carte Bancaire, Tiers Payant (CPAM)", // ✅ Ajout important
    "address": {
      "@type": "PostalAddress",
      // J'ai mis Toulouse Centre pour le SEO, mais mets ton adresse réelle si tu as une fiche Google Business Profile
      "streetAddress": "Toulouse & Agglomération", 
      "addressLocality": "Toulouse",
      "postalCode": "31000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      // Coordonnées centrales de Toulouse pour centrer la recherche
      "latitude": 43.6047, 
      "longitude": 1.4442
    },
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
    "areaServed": [
      // ✅ J'ai élargi la zone pour couvrir tes "alentours"
      { "@type": "City", "name": "Toulouse" },
      { "@type": "City", "name": "Blagnac" }, // Aéroport
      { "@type": "City", "name": "Colomiers" },
      { "@type": "City", "name": "Muret" },
      { "@type": "City", "name": "Balma" },
      { "@type": "City", "name": "Castelginest" }, // Nord Toulouse
      { "@type": "City", "name": "L'Union" },
      { "@type": "City", "name": "Cugnaux" },
      { "@type": "AdministrativeArea", "name": "Haute-Garonne" } // Le département 31
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Transport Médical Conventionné CPAM & VSL" // Mot-clé vital
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}