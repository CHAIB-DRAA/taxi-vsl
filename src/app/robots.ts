import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Utilisation de l'URL officielle (www pour le SEO)
  const baseUrl = 'https://www.taxi-31-toulouse.fr'; 

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',            // Autorise l'accueil
        '/blog/',       // ✅ PRIORITÉ : Tes 69 pages de villes et hôpitaux
        '/blog/*',      // Accès complet aux sous-pages
      ],
      disallow: [
        '/_next/',      // Interdit l'indexation du code technique Next.js
        '/api/',        // Interdit les routes API
        '/private/',    // Ton dossier privé
        '/static/',     // Fichiers bruts
      ],
    },
    // Indique le GPS du site aux robots
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}