'use client';

import Link from 'next/link';
import { Phone, MapPin, Menu, X, HeartPulse, Car } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/transport-medical', label: 'Transport Médical', icon: HeartPulse },
  { href: '/courses-privees', label: 'Courses Privées', icon: Car },
  { href: '/blog', label: 'Zones & Guides' },
  { href: '/a-propos', label: 'À Propos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-yellow-500 p-2 rounded-lg text-slate-900 group-hover:scale-105 transition-transform">
              <MapPin size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                Taxi<span className="text-yellow-500">31</span>Toulouse
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">
                Conventionné CPAM
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-semibold transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 ml-2">
              <a
                href="tel:0772339892"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md shadow-blue-600/20"
              >
                <Phone size={16} strokeWidth={2.5} />
                07 72 33 98 92
              </a>
              <a
                href="/#reserver"
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md shadow-yellow-500/20"
              >
                Réserver
              </a>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-slate-700 font-semibold hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-slate-100">
            <a
              href="tel:0772339892"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold"
              onClick={() => setOpen(false)}
            >
              <Phone size={18} /> 07 72 33 98 92
            </a>
            <a
              href="/#reserver"
              className="flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 px-4 py-3 rounded-xl font-bold"
              onClick={() => setOpen(false)}
            >
              Réserver en ligne
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
