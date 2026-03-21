/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Ce que l'utilisateur tape dans son navigateur
        source: '/reserver', 
        // L'endroit où le contenu est réellement hébergé (Render)
        destination: 'https://vsl-taxi.onrender.com/', 
      },
    ];
  },
};

module.exports = nextConfig;