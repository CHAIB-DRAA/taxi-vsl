import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxi-31-toulouse.fr';
  const currentDate = new Date(); // Date du jour pour signaler une mise à jour récente

  // 1. Pages stratégiques (Priorité Maximale)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const, // On dit à Google de passer tous les jours
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`, 
      lastModified: currentDate,
      changeFrequency: 'daily' as const, // Crucial : c'est la porte d'entrée vers tes 69 pages
      priority: 0.9,
    },
  ];

  // 2. Génération dynamique (Tes 69 Landing Pages Locales)
  const blogPages = articles.map((article) => {
    // Si la date de l'article est trop vieille, on utilise la date du jour 
    // pour simuler une mise à jour de contenu (très efficace pour l'indexation rapide)
    const lastMod = article.date ? new Date(article.date) : currentDate;

    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const, // 'weekly' est plus incitatif que 'monthly'
      priority: 0.8, // On monte à 0.8 pour dire que ces pages sont importantes
    };
  });

  // 3. Pages secondaires
  const secondaryPages = [
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ];

  return [...staticPages, ...blogPages, ...secondaryPages];
}