// ─── SITE CONFIG ──────────────────────────────────────────────────────────────
// Single source of truth for all business-specific data.
// To create a new site: fork the repo, edit only this file.
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig = {

  // ── Brand ────────────────────────────────────────────────────────────────────
  brand: {
    legalName:   "OCCITANIE MEDI MOBILITY",
    shortName:   "Taxi 31 Toulouse",
    displayName: "Taxi31Toulouse",          // used in logo (no spaces)
    highlight:   "31",                       // coloured part in "Taxi[31]Toulouse"
    tagline:     "Conventionné CPAM",
    taglineAlt:  "Conventionné CPAM & Privé",
    cpamLabel:   "Agréé CPAM Haute-Garonne",
  },

  // ── Domain & URLs ────────────────────────────────────────────────────────────
  domain: "https://www.taxi-31-toulouse.fr",

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    phone:        "0772339892",         // tel: href  (no spaces, no +33)
    phoneDisplay: "07 72 33 98 92",     // visible in UI
    phoneE164:    "+33772339892",       // schema.org / Twilio
    email:        "contact@taxi-31-toulouse.fr",
    whatsapp:     "https://wa.me/33772339892",
    smsBody:      "Bonjour, je souhaite réserver un taxi...",
  },

  // ── Address ──────────────────────────────────────────────────────────────────
  address: {
    street:     "6 rue Buissonnière Bat A",
    city:       "Fonbeauzard",
    postalCode: "31140",
    region:     "Haute-Garonne",
    country:    "FR",
    display:    "Toulouse & Occitanie",
    displaySub: "Haute-Garonne (31)",
  },

  // ── Geo coordinates ──────────────────────────────────────────────────────────
  geo: {
    lat:          "43.6843",    // business address
    lng:          "1.4230",
    metaRegion:   "FR-OCC",     // geo.region meta tag
    metaCity:     "Toulouse",   // geo.placename meta tag
    metaPosition: "43.6047;1.4442",  // city centre (geo.position)
    metaICBM:     "43.6047, 1.4442",
  },

  // ── Google ───────────────────────────────────────────────────────────────────
  google: {
    adsId:          "AW-17844653906",
    searchConsole:  "ETCwhGEYjo9LoL4TK82q9VWvXsOc5TTg8gg0WJzOZI",
    cid:            "15905025186406049849",
    mapsUrl:        "https://maps.google.com/?cid=15905025186406049849",
    reviewUrl:      "https://g.page/r/Cbh2nxTvVS7cEBM/review",
    sameAsGPage:    "https://g.page/r/Cbh2nxTvVS7cEAE",
  },

  // ── SEO copy ─────────────────────────────────────────────────────────────────
  seo: {
    title:
      "Taxi Conventionné CPAM Toulouse | Transport Médical & Courses Privées",
    titleTemplate:
      "%s | Taxi 31 Toulouse — Occitanie Médi Mobility",
    description:
      "Taxi VSL conventionné CPAM à Toulouse et en Occitanie. Transport médical (dialyse, chimiothérapie, ALD) avec tiers payant intégral — 0€ d'avance. Courses privées : Aéroport Blagnac, Gare Matabiau, événements. Disponible 24h/24.",
    ogTitle:
      "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
    ogDescription:
      "Transport médical VSL remboursé CPAM (dialyse, chimio, ALD) et courses privées (aéroport, gare, mariages) à Toulouse et en Occitanie. Tiers payant intégral — 0€ d'avance.",
    twitterTitle:
      "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
    twitterDescription:
      "Transport médical VSL et courses privées à Toulouse. Tiers payant intégral, 0€ d'avance. Disponible 24h/24.",
    localBusinessName:
      "Taxi Conventionné CPAM Toulouse — Occitanie Médi Mobility",
    localBusinessDescription:
      "Taxi conventionné CPAM et VSL en Occitanie. Transport médical assis (ALD, chimiothérapie, dialyse, radiothérapie) avec tiers payant intégral — 0€ d'avance. Courses privées : aéroport Toulouse-Blagnac, gare Matabiau, mariages, événements. Disponible 24h/24.",
  },

  // ── Cities served ─────────────────────────────────────────────────────────────
  cities31: [
    "Toulouse","Muret","Colomiers","Tournefeuille","Blagnac","Plaisance-du-Touch",
    "Cugnaux","Balma","Ramonville-Saint-Agne","Castanet-Tolosan","Fonsorbes",
    "L'Union","Saint-Orens-de-Gameville","Saint-Jean","Castelginest","Portet-sur-Garonne",
    "Auterive","Revel","Saint-Lys","Léguevin","Frouzins","Grenade","Aussonne",
    "Cornebarrieu","Launaguet","Aucamville","Fronton","Villemur-sur-Tarn","Beauzelle",
    "Bruguières","Fenouillet","Saint-Jory","Gratentour","Montastruc-la-Conseillère",
    "Verfeil","Carbonne","Cazères","Rieumes","Seysses","Eaunes","Labarthe-sur-Lèze",
    "Pins-Justaret","Roques","Saubens","Mondonville","Pibrac","Brax","Lherm",
    "Labège","Escalquens","Lanta","Caraman","Nailloux","Villefranche-de-Lauragais",
    "Montgiscard","L'Isle-Jourdain","Cintegabelle","Rieux-Volvestre",
  ] as const,

  regionalCities: [
    "Pamiers","Foix","Saint-Girons","Albi","Castres","Montauban","Auch","Tarbes",
    "Cahors","Carcassonne","Rodez","Millau","Mende","Figeac","Lourdes","Narbonne",
  ] as const,
};
