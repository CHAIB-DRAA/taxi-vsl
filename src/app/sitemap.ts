import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxi-occitanie.fr'; // REMPLACEZ PAR VOTRE VRAI DOMAINE QUAND VOUS L'AUREZ

  // 1. Les pages statiques de base
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // 2. Génération dynamique pour vos 70 articles
  const blogPages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(), // Idéalement la date de l'article, mais new Date() fonctionne
    changeFrequency: 'monthly' as const,
    priority: 0.7, // Priorité haute pour le SEO local
  }));

  return [...staticPages, ...blogPages];
}