// LISTE 1 : Les 50 villes clés (Zone de chalandise 31)
const cities = [
  "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
  "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
  "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
  "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
  "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
  "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
  "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
  "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax", "Cornebarrieu", "Lherm"
];

// LISTE 2 : Les 15 Hôpitaux & Cliniques majeurs
const hospitals = [
  "Hôpital Purpan (CHU)", "Hôpital Rangueil", "Oncopole Claudius Regaud", 
  "Clinique Pasteur", "Clinique des Cèdres", "Clinique de l'Union", 
  "Clinique d'Occitanie (Muret)", "Hôpital Pierre-Paul Riquet", "Clinique Rive Gauche",
  "Clinique Croix du Sud", "Hôpital Larrey", "Hôpital des Enfants", "Hôpital Joseph Ducuing",
  "Clinique Saint-Exupéry", "Hôpital Marchant"
];

const medicalCares = [
  "séance de chimiothérapie", "dialyse", "radiothérapie", 
  "consultation post-opératoire", "examen IRM", "soins de rééducation"
];

// Helper pour les slugs
const createSlug = (text: string, prefix: string = "") => {
  const cleanText = text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return prefix ? `${prefix}-${cleanText}` : cleanText;
};

// --- 1. GÉNÉRATEUR ARTICLES HÔPITAUX ---
const hospitalArticles = hospitals.map((hospital, index) => {
  const slug = createSlug(hospital, "transport-taxi");
  const care = medicalCares[index % medicalCares.length];
  
  return {
    slug: slug,
    title: `Taxi Conventionné ${hospital} : Transport VSL & Tiers Payant 2026`,
    description: `Comment aller à ${hospital} en taxi conventionné ? Guide 2026 : accès VSL, prise en charge 100% CPAM et dépose au service ${care}.`,
    date: new Date().toISOString(),
    category: "Hôpitaux",
    content: `
      <p>Vous avez une convocation pour une <strong>${care}</strong> ou une hospitalisation à <strong>${hospital}</strong> ? Taxi 31 Toulouse assure votre accompagnement médicalisé avec professionnalisme.</p>
      
      <h2>Accéder à ${hospital} en Taxi Conventionné (VSL)</h2>
      <p>Se rendre à <strong>${hospital}</strong> peut être source de stress : parkings complets, travaux sur la rocade toulousaine ou fatigue liée au traitement. En tant que <strong>chauffeur agréé CPAM</strong>, je vous dépose directement devant l'entrée de votre service, vous évitant ainsi toute marche inutile.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
        <h4 class="font-bold text-blue-900 mb-2 italic">📌 Le saviez-vous ?</h4>
        <p class="text-blue-800 m-0">Pour ${hospital}, les taxis conventionnés bénéficient de voies d'accès prioritaires. Vous arrivez plus vite et plus sereinement à votre rendez-vous de ${care}.</p>
      </div>

      <h3>Transports en ALD : Prise en charge à 100%</h3>
      <p>Si votre trajet vers ${hospital} est lié à une Affection Longue Durée (ALD), vous bénéficiez du <strong>Tiers Payant intégral</strong>. En présentant votre bon de transport et votre carte Vitale, vous n'avez <strong>aucune avance de frais</strong> à effectuer. Nous gérons la facturation directement avec la CPAM de Haute-Garonne.</p>
      
      <h2>Points de dépose spécifiques à ${hospital}</h2>
      <ul>
        <li><strong>Entrée principale :</strong> Pour les consultations standards.</li>
        <li><strong>Accès VSL / Ambulances :</strong> Pour les patients fragiles ou à mobilité réduite.</li>
        <li><strong>Services de soins :</strong> Nous vous accompagnons, si nécessaire, jusqu'au bureau des entrées pour faciliter vos démarches.</li>
      </ul>

      <h3>Réserver votre retour depuis ${hospital}</h3>
      <p>Ne vous souciez plus de l'heure de sortie. Une fois votre rendez-vous terminé, contactez-moi au <strong>07 72 33 98 92</strong>. Nous suivons l'évolution de votre prise en charge pour être présents dès que vous êtes prêt(e).</p>
    `
  };
});

