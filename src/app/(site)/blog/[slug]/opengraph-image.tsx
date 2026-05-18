import { ImageResponse } from "next/og";
import { getArticleBySlug, articles } from "@/lib/articles";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CATEGORY_COLORS: Record<string, string> = {
  "Guide":            "#8b5cf6",
  "Hôpitaux":         "#ef4444",
  "Transport Médical":"#3b82f6",
  "Trajets":          "#22c55e",
  "Courses Privées":  "#eab308",
  "Villes":           "#64748b",
};

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function Image({ params }: Props) {
  const post = getArticleBySlug(params.slug);
  const title = post?.title ?? "Taxi Conventionné CPAM Toulouse";
  const category = post?.category ?? "Guide";
  const color = CATEGORY_COLORS[category] ?? "#3b82f6";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e2d4a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              background: color,
              borderRadius: "8px",
              padding: "6px 16px",
              fontSize: 13,
              fontWeight: 800,
              color: "white",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {category}
          </div>
          <div style={{ color: "#475569", fontSize: 14, display: "flex" }}>
            taxi-31-toulouse.fr
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 40 : 48,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.2,
            display: "flex",
            flex: 1,
            alignItems: "center",
            padding: "24px 0",
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#eab308", display: "flex" }}>
              Occitanie Médi Mobility
            </div>
            <div style={{ fontSize: 15, color: "#64748b", display: "flex" }}>
              Taxi conventionné CPAM • Tiers payant intégral
            </div>
          </div>
          <div
            style={{
              background: "#eab308",
              borderRadius: "12px",
              padding: "10px 24px",
              fontSize: 20,
              fontWeight: 900,
              color: "#0f172a",
              display: "flex",
            }}
          >
            07 72 33 98 92
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
