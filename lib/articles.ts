// ─── TYPES ────────────────────────────────────────────────────────────────────
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Transport Médical" | "Courses Privées" | "Hôpitaux" | "Trajets" | "Guide" | "Villes" | "Comparaisons" | "Spécialités";
  readTime: string;
  content: string;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function createSlug(text: string): string {
  return text.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ─── CITY DATA ────────────────────────────────────────────────────────────────
interface CityInfo {
  name: string;
  zone: string;       // direction relative à Toulouse
  distToulouse: number;
  purpan: number;     // km vers CHU Purpan
  rangueil: number;   // km vers Rangueil
  oncopole: number;   // km vers Oncopole
  aeroport: number;   // km vers Aéroport Blagnac
  detail: string;     // phrase unique décrivant la ville
}

const cityData: CityInfo[] = [
  { name: "Muret", zone: "sud", distToulouse: 22, purpan: 25, rangueil: 18, oncopole: 18, aeroport: 35, detail: "Sous-préfecture de Haute-Garonne et ville la plus peuplée du département après Toulouse avec plus de 25 000 habitants" },
  { name: "Colomiers", zone: "ouest", distToulouse: 8, purpan: 12, rangueil: 20, oncopole: 20, aeroport: 5, detail: "Deuxième ville de Haute-Garonne, porte d'entrée de la zone aéronautique d'Airbus et de l'A380" },
  { name: "Tournefeuille", zone: "ouest", distToulouse: 7, purpan: 14, rangueil: 18, oncopole: 18, aeroport: 10, detail: "Commune résidentielle de l'ouest toulousain en forte croissance, réputée pour sa qualité de vie" },
  { name: "Blagnac", zone: "nordouest", distToulouse: 8, purpan: 10, rangueil: 22, oncopole: 22, aeroport: 2, detail: "Ville de l'industrie aéronautique, siège social d'Airbus et commune riveraine de l'aéroport international Toulouse-Blagnac" },
  { name: "Plaisance-du-Touch", zone: "ouest", distToulouse: 12, purpan: 15, rangueil: 22, oncopole: 20, aeroport: 12, detail: "Commune résidentielle de l'ouest toulousain, caractérisée par ses lotissements pavillonnaires et sa vie de quartier apaisée" },
  { name: "Cugnaux", zone: "sudouest", distToulouse: 12, purpan: 20, rangueil: 16, oncopole: 15, aeroport: 20, detail: "Commune du sud-ouest toulousain en pleine expansion, bordant la forêt de Bouconne" },
  { name: "Balma", zone: "est", distToulouse: 7, purpan: 18, rangueil: 10, oncopole: 20, aeroport: 22, detail: "Ville résidentielle de l'est toulousain, très appréciée des familles pour sa proximité avec le centre-ville et ses espaces verts" },
  { name: "Ramonville-Saint-Agne", zone: "sudest", distToulouse: 9, purpan: 20, rangueil: 8, oncopole: 12, aeroport: 25, detail: "Terminus de la ligne B du métro, Ramonville est une commune du sud-est de Toulouse réputée pour son port de plaisance sur le Canal du Midi" },
  { name: "Castanet-Tolosan", zone: "sudest", distToulouse: 11, purpan: 22, rangueil: 10, oncopole: 18, aeroport: 28, detail: "Commune dynamique du sud-est de l'agglomération toulousaine, avec ses zones pavillonnaires et son vignoble réputé" },
  { name: "Saint-Gaudens", zone: "periurbain", distToulouse: 75, purpan: 80, rangueil: 75, oncopole: 78, aeroport: 88, detail: "Sous-préfecture de Haute-Garonne et ville-centre du Comminges, aux portes des Pyrénées" },
  { name: "Fonsorbes", zone: "ouest", distToulouse: 16, purpan: 18, rangueil: 24, oncopole: 22, aeroport: 14, detail: "Commune résidentielle de l'ouest toulousain, dont la population a doublé en 20 ans grâce à son cadre de vie rural à deux pas de la ville" },
  { name: "L'Union", zone: "nordest", distToulouse: 8, purpan: 16, rangueil: 16, oncopole: 25, aeroport: 18, detail: "Commune résidentielle du nord-est de Toulouse, appréciée pour sa tranquillité et sa desserte par le réseau Tisséo" },
  { name: "Saint-Orens-de-Gameville", zone: "sudest", distToulouse: 9, purpan: 20, rangueil: 10, oncopole: 18, aeroport: 24, detail: "Commune résidentielle du sud-est toulousain, l'une des plus dynamiques de l'agglomération avec une forte progression démographique" },
  { name: "Saint-Jean", zone: "nordest", distToulouse: 10, purpan: 16, rangueil: 18, oncopole: 26, aeroport: 18, detail: "Commune du nord-est de l'agglomération toulousaine, connue pour ses zones pavillonnaires calmes et sa proximité avec les axes autoroutiers" },
  { name: "Castelginest", zone: "nord", distToulouse: 9, purpan: 15, rangueil: 20, oncopole: 26, aeroport: 16, detail: "Commune du nord de Toulouse, caractérisée par son mélange de zones résidentielles et d'espaces naturels préservés" },
  { name: "Portet-sur-Garonne", zone: "sud", distToulouse: 9, purpan: 16, rangueil: 12, oncopole: 12, aeroport: 22, detail: "Commune de la première couronne sud de Toulouse, dotée d'un important pôle commercial et d'une situation géographique stratégique au carrefour de plusieurs axes routiers" },
  { name: "Auterive", zone: "periurbain", distToulouse: 34, purpan: 40, rangueil: 32, oncopole: 35, aeroport: 48, detail: "Commune de la vallée de l'Ariège, à mi-chemin entre Toulouse et Pamiers, porte du Volvestre" },
  { name: "Revel", zone: "periurbain", distToulouse: 45, purpan: 50, rangueil: 45, oncopole: 52, aeroport: 60, detail: "Bastide médiévale du Lauragais, réputée pour sa halle centrale et son lac Saint-Ferréol, premier grand barrage d'Europe construit au XVIIe siècle" },
  { name: "Saint-Lys", zone: "sudouest", distToulouse: 22, purpan: 25, rangueil: 28, oncopole: 25, aeroport: 25, detail: "Commune du sud-ouest de Haute-Garonne, connu pour ses industries électroniques et son parc de loisirs naturels" },
  { name: "Leguevin", zone: "ouest", distToulouse: 18, purpan: 22, rangueil: 28, oncopole: 26, aeroport: 15, detail: "Commune de l'ouest toulousain, carrefour entre l'agglomération et le Savès, dotée d'une population croissante attirée par son cadre rural" },
  { name: "Frouzins", zone: "sudouest", distToulouse: 13, purpan: 18, rangueil: 16, oncopole: 14, aeroport: 22, detail: "Commune du sud-ouest toulousain, adossée au coteau de Pech-David, qui a su préserver son caractère de village malgré l'expansion urbaine" },
  { name: "Grenade", zone: "nord", distToulouse: 22, purpan: 28, rangueil: 32, oncopole: 32, aeroport: 20, detail: "Bastide du XIIIe siècle au bord de la Garonne, chef-lieu de canton du nord de la Haute-Garonne au riche patrimoine architectural" },
  { name: "Aussonne", zone: "nordouest", distToulouse: 14, purpan: 16, rangueil: 26, oncopole: 26, aeroport: 10, detail: "Commune du nord-ouest de l'agglomération, connue pour ses zones d'activités et ses lotissements récents qui attirent de jeunes familles" },
  { name: "Cornebarrieu", zone: "nordouest", distToulouse: 10, purpan: 14, rangueil: 22, oncopole: 22, aeroport: 6, detail: "Commune riveraine de l'aéroport Toulouse-Blagnac, avec ses nombreuses zones d'activités aéronautiques et ses espaces naturels au bord de la Garonne" },
  { name: "Launaguet", zone: "nord", distToulouse: 7, purpan: 12, rangueil: 18, oncopole: 22, aeroport: 15, detail: "Commune de la première couronne nord de Toulouse, en pleine mutation urbaine tout en conservant des espaces maraîchers" },
  { name: "Aucamville", zone: "nord", distToulouse: 7, purpan: 12, rangueil: 19, oncopole: 23, aeroport: 15, detail: "Commune résidentielle du nord de Toulouse, appréciée pour sa tranquillité et sa liaison directe avec le centre-ville par les transports en commun" },
  { name: "Fronton", zone: "nord", distToulouse: 30, purpan: 35, rangueil: 40, oncopole: 44, aeroport: 30, detail: "Commune viticole réputée du nord toulousain, célèbre pour son AOC Fronton et sa proximité avec le Tarn et Garonne" },
  { name: "Villemur-sur-Tarn", zone: "nordest", distToulouse: 38, purpan: 42, rangueil: 42, oncopole: 48, aeroport: 38, detail: "Petite ville du nord-est de Haute-Garonne au bord du Tarn, ancienne cité huguenote réputée pour ses falaises et son château" },
  { name: "Beauzelle", zone: "nordouest", distToulouse: 8, purpan: 12, rangueil: 22, oncopole: 22, aeroport: 6, detail: "Commune du nord-ouest de Toulouse, très appréciée pour son cadre résidentiel calme entre Garonne et Aussonnelle" },
  { name: "Bruguières", zone: "nord", distToulouse: 10, purpan: 16, rangueil: 22, oncopole: 26, aeroport: 18, detail: "Commune du nord de l'agglomération toulousaine, caractérisée par ses nouvelles zones résidentielles et son dynamisme commercial" },
  { name: "Fenouillet", zone: "nord", distToulouse: 9, purpan: 14, rangueil: 20, oncopole: 24, aeroport: 16, detail: "Commune industrielle et résidentielle du nord de Toulouse, avec notamment la présence de Leroy Merlin et de nombreuses zones d'activités" },
  { name: "Saint-Jory", zone: "nord", distToulouse: 17, purpan: 22, rangueil: 28, oncopole: 32, aeroport: 22, detail: "Commune du nord de la Haute-Garonne au bord du Canal de Garonne, réputée pour ses vergers et ses espaces naturels préservés" },
  { name: "Gratentour", zone: "nord", distToulouse: 14, purpan: 18, rangueil: 24, oncopole: 28, aeroport: 20, detail: "Village du nord toulousain qui a su conserver son caractère rural tout en accueillant une population croissante venue de l'agglomération" },
  { name: "Montastruc-la-Conseillère", zone: "nordest", distToulouse: 20, purpan: 25, rangueil: 22, oncopole: 30, aeroport: 28, detail: "Bourg du Frontonnais, carrefour entre Toulouse, Montauban et Albi, dont le marché hebdomadaire anime encore la place centrale depuis des siècles" },
  { name: "Verfeil", zone: "est", distToulouse: 28, purpan: 32, rangueil: 28, oncopole: 35, aeroport: 38, detail: "Commune du Lauragais oriental, ancienne ville cathare au riche patrimoine historique, aux portes du département du Tarn" },
  { name: "Carbonne", zone: "sud", distToulouse: 36, purpan: 42, rangueil: 38, oncopole: 38, aeroport: 45, detail: "Petite ville du piémont pyrénéen, au bord de la Garonne, entre Toulouse et Saint-Gaudens, idéalement située pour les séjours en montagne" },
  { name: "Cazères", zone: "sudouest", distToulouse: 50, purpan: 56, rangueil: 52, oncopole: 52, aeroport: 58, detail: "Commune de la vallée de la Garonne en Comminges, ancien port fluvial historique à la limite entre plaine et Pyrénées" },
  { name: "Rieumes", zone: "sudouest", distToulouse: 30, purpan: 34, rangueil: 38, oncopole: 36, aeroport: 32, detail: "Commune rurale du Savès, chef-lieu de canton dans l'ouest de la Haute-Garonne, connue pour son marché agricole traditionnel" },
  { name: "Seysses", zone: "sudouest", distToulouse: 15, purpan: 22, rangueil: 18, oncopole: 16, aeroport: 24, detail: "Commune du sud-ouest de l'agglomération toulousaine, connue notamment pour son centre pénitentiaire et son développement résidentiel récent" },
  { name: "Eaunes", zone: "sud", distToulouse: 18, purpan: 24, rangueil: 20, oncopole: 20, aeroport: 30, detail: "Commune de la vallée de l'Ariège au sud de Toulouse, village paisible dont la population a triplé en trente ans avec l'arrivée de familles toulousaines" },
  { name: "Labarthe-sur-Lèze", zone: "sud", distToulouse: 16, purpan: 22, rangueil: 18, oncopole: 18, aeroport: 28, detail: "Commune du sud toulousain au bord de la Lèze, connue pour son château et ses espaces naturels au cœur du triangle Toulouse-Muret-Auterive" },
  { name: "Pins-Justaret", zone: "sud", distToulouse: 16, purpan: 22, rangueil: 18, oncopole: 18, aeroport: 28, detail: "Petit village résidentiel du sud de Toulouse, entre Muret et Portet-sur-Garonne, apprécié pour sa tranquillité et sa végétation" },
  { name: "Roques", zone: "sudouest", distToulouse: 14, purpan: 20, rangueil: 16, oncopole: 16, aeroport: 22, detail: "Commune du sud-ouest toulousain, carrefour entre les grands axes de la zone industrielle de l'agglomération muretaine" },
  { name: "Saubens", zone: "sud", distToulouse: 18, purpan: 24, rangueil: 20, oncopole: 20, aeroport: 30, detail: "Village rural du sud de la Haute-Garonne, dans le triangle Muret-Toulouse-Auterive, qui conserve son caractère agricole" },
  { name: "Mondonville", zone: "nordouest", distToulouse: 16, purpan: 18, rangueil: 28, oncopole: 28, aeroport: 10, detail: "Commune du nord-ouest de l'agglomération, à mi-chemin entre Toulouse et L'Isle-Jourdain, dont la population a fortement augmenté ces dernières années" },
  { name: "Pibrac", zone: "ouest", distToulouse: 12, purpan: 15, rangueil: 22, oncopole: 21, aeroport: 10, detail: "Commune de l'ouest toulousain connue pour son château et le pèlerinage à Sainte-Germaine, qui attire chaque année des milliers de fidèles" },
  { name: "Brax", zone: "ouest", distToulouse: 16, purpan: 18, rangueil: 26, oncopole: 24, aeroport: 13, detail: "Commune rurale de l'ouest toulousain, village tranquille entre Léguevin et Colomiers, dont le développement résidentiel s'accélère" },
  { name: "Lherm", zone: "sudouest", distToulouse: 26, purpan: 32, rangueil: 28, oncopole: 28, aeroport: 38, detail: "Village du Volvestre, situé entre Muret et Saint-Gaudens, aux portes du Comminges et à la lisière du parc naturel régional des Pyrénées ariégeoises" },
  { name: "Labège", zone: "sudest", distToulouse: 9, purpan: 20, rangueil: 8, oncopole: 14, aeroport: 24, detail: "Commune du sud-est toulousain abritant l'un des plus grands centres commerciaux du sud de la France, Labège-Village, et d'importantes zones d'activités technologiques" },
  { name: "Escalquens", zone: "sudest", distToulouse: 13, purpan: 24, rangueil: 12, oncopole: 18, aeroport: 28, detail: "Commune résidentielle du Lauragais, en pleine expansion démographique grâce à sa proximité avec Toulouse et son cadre de vie verdoyant" },
  { name: "Lanta", zone: "est", distToulouse: 22, purpan: 28, rangueil: 20, oncopole: 28, aeroport: 34, detail: "Bourg du Lauragais oriental, commune rurale préservant son caractère villageois malgré la pression démographique de l'agglomération toulousaine" },
  { name: "Caraman", zone: "est", distToulouse: 30, purpan: 36, rangueil: 28, oncopole: 36, aeroport: 42, detail: "Bastide médiévale du Lauragais, chef-lieu de canton à l'est de Toulouse, connue pour son marché hebdomadaire et son architecture traditionnelle" },
  { name: "Nailloux", zone: "sud", distToulouse: 32, purpan: 38, rangueil: 30, oncopole: 32, aeroport: 45, detail: "Commune du sud de la Haute-Garonne, connue pour son village outlets et sa situation géographique entre Toulouse et Pamiers, à la porte du pays lauragais" },
  { name: "Villefranche-de-Lauragais", zone: "sudest", distToulouse: 38, purpan: 44, rangueil: 36, oncopole: 42, aeroport: 52, detail: "Sous-préfecture de Haute-Garonne et capitale historique du pays lauragais, Villefranche-de-Lauragais est une bastide médiévale au riche patrimoine architectural" },
  { name: "Montgiscard", zone: "sudest", distToulouse: 20, purpan: 30, rangueil: 18, oncopole: 22, aeroport: 34, detail: "Commune du Lauragais, au bord du Canal du Midi et à proximité du lac de la Thésauque, offrant un cadre de vie apaisé à deux pas de Toulouse" },
  { name: "L'Isle-Jourdain", zone: "ouest", distToulouse: 35, purpan: 38, rangueil: 46, oncopole: 44, aeroport: 28, detail: "Principale ville du Savès dans le Gers, L'Isle-Jourdain est une cité à mi-chemin entre Toulouse et Auch, dotée d'une zone commerciale importante et d'un lac de loisirs" },
  { name: "Cintegabelle", zone: "sud", distToulouse: 38, purpan: 44, rangueil: 36, oncopole: 38, aeroport: 52, detail: "Commune de la vallée de l'Ariège, entre Toulouse et Pamiers, carrefour rural où la plaine de Haute-Garonne laisse place aux premières collines ariégeoises" },
  { name: "Rieux-Volvestre", zone: "sudouest", distToulouse: 48, purpan: 55, rangueil: 50, oncopole: 50, aeroport: 60, detail: "Ancienne cité épiscopale du Volvestre, Rieux-Volvestre conserve sa cathédrale gothique et ses fortifications médiévales au bord de la Garonne" },
];

// ─── REGIONAL CITIES ──────────────────────────────────────────────────────────
interface RegionalCity {
  name: string;
  dept: string;
  deptNum: string;
  distToulouse: number;
  detail: string;
  hospitals: string;
}

const regionalCityData: RegionalCity[] = [
  { name: "Pamiers", dept: "Ariège", deptNum: "09", distToulouse: 70, detail: "Préfecture de l'Ariège et deuxième ville du département, Pamiers est une étape incontournable entre Toulouse et Foix", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Foix", dept: "Ariège", deptNum: "09", distToulouse: 85, detail: "Préfecture de l'Ariège, dominée par son château médiéval, Foix est entourée de montagnes et de forêts", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Saint-Girons", dept: "Ariège", deptNum: "09", distToulouse: 95, detail: "Ville du piémont pyrénéen en Ariège, Saint-Girons est la capitale du Couserans et une porte d'entrée des Pyrénées ariégeoises", hospitals: "CHU Purpan, Oncopole" },
  { name: "Albi", dept: "Tarn", deptNum: "81", distToulouse: 80, detail: "Préfecture du Tarn et ville épiscopale classée au patrimoine UNESCO grâce à sa cathédrale Sainte-Cécile en briques rouges", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole, Clinique Pasteur" },
  { name: "Castres", dept: "Tarn", deptNum: "81", distToulouse: 75, detail: "Deuxième ville du Tarn, Castres est un centre industriel et commercial important, berceau du rugby français", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Montauban", dept: "Tarn-et-Garonne", deptNum: "82", distToulouse: 50, detail: "Préfecture du Tarn-et-Garonne, ville natale du peintre Ingres, Montauban est une bastide rose au confluent du Tarn et de l'Aveyron", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole, Clinique Pasteur" },
  { name: "Auch", dept: "Gers", deptNum: "32", distToulouse: 75, detail: "Préfecture du Gers, cité gasconne sur les hauteurs de la vallée du Gers, connue pour sa cathédrale et sa gastronomie", hospitals: "CHU Purpan, Hôpital Rangueil" },
  { name: "Tarbes", dept: "Hautes-Pyrénées", deptNum: "65", distToulouse: 155, detail: "Préfecture des Hautes-Pyrénées et capitale de la Bigorre, point de départ idéal vers les stations de ski des Pyrénées", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Cahors", dept: "Lot", deptNum: "46", distToulouse: 115, detail: "Préfecture du Lot, ville médiévale sur un méandre du Lot, célèbre pour son pont Valentré classé au patrimoine UNESCO et ses vins AOC Cahors", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Carcassonne", dept: "Aude", deptNum: "11", distToulouse: 90, detail: "Préfecture de l'Aude, cité médiévale fortifiée inscrite au patrimoine UNESCO, Carcassonne est la deuxième ville la plus visitée de France", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Rodez", dept: "Aveyron", deptNum: "12", distToulouse: 155, detail: "Préfecture de l'Aveyron, ville haute perchée sur un plateau, dominée par sa cathédrale gothique en grès rose, capitale d'un département rural aux paysages préservés", hospitals: "CHU Purpan, Oncopole" },
  { name: "Millau", dept: "Aveyron", deptNum: "12", distToulouse: 115, detail: "Ville emblématique de l'Aveyron, nichée dans la vallée du Tarn, Millau est mondialement connue pour son viaduc et la qualité de sa ganterie traditionnelle", hospitals: "CHU Purpan, Oncopole" },
  { name: "Mende", dept: "Lozère", deptNum: "48", distToulouse: 175, detail: "Préfecture de la Lozère, plus petit département de France en population, Mende est une ville calme au cœur des hauts plateaux du Massif Central", hospitals: "CHU Purpan, Oncopole" },
  { name: "Figeac", dept: "Lot", deptNum: "46", distToulouse: 130, detail: "Cité médiévale du Lot, berceau de Champollion le déchiffreur des hiéroglyphes, Figeac est une ville culturelle et touristique du Quercy", hospitals: "CHU Purpan, Oncopole" },
  { name: "Lourdes", dept: "Hautes-Pyrénées", deptNum: "65", distToulouse: 162, detail: "Ville de pèlerinage internationale aux Hautes-Pyrénées, Lourdes accueille chaque année des millions de fidèles et dispose de nombreux établissements de soins spécialisés", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Narbonne", dept: "Aude", deptNum: "11", distToulouse: 150, detail: "Sous-préfecture de l'Aude et ancienne capitale de la Gaule Narbonnaise, Narbonne est une ville de caractère entre mer et garrigue, carrefour entre Occitanie et Catalogne", hospitals: "CHU Purpan, Oncopole" },
  { name: "Perpignan", dept: "Pyrénées-Orientales", deptNum: "66", distToulouse: 200, detail: "Préfecture des Pyrénées-Orientales et capitale historique du Roussillon, Perpignan est la deuxième ville d'Occitanie, carrefour entre la France, l'Espagne et la Méditerranée", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Montpellier", dept: "Hérault", deptNum: "34", distToulouse: 245, detail: "Préfecture de l'Hérault et métropole universitaire de référence, Montpellier abrite le CHU de Montpellier et attire des patients de tout le sud de la France pour ses spécialités médicales de pointe", hospitals: "CHU Purpan, Oncopole, Clinique Pasteur" },
  { name: "Béziers", dept: "Hérault", deptNum: "34", distToulouse: 155, detail: "Deuxième ville de l'Hérault et capitale des vins du Languedoc, Béziers est une cité dynamique entre Montagne Noire et Méditerranée, au carrefour des axes autoroutiers entre Toulouse et la côte", hospitals: "CHU Purpan, Oncopole" },
  { name: "Nîmes", dept: "Gard", deptNum: "30", distToulouse: 250, detail: "Préfecture du Gard et cité romaine exceptionnelle, Nîmes conserve des monuments antiques parmi les mieux préservés d'Europe, notamment ses arènes et la Maison Carrée classées au patrimoine mondial", hospitals: "CHU Purpan, Oncopole, Clinique Pasteur" },
  { name: "Alès", dept: "Gard", deptNum: "30", distToulouse: 225, detail: "Deuxième ville du Gard et ancienne capitale du bassin minier des Cévennes, Alès est une ville en pleine reconversion économique aux portes du Parc National des Cévennes", hospitals: "CHU Purpan, Oncopole" },
  { name: "Gaillac", dept: "Tarn", deptNum: "81", distToulouse: 60, detail: "Petite ville du Tarn réputée pour son vignoble AOC Gaillac, l'une des plus anciennes appellations de France, Gaillac est un bourg de caractère sur les rives du Tarn entre Toulouse et Albi", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
  { name: "Mazamet", dept: "Tarn", deptNum: "81", distToulouse: 85, detail: "Ville industrielle du Tarn aux pieds de la Montagne Noire, Mazamet est connue pour son histoire liée au délainage de la laine et pour ses paysages naturels remarquables entre plaine et massif", hospitals: "CHU Purpan, Hôpital Rangueil, Oncopole" },
];

// ─── HOSPITALS ────────────────────────────────────────────────────────────────
interface HospitalInfo {
  name: string;
  shortName: string;
  spec: string;
  location: string;
  detail: string;
}

const hospitalData: HospitalInfo[] = [
  { name: "Clinique Pasteur", shortName: "Clinique Pasteur", spec: "cardiologie interventionnelle, chirurgie cardiovasculaire et vasculaire", location: "avenue de Lombez, Toulouse", detail: "Établissement privé de référence en cardiologie, la Clinique Pasteur est l'une des premières cliniques de France pour les interventions cardiaques" },
  { name: "Clinique de l'Union", shortName: "Clinique de l'Union", spec: "dialyse, chirurgie générale, soins de suite et rééducation", location: "Saint-Jean, nord de Toulouse", detail: "Établissement privé du nord toulousain disposant d'un important centre de dialyse et d'un plateau technique complet" },
  { name: "Clinique des Cèdres", shortName: "Clinique des Cèdres", spec: "chirurgie orthopédique, rééducation, maternité", location: "Cornebarrieu, nord-ouest de Toulouse", detail: "Clinique privée multidisciplinaire du nord-ouest toulousain, réputée pour son service de chirurgie orthopédique et sa maternité" },
  { name: "Clinique Croix du Sud", shortName: "Clinique Croix du Sud", spec: "oncologie médicale, maternité, chirurgie", location: "Quint-Fonsegrives, est de Toulouse", detail: "Établissement privé situé à l'est de l'agglomération, la Clinique Croix du Sud propose un plateau technique complet incluant un service d'oncologie" },
  { name: "Hôpital Larrey", shortName: "Hôpital Larrey", spec: "pneumologie, ORL, dermatologie, médecine interne", location: "avenue de Lombez, Toulouse", detail: "Site du CHU de Toulouse dédié à la pneumologie et à l'ORL, l'Hôpital Larrey reçoit les patients atteints de pathologies respiratoires complexes" },
  { name: "Clinique d'Occitanie", shortName: "Clinique d'Occitanie Muret", spec: "chirurgie générale, urgences, médecine, maternité", location: "Muret, 20 km au sud de Toulouse", detail: "Principal établissement de santé du bassin muretain, la Clinique d'Occitanie propose un service d'urgences ouvert 24h/24 et couvre les besoins de tout le Volvestre" },
];

// ─── CONTENT GENERATORS ───────────────────────────────────────────────────────
function generateCityContent(city: CityInfo): string {
  const directionTxt = {
    nord: "au nord de l'agglomération toulousaine",
    nordest: "au nord-est de Toulouse",
    est: "à l'est de l'agglomération",
    sudest: "au sud-est de Toulouse",
    sud: "au sud de l'agglomération toulousaine",
    sudouest: "au sud-ouest de Toulouse",
    ouest: "à l'ouest de l'agglomération",
    nordouest: "au nord-ouest de Toulouse",
    periurbain: "dans la couronne périurbaine de Haute-Garonne",
  }[city.zone] || "en Haute-Garonne";

  const closestHosp =
    city.rangueil <= city.purpan && city.rangueil <= city.oncopole ? "l'Hôpital Rangueil" :
    city.oncopole <= city.purpan ? "l'Oncopole Claudius Regaud" :
    "le CHU Purpan";

  return `
<p>${city.detail}. Depuis ${city.name}, située ${directionTxt} à environ ${city.distToulouse} km de la capitale occitane, de nombreux habitants ont besoin de rejoindre régulièrement les grands hôpitaux toulousains — pour une chimiothérapie, des séances de dialyse, un suivi cardiologique ou une consultation spécialisée que les établissements de proximité ne proposent pas.</p>

<h2>Transport médical conventionné CPAM depuis ${city.name}</h2>
<p>En tant que taxi VSL agréé par la CPAM de la Haute-Garonne, nous assurons quotidiennement les transports médicaux depuis ${city.name} vers tous les hôpitaux et cliniques de Toulouse. Si vous êtes en Affection de Longue Durée (ALD) à 100%, <strong>vous ne payez rien</strong> : le tiers payant intégral s'applique, nous facturons directement l'Assurance Maladie.</p>

<p>Distances depuis ${city.name} vers les principaux établissements de soins :</p>
<ul>
<li><strong>CHU Purpan</strong> (Neurologie, Pédiatrie, Transplantation) — environ ${city.purpan} km</li>
<li><strong>Hôpital Rangueil</strong> (Cardiologie, Dialyse, Greffe rénale) — environ ${city.rangueil} km</li>
<li><strong>Oncopole Claudius Regaud</strong> (Chimiothérapie, Radiothérapie) — environ ${city.oncopole} km</li>
<li><strong>Clinique Pasteur, Clinique de l'Union, Clinique des Cèdres</strong> et toutes les cliniques privées de Toulouse — sur demande</li>
</ul>

<p>L'établissement le plus proche de ${city.name} est ${closestHosp}. Mais quelle que soit votre destination, nous connaissons chaque hôpital, chaque pavillon, chaque accès prioritaire. Vous n'avez pas à chercher votre chemin le jour de votre rendez-vous.</p>

<h2>Dialyse, chimiothérapie et soins réguliers depuis ${city.name}</h2>
<p>Pour les patients qui se rendent à Toulouse plusieurs fois par semaine — dialysés trois fois par semaine, patients en cours de chimiothérapie — nous mettons en place un planning hebdomadaire fixe sur plusieurs mois. <strong>Une seule réservation suffit</strong> : nous sommes là à chaque séance, sans que vous ayez à nous rappeler.</p>

<p>Après une dialyse ou une séance de chimio, la fatigue peut être importante. Nous adaptons notre conduite à votre état : pas de freinages brusques, température confortable dans le véhicule, conduite douce. Votre confort au retour est aussi important que la ponctualité à l'aller.</p>

<h2>Documents nécessaires pour le remboursement CPAM</h2>
<p>Pour bénéficier du tiers payant intégral depuis ${city.name}, vous avez besoin de deux documents simples :</p>
<ul>
<li><strong>La Prescription Médicale de Transport (PMT)</strong> — signée et datée par votre médecin <em>avant</em> le jour du trajet</li>
<li><strong>Votre carte Vitale à jour</strong> — pour la télétransmission directe à la CPAM</li>
</ul>
<p>Nous gérons toute la facturation avec la CPAM à votre place. Aucune démarche, aucune avance, aucun formulaire à remplir.</p>

<h2>Courses privées depuis ${city.name}</h2>
<p>En dehors du transport médical, nous assurons également les courses privées depuis ${city.name} :</p>
<ul>
<li><strong>Aéroport Toulouse-Blagnac</strong> — environ ${city.aeroport} km, disponible dès 4h du matin, tarif fixe annoncé à la réservation</li>
<li><strong>Gare Matabiau</strong> — environ ${city.distToulouse + 4} km, aide aux bagages, suivi des retards SNCF</li>
<li><strong>Mariages, événements, séminaires professionnels</strong> — devis personnalisé sur demande</li>
</ul>

<blockquote>
<p>Pour réserver votre transport médical ou votre course privée depuis ${city.name}, appelez-nous au <strong>07 72 33 98 92</strong> ou envoyez un SMS. Nous confirmons votre réservation dans les meilleurs délais — même la veille pour le lendemain matin.</p>
</blockquote>
`;
}

function generateRegionalContent(city: RegionalCity): string {
  return `
<p>${city.detail}. Le trajet depuis ${city.name} jusqu'aux hôpitaux spécialisés de Toulouse représente environ ${city.distToulouse} km. Pour les patients ariégeois, tarnais, gersois ou haut-pyrénéens qui doivent se rendre régulièrement à Toulouse pour des soins que leur département ne propose pas, ce trajet peut être remboursé par la CPAM.</p>

<h2>Pourquoi les patients du ${city.dept} viennent à Toulouse</h2>
<p>Le ${city.dept} (${city.deptNum}) dispose d'établissements de qualité, mais pour certaines spécialités — oncologie de pointe, neurochirurgie, transplantation d'organes, hémato-oncologie, certains examens d'imagerie spécialisée — le CHU de Toulouse est l'établissement de référence régionale. Chaque année, de nombreux patients de ${city.name} font ce trajet régulièrement pour leurs traitements.</p>

<p>Établissements accessibles depuis ${city.name} :</p>
<ul>
<li><strong>${city.hospitals.split(", ").join("</strong></li><li><strong>")}</strong></li>
</ul>

<h2>Le transport longue distance remboursé par la CPAM</h2>
<p>Bonne nouvelle : ce trajet peut être entièrement pris en charge par l'Assurance Maladie. Pour cela, votre médecin prescripteur doit mentionner sur la Prescription Médicale de Transport :</p>
<ul>
<li>La nature de votre ALD (Affection de Longue Durée)</li>
<li>La spécialité médicale requise et l'établissement désigné à Toulouse</li>
<li>L'absence de cette spécialité dans un établissement de votre département</li>
</ul>
<p>Si ces éléments figurent sur l'ordonnance, le trajet aller-retour depuis ${city.name} jusqu'à Toulouse est remboursable selon le barème kilométrique CPAM.</p>

<h2>Votre confort sur la route entre ${city.name} et Toulouse</h2>
<p>Un trajet de ${city.distToulouse} km après un traitement médical n'est pas anodin. Nous adaptons notre conduite à votre état de santé : pause possible sur la route si nécessaire, température confortable dans le véhicule, musique discrète ou silence selon vos préférences.</p>
<p>Notre Peugeot 5008 GT offre un espace généreux et des sièges confortables. Vous pouvez vous reposer ou même dormir pendant le trajet retour sans vous soucier de la conduite.</p>

<h2>Réserver depuis ${city.name}</h2>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> en précisant votre ville de départ, la date et l'heure de votre rendez-vous médical à Toulouse. Pour les traitements réguliers, nous établissons ensemble un planning sur toute la durée de votre traitement.</p>

<blockquote>
<p>Nous intervenons depuis toute l'Occitanie. Si vous avez un doute sur la possibilité de prise en charge CPAM pour votre trajet depuis ${city.name}, appelez-nous — nous pouvons vous guider avant même la réservation.</p>
</blockquote>
`;
}

function generateHospitalContent(h: HospitalInfo): string {
  return `
<p>${h.detail}. Pour les patients qui doivent s'y rendre régulièrement — que ce soit pour une chimiothérapie, un suivi de dialyse, une consultation de spécialité ou une rééducation — le transport est une question centrale. C'est là que notre rôle commence.</p>

<h2>Se rendre à ${h.shortName} en taxi VSL conventionné</h2>
<p>En tant que taxi conventionné CPAM, nous assurons les transports médicaux vers ${h.shortName} depuis toute la Haute-Garonne et les départements voisins d'Occitanie. Si vous êtes en ALD à 100%, le tiers payant intégral s'applique : vous ne déboursez rien.</p>

<p>Les principales spécialités accessibles en taxi VSL à ${h.shortName} : <strong>${h.spec}</strong>.</p>

<h2>Pourquoi faire confiance à un chauffeur qui connaît ${h.shortName} ?</h2>
<p>Nous connaissons ${h.shortName} et son environnement depuis des années. Nous savons quelle entrée emprunter, où se trouve l'accueil des consultations externes, quels jours la circulation est plus dense, et où déposer les patients à mobilité réduite au plus près du service. Ces détails semblent anodins, mais pour un patient qui a déjà beaucoup à gérer, c'est un soulagement considérable.</p>

<h2>Comment réserver votre transport vers ${h.shortName} ?</h2>
<p>Munissez-vous de votre Prescription Médicale de Transport (PMT) et appelez-nous au <strong>07 72 33 98 92</strong>. Pour les rendez-vous réguliers, nous établissons un planning sur plusieurs semaines afin que vous n'ayez à vous soucier de rien.</p>
<ul>
<li>Appelez-nous de préférence la veille ou 48h avant votre rendez-vous</li>
<li>Pour les traitements réguliers (dialyse, chimio, radio), une seule réservation pour plusieurs mois</li>
<li>Si votre rendez-vous prend du retard, nous attendons sans frais supplémentaires</li>
</ul>

<blockquote>
<p>Le transport vers ${h.shortName} est une étape de votre parcours de soins que nous prenons en charge entièrement — du départ de votre domicile à l'entrée de votre service. Vous n'avez qu'à penser à votre santé.</p>
</blockquote>
`;
}

// ─── GENERATED ARTICLES ───────────────────────────────────────────────────────

const cityArticles: Article[] = cityData.map((city) => ({
  slug: `taxi-conventionne-vsl-${createSlug(city.name)}`,
  title: `Taxi Conventionné à ${city.name} : VSL CPAM & Courses Privées`,
  description: `Taxi VSL conventionné CPAM depuis ${city.name} vers les hôpitaux de Toulouse. Tiers payant intégral 0€ d'avance. Dialyse, chimiothérapie, aéroport Blagnac. Disponible 24h/24.`,
  date: "2025-03-01",
  category: "Villes" as const,
  readTime: "4 min",
  content: generateCityContent(city),
}));

const regionalArticles: Article[] = regionalCityData.map((city) => ({
  slug: `taxi-vsl-${createSlug(city.name)}-${createSlug(city.dept)}-toulouse`,
  title: `Taxi VSL ${city.name} (${city.deptNum}) → Toulouse : Transport Médical Longue Distance`,
  description: `Transport médical conventionné CPAM depuis ${city.name} en ${city.dept} vers les hôpitaux de Toulouse. Longue distance remboursable sur prescription médicale. Confort Peugeot 5008 GT.`,
  date: "2025-03-10",
  category: "Trajets" as const,
  readTime: "5 min",
  content: generateRegionalContent(city),
}));

const hospitalArticles: Article[] = hospitalData.map((h) => ({
  slug: `taxi-vsl-${createSlug(h.name)}-toulouse`,
  title: `Taxi VSL ${h.shortName} Toulouse : Transport Médical Conventionné CPAM`,
  description: `Transport médical conventionné vers ${h.shortName} à Toulouse. Spécialités : ${h.spec.split(",")[0]}. Tiers payant CPAM intégral, dépose prioritaire. Disponible 24h/24.`,
  date: "2025-02-25",
  category: "Hôpitaux" as const,
  readTime: "4 min",
  content: generateHospitalContent(h),
}));

// ─── DETAILED ARTICLES (handwritten) ──────────────────────────────────────────
const detailedArticles: Article[] = [
  {
    slug: "guide-taxi-vsl-conventionne-cpam-toulouse",
    title: "Taxi VSL Conventionné CPAM à Toulouse : Le Guide Complet 2025",
    description: "Tout ce qu'il faut savoir sur le transport médical remboursé par la Sécurité Sociale à Toulouse : conditions, documents, réservation et tiers payant expliqués simplement.",
    date: "2025-01-15",
    category: "Guide" as const,
    readTime: "8 min",
    content: `
<p>Votre médecin vous a dit que vous pouviez prendre un "taxi remboursé", mais vous ne savez pas trop par où commencer. C'est normal — les démarches administratives autour du transport médical peuvent sembler complexes au premier abord. Ce guide vous explique tout, étape par étape, en langage simple.</p>

<h2>Qu'est-ce qu'un taxi conventionné CPAM ?</h2>
<p>Un taxi conventionné — que l'on appelle aussi VSL (Véhicule Sanitaire Léger) dans le jargon administratif — est un taxi qui a passé un agrément spécifique avec l'Assurance Maladie. Cela signifie que son chauffeur a suivi une formation aux soins de base, que son véhicule répond à des normes de confort et d'hygiène, et surtout que ses tarifs sont régulés par la Sécurité Sociale.</p>
<p>La différence avec une ambulance est importante : l'ambulance est réservée aux patients qui ne peuvent pas voyager en position assise (état grave, perfusion continue, surveillance médicale constante). Le taxi VSL est pour les patients qui peuvent se déplacer par leurs propres moyens, mais qui ont besoin d'un véhicule adapté pour rejoindre leurs soins.</p>

<h2>Qui peut bénéficier du remboursement ?</h2>
<ul>
<li><strong>Les Affections de Longue Durée (ALD)</strong> — diabète, cancer, insuffisance rénale, pathologies cardiaques, sclérose en plaques, etc.</li>
<li><strong>La maternité</strong> — à partir du 5ème mois de grossesse et jusqu'à 12 jours après l'accouchement</li>
<li><strong>Les accidents du travail ou maladies professionnelles</strong></li>
<li><strong>Les hospitalisations complètes</strong> (au moins une nuit)</li>
<li><strong>Les traitements réguliers et fréquents</strong> — chimiothérapie, dialyse, radiothérapie</li>
</ul>

<h2>La prescription médicale de transport : le document clé</h2>
<p>Pour bénéficier du remboursement, votre médecin doit vous remettre une <strong>Prescription Médicale de Transport (PMT)</strong>, parfois appelée "bon de transport". Ce document est indispensable — sans lui, aucune prise en charge n'est possible.</p>
<p>La PMT doit mentionner votre nom, votre numéro de sécurité sociale, la destination, le motif médical, le nombre d'allers-retours et la signature du médecin.</p>

<h2>Le tiers payant : comment ça marche concrètement ?</h2>
<p>Si vous êtes en ALD à 100%, vous avez droit au tiers payant intégral. Cela signifie que vous ne déboursez pas un seul euro au chauffeur. Nous facturons directement la CPAM.</p>
<ol>
<li>Votre médecin vous remet la prescription médicale de transport</li>
<li>Vous nous appelez pour réserver votre transport</li>
<li>Le jour J, vous nous remettez la PMT signée</li>
<li>Nous vous transportons confortablement jusqu'à votre destination</li>
<li>Nous gérons toute la facturation avec la CPAM directement</li>
<li>Vous n'avez rien à avancer, rien à rembourser</li>
</ol>

<h2>Comment réserver votre taxi VSL avec nous ?</h2>
<p>Appelez-nous au <strong>07 72 33 98 92</strong>, de préférence la veille ou quelques jours avant votre rendez-vous. Pour les traitements réguliers (dialyse, chimiothérapie), nous mettons en place un planning sur plusieurs semaines. Vous n'avez alors qu'un seul appel à passer.</p>

<blockquote>
<p>Notre rôle ne s'arrête pas au volant. Nous vous aidons à monter dans le véhicule, nous vous accompagnons jusqu'à l'entrée du service si nécessaire, et nous attendons si votre rendez-vous prend du retard.</p>
</blockquote>
`,
  },
  {
    slug: "tiers-payant-transport-medical-ald-toulouse",
    title: "Tiers Payant Transport Médical : Comment Ne Rien Avancer avec l'ALD",
    description: "Vous êtes en Affection de Longue Durée (ALD) ? Découvrez comment fonctionne le tiers payant à 100% pour vos transports médicaux à Toulouse, sans avancer un centime.",
    date: "2025-01-20",
    category: "Guide" as const,
    readTime: "5 min",
    content: `
<p>L'une des questions les plus fréquentes que nous recevons est celle-ci : "Est-ce que je dois vraiment avancer l'argent ?" La réponse, si vous avez une ALD reconnue à 100%, est non. Voici tout ce qu'il faut savoir.</p>

<h2>Qu'est-ce que l'ALD et pourquoi c'est important ?</h2>
<p>Une Affection de Longue Durée (ALD) est une maladie qui nécessite un traitement prolongé et coûteux. La Sécurité Sociale reconnaît 30 ALD principales, dont les plus courantes :</p>
<ul>
<li>Le cancer (toutes formes)</li>
<li>L'insuffisance rénale chronique (dialyse)</li>
<li>Le diabète insulino-dépendant ou non</li>
<li>Les maladies cardiovasculaires graves</li>
<li>La sclérose en plaques et la maladie de Parkinson</li>
</ul>

<h2>Le tiers payant total : zéro euro à avancer</h2>
<ol>
<li>Vous montez dans le taxi avec votre prescription médicale de transport</li>
<li>Vous remettez ce document au chauffeur en fin de course</li>
<li>Le chauffeur télétransmet la facturation à la CPAM</li>
<li>La CPAM rembourse directement la compagnie de taxi</li>
<li>Votre participation personnelle est de 0€</li>
</ol>

<blockquote>
<p>Important : le tiers payant ne s'applique qu'aux trajets en lien direct avec votre ALD. Un transport pour un rhume ou une consultation sans lien avec votre ALD ne sera pas pris en charge.</p>
</blockquote>

<h2>Que se passe-t-il si vous n'avez pas d'ALD ?</h2>
<p>Sans ALD, le remboursement existe quand même mais il est partiel. La CPAM rembourse 65% du tarif réglementé. Votre mutuelle peut compléter. Si vous n'êtes pas certain de votre situation, appelez votre CPAM ou consultez votre espace Ameli.</p>

<h2>Les tarifs réglementés</h2>
<p>Le tarif de transport médical est réglementé par la CPAM. Il est calculé en fonction de la distance parcourue, selon un barème officiel. Occitanie Médi Mobility applique strictement ces tarifs conventionnés — il n'y a pas de supplément caché.</p>
`,
  },
  {
    slug: "documents-prescription-medicale-transport-cpam",
    title: "Quels Documents Apporter pour Votre Transport Médical Remboursé ?",
    description: "Liste complète des documents à préparer pour votre taxi conventionné : prescription médicale, carte Vitale, attestation CPAM. Ne manquez aucun rendez-vous par oubli.",
    date: "2025-02-01",
    category: "Guide" as const,
    readTime: "4 min",
    content: `
<p>Un oubli de document peut compromettre le remboursement de votre transport. Voici la liste complète de ce qu'il faut avoir avec vous le jour de votre rendez-vous.</p>

<h2>Document n°1 : La Prescription Médicale de Transport (PMT)</h2>
<p>C'est le document central, sans lequel rien n'est possible. Votre médecin doit vous remettre une ordonnance spécifique — différente d'une ordonnance de médicaments. Vérifiez qu'elle est bien complète : date, votre identité, votre numéro de sécurité sociale, le motif médical, la destination, le mode de transport prescrit (taxi VSL) et la signature du médecin.</p>

<h2>Document n°2 : Votre carte Vitale</h2>
<p>Indispensable pour permettre la télétransmission directe à la CPAM. Assurez-vous qu'elle est à jour — si vous avez déménagé ou changé de situation récemment, vérifiez qu'elle reflète bien votre situation actuelle.</p>

<h2>Document n°3 : Votre attestation de droits CPAM (optionnel mais recommandé)</h2>
<p>Téléchargeable sur votre espace Ameli, ce document prouve que vous êtes bien affilié et précise votre taux de remboursement. En pratique, votre carte Vitale suffit, mais l'attestation peut être utile en cas de litige.</p>

<h2>Règle d'or : la date de la prescription</h2>
<p>La date de signature du médecin doit être <strong>antérieure ou égale</strong> à la date du transport. Si le médecin date le bon après le trajet, le remboursement sera automatiquement refusé et la course sera à votre charge.</p>

<h2>Pour les ordonnances renouvelables</h2>
<p>Pour les soins réguliers (dialyse, chimio, kiné), votre médecin peut établir une prescription valable pour plusieurs mois. Le chauffeur conserve un volet à chaque trajet.</p>

<blockquote>
<p>Notre conseil : photographiez votre PMT dès que vous la recevez. Si l'original est perdu ou abîmé, vous pourrez montrer la photo à votre médecin pour qu'il en établisse une nouvelle rapidement.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-hopital-purpan-chu-toulouse",
    title: "Taxi VSL Conventionné CHU Purpan Toulouse : Accès & Prise en Charge",
    description: "Transport médical remboursé vers le CHU Purpan de Toulouse. Accès aux urgences, pavillons pédiatriques, neurologie et traumatologie. Tiers payant, 0€ d'avance.",
    date: "2025-02-10",
    category: "Hôpitaux" as const,
    readTime: "5 min",
    content: `
<p>Le CHU Purpan est le plus grand hôpital de Toulouse. Avec ses dizaines de pavillons répartis sur un vaste campus, s'y rendre sans être accompagné peut être source de stress — surtout lorsqu'on est malade ou fragilisé. C'est là que notre rôle commence, bien avant l'arrivée à l'hôpital.</p>

<h2>Pourquoi choisir un taxi VSL pour aller à Purpan ?</h2>
<p>Après des années à transporter des patients vers Purpan, nous connaissons le campus comme notre poche. Nous savons quelle entrée emprunter pour chaque pavillon, où déposer nos passagers au plus près de l'accueil en cas de mobilité réduite, et quels jours la circulation est plus fluide.</p>

<h2>Les principales spécialités de Purpan accessibles en VSL</h2>
<ul>
<li><strong>Neurologie et neurochirurgie</strong> — suivi post-AVC, épilepsie, pathologies dégénératives</li>
<li><strong>Pédiatrie</strong> — consultations régulières pour les enfants atteints de maladies chroniques</li>
<li><strong>Traumatologie</strong> — consultations de suivi après fracture ou chirurgie</li>
<li><strong>Transplantations</strong> — suivi post-greffe nécessitant des contrôles fréquents</li>
</ul>

<h2>La prise en charge CPAM pour Purpan</h2>
<p>Le CHU Purpan étant un établissement de soins conventionné, tous les transports vers ce site sont éligibles au remboursement CPAM, sous réserve d'une prescription médicale de transport valide. Si vous êtes en ALD, le tiers payant intégral s'applique.</p>

<blockquote>
<p>"Je fais ce trajet toutes les trois semaines depuis Pamiers. Au début j'étais angoissée — comment trouver le bon bâtiment ? Maintenant je sais que le chauffeur m'attend et connaît exactement où me déposer. C'est une tranquillité d'esprit énorme." — Sophie, patiente en neurologie</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-hopital-rangueil-toulouse",
    title: "Taxi VSL Hôpital Rangueil Toulouse : Cardiologie, Greffe & Dialyse",
    description: "Transport médical conventionné vers l'Hôpital Rangueil-Larrey de Toulouse. Cardiologie, transplantation rénale, dialyse. Prise en charge CPAM, tiers payant.",
    date: "2025-02-15",
    category: "Hôpitaux" as const,
    readTime: "5 min",
    content: `
<p>L'Hôpital Rangueil est le second grand pôle hospitalier du CHU de Toulouse, spécialisé dans les pathologies cardiaques, les transplantations et les maladies rénales. Situé au sud de Toulouse, il accueille quotidiennement des patients venus de toute la région Occitanie.</p>

<h2>Les patients de Rangueil ont besoin d'un transport de confiance</h2>
<p>Les patients de Rangueil ont souvent des profils particuliers : des greffés qui doivent surveiller leur immunodépression, des insuffisants cardiaques qui ne peuvent pas se fatiguer, des dialysés qui font ce trajet trois fois par semaine. Pour eux, le confort du véhicule et la fiabilité du chauffeur ne sont pas un luxe — c'est une nécessité médicale.</p>

<h2>Spécialités de Rangueil accessibles en taxi VSL</h2>
<ul>
<li><strong>Cardiologie et chirurgie cardiovasculaire</strong></li>
<li><strong>Transplantation rénale</strong> — suivi post-greffe, contrôles d'immunosuppresseurs</li>
<li><strong>Dialyse et néphrologie</strong> — séances régulières en centre d'hémodialyse</li>
<li><strong>Endocrinologie</strong> — diabète compliqué, maladies thyroïdiennes</li>
<li><strong>Neurologie</strong> — épilepsie, sclérose en plaques</li>
</ul>

<h2>Le cas particulier des patients dialysés</h2>
<p>La dialyse impose un rythme strict : trois séances par semaine. Nos patients dialysés n'ont pas besoin de s'inquiéter du transport — nous construisons avec eux un planning hebdomadaire stable. Après une séance, la fatigue peut être importante. Nos véhicules sont confortables, la conduite est douce, et nous ne sommes jamais pressés.</p>

<blockquote>
<p>"Je suis dialysé depuis trois ans. Il sait que j'aime arriver 10 minutes en avance et que le retour je suis épuisé. C'est devenu une routine rassurante dans une vie qui l'est moins." — Jean-Pierre, 68 ans, Colomiers</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-oncopole-chimiotherapie-toulouse",
    title: "Taxi VSL Oncopole Toulouse : Transport Chimiothérapie & Radiothérapie",
    description: "Transport médical conventionné vers l'Oncopole Claudius Regaud de Toulouse. Chimiothérapie, radiothérapie, immunothérapie. Accompagnement humain, tiers payant CPAM à 100%.",
    date: "2025-02-20",
    category: "Hôpitaux" as const,
    readTime: "6 min",
    content: `
<p>Aller à l'Oncopole, c'est souvent l'une des étapes les plus éprouvantes d'un parcours de soin. La chimiothérapie, la radiothérapie, les immunothérapies — ces traitements exigent du courage, mais aussi une logistique sans faille. Se soucier du transport en plus de tout le reste, c'est une charge que vous ne devriez pas avoir à porter seul.</p>

<h2>Un transport pensé pour les patients en oncologie</h2>
<p>Nos patients qui vont à l'Oncopole nous ont appris beaucoup. Après une chimio, les nausées, la fatigue soudaine, la sensibilité à la lumière et au bruit — nous en tenons compte dans notre manière de conduire. Nos véhicules sont régulièrement désinfectés, ce qui est important pour les patients immunodéprimés. La conduite est douce.</p>

<h2>L'Oncopole Claudius Regaud : ce que vous devez savoir</h2>
<p>L'Institut Universitaire du Cancer de Toulouse (IUCT-Oncopole) est l'un des plus grands centres de lutte contre le cancer en France. Il regroupe sous un même toit :</p>
<ul>
<li>La chimiothérapie ambulatoire (hôpital de jour)</li>
<li>La radiothérapie et la curiethérapie</li>
<li>L'immunothérapie et les essais cliniques</li>
<li>Les consultations d'oncologie médicale et chirurgicale</li>
</ul>

<h2>La prise en charge CPAM pour le cancer</h2>
<p>Le cancer est une ALD à 100%. Tous vos transports en lien avec votre traitement sont remboursés intégralement. Avec Occitanie Médi Mobility, le tiers payant est appliqué dès la première course.</p>

<blockquote>
<p>"Pendant sept mois de chimio, c'est lui qui m'a conduit à chaque séance. Il savait quand me parler et quand me laisser dormir. Le dernier jour, quand le médecin m'a dit que c'était terminé, il était là dans la salle d'attente. C'est le genre de souvenir qu'on n'oublie pas." — Martine, 58 ans, Muret</p>
</blockquote>
`,
  },
  {
    slug: "transport-dialyse-conventionne-toulouse",
    title: "Transport Dialyse Conventionné Toulouse : Service Régulier, Confort Garanti",
    description: "Service de transport pour séances de dialyse à Toulouse et environs. 3 séances par semaine, planification sur mesure, tiers payant CPAM à 100%. Chauffeur ponctuel et humain.",
    date: "2025-03-01",
    category: "Transport Médical" as const,
    readTime: "5 min",
    content: `
<p>La dialyse impose un rythme de vie exigeant. Trois fois par semaine, pendant plusieurs heures, vous devez rejoindre votre centre de dialyse — parfois depuis des années. Ce trajet, vous ne devriez pas avoir à l'organiser seul à chaque fois.</p>

<h2>Un service dédié aux patients en dialyse</h2>
<p>Lors de notre premier échange, nous établissons ensemble votre planning hebdomadaire pour les prochains mois. Ensuite, sauf changement exceptionnel de votre part, vous n'avez plus à nous appeler : nous sommes là, à l'heure, à chaque séance.</p>

<h2>Les centres de dialyse que nous desservons</h2>
<ul>
<li><strong>CHU Rangueil</strong> — Centre d'hémodialyse du CHU de Toulouse</li>
<li><strong>Clinique de l'Union</strong> — Centre de dialyse de Saint-Jean</li>
<li><strong>NephroCare Toulouse</strong> — Dialyse ambulatoire</li>
<li><strong>Clinique d'Occitanie à Muret</strong> — Pour les patients du sud toulousain</li>
</ul>

<h2>Après la séance : le retour qui compte autant</h2>
<p>Après une séance de dialyse de 4 heures, la fatigue est réelle. Nous adaptons notre conduite à cet état : pas de freinages brusques, pas de virages rapides, et si vous souhaitez dormir sur le trajet retour, aucun problème.</p>

<h2>Prise en charge CPAM à 100%</h2>
<p>L'insuffisance rénale chronique est une ALD reconnue à 100%. Vos transports vers le centre de dialyse sont donc remboursés intégralement. Votre médecin néphrologue établira une prescription valable sur plusieurs mois.</p>

<blockquote>
<p>"Je suis dialysé depuis trois ans. J'ai eu plusieurs chauffeurs avant lui. Maintenant il sait mon nom, il sait que j'aime arriver 10 minutes en avance. C'est devenu une routine rassurante dans une vie qui l'est moins." — Jean-Pierre, 68 ans, Colomiers</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-ariege-pamiers-foix-toulouse",
    title: "Taxi VSL depuis l'Ariège vers Toulouse : Pamiers, Foix, Saint-Girons",
    description: "Transport médical conventionné depuis l'Ariège (Pamiers, Foix, Saint-Girons) vers les hôpitaux de Toulouse. Longue distance prise en charge CPAM, tiers payant, confort premium.",
    date: "2025-03-10",
    category: "Trajets" as const,
    readTime: "5 min",
    content: `
<p>Depuis l'Ariège, rejoindre les hôpitaux spécialisés de Toulouse n'est pas un simple trajet — c'est une expédition. Pamiers à 70 km, Foix à 85 km, Saint-Girons à 95 km. Ces distances peuvent sembler décourageantes, surtout quand on est malade.</p>

<h2>Pourquoi les patients de l'Ariège viennent à Toulouse</h2>
<p>L'Ariège est un département rural dont les établissements de santé ne disposent pas de toutes les spécialités. Pour la cardiologie interventionnelle, l'oncologie, la neurochirurgie, les patients ariégeois sont orientés vers le CHU de Toulouse.</p>

<h2>Nos trajets réguliers depuis l'Ariège</h2>
<ul>
<li><strong>Pamiers → Toulouse</strong> : 70 km, environ 55 minutes</li>
<li><strong>Foix → Toulouse</strong> : 85 km, environ 1h05</li>
<li><strong>Saint-Girons → Toulouse</strong> : 95 km, environ 1h20</li>
<li><strong>Saverdun → Toulouse</strong> : 60 km, environ 50 minutes</li>
</ul>

<h2>Comment obtenir la prise en charge CPAM pour les trajets longue distance ?</h2>
<p>Votre médecin doit mentionner sur l'ordonnance : la nature de votre ALD, la spécialité requise, l'établissement de soin désigné à Toulouse, et l'absence de cette spécialité dans votre département.</p>

<blockquote>
<p>Une patiente en traitement de neurologie depuis Pamiers : "Je fais ce trajet toutes les trois semaines. Maintenant je sais que le chauffeur m'attend et connaît exactement où me déposer. C'est une tranquillité d'esprit énorme."</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-albi-tarn-toulouse-hopital",
    title: "Taxi VSL Albi & Tarn vers Toulouse : Transport Médical Longue Distance",
    description: "Transport médical conventionné depuis Albi, Castres, Gaillac et le Tarn vers les hôpitaux de Toulouse. Prise en charge CPAM, trajet ~80 km, tiers payant à 100%.",
    date: "2025-03-15",
    category: "Trajets" as const,
    readTime: "4 min",
    content: `
<p>Albi et le Tarn bénéficient de bons établissements hospitaliers, mais pour certaines spécialités — greffe d'organes, oncologie de pointe, neurochirurgie complexe — le CHU de Toulouse reste l'établissement de référence régionale.</p>

<h2>Les distances depuis le Tarn</h2>
<ul>
<li><strong>Albi → Toulouse</strong> : 80 km, environ 1h sur A68</li>
<li><strong>Castres → Toulouse</strong> : 75 km, environ 1h</li>
<li><strong>Gaillac → Toulouse</strong> : 55 km, environ 45 minutes</li>
<li><strong>Mazamet → Toulouse</strong> : 90 km, environ 1h10</li>
<li><strong>Lavaur → Toulouse</strong> : 40 km, environ 35 minutes</li>
</ul>

<h2>Prise en charge CPAM depuis le Tarn</h2>
<p>Votre médecin prescrit le transport avec la mention que la spécialité est uniquement disponible à Toulouse. La CPAM prend en charge le trajet.</p>

<h2>Ce que nos patients du Tarn apprécient</h2>
<p>Plusieurs de nos patients albigeois nous ont dit la même chose : avant de nous trouver, ils ne savaient pas que le transport depuis Albi pouvait être entièrement remboursé. Certains prenaient leur voiture personnelle, épuisés. Savoir qu'il existe un service professionnel, humain et gratuit pour eux — c'est souvent un soulagement immense.</p>
`,
  },
  {
    slug: "taxi-prive-aeroport-toulouse-blagnac",
    title: "Taxi Privé Aéroport Toulouse-Blagnac : Réservation & Tarifs Fixes",
    description: "Réservez votre taxi pour l'Aéroport Toulouse-Blagnac. Ponctualité garantie dès 4h du matin, accueil personnalisé à l'arrivée, sièges auto gratuits. Tarif fixe sans surprise.",
    date: "2025-03-20",
    category: "Courses Privées" as const,
    readTime: "4 min",
    content: `
<p>Il est 4h30 du matin. Votre taxi n'est pas là. Votre avion décolle dans 90 minutes. C'est le scénario cauchemar que nous avons entendu de trop nombreux clients avant qu'ils ne nous contactent. Chez Occitanie Médi Mobility, nous ne ratons pas les départs.</p>

<h2>Notre service aéroport</h2>
<p>Nous assurons les transferts vers et depuis l'Aéroport Toulouse-Blagnac depuis des années. Ce que nous annonçons au téléphone, c'est ce que vous payez à l'arrivée — pas plus.</p>

<h2>Pourquoi choisir un taxi plutôt qu'un VTC ?</h2>
<p>À 3h du matin, un VTC peut annuler sa course ou ne pas se présenter. Nous, nous prenons nos engagements au sérieux — vous avez notre numéro direct, et nous répondons. Notre Peugeot 5008 GT offre un espace généreux pour vos bagages.</p>

<h2>Le service d'accueil à l'arrivée</h2>
<p>Si vous atterrissez à Toulouse, nous pouvons vous accueillir avec une pancarte personnalisée à la sortie des bagages. Nous suivons l'état de votre vol en temps réel — si votre avion a du retard, nous adaptons notre présence. Pas de frais d'attente supplémentaires.</p>

<h2>Pour les familles avec enfants</h2>
<p>Nous disposons de sièges auto et de réhausseurs adaptés. Précisez les âges et poids de vos enfants lors de la réservation, nous équipons le véhicule en conséquence.</p>
`,
  },
  {
    slug: "taxi-gare-matabiau-toulouse",
    title: "Taxi Gare Matabiau Toulouse : Transfert Fiable pour Votre Train",
    description: "Taxi pour la Gare Matabiau de Toulouse. Ponctualité garantie, aide aux bagages, suivi des horaires TGV. Réservation simple par téléphone ou SMS.",
    date: "2025-03-25",
    category: "Courses Privées" as const,
    readTime: "3 min",
    content: `
<p>La Gare Matabiau est le poumon ferroviaire de Toulouse. TGV vers Paris en 4h10, Intercités vers Bordeaux, Montpellier, Perpignan — pour ne jamais rater votre train, le transport doit être sans accroc.</p>

<h2>Notre service vers Matabiau</h2>
<ul>
<li><strong>Ponctualité rigoureuse</strong> — nous tenons compte du trafic toulousain</li>
<li><strong>Aide aux bagages</strong> — nous chargeons et déchargeons vos valises</li>
<li><strong>Flexibilité</strong> — si votre train a du retard au retour, nous adaptons</li>
<li><strong>Tarif fixe</strong> — pas de compteur qui s'emballe dans les bouchons</li>
</ul>

<h2>Pour vos arrivées à Toulouse</h2>
<p>Donnez-nous votre numéro de train, nous suivons les horaires et nous adaptons notre présence si votre train a du retard.</p>
`,
  },
  {
    slug: "taxi-mariage-evenement-toulouse-occitanie",
    title: "Taxi pour Mariage & Événements à Toulouse et Occitanie",
    description: "Location de taxi avec chauffeur pour votre mariage, séminaire ou événement privé en Occitanie. Véhicule élégant, chauffeur en tenue, discrétion absolue. Devis sur demande.",
    date: "2025-04-01",
    category: "Courses Privées" as const,
    readTime: "4 min",
    content: `
<p>Votre mariage est l'un des jours les plus importants de votre vie. Le transport des mariés, des témoins, de la famille proche — chaque détail compte.</p>

<h2>Transport de mariés à Toulouse et en Occitanie</h2>
<p>Notre Peugeot 5008 GT, sobre et élégant, est parfait pour un transport de mariage discret et confortable. Nous assurons le transport des mariés, les navettes entre les différents lieux, et les retours en fin de soirée.</p>

<h2>Séminaires et événements professionnels</h2>
<p>Pour les entreprises qui reçoivent des clients importants, nous assurons les transferts depuis l'aéroport, la gare, ou l'hôtel. Notre chauffeur est en tenue professionnelle, discret et ponctuel.</p>

<h2>Comment obtenir un devis ?</h2>
<p>Appelez-nous au 07 72 33 98 92. Nous vous rappelons avec une proposition tarifaire claire et sans surprise.</p>
`,
  },
  {
    slug: "taxi-professionnel-entreprise-toulouse",
    title: "Taxi Professionnel & Business à Toulouse : Fiabilité pour vos Déplacements",
    description: "Service de taxi professionnel pour entreprises à Toulouse. Facturation mensuelle, discrétion, ponctualité. Pour vos clients, collaborateurs et déplacements professionnels.",
    date: "2025-04-05",
    category: "Courses Privées" as const,
    readTime: "3 min",
    content: `
<p>Dans un contexte professionnel, le transport n'est pas qu'une commodité — c'est un reflet de votre image. Un client accueilli par un chauffeur ponctuel dans un véhicule propre, c'est un premier message positif.</p>

<h2>Notre offre entreprise</h2>
<ul>
<li><strong>Facturation mensuelle</strong> — une facture unique en fin de mois</li>
<li><strong>Compte prioritaire</strong> — votre appel passe en priorité</li>
<li><strong>Discrétion absolue</strong> — confidentialité totale</li>
<li><strong>Disponibilité étendue</strong> — départ très tôt ou retour tardif</li>
</ul>

<h2>Pour ouvrir un compte entreprise</h2>
<p>Appelez-nous au 07 72 33 98 92 pour discuter de vos besoins et établir ensemble les modalités de notre collaboration.</p>
`,
  },
];

// ─── ARTICLES COMPARAISONS & SPÉCIALITÉS ──────────────────────────────────────
const seoArticles: Article[] = [
  // ── Phase 1 : Comparaisons ──
  {
    slug: "taxi-vsl-vs-ambulance-toulouse",
    title: "Taxi VSL ou Ambulance : Quelle Différence et Comment Choisir ?",
    description: "Quelle différence entre un taxi VSL et une ambulance ? Qui prescrit quoi ? Quel remboursement CPAM ? Tout ce qu'il faut savoir pour choisir le bon transport médical à Toulouse.",
    date: "2025-05-01",
    category: "Comparaisons" as const,
    readTime: "6 min",
    content: `
<p>Votre médecin vous parle de "transport médical remboursé" mais ne précise pas si c'est une ambulance ou un taxi. Vous ne savez pas quelle différence ça fait vraiment. Ce guide vous explique tout, clairement, pour que vous choisissiez le bon transport — et que le remboursement CPAM s'applique sans problème.</p>

<h2>Taxi VSL et ambulance : deux transports médicaux, deux profils de patients</h2>
<p>La CPAM distingue trois types de transport médical remboursé : l'ambulance, le VSL (Véhicule Sanitaire Léger) et le taxi conventionné. La différence fondamentale repose sur votre état de santé au moment du trajet :</p>
<ul>
<li><strong>Ambulance</strong> — pour les patients qui ne peuvent pas voyager en position assise, nécessitent une surveillance médicale constante ou un équipement médical (perfusion, oxygène). Prix élevé, remboursement CPAM possible mais réservé aux cas sévères.</li>
<li><strong>VSL / Taxi conventionné</strong> — pour les patients qui peuvent s'asseoir normalement, se déplacer seuls ou avec une aide légère. Idéal pour les soins réguliers : dialyse, chimiothérapie, consultations ALD.</li>
</ul>
<p>Si votre médecin prescrit un taxi VSL alors que vous pouvez marcher et vous asseoir, c'est le bon choix — et le plus économique pour l'Assurance Maladie.</p>

<h2>Ce que dit le médecin sur l'ordonnance</h2>
<p>C'est votre médecin qui décide. Il coche sur la Prescription Médicale de Transport (PMT) le mode de transport adapté à votre état. La CPAM peut refuser le remboursement si vous prenez une ambulance alors qu'un taxi VSL était suffisant — c'est ce qu'on appelle le transport non justifié.</p>
<p>Si votre médecin vous prescrit un taxi VSL, ne prenez pas une ambulance de votre propre chef : vous ne serez pas ou très peu remboursé pour la différence de tarif.</p>

<h2>Comparaison des coûts et du remboursement</h2>
<table>
<tr><th>Type</th><th>Tarif moyen aller-retour Toulouse</th><th>Remboursement CPAM (ALD 100%)</th></tr>
<tr><td>Ambulance</td><td>150–350 €</td><td>100% si médicalement justifiée</td></tr>
<tr><td>Taxi VSL conventionné</td><td>15–80 €</td><td>100% avec tiers payant intégral</td></tr>
<tr><td>VTC (Uber, Bolt...)</td><td>15–50 €</td><td>0% — non conventionné CPAM</td></tr>
</table>

<h2>Pourquoi nous choisissons le VSL pour nos patients</h2>
<p>Chez Occitanie Médi Mobility, nos patients viennent pour leurs dialyses, leurs chimiothérapies, leurs consultations ALD. Ces traitements sont éprouvants, mais les patients peuvent voyager assis. Le taxi VSL leur offre un confort équivalent à une ambulance — conduite douce, température confortable, aide à la montée et à la descente — à un coût bien moindre pour la Sécurité Sociale.</p>
<p>Et pour eux : 0€ d'avance, grâce au tiers payant intégral.</p>

<blockquote>
<p>En cas de doute sur le transport qui vous convient, posez la question à votre médecin ou appelez-nous directement au <strong>07 72 33 98 92</strong>. Nous pouvons vous aider à comprendre ce que votre ordonnance mentionne.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-vs-uber-vtc-transport-medical-toulouse",
    title: "Taxi Conventionné CPAM vs Uber / VTC : Pourquoi Uber n'est Pas Remboursé",
    description: "Uber, Bolt ou un taxi conventionné CPAM pour votre transport médical ? Seulement le taxi VSL agréé permet le remboursement Assurance Maladie. Voici pourquoi — et comment éviter la mauvaise surprise.",
    date: "2025-05-05",
    category: "Comparaisons" as const,
    readTime: "5 min",
    content: `
<p>Question que nous entendons souvent : "Est-ce que je peux prendre un Uber et me faire rembourser par la CPAM ?" La réponse est non — et comprendre pourquoi vous évitera une mauvaise surprise financière le jour de votre soin.</p>

<h2>Le principe du conventionnement : ce qui fait la différence</h2>
<p>Pour qu'un transport médical soit remboursé par l'Assurance Maladie, le prestataire doit avoir signé une convention avec la CPAM. Cette convention impose des obligations précises :</p>
<ul>
<li>Formation spécifique du chauffeur aux règles sanitaires et à l'assistance aux patients</li>
<li>Véhicule aux normes VSL (hygiène, confort, équipements)</li>
<li>Tarifs fixés par arrêté ministériel — pas de tarification dynamique</li>
<li>Télétransmission des feuilles de soins directement à la CPAM</li>
</ul>
<p>Uber, Bolt, et les VTC en général ne sont pas conventionnés. Ils appliquent une tarification dynamique (prix qui monte aux heures de pointe) et ne peuvent pas facturer la CPAM. Peu importe la qualité de leur service, ils n'entrent pas dans le cadre légal du transport médical remboursé.</p>

<h2>Ce qu'il se passe si vous prenez un Uber pour votre chimio</h2>
<p>Vous payez la course. Vous demandez le remboursement. La CPAM refuse, car le prestataire n'est pas conventionné. Vous avez avancé 30 ou 40 euros que vous n'aurez jamais. Si vous êtes en ALD avec tiers payant, cette erreur est évitable à 100%.</p>

<h2>Les tarifs réglementés du taxi VSL : plus prévisibles que vous ne le pensez</h2>
<p>Contrairement à un VTC dont le prix varie selon l'heure et la demande, le tarif d'un taxi conventionné est fixé par arrêté. Pour Toulouse et la Haute-Garonne :</p>
<ul>
<li>Prise en charge : 2,40 €</li>
<li>Prix au kilomètre : 1,05 €/km</li>
<li>Attente : 13,40 €/heure</li>
</ul>
<p>Ces tarifs sont les mêmes pour tous les taxis conventionnés. Pas de surprise, pas de majoration cachée.</p>

<h2>Occitanie Médi Mobility vs VTC : ce que vous gagnez vraiment</h2>
<ul>
<li><strong>0€ d'avance</strong> — contre 30–50€ par course en VTC</li>
<li><strong>Chauffeur formé</strong> — aide à la montée/descente, connaissance des hôpitaux</li>
<li><strong>Facturation directe CPAM</strong> — pas de démarche administrative</li>
<li><strong>Tarif fixe réglementé</strong> — pas de prix qui double un mardi soir</li>
</ul>

<blockquote>
<p>Choisir un taxi conventionné plutôt qu'un VTC, c'est simplement choisir un transport pensé pour les patients, encadré légalement et intégralement remboursé. Appelez-nous au <strong>07 72 33 98 92</strong>.</p>
</blockquote>
`,
  },
  {
    slug: "comparatif-transport-medical-toulouse-ambulance-vsl-vtc",
    title: "Comparatif Transports Médicaux à Toulouse 2025 : Ambulance, VSL, Taxi, VTC",
    description: "Tableau comparatif complet des modes de transport médical à Toulouse : ambulance, VSL, taxi conventionné CPAM, VTC, covoiturage. Prix, remboursement, conditions. Choisissez le bon.",
    date: "2025-05-10",
    category: "Comparaisons" as const,
    readTime: "7 min",
    content: `
<p>Vous avez besoin d'un transport médical à Toulouse et vous ne savez pas quelle solution choisir. Ambulance ? Taxi conventionné ? VTC ? Covoiturage ? Ce comparatif rassemble tout ce qu'il faut savoir pour prendre la bonne décision — selon votre état de santé, votre situation CPAM et votre budget.</p>

<h2>Tableau comparatif rapide</h2>
<table>
<tr><th>Transport</th><th>Remboursement CPAM</th><th>Tarif AR Toulouse</th><th>Réservation</th><th>Aide patient</th></tr>
<tr><td>Ambulance</td><td>100% si justifié</td><td>150–350 €</td><td>Société ambulancière</td><td>Oui (brancardage)</td></tr>
<tr><td>Taxi VSL conventionné</td><td>100% (ALD tiers payant)</td><td>15–80 €</td><td>Taxi agréé CPAM</td><td>Oui (aide légère)</td></tr>
<tr><td>VTC (Uber, Bolt)</td><td>0%</td><td>15–60 € (variable)</td><td>Application mobile</td><td>Non</td></tr>
<tr><td>Voiture personnelle</td><td>Indemnités kilométriques</td><td>Remboursement partiel</td><td>Sans réservation</td><td>Non</td></tr>
<tr><td>Transport en commun</td><td>Non</td><td>1,80 € (Tisséo)</td><td>Sans réservation</td><td>Non</td></tr>
</table>

<h2>Quand prendre une ambulance ?</h2>
<p>L'ambulance est prescrite lorsque le patient ne peut pas se tenir assis, a besoin d'oxygène ou d'une perfusion pendant le trajet, ou nécessite une surveillance médicale constante. La CPAM vérifie que la prescription d'ambulance est médicalement justifiée. Si ce n'est pas le cas, elle peut refuser le remboursement ou demander un remboursement partiel seulement.</p>

<h2>Quand prendre un taxi VSL ?</h2>
<p>Le taxi VSL est adapté à tous les patients pouvant voyager en position assise : dialysés, patients en chimiothérapie, consultations ALD, suivi post-opératoire. C'est le transport médical le plus courant en Occitanie pour les soins réguliers. Avec le tiers payant intégral, le patient ne paie rien.</p>

<h2>Pourquoi les VTC ne fonctionnent pas pour les soins médicaux</h2>
<p>Les VTC comme Uber ne sont pas conventionnés CPAM. Ils ne peuvent pas émettre de feuilles de soins, ne sont pas formés aux protocoles sanitaires du transport médical, et leurs tarifs fluctuent. Pour les patients en ALD qui font plusieurs trajets médicaux par semaine, cela représente un coût significatif non remboursé.</p>

<h2>La voiture personnelle : une alternative méconnue</h2>
<p>Si vous conduisez vous-même ou êtes conduit par un proche, vous pouvez percevoir des Indemnités Kilométriques (IK) de la CPAM pour vos trajets médicaux. Le barème est inférieur au coût d'un taxi, et cette option n'est pas adaptée aux patients qui ne peuvent pas conduire après leur traitement.</p>

<h2>Notre recommandation</h2>
<p>Pour les patients en ALD à Toulouse et en Occitanie, le taxi VSL conventionné est systématiquement la meilleure solution : remboursement intégral, confort adapté, chauffeur formé, zéro démarche administrative.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour vérifier si votre situation ouvre droit au transport médical remboursé. Nous vous guidons avant même la première réservation.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-vsl-vs-proxisoin-transport-medical-toulouse",
    title: "Taxi VSL vs Proxisoins et Plateformes de Transport Médical : Que Choisir ?",
    description: "Plateformes comme Proxisoins, Santé.fr ou les régies de transport médical vs taxi VSL en direct : différences concrètes, qualité de service, avantages pour les patients en ALD à Toulouse.",
    date: "2025-05-12",
    category: "Comparaisons" as const,
    readTime: "5 min",
    content: `
<p>Face à la multiplication des plateformes de mise en relation pour le transport médical (Proxisoins, régies de santé, applications mobiles), beaucoup de patients se demandent s'il vaut mieux passer par une plateforme ou contacter directement un taxi VSL conventionné. Voici une comparaison honnête.</p>

<h2>Comment fonctionnent les plateformes de transport médical ?</h2>
<p>Des services comme Proxisoins ou les centrales de transport médical fonctionnent comme des intermédiaires : vous formulez votre demande, la plateforme la transmet à l'un de ses prestataires partenaires. Vous ne choisissez pas le chauffeur, ni parfois le véhicule.</p>
<p>Ces plateformes peuvent être utiles pour des établissements de santé qui gèrent de nombreux patients. Pour un patient individuel, elles présentent plusieurs inconvénients.</p>

<h2>Les inconvénients des plateformes pour les patients</h2>
<ul>
<li><strong>Anonymat du prestataire</strong> — vous ne savez pas qui vient vous chercher jusqu'à la veille ou le jour même</li>
<li><strong>Pas de relation de confiance</strong> — difficile de communiquer vos préférences (conduite douce, attente après chimio)</li>
<li><strong>Support diffus</strong> — en cas de problème, vous appelez la plateforme, pas le chauffeur directement</li>
<li><strong>Flexibilité limitée</strong> — annuler ou modifier en urgence est souvent compliqué</li>
</ul>

<h2>Les avantages d'un taxi VSL en contact direct</h2>
<ul>
<li><strong>Le même chauffeur à chaque séance</strong> — il connaît vos habitudes, votre état, votre parcours de soin</li>
<li><strong>Numéro direct</strong> — pas de hotline, pas de ticket de support</li>
<li><strong>Adaptabilité totale</strong> — retard du rendez-vous, arrêt sur la route, fenêtre horaire modifiée</li>
<li><strong>Connaissance des hôpitaux</strong> — nous savons quelle entrée, quel pavillon, quelle heure éviter</li>
</ul>

<h2>Ce que nos patients nous disent</h2>
<p>Plusieurs de nos patients sont passés par des plateformes avant de nous contacter. Ce qu'ils apprécient chez nous : avoir toujours le même chauffeur, pouvoir appeler directement, et ne pas avoir à réexpliquer leur situation à chaque course.</p>
<p>Pour quelqu'un qui va en dialyse trois fois par semaine ou en chimiothérapie chaque semaine, cette continuité n'est pas un luxe — c'est une condition de confort et de sécurité.</p>

<blockquote>
<p>Chez Occitanie Médi Mobility, chaque patient est suivi personnellement. Appelez-nous au <strong>07 72 33 98 92</strong> pour établir ensemble votre planning de transport.</p>
</blockquote>
`,
  },
  {
    slug: "pourquoi-choisir-taxi-vsl-conventionne-toulouse",
    title: "5 Raisons de Choisir un Taxi VSL Conventionné pour Vos Soins à Toulouse",
    description: "Pourquoi choisir un taxi VSL conventionné CPAM plutôt qu'une ambulance, un VTC ou un proche pour vos transports médicaux à Toulouse ? 5 raisons concrètes pour les patients en ALD.",
    date: "2025-05-15",
    category: "Comparaisons" as const,
    readTime: "4 min",
    content: `
<p>Vous commencez un traitement médical régulier — dialyse, chimiothérapie, radiothérapie — et vous hésitez sur la meilleure façon de vous rendre à l'hôpital. Voici 5 raisons concrètes pour lesquelles le taxi VSL conventionné est souvent la meilleure option pour les patients toulousains.</p>

<h2>1. Vous ne payez pas — grâce au tiers payant CPAM</h2>
<p>Si vous êtes en Affection de Longue Durée (ALD) à 100%, le tiers payant intégral s'applique. Nous facturons directement l'Assurance Maladie. Aucune avance, aucun formulaire à remplir de votre côté, aucun délai de remboursement à attendre. 0€ à chaque trajet.</p>

<h2>2. Vous êtes pris en charge de votre porte à l'entrée du service</h2>
<p>Nous venons vous chercher à votre domicile et vous déposons au plus près de l'entrée de votre service. Pas de parkings à chercher, pas de correspondances en transports en commun, pas de marche inutile quand vous êtes fatigué ou douloureux.</p>

<h2>3. Un seul appel pour plusieurs mois de transport</h2>
<p>Pour les traitements réguliers, nous établissons un planning sur toute la durée de votre traitement. Une seule réservation initiale suffit : vous n'avez plus à vous soucier du transport à chaque séance.</p>

<h2>4. Un chauffeur qui connaît votre situation</h2>
<p>Après une dialyse ou une chimio, la fatigue peut être soudaine. Nous adaptons notre conduite — pas de freinages brusques, musique douce ou silence, fenêtre selon vos préférences. Ces détails font une différence réelle quand on les vit régulièrement.</p>

<h2>5. Zéro paperasse administrative</h2>
<p>Nous gérons toute la facturation avec la CPAM. Vous n'avez qu'à nous remettre votre prescription médicale de transport le jour J. Pas d'Ameli à consulter, pas de remboursement à attendre, pas d'erreur administrative.</p>

<h2>Pour qui c'est particulièrement adapté ?</h2>
<ul>
<li>Patients en dialyse (3x par semaine)</li>
<li>Patients en chimiothérapie ou radiothérapie</li>
<li>Personnes âgées ou à mobilité réduite</li>
<li>Patients des communes périphériques et de toute l'Occitanie</li>
</ul>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour vérifier votre éligibilité et réserver votre premier transport. Nous répondons 7j/7.</p>
</blockquote>
`,
  },

  // ── Phase 2 : Guides CPAM ──
  {
    slug: "remboursement-transport-medical-cpam-toulouse-guide",
    title: "Remboursement Transport Médical CPAM à Toulouse : Guide Complet 2025",
    description: "Comment obtenir le remboursement de votre transport médical par la CPAM à Toulouse ? Conditions, démarches, taux, tiers payant. Tout ce qu'il faut savoir en 2025.",
    date: "2025-05-18",
    category: "Guide" as const,
    readTime: "8 min",
    content: `
<p>Le remboursement du transport médical par la CPAM est un droit mal connu — et souvent sous-utilisé. Chaque année, des milliers de patients en Haute-Garonne avancent des frais de transport qu'ils auraient pu ne jamais payer. Ce guide vous explique exactement comment fonctionne le remboursement, qui y a droit et comment l'obtenir sans complication.</p>

<h2>Principe général : le transport médical dans le parcours de soins</h2>
<p>Depuis 2004, l'Assurance Maladie rembourse les frais de transport médical lorsque le patient ne peut pas utiliser les transports en commun ou sa voiture personnelle en raison de son état de santé, et que le transport est médicalement nécessaire pour accéder aux soins.</p>

<h2>Les conditions de remboursement</h2>
<p>Le remboursement est accordé dans plusieurs situations :</p>
<ul>
<li><strong>Affection de Longue Durée (ALD)</strong> — la situation la plus courante, ouvre droit au tiers payant intégral si ALD à 100%</li>
<li><strong>Hospitalisation complète</strong> — transport aller et retour remboursé</li>
<li><strong>Traitements réguliers et fréquents</strong> — dialyse, chimiothérapie, radiothérapie (au moins deux fois par semaine pendant 6 mois)</li>
<li><strong>Accident du travail / maladie professionnelle</strong></li>
<li><strong>Maternité</strong> — à partir du 5ème mois de grossesse</li>
<li><strong>Longue distance imposée</strong> — quand la spécialité médicale requise n'existe pas dans le département du patient</li>
</ul>

<h2>Les taux de remboursement selon votre situation</h2>
<table>
<tr><th>Situation</th><th>Part CPAM</th><th>Part mutuelle</th><th>Reste à charge</th></tr>
<tr><td>ALD 100% avec tiers payant</td><td>100%</td><td>—</td><td>0 €</td></tr>
<tr><td>ALD 100% sans tiers payant</td><td>100%</td><td>—</td><td>0 € (mais avance)</td></tr>
<tr><td>Cas standard (hors ALD)</td><td>65%</td><td>Variable</td><td>35% ou moins</td></tr>
</table>

<h2>Le document indispensable : la Prescription Médicale de Transport (PMT)</h2>
<p>Sans ce document, pas de remboursement. La PMT est établie par votre médecin traitant ou le médecin de l'établissement de soins. Elle doit mentionner :</p>
<ul>
<li>Votre identité et numéro de sécurité sociale</li>
<li>Le motif médical du transport (lien avec l'ALD ou le soin)</li>
<li>Le mode de transport prescrit (taxi VSL, ambulance...)</li>
<li>La destination</li>
<li>La date ou la période de validité</li>
</ul>

<h2>Avec le tiers payant : comment ça se passe concrètement ?</h2>
<ol>
<li>Votre médecin vous remet la PMT (avant le jour du transport)</li>
<li>Vous réservez votre taxi conventionné CPAM en précisant votre ALD</li>
<li>Le jour J, vous remettez la PMT et votre carte Vitale au chauffeur</li>
<li>Le chauffeur effectue la télétransmission directement à la CPAM</li>
<li>Vous ne payez rien — la CPAM règle le chauffeur directement</li>
</ol>

<h2>Cas particulier : la longue distance depuis l'Occitanie</h2>
<p>Si vous résidez en Ariège, dans le Tarn, les Hautes-Pyrénées ou tout autre département d'Occitanie, et que votre spécialité médicale se trouve uniquement à Toulouse, le trajet longue distance est remboursable. Votre médecin doit préciser sur la PMT l'absence de la spécialité dans votre département.</p>

<blockquote>
<p>Vous avez un doute sur votre situation ? Appelez-nous au <strong>07 72 33 98 92</strong>. Avant même de réserver, nous pouvons vous aider à vérifier si votre transport est remboursable et comment préparer votre ordonnance.</p>
</blockquote>
`,
  },
  {
    slug: "conditions-eligibilite-transport-medical-cpam-ald",
    title: "Qui a Droit au Transport Médical Remboursé ? Conditions d'Éligibilité CPAM",
    description: "Quelles maladies et situations ouvrent droit au transport médical remboursé par la CPAM ? Liste des ALD, conditions précises, cas particuliers. Tout pour savoir si vous êtes éligible.",
    date: "2025-05-20",
    category: "Guide" as const,
    readTime: "7 min",
    content: `
<p>Beaucoup de patients en traitement régulier ignorent qu'ils ont droit au transport médical remboursé. Ce guide liste toutes les situations où la CPAM prend en charge votre transport — avec les conditions précises pour chaque cas.</p>

<h2>Les 30 Affections de Longue Durée (ALD) qui ouvrent droit au transport remboursé</h2>
<p>Le remboursement à 100% s'applique pour les transports liés à une ALD reconnue. Les ALD les plus fréquentes chez nos patients toulousains :</p>
<ul>
<li><strong>ALD 2</strong> — Insuffisance rénale chronique grave (dialyse)</li>
<li><strong>ALD 3</strong> — Artériopathies chroniques avec manifestations ischémiques</li>
<li><strong>ALD 5</strong> — Insuffisance cardiaque grave</li>
<li><strong>ALD 6</strong> — Maladies chroniques actives du foie et cirrhoses</li>
<li><strong>ALD 8</strong> — Diabète de type 1 et de type 2</li>
<li><strong>ALD 9</strong> — Forme grave des affections neurologiques et musculaires (dont sclérose en plaques)</li>
<li><strong>ALD 17</strong> — Maladies métaboliques héréditaires</li>
<li><strong>ALD 23</strong> — Affections psychiatriques de longue durée</li>
<li><strong>ALD 25</strong> — Sclérose en plaques</li>
<li><strong>ALD 30</strong> — Tumeurs malignes (cancers, hémopathies) — c'est l'ALD la plus fréquente pour les patients en chimiothérapie</li>
</ul>
<p>La liste complète des 30 ALD est disponible sur <strong>ameli.fr</strong>. Si vous avez une ALD reconnue, votre médecin peut vous délivrer une PMT pour vos transports en lien avec cette pathologie.</p>

<h2>Les situations hors ALD qui ouvrent également droit au remboursement</h2>
<ul>
<li><strong>Hospitalisation complète</strong> — aller et retour remboursés quel que soit le motif</li>
<li><strong>Traitements ambulatoires réguliers</strong> — au moins 2 séances par semaine pendant 6 mois consécutifs (dialyse, chimio, radio)</li>
<li><strong>Maternité</strong> — à partir de la 24ème semaine d'aménorrhée et jusqu'à 12 jours après l'accouchement</li>
<li><strong>Accident du travail</strong> — prise en charge à 100% sans avance de frais</li>
<li><strong>Maladie professionnelle reconnue</strong></li>
<li><strong>Invalidité</strong> — selon le taux d'invalidité reconnu</li>
</ul>

<h2>Les situations où le remboursement est partiel (65%)</h2>
<p>Hors des cas ci-dessus, la CPAM peut rembourser 65% du tarif réglementé si votre médecin atteste que votre état de santé ne vous permet pas d'utiliser les transports en commun. La mutuelle peut compléter selon votre contrat.</p>

<h2>Ce que la CPAM ne rembourse pas</h2>
<ul>
<li>Les transports pris sans prescription médicale de transport</li>
<li>Les VTC, Uber, Bolt et tout prestataire non conventionné CPAM</li>
<li>Les transports non liés à l'ALD reconnue (ex : transport pour un rhume si votre ALD est le diabète)</li>
<li>Les transports dont la PMT est établie après la date du trajet</li>
</ul>

<h2>Comment faire reconnaître votre ALD ?</h2>
<p>C'est votre médecin traitant qui établit la demande de reconnaissance d'ALD auprès de la CPAM, sur la base d'un protocole de soins. Une fois l'ALD reconnue, un formulaire de liaison est établi entre votre médecin, la CPAM et les spécialistes — et votre droit au transport remboursé est ouvert.</p>

<blockquote>
<p>Si vous avez un traitement régulier et ne savez pas si vous avez droit au transport remboursé, appelez-nous au <strong>07 72 33 98 92</strong>. Nous pouvons vous orienter vers les démarches adaptées à votre situation.</p>
</blockquote>
`,
  },
  {
    slug: "prescription-medicale-transport-comment-obtenir",
    title: "Prescription Médicale de Transport : Comment la Demander à Votre Médecin",
    description: "Comment demander une Prescription Médicale de Transport (PMT) à votre médecin pour votre transport médical remboursé CPAM ? Quoi dire, quels documents, durée de validité.",
    date: "2025-05-22",
    category: "Guide" as const,
    readTime: "5 min",
    content: `
<p>La Prescription Médicale de Transport (PMT) est le document clé pour bénéficier du remboursement de votre transport médical. Pourtant, beaucoup de patients ne savent pas comment la demander, ou oublient de le faire avant le jour du rendez-vous. Ce guide vous explique comment procéder simplement.</p>

<h2>Qu'est-ce que la PMT exactement ?</h2>
<p>La PMT — anciennement appelée "bon de transport" — est une ordonnance médicale spécifique, distincte de l'ordonnance de médicaments. Elle atteste que votre état de santé nécessite un transport médical et que ce transport doit être pris en charge par l'Assurance Maladie.</p>
<p>Sans PMT valide, votre taxi conventionné ne peut pas télétransmettre la facturation à la CPAM, et votre course reste à votre charge.</p>

<h2>À qui la demander ?</h2>
<ul>
<li><strong>Votre médecin traitant</strong> — pour les consultations de suivi en lien avec votre ALD</li>
<li><strong>Le médecin de l'hôpital ou de la clinique</strong> — pour les transports liés à une hospitalisation ou un traitement en cours</li>
<li><strong>Un médecin de garde</strong> — si votre médecin habituel est indisponible</li>
</ul>

<h2>Comment formuler votre demande ?</h2>
<p>Dites simplement à votre médecin : "J'ai besoin d'un bon de transport pour ma [dialyse / chimiothérapie / consultation spécialisée] à [hôpital]. Est-ce que vous pouvez m'établir une prescription médicale de transport ?"</p>
<p>Si vous avez un traitement régulier sur plusieurs mois, demandez une ordonnance renouvelable couvrant toute la durée du traitement. Votre médecin peut établir une PMT valable pour plusieurs mois avec un volet par séance.</p>

<h2>Ce que doit contenir la PMT pour être valide</h2>
<ul>
<li>Vos nom, prénom et numéro de sécurité sociale</li>
<li>La date de la prescription (doit être <strong>avant</strong> la date du transport)</li>
<li>Le motif médical (lié à votre ALD ou au soin)</li>
<li>La destination (hôpital ou clinique)</li>
<li>Le mode de transport prescrit (taxi VSL ou ambulance)</li>
<li>Le nombre d'allers-retours ou la période de validité</li>
<li>La signature et le cachet du médecin</li>
</ul>

<h2>La règle d'or : la date</h2>
<p>La date de signature du médecin doit obligatoirement être antérieure ou égale à la date de votre transport. Une PMT datée du lendemain du trajet sera systématiquement rejetée par la CPAM. Pensez-y lors de votre prochaine consultation.</p>

<h2>PMT perdue ou abîmée : que faire ?</h2>
<p>Appelez votre médecin pour qu'il en établisse une nouvelle. En attendant, si vous avez photographié l'original, montrez la photo au médecin pour faciliter la rédaction du duplicata.</p>

<blockquote>
<p>Vous avez votre PMT en main et souhaitez réserver votre transport médical ? Appelez-nous au <strong>07 72 33 98 92</strong>. Pour les traitements réguliers, une seule réservation suffit pour plusieurs mois.</p>
</blockquote>
`,
  },

  // ── Phase 3 : Spécialités médicales ──
  {
    slug: "taxi-dialyse-toulouse-cpam-rangueil",
    title: "Taxi VSL pour la Dialyse à Toulouse : Planning Hebdomadaire & Tiers Payant CPAM",
    description: "Service de taxi VSL conventionné CPAM spécialisé pour les patients en dialyse à Toulouse (Rangueil, Clinique de l'Union). Planning stable 3x/semaine, tiers payant intégral, conduite douce.",
    date: "2025-05-25",
    category: "Spécialités" as const,
    readTime: "6 min",
    content: `
<p>La dialyse impose un rythme qui ne pardonne pas : trois séances par semaine, chaque semaine, pendant des années. Pour les patients dialysés de Toulouse et de toute l'Occitanie, le transport est une composante critique de ce rythme. Une absence, un retard, une annulation — et c'est la séance manquée. Notre service de transport pour la dialyse est conçu pour que ce ne soit jamais un problème.</p>

<h2>Le transport dialyse : un besoin spécifique</h2>
<p>Un patient dialysé n'a pas le même profil qu'un patient en consultation. Au retour d'une séance d'hémodialyse, la fatigue peut être soudaine et intense : sensation de malaise, hypotension orthostatique, faiblesse musculaire. Ces effets sont normaux mais imposent une conduite adaptée.</p>
<p>Nous savons que le retour après dialyse n'est pas un trajet ordinaire. Notre conduite est douce, sans accélérations brusques. La température du véhicule est réglée selon vos besoins. Si vous avez besoin de faire une pause sur la route, nous nous arrêtons.</p>

<h2>Les centres de dialyse à Toulouse que nous desservons</h2>
<ul>
<li><strong>Hôpital Rangueil — Service de Néphrologie-Dialyse</strong> — principal centre d'hémodialyse du CHU de Toulouse</li>
<li><strong>Clinique de l'Union (Saint-Jean)</strong> — important centre de dialyse privé au nord de Toulouse</li>
<li><strong>CHU Purpan</strong> — service de dialyse pédiatrique et adulte</li>
<li><strong>Autres centres d'auto-dialyse de Toulouse et de l'agglomération</strong></li>
</ul>

<h2>Le planning hebdomadaire fixe : comment ça marche</h2>
<p>Pour un patient dialysé, nous établissons un planning fixe dès le premier appel. Exemple :</p>
<ul>
<li>Lundi, mercredi, vendredi — 6h45 départ domicile, 7h00 arrivée centre</li>
<li>Retour variable selon durée de séance : nous attendons sans frais supplémentaires</li>
</ul>
<p>Une fois le planning établi, vous n'avez plus rien à faire. Nous sommes là à l'heure convenue, chaque séance, sans que vous ayez à nous rappeler. Si un planning doit changer (fêtes, changement d'horaire hospitalier), nous vous contactons en amont.</p>

<h2>Le remboursement CPAM pour la dialyse</h2>
<p>L'insuffisance rénale chronique grave (ALD 2) ouvre droit au remboursement intégral du transport médical. Avec le tiers payant à 100% :</p>
<ul>
<li>Votre médecin néphrologue ou traitant établit une PMT couvrant vos séances</li>
<li>Vous nous la remettez lors de la première séance</li>
<li>Nous gérons toute la facturation avec la CPAM — à chaque séance, pendant toute la durée du traitement</li>
<li>Vous ne payez jamais rien</li>
</ul>

<h2>Depuis toute l'Occitanie vers Toulouse</h2>
<p>Si vous êtes dialysé à Toulouse alors que vous résidez en Ariège, dans le Tarn ou ailleurs en Occitanie, ce trajet longue distance est également remboursable sur prescription médicale. Nous intervenons depuis toute la région.</p>

<blockquote>
<p>Pour mettre en place votre planning de transport dialyse, appelez-nous au <strong>07 72 33 98 92</strong>. Nous établissons ensemble un programme adapté à vos horaires de séance, dès la semaine suivante.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-chimiotherapie-toulouse-cpam-oncopole",
    title: "Taxi VSL Chimiothérapie Toulouse : Accompagnement & Remboursement CPAM 100%",
    description: "Transport médical VSL conventionné spécialisé pour les patients en chimiothérapie à l'Oncopole Claudius Regaud de Toulouse. Véhicule désinfecté, conduite douce, tiers payant CPAM intégral.",
    date: "2025-05-28",
    category: "Spécialités" as const,
    readTime: "6 min",
    content: `
<p>La chimiothérapie est un traitement qui demande du courage. S'inquiéter du transport ne devrait pas s'y ajouter. Notre service de taxi VSL pour les patients en chimio à Toulouse est pensé pour que le trajet soit, dans toute la mesure du possible, une étape confortable et sans stress dans votre parcours de soins.</p>

<h2>Ce que vivent nos patients en chimiothérapie</h2>
<p>Après plusieurs années à transporter des patients vers l'Oncopole Claudius Regaud, nous connaissons bien les effets de la chimio sur le trajet retour : fatigue brutale, nausées, hypersensibilité au mouvement et au bruit, parfois sensation de malaise. Ces réactions sont normales — et nous les anticipons.</p>
<ul>
<li><strong>Conduite douce</strong> — pas d'accélérations ou de freinages brusques</li>
<li><strong>Température adaptée</strong> — votre confort thermique, pas le nôtre</li>
<li><strong>Silence ou musique douce</strong> — selon votre état et vos préférences</li>
<li><strong>Véhicule régulièrement désinfecté</strong> — important pour les patients immunodéprimés</li>
<li><strong>Aucune pression sur le temps</strong> — si vous avez besoin d'une pause, on s'arrête</li>
</ul>

<h2>L'Oncopole Claudius Regaud : notre zone d'intervention principale</h2>
<p>L'Institut Universitaire du Cancer de Toulouse (IUCT-Oncopole) est le plus grand centre de lutte contre le cancer du grand sud-ouest. Nous y amenons des patients depuis Toulouse et toute l'Occitanie. Nous connaissons les accès, les entrées dédiées aux patients ambulatoires, les horaires où la circulation est la plus fluide autour du site.</p>

<h2>Planning sur toute la durée du traitement</h2>
<p>Si votre protocole de chimiothérapie est établi sur plusieurs mois, nous prenons en charge tout le planning de transport dès le premier appel. Vous ne nous appelez qu'une fois — et nous sommes là à chaque séance.</p>
<p>Si votre protocole change (report de séance, ajout de cycle), informez-nous simplement à l'avance. Nous adaptons le planning sans complication.</p>

<h2>Le remboursement CPAM pour la chimio</h2>
<p>Les cancers (ALD 30) ouvrent droit au remboursement intégral du transport médical. Pour la chimiothérapie, le médecin oncologue ou votre médecin traitant peut établir une PMT couvrant l'ensemble du protocole de traitement.</p>
<p>Avec le tiers payant intégral : vous ne payez rien. Nous gérons la télétransmission CPAM à chaque séance.</p>

<h2>Depuis toute l'Occitanie</h2>
<p>Nous transportons régulièrement des patients vers l'Oncopole depuis Pamiers, Albi, Montauban, Auch, Tarbes et d'autres villes d'Occitanie. La longue distance est remboursable quand la spécialité n'est pas disponible localement.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour organiser votre transport chimiothérapie. Nous prenons en charge le planning sur toute la durée de votre traitement, en coordination avec vos horaires à l'Oncopole.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-radiotherapie-toulouse-cpam",
    title: "Taxi VSL Radiothérapie Toulouse : Trajets Quotidiens & Prise en Charge CPAM",
    description: "Transport médical VSL conventionné pour les patients en radiothérapie à Toulouse (Oncopole, Cliniques). Trajets quotidiens sur 5 à 7 semaines, tiers payant CPAM intégral, planning fixe.",
    date: "2025-06-01",
    category: "Spécialités" as const,
    readTime: "5 min",
    content: `
<p>La radiothérapie impose souvent un rythme de 5 séances par semaine pendant plusieurs semaines consécutives. C'est un engagement logistique intense pour le patient — d'autant plus si vous n'habitez pas à Toulouse. Notre service de transport pour la radiothérapie vous libère de cette contrainte.</p>

<h2>La spécificité du transport radiothérapie</h2>
<p>Contrairement à la chimiothérapie où les effets sont souvent intenses dans les heures qui suivent la séance, la radiothérapie produit une fatigue cumulative sur les semaines. Au début du protocole, les patients ressentent peu d'effets. Vers la 3ème ou 4ème semaine, la fatigue et l'inconfort peuvent être significatifs.</p>
<p>Notre service s'adapte à cette évolution : conduite identiquement douce dès le premier jour, mais nous prêtons une attention particulière à votre état de confort en fin de protocole.</p>

<h2>Les centres de radiothérapie à Toulouse</h2>
<ul>
<li><strong>Oncopole Claudius Regaud (IUCT)</strong> — principal centre de radiothérapie et curiethérapie de Toulouse</li>
<li><strong>Clinique Pasteur</strong> — radiothérapie cardiovasculaire</li>
<li><strong>Clinique Croix du Sud</strong> — radiothérapie oncologique</li>
</ul>

<h2>Un planning fixe sur 5 à 7 semaines</h2>
<p>Le protocole de radiothérapie est connu à l'avance : 5 séances par semaine, pendant 5 à 7 semaines selon le traitement. Nous établissons votre planning de transport sur toute cette durée dès votre premier appel. Vous n'avez plus à vous soucier du transport pendant toute la durée du protocole.</p>

<h2>Remboursement CPAM pour la radiothérapie</h2>
<p>Les traitements de radiothérapie en lien avec un cancer (ALD 30) ou une ALD reconnue ouvrent droit au remboursement intégral. La prescription médicale de transport peut couvrir l'ensemble du protocole (ex : "5 séances/semaine du [date début] au [date fin]").</p>
<p>Avec le tiers payant intégral : vous ne payez rien pendant toute la durée de votre radiothérapie.</p>

<h2>Pour les patients résidant hors de Toulouse</h2>
<p>Si vous résidez à Pamiers, Albi, Foix, Tarbes ou dans toute autre ville d'Occitanie, et que votre radiothérapie a lieu à Toulouse, ce trajet quotidien longue distance peut être remboursé par la CPAM. Votre oncologue précisera sur la PMT l'absence de ce service dans votre département.</p>

<blockquote>
<p>Contactez-nous au <strong>07 72 33 98 92</strong> avec la date de début de votre protocole de radiothérapie. Nous organisons votre planning complet en une conversation.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-pmr-mobilite-reduite-toulouse-cpam",
    title: "Taxi PMR & Mobilité Réduite à Toulouse : Transport Adapté Conventionné CPAM",
    description: "Transport adapté pour les personnes à mobilité réduite (PMR) à Toulouse. Aide à la montée et descente, véhicule SUV spacieux, conventionné CPAM. Dialyse, consultations, aéroport.",
    date: "2025-06-05",
    category: "Spécialités" as const,
    readTime: "5 min",
    content: `
<p>Se déplacer avec une mobilité réduite à Toulouse — que ce soit après une chirurgie, avec un handicap permanent, ou en raison d'une pathologie chronique — nécessite un transport adapté. Pas juste un taxi avec de la place, mais un service qui comprend vos contraintes et vous accompagne réellement.</p>

<h2>Ce que nous proposons pour les patients PMR</h2>
<ul>
<li><strong>Aide à la montée et à la descente</strong> — nous venons vous chercher à votre porte et vous aidons à vous installer confortablement</li>
<li><strong>Véhicule SUV spacieux (Peugeot 5008 GT)</strong> — accès facilité, sièges surélevés, espace généreux pour vos équipements (canne, déambulateur, fauteuil roulant pliant)</li>
<li><strong>Temps d'embarquement adapté</strong> — nous n'avons jamais de "prochain client" qui presse</li>
<li><strong>Connaissance des accès PMR des hôpitaux</strong> — nous savons où déposer les patients à mobilité réduite au plus près des entrées prioritaires</li>
</ul>

<h2>Situations pour lesquelles nous intervenons</h2>
<ul>
<li>Personnes âgées avec difficultés à la marche</li>
<li>Patients post-opératoires (hanche, genou, rachis)</li>
<li>Patients avec fauteuil roulant pliant ou déambulateur</li>
<li>Personnes souffrant de pathologies neurologiques (Parkinson, SEP)</li>
<li>Insuffisants cardiaques ou respiratoires nécessitant une aide</li>
</ul>
<p>Nous ne sommes pas équipés pour les fauteuils roulants électriques ou les fauteuils non pliables — dans ces cas, une ambulance VSL adaptée est nécessaire. Appelez-nous pour évaluer ensemble ce dont vous avez besoin.</p>

<h2>Remboursement CPAM pour les patients PMR</h2>
<p>Si votre mobilité réduite est liée à une ALD reconnue, le transport médical est remboursable. Le médecin traitant précise sur la PMT que votre état ne vous permet pas d'utiliser les transports en commun — ce qui est généralement le cas pour les patients PMR en traitement régulier.</p>

<h2>Au-delà du médical : aéroport, gare, événements</h2>
<p>Nous assurons également les courses privées pour les personnes à mobilité réduite : transfert aéroport Toulouse-Blagnac, gare Matabiau, rendez-vous familiaux. Ces courses ne sont pas remboursées par la CPAM mais offrent le même niveau de soin et d'assistance.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour nous expliquer votre situation. Nous évaluerons ensemble si notre véhicule est adapté à vos besoins et comment organiser votre transport.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-consultation-specialiste-toulouse-cpam-remboursement",
    title: "Taxi pour Consultation Spécialisée à Toulouse : Remboursement CPAM & Réservation",
    description: "Transport médical VSL conventionné pour vos consultations de spécialistes à Toulouse (cardiologue, neurologue, oncologue...). Remboursement CPAM si ALD, tiers payant intégral, réservation simple.",
    date: "2025-06-08",
    category: "Spécialités" as const,
    readTime: "5 min",
    content: `
<p>Vous avez une consultation chez un spécialiste à Toulouse — cardiologue, neurologue, oncologue, rhumatologue, néphrologue — et vous vous demandez si votre transport peut être remboursé. La réponse dépend de votre situation médicale, mais pour les patients en ALD, c'est généralement oui.</p>

<h2>Quand la consultation spécialisée ouvre droit au transport remboursé</h2>
<p>Le remboursement s'applique si votre consultation est en lien direct avec votre ALD reconnue. Exemples :</p>
<ul>
<li>Consultation cardiologique pour un patient avec ALD "Insuffisance cardiaque grave" (ALD 5)</li>
<li>Suivi neurologique pour un patient avec ALD "Sclérose en plaques" (ALD 25)</li>
<li>Consultation oncologique pour un patient en ALD 30 (cancer)</li>
<li>Consultation néphrologue pour un patient dialysé (ALD 2)</li>
</ul>
<p>Si votre consultation n'est pas liée à votre ALD, le remboursement peut quand même s'appliquer si votre état de santé ne vous permet pas d'utiliser les transports en commun — mais dans ce cas, la prise en charge sera partielle (65%).</p>

<h2>Les spécialités que nous desservons régulièrement à Toulouse</h2>
<ul>
<li><strong>Cardiologie</strong> — CHU Rangueil, Clinique Pasteur, Clinique de l'Union</li>
<li><strong>Neurologie / Neurochirurgie</strong> — CHU Purpan</li>
<li><strong>Oncologie médicale</strong> — Oncopole Claudius Regaud, Clinique Croix du Sud</li>
<li><strong>Néphrologie</strong> — CHU Rangueil</li>
<li><strong>Rhumatologie</strong> — CHU Purpan</li>
<li><strong>Pneumologie / ORL</strong> — Hôpital Larrey</li>
<li><strong>Endocrinologie</strong> — CHU Rangueil</li>
</ul>

<h2>Ce qui se passe le jour de votre consultation</h2>
<ol>
<li>Nous passons vous chercher à l'heure convenue à votre domicile</li>
<li>Nous vous déposons à l'entrée de votre service (sans que vous ayez à chercher)</li>
<li>Si votre consultation prend du retard, nous attendons — sans frais supplémentaires pour les délais raisonnables</li>
<li>Nous vous ramenons à votre domicile en fin de consultation</li>
</ol>

<h2>Pour les patients résidant hors de Toulouse</h2>
<p>Si votre spécialiste se trouve uniquement à Toulouse (ce qui est fréquent pour certaines spécialités de recours), votre trajet depuis Ariège, Tarn, Hautes-Pyrénées ou Gers est remboursable. Votre médecin précise sur la PMT l'absence de ce spécialiste dans votre département.</p>

<blockquote>
<p>Pour réserver votre transport vers une consultation spécialisée à Toulouse, appelez-nous au <strong>07 72 33 98 92</strong>. Précisez l'hôpital, le service et l'heure du rendez-vous.</p>
</blockquote>
`,
  },
  {
    slug: "taxi-sortie-hospitalisation-toulouse-cpam",
    title: "Taxi VSL Sortie d'Hospitalisation à Toulouse : Retour à Domicile Remboursé CPAM",
    description: "Transport médical remboursé pour votre sortie d'hospitalisation à Toulouse. Taxi VSL conventionné CPAM, aide aux bagages, retour confortable. Disponible 7j/7, toute heure.",
    date: "2025-06-10",
    category: "Spécialités" as const,
    readTime: "4 min",
    content: `
<p>Vous sortez de l'hôpital ou d'une clinique de Toulouse et devez rentrer chez vous. Après une opération, une hospitalisation de plusieurs jours ou une procédure médicale, ce trajet retour mérite d'être préparé correctement — et dans de nombreux cas, il est remboursé par la CPAM.</p>

<h2>Quand le transport de sortie d'hospitalisation est remboursé</h2>
<p>Toute hospitalisation complète (au moins une nuit) ouvre droit au remboursement du transport de retour à domicile. Cela inclut :</p>
<ul>
<li>Chirurgie avec séjour hospitalier</li>
<li>Hospitalisation médicale (quelle qu'en soit la durée si au moins une nuit)</li>
<li>Accouchement</li>
<li>Hospitalisation psychiatrique</li>
</ul>
<p>Le médecin de l'hôpital établit la PMT lors de votre sortie. Si vous l'avez oublié, demandez-la à l'infirmière ou au médecin avant de quitter le service.</p>

<h2>Ce que nous assurons lors de votre sortie</h2>
<ul>
<li><strong>Ponctualité</strong> — nous attendons votre appel ou nous nous présentons à l'heure de sortie convenue</li>
<li><strong>Aide aux bagages</strong> — effets personnels, documents, équipements médicaux de retour</li>
<li><strong>Conduite douce</strong> — essentielle après une opération ou une longue hospitalisation</li>
<li><strong>Accompagnement jusqu'à votre domicile</strong> — y compris aide à monter les escaliers si besoin</li>
</ul>

<h2>Pour les sorties imprévues ou en urgence</h2>
<p>Les sorties d'hospitalisation sont souvent annoncées tardivement — parfois le matin pour l'après-midi même. Nous faisons de notre mieux pour répondre à ces demandes de dernière minute. Appelez-nous dès que vous connaissez l'heure de sortie.</p>
<p>Disponible 7j/7, y compris les week-ends et jours fériés.</p>

<h2>Les hôpitaux de Toulouse que nous desservons</h2>
<ul>
<li>CHU Purpan (tous services)</li>
<li>Hôpital Rangueil-Larrey</li>
<li>Oncopole Claudius Regaud</li>
<li>Clinique Pasteur, Clinique de l'Union, Clinique des Cèdres, Clinique Croix du Sud</li>
<li>Clinique d'Occitanie (Muret)</li>
<li>Et tous les établissements de santé de l'agglomération toulousaine</li>
</ul>

<h2>Si vous rentrez dans un autre département d'Occitanie</h2>
<p>Même si votre domicile est en Ariège, dans le Tarn ou dans les Hautes-Pyrénées, votre sortie d'hospitalisation depuis Toulouse est éligible au remboursement CPAM. C'est un droit — assurez-vous simplement que la PMT est bien établie avant de partir.</p>

<blockquote>
<p>Vous prévoyez une sortie d'hospitalisation prochaine ? Appelez-nous au <strong>07 72 33 98 92</strong> dès que vous connaissez la date. Nous organisons votre retour à domicile sereinement.</p>
</blockquote>
`,
  },
];

// ─── EXPORT FINAL ─────────────────────────────────────────────────────────────
export const articles: Article[] = [
  ...detailedArticles,
  ...seoArticles,
  ...cityArticles,
  ...regionalArticles,
  ...hospitalArticles,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((a) => a.category === category);
}
