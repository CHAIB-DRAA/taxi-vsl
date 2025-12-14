import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://taxi-occitanie.fr'; // REMPLACEZ PAR VOTRE VRAI DOMAINE

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Par exemple
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
