import { siteConfig } from "../../../lib/siteConfig";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  /** Set to true for the transport médical page */
  isMedical?: boolean;
}

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  isMedical = false,
}: ServiceSchemaProps) {
  const { domain, contact, address, geo, brand } = siteConfig;

  const provider = {
    "@type": ["TaxiService", "LocalBusiness", ...(isMedical ? ["MedicalBusiness"] : [])],
    "@id": `${domain}/#localbusiness`,
    "name": brand.legalName,
    "telephone": contact.phoneE164,
    "url": domain,
    "address": {
      "@type": "PostalAddress",
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
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": name,
        "description": description,
        "url": url,
        "serviceType": serviceType,
        "provider": provider,
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Occitanie",
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `${domain}/reserver`,
          "servicePhone": contact.phoneE164,
          "availableLanguage": "French",
        },
        ...(isMedical && {
          "category": "Transport médical conventionné CPAM",
          "termsOfService": `${domain}/mentions-legales`,
        }),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": domain },
          { "@type": "ListItem", "position": 2, "name": name, "item": url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
