import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

/**
 * STRATÉGIE SEO 2026 :
 * 1. Priorité 1.0 : Home (Conversion immédiate)
 * 2. Priorité 0.9 : Blog & Hôpitaux (Mots-clés à forte intention médicale)
 * 3. Priorité 0.8 : Gares & Aéroport (Mots-clés business/urgence)
 * 4. Priorité 0.7 : Villes Régionales (SEO Longue traîne)
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxi-31-toulouse.fr';
  const currentDate = new Date();

  // 1. Pages Statiques Fondamentales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reservation`, // Si tu as une page dédiée
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Génération Dynamique Intelligente (Articles de blog & Landing Pages)
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => {
    // Calcul de la priorité selon la catégorie
    let priority = 0.7;
    let freq: 'daily' | 'weekly' | 'monthly' = 'weekly';

    switch (article.category) {
      case 'Hôpitaux':
        priority = 0.9; // Priorité maximale pour le transport sanitaire
        freq = 'daily';
        break;
      case 'Aéroport':
      case 'Gares':
        priority = 0.8;
        freq = 'weekly';
        break;
      case 'Région':
        priority = 0.75;
        freq = 'weekly';
        break;
      default:
        priority = 0.7;
        freq = 'weekly';
    }

    return {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : currentDate,
      changeFrequency: freq,
      priority: priority,
    };
  });

  // 3. Pages de conformité (Signaux de confiance Google)
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Fusion et filtrage (pour éviter les URLs cassées ou doublons)
  const allPages = [...staticPages, ...blogPages, ...legalPages];
  
  // Suppression des doublons potentiels par URL
  return allPages.filter((page, index, self) =>
    index === self.findIndex((p) => p.url === page.url)
  );
}