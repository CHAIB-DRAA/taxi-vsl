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
      priority: 1.0,
    },
    {
      url: `${base}/courses-privees`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/reserver`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/tarifs`,
      lastModified: TODAY,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/a-propos`,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.8,
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

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const all = [...staticPages, ...blogPages];
  return all.filter((p, i, self) => i === self.findIndex((q) => q.url === p.url));
}