// --- 2. GÉNÉRATEUR ARTICLES VILLES ---
const cityArticles = cities.map((city, index) => {
  const slug = createSlug(city, "taxi-conventionne-vsl");
  const mainHospital = hospitals[index % hospitals.length];

  return {
    slug: slug,
    title: `Taxi Conventionné ${city} (31) : Transport VSL vers Toulouse`,
    description: `Réservez votre taxi conventionné à ${city}. Transport médical VSL vers ${mainHospital} et CHU Purpan. Tiers payant CPAM, confort premium et ponctualité.`,
    date: new Date().toISOString(),
    category: "Villes",
    content: `
      <p class="text-xl text-slate-600 leading-relaxed">Besoin d'un transport sanitaire au départ de <strong>${city}</strong> pour un examen médical à Toulouse ?</p>
      
      <h2>Votre Taxi VSL à ${city} : Confort et Sérénité</h2>
      <p><strong>Taxi 31 Toulouse</strong> dessert quotidiennement la commune de ${city} pour accompagner les patients vers les centres de soins majeurs (Oncopole, Purpan, Pasteur). Contrairement à un VSL classique, vous voyagez dans une <strong>berline premium Peugeot 5008 GT</strong>, alliant confort et discrétion.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-10">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 class="font-bold text-slate-900 mb-2">✅ Services à ${city}</h4>
          <ul class="text-sm space-y-2">
            <li>Départ de domicile à ${city}</li>
            <li>Aide au transfert et bagages</li>
            <li>Véhicule climatisé et spacieux</li>
            <li>Chauffeur ponctuel et bienveillant</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
          <h4 class="font-bold text-yellow-900 mb-2">💶 Tiers Payant</h4>
          <p class="text-sm text-yellow-800">Prise en charge directe par la CPAM 31. Zéro avance de frais sur présentation de votre prescription médicale.</p>
        </div>
      </div>

      <h3>Liaisons fréquentes depuis ${city}</h3>
      <p>Nous assurons la navette entre ${city} et les établissements suivants :</p>
      <ul>
        <li>Transport vers <strong>${mainHospital}</strong></li>
        <li>Liaison vers le <strong>CHU Purpan</strong> ou <strong>Rangueil</strong></li>
        <li>Consultations à la <strong>Clinique de l'Union</strong> ou <strong>Pasteur</strong></li>
      </ul>

      <h2>Comment réserver votre trajet à ${city} ?</h2>
      <p>La réservation est simple et rapide. Contactez-nous par téléphone ou via notre formulaire en ligne. Nous intervenons sur l'ensemble de <strong>${city}</strong> et des communes limitrophes pour garantir votre arrivée à l'heure, même aux heures de pointe sur la rocade.</p>
      
      <p class="mt-8"><em>Besoin d'un taxi pour un autre motif ? Nous assurons également les liaisons vers la <a href="/blog/reservation-taxi-aeroport-toulouse-blagnac-nuit" class="text-blue-600 font-bold">Gare Matabiau et l'Aéroport de Blagnac</a> depuis ${city}.</em></p>
    `
  };
});

// --- 3. ARTICLES MANUELS EXPERTS (EEAT) ---
const manualArticles = [
  {
    slug: "difference-taxi-conventionne-vsl-ambulance",
    title: "Taxi Conventionné vs VSL : Quelle différence pour votre confort ?",
    description: "Tout comprendre sur la différence entre Taxi Conventionné (TAP) et VSL. Avantages, confort, remboursement CPAM et choix du véhicule en 2026.",
    date: "2026-01-15T10:00:00Z",
    category: "Conseils",
    content: `
      <h2>Le choix du confort : Taxi ou VSL ?</h2>
      <p>Lorsqu'un médecin prescrit un <strong>Transport Assis Professionnalisé (TAP)</strong>, vous avez légalement le choix entre un VSL et un Taxi Conventionné. Si le remboursement est identique, l'expérience de voyage est très différente.</p>
      
      <h3>Pourquoi choisir le Taxi Conventionné ?</h3>
      <p>Le taxi conventionné est une berline de standing (comme notre Peugeot 5008 GT) qui offre une <strong>meilleure suspension</strong>, une <strong>climatisation performante</strong> et un <strong>confort acoustique</strong> supérieur aux véhicules sanitaires légers classiques souvent plus utilitaires.</p>
      
      <table class="w-full border-collapse border border-slate-200 my-8">
        <tr class="bg-slate-100 font-bold">
          <td class="border p-4">Critère</td>
          <td class="border p-4 text-blue-600">Taxi Conventionné</td>
          <td class="border p-4">VSL Classique</td>
        </tr>
        <tr>
          <td class="border p-4 font-bold">Véhicule</td>
          <td class="border p-4">Berline Premium / SUV</td>
          <td class="border p-4">Véhicule Sanitaire Typé Utilitaire</td>
        </tr>
        <tr>
          <td class="border p-4 font-bold">Discrétion</td>
          <td class="border p-4 text-green-600">Totale (Logo discret)</td>
          <td class="border p-4">Faible (Marquages bleus)</td>
        </tr>
      </table>
    `
  },
  {
    slug: "remboursement-transport-ald-100-tiers-payant",
    title: "Guide Remboursement Transport ALD 2026 : Zéro Avance de Frais",
    description: "Guide complet sur le remboursement des trajets en taxi conventionné pour les patients en ALD. Documents requis, 100% et tiers payant CPAM.",
    date: "2026-02-01T08:30:00Z",
    category: "Remboursement",
    content: `
      <h2>Comprendre le 100% Santé pour vos transports</h2>
      <p>Le régime d'Affection Longue Durée (ALD) permet la prise en charge intégrale de vos trajets vers vos lieux de soins à Toulouse. En 2026, les règles se sont simplifiées pour favoriser le <strong>Tiers Payant</strong>.</p>
      
      <h3>Les 3 piliers de la prise en charge</h3>
      <ol>
        <li><strong>La Prescription :</strong> Indispensable, elle doit mentionner 'Taxi' ou 'Transport Assis'.</li>
        <li><strong>Le Trajet :</strong> Il doit être en rapport direct avec votre pathologie exonérante.</li>
        <li><strong>Le Chauffeur :</strong> Il doit être agréé par la CPAM de Haute-Garonne.</li>
      </ol>

      <div class="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 my-8">
        <p class="font-bold text-red-900 m-0">⚠️ Rappel important :</p>
        <p class="text-red-800 m-0 text-sm">N'oubliez pas de demander votre bon de transport à votre spécialiste AVANT le trajet. Sans ce document, le tiers-payant ne peut être appliqué.</p>
      </div>
    `
  }
];

export const articles = [
  ...cityArticles,
  ...hospitalArticles,
  ...manualArticles
];