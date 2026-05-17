import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.taxi-31-toulouse.fr";

  return {
    rules: [
      {
        // Googlebot : tout autoriser sauf les zones techniques/privées
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/", "/*?*utm_", "/*?*fbclid", "/*?*gclid"],
      },
      {
        // Tous les bots : même règle permissive
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Réseaux sociaux : accès complet pour les previews
        userAgent: ["facebookexternalhit", "Twitterbot", "LinkedInBot", "WhatsApp", "Slackbot"],
        allow: ["/"],
      },
      {
        // Scrapers SEO concurrents : bloqués
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
