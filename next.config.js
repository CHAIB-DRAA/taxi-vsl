/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── 1. PUISSANCE VISUELLE (Core Web Vitals) ──────────────────────────
  // On garde AVIF/WebP pour que tes photos de taxi chargent instantanément
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // ── 2. TUNNEL DE RÉSERVATION (Rewrites) ───────────────────────────────
  // C'est ici qu'on corrige ton problème
  async rewrites() {
    return [
      {
        // ✅ RE-ACTIVÉ : Affiche ton app de réservation Render sur /reserver
        source: '/reserver',
        destination: 'https://vsl-taxi.onrender.com/',
      },
      {
        // ✅ CONSERVÉ : Envoie les données du formulaire à l'API Render
        source: '/api/rides/:path*',
        destination: 'https://vsl-taxi.onrender.com/api/rides/:path*',
      },
    ];
  },

  // ── 3. SÉCURITÉ & CACHE (Headers) ──────────────────────────────────────
  // On garde les headers de sécurité, c'est ton bouclier contre les robots
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' }, // 'self' autorisé pour la géoloc taxi
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ── 4. CANONICALISATION (SEO) ──────────────────────────────────────────
  // Indispensable pour éviter le "Duplicate Content"
  trailingSlash: false,
  compress: true,
  poweredByHeader: false, // Cache l'utilisation de Next.js aux hackers adverses
};

module.exports = nextConfig;