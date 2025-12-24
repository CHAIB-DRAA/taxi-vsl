import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import ContactCTA from "../../../components/home/ContactCTA";
import StickyMobileBar from "../../../components/layout/StickyMobileBar"; // Import Nouveau

export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = articles.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Taxi 31 Toulouse`,
    // 👇 C'EST ICI LA CORRECTION (description au lieu d'excerpt)
    description: post.description, 
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = articles.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-yellow-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Retour aux articles
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-200">
              <Calendar size={14} />
              {new Date(post.date).getFullYear()}
            </span>
            <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200 font-bold">
              <Tag size={14} />
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* 👇 CORRECTION ICI AUSSI */}
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-yellow-500 pl-6 italic">
            {post.description}
          </p>
        </header>

        <div 
          className="prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>

      <div className="mt-16">
        <ContactCTA />
      </div>
      <StickyMobileBar />
    </main>
  );
}