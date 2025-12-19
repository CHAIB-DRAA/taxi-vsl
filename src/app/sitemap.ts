import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ 1. Ton VRAI domaine (Crucial pour le SEO)
  const baseUrl = 'https://taxi-31-toulouse.fr';

  return [
    {
      // La Page d'Accueil (La plus importante)
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // On dit à Google qu'on est actifs
      priority: 1, // Priorité MAXIMALE
    },
    {
      // Les Mentions Légales
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3, // Moins important pour le classement
    },
    // 💡 NOTE : Si plus tard tu ajoutes un blog, on décommentera cette partie.
    // Pour l'instant, on laisse propre pour éviter les erreurs de compilation.
  ];
}