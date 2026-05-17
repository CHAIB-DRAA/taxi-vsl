import { Star, ExternalLink } from 'lucide-react';

export default function GoogleTrust() {
  return (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white font-bold text-sm">Avis Google</span>
      </div>
      <div className="flex gap-1 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
      </div>
      <p className="text-white text-2xl font-black mb-1">5.0 / 5</p>
      <p className="text-slate-300 text-xs mb-3">Basé sur les avis Google</p>
      <a
        href="https://g.page/r/Cbh2nxTvVS7cEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-300 text-xs hover:text-white transition-colors"
      >
        Voir les avis <ExternalLink size={12} />
      </a>
    </div>
  );
}
