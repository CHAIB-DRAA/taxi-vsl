// LISTE 1 : Les 50 villes clés autour de Toulouse (Zone de chalandise)
const cities = [
    "Muret", "Colomiers", "Tournefeuille", "Blagnac", "Plaisance-du-Touch", "Cugnaux", 
    "Balma", "Ramonville-Saint-Agne", "Castanet-Tolosan", "Saint-Gaudens", "Fonsorbes", 
    "L'Union", "Saint-Orens-de-Gameville", "Saint-Jean", "Castelginest", "Portet-sur-Garonne", 
    "Auterive", "Revel", "Saint-Lys", "Leguevin", "Frouzins", "Grenade", "Aussonne", 
    "Cornebarrieu", "Launaguet", "Aucamville", "Fronton", "Villemur-sur-Tarn", "Beauzelle", 
    "Bruguières", "Fenouillet", "Saint-Jory", "Gratentour", "Montastruc-la-Conseillère", 
    "Verfeil", "Carbonne", "Cazères", "Rieumes", "Seysses", "Eaunes", "Labarthe-sur-Lèze",
    "Pins-Justaret", "Roques", "Saubens", "Mondonville", "Pibrac", "Brax", "Cornebarrieu"
  ];
  
  // LISTE 2 : Les 15 Hôpitaux & Cliniques majeurs
  const hospitals = [
    "Hôpital Purpan (CHU)", "Hôpital Rangueil", "Oncopole Claudius Regaud", 
    "Clinique Pasteur", "Clinique des Cèdres", "Clinique de l'Union", 
    "Clinique d'Occitanie (Muret)", "Hôpital Pierre-Paul Riquet", "Clinique Rive Gauche",
    "Clinique Croix du Sud", "Hôpital Larrey", "Hôpital des Enfants", "Hôpital Joseph Ducuing",
    "Clinique Saint-Exupéry", "Hôpital Marchant"
  ];
  
  // --- GÉNÉRATEUR D'ARTICLES VILLES ---
  const cityArticles = cities.map(city => ({
    slug: `taxi-conventionne-vsl-${city.toLowerCase().replace(/ /g, '-').replace(/'/g, '')}`,
    title: `Taxi Conventionné à ${city} : Transport Médical vers Toulouse`,
    excerpt: `Besoin d'un taxi VSL au départ de ${city} ? Nous assurons vos trajets vers tous les hôpitaux de Toulouse. Tiers payant accepté.`,
    date: "Mis à jour en 2025",
    content: `
      <p>Vous habitez à <strong>${city}</strong> et vous devez vous rendre à un rendez-vous médical à Toulouse ?</p>
      <p>Ne cherchez plus. <strong>Taxi Occitanie</strong> est votre partenaire privilégié pour tous les transports sanitaires au départ du secteur de ${city}.</p>
      
      <h2>Un Taxi Conventionné CPAM à ${city}</h2>
      <p>Que ce soit pour une dialyse, une chimiothérapie, de la rééducation ou une simple consultation, vous avez le droit de choisir votre transporteur. En faisant appel à notre service conventionné, vous bénéficiez du <strong>Tiers Payant</strong> (prise en charge à 100% ou 65% selon votre ALD) sur simple présentation de votre prescription médicale.</p>
      
      <h2>Les temps de trajet ${city} ↔ Hôpitaux</h2>
      <p>Nous connaissons parfaitement les itinéraires depuis ${city} pour éviter les bouchons et vous déposer à l'heure :</p>
      <ul>
        <li>${city} vers <strong>Purpan</strong> : Prise en charge prioritaire.</li>
        <li>${city} vers <strong>Oncopole</strong> : Accès direct.</li>
        <li>${city} vers <strong>Rangueil</strong> : Trajet optimisé.</li>
      </ul>
      
      <h2>Comment réserver depuis ${city} ?</h2>
      <p>C'est simple : cliquez sur le bouton d'appel ou remplissez le formulaire de réservation. Nous venons vous chercher à votre domicile à ${city} et nous vous accompagnons jusqu'au service de soins.</p>
    `
  }));
  
  // --- GÉNÉRATEUR D'ARTICLES HÔPITAUX ---
  const hospitalArticles = hospitals.map(hospital => ({
    slug: `transport-taxi-${hospital.toLowerCase().replace(/ /g, '-').replace(/[\(\)']/g, '')}`,
    title: `Transport vers ${hospital} : Guide & Dépose Taxi`,
    excerpt: `Tout savoir pour votre venue à ${hospital}. Où se fait la dépose taxi ? Comment se passe l'admission ? Guide complet par Taxi Occitanie.`,
    date: "Guide Hospitalier 2025",
    content: `
      <p>Vous avez une convocation pour <strong>${hospital}</strong> ? Laissez-vous guider par un professionnel habitué des lieux.</p>
      
      <h2>Où le taxi vous dépose-t-il à ${hospital} ?</h2>
      <p>${hospital} est un site vaste. Il est fréquent que les patients se perdent. Nos chauffeurs connaissent les entrées exactes de chaque service (Consultations, Radiothérapie, Admissions, Urgences).</p>
      <p>Nous vous déposons <strong>au plus près de la porte</strong>, sur les emplacements réservés aux professionnels de santé.</p>
      
      <h2>La prise en charge administrative</h2>
      <p>Une fois arrivé à ${hospital}, nous pouvons vous aider à localiser la borne d'accueil ou le secrétariat pour enregistrer votre arrivée.</p>
      
      <h2>Le retour depuis ${hospital}</h2>
      <p>Ne stressez pas pour le retour. Une fois votre examen terminé, nous venons vous récupérer au même endroit. Si le médecin a du retard, nous adaptons notre planning.</p>
    `
  }));
  
  // --- ARTICLES MANUELS (FAQ & EXPERTISE) ---
  // Ces articles répondent aux questions précises (SEO Sémantique)
  const manualArticles = [
    {
      slug: "difference-taxi-vsl-ambulance",
      title: "Taxi Conventionné ou VSL : Quelle différence ?",
      excerpt: "On confond souvent Taxi Conventionné et VSL (Véhicule Sanitaire Léger). En réalité, pour le patient, c'est la même chose : même remboursement, même confort.",
      date: "Conseil Expert",
      content: `
        <h2>Le mythe du VSL</h2>
        <p>Beaucoup de patients pensent qu'il faut absolument une ambulance blanche (VSL) pour être remboursé. C'est faux.</p>
        <p>Un <strong>Taxi Conventionné</strong> (logo bleu sur la vitre arrière) est un véhicule de tourisme agréé par la CPAM. Il offre exactement les mêmes conditions de remboursement qu'un VSL.</p>
        <h2>Pourquoi choisir le Taxi ?</h2>
        <ul>
          <li><strong>Confort :</strong> Berline type Mercedes/BMW plutôt qu'une petite voiture blanche.</li>
          <li><strong>Discrétion :</strong> Vous ne passez pas inaperçu avec une ambulance devant chez vous.</li>
          <li><strong>Disponibilité :</strong> Souvent plus réactifs.</li>
        </ul>
      `
    },
    {
      slug: "remboursement-transport-ald-100",
      title: "Transport en ALD : Suis-je remboursé à 100% ?",
      excerpt: "Comprendre le remboursement CPAM pour les Affections Longue Durée (ALD). Avez-vous besoin d'avancer les frais ?",
      date: "Guide Remboursement",
      content: `
        <p>Si vous êtes reconnu en ALD (Affection Longue Durée) par la Sécurité Sociale, vos transports liés à cette affection sont pris en charge à <strong>100%</strong>.</p>
        <h2>Le Tiers Payant Intégral</h2>
        <p>Avec Taxi Occitanie, vous n'avancez pas un centime. Nous nous faisons payer directement par la caisse d'assurance maladie.</p>
        <h2>Documents obligatoires</h2>
        <p>Même à 100%, vous devez présenter au chauffeur :</p>
        <ol>
          <li>La Prescription Médicale de Transport (Bon de transport) signée et datée avant le trajet.</li>
          <li>Votre Carte Vitale à jour.</li>
        </ol>
      `
    },
    {
      slug: "taxi-gare-matabiau-aeroport-blagnac",
      title: "Navette Gare Matabiau & Aéroport Blagnac",
      excerpt: "Service de transport privé vers les hubs de transport de Toulouse. Ponctualité garantie pour ne pas rater votre départ.",
      date: "Service Privé",
      content: `
        <p>En dehors du transport médical, nous assurons vos liaisons vers la <strong>Gare Matabiau</strong> et l'<strong>Aéroport de Toulouse-Blagnac</strong>.</p>
        <h2>Pourquoi réserver un taxi à l'avance ?</h2>
        <p>Aux heures de pointe, trouver un taxi disponible à la dernière minute est risqué à Toulouse. En réservant chez Taxi Occitanie, votre chauffeur est bloqué pour vous.</p>
        <h2>Tarifs et Nuit</h2>
        <p>Nous appliquons les tarifs préfectoraux en vigueur. Pour les départs très matinaux (4h du matin) ou tardifs, la réservation est indispensable.</p>
      `
    },
    {
      slug: "transport-enfant-cmpp-camsp",
      title: "Transport d'enfant vers CMPP et CAMSP",
      excerpt: "Nous assurons le transport scolaire spécialisé pour les enfants vers les centres de soins (CMPP, Orthophoniste, CAMSP).",
      date: "Service Pédiatrie",
      content: `
        <p>Votre enfant a des séances régulières au CMPP ou chez l'orthophoniste ? Vous ne pouvez pas toujours quitter votre travail pour l'y emmener ?</p>
        <h2>Un service de confiance</h2>
        <p>Nos chauffeurs sont habitués au transport d'enfants. Nous les récupérons à l'école ou au domicile, les accompagnons jusqu'à la salle d'attente du praticien, et les ramenons.</p>
        <p>Tout est géré en tiers payant avec la prescription du médecin spécialiste.</p>
      `
    }
  ];
  
  // ON FUSIONNE TOUT (C'est ici que la magie opère : 50 + 15 + 4 = 69 Articles instantanés !)
  export const articles = [
    ...cityArticles,
    ...hospitalArticles,
    ...manualArticles
  ];