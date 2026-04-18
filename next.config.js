/** @type {import('next').NextConfig} */
const nextConfig = {

  // ── Images : optimisation automatique WebP/AVIF ──────────────────────────
  // Essentiel pour les Core Web Vitals (LCP) — facteur de ranking Google
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF = 50% plus léger que WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Si vous avez des images sur un domaine externe, déclarez-le ici :
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'votre-cdn.com' }
    // ],
  },

  // ── Headers HTTP : sécurité + signaux de confiance Google ─────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Empêche le clickjacking (signal sécurité Google)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Empêche le MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Contrôle les infos envoyées dans le Referer (RGPD + sécu)
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Permissions API (désactive les capteurs inutiles)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      // Cache long sur les assets statiques Next.js (améliore LCP au recrawl)
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ── Rewrites : proxy invisible pour l'API de réservation ─────────────────
  async rewrites() {
    return [
      // ✅ CONSERVÉ : le rewrite API backend reste — Google ne crawle pas /api/
      // Votre formulaire Next.js natif (app/reserver/page.tsx) appelle cette route
      {
        source: '/api/rides/:path*',
        destination: 'https://vsl-taxi.onrender.com/api/rides/:path*',
      },

      // ❌ SUPPRIMÉ : le rewrite frontend vers onrender.com
      // Remplacé par app/reserver/page.tsx (formulaire natif Next.js)
      // Avantages :
      //   - Metadata contrôlées (title, description, canonical)
      //   - Pas de cold start Render.com (20-30s → Google timeout)
      //   - LCP maîtrisé (Core Web Vitals)
      //   - Confiance utilisateur (même domaine)
      //
      // {
      //   source: '/reserver',
      //   destination: 'https://vsl-taxi.onrender.com/', ← SUPPRIMÉ
      // },
    ];
  },

  // ── Redirects : URLs canoniques propres ───────────────────────────────────
  async redirects() {
    return [
      // Évite le contenu dupliqué www vs non-www (si pas géré par votre hébergeur)
      // Décommentez si votre DNS ne le gère pas déjà :
      // {
      //   source: '/(.*)',
      //   has: [{ type: 'host', value: 'taxi-31-toulouse.fr' }], // sans www
      //   destination: 'https://www.taxi-31-toulouse.fr/:path*',
      //   permanent: true,
      // },

      // Redirige l'ancienne URL onrender si des liens externes pointent dessus
      // (backlinks perdus sinon)
      // {
      //   source: '/reservation',
      //   destination: '/reserver',
      //   permanent: true,
      // },
    ];
  },

  // ── Compression : réduit la taille des réponses ──────────────────────────
  compress: true,

  // ── Trailing slash : cohérence des URLs (évite doublons /page vs /page/) ─
  trailingSlash: false,

  // ── Powered-By : retire le header "X-Powered-By: Next.js" (sécurité) ─────
  poweredByHeader: false,
};

module.exports = nextConfig;