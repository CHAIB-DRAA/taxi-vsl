/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  async redirects() {
    return [
      // Anciens slugs articles villes (sans vsl-)
      { source: "/blog/taxi-conventionne-vsl-:ville", destination: "/blog/taxi-conventionne-:ville", permanent: true },
      // Anciens slugs hôpitaux (avec -toulouse)
      { source: "/blog/taxi-vsl-hopital-purpan-chu-toulouse", destination: "/blog/taxi-vsl-hopital-purpan-chu", permanent: true },
      { source: "/blog/taxi-vsl-hopital-rangueil-toulouse", destination: "/blog/taxi-vsl-hopital-rangueil", permanent: true },
      { source: "/blog/taxi-vsl-clinique-pasteur-toulouse", destination: "/blog/taxi-vsl-clinique-pasteur", permanent: true },
      { source: "/blog/taxi-vsl-clinique-de-l-union-toulouse", destination: "/blog/taxi-vsl-clinique-de-l-union", permanent: true },
      { source: "/blog/taxi-vsl-clinique-des-cedres-toulouse", destination: "/blog/taxi-vsl-clinique-des-cedres", permanent: true },
      { source: "/blog/taxi-vsl-clinique-croix-du-sud-toulouse", destination: "/blog/taxi-vsl-clinique-croix-du-sud", permanent: true },
      { source: "/blog/taxi-vsl-hopital-larrey-toulouse", destination: "/blog/taxi-vsl-hopital-larrey", permanent: true },
      { source: "/blog/taxi-vsl-clinique-d-occitanie-toulouse", destination: "/blog/taxi-vsl-clinique-d-occitanie-muret", permanent: true },
      // Anciens slugs villes régionales (8 principales)
      { source: "/blog/taxi-vsl-albi-tarn-toulouse", destination: "/blog/vsl-taxi-conventionne-albi", permanent: true },
      { source: "/blog/taxi-vsl-auch-gers-toulouse", destination: "/blog/vsl-taxi-conventionne-auch", permanent: true },
      { source: "/blog/taxi-vsl-montauban-tarn-et-garonne-toulouse", destination: "/blog/vsl-taxi-conventionne-montauban", permanent: true },
      { source: "/blog/taxi-vsl-castres-tarn-toulouse", destination: "/blog/vsl-taxi-conventionne-castres", permanent: true },
      { source: "/blog/taxi-vsl-tarbes-hautes-pyrenees-toulouse", destination: "/blog/vsl-taxi-conventionne-tarbes", permanent: true },
      { source: "/blog/taxi-vsl-cahors-lot-toulouse", destination: "/blog/vsl-taxi-conventionne-cahors", permanent: true },
      { source: "/blog/taxi-vsl-pamiers-ariege-toulouse", destination: "/blog/vsl-taxi-conventionne-pamiers", permanent: true },
      { source: "/blog/taxi-vsl-carcassonne-aude-toulouse", destination: "/blog/vsl-taxi-conventionne-carcassonne", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/reserver',
        destination: 'https://vsl-taxi.onrender.com/',
      },
      {
        source: '/api/rides/:path*',
        destination: 'https://vsl-taxi.onrender.com/api/rides/:path*',
      },
      {
        source: '/api/admin/:path*',
        destination: 'https://vsl-taxi.onrender.com/api/admin/:path*',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
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

  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
