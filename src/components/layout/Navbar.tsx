import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo : Mis à jour pour Taxi 31 Toulouse */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Icône MapPin jaune */}
            <div className="bg-yellow-500 p-2 rounded-lg text-slate-900 group-hover:scale-105 transition-transform">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none">
                Taxi<span className="text-yellow-600">31</span>Toulouse
              </span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Conventionné CPAM
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg">
              Services
            </Link>
            <Link href="/#documents" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-lg">
              Documents
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Nos Destinations
            </Link>
            {/* Bouton Appel : Ton 07 mis en avant */}
            <a 
              href="tel:0772339892" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              <Phone size={20} />
              <span>07 72 33 98 92</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}