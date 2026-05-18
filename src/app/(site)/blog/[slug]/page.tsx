import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import StickyMobileBar from "../../../../components/layout/StickyMobileBar";

const BASE = "https://www.taxi-31-toulouse.fr";
const OG_IMAGE = `${BASE}/og-image.jpg`;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getArticleBySlug(params.slug);
  if (!post) return { title: "Article non trouvé" };

  const desc = post.description.substring(0, 160);
  const url = `${BASE}/blog/${post.slug}`;

  return {
    title: post.title,
    description: desc,
    authors: [{ name: "Occitanie Médi Mobility" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      url,
      siteName: "Taxi 31 Toulouse",
      locale: "fr_FR",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Occitanie Médi Mobility"],
      section: post.category,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getArticleBySlug(params.slug);
  if (!post) notFound();

  const related = articles.filter(
    (a) => a.category === post.category && a.slug !== post.slug
  ).slice(0, 4);

  const articleUrl = `${BASE}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        "headline": post.title,
        "description": post.description,
        "url": articleUrl,
        "datePublished": post.date,
        "dateModified": post.date,
        "inLanguage": "fr-FR",
        "image": { "@type": "ImageObject", "url": OG_IMAGE, "width": 1200, "height": 630 },
        "author": {
          "@type": "Organization",
          "@id": `${BASE}/#organization`,
          "name": "Occitanie Médi Mobility"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${BASE}/#organization`,
          "name": "Occitanie Médi Mobility",
          "logo": { "@type": "ImageObject", "url": `${BASE}/logo.png` }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
        "articleSection": post.category,
        "keywords": `taxi VSL, transport médical, CPAM, ${post.title.toLowerCase()}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Guides & Zones", "item": `${BASE}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": articleUrl }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-32 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4">

        {/* Retour */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 group text-sm font-medium transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux guides
        </Link>

        {/* Header article */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-5 font-medium">
            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              <Tag size={11} /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime} de lecture
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-5 bg-blue-50/50 py-4 pr-4 rounded-r-xl">
            {post.description}
          </p>
        </header>

        {/* Contenu */}
        <article
          className="blog-content mb-14"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA flottant */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-center shadow-2xl mb-14">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Agréé CPAM • Tiers Payant Intégral</p>
          <h2 className="text-2xl font-black text-white mb-6">
            Besoin d'un transport médical ou d'une course privée ?
          </h2>
          <a
            href="tel:0772339892"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-xl"
          >
            <Phone size={22} strokeWidth={2.5} />
            07 72 33 98 92
          </a>
          <p className="text-slate-400 mt-4 text-sm">Disponible 24h/24 · Réponse immédiate</p>
        </div>

        {/* Articles liés */}
        {related.length > 0 && (
          <section className="border-t border-slate-100 pt-10">
            <h3 className="text-lg font-bold text-slate-900 mb-5">Guides similaires</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-200 transition-all"
                >
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">{item.category}</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
      <StickyMobileBar />
    </main>
  );
}

export async function generateStaticParams() {
  return articles.map((post) => ({ slug: post.slug }));
}
