// --- TYPES & INTERFACES ---
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Villes" | "Hôpitaux" | "Trajets" | "Gares" | "Aéroport" | "Région" | "Guide";
  content: string;
}

// Helper pour générer des slugs propres (SEO Friendly)
const createSlug = (text: string, prefix: string = "") => {
  const cleanText = text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return prefix ? `${prefix}-${cleanText}` : cleanText;
};

// --- DATA SOURCES ---

const regionalCities = [
  { name: "Albi", dept: "Tarn (81)", dist: "80km", time: "55 min" },
  { name: "Auch", dept: "Gers (32)", dist: "75km", time: "1h 05" },
  { name: "Montauban", dept: "Tarn-et-Garonne (82)", dist: "50km", time: "45 min" },
  { name: "Castres", dept: "Tarn (81)", dist: "75km", time: "1h 10" },
  { name: "Tarbes", dept: "Hautes-Pyrénées (65)", dist: "155km", time: "1h 35" },
  { name: "Carcassonne", dept: "Aude (11)", dist: "95km", time: "1h" }
];

const localCities = [
  "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
  "Balma", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", "L'Union", "Auterive", 
  "Revel", "Grenade", "Carbonne", "Nailloux", "Saint-Lys", "Leguevin"
];

const hospitals = [
  { name: "Hôpital Purpan", spec: "Urgences, Pédiatrie, Traumatologie", access: "Voie Lactée / Purpan" },
  { name: "Hôpital Rangueil", spec: "Cardiologie, Néphrologie, Transplantation", access: "Avenue Pr. Jean Poulhès" },
  { name: "Oncopole Claudius Regaud", spec: "Cancérologie, Radiothérapie, Chimiothérapie", access: "Route d'Espagne" },
  { name: "Clinique Pasteur", spec: "Cardiologie, Chirurgie Vasculaire", access: "Avenue de Lombez" },
  { name: "Clinique de l'Union", spec: "Dialyse, Chirurgie, Soins de Suite", access: "Saint-Jean" },
  { name: "Clinique Croix du Sud", spec: "Chirurgie, Maternité, Oncologie", access: "Quint-Fonsegrives" }
];

const hubs = [
  { name: "Gare Toulouse Matabiau", type: "Gares" as const, info: "Accueil quai / Hall 1 & 2" },
  { name: "Aéroport Toulouse-Blagnac", type: "Aéroport" as const, info: "Arrivées Porte C / Dépose-minute" },
  { name: "Gare de Muret", type: "Gares" as const, info: "Parvis de la gare" }
];

// --- GENERATORS ---

// 1. GÉNÉRATEUR RÉGIONAL (Longue Distance & Haute Valeur SEO)
const regionalArticles: Article[] = regionalCities.map(city => ({
  slug: createSlug(city.name, "taxi-conventionne-vsl"),
  title: `Taxi Conventionné ${city.name} ↔ Toulouse : Transport VSL Pris en Charge à 100%`,
  description: `Besoin d'un transport médical entre ${city.name} (${city.dept}) et les cliniques de Toulouse ? Taxi agréé CPAM, tiers-payant ALD et confort premium.`,
  date: new Date().toISOString(),
  category: "Région",
  content: `
    <p class="text-xl leading-relaxed text-slate-700">Le trajet médical entre <strong>${city.name}</strong> et les centres hospitaliers toulousains représente environ ${city.dist}. Pour un patient fragile, ce déplacement nécessite un confort absolu et une ponctualité rigoureuse.</p>
    
    <h2>Votre Transport Sanitaire entre le ${city.dept} et la Haute-Garonne</h2>
    <p>En choisissant <strong>Taxi 31 Toulouse</strong> pour votre liaison depuis ${city.name}, vous optez pour un <strong>Transport Assis Professionnalisé (TAP)</strong> de haute qualité. Contrairement aux véhicules sanitaires légers (VSL) classiques, notre Peugeot 5008 GT garantit une assise ergonomique, indispensable pour des trajets de plus de ${city.time}.</p>
    
    <div class="bg-blue-50 border-2 border-blue-200 p-8 rounded-3xl my-10 shadow-sm">
      <h3 class="mt-0 text-blue-900 font-bold">📋 Checklist Tiers-Payant (Zéro avance de frais)</h3>
      <p>Pour votre trajet de ${city.name} vers Toulouse, assurez-vous d'avoir :</p>
      <ul class="space-y-2">
        <li>✅ <strong>Prescription Médicale de Transport :</strong> Spécifiant impérativement le mode "Taxi" ou "Transport Assis".</li>
        <li>✅ <strong>Attestation ALD :</strong> Pour une prise en charge à 100% sans avance de frais.</li>
        <li>✅ <strong>Carte Vitale :</strong> À jour pour la facturation directe via télétransmission CPAM.</li>
      </ul>
    </div>

    <h2>Pourquoi nous solliciter pour un trajet ${city.name} - Toulouse ?</h2>
    <ul>
      <li><strong>Maîtrise des Itinéraires :</strong> Utilisation des voies prioritaires et connaissance des flux (A68, A62, N124) pour garantir votre heure de rendez-vous.</li>
      <li><strong>Confort Premium :</strong> Véhicule climatisé, spacieux, idéal pour les patients souffrant du dos ou fatigables.</li>
      <li><strong>Accompagnement :</strong> Nous vous aidons pour l'enregistrement administratif à l'arrivée.</li>
    </ul>

    <section class="mt-12 p-6 bg-slate-50 rounded-2xl">
      <h2 class="text-2xl font-bold mb-4">Questions Fréquentes (FAQ)</h2>
      <div class="space-y-4">
        <p><strong>Puis-je choisir un taxi plutôt qu'une ambulance ?</strong> Oui, si votre état de santé permet la station assise et que votre médecin a coché "Taxi/VSL" sur votre bon de transport.</p>
        <p><strong>Effectuez-vous le trajet retour vers ${city.name} ?</strong> Absolument. Nous planifions votre retour dès que votre séance ou consultation est terminée.</p>
      </div>
    </section>
  `
}));

