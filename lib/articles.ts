// LISTE 1 : Les 50 villes clés (Zone de chalandise 31)
const cities = [
  "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
  "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
  "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
  "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
  "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
  "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
  "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
  "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax"
];

// LISTE 2 : Les 15 Hôpitaux & Cliniques majeurs (Cibles de trafic)
const hospitals = [
  "Hôpital Purpan (CHU)", "Hôpital Rangueil", "Oncopole Claudius Regaud", 
  "Clinique Pasteur", "Clinique des Cèdres", "Clinique de l'Union", 
  "Clinique d'Occitanie (Muret)", "Hôpital Pierre-Paul Riquet", "Clinique Rive Gauche",
  "Clinique Croix du Sud", "Hôpital Larrey", "Hôpital des Enfants", "Hôpital Joseph Ducuing",
  "Clinique Saint-Exupéry", "Hôpital Marchant"
];

// --- GÉNÉRATEUR D'ARTICLES VILLES (SEO LOCAL PUISSANT) ---
const cityArticles = cities.map((city, index) => {
  // Petite variation pour éviter que tous les titres soient identiques à 100%
  const variations = [
    `Besoin d'un transport médical au départ de ${city} ?`,
    `Votre Taxi VSL conventionné sur le secteur de ${city}`,
    `Transport assis professionnalisé (TAP) depuis ${city}`
  ];
  const subTitle = variations[index % 3];

  return {
    slug: `taxi-conventionne-vsl-${city.toLowerCase().replace(/ /g, '-').replace(/'/g, '').replace(/é/g, 'e').replace(/è/g, 'e').replace(/à/g, 'a')}`,
    title: `Taxi Conventionné ${city} (31) : Transport Médical VSL`,
    description: `Réservez votre taxi conventionné CPAM à ${city}. Transport médical assis vers les hôpitaux de Toulouse. Tiers payant intégral, aucune avance de frais.`,
    date: new Date().toISOString(),
    category: "Villes",
    content: `
      <p class="lead">Vous résidez à <strong>${city}</strong> (31) et vous avez besoin d'un transport sanitaire pour vous rendre à un examen médical, une dialyse ou une hospitalisation à Toulouse ?</p>
      
      <h2>${subTitle}</h2>
      <p><strong>Taxi 31 Toulouse</strong> assure quotidiennement la liaison entre ${city} et tous les centres de soins de la région toulousaine. En tant que prestataire conventionné par la Sécurité Sociale (CPAM), nous vous offrons une alternative confortable aux ambulances et VSL classiques.</p>
      
      <h3>Pourquoi choisir notre service à ${city} ?</h3>
      <ul>
        <li><strong>Zéro avance de frais :</strong> Grâce au Tiers Payant, si vous êtes à 100% (ALD), vous ne payez rien à bord.</li>
        <li><strong>Ponctualité garantie :</strong> Nous connaissons les temps de trajet exacts entre ${city} et la rocade toulousaine aux heures de pointe.</li>
        <li><strong>Confort Berline :</strong> Voyagez dans un véhicule discret et climatisé, bien plus agréable qu'un véhicule sanitaire blanc classique.</li>
        <li><strong>Aide administrative :</strong> Nous vous aidons à remplir les formalités d'entrée à l'hôpital.</li>
      </ul>

      <h2>Les trajets fréquents depuis ${city}</h2>
      <p>Nos chauffeurs effectuent très régulièrement les navettes suivantes. Nous connaissons les raccourcis pour éviter les bouchons du périphérique :</p>
      <ul>
        <li>Taxi ${city} ↔ <strong>CHU Purpan</strong> (Urgences, Consultations, Pierre-Paul Riquet)</li>
        <li>Taxi ${city} ↔ <strong>Oncopole</strong> (Institut Claudius Regaud)</li>
        <li>Taxi ${city} ↔ <strong>Clinique Pasteur</strong> et Clinique de l'Union</li>
        <li>Taxi ${city} ↔ <strong>Hôpital Rangueil</strong></li>
      </ul>

      <h3>Comment réserver votre taxi VSL à ${city} ?</h3>
      <p>Pour bénéficier du tiers payant au départ de ${city}, vous devez simplement avoir votre <strong>Prescription Médicale de Transport</strong> (Bon de transport) signée par votre médecin, ainsi que votre Carte Vitale.</p>
      <p>Contactez-nous au <strong>07 72 33 98 92</strong> pour bloquer votre créneau horaire. Nous venons vous chercher directement à votre domicile.</p>
    `
  };
});

