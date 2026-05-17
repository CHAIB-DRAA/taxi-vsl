import Link from "next/link";
import { Phone, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-yellow-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page introuvable</h1>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Cette page n'existe pas ou a été déplacée. Pas de panique — vous trouverez ce dont vous avez besoin ci-dessous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all"
          >
            <Home size={18} /> Retour à l'accueil
          </Link>
          <a
            href="tel:0772339892"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            <Phone size={18} /> Nous appeler
          </a>
        </div>
      </div>
    </main>
  );
}
