export default function LocalBusinessSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "TaxiService", // Google sait précisément ce que c'est
      "name": "Taxi Occitanie",
      "image": "https://taxi-occitanie.fr/icon.png", // Mettez une URL d'image valide
      "@id": "https://taxi-occitanie.fr",
      "url": "https://taxi-occitanie.fr",
      "telephone": "+33600000000",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centre Ville",
        "addressLocality": "Aucamville",
        "postalCode": "31140",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6667, // Coordonnées d'Aucamville
        "longitude": 1.4333
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
        { "@type": "City", "name": "Aucamville" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "Muret" },
        { "@type": "City", "name": "Blagnac" },
        { "@type": "City", "name": "Colomiers" }
      ],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transport Médical Conventionné CPAM"
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