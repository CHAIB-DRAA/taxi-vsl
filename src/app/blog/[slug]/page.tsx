import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

// 1. Simulation de base de données (À remplacer par ton fetch ou ton fichier data)
const blogPosts = [
  {
    slug: 'taxi-conventionne-toulouse-cpam',
    title: "Comment bénéficier d'un Taxi Conventionné à Toulouse ?",
    date: "31 Décembre 2025",
    readTime: "5 min",
    content: "Le transport médical assis (TAP) permet aux patients de se rendre à leurs rendez-vous médicaux sans avance de frais...",
    image: "/blog/taxi-conventionne.jpg"
  },
  {
    slug: 'navette-aeroport-blagnac-nuit',
    title: "Navette Aéroport Blagnac : Pourquoi choisir un taxi ce soir ?",
    date: "31 Décembre 2025",
    readTime: "4 min",
    content: "Pour le réveillon, les transports en commun sont limités. Taxi 31 Toulouse assure vos transferts 24h/24...",
    image: "/blog/aeroport-toulouse.jpg"
  }
];

// 2. Génération dynamique des métadonnées pour le SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | Taxi 31 Toulouse`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
    },
  };
}

// 3. Page de l'article
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Bouton Retour */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux articles</span>
        </Link>

        {/* Header de l'article */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime} de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>

        {/* Contenu (Statique ici, mais peut être du Markdown/HTML) */}
        <article className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            {post.content}
          </p>
          {/* Ajoute ici le reste de ton texte */}
        </article>

        {/* CTA : Bloc d'action pour transformer le lecteur en client */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Besoin d'un transport immédiat ?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Nos chauffeurs sont disponibles 24h/24 à Toulouse et en Haute-Garonne, même pour le Nouvel An.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0772339892" 
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105"
            >
              <Phone size={24} fill="currentColor" />
              07 72 33 98 92
            </a>
            <Link 
              href="/#contact" 
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm transition-all"
            >
              Réserver en ligne
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

// 4. Optimisation : Génération statique au build
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}