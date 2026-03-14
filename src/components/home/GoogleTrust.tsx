// components/home/GoogleTrust.tsx
import { Star } from 'lucide-react';

export default function GoogleTrust() {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
      <div className="flex items-center gap-2 mb-2">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span className="text-white font-bold">Avis Google</span>
      </div>
      <div className="flex text-yellow-500 mb-1">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
      </div>
      <p className="text-white text-xl font-black">5.0/5</p>
      <a 
        href="https://g.page/r/Cbh2nxTvVS7cEAE/review" // 👈 REMPLACE PAR TON LIEN D'AVIS
        target="_blank"
        className="text-blue-400 text-sm hover:underline mt-2"
      >
        Voir les témoignages clients →
      </a>
    </div>
  );
}