// --- GÉNÉRATEUR D'ARTICLES HÔPITAUX (GUIDES PRATIQUES) ---
const hospitalArticles = hospitals.map(hospital => ({
  slug: `transport-taxi-${hospital.toLowerCase().replace(/ /g, '-').replace(/[\(\)']/g, '').replace(/é/g, 'e')}`,
  title: `Taxi pour ${hospital} : Dépose, Accès et Remboursement`,
  description: `Comment aller à ${hospital} en taxi conventionné ? Guide complet : points de dépose, admission et prise en charge CPAM avec Taxi 31 Toulouse.`,
  date: new Date().toISOString(),
  category: "Hôpitaux",
  content: `
    <p>Vous avez une convocation pour une consultation ou une hospitalisation à <strong>${hospital}</strong> ? Laissez-vous conduire par un expert du transport médical toulousain.</p>
    
    <h2>Se rendre à ${hospital} sans stress</h2>
    <p>Les parkings de ${hospital} sont souvent saturés et coûteux. En choisissant un <strong>Taxi Conventionné</strong>, vous évitez la fatigue de la conduite et le stress du stationnement. Votre chauffeur vous dépose au plus près de l'entrée de votre service.</p>
    
    <h3>Où se fait la dépose taxi à ${hospital} ?</h3>
    <p>Contrairement aux véhicules personnels, les taxis conventionnés ont accès aux zones réservées. Selon votre convocation, nous vous déposerons :</p>
    <ul>
      <li>Devant l'entrée principale pour les admissions classiques.</li>
      <li>À l'accès "Ambulances/VSL" pour les séances de dialyse ou chimiothérapie (accès de plain-pied).</li>
      <li>Aux urgences si nécessaire.</li>
    </ul>
    
    <h2>Prise en charge à 100% pour vos trajets vers ${hospital}</h2>
    <p>Si votre état de santé le justifie, votre médecin vous a prescrit un bon de transport. ${hospital} étant un établissement de soins agréé, vos trajets aller et retour sont couverts par la CPAM.</p>
    <p><strong>Rappel important :</strong> Pour ne pas avancer les frais, présentez au chauffeur votre attestation de droits à jour.</p>

    <h3>Le retour : Nous vous attendons</h3>
    <p>Une fois votre examen terminé à ${hospital}, il suffit de nous appeler ou de nous envoyer un SMS. Si le médecin a du retard, pas de panique : nous adaptons notre planning pour assurer votre retour à domicile en toute sérénité.</p>
  `
}));

