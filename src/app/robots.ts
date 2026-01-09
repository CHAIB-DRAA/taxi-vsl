import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.taxi-31-toulouse.fr'; 

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/', // ✅ CRUCIAL : Autorise Google à lire tes styles et scripts pour le rendu
        '/blog/',
      ],
      disallow: [
        '/api/',        // Sécurité : on cache les routes API
        '/admin/',      // Si tu as un dossier admin
        '/private/',    // Tes fichiers confidentiels
        '/*?*',         // ✅ OPTIMISATION : Empêche l'indexation des URLs avec paramètres (évite le contenu dupliqué)
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}