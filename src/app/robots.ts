import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.taxi-31-toulouse.fr';

  return {
    rules: [

      // ── Googlebot : règles principales ──────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog/',
          '/reserver',
          '/mentions-legales',
          '/_next/static',   // CSS & JS nécessaires au rendu des pages
          '/_next/image',    // Images optimisées Next.js
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          // ✅ Paramètres inutiles ciblés — au lieu de bloquer TOUS les ?
          // On bloque uniquement les params qui génèrent du contenu dupliqué
          '/?utm_source=*',
          '/?utm_medium=*',
          '/?utm_campaign=*',
          '/?ref=*',
          '/?session=*',
          '/?token=*',
          '/?fbclid=*',    // Paramètre Facebook (évite les doublons d'URL)
          '/?gclid=*',     // Paramètre Google Ads
        ],
      },

      // ── Autres bots SEO (Bing, etc.) ────────────────────────────────────
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/',
          '/reserver',
          '/mentions-legales',
          '/_next/static',
          '/_next/image',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/?utm_source=*',
          '/?utm_medium=*',
          '/?utm_campaign=*',
          '/?ref=*',
          '/?session=*',
          '/?token=*',
          '/?fbclid=*',
          '/?gclid=*',
        ],
      },

      // ── Bots réseaux sociaux : accès total pour les aperçus de partage ──
      // Facebook, WhatsApp, Twitter/X ont besoin de lire vos pages
      // pour générer les previews quand quelqu'un partage votre lien
      {
        userAgent: [
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
          'Slackbot',
        ],
        allow: ['/'],
      },

      // ── Bots indésirables à bloquer complètement ────────────────────────
      // Ces bots scrapent sans apporter de trafic, ils gaspillent votre
      // bande passante et votre crawl budget
      {
        userAgent: [
          'AhrefsBot',      // Crawler SEO concurrent (scraping)
          'SemrushBot',     // Idem
          'MJ12bot',        // Majestic crawler
          'DotBot',         // OpenSite crawler
          'BLEXBot',        // Scraper
        ],
        disallow: ['/'],
      },

    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}