// --- ARTICLES MANUELS (PILLAR CONTENT - CONTENU PILIER) ---
// Ces articles doivent être très longs et très détaillés pour asseoir l'autorité du site.
const manualArticles = [
  {
    slug: "difference-taxi-conventionne-vsl-ambulance",
    title: "Taxi Conventionné, VSL ou Ambulance : Lequel choisir ?",
    description: "Comprendre la différence entre Taxi Conventionné, VSL et Ambulance. Lequel est remboursé ? Lequel est le plus confortable ? On vous explique tout.",
    date: new Date().toISOString(),
    category: "Conseils",
    content: `
      <h2>La grande confusion des transports sanitaires</h2>
      <p>Lorsqu'un médecin vous prescrit un "Transport Assis Professionnalisé" (TAP), vous avez le choix entre un VSL (Véhicule Sanitaire Léger) et un Taxi Conventionné. Beaucoup de patients pensent à tort que le VSL est obligatoire pour être remboursé. C'est faux.</p>
      
      <h3>Tableau comparatif</h3>
      <table class="w-full border-collapse border border-slate-200 my-6">
        <thead>
          <tr class="bg-slate-100">
            <th class="border p-3 text-left">Critère</th>
            <th class="border p-3 text-left">Taxi Conventionné</th>
            <th class="border p-3 text-left">VSL (Ambulance)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-3 font-bold">Remboursement CPAM</td>
            <td class="border p-3 text-green-600 font-bold">OUI (Identique)</td>
            <td class="border p-3 text-green-600 font-bold">OUI (Identique)</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">Véhicule</td>
            <td class="border p-3">Berline confort (Mercedes, Tesla...)</td>
            <td class="border p-3">Petite voiture blanche utilitaire</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">Discrétion</td>
            <td class="border p-3">Totale (Véhicule banalisé)</td>
            <td class="border p-3">Faible (Croix bleue visible)</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">Hygiène</td>
            <td class="border p-3">Stricte (Normes COVID)</td>
            <td class="border p-3">Stricte</td>
          </tr>
        </tbody>
      </table>

      <h2>Pourquoi privilégier le Taxi Conventionné ?</h2>
      <p>Le taxi offre souvent un confort supérieur (suspensions, espace aux jambes, climatisation) particulièrement appréciable après une séance de chimiothérapie ou une dialyse fatigante. De plus, pour des raisons de discrétion vis-à-vis du voisinage, beaucoup de patients préfèrent monter dans une berline classique plutôt que dans une ambulance blanche.</p>
      
      <h3>Comment reconnaître un vrai taxi conventionné ?</h3>
      <p>Il doit obligatoirement arborer le <strong>Logo Bleu "Taxi Conventionné"</strong> (rond bleu avec la voiture blanche) sur la vitre arrière droite. C'est la garantie qu'il est agréé par la Caisse Primaire d'Assurance Maladie de la Haute-Garonne.</p>
    `
  },
  {
    slug: "remboursement-transport-ald-100-tiers-payant",
    title: "Transport ALD et 100% : Le Guide du Remboursement",
    description: "Tout savoir sur la prise en charge à 100% des transports en taxi pour les ALD (Affections Longue Durée). Documents, procédure et tiers payant.",
    date: new Date().toISOString(),
    category: "Remboursement",
    content: `
      <p>Le transport médical peut représenter un coût important s'il n'est pas pris en charge. Heureusement, le système français protège bien les patients atteints de pathologies chroniques.</p>

      <h2>Qu'est-ce que le 100% ALD ?</h2>
      <p>L'ALD (Affection Longue Durée) concerne des maladies nécessitant un suivi prolongé et coûteux (Diabète, Cancer, Insuffisance cardiaque...). Si vos transports sont <strong>en rapport direct</strong> avec cette affection, ils sont pris en charge à 100% par la Sécurité Sociale.</p>
      
      <h3>Le Tiers Payant : Ne sortez pas votre carte bleue</h3>
      <p>Chez <strong>Taxi 31 Toulouse</strong>, nous appliquons systématiquement le Tiers Payant pour les patients en ALD. Cela signifie que nous facturons directement la CPAM.</p>
      
      <h2>Les 2 documents à avoir absolument sur vous</h2>
      <p>Attention, "être à 100%" ne suffit pas pour monter dans le taxi sans payer. Vous devez justifier de vos droits auprès du chauffeur. Préparez toujours :</p>
      <ol class="list-decimal pl-6 space-y-2 my-4">
        <li><strong>La Prescription Médicale de Transport (Cerfa n°11574*04) :</strong> Elle doit être remplie par le médecin, signée, et surtout datée d'avant le trajet.</li>
        <li><strong>Votre Carte Vitale à jour :</strong> Elle permet au chauffeur de vérifier vos droits en direct via son lecteur.</li>
      </ol>
      
      <h3>Et si je ne suis pas à 100% ?</h3>
      <p>Si votre transport est prescrit mais que vous n'êtes pas en ALD (ex: jambe cassée, rééducation ponctuelle), la Sécurité Sociale rembourse généralement 65%. Les 35% restants sont souvent couverts par votre mutuelle santé. Dans ce cas, nous pouvons aussi pratiquer le tiers payant sur la part obligatoire.</p>
    `
  },
  {
    slug: "reservation-taxi-aeroport-toulouse-blagnac-nuit",
    title: "Taxi Aéroport Toulouse-Blagnac : Tarifs et Réservation",
    description: "Réservez votre navette taxi vers l'aéroport de Toulouse-Blagnac. Trajets toutes distances, départ tôt le matin (4h) et accueil pancarte.",
    date: new Date().toISOString(),
    category: "Services",
    content: `
      <p>Un avion à prendre tôt le matin ou une arrivée tardive à Blagnac ? Ne comptez pas sur la chance. Le service de taxi sur réservation est la seule garantie d'arriver à l'heure.</p>
      
      <h2>Combien coûte un taxi pour l'aéroport de Blagnac ?</h2>
      <p>Le tarif est réglementé par la préfecture de Haute-Garonne. Il fonctionne au compteur (taximètre). Le prix dépend de :</p>
      <ul>
        <li>Votre point de départ (Centre-ville, Muret, Colomiers...).</li>
        <li>L'heure (Tarif de jour A/C ou Tarif de nuit B/D).</li>
        <li>L'approche (distance parcourue par le taxi pour venir vous chercher).</li>
      </ul>
      <p>Pour un devis précis, appelez-nous au <strong>07 72 33 98 92</strong>.</p>
      
      <h3>Les avantages Taxi 31 Toulouse</h3>
      <ul>
        <li><strong>Ponctualité :</strong> Pour un vol à 6h00 du matin, nous sommes devant chez vous à 4h00 précises.</li>
        <li><strong>Van & Berline :</strong> Vous avez beaucoup de bagages ? Signalez-le nous, nous adapterons le véhicule.</li>
        <li><strong>Sièges enfants :</strong> Disponibles gratuitement sur demande à la réservation.</li>
      </ul>
    `
  },
  {
    slug: "transport-enfant-cmpp-camsp-toulouse",
    title: "Transport d'Enfant (CMPP, CAMSP, Orthophoniste)",
    description: "Transport scolaire spécialisé pour enfants vers les centres de soins (CMPP, CAMSP) à Toulouse. Chauffeurs patients et bienveillants.",
    date: new Date().toISOString(),
    category: "Pédiatrie",
    content: `
      <p>La gestion des rendez-vous médicaux de votre enfant (CMPP, CAMSP, Orthophoniste) est un casse-tête avec votre travail ? Nous avons la solution.</p>
      
      <h2>Un accompagnement sécurisé de A à Z</h2>
      <p>Nous ne nous contentons pas de conduire. Pour les enfants, notre service inclut :</p>
      <ol>
        <li>La récupération de l'enfant (à l'école ou à la maison).</li>
        <li>Le trajet sécurisé en réhausseur ou siège auto adapté.</li>
        <li><strong>L'accompagnement physique</strong> jusqu'à la salle d'attente du praticien (nous ne laissons jamais l'enfant seul sur le trottoir).</li>
        <li>La transmission des informations ou documents si nécessaire.</li>
      </ol>
      
      <h3>Est-ce remboursé ?</h3>
      <p>Oui. Les transports vers les Centres Médico-Psycho-Pédagogiques (CMPP) ou les Centres d'Action Médico-Sociale Précoce (CAMSP) sont couverts à 100% par la Sécurité Sociale. Vous n'avez aucune avance de frais à faire.</p>
      
      <p>Nos chauffeurs sont pères et mères de famille, habitués à rassurer les enfants et à faire du trajet un moment agréable.</p>
    `
  }
];

// ON FUSIONNE TOUT (50 villes + 15 hôpitaux + 4 articles experts = 69 Pages SEO)
export const articles = [
  ...cityArticles,
  ...hospitalArticles,
  ...manualArticles
];