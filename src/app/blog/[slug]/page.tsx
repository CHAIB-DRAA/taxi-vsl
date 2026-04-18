// app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Template complet pour les pages de villes et d'hôpitaux
// À adapter selon votre structure d'articles existante
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles'; // Votre source de données existante

const baseUrl = 'https://www.taxi-31-toulouse.fr';

// ── Types ─────────────────────────────────────────────────────────────────────
interface PageProps {
  params: { slug: string };
}

// ── Génération statique des routes (SSG) ─────────────────────────────────────
// Pré-génère toutes les pages au build → chargement instantané → excellent LCP
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// ── Metadata dynamique par page ───────────────────────────────────────────────
// C'est ici que chaque page obtient son propre title/description/canonical
// SANS ça : toutes vos 50+ pages ont le même titre → duplicate content massif
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return { title: 'Page introuvable' };
  }

  // ── Logique de title selon la catégorie ──────────────────────────────────
  let title = '';
  let description = '';

  switch (article.category) {
    case 'Villes':
      // Exemple : "Taxi Conventionné à Blagnac (31) — VSL CPAM | Taxi 31 Toulouse"
      title = `Taxi Conventionné à ${article.city} (31) — VSL CPAM`;
      description = `Taxi conventionné CPAM à ${article.city}. Transport médical assis (VSL) vers Purpan, Rangueil et l'Oncopole. Tiers Payant intégral, 0€ d'avance. Réservation 24h/24 au 07 72 33 98 92.`;
      break;

    case 'Hôpitaux':
      // Exemple : "Transport Taxi Hôpital Purpan Toulouse — VSL Conventionné CPAM"
      title = `Transport Taxi ${article.hospitalName || article.city} — VSL Conventionné CPAM`;
      description = `Taxi conventionné pour vos rendez-vous à ${article.hospitalName || article.city}. Tiers Payant intégral, accompagnement en service de soins. Disponible 24h/24.`;
      break;

    case 'Aéroport':
      title = `Taxi Aéroport Toulouse-Blagnac — Transfert 24h/24 dès 4h du matin`;
      description = `Navette taxi vers l'Aéroport Toulouse-Blagnac depuis toute la Haute-Garonne. Ponctualité garantie, sièges auto gratuits, accueil avec pancarte personnalisée.`;
      break;

    case 'Gares':
      title = `Taxi Gare Matabiau Toulouse — Transfert Ponctuel 24h/24`;
      description = `Taxi pour la Gare Matabiau et les gares régionales d'Occitanie. Départs depuis toute la Haute-Garonne, ponctualité garantie.`;
      break;

    case 'Région':
      // Pour les trajets longue distance inter-départements
      title = `Taxi ${article.cityFrom || ''} → Toulouse — Transport Médical Occitanie`;
      description = `Taxi conventionné depuis ${article.cityFrom || article.city} vers les hôpitaux de Toulouse (Purpan, Rangueil, Oncopole). Tiers Payant CPAM, trajets longue distance Occitanie.`;
      break;

    default:
      title = article.title;
      description = article.excerpt || description;
  }

  const canonicalUrl = `${baseUrl}/blog/${article.slug}`;

  return {
    title, // Le template "%s | Taxi 31 Toulouse" du layout s'applique automatiquement
    description,

    // ✅ CANONICAL UNIQUE : indispensable pour éviter le duplicate content
    // C'est l'erreur qui était dans le layout global (canonical: '/')
    alternates: {
      canonical: canonicalUrl,
    },

    // ✅ Open Graph spécifique à la page (Facebook, WhatsApp, LinkedIn)
    openGraph: {
      title: `${title} | Taxi 31 Toulouse`,
      description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.date,
      // Image spécifique à l'article si disponible, sinon fallback OG global
      images: article.image
        ? [{ url: article.image, width: 1200, height: 630, alt: title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
    },

    // ✅ Twitter/X Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ── Composant de page ─────────────────────────────────────────────────────────
export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound(); // Génère une vraie 404 Next.js (important pour le SEO)
  }

  return (
    <main>
      {/*
        ── Structure HTML recommandée pour le SEO ──────────────────────────────

        RÈGLES :
        • 1 seul <h1> par page, contenant le mot-clé principal + la ville
        • <h2> pour les sections importantes (au moins 1 avec le nom de la ville)
        • Breadcrumb visible AVANT le contenu principal
        • Section "Villes voisines" EN BAS de page (maillage interne comme ProxiSoins)

        EXEMPLE de structure :
        ─────────────────────────────────────────────
        <nav aria-label="Fil d'Ariane"> Accueil > Villes > Blagnac </nav>

        <h1>Taxi Conventionné à {ville} — VSL CPAM Toulouse</h1>
        <p>[Description unique 50-80 mots avec le nom de la ville]</p>

        <h2>Transport médical VSL depuis {ville}</h2>
        <p>[Contenu unique : distance jusqu'au CHU, temps de trajet estimé]</p>

        <h2>Hôpitaux desservis depuis {ville}</h2>
        <ul>[Liste des hôpitaux avec liens]</ul>

        <h2>Comment réserver votre taxi depuis {ville} ?</h2>
        <p>[Appel à l'action + numéro]</p>

        <section>
          <h2>Villes voisines également desservies</h2>
          [Liens vers 4-6 communes proches — comme ProxiSoins]
        </section>
        ─────────────────────────────────────────────
      */}

      {/* Votre contenu existant ici */}
      <article>
        <h1>{article.title}</h1>
        {/* ... reste du contenu */}
      </article>
    </main>
  );
}