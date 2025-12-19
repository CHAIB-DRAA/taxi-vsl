import { articles } from "@/lib/articles";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Actualités Transport Médical | Taxi 31 Toulouse",
  description: "Guides pratiques sur le transport VSL, remboursement CPAM, et zones d'intervention en Haute-Garonne.",
};

export default function BlogList() {
  return (
    <main className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Infos & <span className="text-yellow-500">Guides Pratiques</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tout savoir sur le transport médical conventionné, les démarches CPAM et nos zones d'intervention autour de Toulouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {new Date(post.date).getFullYear()}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                {/* ✅ CORRECTION ICI : post.description au lieu de post.excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.description}
                </p>

                <div className="flex items-center text-blue-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all">
                  Lire l'article <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}