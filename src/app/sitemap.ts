import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ Ton domaine officiel
  const baseUrl = 'https://www.taxi-31-toulouse.fr';

  // 1. Les pages statiques (Accueil, Mentions...)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`, // La liste des articles
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // 2. Génération dynamique pour tes 69 articles (Villes + Hôpitaux)
  const blogPages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7, // Bonne priorité pour le SEO local
  }));

  // On fusionne tout
  return [...staticPages, ...blogPages];
}