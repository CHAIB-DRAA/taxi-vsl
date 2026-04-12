// --- TYPES & HELPERS ---
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Villes" | "Hôpitaux" | "Trajets" | "Gares" | "Aéroport" | "Région" | "Guide";
  content: string;
}

const createSlug = (text: string, prefix: string = "") => {
  const cleanText = text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return prefix ? `${prefix}-${cleanText}` : cleanText;
};

// --- DATA SOURCES (LISTES COMPLÈTES) ---

// Ta liste initiale complète (47 villes) - NE PAS SUPPRIMER
const cities = [
  "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
  "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
  "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
  "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
  "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
  "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
  "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
  "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax", "Lherm"
];

// Villes régionales (Longue distance)
const regionalCities = [
  { name: "Albi", dept: "Tarn (81)", dist: "80km" },
  { name: "Auch", dept: "Gers (32)", dist: "75km" },
  { name: "Montauban", dept: "Tarn-et-Garonne (82)", dist: "50km" },
  { name: "Castres", dept: "Tarn (81)", dist: "75km" },
  { name: "Tarbes", dept: "Hautes-Pyrénées (65)", dist: "155km" },
  { name: "Cahors", dept: "Lot (46)", dist: "110km" },
  { name: "Pamiers", dept: "Ariège (09)", dist: "70km" },
  { name: "Carcassonne", dept: "Aude (11)", dist: "95km" }
];

const hospitals = [
  { name: "Hôpital Purpan (CHU)", spec: "Urgences, Enfants, Traumatologie" },
  { name: "Hôpital Rangueil", spec: "Cardiologie, Néphrologie, Transplantation" },
  { name: "Oncopole Claudius Regaud", spec: "Cancérologie, Radiothérapie, Chimiothérapie" },
  { name: "Clinique Pasteur", spec: "Cardiologie, Chirurgie Vasculaire" },
  { name: "Clinique de l'Union", spec: "Dialyse, Chirurgie, Soins de Suite" },
  { name: "Clinique des Cèdres", spec: "Chirurgie, Rééducation" },
  { name: "Clinique Croix du Sud", spec: "Oncologie, Maternité" },
  { name: "Hôpital Larrey", spec: "Pneumologie, ORL" },
  { name: "Clinique d'Occitanie (Muret)", spec: "Chirurgie, Urgences" }
];

const hubs = [
  { name: "Gare Toulouse Matabiau", type: "Gares" as const },
  { name: "Aéroport Toulouse-Blagnac", type: "Aéroport" as const },
  { name: "Gare de Muret", type: "Gares" as const },
  { name: "Gare Saint-Agne", type: "Gares" as const }
];

// --- GENERATORS ---

// 1. Articles Villes (Landing Pages locales) - Génère les 47 pages
const cityArticles: Article[] = cities.map(city => ({
  slug: createSlug(city, "taxi-conventionne"),
  title: `Taxi Conventionné à ${city} (31) : Transport VSL Agréé CPAM`,
  description: `Besoin d'un transport médical à ${city} ? Taxi conventionné agréé CPAM pour vos rendez-vous à Toulouse. Tiers-payant 100% ALD, confort premium.`,
  date: new Date().toISOString(),
  category: "Villes",
  content: `
    <p>Vous résidez à <strong>${city}</strong> et vous avez besoin d'un transport sanitaire pour un examen ou une hospitalisation à Toulouse ?</p>
    <h2>Transport Médicalisé de proximité à ${city}</h2>
    <p>Taxi 31 Toulouse dessert l'intégralité de la commune de <strong>${city}</strong>. En tant que taxi conventionné agréé par l'Assurance Maladie, nous assurons vos trajets vers tous les établissements de soins de la Haute-Garonne.</p>
    <div class="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 my-6">
      <h4 class="font-bold">✅ Prise en charge à 100%</h4>
      <p>Sur présentation de votre prescription médicale de transport, bénéficiez du tiers-payant intégral depuis ${city}. Zéro avance de frais pour les ALD et hospitalisations.</p>
    </div>
  `
}));

// 2. Articles Région (Longue distance)
const regionalArticles: Article[] = regionalCities.map(city => ({
  slug: createSlug(city.name, "vsl-taxi-conventionne"),
  title: `Taxi Conventionné ${city.name} ↔ Toulouse : Liaison VSL ${city.dept}`,
  description: `Transport médical entre ${city.name} et Toulouse. Taxi conventionné longue distance, confort Peugeot 5008 GT et tiers-payant CPAM.`,
  date: new Date().toISOString(),
  category: "Région",
  content: `
    <p>Le trajet entre <strong>${city.name}</strong> et Toulouse (${city.dist}) nécessite un véhicule confortable et un chauffeur expérimenté.</p>
    <h2>Votre taxi VSL depuis le ${city.dept}</h2>
    <p>Pour vos soins spécialisés à Toulouse, Taxi 31 assure votre transport depuis ${city.name}. Nous pratiquons le tiers-payant pour les trajets inter-départementaux sous réserve d'une prescription médicale valide.</p>
  `
}));

// 3. Articles Hôpitaux
const hospitalArticles: Article[] = hospitals.map(h => ({
  slug: createSlug(h.name, "taxi-vsl"),
  title: `Taxi Conventionné ${h.name} Toulouse : Accès & Prise en Charge`,
  description: `Guide d'accès à l'${h.name} en taxi conventionné. Spécialités : ${h.spec}. Dépose prioritaire et tiers-payant CPAM.`,
  date: new Date().toISOString(),
  category: "Hôpitaux",
  content: `<h2>Se rendre à l'${h.name}</h2><p>L'<strong>${h.name}</strong> est un centre majeur pour : ${h.spec}. Nous vous déposons directement devant votre pavillon de consultation.</p>`
}));

// 4. Articles Hubs (Gares & Aéroport)
const hubArticles: Article[] = hubs.map(hub => ({
  slug: createSlug(hub.name, "taxi-reservation"),
  title: `Taxi ${hub.name} : Transferts 24h/7j & Tarifs Fixes`,
  description: `Réservez votre taxi pour ${hub.name}. Accueil personnalisé, aide aux bagages et confort Peugeot 5008 GT.`,
  date: new Date().toISOString(),
  category: hub.type,
  content: `<h2>Votre transfert à ${hub.name}</h2><p>Service premium pour vos arrivées et départs à <strong>${hub.name}</strong>. Accueil avec pancarte et suivi des horaires en temps réel.</p>`
}));

// --- EXPORT FINAL ---
// Ici, on fusionne absolument TOUT sans aucune restriction
export const articles: Article[] = [
  ...cityArticles,
  ...regionalArticles,
  ...hospitalArticles,
  ...hubArticles
];