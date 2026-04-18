import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

/**
 * STRATÉGIE SEO 2026 :
 * 1. Priorité 1.0 : Home (Conversion immédiate)
 * 2. Priorité 0.9 : Hôpitaux (Mots-clés à forte intention médicale)
 * 3. Priorité 0.8 : Aéroport & Gares (Mots-clés business/urgence)
 * 4. Priorité 0.75 : Région Occitanie (Longue traîne inter-départements)
 * 5. Priorité 0.7 : Villes Haute-Garonne (SEO local)
 * 6. Priorité 0.3 : Pages légales (Confiance Google, non-indexation prioritaire)
 *
 * RÈGLE lastModified :
 * - new Date()    → pages dont le contenu change vraiment souvent (accueil, blog index)
 * - Date hardcodée → pages statiques stables (Google ignorera les dates menteuses)
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxi-31-toulouse.fr';
  const today = new Date();

  // ── 1. Pages statiques fondamentales ──────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,           // ✅ L'accueil peut changer souvent (avis, offres)
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,           // ✅ L'index blog change à chaque nouvel article
      changeFrequency: 'weekly',     // ✅ Corrigé : 'daily' était excessif pour un index
      priority: 0.9,
    },
    {
      // ✅ CORRIGÉ : harmonisé avec robots.ts — vérifiez le vrai nom dans app/
      // Utilisez '/reserver' OU '/reservation' selon votre dossier app/
      url: `${baseUrl}/reserver`,
      lastModified: new Date('2025-01-01'), // ← Remplacez par la vraie date de création
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // ── 2. Articles dynamiques avec priorité par catégorie ────────────────────
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => {
    let priority = 0.7;
    let freq: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly';

    switch (article.category) {
      case 'Hôpitaux':
        priority = 0.9;
        freq = 'weekly';   // ✅ Corrigé : 'daily' était excessif pour des pages stables
        break;
      case 'Aéroport':
      case 'Gares':
        priority = 0.8;
        freq = 'monthly';  // ✅ Corrigé : ces pages ne changent pas toutes les semaines
        break;
      case 'Région':
        priority = 0.75;
        freq = 'monthly';
        break;
      case 'Villes':       // ✅ AJOUTÉ : catégorie villes maintenant explicite
        priority = 0.7;
        freq = 'monthly';
        break;
      default:
        priority = 0.65;
        freq = 'monthly';
    }

    return {
      url: `${baseUrl}/blog/${article.slug}`,
      // ✅ On utilise la vraie date de l'article si disponible
      // Si article.date est absent, on met une date stable plutôt que today
      lastModified: article.date ? new Date(article.date) : new Date('2025-01-01'),
      changeFrequency: freq,
      priority,
    };
  });

  // ── 3. Pages légales (signaux de confiance RGPD) ──────────────────────────
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date('2025-01-01'), // ← Date réelle de rédaction
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      // ✅ Page RGPD recommandée — créez-la si elle n'existe pas encore
      // Retirez cette entrée si la page génère une 404 (risque de pénalité sitemap)
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date('2025-01-01'), // ← Date réelle de rédaction
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ── Fusion + déduplication ────────────────────────────────────────────────
  const allPages = [...staticPages, ...blogPages, ...legalPages];

  return allPages.filter(
    (page, index, self) => index === self.findIndex((p) => p.url === page.url)
  );
}