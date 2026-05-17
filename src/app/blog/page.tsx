import { articles } from "@/lib/articles";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import StickyMobileBar from "../../components/layout/StickyMobileBar";

const BASE = "https://www.taxi-31-toulouse.fr";

export const metadata: Metadata = {
  title: "Guides Transport Médical VSL & Zones Occitanie | Taxi 31 Toulouse",
  description:
    "Guides pratiques sur le transport médical VSL CPAM, remboursement ALD, hôpitaux de Toulouse (Purpan, Rangueil, Oncopole) et toutes nos zones d'intervention en Occitanie.",
  alternates: {
    canonical: `${BASE}/blog`,
  },
  openGraph: {
    title: "Guides Transport Médical VSL & Zones Occitanie",
    description: "Guides pratiques sur le transport médical CPAM, les hôpitaux de Toulouse et nos zones en Occitanie.",
    url: `${BASE}/blog`,
    type: "website",
    siteName: "Taxi 31 Toulouse",
    locale: "fr_FR",
    images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: "Guides Transport Médical Toulouse" }],
  },
};

const categoryColors: Record<string, string> = {
  "Transport Médical": "text-blue-700 bg-blue-50",
  "Courses Privées": "text-yellow-700 bg-yellow-50",
  "Hôpitaux": "text-red-700 bg-red-50",
  "Trajets": "text-green-700 bg-green-50",
  "Guide": "text-purple-700 bg-purple-50",
  "Villes": "text-slate-700 bg-slate-100",
};

export default function BlogList() {
  const featured = articles.slice(0, 3);
  const rest = articles.slice(3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}/blog#webpage`,
        "url": `${BASE}/blog`,
        "name": "Guides Transport Médical VSL & Zones Occitanie",
        "description": "Guides pratiques sur le transport médical VSL CPAM, les hôpitaux de Toulouse et nos zones d'intervention en Occitanie.",
        "inLanguage": "fr-FR",
        "isPartOf": { "@id": `${BASE}/#website` }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Guides & Zones", "item": `${BASE}/blog` }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Articles Transport Médical & Zones Occitanie",
        "numberOfItems": articles.length,
        "itemListElement": articles.slice(0, 20).map((a, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${BASE}/blog/${a.slug}`,
          "name": a.title
        }))
      }
    ]
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-32 md:pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Guides & Zones
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
            Tout savoir sur le transport
            <span className="text-yellow-500"> médical & privé</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Des guides rédigés par des professionnels du transport sanitaire pour répondre à vos vraies questions.
          </p>
        </div>

        {/* Articles mis en avant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${categoryColors[post.category] ?? "text-slate-600 bg-slate-100"}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                  {post.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm mt-auto">
                  Lire le guide <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Reste des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all p-5 flex items-start gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1" />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${categoryColors[post.category] ?? "text-slate-600 bg-slate-100"}`}>
                  {post.category}
                </span>
                <h2 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                  <Calendar size={10} />
                  {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
                  <span className="mx-1">·</span>
                  <Clock size={10} /> {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
      <StickyMobileBar />
    </main>
  );
}
