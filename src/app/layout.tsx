import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema";
import { siteConfig } from "../../lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

const { domain, brand, seo, geo, google } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },

  description: seo.description,

  authors: [{ name: brand.legalName }],
  creator: brand.legalName,
  publisher: brand.legalName,

  verification: {
    google: google.searchConsole,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: domain,
    siteName: brand.shortName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: seo.ogTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.twitterTitle,
    description: seo.twitterDescription,
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.region":   geo.metaRegion,
    "geo.placename": geo.metaCity,
    "geo.position": geo.metaPosition,
    ICBM:           geo.metaICBM,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${google.adsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google.adsId}');
          `}
        </Script>
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
