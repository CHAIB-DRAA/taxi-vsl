/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      colors: {
        // Bleu médical rassurant (pour les infos, les documents)
        medical: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb', // Bleu primaire
          700: '#1d4ed8', // Bleu foncé
        },
        // Jaune Taxi (pour les boutons d'action "Réserver")
        taxi: {
          400: '#fbbf24', 
          500: '#f59e0b', 
        },
        // Gris neutres pour le texte (très lisible)
        slate: {
          50: '#f8fafc',  // Fond de page
          100: '#f1f5f9', // Fond de section alterné
          600: '#475569', // Texte secondaire (paragraphes)
          900: '#0f172a', // Titres (quasi noir)
        }
      },
      // ... gardez les animations
    },
  },
  plugins: [],
}