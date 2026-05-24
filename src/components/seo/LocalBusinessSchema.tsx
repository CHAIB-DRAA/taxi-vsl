import { siteConfig } from "../../../lib/siteConfig";

const { domain, brand, contact, address, geo, google, seo, cities31, regionalCities } = siteConfig;

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
        "name": brand.legalName,
        "alternateName": brand.shortName,
        "url": domain,
        "logo": {
          "@type": "ImageObject",
          "url": `${domain}/logo.png`,
          "width": 300,
          "height": 100
        },
        "sameAs": [
          google.sameAsGPage,
          domain,
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": contact.phoneE164,
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
        "@type": ["TaxiService", "LocalBusiness", "MedicalBusiness"],
        "@id": `${domain}/#localbusiness`,
        "name": seo.localBusinessName,
        "description": seo.localBusinessDescription,
        "url": domain,
        "telephone": contact.phoneE164,
        "email": contact.email,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "47",
          "reviewCount": "47"
        },
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Carte bancaire, Tiers payant CPAM",
        "hasMap": google.mapsUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": address.street,
          "addressLocality": address.city,
          "postalCode": address.postalCode,
          "addressRegion": address.region,
          "addressCountry": address.country,
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.lat,
          "longitude": geo.lng,
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
          ...[...cities31].map(name => ({ "@type": "City", "name": name })),
          ...[...regionalCities].map(name => ({ "@type": "City", "name": name })),
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
          "name": `Services ${brand.legalName}`,
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
