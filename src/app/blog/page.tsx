import { articles } from "@/lib/articles";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Actualités - Taxi Occitanie",
  description: "Conseils sur le transport médical, guide des hôpitaux et actualités du taxi en Haute-Garonne.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-taxi-100 rounded-xl mb-4 text-taxi-600">
             <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Guide & Conseils
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Retrouvez toutes les informations sur le transport médical conventionné, 
            les remboursements CPAM et nos zones d'intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="p-8">
                <div className="text-sm text-medical-600 font-bold mb-3 uppercase tracking-wider">
                  Conseil Taxi
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-taxi-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-slate-900 font-bold text-sm">
                  Lire l'article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}