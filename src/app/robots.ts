import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // ✅ Mise à jour critique : Ton vrai nom de domaine
  const baseUrl = 'https://taxi-31-toulouse.fr'; 

  return {
    rules: {
      userAgent: '*', // Tous les robots (Google, Bing, Yahoo...)
      allow: '/',     // Ils ont le droit de tout visiter
      disallow: '/private/', // Sauf les dossiers privés (admin, etc.)
    },
    // Indique à Google où trouver la carte complète du site
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}