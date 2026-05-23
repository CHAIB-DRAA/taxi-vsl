import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteConfig } from "../../lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const TODAY = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/transport-medical`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/courses-privees`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/a-propos`,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/politique-confidentialite`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => {
    let priority = 0.7;
    let freq: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    switch (article.category) {
      case "Guide":
        priority = 0.9;
        freq = "monthly";
        break;
      case "Hôpitaux":
        priority = 0.85;
        freq = "monthly";
        break;
      case "Transport Médical":
        priority = 0.8;
        freq = "monthly";
        break;
      case "Courses Privées":
        priority = 0.8;
        freq = "monthly";
        break;
      case "Trajets":
        priority = 0.75;
        freq = "monthly";
        break;
      case "Villes":
        priority = 0.7;
        freq = "monthly";
        break;
      case "Comparaisons":
        priority = 0.85;
        freq = "monthly";
        break;
      case "Spécialités":
        priority = 0.85;
        freq = "monthly";
        break;
    }

    return {
      url: `${base}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: freq,
      priority,
    };
  });

  const all = [...staticPages, ...blogPages];
  return all.filter((p, i, self) => i === self.findIndex((q) => q.url === p.url));
}
