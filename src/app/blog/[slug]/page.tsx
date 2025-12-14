import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import type { Metadata } from "next";

// 1. Génération des URLs statiques pour le SEO (Google adore ça)
export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Méta-données dynamiques (Titre de l'onglet)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = articles.find((p) => p.slug === params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} - Taxi Occitanie`,
    description: post.excerpt,
  };
}

// 3. Le contenu de la page
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = articles.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Retour */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-medical-600 hover:text-medical-700 font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour aux articles
        </Link>

        {/* En-tête de l'article */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-medium">
            <Calendar size={16} />
            {post.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-taxi-500 pl-6 italic">
            {post.excerpt}
          </p>
        </header>

        {/* Contenu de l'article (HTML injecté) */}
        <article 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900 
          prose-p:text-slate-700 prose-p:leading-8
          prose-a:text-medical-600 prose-a:no-underline hover:prose-a:underline
          prose-li:text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action Spécifique au milieu du blog */}
        <div className="mt-16 bg-medical-50 border border-medical-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Besoin d'un trajet pour ce motif ?</h3>
          <p className="text-slate-600 mb-6">
            Nous sommes disponibles pour vous conduire. Réservation simple et rapide.
          </p>
          <a 
            href="tel:+33600000000"
            className="inline-flex items-center gap-2 bg-taxi-500 hover:bg-taxi-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105 shadow-lg"
          >
            <Phone size={20} />
            Appeler maintenant
          </a>
        </div>

      </div>
    </main>
  );
}