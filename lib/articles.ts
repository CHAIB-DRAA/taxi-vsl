// ─── TYPES ────────────────────────────────────────────────────────────────────
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Transport Médical" | "Courses Privées" | "Hôpitaux" | "Trajets" | "Guide" | "Villes";
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

// ─── EXPORT FINAL ─────────────────────────────────────────────────────────────
export const articles: Article[] = [
  ...detailedArticles,
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
