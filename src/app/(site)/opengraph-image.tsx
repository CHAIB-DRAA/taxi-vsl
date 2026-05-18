import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "rgba(59,130,246,0.2)",
            border: "1px solid rgba(96,165,250,0.4)",
            borderRadius: "100px",
            padding: "8px 24px",
            color: "#93c5fd",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 32,
            display: "flex",
          }}
        >
          AGRÉÉ CPAM — TIERS PAYANT INTÉGRAL
        </div>

        {/* Titre principal */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 20,
            display: "flex",
          }}
        >
          Taxi Conventionné CPAM Toulouse
        </div>

        {/* Sous-titre jaune */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#eab308",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Occitanie Médi Mobility
        </div>

        {/* Services */}
        <div
          style={{
            fontSize: 20,
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: 36,
            display: "flex",
          }}
        >
          Transport médical · Dialyse · Chimiothérapie · Aéroport · Gare · Mariages
        </div>

        {/* Téléphone */}
        <div
          style={{
            background: "#eab308",
            borderRadius: "16px",
            padding: "14px 40px",
            fontSize: 28,
            fontWeight: 900,
            color: "#0f172a",
            display: "flex",
          }}
        >
          07 72 33 98 92 — Disponible 24h/24
        </div>
      </div>
    ),
    { ...size }
  );
}
