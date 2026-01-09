import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { articles } from "@/lib/articles"; 

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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
        {/* Bouton Retour */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux articles</span>
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>

        {/* Contenu HTML (Interprété grâce à dangerouslySetInnerHTML) */}
        <article className="prose prose-lg prose-slate max-w-none mb-12">
          <div 
            className="text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        {/* CTA : Appel Direct */}
        <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Besoin d'un transport médical ?</h2>
          <a href="tel:0772339892" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-xl">
            <Phone size={24} fill="currentColor" /> 07 72 33 98 92
          </a>
          <p className="text-slate-400 mt-4 text-sm font-medium italic">Disponible 24h/24 - Agrément CPAM</p>
        </div>

        {/* Section Liens Internes (Fixée ici) */}
        <section className="mt-12 pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Nos autres services et zones :</h3>
          <div className="flex flex-wrap gap-2">
            {articles.slice(0, 10).map((item) => (
              <Link 
                key={item.slug} 
                href={`/blog/${item.slug}`}
                className="text-[11px] sm:text-xs bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 px-3 py-2 rounded-lg border border-slate-200 transition-all font-medium"
              >
                {/* On utilise le titre pour éviter l'erreur TypeScript 'city' */}
                {item.title.split(':')[0]} 
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}