// 2. GÉNÉRATEUR HÔPITAUX (Focus Expertise & Accès)
const hospitalArticles: Article[] = hospitals.map(h => ({
  slug: createSlug(h.name, "taxi-vsl-conventionne"),
  title: `Taxi Conventionné ${h.name} Toulouse : Accès, Spécialités et Réservation`,
  description: `Comment se rendre à l'${h.name} en taxi conventionné ? Guide complet 2026 : accès VSL, prise en charge CPAM 100% et dépose au service ${h.spec}.`,
  date: new Date().toISOString(),
  category: "Hôpitaux",
  content: `
    <p>L'<strong>${h.name}</strong> est un pôle d'excellence reconnu pour : <em>${h.spec}</em>. S'y rendre en véhicule personnel est souvent synonyme de stress lié au stationnement et à la fatigue.</p>
    
    <h2>Accès prioritaire à l'${h.name} en Taxi Agréé</h2>
    <p>En tant que <strong>chauffeur agréé CPAM</strong>, je dispose d'autorisations spécifiques pour accéder aux zones de dépose-minute "Ambulances/VSL" de l'${h.name}. Cela vous évite de longues marches depuis les parkings publics.</p>

    <div class="grid md:grid-cols-2 gap-8 my-10">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h4 class="font-bold text-slate-900 mb-2">📍 Adresse & Accès</h4>
        <p class="text-sm text-slate-600">Entrée principale : ${h.access}. Nous vous déposons directement devant le pavillon de votre rendez-vous.</p>
      </div>
      <div class="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm">
        <h4 class="font-bold text-green-900 mb-2">💰 Facturation Directe</h4>
        <p class="text-sm text-green-800">Tiers-payant intégral. Nous gérons le dossier administratif avec la CPAM de Haute-Garonne pour vous.</p>
      </div>
    </div>

    <h3>Prise en charge pour les traitements lourds</h3>
    <p>Si vous devez vous rendre à l'${h.name} pour des soins récurrents (Chimiothérapie, Dialyse, Rééducation), nous mettons en place un planning de transport régulier pour vous assurer une sérénité totale sur toute la durée de votre protocole.</p>
  `
}));

// 3. GÉNÉRATEUR VILLES LOCALES (SEO Local de Proximité)
const cityArticles: Article[] = localCities.map(city => ({
  slug: createSlug(city, "taxi-conventionne"),
  title: `Taxi Conventionné à ${city} (31) : Transport Médicalisé vers Toulouse`,
  description: `Réservez votre taxi agréé CPAM à ${city}. Transport VSL vers les hôpitaux de Toulouse (Purpan, Oncopole, Pasteur). Tiers-payant 100% ALD.`,
  date: new Date().toISOString(),
  category: "Villes",
  content: `
    <p>Besoin d'un transport sanitaire fiable au départ de <strong>${city}</strong> ?</p>
    <h2>Votre Taxi VSL de proximité à ${city}</h2>
    <p>Habitants de <strong>${city}</strong>, Taxi 31 Toulouse assure vos liaisons quotidiennes vers tous les centres de soins de l'agglomération toulousaine. Que vous ayez rendez-vous pour une consultation simple ou une hospitalisation, nous garantissons votre ponctualité.</p>
    
    <h3>Engagement Qualité à ${city}</h3>
    <ul>
      <li>Départ de votre domicile à ${city} à l'heure précise.</li>
      <li>Véhicule Peugeot 5008 GT : confort, espace et propreté.</li>
      <li>Aide au déplacement pour les personnes à mobilité réduite.</li>
    </ul>
    <p><em>Nous desservons également ${city} pour vos besoins de transport vers la Gare Matabiau et l'Aéroport de Blagnac.</em></p>
  `
}));

// 4. GÉNÉRATEUR HUBS (Gares & Aéroport)
const hubArticles: Article[] = hubs.map(hub => ({
  slug: createSlug(hub.name, "taxi-reservation"),
  title: `Taxi ${hub.name} : Transferts 24h/7j & Tarifs Fixes`,
  description: `Réservez votre chauffeur à ${hub.name}. Accueil personnalisé, aide aux bagages et confort premium. Idéal pour vos voyages business ou loisirs.`,
  date: new Date().toISOString(),
  category: hub.type,
  content: `
    <p>Simplifiez vos arrivées et départs à <strong>${hub.name}</strong> avec un service de taxi haut de gamme.</p>
    <h2>Service de Transfert à ${hub.name}</h2>
    <p>Votre chauffeur vous attend à <strong>${hub.name}</strong> (${hub.info}) pour vous conduire vers Toulouse ou n'importe quelle commune de la région Occitanie.</p>
    
    <div class="bg-slate-900 text-white p-8 my-8 rounded-3xl">
      <h4 class="text-yellow-400 font-bold mb-4">⭐ Pourquoi choisir Taxi 31 ?</h4>
      <ul class="text-sm space-y-2">
        <li>🚀 <strong>Ponctualité :</strong> Suivi des trains et vols en temps réel.</li>
        <li>👔 <strong>Professionnalisme :</strong> Accueil avec pancarte nominative.</li>
        <li>💳 <strong>Flexibilité :</strong> Paiement par CB, Amex ou espèces.</li>
      </ul>
    </div>
  `
}));

// --- EXPORT FINAL ---
export const articles: Article[] = [
  ...regionalArticles,
  ...hospitalArticles,
  ...cityArticles,
  ...hubArticles
];