import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
// 🛠️ ON IMPORTE LA VRAIE SOURCE ICI
import { articles } from "@/lib/articles"; 

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // On cherche dans les 54 articles
  const post = articles.find((p) => p.slug === params.slug);
  
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | Taxi 31 Toulouse`,
    description: post.description.substring(0, 160),
    alternates: {
      canonical: `https://www.taxi-31-toulouse.fr/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description.substring(0, 160),
      type: 'article',
      url: `https://www.taxi-31-toulouse.fr/blog/${post.slug}`,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = articles.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux articles</span>
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>

       {/* Contenu de l'article avec rendu HTML */}
<article className="prose prose-lg prose-slate max-w-none mb-12">
  {/* On utilise dangerouslySetInnerHTML pour interpréter le HTML de ton fichier articles.ts */}
  <div 
    className="text-slate-700 leading-relaxed"
    dangerouslySetInnerHTML={{ __html: post.content }} 
  />
</article>
        {/* CTA de conversion */}
        <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Besoin d'un transport ?</h2>
          <a href="tel:0772339892" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-transform hover:scale-105">
            <Phone size={24} fill="currentColor" /> 07 72 33 98 92
          </a>
        </div>
        {/* Section liens internes pour booster l'indexation */}
<section className="mt-12 pt-8 border-t border-slate-100">
  <h3 className="text-lg font-bold text-slate-900 mb-4">Nos autres zones d'intervention :</h3>
  <div className="flex flex-wrap gap-2">
    {articles.slice(0, 6).map((item) => (
      <Link 
        key={item.slug} 
        href={`/blog/${item.slug}`}
        className="text-sm bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-3 py-1 rounded-full border border-slate-200 transition-colors"
      >
        Taxi {item.city || "Haute-Garonne"}
      </Link>
    ))}
  </div>
</section>
      </div>
    </main>
  );
}

// 🛠️ CRUCIAL : Génère les 54 pages au moment du build
export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}