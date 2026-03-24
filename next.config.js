/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Affiche la page de réservation
        source: '/reserver',
        destination: 'https://vsl-taxi.onrender.com/',
      },
      {
        // Redirige les envois de formulaire vers Render de manière invisible
        source: '/api/rides/:path*',
        destination: 'https://vsl-taxi.onrender.com/api/rides/:path*',
      },
    ];
  },
};

module.exports = nextConfig;