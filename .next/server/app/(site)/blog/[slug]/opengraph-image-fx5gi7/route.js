(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{2067:e=>{"use strict";e.exports=require("node:async_hooks")},6195:e=>{"use strict";e.exports=require("node:buffer")},1542:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ComponentMod:()=>j,default:()=>H});var o={};n.r(o),n.d(o,{contentType:()=>b,default:()=>C,generateStaticParams:()=>q,runtime:()=>h,size:()=>f});var s={};n.r(s),n.d(s,{GET:()=>y,contentType:()=>b,generateStaticParams:()=>q,runtime:()=>h,size:()=>f});var a={};n.r(a),n.d(a,{originalPathname:()=>D,patchFetch:()=>N,requestAsyncStorage:()=>z,routeModule:()=>M,serverHooks:()=>V,staticGenerationAsyncStorage:()=>S});var i=n(8842),r=n(2561),u=n(4828),l=n(6631),p=n(3554),d=n(8977),c=n(1146);function x(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}let m=[{name:"Muret",zone:"sud",distToulouse:22,purpan:25,rangueil:18,oncopole:18,aeroport:35,detail:"Sous-pr\xe9fecture de Haute-Garonne et ville la plus peupl\xe9e du d\xe9partement apr\xe8s Toulouse avec plus de 25 000 habitants"},{name:"Colomiers",zone:"ouest",distToulouse:8,purpan:12,rangueil:20,oncopole:20,aeroport:5,detail:"Deuxi\xe8me ville de Haute-Garonne, porte d'entr\xe9e de la zone a\xe9ronautique d'Airbus et de l'A380"},{name:"Tournefeuille",zone:"ouest",distToulouse:7,purpan:14,rangueil:18,oncopole:18,aeroport:10,detail:"Commune r\xe9sidentielle de l'ouest toulousain en forte croissance, r\xe9put\xe9e pour sa qualit\xe9 de vie"},{name:"Blagnac",zone:"nordouest",distToulouse:8,purpan:10,rangueil:22,oncopole:22,aeroport:2,detail:"Ville de l'industrie a\xe9ronautique, si\xe8ge social d'Airbus et commune riveraine de l'a\xe9roport international Toulouse-Blagnac"},{name:"Plaisance-du-Touch",zone:"ouest",distToulouse:12,purpan:15,rangueil:22,oncopole:20,aeroport:12,detail:"Commune r\xe9sidentielle de l'ouest toulousain, caract\xe9ris\xe9e par ses lotissements pavillonnaires et sa vie de quartier apais\xe9e"},{name:"Cugnaux",zone:"sudouest",distToulouse:12,purpan:20,rangueil:16,oncopole:15,aeroport:20,detail:"Commune du sud-ouest toulousain en pleine expansion, bordant la for\xeat de Bouconne"},{name:"Balma",zone:"est",distToulouse:7,purpan:18,rangueil:10,oncopole:20,aeroport:22,detail:"Ville r\xe9sidentielle de l'est toulousain, tr\xe8s appr\xe9ci\xe9e des familles pour sa proximit\xe9 avec le centre-ville et ses espaces verts"},{name:"Ramonville-Saint-Agne",zone:"sudest",distToulouse:9,purpan:20,rangueil:8,oncopole:12,aeroport:25,detail:"Terminus de la ligne B du m\xe9tro, Ramonville est une commune du sud-est de Toulouse r\xe9put\xe9e pour son port de plaisance sur le Canal du Midi"},{name:"Castanet-Tolosan",zone:"sudest",distToulouse:11,purpan:22,rangueil:10,oncopole:18,aeroport:28,detail:"Commune dynamique du sud-est de l'agglom\xe9ration toulousaine, avec ses zones pavillonnaires et son vignoble r\xe9put\xe9"},{name:"Saint-Gaudens",zone:"periurbain",distToulouse:75,purpan:80,rangueil:75,oncopole:78,aeroport:88,detail:"Sous-pr\xe9fecture de Haute-Garonne et ville-centre du Comminges, aux portes des Pyr\xe9n\xe9es"},{name:"Fonsorbes",zone:"ouest",distToulouse:16,purpan:18,rangueil:24,oncopole:22,aeroport:14,detail:"Commune r\xe9sidentielle de l'ouest toulousain, dont la population a doubl\xe9 en 20 ans gr\xe2ce \xe0 son cadre de vie rural \xe0 deux pas de la ville"},{name:"L'Union",zone:"nordest",distToulouse:8,purpan:16,rangueil:16,oncopole:25,aeroport:18,detail:"Commune r\xe9sidentielle du nord-est de Toulouse, appr\xe9ci\xe9e pour sa tranquillit\xe9 et sa desserte par le r\xe9seau Tiss\xe9o"},{name:"Saint-Orens-de-Gameville",zone:"sudest",distToulouse:9,purpan:20,rangueil:10,oncopole:18,aeroport:24,detail:"Commune r\xe9sidentielle du sud-est toulousain, l'une des plus dynamiques de l'agglom\xe9ration avec une forte progression d\xe9mographique"},{name:"Saint-Jean",zone:"nordest",distToulouse:10,purpan:16,rangueil:18,oncopole:26,aeroport:18,detail:"Commune du nord-est de l'agglom\xe9ration toulousaine, connue pour ses zones pavillonnaires calmes et sa proximit\xe9 avec les axes autoroutiers"},{name:"Castelginest",zone:"nord",distToulouse:9,purpan:15,rangueil:20,oncopole:26,aeroport:16,detail:"Commune du nord de Toulouse, caract\xe9ris\xe9e par son m\xe9lange de zones r\xe9sidentielles et d'espaces naturels pr\xe9serv\xe9s"},{name:"Portet-sur-Garonne",zone:"sud",distToulouse:9,purpan:16,rangueil:12,oncopole:12,aeroport:22,detail:"Commune de la premi\xe8re couronne sud de Toulouse, dot\xe9e d'un important p\xf4le commercial et d'une situation g\xe9ographique strat\xe9gique au carrefour de plusieurs axes routiers"},{name:"Auterive",zone:"periurbain",distToulouse:34,purpan:40,rangueil:32,oncopole:35,aeroport:48,detail:"Commune de la vall\xe9e de l'Ari\xe8ge, \xe0 mi-chemin entre Toulouse et Pamiers, porte du Volvestre"},{name:"Revel",zone:"periurbain",distToulouse:45,purpan:50,rangueil:45,oncopole:52,aeroport:60,detail:"Bastide m\xe9di\xe9vale du Lauragais, r\xe9put\xe9e pour sa halle centrale et son lac Saint-Ferr\xe9ol, premier grand barrage d'Europe construit au XVIIe si\xe8cle"},{name:"Saint-Lys",zone:"sudouest",distToulouse:22,purpan:25,rangueil:28,oncopole:25,aeroport:25,detail:"Commune du sud-ouest de Haute-Garonne, connu pour ses industries \xe9lectroniques et son parc de loisirs naturels"},{name:"Leguevin",zone:"ouest",distToulouse:18,purpan:22,rangueil:28,oncopole:26,aeroport:15,detail:"Commune de l'ouest toulousain, carrefour entre l'agglom\xe9ration et le Sav\xe8s, dot\xe9e d'une population croissante attir\xe9e par son cadre rural"},{name:"Frouzins",zone:"sudouest",distToulouse:13,purpan:18,rangueil:16,oncopole:14,aeroport:22,detail:"Commune du sud-ouest toulousain, adoss\xe9e au coteau de Pech-David, qui a su pr\xe9server son caract\xe8re de village malgr\xe9 l'expansion urbaine"},{name:"Grenade",zone:"nord",distToulouse:22,purpan:28,rangueil:32,oncopole:32,aeroport:20,detail:"Bastide du XIIIe si\xe8cle au bord de la Garonne, chef-lieu de canton du nord de la Haute-Garonne au riche patrimoine architectural"},{name:"Aussonne",zone:"nordouest",distToulouse:14,purpan:16,rangueil:26,oncopole:26,aeroport:10,detail:"Commune du nord-ouest de l'agglom\xe9ration, connue pour ses zones d'activit\xe9s et ses lotissements r\xe9cents qui attirent de jeunes familles"},{name:"Cornebarrieu",zone:"nordouest",distToulouse:10,purpan:14,rangueil:22,oncopole:22,aeroport:6,detail:"Commune riveraine de l'a\xe9roport Toulouse-Blagnac, avec ses nombreuses zones d'activit\xe9s a\xe9ronautiques et ses espaces naturels au bord de la Garonne"},{name:"Launaguet",zone:"nord",distToulouse:7,purpan:12,rangueil:18,oncopole:22,aeroport:15,detail:"Commune de la premi\xe8re couronne nord de Toulouse, en pleine mutation urbaine tout en conservant des espaces mara\xeechers"},{name:"Aucamville",zone:"nord",distToulouse:7,purpan:12,rangueil:19,oncopole:23,aeroport:15,detail:"Commune r\xe9sidentielle du nord de Toulouse, appr\xe9ci\xe9e pour sa tranquillit\xe9 et sa liaison directe avec le centre-ville par les transports en commun"},{name:"Fronton",zone:"nord",distToulouse:30,purpan:35,rangueil:40,oncopole:44,aeroport:30,detail:"Commune viticole r\xe9put\xe9e du nord toulousain, c\xe9l\xe8bre pour son AOC Fronton et sa proximit\xe9 avec le Tarn et Garonne"},{name:"Villemur-sur-Tarn",zone:"nordest",distToulouse:38,purpan:42,rangueil:42,oncopole:48,aeroport:38,detail:"Petite ville du nord-est de Haute-Garonne au bord du Tarn, ancienne cit\xe9 huguenote r\xe9put\xe9e pour ses falaises et son ch\xe2teau"},{name:"Beauzelle",zone:"nordouest",distToulouse:8,purpan:12,rangueil:22,oncopole:22,aeroport:6,detail:"Commune du nord-ouest de Toulouse, tr\xe8s appr\xe9ci\xe9e pour son cadre r\xe9sidentiel calme entre Garonne et Aussonnelle"},{name:"Brugui\xe8res",zone:"nord",distToulouse:10,purpan:16,rangueil:22,oncopole:26,aeroport:18,detail:"Commune du nord de l'agglom\xe9ration toulousaine, caract\xe9ris\xe9e par ses nouvelles zones r\xe9sidentielles et son dynamisme commercial"},{name:"Fenouillet",zone:"nord",distToulouse:9,purpan:14,rangueil:20,oncopole:24,aeroport:16,detail:"Commune industrielle et r\xe9sidentielle du nord de Toulouse, avec notamment la pr\xe9sence de Leroy Merlin et de nombreuses zones d'activit\xe9s"},{name:"Saint-Jory",zone:"nord",distToulouse:17,purpan:22,rangueil:28,oncopole:32,aeroport:22,detail:"Commune du nord de la Haute-Garonne au bord du Canal de Garonne, r\xe9put\xe9e pour ses vergers et ses espaces naturels pr\xe9serv\xe9s"},{name:"Gratentour",zone:"nord",distToulouse:14,purpan:18,rangueil:24,oncopole:28,aeroport:20,detail:"Village du nord toulousain qui a su conserver son caract\xe8re rural tout en accueillant une population croissante venue de l'agglom\xe9ration"},{name:"Montastruc-la-Conseill\xe8re",zone:"nordest",distToulouse:20,purpan:25,rangueil:22,oncopole:30,aeroport:28,detail:"Bourg du Frontonnais, carrefour entre Toulouse, Montauban et Albi, dont le march\xe9 hebdomadaire anime encore la place centrale depuis des si\xe8cles"},{name:"Verfeil",zone:"est",distToulouse:28,purpan:32,rangueil:28,oncopole:35,aeroport:38,detail:"Commune du Lauragais oriental, ancienne ville cathare au riche patrimoine historique, aux portes du d\xe9partement du Tarn"},{name:"Carbonne",zone:"sud",distToulouse:36,purpan:42,rangueil:38,oncopole:38,aeroport:45,detail:"Petite ville du pi\xe9mont pyr\xe9n\xe9en, au bord de la Garonne, entre Toulouse et Saint-Gaudens, id\xe9alement situ\xe9e pour les s\xe9jours en montagne"},{name:"Caz\xe8res",zone:"sudouest",distToulouse:50,purpan:56,rangueil:52,oncopole:52,aeroport:58,detail:"Commune de la vall\xe9e de la Garonne en Comminges, ancien port fluvial historique \xe0 la limite entre plaine et Pyr\xe9n\xe9es"},{name:"Rieumes",zone:"sudouest",distToulouse:30,purpan:34,rangueil:38,oncopole:36,aeroport:32,detail:"Commune rurale du Sav\xe8s, chef-lieu de canton dans l'ouest de la Haute-Garonne, connue pour son march\xe9 agricole traditionnel"},{name:"Seysses",zone:"sudouest",distToulouse:15,purpan:22,rangueil:18,oncopole:16,aeroport:24,detail:"Commune du sud-ouest de l'agglom\xe9ration toulousaine, connue notamment pour son centre p\xe9nitentiaire et son d\xe9veloppement r\xe9sidentiel r\xe9cent"},{name:"Eaunes",zone:"sud",distToulouse:18,purpan:24,rangueil:20,oncopole:20,aeroport:30,detail:"Commune de la vall\xe9e de l'Ari\xe8ge au sud de Toulouse, village paisible dont la population a tripl\xe9 en trente ans avec l'arriv\xe9e de familles toulousaines"},{name:"Labarthe-sur-L\xe8ze",zone:"sud",distToulouse:16,purpan:22,rangueil:18,oncopole:18,aeroport:28,detail:"Commune du sud toulousain au bord de la L\xe8ze, connue pour son ch\xe2teau et ses espaces naturels au cœur du triangle Toulouse-Muret-Auterive"},{name:"Pins-Justaret",zone:"sud",distToulouse:16,purpan:22,rangueil:18,oncopole:18,aeroport:28,detail:"Petit village r\xe9sidentiel du sud de Toulouse, entre Muret et Portet-sur-Garonne, appr\xe9ci\xe9 pour sa tranquillit\xe9 et sa v\xe9g\xe9tation"},{name:"Roques",zone:"sudouest",distToulouse:14,purpan:20,rangueil:16,oncopole:16,aeroport:22,detail:"Commune du sud-ouest toulousain, carrefour entre les grands axes de la zone industrielle de l'agglom\xe9ration muretaine"},{name:"Saubens",zone:"sud",distToulouse:18,purpan:24,rangueil:20,oncopole:20,aeroport:30,detail:"Village rural du sud de la Haute-Garonne, dans le triangle Muret-Toulouse-Auterive, qui conserve son caract\xe8re agricole"},{name:"Mondonville",zone:"nordouest",distToulouse:16,purpan:18,rangueil:28,oncopole:28,aeroport:10,detail:"Commune du nord-ouest de l'agglom\xe9ration, \xe0 mi-chemin entre Toulouse et L'Isle-Jourdain, dont la population a fortement augment\xe9 ces derni\xe8res ann\xe9es"},{name:"Pibrac",zone:"ouest",distToulouse:12,purpan:15,rangueil:22,oncopole:21,aeroport:10,detail:"Commune de l'ouest toulousain connue pour son ch\xe2teau et le p\xe8lerinage \xe0 Sainte-Germaine, qui attire chaque ann\xe9e des milliers de fid\xe8les"},{name:"Brax",zone:"ouest",distToulouse:16,purpan:18,rangueil:26,oncopole:24,aeroport:13,detail:"Commune rurale de l'ouest toulousain, village tranquille entre L\xe9guevin et Colomiers, dont le d\xe9veloppement r\xe9sidentiel s'acc\xe9l\xe8re"},{name:"Lherm",zone:"sudouest",distToulouse:26,purpan:32,rangueil:28,oncopole:28,aeroport:38,detail:"Village du Volvestre, situ\xe9 entre Muret et Saint-Gaudens, aux portes du Comminges et \xe0 la lisi\xe8re du parc naturel r\xe9gional des Pyr\xe9n\xe9es ari\xe9geoises"},{name:"Lab\xe8ge",zone:"sudest",distToulouse:9,purpan:20,rangueil:8,oncopole:14,aeroport:24,detail:"Commune du sud-est toulousain abritant l'un des plus grands centres commerciaux du sud de la France, Lab\xe8ge-Village, et d'importantes zones d'activit\xe9s technologiques"},{name:"Escalquens",zone:"sudest",distToulouse:13,purpan:24,rangueil:12,oncopole:18,aeroport:28,detail:"Commune r\xe9sidentielle du Lauragais, en pleine expansion d\xe9mographique gr\xe2ce \xe0 sa proximit\xe9 avec Toulouse et son cadre de vie verdoyant"},{name:"Lanta",zone:"est",distToulouse:22,purpan:28,rangueil:20,oncopole:28,aeroport:34,detail:"Bourg du Lauragais oriental, commune rurale pr\xe9servant son caract\xe8re villageois malgr\xe9 la pression d\xe9mographique de l'agglom\xe9ration toulousaine"},{name:"Caraman",zone:"est",distToulouse:30,purpan:36,rangueil:28,oncopole:36,aeroport:42,detail:"Bastide m\xe9di\xe9vale du Lauragais, chef-lieu de canton \xe0 l'est de Toulouse, connue pour son march\xe9 hebdomadaire et son architecture traditionnelle"},{name:"Nailloux",zone:"sud",distToulouse:32,purpan:38,rangueil:30,oncopole:32,aeroport:45,detail:"Commune du sud de la Haute-Garonne, connue pour son village outlets et sa situation g\xe9ographique entre Toulouse et Pamiers, \xe0 la porte du pays lauragais"},{name:"Villefranche-de-Lauragais",zone:"sudest",distToulouse:38,purpan:44,rangueil:36,oncopole:42,aeroport:52,detail:"Sous-pr\xe9fecture de Haute-Garonne et capitale historique du pays lauragais, Villefranche-de-Lauragais est une bastide m\xe9di\xe9vale au riche patrimoine architectural"},{name:"Montgiscard",zone:"sudest",distToulouse:20,purpan:30,rangueil:18,oncopole:22,aeroport:34,detail:"Commune du Lauragais, au bord du Canal du Midi et \xe0 proximit\xe9 du lac de la Th\xe9sauque, offrant un cadre de vie apais\xe9 \xe0 deux pas de Toulouse"},{name:"L'Isle-Jourdain",zone:"ouest",distToulouse:35,purpan:38,rangueil:46,oncopole:44,aeroport:28,detail:"Principale ville du Sav\xe8s dans le Gers, L'Isle-Jourdain est une cit\xe9 \xe0 mi-chemin entre Toulouse et Auch, dot\xe9e d'une zone commerciale importante et d'un lac de loisirs"},{name:"Cintegabelle",zone:"sud",distToulouse:38,purpan:44,rangueil:36,oncopole:38,aeroport:52,detail:"Commune de la vall\xe9e de l'Ari\xe8ge, entre Toulouse et Pamiers, carrefour rural o\xf9 la plaine de Haute-Garonne laisse place aux premi\xe8res collines ari\xe9geoises"},{name:"Rieux-Volvestre",zone:"sudouest",distToulouse:48,purpan:55,rangueil:50,oncopole:50,aeroport:60,detail:"Ancienne cit\xe9 \xe9piscopale du Volvestre, Rieux-Volvestre conserve sa cath\xe9drale gothique et ses fortifications m\xe9di\xe9vales au bord de la Garonne"}].map(e=>({slug:`taxi-conventionne-${x(e.name)}`,title:`Taxi Conventionn\xe9 \xe0 ${e.name} : VSL CPAM & Courses Priv\xe9es`,description:`Taxi VSL conventionn\xe9 CPAM depuis ${e.name} vers les h\xf4pitaux de Toulouse. Tiers payant int\xe9gral 0€ d'avance. Dialyse, chimioth\xe9rapie, a\xe9roport Blagnac. Disponible 24h/24.`,date:"2025-03-01",category:"Villes",readTime:"4 min",content:function(e){let t={nord:"au nord de l'agglom\xe9ration toulousaine",nordest:"au nord-est de Toulouse",est:"\xe0 l'est de l'agglom\xe9ration",sudest:"au sud-est de Toulouse",sud:"au sud de l'agglom\xe9ration toulousaine",sudouest:"au sud-ouest de Toulouse",ouest:"\xe0 l'ouest de l'agglom\xe9ration",nordouest:"au nord-ouest de Toulouse",periurbain:"dans la couronne p\xe9riurbaine de Haute-Garonne"}[e.zone]||"en Haute-Garonne",n=e.rangueil<=e.purpan&&e.rangueil<=e.oncopole?"l'H\xf4pital Rangueil":e.oncopole<=e.purpan?"l'Oncopole Claudius Regaud":"le CHU Purpan";return`
<p>${e.detail}. Depuis ${e.name}, situ\xe9e ${t} \xe0 environ ${e.distToulouse} km de la capitale occitane, de nombreux habitants ont besoin de rejoindre r\xe9guli\xe8rement les grands h\xf4pitaux toulousains — pour une chimioth\xe9rapie, des s\xe9ances de dialyse, un suivi cardiologique ou une consultation sp\xe9cialis\xe9e que les \xe9tablissements de proximit\xe9 ne proposent pas.</p>

<h2>Transport m\xe9dical conventionn\xe9 CPAM depuis ${e.name}</h2>
<p>En tant que taxi VSL agr\xe9\xe9 par la CPAM de la Haute-Garonne, nous assurons quotidiennement les transports m\xe9dicaux depuis ${e.name} vers tous les h\xf4pitaux et cliniques de Toulouse. Si vous \xeates en Affection de Longue Dur\xe9e (ALD) \xe0 100%, <strong>vous ne payez rien</strong> : le tiers payant int\xe9gral s'applique, nous facturons directement l'Assurance Maladie.</p>

<p>Distances depuis ${e.name} vers les principaux \xe9tablissements de soins :</p>
<ul>
<li><strong>CHU Purpan</strong> (Neurologie, P\xe9diatrie, Transplantation) — environ ${e.purpan} km</li>
<li><strong>H\xf4pital Rangueil</strong> (Cardiologie, Dialyse, Greffe r\xe9nale) — environ ${e.rangueil} km</li>
<li><strong>Oncopole Claudius Regaud</strong> (Chimioth\xe9rapie, Radioth\xe9rapie) — environ ${e.oncopole} km</li>
<li><strong>Clinique Pasteur, Clinique de l'Union, Clinique des C\xe8dres</strong> et toutes les cliniques priv\xe9es de Toulouse — sur demande</li>
</ul>

<p>L'\xe9tablissement le plus proche de ${e.name} est ${n}. Mais quelle que soit votre destination, nous connaissons chaque h\xf4pital, chaque pavillon, chaque acc\xe8s prioritaire. Vous n'avez pas \xe0 chercher votre chemin le jour de votre rendez-vous.</p>

<h2>Dialyse, chimioth\xe9rapie et soins r\xe9guliers depuis ${e.name}</h2>
<p>Pour les patients qui se rendent \xe0 Toulouse plusieurs fois par semaine — dialys\xe9s trois fois par semaine, patients en cours de chimioth\xe9rapie — nous mettons en place un planning hebdomadaire fixe sur plusieurs mois. <strong>Une seule r\xe9servation suffit</strong> : nous sommes l\xe0 \xe0 chaque s\xe9ance, sans que vous ayez \xe0 nous rappeler.</p>

<p>Apr\xe8s une dialyse ou une s\xe9ance de chimio, la fatigue peut \xeatre importante. Nous adaptons notre conduite \xe0 votre \xe9tat : pas de freinages brusques, temp\xe9rature confortable dans le v\xe9hicule, conduite douce. Votre confort au retour est aussi important que la ponctualit\xe9 \xe0 l'aller.</p>

<h2>Documents n\xe9cessaires pour le remboursement CPAM</h2>
<p>Pour b\xe9n\xe9ficier du tiers payant int\xe9gral depuis ${e.name}, vous avez besoin de deux documents simples :</p>
<ul>
<li><strong>La Prescription M\xe9dicale de Transport (PMT)</strong> — sign\xe9e et dat\xe9e par votre m\xe9decin <em>avant</em> le jour du trajet</li>
<li><strong>Votre carte Vitale \xe0 jour</strong> — pour la t\xe9l\xe9transmission directe \xe0 la CPAM</li>
</ul>
<p>Nous g\xe9rons toute la facturation avec la CPAM \xe0 votre place. Aucune d\xe9marche, aucune avance, aucun formulaire \xe0 remplir.</p>

<h2>Courses priv\xe9es depuis ${e.name}</h2>
<p>En dehors du transport m\xe9dical, nous assurons \xe9galement les courses priv\xe9es depuis ${e.name} :</p>
<ul>
<li><strong>A\xe9roport Toulouse-Blagnac</strong> — environ ${e.aeroport} km, disponible d\xe8s 4h du matin, tarif fixe annonc\xe9 \xe0 la r\xe9servation</li>
<li><strong>Gare Matabiau</strong> — environ ${e.distToulouse+4} km, aide aux bagages, suivi des retards SNCF</li>
<li><strong>Mariages, \xe9v\xe9nements, s\xe9minaires professionnels</strong> — devis personnalis\xe9 sur demande</li>
</ul>

<blockquote>
<p>Pour r\xe9server votre transport m\xe9dical ou votre course priv\xe9e depuis ${e.name}, appelez-nous au <strong>07 72 33 98 92</strong> ou envoyez un SMS. Nous confirmons votre r\xe9servation dans les meilleurs d\xe9lais — m\xeame la veille pour le lendemain matin.</p>
</blockquote>
`}(e)})),g=[{slug:"guide-taxi-vsl-conventionne-cpam-toulouse",title:"Taxi VSL Conventionn\xe9 CPAM \xe0 Toulouse : Le Guide Complet 2025",description:"Tout ce qu'il faut savoir sur le transport m\xe9dical rembours\xe9 par la S\xe9curit\xe9 Sociale \xe0 Toulouse : conditions, documents, r\xe9servation et tiers payant expliqu\xe9s simplement.",date:"2025-01-15",category:"Guide",readTime:"8 min",content:`
<p>Votre m\xe9decin vous a dit que vous pouviez prendre un "taxi rembours\xe9", mais vous ne savez pas trop par o\xf9 commencer. C'est normal — les d\xe9marches administratives autour du transport m\xe9dical peuvent sembler complexes au premier abord. Ce guide vous explique tout, \xe9tape par \xe9tape, en langage simple.</p>

<h2>Qu'est-ce qu'un taxi conventionn\xe9 CPAM ?</h2>
<p>Un taxi conventionn\xe9 — que l'on appelle aussi VSL (V\xe9hicule Sanitaire L\xe9ger) dans le jargon administratif — est un taxi qui a pass\xe9 un agr\xe9ment sp\xe9cifique avec l'Assurance Maladie. Cela signifie que son chauffeur a suivi une formation aux soins de base, que son v\xe9hicule r\xe9pond \xe0 des normes de confort et d'hygi\xe8ne, et surtout que ses tarifs sont r\xe9gul\xe9s par la S\xe9curit\xe9 Sociale.</p>
<p>La diff\xe9rence avec une ambulance est importante : l'ambulance est r\xe9serv\xe9e aux patients qui ne peuvent pas voyager en position assise (\xe9tat grave, perfusion continue, surveillance m\xe9dicale constante). Le taxi VSL est pour les patients qui peuvent se d\xe9placer par leurs propres moyens, mais qui ont besoin d'un v\xe9hicule adapt\xe9 pour rejoindre leurs soins.</p>

<h2>Qui peut b\xe9n\xe9ficier du remboursement ?</h2>
<ul>
<li><strong>Les Affections de Longue Dur\xe9e (ALD)</strong> — diab\xe8te, cancer, insuffisance r\xe9nale, pathologies cardiaques, scl\xe9rose en plaques, etc.</li>
<li><strong>La maternit\xe9</strong> — \xe0 partir du 5\xe8me mois de grossesse et jusqu'\xe0 12 jours apr\xe8s l'accouchement</li>
<li><strong>Les accidents du travail ou maladies professionnelles</strong></li>
<li><strong>Les hospitalisations compl\xe8tes</strong> (au moins une nuit)</li>
<li><strong>Les traitements r\xe9guliers et fr\xe9quents</strong> — chimioth\xe9rapie, dialyse, radioth\xe9rapie</li>
</ul>

<h2>La prescription m\xe9dicale de transport : le document cl\xe9</h2>
<p>Pour b\xe9n\xe9ficier du remboursement, votre m\xe9decin doit vous remettre une <strong>Prescription M\xe9dicale de Transport (PMT)</strong>, parfois appel\xe9e "bon de transport". Ce document est indispensable — sans lui, aucune prise en charge n'est possible.</p>
<p>La PMT doit mentionner votre nom, votre num\xe9ro de s\xe9curit\xe9 sociale, la destination, le motif m\xe9dical, le nombre d'allers-retours et la signature du m\xe9decin.</p>

<h2>Le tiers payant : comment \xe7a marche concr\xe8tement ?</h2>
<p>Si vous \xeates en ALD \xe0 100%, vous avez droit au tiers payant int\xe9gral. Cela signifie que vous ne d\xe9boursez pas un seul euro au chauffeur. Nous facturons directement la CPAM.</p>
<ol>
<li>Votre m\xe9decin vous remet la prescription m\xe9dicale de transport</li>
<li>Vous nous appelez pour r\xe9server votre transport</li>
<li>Le jour J, vous nous remettez la PMT sign\xe9e</li>
<li>Nous vous transportons confortablement jusqu'\xe0 votre destination</li>
<li>Nous g\xe9rons toute la facturation avec la CPAM directement</li>
<li>Vous n'avez rien \xe0 avancer, rien \xe0 rembourser</li>
</ol>

<h2>Comment r\xe9server votre taxi VSL avec nous ?</h2>
<p>Appelez-nous au <strong>07 72 33 98 92</strong>, de pr\xe9f\xe9rence la veille ou quelques jours avant votre rendez-vous. Pour les traitements r\xe9guliers (dialyse, chimioth\xe9rapie), nous mettons en place un planning sur plusieurs semaines. Vous n'avez alors qu'un seul appel \xe0 passer.</p>

<blockquote>
<p>Notre r\xf4le ne s'arr\xeate pas au volant. Nous vous aidons \xe0 monter dans le v\xe9hicule, nous vous accompagnons jusqu'\xe0 l'entr\xe9e du service si n\xe9cessaire, et nous attendons si votre rendez-vous prend du retard.</p>
</blockquote>
`},{slug:"tiers-payant-transport-medical-ald-toulouse",title:"Tiers Payant Transport M\xe9dical : Comment Ne Rien Avancer avec l'ALD",description:"Vous \xeates en Affection de Longue Dur\xe9e (ALD) ? D\xe9couvrez comment fonctionne le tiers payant \xe0 100% pour vos transports m\xe9dicaux \xe0 Toulouse, sans avancer un centime.",date:"2025-01-20",category:"Guide",readTime:"5 min",content:`
<p>L'une des questions les plus fr\xe9quentes que nous recevons est celle-ci : "Est-ce que je dois vraiment avancer l'argent ?" La r\xe9ponse, si vous avez une ALD reconnue \xe0 100%, est non. Voici tout ce qu'il faut savoir.</p>

<h2>Qu'est-ce que l'ALD et pourquoi c'est important ?</h2>
<p>Une Affection de Longue Dur\xe9e (ALD) est une maladie qui n\xe9cessite un traitement prolong\xe9 et co\xfbteux. La S\xe9curit\xe9 Sociale reconna\xeet 30 ALD principales, dont les plus courantes :</p>
<ul>
<li>Le cancer (toutes formes)</li>
<li>L'insuffisance r\xe9nale chronique (dialyse)</li>
<li>Le diab\xe8te insulino-d\xe9pendant ou non</li>
<li>Les maladies cardiovasculaires graves</li>
<li>La scl\xe9rose en plaques et la maladie de Parkinson</li>
</ul>

<h2>Le tiers payant total : z\xe9ro euro \xe0 avancer</h2>
<ol>
<li>Vous montez dans le taxi avec votre prescription m\xe9dicale de transport</li>
<li>Vous remettez ce document au chauffeur en fin de course</li>
<li>Le chauffeur t\xe9l\xe9transmet la facturation \xe0 la CPAM</li>
<li>La CPAM rembourse directement la compagnie de taxi</li>
<li>Votre participation personnelle est de 0€</li>
</ol>

<blockquote>
<p>Important : le tiers payant ne s'applique qu'aux trajets en lien direct avec votre ALD. Un transport pour un rhume ou une consultation sans lien avec votre ALD ne sera pas pris en charge.</p>
</blockquote>

<h2>Que se passe-t-il si vous n'avez pas d'ALD ?</h2>
<p>Sans ALD, le remboursement existe quand m\xeame mais il est partiel. La CPAM rembourse 65% du tarif r\xe9glement\xe9. Votre mutuelle peut compl\xe9ter. Si vous n'\xeates pas certain de votre situation, appelez votre CPAM ou consultez votre espace Ameli.</p>

<h2>Les tarifs r\xe9glement\xe9s</h2>
<p>Le tarif de transport m\xe9dical est r\xe9glement\xe9 par la CPAM. Il est calcul\xe9 en fonction de la distance parcourue, selon un bar\xe8me officiel. Occitanie M\xe9di Mobility applique strictement ces tarifs conventionn\xe9s — il n'y a pas de suppl\xe9ment cach\xe9.</p>
`},{slug:"documents-prescription-medicale-transport-cpam",title:"Quels Documents Apporter pour Votre Transport M\xe9dical Rembours\xe9 ?",description:"Liste compl\xe8te des documents \xe0 pr\xe9parer pour votre taxi conventionn\xe9 : prescription m\xe9dicale, carte Vitale, attestation CPAM. Ne manquez aucun rendez-vous par oubli.",date:"2025-02-01",category:"Guide",readTime:"4 min",content:`
<p>Un oubli de document peut compromettre le remboursement de votre transport. Voici la liste compl\xe8te de ce qu'il faut avoir avec vous le jour de votre rendez-vous.</p>

<h2>Document n\xb01 : La Prescription M\xe9dicale de Transport (PMT)</h2>
<p>C'est le document central, sans lequel rien n'est possible. Votre m\xe9decin doit vous remettre une ordonnance sp\xe9cifique — diff\xe9rente d'une ordonnance de m\xe9dicaments. V\xe9rifiez qu'elle est bien compl\xe8te : date, votre identit\xe9, votre num\xe9ro de s\xe9curit\xe9 sociale, le motif m\xe9dical, la destination, le mode de transport prescrit (taxi VSL) et la signature du m\xe9decin.</p>

<h2>Document n\xb02 : Votre carte Vitale</h2>
<p>Indispensable pour permettre la t\xe9l\xe9transmission directe \xe0 la CPAM. Assurez-vous qu'elle est \xe0 jour — si vous avez d\xe9m\xe9nag\xe9 ou chang\xe9 de situation r\xe9cemment, v\xe9rifiez qu'elle refl\xe8te bien votre situation actuelle.</p>

<h2>Document n\xb03 : Votre attestation de droits CPAM (optionnel mais recommand\xe9)</h2>
<p>T\xe9l\xe9chargeable sur votre espace Ameli, ce document prouve que vous \xeates bien affili\xe9 et pr\xe9cise votre taux de remboursement. En pratique, votre carte Vitale suffit, mais l'attestation peut \xeatre utile en cas de litige.</p>

<h2>R\xe8gle d'or : la date de la prescription</h2>
<p>La date de signature du m\xe9decin doit \xeatre <strong>ant\xe9rieure ou \xe9gale</strong> \xe0 la date du transport. Si le m\xe9decin date le bon apr\xe8s le trajet, le remboursement sera automatiquement refus\xe9 et la course sera \xe0 votre charge.</p>

<h2>Pour les ordonnances renouvelables</h2>
<p>Pour les soins r\xe9guliers (dialyse, chimio, kin\xe9), votre m\xe9decin peut \xe9tablir une prescription valable pour plusieurs mois. Le chauffeur conserve un volet \xe0 chaque trajet.</p>

<blockquote>
<p>Notre conseil : photographiez votre PMT d\xe8s que vous la recevez. Si l'original est perdu ou ab\xeem\xe9, vous pourrez montrer la photo \xe0 votre m\xe9decin pour qu'il en \xe9tablisse une nouvelle rapidement.</p>
</blockquote>
`},{slug:"taxi-vsl-hopital-purpan-chu",title:"Taxi VSL Conventionn\xe9 CHU Purpan Toulouse : Acc\xe8s & Prise en Charge",description:"Transport m\xe9dical rembours\xe9 vers le CHU Purpan de Toulouse. Acc\xe8s aux urgences, pavillons p\xe9diatriques, neurologie et traumatologie. Tiers payant, 0€ d'avance.",date:"2025-02-10",category:"H\xf4pitaux",readTime:"5 min",content:`
<p>Le CHU Purpan est le plus grand h\xf4pital de Toulouse. Avec ses dizaines de pavillons r\xe9partis sur un vaste campus, s'y rendre sans \xeatre accompagn\xe9 peut \xeatre source de stress — surtout lorsqu'on est malade ou fragilis\xe9. C'est l\xe0 que notre r\xf4le commence, bien avant l'arriv\xe9e \xe0 l'h\xf4pital.</p>

<h2>Pourquoi choisir un taxi VSL pour aller \xe0 Purpan ?</h2>
<p>Apr\xe8s des ann\xe9es \xe0 transporter des patients vers Purpan, nous connaissons le campus comme notre poche. Nous savons quelle entr\xe9e emprunter pour chaque pavillon, o\xf9 d\xe9poser nos passagers au plus pr\xe8s de l'accueil en cas de mobilit\xe9 r\xe9duite, et quels jours la circulation est plus fluide.</p>

<h2>Les principales sp\xe9cialit\xe9s de Purpan accessibles en VSL</h2>
<ul>
<li><strong>Neurologie et neurochirurgie</strong> — suivi post-AVC, \xe9pilepsie, pathologies d\xe9g\xe9n\xe9ratives</li>
<li><strong>P\xe9diatrie</strong> — consultations r\xe9guli\xe8res pour les enfants atteints de maladies chroniques</li>
<li><strong>Traumatologie</strong> — consultations de suivi apr\xe8s fracture ou chirurgie</li>
<li><strong>Transplantations</strong> — suivi post-greffe n\xe9cessitant des contr\xf4les fr\xe9quents</li>
</ul>

<h2>La prise en charge CPAM pour Purpan</h2>
<p>Le CHU Purpan \xe9tant un \xe9tablissement de soins conventionn\xe9, tous les transports vers ce site sont \xe9ligibles au remboursement CPAM, sous r\xe9serve d'une prescription m\xe9dicale de transport valide. Si vous \xeates en ALD, le tiers payant int\xe9gral s'applique.</p>

<blockquote>
<p>"Je fais ce trajet toutes les trois semaines depuis Pamiers. Au d\xe9but j'\xe9tais angoiss\xe9e — comment trouver le bon b\xe2timent ? Maintenant je sais que le chauffeur m'attend et conna\xeet exactement o\xf9 me d\xe9poser. C'est une tranquillit\xe9 d'esprit \xe9norme." — Sophie, patiente en neurologie</p>
</blockquote>
`},{slug:"taxi-vsl-hopital-rangueil",title:"Taxi VSL H\xf4pital Rangueil Toulouse : Cardiologie, Greffe & Dialyse",description:"Transport m\xe9dical conventionn\xe9 vers l'H\xf4pital Rangueil-Larrey de Toulouse. Cardiologie, transplantation r\xe9nale, dialyse. Prise en charge CPAM, tiers payant.",date:"2025-02-15",category:"H\xf4pitaux",readTime:"5 min",content:`
<p>L'H\xf4pital Rangueil est le second grand p\xf4le hospitalier du CHU de Toulouse, sp\xe9cialis\xe9 dans les pathologies cardiaques, les transplantations et les maladies r\xe9nales. Situ\xe9 au sud de Toulouse, il accueille quotidiennement des patients venus de toute la r\xe9gion Occitanie.</p>

<h2>Les patients de Rangueil ont besoin d'un transport de confiance</h2>
<p>Les patients de Rangueil ont souvent des profils particuliers : des greff\xe9s qui doivent surveiller leur immunod\xe9pression, des insuffisants cardiaques qui ne peuvent pas se fatiguer, des dialys\xe9s qui font ce trajet trois fois par semaine. Pour eux, le confort du v\xe9hicule et la fiabilit\xe9 du chauffeur ne sont pas un luxe — c'est une n\xe9cessit\xe9 m\xe9dicale.</p>

<h2>Sp\xe9cialit\xe9s de Rangueil accessibles en taxi VSL</h2>
<ul>
<li><strong>Cardiologie et chirurgie cardiovasculaire</strong></li>
<li><strong>Transplantation r\xe9nale</strong> — suivi post-greffe, contr\xf4les d'immunosuppresseurs</li>
<li><strong>Dialyse et n\xe9phrologie</strong> — s\xe9ances r\xe9guli\xe8res en centre d'h\xe9modialyse</li>
<li><strong>Endocrinologie</strong> — diab\xe8te compliqu\xe9, maladies thyro\xefdiennes</li>
<li><strong>Neurologie</strong> — \xe9pilepsie, scl\xe9rose en plaques</li>
</ul>

<h2>Le cas particulier des patients dialys\xe9s</h2>
<p>La dialyse impose un rythme strict : trois s\xe9ances par semaine. Nos patients dialys\xe9s n'ont pas besoin de s'inqui\xe9ter du transport — nous construisons avec eux un planning hebdomadaire stable. Apr\xe8s une s\xe9ance, la fatigue peut \xeatre importante. Nos v\xe9hicules sont confortables, la conduite est douce, et nous ne sommes jamais press\xe9s.</p>

<blockquote>
<p>"Je suis dialys\xe9 depuis trois ans. Il sait que j'aime arriver 10 minutes en avance et que le retour je suis \xe9puis\xe9. C'est devenu une routine rassurante dans une vie qui l'est moins." — Jean-Pierre, 68 ans, Colomiers</p>
</blockquote>
`},{slug:"taxi-vsl-oncopole-chimiotherapie-toulouse",title:"Taxi VSL Oncopole Toulouse : Transport Chimioth\xe9rapie & Radioth\xe9rapie",description:"Transport m\xe9dical conventionn\xe9 vers l'Oncopole Claudius Regaud de Toulouse. Chimioth\xe9rapie, radioth\xe9rapie, immunoth\xe9rapie. Accompagnement humain, tiers payant CPAM \xe0 100%.",date:"2025-02-20",category:"H\xf4pitaux",readTime:"6 min",content:`
<p>Aller \xe0 l'Oncopole, c'est souvent l'une des \xe9tapes les plus \xe9prouvantes d'un parcours de soin. La chimioth\xe9rapie, la radioth\xe9rapie, les immunoth\xe9rapies — ces traitements exigent du courage, mais aussi une logistique sans faille. Se soucier du transport en plus de tout le reste, c'est une charge que vous ne devriez pas avoir \xe0 porter seul.</p>

<h2>Un transport pens\xe9 pour les patients en oncologie</h2>
<p>Nos patients qui vont \xe0 l'Oncopole nous ont appris beaucoup. Apr\xe8s une chimio, les naus\xe9es, la fatigue soudaine, la sensibilit\xe9 \xe0 la lumi\xe8re et au bruit — nous en tenons compte dans notre mani\xe8re de conduire. Nos v\xe9hicules sont r\xe9guli\xe8rement d\xe9sinfect\xe9s, ce qui est important pour les patients immunod\xe9prim\xe9s. La conduite est douce.</p>

<h2>L'Oncopole Claudius Regaud : ce que vous devez savoir</h2>
<p>L'Institut Universitaire du Cancer de Toulouse (IUCT-Oncopole) est l'un des plus grands centres de lutte contre le cancer en France. Il regroupe sous un m\xeame toit :</p>
<ul>
<li>La chimioth\xe9rapie ambulatoire (h\xf4pital de jour)</li>
<li>La radioth\xe9rapie et la curieth\xe9rapie</li>
<li>L'immunoth\xe9rapie et les essais cliniques</li>
<li>Les consultations d'oncologie m\xe9dicale et chirurgicale</li>
</ul>

<h2>La prise en charge CPAM pour le cancer</h2>
<p>Le cancer est une ALD \xe0 100%. Tous vos transports en lien avec votre traitement sont rembours\xe9s int\xe9gralement. Avec Occitanie M\xe9di Mobility, le tiers payant est appliqu\xe9 d\xe8s la premi\xe8re course.</p>

<blockquote>
<p>"Pendant sept mois de chimio, c'est lui qui m'a conduit \xe0 chaque s\xe9ance. Il savait quand me parler et quand me laisser dormir. Le dernier jour, quand le m\xe9decin m'a dit que c'\xe9tait termin\xe9, il \xe9tait l\xe0 dans la salle d'attente. C'est le genre de souvenir qu'on n'oublie pas." — Martine, 58 ans, Muret</p>
</blockquote>
`},{slug:"transport-dialyse-conventionne-toulouse",title:"Transport Dialyse Conventionn\xe9 Toulouse : Service R\xe9gulier, Confort Garanti",description:"Service de transport pour s\xe9ances de dialyse \xe0 Toulouse et environs. 3 s\xe9ances par semaine, planification sur mesure, tiers payant CPAM \xe0 100%. Chauffeur ponctuel et humain.",date:"2025-03-01",category:"Transport M\xe9dical",readTime:"5 min",content:`
<p>La dialyse impose un rythme de vie exigeant. Trois fois par semaine, pendant plusieurs heures, vous devez rejoindre votre centre de dialyse — parfois depuis des ann\xe9es. Ce trajet, vous ne devriez pas avoir \xe0 l'organiser seul \xe0 chaque fois.</p>

<h2>Un service d\xe9di\xe9 aux patients en dialyse</h2>
<p>Lors de notre premier \xe9change, nous \xe9tablissons ensemble votre planning hebdomadaire pour les prochains mois. Ensuite, sauf changement exceptionnel de votre part, vous n'avez plus \xe0 nous appeler : nous sommes l\xe0, \xe0 l'heure, \xe0 chaque s\xe9ance.</p>

<h2>Les centres de dialyse que nous desservons</h2>
<ul>
<li><strong>CHU Rangueil</strong> — Centre d'h\xe9modialyse du CHU de Toulouse</li>
<li><strong>Clinique de l'Union</strong> — Centre de dialyse de Saint-Jean</li>
<li><strong>NephroCare Toulouse</strong> — Dialyse ambulatoire</li>
<li><strong>Clinique d'Occitanie \xe0 Muret</strong> — Pour les patients du sud toulousain</li>
</ul>

<h2>Apr\xe8s la s\xe9ance : le retour qui compte autant</h2>
<p>Apr\xe8s une s\xe9ance de dialyse de 4 heures, la fatigue est r\xe9elle. Nous adaptons notre conduite \xe0 cet \xe9tat : pas de freinages brusques, pas de virages rapides, et si vous souhaitez dormir sur le trajet retour, aucun probl\xe8me.</p>

<h2>Prise en charge CPAM \xe0 100%</h2>
<p>L'insuffisance r\xe9nale chronique est une ALD reconnue \xe0 100%. Vos transports vers le centre de dialyse sont donc rembours\xe9s int\xe9gralement. Votre m\xe9decin n\xe9phrologue \xe9tablira une prescription valable sur plusieurs mois.</p>

<blockquote>
<p>"Je suis dialys\xe9 depuis trois ans. J'ai eu plusieurs chauffeurs avant lui. Maintenant il sait mon nom, il sait que j'aime arriver 10 minutes en avance. C'est devenu une routine rassurante dans une vie qui l'est moins." — Jean-Pierre, 68 ans, Colomiers</p>
</blockquote>
`},{slug:"taxi-vsl-ariege-pamiers-foix-toulouse",title:"Taxi VSL depuis l'Ari\xe8ge vers Toulouse : Pamiers, Foix, Saint-Girons",description:"Transport m\xe9dical conventionn\xe9 depuis l'Ari\xe8ge (Pamiers, Foix, Saint-Girons) vers les h\xf4pitaux de Toulouse. Longue distance prise en charge CPAM, tiers payant, confort premium.",date:"2025-03-10",category:"Trajets",readTime:"5 min",content:`
<p>Depuis l'Ari\xe8ge, rejoindre les h\xf4pitaux sp\xe9cialis\xe9s de Toulouse n'est pas un simple trajet — c'est une exp\xe9dition. Pamiers \xe0 70 km, Foix \xe0 85 km, Saint-Girons \xe0 95 km. Ces distances peuvent sembler d\xe9courageantes, surtout quand on est malade.</p>

<h2>Pourquoi les patients de l'Ari\xe8ge viennent \xe0 Toulouse</h2>
<p>L'Ari\xe8ge est un d\xe9partement rural dont les \xe9tablissements de sant\xe9 ne disposent pas de toutes les sp\xe9cialit\xe9s. Pour la cardiologie interventionnelle, l'oncologie, la neurochirurgie, les patients ari\xe9geois sont orient\xe9s vers le CHU de Toulouse.</p>

<h2>Nos trajets r\xe9guliers depuis l'Ari\xe8ge</h2>
<ul>
<li><strong>Pamiers → Toulouse</strong> : 70 km, environ 55 minutes</li>
<li><strong>Foix → Toulouse</strong> : 85 km, environ 1h05</li>
<li><strong>Saint-Girons → Toulouse</strong> : 95 km, environ 1h20</li>
<li><strong>Saverdun → Toulouse</strong> : 60 km, environ 50 minutes</li>
</ul>

<h2>Comment obtenir la prise en charge CPAM pour les trajets longue distance ?</h2>
<p>Votre m\xe9decin doit mentionner sur l'ordonnance : la nature de votre ALD, la sp\xe9cialit\xe9 requise, l'\xe9tablissement de soin d\xe9sign\xe9 \xe0 Toulouse, et l'absence de cette sp\xe9cialit\xe9 dans votre d\xe9partement.</p>

<blockquote>
<p>Une patiente en traitement de neurologie depuis Pamiers : "Je fais ce trajet toutes les trois semaines. Maintenant je sais que le chauffeur m'attend et conna\xeet exactement o\xf9 me d\xe9poser. C'est une tranquillit\xe9 d'esprit \xe9norme."</p>
</blockquote>
`},{slug:"taxi-vsl-albi-tarn-toulouse-hopital",title:"Taxi VSL Albi & Tarn vers Toulouse : Transport M\xe9dical Longue Distance",description:"Transport m\xe9dical conventionn\xe9 depuis Albi, Castres, Gaillac et le Tarn vers les h\xf4pitaux de Toulouse. Prise en charge CPAM, trajet ~80 km, tiers payant \xe0 100%.",date:"2025-03-15",category:"Trajets",readTime:"4 min",content:`
<p>Albi et le Tarn b\xe9n\xe9ficient de bons \xe9tablissements hospitaliers, mais pour certaines sp\xe9cialit\xe9s — greffe d'organes, oncologie de pointe, neurochirurgie complexe — le CHU de Toulouse reste l'\xe9tablissement de r\xe9f\xe9rence r\xe9gionale.</p>

<h2>Les distances depuis le Tarn</h2>
<ul>
<li><strong>Albi → Toulouse</strong> : 80 km, environ 1h sur A68</li>
<li><strong>Castres → Toulouse</strong> : 75 km, environ 1h</li>
<li><strong>Gaillac → Toulouse</strong> : 55 km, environ 45 minutes</li>
<li><strong>Mazamet → Toulouse</strong> : 90 km, environ 1h10</li>
<li><strong>Lavaur → Toulouse</strong> : 40 km, environ 35 minutes</li>
</ul>

<h2>Prise en charge CPAM depuis le Tarn</h2>
<p>Votre m\xe9decin prescrit le transport avec la mention que la sp\xe9cialit\xe9 est uniquement disponible \xe0 Toulouse. La CPAM prend en charge le trajet.</p>

<h2>Ce que nos patients du Tarn appr\xe9cient</h2>
<p>Plusieurs de nos patients albigeois nous ont dit la m\xeame chose : avant de nous trouver, ils ne savaient pas que le transport depuis Albi pouvait \xeatre enti\xe8rement rembours\xe9. Certains prenaient leur voiture personnelle, \xe9puis\xe9s. Savoir qu'il existe un service professionnel, humain et gratuit pour eux — c'est souvent un soulagement immense.</p>
`},{slug:"taxi-prive-aeroport-toulouse-blagnac",title:"Taxi Priv\xe9 A\xe9roport Toulouse-Blagnac : R\xe9servation & Tarifs Fixes",description:"R\xe9servez votre taxi pour l'A\xe9roport Toulouse-Blagnac. Ponctualit\xe9 garantie d\xe8s 4h du matin, accueil personnalis\xe9 \xe0 l'arriv\xe9e, si\xe8ges auto gratuits. Tarif fixe sans surprise.",date:"2025-03-20",category:"Courses Priv\xe9es",readTime:"4 min",content:`
<p>Il est 4h30 du matin. Votre taxi n'est pas l\xe0. Votre avion d\xe9colle dans 90 minutes. C'est le sc\xe9nario cauchemar que nous avons entendu de trop nombreux clients avant qu'ils ne nous contactent. Chez Occitanie M\xe9di Mobility, nous ne ratons pas les d\xe9parts.</p>

<h2>Notre service a\xe9roport</h2>
<p>Nous assurons les transferts vers et depuis l'A\xe9roport Toulouse-Blagnac depuis des ann\xe9es. Ce que nous annon\xe7ons au t\xe9l\xe9phone, c'est ce que vous payez \xe0 l'arriv\xe9e — pas plus.</p>

<h2>Pourquoi choisir un taxi plut\xf4t qu'un VTC ?</h2>
<p>\xc0 3h du matin, un VTC peut annuler sa course ou ne pas se pr\xe9senter. Nous, nous prenons nos engagements au s\xe9rieux — vous avez notre num\xe9ro direct, et nous r\xe9pondons. Notre Peugeot 5008 GT offre un espace g\xe9n\xe9reux pour vos bagages.</p>

<h2>Le service d'accueil \xe0 l'arriv\xe9e</h2>
<p>Si vous atterrissez \xe0 Toulouse, nous pouvons vous accueillir avec une pancarte personnalis\xe9e \xe0 la sortie des bagages. Nous suivons l'\xe9tat de votre vol en temps r\xe9el — si votre avion a du retard, nous adaptons notre pr\xe9sence. Pas de frais d'attente suppl\xe9mentaires.</p>

<h2>Pour les familles avec enfants</h2>
<p>Nous disposons de si\xe8ges auto et de r\xe9hausseurs adapt\xe9s. Pr\xe9cisez les \xe2ges et poids de vos enfants lors de la r\xe9servation, nous \xe9quipons le v\xe9hicule en cons\xe9quence.</p>
`},{slug:"taxi-gare-matabiau-toulouse",title:"Taxi Gare Matabiau Toulouse : Transfert Fiable pour Votre Train",description:"Taxi pour la Gare Matabiau de Toulouse. Ponctualit\xe9 garantie, aide aux bagages, suivi des horaires TGV. R\xe9servation simple par t\xe9l\xe9phone ou SMS.",date:"2025-03-25",category:"Courses Priv\xe9es",readTime:"3 min",content:`
<p>La Gare Matabiau est le poumon ferroviaire de Toulouse. TGV vers Paris en 4h10, Intercit\xe9s vers Bordeaux, Montpellier, Perpignan — pour ne jamais rater votre train, le transport doit \xeatre sans accroc.</p>

<h2>Notre service vers Matabiau</h2>
<ul>
<li><strong>Ponctualit\xe9 rigoureuse</strong> — nous tenons compte du trafic toulousain</li>
<li><strong>Aide aux bagages</strong> — nous chargeons et d\xe9chargeons vos valises</li>
<li><strong>Flexibilit\xe9</strong> — si votre train a du retard au retour, nous adaptons</li>
<li><strong>Tarif fixe</strong> — pas de compteur qui s'emballe dans les bouchons</li>
</ul>

<h2>Pour vos arriv\xe9es \xe0 Toulouse</h2>
<p>Donnez-nous votre num\xe9ro de train, nous suivons les horaires et nous adaptons notre pr\xe9sence si votre train a du retard.</p>
`},{slug:"taxi-mariage-evenement-toulouse-occitanie",title:"Taxi pour Mariage & \xc9v\xe9nements \xe0 Toulouse et Occitanie",description:"Location de taxi avec chauffeur pour votre mariage, s\xe9minaire ou \xe9v\xe9nement priv\xe9 en Occitanie. V\xe9hicule \xe9l\xe9gant, chauffeur en tenue, discr\xe9tion absolue. Devis sur demande.",date:"2025-04-01",category:"Courses Priv\xe9es",readTime:"4 min",content:`
<p>Votre mariage est l'un des jours les plus importants de votre vie. Le transport des mari\xe9s, des t\xe9moins, de la famille proche — chaque d\xe9tail compte.</p>

<h2>Transport de mari\xe9s \xe0 Toulouse et en Occitanie</h2>
<p>Notre Peugeot 5008 GT, sobre et \xe9l\xe9gant, est parfait pour un transport de mariage discret et confortable. Nous assurons le transport des mari\xe9s, les navettes entre les diff\xe9rents lieux, et les retours en fin de soir\xe9e.</p>

<h2>S\xe9minaires et \xe9v\xe9nements professionnels</h2>
<p>Pour les entreprises qui re\xe7oivent des clients importants, nous assurons les transferts depuis l'a\xe9roport, la gare, ou l'h\xf4tel. Notre chauffeur est en tenue professionnelle, discret et ponctuel.</p>

<h2>Comment obtenir un devis ?</h2>
<p>Appelez-nous au 07 72 33 98 92. Nous vous rappelons avec une proposition tarifaire claire et sans surprise.</p>
`},{slug:"taxi-professionnel-entreprise-toulouse",title:"Taxi Professionnel & Business \xe0 Toulouse : Fiabilit\xe9 pour vos D\xe9placements",description:"Service de taxi professionnel pour entreprises \xe0 Toulouse. Facturation mensuelle, discr\xe9tion, ponctualit\xe9. Pour vos clients, collaborateurs et d\xe9placements professionnels.",date:"2025-04-05",category:"Courses Priv\xe9es",readTime:"3 min",content:`
<p>Dans un contexte professionnel, le transport n'est pas qu'une commodit\xe9 — c'est un reflet de votre image. Un client accueilli par un chauffeur ponctuel dans un v\xe9hicule propre, c'est un premier message positif.</p>

<h2>Notre offre entreprise</h2>
<ul>
<li><strong>Facturation mensuelle</strong> — une facture unique en fin de mois</li>
<li><strong>Compte prioritaire</strong> — votre appel passe en priorit\xe9</li>
<li><strong>Discr\xe9tion absolue</strong> — confidentialit\xe9 totale</li>
<li><strong>Disponibilit\xe9 \xe9tendue</strong> — d\xe9part tr\xe8s t\xf4t ou retour tardif</li>
</ul>

<h2>Pour ouvrir un compte entreprise</h2>
<p>Appelez-nous au 07 72 33 98 92 pour discuter de vos besoins et \xe9tablir ensemble les modalit\xe9s de notre collaboration.</p>
`},{slug:"taxi-vsl-vs-ambulance-toulouse",title:"Taxi VSL ou Ambulance : Quelle Diff\xe9rence et Comment Choisir ?",description:"Quelle diff\xe9rence entre un taxi VSL et une ambulance ? Qui prescrit quoi ? Quel remboursement CPAM ? Tout ce qu'il faut savoir pour choisir le bon transport m\xe9dical \xe0 Toulouse.",date:"2025-05-01",category:"Comparaisons",readTime:"6 min",content:`
<p>Votre m\xe9decin vous parle de "transport m\xe9dical rembours\xe9" mais ne pr\xe9cise pas si c'est une ambulance ou un taxi. Vous ne savez pas quelle diff\xe9rence \xe7a fait vraiment. Ce guide vous explique tout, clairement, pour que vous choisissiez le bon transport — et que le remboursement CPAM s'applique sans probl\xe8me.</p>

<h2>Taxi VSL et ambulance : deux transports m\xe9dicaux, deux profils de patients</h2>
<p>La CPAM distingue trois types de transport m\xe9dical rembours\xe9 : l'ambulance, le VSL (V\xe9hicule Sanitaire L\xe9ger) et le taxi conventionn\xe9. La diff\xe9rence fondamentale repose sur votre \xe9tat de sant\xe9 au moment du trajet :</p>
<ul>
<li><strong>Ambulance</strong> — pour les patients qui ne peuvent pas voyager en position assise, n\xe9cessitent une surveillance m\xe9dicale constante ou un \xe9quipement m\xe9dical (perfusion, oxyg\xe8ne). Prix \xe9lev\xe9, remboursement CPAM possible mais r\xe9serv\xe9 aux cas s\xe9v\xe8res.</li>
<li><strong>VSL / Taxi conventionn\xe9</strong> — pour les patients qui peuvent s'asseoir normalement, se d\xe9placer seuls ou avec une aide l\xe9g\xe8re. Id\xe9al pour les soins r\xe9guliers : dialyse, chimioth\xe9rapie, consultations ALD.</li>
</ul>
<p>Si votre m\xe9decin prescrit un taxi VSL alors que vous pouvez marcher et vous asseoir, c'est le bon choix — et le plus \xe9conomique pour l'Assurance Maladie.</p>

<h2>Ce que dit le m\xe9decin sur l'ordonnance</h2>
<p>C'est votre m\xe9decin qui d\xe9cide. Il coche sur la Prescription M\xe9dicale de Transport (PMT) le mode de transport adapt\xe9 \xe0 votre \xe9tat. La CPAM peut refuser le remboursement si vous prenez une ambulance alors qu'un taxi VSL \xe9tait suffisant — c'est ce qu'on appelle le transport non justifi\xe9.</p>
<p>Si votre m\xe9decin vous prescrit un taxi VSL, ne prenez pas une ambulance de votre propre chef : vous ne serez pas ou tr\xe8s peu rembours\xe9 pour la diff\xe9rence de tarif.</p>

<h2>Comparaison des co\xfbts et du remboursement</h2>
<table>
<tr><th>Type</th><th>Tarif moyen aller-retour Toulouse</th><th>Remboursement CPAM (ALD 100%)</th></tr>
<tr><td>Ambulance</td><td>150–350 €</td><td>100% si m\xe9dicalement justifi\xe9e</td></tr>
<tr><td>Taxi VSL conventionn\xe9</td><td>15–80 €</td><td>100% avec tiers payant int\xe9gral</td></tr>
<tr><td>VTC (Uber, Bolt...)</td><td>15–50 €</td><td>0% — non conventionn\xe9 CPAM</td></tr>
</table>

<h2>Pourquoi nous choisissons le VSL pour nos patients</h2>
<p>Chez Occitanie M\xe9di Mobility, nos patients viennent pour leurs dialyses, leurs chimioth\xe9rapies, leurs consultations ALD. Ces traitements sont \xe9prouvants, mais les patients peuvent voyager assis. Le taxi VSL leur offre un confort \xe9quivalent \xe0 une ambulance — conduite douce, temp\xe9rature confortable, aide \xe0 la mont\xe9e et \xe0 la descente — \xe0 un co\xfbt bien moindre pour la S\xe9curit\xe9 Sociale.</p>
<p>Et pour eux : 0€ d'avance, gr\xe2ce au tiers payant int\xe9gral.</p>

<blockquote>
<p>En cas de doute sur le transport qui vous convient, posez la question \xe0 votre m\xe9decin ou appelez-nous directement au <strong>07 72 33 98 92</strong>. Nous pouvons vous aider \xe0 comprendre ce que votre ordonnance mentionne.</p>
</blockquote>
`},{slug:"taxi-vsl-vs-uber-vtc-transport-medical-toulouse",title:"Taxi Conventionn\xe9 CPAM vs Uber / VTC : Pourquoi Uber n'est Pas Rembours\xe9",description:"Uber, Bolt ou un taxi conventionn\xe9 CPAM pour votre transport m\xe9dical ? Seulement le taxi VSL agr\xe9\xe9 permet le remboursement Assurance Maladie. Voici pourquoi — et comment \xe9viter la mauvaise surprise.",date:"2025-05-05",category:"Comparaisons",readTime:"5 min",content:`
<p>Question que nous entendons souvent : "Est-ce que je peux prendre un Uber et me faire rembourser par la CPAM ?" La r\xe9ponse est non — et comprendre pourquoi vous \xe9vitera une mauvaise surprise financi\xe8re le jour de votre soin.</p>

<h2>Le principe du conventionnement : ce qui fait la diff\xe9rence</h2>
<p>Pour qu'un transport m\xe9dical soit rembours\xe9 par l'Assurance Maladie, le prestataire doit avoir sign\xe9 une convention avec la CPAM. Cette convention impose des obligations pr\xe9cises :</p>
<ul>
<li>Formation sp\xe9cifique du chauffeur aux r\xe8gles sanitaires et \xe0 l'assistance aux patients</li>
<li>V\xe9hicule aux normes VSL (hygi\xe8ne, confort, \xe9quipements)</li>
<li>Tarifs fix\xe9s par arr\xeat\xe9 minist\xe9riel — pas de tarification dynamique</li>
<li>T\xe9l\xe9transmission des feuilles de soins directement \xe0 la CPAM</li>
</ul>
<p>Uber, Bolt, et les VTC en g\xe9n\xe9ral ne sont pas conventionn\xe9s. Ils appliquent une tarification dynamique (prix qui monte aux heures de pointe) et ne peuvent pas facturer la CPAM. Peu importe la qualit\xe9 de leur service, ils n'entrent pas dans le cadre l\xe9gal du transport m\xe9dical rembours\xe9.</p>

<h2>Ce qu'il se passe si vous prenez un Uber pour votre chimio</h2>
<p>Vous payez la course. Vous demandez le remboursement. La CPAM refuse, car le prestataire n'est pas conventionn\xe9. Vous avez avanc\xe9 30 ou 40 euros que vous n'aurez jamais. Si vous \xeates en ALD avec tiers payant, cette erreur est \xe9vitable \xe0 100%.</p>

<h2>Les tarifs r\xe9glement\xe9s du taxi VSL : plus pr\xe9visibles que vous ne le pensez</h2>
<p>Contrairement \xe0 un VTC dont le prix varie selon l'heure et la demande, le tarif d'un taxi conventionn\xe9 est fix\xe9 par arr\xeat\xe9. Pour Toulouse et la Haute-Garonne :</p>
<ul>
<li>Prise en charge : 2,40 €</li>
<li>Prix au kilom\xe8tre : 1,05 €/km</li>
<li>Attente : 13,40 €/heure</li>
</ul>
<p>Ces tarifs sont les m\xeames pour tous les taxis conventionn\xe9s. Pas de surprise, pas de majoration cach\xe9e.</p>

<h2>Occitanie M\xe9di Mobility vs VTC : ce que vous gagnez vraiment</h2>
<ul>
<li><strong>0€ d'avance</strong> — contre 30–50€ par course en VTC</li>
<li><strong>Chauffeur form\xe9</strong> — aide \xe0 la mont\xe9e/descente, connaissance des h\xf4pitaux</li>
<li><strong>Facturation directe CPAM</strong> — pas de d\xe9marche administrative</li>
<li><strong>Tarif fixe r\xe9glement\xe9</strong> — pas de prix qui double un mardi soir</li>
</ul>

<blockquote>
<p>Choisir un taxi conventionn\xe9 plut\xf4t qu'un VTC, c'est simplement choisir un transport pens\xe9 pour les patients, encadr\xe9 l\xe9galement et int\xe9gralement rembours\xe9. Appelez-nous au <strong>07 72 33 98 92</strong>.</p>
</blockquote>
`},{slug:"comparatif-transport-medical-toulouse-ambulance-vsl-vtc",title:"Comparatif Transports M\xe9dicaux \xe0 Toulouse 2025 : Ambulance, VSL, Taxi, VTC",description:"Tableau comparatif complet des modes de transport m\xe9dical \xe0 Toulouse : ambulance, VSL, taxi conventionn\xe9 CPAM, VTC, covoiturage. Prix, remboursement, conditions. Choisissez le bon.",date:"2025-05-10",category:"Comparaisons",readTime:"7 min",content:`
<p>Vous avez besoin d'un transport m\xe9dical \xe0 Toulouse et vous ne savez pas quelle solution choisir. Ambulance ? Taxi conventionn\xe9 ? VTC ? Covoiturage ? Ce comparatif rassemble tout ce qu'il faut savoir pour prendre la bonne d\xe9cision — selon votre \xe9tat de sant\xe9, votre situation CPAM et votre budget.</p>

<h2>Tableau comparatif rapide</h2>
<table>
<tr><th>Transport</th><th>Remboursement CPAM</th><th>Tarif AR Toulouse</th><th>R\xe9servation</th><th>Aide patient</th></tr>
<tr><td>Ambulance</td><td>100% si justifi\xe9</td><td>150–350 €</td><td>Soci\xe9t\xe9 ambulanci\xe8re</td><td>Oui (brancardage)</td></tr>
<tr><td>Taxi VSL conventionn\xe9</td><td>100% (ALD tiers payant)</td><td>15–80 €</td><td>Taxi agr\xe9\xe9 CPAM</td><td>Oui (aide l\xe9g\xe8re)</td></tr>
<tr><td>VTC (Uber, Bolt)</td><td>0%</td><td>15–60 € (variable)</td><td>Application mobile</td><td>Non</td></tr>
<tr><td>Voiture personnelle</td><td>Indemnit\xe9s kilom\xe9triques</td><td>Remboursement partiel</td><td>Sans r\xe9servation</td><td>Non</td></tr>
<tr><td>Transport en commun</td><td>Non</td><td>1,80 € (Tiss\xe9o)</td><td>Sans r\xe9servation</td><td>Non</td></tr>
</table>

<h2>Quand prendre une ambulance ?</h2>
<p>L'ambulance est prescrite lorsque le patient ne peut pas se tenir assis, a besoin d'oxyg\xe8ne ou d'une perfusion pendant le trajet, ou n\xe9cessite une surveillance m\xe9dicale constante. La CPAM v\xe9rifie que la prescription d'ambulance est m\xe9dicalement justifi\xe9e. Si ce n'est pas le cas, elle peut refuser le remboursement ou demander un remboursement partiel seulement.</p>

<h2>Quand prendre un taxi VSL ?</h2>
<p>Le taxi VSL est adapt\xe9 \xe0 tous les patients pouvant voyager en position assise : dialys\xe9s, patients en chimioth\xe9rapie, consultations ALD, suivi post-op\xe9ratoire. C'est le transport m\xe9dical le plus courant en Occitanie pour les soins r\xe9guliers. Avec le tiers payant int\xe9gral, le patient ne paie rien.</p>

<h2>Pourquoi les VTC ne fonctionnent pas pour les soins m\xe9dicaux</h2>
<p>Les VTC comme Uber ne sont pas conventionn\xe9s CPAM. Ils ne peuvent pas \xe9mettre de feuilles de soins, ne sont pas form\xe9s aux protocoles sanitaires du transport m\xe9dical, et leurs tarifs fluctuent. Pour les patients en ALD qui font plusieurs trajets m\xe9dicaux par semaine, cela repr\xe9sente un co\xfbt significatif non rembours\xe9.</p>

<h2>La voiture personnelle : une alternative m\xe9connue</h2>
<p>Si vous conduisez vous-m\xeame ou \xeates conduit par un proche, vous pouvez percevoir des Indemnit\xe9s Kilom\xe9triques (IK) de la CPAM pour vos trajets m\xe9dicaux. Le bar\xe8me est inf\xe9rieur au co\xfbt d'un taxi, et cette option n'est pas adapt\xe9e aux patients qui ne peuvent pas conduire apr\xe8s leur traitement.</p>

<h2>Notre recommandation</h2>
<p>Pour les patients en ALD \xe0 Toulouse et en Occitanie, le taxi VSL conventionn\xe9 est syst\xe9matiquement la meilleure solution : remboursement int\xe9gral, confort adapt\xe9, chauffeur form\xe9, z\xe9ro d\xe9marche administrative.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour v\xe9rifier si votre situation ouvre droit au transport m\xe9dical rembours\xe9. Nous vous guidons avant m\xeame la premi\xe8re r\xe9servation.</p>
</blockquote>
`},{slug:"taxi-vsl-vs-proxisoin-transport-medical-toulouse",title:"Taxi VSL vs Proxisoins et Plateformes de Transport M\xe9dical : Que Choisir ?",description:"Plateformes comme Proxisoins, Sant\xe9.fr ou les r\xe9gies de transport m\xe9dical vs taxi VSL en direct : diff\xe9rences concr\xe8tes, qualit\xe9 de service, avantages pour les patients en ALD \xe0 Toulouse.",date:"2025-05-12",category:"Comparaisons",readTime:"5 min",content:`
<p>Face \xe0 la multiplication des plateformes de mise en relation pour le transport m\xe9dical (Proxisoins, r\xe9gies de sant\xe9, applications mobiles), beaucoup de patients se demandent s'il vaut mieux passer par une plateforme ou contacter directement un taxi VSL conventionn\xe9. Voici une comparaison honn\xeate.</p>

<h2>Comment fonctionnent les plateformes de transport m\xe9dical ?</h2>
<p>Des services comme Proxisoins ou les centrales de transport m\xe9dical fonctionnent comme des interm\xe9diaires : vous formulez votre demande, la plateforme la transmet \xe0 l'un de ses prestataires partenaires. Vous ne choisissez pas le chauffeur, ni parfois le v\xe9hicule.</p>
<p>Ces plateformes peuvent \xeatre utiles pour des \xe9tablissements de sant\xe9 qui g\xe8rent de nombreux patients. Pour un patient individuel, elles pr\xe9sentent plusieurs inconv\xe9nients.</p>

<h2>Les inconv\xe9nients des plateformes pour les patients</h2>
<ul>
<li><strong>Anonymat du prestataire</strong> — vous ne savez pas qui vient vous chercher jusqu'\xe0 la veille ou le jour m\xeame</li>
<li><strong>Pas de relation de confiance</strong> — difficile de communiquer vos pr\xe9f\xe9rences (conduite douce, attente apr\xe8s chimio)</li>
<li><strong>Support diffus</strong> — en cas de probl\xe8me, vous appelez la plateforme, pas le chauffeur directement</li>
<li><strong>Flexibilit\xe9 limit\xe9e</strong> — annuler ou modifier en urgence est souvent compliqu\xe9</li>
</ul>

<h2>Les avantages d'un taxi VSL en contact direct</h2>
<ul>
<li><strong>Le m\xeame chauffeur \xe0 chaque s\xe9ance</strong> — il conna\xeet vos habitudes, votre \xe9tat, votre parcours de soin</li>
<li><strong>Num\xe9ro direct</strong> — pas de hotline, pas de ticket de support</li>
<li><strong>Adaptabilit\xe9 totale</strong> — retard du rendez-vous, arr\xeat sur la route, fen\xeatre horaire modifi\xe9e</li>
<li><strong>Connaissance des h\xf4pitaux</strong> — nous savons quelle entr\xe9e, quel pavillon, quelle heure \xe9viter</li>
</ul>

<h2>Ce que nos patients nous disent</h2>
<p>Plusieurs de nos patients sont pass\xe9s par des plateformes avant de nous contacter. Ce qu'ils appr\xe9cient chez nous : avoir toujours le m\xeame chauffeur, pouvoir appeler directement, et ne pas avoir \xe0 r\xe9expliquer leur situation \xe0 chaque course.</p>
<p>Pour quelqu'un qui va en dialyse trois fois par semaine ou en chimioth\xe9rapie chaque semaine, cette continuit\xe9 n'est pas un luxe — c'est une condition de confort et de s\xe9curit\xe9.</p>

<blockquote>
<p>Chez Occitanie M\xe9di Mobility, chaque patient est suivi personnellement. Appelez-nous au <strong>07 72 33 98 92</strong> pour \xe9tablir ensemble votre planning de transport.</p>
</blockquote>
`},{slug:"pourquoi-choisir-taxi-vsl-conventionne-toulouse",title:"5 Raisons de Choisir un Taxi VSL Conventionn\xe9 pour Vos Soins \xe0 Toulouse",description:"Pourquoi choisir un taxi VSL conventionn\xe9 CPAM plut\xf4t qu'une ambulance, un VTC ou un proche pour vos transports m\xe9dicaux \xe0 Toulouse ? 5 raisons concr\xe8tes pour les patients en ALD.",date:"2025-05-15",category:"Comparaisons",readTime:"4 min",content:`
<p>Vous commencez un traitement m\xe9dical r\xe9gulier — dialyse, chimioth\xe9rapie, radioth\xe9rapie — et vous h\xe9sitez sur la meilleure fa\xe7on de vous rendre \xe0 l'h\xf4pital. Voici 5 raisons concr\xe8tes pour lesquelles le taxi VSL conventionn\xe9 est souvent la meilleure option pour les patients toulousains.</p>

<h2>1. Vous ne payez pas — gr\xe2ce au tiers payant CPAM</h2>
<p>Si vous \xeates en Affection de Longue Dur\xe9e (ALD) \xe0 100%, le tiers payant int\xe9gral s'applique. Nous facturons directement l'Assurance Maladie. Aucune avance, aucun formulaire \xe0 remplir de votre c\xf4t\xe9, aucun d\xe9lai de remboursement \xe0 attendre. 0€ \xe0 chaque trajet.</p>

<h2>2. Vous \xeates pris en charge de votre porte \xe0 l'entr\xe9e du service</h2>
<p>Nous venons vous chercher \xe0 votre domicile et vous d\xe9posons au plus pr\xe8s de l'entr\xe9e de votre service. Pas de parkings \xe0 chercher, pas de correspondances en transports en commun, pas de marche inutile quand vous \xeates fatigu\xe9 ou douloureux.</p>

<h2>3. Un seul appel pour plusieurs mois de transport</h2>
<p>Pour les traitements r\xe9guliers, nous \xe9tablissons un planning sur toute la dur\xe9e de votre traitement. Une seule r\xe9servation initiale suffit : vous n'avez plus \xe0 vous soucier du transport \xe0 chaque s\xe9ance.</p>

<h2>4. Un chauffeur qui conna\xeet votre situation</h2>
<p>Apr\xe8s une dialyse ou une chimio, la fatigue peut \xeatre soudaine. Nous adaptons notre conduite — pas de freinages brusques, musique douce ou silence, fen\xeatre selon vos pr\xe9f\xe9rences. Ces d\xe9tails font une diff\xe9rence r\xe9elle quand on les vit r\xe9guli\xe8rement.</p>

<h2>5. Z\xe9ro paperasse administrative</h2>
<p>Nous g\xe9rons toute la facturation avec la CPAM. Vous n'avez qu'\xe0 nous remettre votre prescription m\xe9dicale de transport le jour J. Pas d'Ameli \xe0 consulter, pas de remboursement \xe0 attendre, pas d'erreur administrative.</p>

<h2>Pour qui c'est particuli\xe8rement adapt\xe9 ?</h2>
<ul>
<li>Patients en dialyse (3x par semaine)</li>
<li>Patients en chimioth\xe9rapie ou radioth\xe9rapie</li>
<li>Personnes \xe2g\xe9es ou \xe0 mobilit\xe9 r\xe9duite</li>
<li>Patients des communes p\xe9riph\xe9riques et de toute l'Occitanie</li>
</ul>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour v\xe9rifier votre \xe9ligibilit\xe9 et r\xe9server votre premier transport. Nous r\xe9pondons 7j/7.</p>
</blockquote>
`},{slug:"remboursement-transport-medical-cpam-toulouse-guide",title:"Remboursement Transport M\xe9dical CPAM \xe0 Toulouse : Guide Complet 2025",description:"Comment obtenir le remboursement de votre transport m\xe9dical par la CPAM \xe0 Toulouse ? Conditions, d\xe9marches, taux, tiers payant. Tout ce qu'il faut savoir en 2025.",date:"2025-05-18",category:"Guide",readTime:"8 min",content:`
<p>Le remboursement du transport m\xe9dical par la CPAM est un droit mal connu — et souvent sous-utilis\xe9. Chaque ann\xe9e, des milliers de patients en Haute-Garonne avancent des frais de transport qu'ils auraient pu ne jamais payer. Ce guide vous explique exactement comment fonctionne le remboursement, qui y a droit et comment l'obtenir sans complication.</p>

<h2>Principe g\xe9n\xe9ral : le transport m\xe9dical dans le parcours de soins</h2>
<p>Depuis 2004, l'Assurance Maladie rembourse les frais de transport m\xe9dical lorsque le patient ne peut pas utiliser les transports en commun ou sa voiture personnelle en raison de son \xe9tat de sant\xe9, et que le transport est m\xe9dicalement n\xe9cessaire pour acc\xe9der aux soins.</p>

<h2>Les conditions de remboursement</h2>
<p>Le remboursement est accord\xe9 dans plusieurs situations :</p>
<ul>
<li><strong>Affection de Longue Dur\xe9e (ALD)</strong> — la situation la plus courante, ouvre droit au tiers payant int\xe9gral si ALD \xe0 100%</li>
<li><strong>Hospitalisation compl\xe8te</strong> — transport aller et retour rembours\xe9</li>
<li><strong>Traitements r\xe9guliers et fr\xe9quents</strong> — dialyse, chimioth\xe9rapie, radioth\xe9rapie (au moins deux fois par semaine pendant 6 mois)</li>
<li><strong>Accident du travail / maladie professionnelle</strong></li>
<li><strong>Maternit\xe9</strong> — \xe0 partir du 5\xe8me mois de grossesse</li>
<li><strong>Longue distance impos\xe9e</strong> — quand la sp\xe9cialit\xe9 m\xe9dicale requise n'existe pas dans le d\xe9partement du patient</li>
</ul>

<h2>Les taux de remboursement selon votre situation</h2>
<table>
<tr><th>Situation</th><th>Part CPAM</th><th>Part mutuelle</th><th>Reste \xe0 charge</th></tr>
<tr><td>ALD 100% avec tiers payant</td><td>100%</td><td>—</td><td>0 €</td></tr>
<tr><td>ALD 100% sans tiers payant</td><td>100%</td><td>—</td><td>0 € (mais avance)</td></tr>
<tr><td>Cas standard (hors ALD)</td><td>65%</td><td>Variable</td><td>35% ou moins</td></tr>
</table>

<h2>Le document indispensable : la Prescription M\xe9dicale de Transport (PMT)</h2>
<p>Sans ce document, pas de remboursement. La PMT est \xe9tablie par votre m\xe9decin traitant ou le m\xe9decin de l'\xe9tablissement de soins. Elle doit mentionner :</p>
<ul>
<li>Votre identit\xe9 et num\xe9ro de s\xe9curit\xe9 sociale</li>
<li>Le motif m\xe9dical du transport (lien avec l'ALD ou le soin)</li>
<li>Le mode de transport prescrit (taxi VSL, ambulance...)</li>
<li>La destination</li>
<li>La date ou la p\xe9riode de validit\xe9</li>
</ul>

<h2>Avec le tiers payant : comment \xe7a se passe concr\xe8tement ?</h2>
<ol>
<li>Votre m\xe9decin vous remet la PMT (avant le jour du transport)</li>
<li>Vous r\xe9servez votre taxi conventionn\xe9 CPAM en pr\xe9cisant votre ALD</li>
<li>Le jour J, vous remettez la PMT et votre carte Vitale au chauffeur</li>
<li>Le chauffeur effectue la t\xe9l\xe9transmission directement \xe0 la CPAM</li>
<li>Vous ne payez rien — la CPAM r\xe8gle le chauffeur directement</li>
</ol>

<h2>Cas particulier : la longue distance depuis l'Occitanie</h2>
<p>Si vous r\xe9sidez en Ari\xe8ge, dans le Tarn, les Hautes-Pyr\xe9n\xe9es ou tout autre d\xe9partement d'Occitanie, et que votre sp\xe9cialit\xe9 m\xe9dicale se trouve uniquement \xe0 Toulouse, le trajet longue distance est remboursable. Votre m\xe9decin doit pr\xe9ciser sur la PMT l'absence de la sp\xe9cialit\xe9 dans votre d\xe9partement.</p>

<blockquote>
<p>Vous avez un doute sur votre situation ? Appelez-nous au <strong>07 72 33 98 92</strong>. Avant m\xeame de r\xe9server, nous pouvons vous aider \xe0 v\xe9rifier si votre transport est remboursable et comment pr\xe9parer votre ordonnance.</p>
</blockquote>
`},{slug:"conditions-eligibilite-transport-medical-cpam-ald",title:"Qui a Droit au Transport M\xe9dical Rembours\xe9 ? Conditions d'\xc9ligibilit\xe9 CPAM",description:"Quelles maladies et situations ouvrent droit au transport m\xe9dical rembours\xe9 par la CPAM ? Liste des ALD, conditions pr\xe9cises, cas particuliers. Tout pour savoir si vous \xeates \xe9ligible.",date:"2025-05-20",category:"Guide",readTime:"7 min",content:`
<p>Beaucoup de patients en traitement r\xe9gulier ignorent qu'ils ont droit au transport m\xe9dical rembours\xe9. Ce guide liste toutes les situations o\xf9 la CPAM prend en charge votre transport — avec les conditions pr\xe9cises pour chaque cas.</p>

<h2>Les 30 Affections de Longue Dur\xe9e (ALD) qui ouvrent droit au transport rembours\xe9</h2>
<p>Le remboursement \xe0 100% s'applique pour les transports li\xe9s \xe0 une ALD reconnue. Les ALD les plus fr\xe9quentes chez nos patients toulousains :</p>
<ul>
<li><strong>ALD 2</strong> — Insuffisance r\xe9nale chronique grave (dialyse)</li>
<li><strong>ALD 3</strong> — Art\xe9riopathies chroniques avec manifestations isch\xe9miques</li>
<li><strong>ALD 5</strong> — Insuffisance cardiaque grave</li>
<li><strong>ALD 6</strong> — Maladies chroniques actives du foie et cirrhoses</li>
<li><strong>ALD 8</strong> — Diab\xe8te de type 1 et de type 2</li>
<li><strong>ALD 9</strong> — Forme grave des affections neurologiques et musculaires (dont scl\xe9rose en plaques)</li>
<li><strong>ALD 17</strong> — Maladies m\xe9taboliques h\xe9r\xe9ditaires</li>
<li><strong>ALD 23</strong> — Affections psychiatriques de longue dur\xe9e</li>
<li><strong>ALD 25</strong> — Scl\xe9rose en plaques</li>
<li><strong>ALD 30</strong> — Tumeurs malignes (cancers, h\xe9mopathies) — c'est l'ALD la plus fr\xe9quente pour les patients en chimioth\xe9rapie</li>
</ul>
<p>La liste compl\xe8te des 30 ALD est disponible sur <strong>ameli.fr</strong>. Si vous avez une ALD reconnue, votre m\xe9decin peut vous d\xe9livrer une PMT pour vos transports en lien avec cette pathologie.</p>

<h2>Les situations hors ALD qui ouvrent \xe9galement droit au remboursement</h2>
<ul>
<li><strong>Hospitalisation compl\xe8te</strong> — aller et retour rembours\xe9s quel que soit le motif</li>
<li><strong>Traitements ambulatoires r\xe9guliers</strong> — au moins 2 s\xe9ances par semaine pendant 6 mois cons\xe9cutifs (dialyse, chimio, radio)</li>
<li><strong>Maternit\xe9</strong> — \xe0 partir de la 24\xe8me semaine d'am\xe9norrh\xe9e et jusqu'\xe0 12 jours apr\xe8s l'accouchement</li>
<li><strong>Accident du travail</strong> — prise en charge \xe0 100% sans avance de frais</li>
<li><strong>Maladie professionnelle reconnue</strong></li>
<li><strong>Invalidit\xe9</strong> — selon le taux d'invalidit\xe9 reconnu</li>
</ul>

<h2>Les situations o\xf9 le remboursement est partiel (65%)</h2>
<p>Hors des cas ci-dessus, la CPAM peut rembourser 65% du tarif r\xe9glement\xe9 si votre m\xe9decin atteste que votre \xe9tat de sant\xe9 ne vous permet pas d'utiliser les transports en commun. La mutuelle peut compl\xe9ter selon votre contrat.</p>

<h2>Ce que la CPAM ne rembourse pas</h2>
<ul>
<li>Les transports pris sans prescription m\xe9dicale de transport</li>
<li>Les VTC, Uber, Bolt et tout prestataire non conventionn\xe9 CPAM</li>
<li>Les transports non li\xe9s \xe0 l'ALD reconnue (ex : transport pour un rhume si votre ALD est le diab\xe8te)</li>
<li>Les transports dont la PMT est \xe9tablie apr\xe8s la date du trajet</li>
</ul>

<h2>Comment faire reconna\xeetre votre ALD ?</h2>
<p>C'est votre m\xe9decin traitant qui \xe9tablit la demande de reconnaissance d'ALD aupr\xe8s de la CPAM, sur la base d'un protocole de soins. Une fois l'ALD reconnue, un formulaire de liaison est \xe9tabli entre votre m\xe9decin, la CPAM et les sp\xe9cialistes — et votre droit au transport rembours\xe9 est ouvert.</p>

<blockquote>
<p>Si vous avez un traitement r\xe9gulier et ne savez pas si vous avez droit au transport rembours\xe9, appelez-nous au <strong>07 72 33 98 92</strong>. Nous pouvons vous orienter vers les d\xe9marches adapt\xe9es \xe0 votre situation.</p>
</blockquote>
`},{slug:"prescription-medicale-transport-comment-obtenir",title:"Prescription M\xe9dicale de Transport : Comment la Demander \xe0 Votre M\xe9decin",description:"Comment demander une Prescription M\xe9dicale de Transport (PMT) \xe0 votre m\xe9decin pour votre transport m\xe9dical rembours\xe9 CPAM ? Quoi dire, quels documents, dur\xe9e de validit\xe9.",date:"2025-05-22",category:"Guide",readTime:"5 min",content:`
<p>La Prescription M\xe9dicale de Transport (PMT) est le document cl\xe9 pour b\xe9n\xe9ficier du remboursement de votre transport m\xe9dical. Pourtant, beaucoup de patients ne savent pas comment la demander, ou oublient de le faire avant le jour du rendez-vous. Ce guide vous explique comment proc\xe9der simplement.</p>

<h2>Qu'est-ce que la PMT exactement ?</h2>
<p>La PMT — anciennement appel\xe9e "bon de transport" — est une ordonnance m\xe9dicale sp\xe9cifique, distincte de l'ordonnance de m\xe9dicaments. Elle atteste que votre \xe9tat de sant\xe9 n\xe9cessite un transport m\xe9dical et que ce transport doit \xeatre pris en charge par l'Assurance Maladie.</p>
<p>Sans PMT valide, votre taxi conventionn\xe9 ne peut pas t\xe9l\xe9transmettre la facturation \xe0 la CPAM, et votre course reste \xe0 votre charge.</p>

<h2>\xc0 qui la demander ?</h2>
<ul>
<li><strong>Votre m\xe9decin traitant</strong> — pour les consultations de suivi en lien avec votre ALD</li>
<li><strong>Le m\xe9decin de l'h\xf4pital ou de la clinique</strong> — pour les transports li\xe9s \xe0 une hospitalisation ou un traitement en cours</li>
<li><strong>Un m\xe9decin de garde</strong> — si votre m\xe9decin habituel est indisponible</li>
</ul>

<h2>Comment formuler votre demande ?</h2>
<p>Dites simplement \xe0 votre m\xe9decin : "J'ai besoin d'un bon de transport pour ma [dialyse / chimioth\xe9rapie / consultation sp\xe9cialis\xe9e] \xe0 [h\xf4pital]. Est-ce que vous pouvez m'\xe9tablir une prescription m\xe9dicale de transport ?"</p>
<p>Si vous avez un traitement r\xe9gulier sur plusieurs mois, demandez une ordonnance renouvelable couvrant toute la dur\xe9e du traitement. Votre m\xe9decin peut \xe9tablir une PMT valable pour plusieurs mois avec un volet par s\xe9ance.</p>

<h2>Ce que doit contenir la PMT pour \xeatre valide</h2>
<ul>
<li>Vos nom, pr\xe9nom et num\xe9ro de s\xe9curit\xe9 sociale</li>
<li>La date de la prescription (doit \xeatre <strong>avant</strong> la date du transport)</li>
<li>Le motif m\xe9dical (li\xe9 \xe0 votre ALD ou au soin)</li>
<li>La destination (h\xf4pital ou clinique)</li>
<li>Le mode de transport prescrit (taxi VSL ou ambulance)</li>
<li>Le nombre d'allers-retours ou la p\xe9riode de validit\xe9</li>
<li>La signature et le cachet du m\xe9decin</li>
</ul>

<h2>La r\xe8gle d'or : la date</h2>
<p>La date de signature du m\xe9decin doit obligatoirement \xeatre ant\xe9rieure ou \xe9gale \xe0 la date de votre transport. Une PMT dat\xe9e du lendemain du trajet sera syst\xe9matiquement rejet\xe9e par la CPAM. Pensez-y lors de votre prochaine consultation.</p>

<h2>PMT perdue ou ab\xeem\xe9e : que faire ?</h2>
<p>Appelez votre m\xe9decin pour qu'il en \xe9tablisse une nouvelle. En attendant, si vous avez photographi\xe9 l'original, montrez la photo au m\xe9decin pour faciliter la r\xe9daction du duplicata.</p>

<blockquote>
<p>Vous avez votre PMT en main et souhaitez r\xe9server votre transport m\xe9dical ? Appelez-nous au <strong>07 72 33 98 92</strong>. Pour les traitements r\xe9guliers, une seule r\xe9servation suffit pour plusieurs mois.</p>
</blockquote>
`},{slug:"taxi-dialyse-toulouse-cpam-rangueil",title:"Taxi VSL pour la Dialyse \xe0 Toulouse : Planning Hebdomadaire & Tiers Payant CPAM",description:"Service de taxi VSL conventionn\xe9 CPAM sp\xe9cialis\xe9 pour les patients en dialyse \xe0 Toulouse (Rangueil, Clinique de l'Union). Planning stable 3x/semaine, tiers payant int\xe9gral, conduite douce.",date:"2025-05-25",category:"Sp\xe9cialit\xe9s",readTime:"6 min",content:`
<p>La dialyse impose un rythme qui ne pardonne pas : trois s\xe9ances par semaine, chaque semaine, pendant des ann\xe9es. Pour les patients dialys\xe9s de Toulouse et de toute l'Occitanie, le transport est une composante critique de ce rythme. Une absence, un retard, une annulation — et c'est la s\xe9ance manqu\xe9e. Notre service de transport pour la dialyse est con\xe7u pour que ce ne soit jamais un probl\xe8me.</p>

<h2>Le transport dialyse : un besoin sp\xe9cifique</h2>
<p>Un patient dialys\xe9 n'a pas le m\xeame profil qu'un patient en consultation. Au retour d'une s\xe9ance d'h\xe9modialyse, la fatigue peut \xeatre soudaine et intense : sensation de malaise, hypotension orthostatique, faiblesse musculaire. Ces effets sont normaux mais imposent une conduite adapt\xe9e.</p>
<p>Nous savons que le retour apr\xe8s dialyse n'est pas un trajet ordinaire. Notre conduite est douce, sans acc\xe9l\xe9rations brusques. La temp\xe9rature du v\xe9hicule est r\xe9gl\xe9e selon vos besoins. Si vous avez besoin de faire une pause sur la route, nous nous arr\xeatons.</p>

<h2>Les centres de dialyse \xe0 Toulouse que nous desservons</h2>
<ul>
<li><strong>H\xf4pital Rangueil — Service de N\xe9phrologie-Dialyse</strong> — principal centre d'h\xe9modialyse du CHU de Toulouse</li>
<li><strong>Clinique de l'Union (Saint-Jean)</strong> — important centre de dialyse priv\xe9 au nord de Toulouse</li>
<li><strong>CHU Purpan</strong> — service de dialyse p\xe9diatrique et adulte</li>
<li><strong>Autres centres d'auto-dialyse de Toulouse et de l'agglom\xe9ration</strong></li>
</ul>

<h2>Le planning hebdomadaire fixe : comment \xe7a marche</h2>
<p>Pour un patient dialys\xe9, nous \xe9tablissons un planning fixe d\xe8s le premier appel. Exemple :</p>
<ul>
<li>Lundi, mercredi, vendredi — 6h45 d\xe9part domicile, 7h00 arriv\xe9e centre</li>
<li>Retour variable selon dur\xe9e de s\xe9ance : nous attendons sans frais suppl\xe9mentaires</li>
</ul>
<p>Une fois le planning \xe9tabli, vous n'avez plus rien \xe0 faire. Nous sommes l\xe0 \xe0 l'heure convenue, chaque s\xe9ance, sans que vous ayez \xe0 nous rappeler. Si un planning doit changer (f\xeates, changement d'horaire hospitalier), nous vous contactons en amont.</p>

<h2>Le remboursement CPAM pour la dialyse</h2>
<p>L'insuffisance r\xe9nale chronique grave (ALD 2) ouvre droit au remboursement int\xe9gral du transport m\xe9dical. Avec le tiers payant \xe0 100% :</p>
<ul>
<li>Votre m\xe9decin n\xe9phrologue ou traitant \xe9tablit une PMT couvrant vos s\xe9ances</li>
<li>Vous nous la remettez lors de la premi\xe8re s\xe9ance</li>
<li>Nous g\xe9rons toute la facturation avec la CPAM — \xe0 chaque s\xe9ance, pendant toute la dur\xe9e du traitement</li>
<li>Vous ne payez jamais rien</li>
</ul>

<h2>Depuis toute l'Occitanie vers Toulouse</h2>
<p>Si vous \xeates dialys\xe9 \xe0 Toulouse alors que vous r\xe9sidez en Ari\xe8ge, dans le Tarn ou ailleurs en Occitanie, ce trajet longue distance est \xe9galement remboursable sur prescription m\xe9dicale. Nous intervenons depuis toute la r\xe9gion.</p>

<blockquote>
<p>Pour mettre en place votre planning de transport dialyse, appelez-nous au <strong>07 72 33 98 92</strong>. Nous \xe9tablissons ensemble un programme adapt\xe9 \xe0 vos horaires de s\xe9ance, d\xe8s la semaine suivante.</p>
</blockquote>
`},{slug:"taxi-chimiotherapie-toulouse-cpam-oncopole",title:"Taxi VSL Chimioth\xe9rapie Toulouse : Accompagnement & Remboursement CPAM 100%",description:"Transport m\xe9dical VSL conventionn\xe9 sp\xe9cialis\xe9 pour les patients en chimioth\xe9rapie \xe0 l'Oncopole Claudius Regaud de Toulouse. V\xe9hicule d\xe9sinfect\xe9, conduite douce, tiers payant CPAM int\xe9gral.",date:"2025-05-28",category:"Sp\xe9cialit\xe9s",readTime:"6 min",content:`
<p>La chimioth\xe9rapie est un traitement qui demande du courage. S'inqui\xe9ter du transport ne devrait pas s'y ajouter. Notre service de taxi VSL pour les patients en chimio \xe0 Toulouse est pens\xe9 pour que le trajet soit, dans toute la mesure du possible, une \xe9tape confortable et sans stress dans votre parcours de soins.</p>

<h2>Ce que vivent nos patients en chimioth\xe9rapie</h2>
<p>Apr\xe8s plusieurs ann\xe9es \xe0 transporter des patients vers l'Oncopole Claudius Regaud, nous connaissons bien les effets de la chimio sur le trajet retour : fatigue brutale, naus\xe9es, hypersensibilit\xe9 au mouvement et au bruit, parfois sensation de malaise. Ces r\xe9actions sont normales — et nous les anticipons.</p>
<ul>
<li><strong>Conduite douce</strong> — pas d'acc\xe9l\xe9rations ou de freinages brusques</li>
<li><strong>Temp\xe9rature adapt\xe9e</strong> — votre confort thermique, pas le n\xf4tre</li>
<li><strong>Silence ou musique douce</strong> — selon votre \xe9tat et vos pr\xe9f\xe9rences</li>
<li><strong>V\xe9hicule r\xe9guli\xe8rement d\xe9sinfect\xe9</strong> — important pour les patients immunod\xe9prim\xe9s</li>
<li><strong>Aucune pression sur le temps</strong> — si vous avez besoin d'une pause, on s'arr\xeate</li>
</ul>

<h2>L'Oncopole Claudius Regaud : notre zone d'intervention principale</h2>
<p>L'Institut Universitaire du Cancer de Toulouse (IUCT-Oncopole) est le plus grand centre de lutte contre le cancer du grand sud-ouest. Nous y amenons des patients depuis Toulouse et toute l'Occitanie. Nous connaissons les acc\xe8s, les entr\xe9es d\xe9di\xe9es aux patients ambulatoires, les horaires o\xf9 la circulation est la plus fluide autour du site.</p>

<h2>Planning sur toute la dur\xe9e du traitement</h2>
<p>Si votre protocole de chimioth\xe9rapie est \xe9tabli sur plusieurs mois, nous prenons en charge tout le planning de transport d\xe8s le premier appel. Vous ne nous appelez qu'une fois — et nous sommes l\xe0 \xe0 chaque s\xe9ance.</p>
<p>Si votre protocole change (report de s\xe9ance, ajout de cycle), informez-nous simplement \xe0 l'avance. Nous adaptons le planning sans complication.</p>

<h2>Le remboursement CPAM pour la chimio</h2>
<p>Les cancers (ALD 30) ouvrent droit au remboursement int\xe9gral du transport m\xe9dical. Pour la chimioth\xe9rapie, le m\xe9decin oncologue ou votre m\xe9decin traitant peut \xe9tablir une PMT couvrant l'ensemble du protocole de traitement.</p>
<p>Avec le tiers payant int\xe9gral : vous ne payez rien. Nous g\xe9rons la t\xe9l\xe9transmission CPAM \xe0 chaque s\xe9ance.</p>

<h2>Depuis toute l'Occitanie</h2>
<p>Nous transportons r\xe9guli\xe8rement des patients vers l'Oncopole depuis Pamiers, Albi, Montauban, Auch, Tarbes et d'autres villes d'Occitanie. La longue distance est remboursable quand la sp\xe9cialit\xe9 n'est pas disponible localement.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour organiser votre transport chimioth\xe9rapie. Nous prenons en charge le planning sur toute la dur\xe9e de votre traitement, en coordination avec vos horaires \xe0 l'Oncopole.</p>
</blockquote>
`},{slug:"taxi-radiotherapie-toulouse-cpam",title:"Taxi VSL Radioth\xe9rapie Toulouse : Trajets Quotidiens & Prise en Charge CPAM",description:"Transport m\xe9dical VSL conventionn\xe9 pour les patients en radioth\xe9rapie \xe0 Toulouse (Oncopole, Cliniques). Trajets quotidiens sur 5 \xe0 7 semaines, tiers payant CPAM int\xe9gral, planning fixe.",date:"2025-06-01",category:"Sp\xe9cialit\xe9s",readTime:"5 min",content:`
<p>La radioth\xe9rapie impose souvent un rythme de 5 s\xe9ances par semaine pendant plusieurs semaines cons\xe9cutives. C'est un engagement logistique intense pour le patient — d'autant plus si vous n'habitez pas \xe0 Toulouse. Notre service de transport pour la radioth\xe9rapie vous lib\xe8re de cette contrainte.</p>

<h2>La sp\xe9cificit\xe9 du transport radioth\xe9rapie</h2>
<p>Contrairement \xe0 la chimioth\xe9rapie o\xf9 les effets sont souvent intenses dans les heures qui suivent la s\xe9ance, la radioth\xe9rapie produit une fatigue cumulative sur les semaines. Au d\xe9but du protocole, les patients ressentent peu d'effets. Vers la 3\xe8me ou 4\xe8me semaine, la fatigue et l'inconfort peuvent \xeatre significatifs.</p>
<p>Notre service s'adapte \xe0 cette \xe9volution : conduite identiquement douce d\xe8s le premier jour, mais nous pr\xeatons une attention particuli\xe8re \xe0 votre \xe9tat de confort en fin de protocole.</p>

<h2>Les centres de radioth\xe9rapie \xe0 Toulouse</h2>
<ul>
<li><strong>Oncopole Claudius Regaud (IUCT)</strong> — principal centre de radioth\xe9rapie et curieth\xe9rapie de Toulouse</li>
<li><strong>Clinique Pasteur</strong> — radioth\xe9rapie cardiovasculaire</li>
<li><strong>Clinique Croix du Sud</strong> — radioth\xe9rapie oncologique</li>
</ul>

<h2>Un planning fixe sur 5 \xe0 7 semaines</h2>
<p>Le protocole de radioth\xe9rapie est connu \xe0 l'avance : 5 s\xe9ances par semaine, pendant 5 \xe0 7 semaines selon le traitement. Nous \xe9tablissons votre planning de transport sur toute cette dur\xe9e d\xe8s votre premier appel. Vous n'avez plus \xe0 vous soucier du transport pendant toute la dur\xe9e du protocole.</p>

<h2>Remboursement CPAM pour la radioth\xe9rapie</h2>
<p>Les traitements de radioth\xe9rapie en lien avec un cancer (ALD 30) ou une ALD reconnue ouvrent droit au remboursement int\xe9gral. La prescription m\xe9dicale de transport peut couvrir l'ensemble du protocole (ex : "5 s\xe9ances/semaine du [date d\xe9but] au [date fin]").</p>
<p>Avec le tiers payant int\xe9gral : vous ne payez rien pendant toute la dur\xe9e de votre radioth\xe9rapie.</p>

<h2>Pour les patients r\xe9sidant hors de Toulouse</h2>
<p>Si vous r\xe9sidez \xe0 Pamiers, Albi, Foix, Tarbes ou dans toute autre ville d'Occitanie, et que votre radioth\xe9rapie a lieu \xe0 Toulouse, ce trajet quotidien longue distance peut \xeatre rembours\xe9 par la CPAM. Votre oncologue pr\xe9cisera sur la PMT l'absence de ce service dans votre d\xe9partement.</p>

<blockquote>
<p>Contactez-nous au <strong>07 72 33 98 92</strong> avec la date de d\xe9but de votre protocole de radioth\xe9rapie. Nous organisons votre planning complet en une conversation.</p>
</blockquote>
`},{slug:"taxi-pmr-mobilite-reduite-toulouse-cpam",title:"Taxi PMR & Mobilit\xe9 R\xe9duite \xe0 Toulouse : Transport Adapt\xe9 Conventionn\xe9 CPAM",description:"Transport adapt\xe9 pour les personnes \xe0 mobilit\xe9 r\xe9duite (PMR) \xe0 Toulouse. Aide \xe0 la mont\xe9e et descente, v\xe9hicule SUV spacieux, conventionn\xe9 CPAM. Dialyse, consultations, a\xe9roport.",date:"2025-06-05",category:"Sp\xe9cialit\xe9s",readTime:"5 min",content:`
<p>Se d\xe9placer avec une mobilit\xe9 r\xe9duite \xe0 Toulouse — que ce soit apr\xe8s une chirurgie, avec un handicap permanent, ou en raison d'une pathologie chronique — n\xe9cessite un transport adapt\xe9. Pas juste un taxi avec de la place, mais un service qui comprend vos contraintes et vous accompagne r\xe9ellement.</p>

<h2>Ce que nous proposons pour les patients PMR</h2>
<ul>
<li><strong>Aide \xe0 la mont\xe9e et \xe0 la descente</strong> — nous venons vous chercher \xe0 votre porte et vous aidons \xe0 vous installer confortablement</li>
<li><strong>V\xe9hicule SUV spacieux (Peugeot 5008 GT)</strong> — acc\xe8s facilit\xe9, si\xe8ges sur\xe9lev\xe9s, espace g\xe9n\xe9reux pour vos \xe9quipements (canne, d\xe9ambulateur, fauteuil roulant pliant)</li>
<li><strong>Temps d'embarquement adapt\xe9</strong> — nous n'avons jamais de "prochain client" qui presse</li>
<li><strong>Connaissance des acc\xe8s PMR des h\xf4pitaux</strong> — nous savons o\xf9 d\xe9poser les patients \xe0 mobilit\xe9 r\xe9duite au plus pr\xe8s des entr\xe9es prioritaires</li>
</ul>

<h2>Situations pour lesquelles nous intervenons</h2>
<ul>
<li>Personnes \xe2g\xe9es avec difficult\xe9s \xe0 la marche</li>
<li>Patients post-op\xe9ratoires (hanche, genou, rachis)</li>
<li>Patients avec fauteuil roulant pliant ou d\xe9ambulateur</li>
<li>Personnes souffrant de pathologies neurologiques (Parkinson, SEP)</li>
<li>Insuffisants cardiaques ou respiratoires n\xe9cessitant une aide</li>
</ul>
<p>Nous ne sommes pas \xe9quip\xe9s pour les fauteuils roulants \xe9lectriques ou les fauteuils non pliables — dans ces cas, une ambulance VSL adapt\xe9e est n\xe9cessaire. Appelez-nous pour \xe9valuer ensemble ce dont vous avez besoin.</p>

<h2>Remboursement CPAM pour les patients PMR</h2>
<p>Si votre mobilit\xe9 r\xe9duite est li\xe9e \xe0 une ALD reconnue, le transport m\xe9dical est remboursable. Le m\xe9decin traitant pr\xe9cise sur la PMT que votre \xe9tat ne vous permet pas d'utiliser les transports en commun — ce qui est g\xe9n\xe9ralement le cas pour les patients PMR en traitement r\xe9gulier.</p>

<h2>Au-del\xe0 du m\xe9dical : a\xe9roport, gare, \xe9v\xe9nements</h2>
<p>Nous assurons \xe9galement les courses priv\xe9es pour les personnes \xe0 mobilit\xe9 r\xe9duite : transfert a\xe9roport Toulouse-Blagnac, gare Matabiau, rendez-vous familiaux. Ces courses ne sont pas rembours\xe9es par la CPAM mais offrent le m\xeame niveau de soin et d'assistance.</p>

<blockquote>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> pour nous expliquer votre situation. Nous \xe9valuerons ensemble si notre v\xe9hicule est adapt\xe9 \xe0 vos besoins et comment organiser votre transport.</p>
</blockquote>
`},{slug:"taxi-consultation-specialiste-toulouse-cpam-remboursement",title:"Taxi pour Consultation Sp\xe9cialis\xe9e \xe0 Toulouse : Remboursement CPAM & R\xe9servation",description:"Transport m\xe9dical VSL conventionn\xe9 pour vos consultations de sp\xe9cialistes \xe0 Toulouse (cardiologue, neurologue, oncologue...). Remboursement CPAM si ALD, tiers payant int\xe9gral, r\xe9servation simple.",date:"2025-06-08",category:"Sp\xe9cialit\xe9s",readTime:"5 min",content:`
<p>Vous avez une consultation chez un sp\xe9cialiste \xe0 Toulouse — cardiologue, neurologue, oncologue, rhumatologue, n\xe9phrologue — et vous vous demandez si votre transport peut \xeatre rembours\xe9. La r\xe9ponse d\xe9pend de votre situation m\xe9dicale, mais pour les patients en ALD, c'est g\xe9n\xe9ralement oui.</p>

<h2>Quand la consultation sp\xe9cialis\xe9e ouvre droit au transport rembours\xe9</h2>
<p>Le remboursement s'applique si votre consultation est en lien direct avec votre ALD reconnue. Exemples :</p>
<ul>
<li>Consultation cardiologique pour un patient avec ALD "Insuffisance cardiaque grave" (ALD 5)</li>
<li>Suivi neurologique pour un patient avec ALD "Scl\xe9rose en plaques" (ALD 25)</li>
<li>Consultation oncologique pour un patient en ALD 30 (cancer)</li>
<li>Consultation n\xe9phrologue pour un patient dialys\xe9 (ALD 2)</li>
</ul>
<p>Si votre consultation n'est pas li\xe9e \xe0 votre ALD, le remboursement peut quand m\xeame s'appliquer si votre \xe9tat de sant\xe9 ne vous permet pas d'utiliser les transports en commun — mais dans ce cas, la prise en charge sera partielle (65%).</p>

<h2>Les sp\xe9cialit\xe9s que nous desservons r\xe9guli\xe8rement \xe0 Toulouse</h2>
<ul>
<li><strong>Cardiologie</strong> — CHU Rangueil, Clinique Pasteur, Clinique de l'Union</li>
<li><strong>Neurologie / Neurochirurgie</strong> — CHU Purpan</li>
<li><strong>Oncologie m\xe9dicale</strong> — Oncopole Claudius Regaud, Clinique Croix du Sud</li>
<li><strong>N\xe9phrologie</strong> — CHU Rangueil</li>
<li><strong>Rhumatologie</strong> — CHU Purpan</li>
<li><strong>Pneumologie / ORL</strong> — H\xf4pital Larrey</li>
<li><strong>Endocrinologie</strong> — CHU Rangueil</li>
</ul>

<h2>Ce qui se passe le jour de votre consultation</h2>
<ol>
<li>Nous passons vous chercher \xe0 l'heure convenue \xe0 votre domicile</li>
<li>Nous vous d\xe9posons \xe0 l'entr\xe9e de votre service (sans que vous ayez \xe0 chercher)</li>
<li>Si votre consultation prend du retard, nous attendons — sans frais suppl\xe9mentaires pour les d\xe9lais raisonnables</li>
<li>Nous vous ramenons \xe0 votre domicile en fin de consultation</li>
</ol>

<h2>Pour les patients r\xe9sidant hors de Toulouse</h2>
<p>Si votre sp\xe9cialiste se trouve uniquement \xe0 Toulouse (ce qui est fr\xe9quent pour certaines sp\xe9cialit\xe9s de recours), votre trajet depuis Ari\xe8ge, Tarn, Hautes-Pyr\xe9n\xe9es ou Gers est remboursable. Votre m\xe9decin pr\xe9cise sur la PMT l'absence de ce sp\xe9cialiste dans votre d\xe9partement.</p>

<blockquote>
<p>Pour r\xe9server votre transport vers une consultation sp\xe9cialis\xe9e \xe0 Toulouse, appelez-nous au <strong>07 72 33 98 92</strong>. Pr\xe9cisez l'h\xf4pital, le service et l'heure du rendez-vous.</p>
</blockquote>
`},{slug:"taxi-sortie-hospitalisation-toulouse-cpam",title:"Taxi VSL Sortie d'Hospitalisation \xe0 Toulouse : Retour \xe0 Domicile Rembours\xe9 CPAM",description:"Transport m\xe9dical rembours\xe9 pour votre sortie d'hospitalisation \xe0 Toulouse. Taxi VSL conventionn\xe9 CPAM, aide aux bagages, retour confortable. Disponible 7j/7, toute heure.",date:"2025-06-10",category:"Sp\xe9cialit\xe9s",readTime:"4 min",content:`
<p>Vous sortez de l'h\xf4pital ou d'une clinique de Toulouse et devez rentrer chez vous. Apr\xe8s une op\xe9ration, une hospitalisation de plusieurs jours ou une proc\xe9dure m\xe9dicale, ce trajet retour m\xe9rite d'\xeatre pr\xe9par\xe9 correctement — et dans de nombreux cas, il est rembours\xe9 par la CPAM.</p>

<h2>Quand le transport de sortie d'hospitalisation est rembours\xe9</h2>
<p>Toute hospitalisation compl\xe8te (au moins une nuit) ouvre droit au remboursement du transport de retour \xe0 domicile. Cela inclut :</p>
<ul>
<li>Chirurgie avec s\xe9jour hospitalier</li>
<li>Hospitalisation m\xe9dicale (quelle qu'en soit la dur\xe9e si au moins une nuit)</li>
<li>Accouchement</li>
<li>Hospitalisation psychiatrique</li>
</ul>
<p>Le m\xe9decin de l'h\xf4pital \xe9tablit la PMT lors de votre sortie. Si vous l'avez oubli\xe9, demandez-la \xe0 l'infirmi\xe8re ou au m\xe9decin avant de quitter le service.</p>

<h2>Ce que nous assurons lors de votre sortie</h2>
<ul>
<li><strong>Ponctualit\xe9</strong> — nous attendons votre appel ou nous nous pr\xe9sentons \xe0 l'heure de sortie convenue</li>
<li><strong>Aide aux bagages</strong> — effets personnels, documents, \xe9quipements m\xe9dicaux de retour</li>
<li><strong>Conduite douce</strong> — essentielle apr\xe8s une op\xe9ration ou une longue hospitalisation</li>
<li><strong>Accompagnement jusqu'\xe0 votre domicile</strong> — y compris aide \xe0 monter les escaliers si besoin</li>
</ul>

<h2>Pour les sorties impr\xe9vues ou en urgence</h2>
<p>Les sorties d'hospitalisation sont souvent annonc\xe9es tardivement — parfois le matin pour l'apr\xe8s-midi m\xeame. Nous faisons de notre mieux pour r\xe9pondre \xe0 ces demandes de derni\xe8re minute. Appelez-nous d\xe8s que vous connaissez l'heure de sortie.</p>
<p>Disponible 7j/7, y compris les week-ends et jours f\xe9ri\xe9s.</p>

<h2>Les h\xf4pitaux de Toulouse que nous desservons</h2>
<ul>
<li>CHU Purpan (tous services)</li>
<li>H\xf4pital Rangueil-Larrey</li>
<li>Oncopole Claudius Regaud</li>
<li>Clinique Pasteur, Clinique de l'Union, Clinique des C\xe8dres, Clinique Croix du Sud</li>
<li>Clinique d'Occitanie (Muret)</li>
<li>Et tous les \xe9tablissements de sant\xe9 de l'agglom\xe9ration toulousaine</li>
</ul>

<h2>Si vous rentrez dans un autre d\xe9partement d'Occitanie</h2>
<p>M\xeame si votre domicile est en Ari\xe8ge, dans le Tarn ou dans les Hautes-Pyr\xe9n\xe9es, votre sortie d'hospitalisation depuis Toulouse est \xe9ligible au remboursement CPAM. C'est un droit — assurez-vous simplement que la PMT est bien \xe9tablie avant de partir.</p>

<blockquote>
<p>Vous pr\xe9voyez une sortie d'hospitalisation prochaine ? Appelez-nous au <strong>07 72 33 98 92</strong> d\xe8s que vous connaissez la date. Nous organisons votre retour \xe0 domicile sereinement.</p>
</blockquote>
`},...m,...[{name:"Pamiers",dept:"Ari\xe8ge",deptNum:"09",distToulouse:70,detail:"Pr\xe9fecture de l'Ari\xe8ge et deuxi\xe8me ville du d\xe9partement, Pamiers est une \xe9tape incontournable entre Toulouse et Foix",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Foix",dept:"Ari\xe8ge",deptNum:"09",distToulouse:85,detail:"Pr\xe9fecture de l'Ari\xe8ge, domin\xe9e par son ch\xe2teau m\xe9di\xe9val, Foix est entour\xe9e de montagnes et de for\xeats",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Saint-Girons",dept:"Ari\xe8ge",deptNum:"09",distToulouse:95,detail:"Ville du pi\xe9mont pyr\xe9n\xe9en en Ari\xe8ge, Saint-Girons est la capitale du Couserans et une porte d'entr\xe9e des Pyr\xe9n\xe9es ari\xe9geoises",hospitals:"CHU Purpan, Oncopole"},{name:"Albi",dept:"Tarn",deptNum:"81",distToulouse:80,detail:"Pr\xe9fecture du Tarn et ville \xe9piscopale class\xe9e au patrimoine UNESCO gr\xe2ce \xe0 sa cath\xe9drale Sainte-C\xe9cile en briques rouges",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole, Clinique Pasteur"},{name:"Castres",dept:"Tarn",deptNum:"81",distToulouse:75,detail:"Deuxi\xe8me ville du Tarn, Castres est un centre industriel et commercial important, berceau du rugby fran\xe7ais",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Montauban",dept:"Tarn-et-Garonne",deptNum:"82",distToulouse:50,detail:"Pr\xe9fecture du Tarn-et-Garonne, ville natale du peintre Ingres, Montauban est une bastide rose au confluent du Tarn et de l'Aveyron",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole, Clinique Pasteur"},{name:"Auch",dept:"Gers",deptNum:"32",distToulouse:75,detail:"Pr\xe9fecture du Gers, cit\xe9 gasconne sur les hauteurs de la vall\xe9e du Gers, connue pour sa cath\xe9drale et sa gastronomie",hospitals:"CHU Purpan, H\xf4pital Rangueil"},{name:"Tarbes",dept:"Hautes-Pyr\xe9n\xe9es",deptNum:"65",distToulouse:155,detail:"Pr\xe9fecture des Hautes-Pyr\xe9n\xe9es et capitale de la Bigorre, point de d\xe9part id\xe9al vers les stations de ski des Pyr\xe9n\xe9es",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Cahors",dept:"Lot",deptNum:"46",distToulouse:115,detail:"Pr\xe9fecture du Lot, ville m\xe9di\xe9vale sur un m\xe9andre du Lot, c\xe9l\xe8bre pour son pont Valentr\xe9 class\xe9 au patrimoine UNESCO et ses vins AOC Cahors",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Carcassonne",dept:"Aude",deptNum:"11",distToulouse:90,detail:"Pr\xe9fecture de l'Aude, cit\xe9 m\xe9di\xe9vale fortifi\xe9e inscrite au patrimoine UNESCO, Carcassonne est la deuxi\xe8me ville la plus visit\xe9e de France",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Rodez",dept:"Aveyron",deptNum:"12",distToulouse:155,detail:"Pr\xe9fecture de l'Aveyron, ville haute perch\xe9e sur un plateau, domin\xe9e par sa cath\xe9drale gothique en gr\xe8s rose, capitale d'un d\xe9partement rural aux paysages pr\xe9serv\xe9s",hospitals:"CHU Purpan, Oncopole"},{name:"Millau",dept:"Aveyron",deptNum:"12",distToulouse:115,detail:"Ville embl\xe9matique de l'Aveyron, nich\xe9e dans la vall\xe9e du Tarn, Millau est mondialement connue pour son viaduc et la qualit\xe9 de sa ganterie traditionnelle",hospitals:"CHU Purpan, Oncopole"},{name:"Mende",dept:"Loz\xe8re",deptNum:"48",distToulouse:175,detail:"Pr\xe9fecture de la Loz\xe8re, plus petit d\xe9partement de France en population, Mende est une ville calme au cœur des hauts plateaux du Massif Central",hospitals:"CHU Purpan, Oncopole"},{name:"Figeac",dept:"Lot",deptNum:"46",distToulouse:130,detail:"Cit\xe9 m\xe9di\xe9vale du Lot, berceau de Champollion le d\xe9chiffreur des hi\xe9roglyphes, Figeac est une ville culturelle et touristique du Quercy",hospitals:"CHU Purpan, Oncopole"},{name:"Lourdes",dept:"Hautes-Pyr\xe9n\xe9es",deptNum:"65",distToulouse:162,detail:"Ville de p\xe8lerinage internationale aux Hautes-Pyr\xe9n\xe9es, Lourdes accueille chaque ann\xe9e des millions de fid\xe8les et dispose de nombreux \xe9tablissements de soins sp\xe9cialis\xe9s",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Narbonne",dept:"Aude",deptNum:"11",distToulouse:150,detail:"Sous-pr\xe9fecture de l'Aude et ancienne capitale de la Gaule Narbonnaise, Narbonne est une ville de caract\xe8re entre mer et garrigue, carrefour entre Occitanie et Catalogne",hospitals:"CHU Purpan, Oncopole"},{name:"Perpignan",dept:"Pyr\xe9n\xe9es-Orientales",deptNum:"66",distToulouse:200,detail:"Pr\xe9fecture des Pyr\xe9n\xe9es-Orientales et capitale historique du Roussillon, Perpignan est la deuxi\xe8me ville d'Occitanie, carrefour entre la France, l'Espagne et la M\xe9diterran\xe9e",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Montpellier",dept:"H\xe9rault",deptNum:"34",distToulouse:245,detail:"Pr\xe9fecture de l'H\xe9rault et m\xe9tropole universitaire de r\xe9f\xe9rence, Montpellier abrite le CHU de Montpellier et attire des patients de tout le sud de la France pour ses sp\xe9cialit\xe9s m\xe9dicales de pointe",hospitals:"CHU Purpan, Oncopole, Clinique Pasteur"},{name:"B\xe9ziers",dept:"H\xe9rault",deptNum:"34",distToulouse:155,detail:"Deuxi\xe8me ville de l'H\xe9rault et capitale des vins du Languedoc, B\xe9ziers est une cit\xe9 dynamique entre Montagne Noire et M\xe9diterran\xe9e, au carrefour des axes autoroutiers entre Toulouse et la c\xf4te",hospitals:"CHU Purpan, Oncopole"},{name:"N\xeemes",dept:"Gard",deptNum:"30",distToulouse:250,detail:"Pr\xe9fecture du Gard et cit\xe9 romaine exceptionnelle, N\xeemes conserve des monuments antiques parmi les mieux pr\xe9serv\xe9s d'Europe, notamment ses ar\xe8nes et la Maison Carr\xe9e class\xe9es au patrimoine mondial",hospitals:"CHU Purpan, Oncopole, Clinique Pasteur"},{name:"Al\xe8s",dept:"Gard",deptNum:"30",distToulouse:225,detail:"Deuxi\xe8me ville du Gard et ancienne capitale du bassin minier des C\xe9vennes, Al\xe8s est une ville en pleine reconversion \xe9conomique aux portes du Parc National des C\xe9vennes",hospitals:"CHU Purpan, Oncopole"},{name:"Gaillac",dept:"Tarn",deptNum:"81",distToulouse:60,detail:"Petite ville du Tarn r\xe9put\xe9e pour son vignoble AOC Gaillac, l'une des plus anciennes appellations de France, Gaillac est un bourg de caract\xe8re sur les rives du Tarn entre Toulouse et Albi",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"},{name:"Mazamet",dept:"Tarn",deptNum:"81",distToulouse:85,detail:"Ville industrielle du Tarn aux pieds de la Montagne Noire, Mazamet est connue pour son histoire li\xe9e au d\xe9lainage de la laine et pour ses paysages naturels remarquables entre plaine et massif",hospitals:"CHU Purpan, H\xf4pital Rangueil, Oncopole"}].map(e=>({slug:`vsl-taxi-conventionne-${x(e.name)}`,title:`Taxi VSL ${e.name} (${e.deptNum}) → Toulouse : Transport M\xe9dical Longue Distance`,description:`Transport m\xe9dical conventionn\xe9 CPAM depuis ${e.name} en ${e.dept} vers les h\xf4pitaux de Toulouse. Longue distance remboursable sur prescription m\xe9dicale. Confort Peugeot 5008 GT.`,date:"2025-03-10",category:"Trajets",readTime:"5 min",content:function(e){return`
<p>${e.detail}. Le trajet depuis ${e.name} jusqu'aux h\xf4pitaux sp\xe9cialis\xe9s de Toulouse repr\xe9sente environ ${e.distToulouse} km. Pour les patients ari\xe9geois, tarnais, gersois ou haut-pyr\xe9n\xe9ens qui doivent se rendre r\xe9guli\xe8rement \xe0 Toulouse pour des soins que leur d\xe9partement ne propose pas, ce trajet peut \xeatre rembours\xe9 par la CPAM.</p>

<h2>Pourquoi les patients du ${e.dept} viennent \xe0 Toulouse</h2>
<p>Le ${e.dept} (${e.deptNum}) dispose d'\xe9tablissements de qualit\xe9, mais pour certaines sp\xe9cialit\xe9s — oncologie de pointe, neurochirurgie, transplantation d'organes, h\xe9mato-oncologie, certains examens d'imagerie sp\xe9cialis\xe9e — le CHU de Toulouse est l'\xe9tablissement de r\xe9f\xe9rence r\xe9gionale. Chaque ann\xe9e, de nombreux patients de ${e.name} font ce trajet r\xe9guli\xe8rement pour leurs traitements.</p>

<p>\xc9tablissements accessibles depuis ${e.name} :</p>
<ul>
<li><strong>${e.hospitals.split(", ").join("</strong></li><li><strong>")}</strong></li>
</ul>

<h2>Le transport longue distance rembours\xe9 par la CPAM</h2>
<p>Bonne nouvelle : ce trajet peut \xeatre enti\xe8rement pris en charge par l'Assurance Maladie. Pour cela, votre m\xe9decin prescripteur doit mentionner sur la Prescription M\xe9dicale de Transport :</p>
<ul>
<li>La nature de votre ALD (Affection de Longue Dur\xe9e)</li>
<li>La sp\xe9cialit\xe9 m\xe9dicale requise et l'\xe9tablissement d\xe9sign\xe9 \xe0 Toulouse</li>
<li>L'absence de cette sp\xe9cialit\xe9 dans un \xe9tablissement de votre d\xe9partement</li>
</ul>
<p>Si ces \xe9l\xe9ments figurent sur l'ordonnance, le trajet aller-retour depuis ${e.name} jusqu'\xe0 Toulouse est remboursable selon le bar\xe8me kilom\xe9trique CPAM.</p>

<h2>Votre confort sur la route entre ${e.name} et Toulouse</h2>
<p>Un trajet de ${e.distToulouse} km apr\xe8s un traitement m\xe9dical n'est pas anodin. Nous adaptons notre conduite \xe0 votre \xe9tat de sant\xe9 : pause possible sur la route si n\xe9cessaire, temp\xe9rature confortable dans le v\xe9hicule, musique discr\xe8te ou silence selon vos pr\xe9f\xe9rences.</p>
<p>Notre Peugeot 5008 GT offre un espace g\xe9n\xe9reux et des si\xe8ges confortables. Vous pouvez vous reposer ou m\xeame dormir pendant le trajet retour sans vous soucier de la conduite.</p>

<h2>R\xe9server depuis ${e.name}</h2>
<p>Appelez-nous au <strong>07 72 33 98 92</strong> en pr\xe9cisant votre ville de d\xe9part, la date et l'heure de votre rendez-vous m\xe9dical \xe0 Toulouse. Pour les traitements r\xe9guliers, nous \xe9tablissons ensemble un planning sur toute la dur\xe9e de votre traitement.</p>

<blockquote>
<p>Nous intervenons depuis toute l'Occitanie. Si vous avez un doute sur la possibilit\xe9 de prise en charge CPAM pour votre trajet depuis ${e.name}, appelez-nous — nous pouvons vous guider avant m\xeame la r\xe9servation.</p>
</blockquote>
`}(e)})),...[{name:"Clinique Pasteur",shortName:"Clinique Pasteur",spec:"cardiologie interventionnelle, chirurgie cardiovasculaire et vasculaire",location:"avenue de Lombez, Toulouse",detail:"\xc9tablissement priv\xe9 de r\xe9f\xe9rence en cardiologie, la Clinique Pasteur est l'une des premi\xe8res cliniques de France pour les interventions cardiaques"},{name:"Clinique de l'Union",shortName:"Clinique de l'Union",spec:"dialyse, chirurgie g\xe9n\xe9rale, soins de suite et r\xe9\xe9ducation",location:"Saint-Jean, nord de Toulouse",detail:"\xc9tablissement priv\xe9 du nord toulousain disposant d'un important centre de dialyse et d'un plateau technique complet"},{name:"Clinique des C\xe8dres",shortName:"Clinique des C\xe8dres",spec:"chirurgie orthop\xe9dique, r\xe9\xe9ducation, maternit\xe9",location:"Cornebarrieu, nord-ouest de Toulouse",detail:"Clinique priv\xe9e multidisciplinaire du nord-ouest toulousain, r\xe9put\xe9e pour son service de chirurgie orthop\xe9dique et sa maternit\xe9"},{name:"Clinique Croix du Sud",shortName:"Clinique Croix du Sud",spec:"oncologie m\xe9dicale, maternit\xe9, chirurgie",location:"Quint-Fonsegrives, est de Toulouse",detail:"\xc9tablissement priv\xe9 situ\xe9 \xe0 l'est de l'agglom\xe9ration, la Clinique Croix du Sud propose un plateau technique complet incluant un service d'oncologie"},{name:"H\xf4pital Larrey",shortName:"H\xf4pital Larrey",spec:"pneumologie, ORL, dermatologie, m\xe9decine interne",location:"avenue de Lombez, Toulouse",detail:"Site du CHU de Toulouse d\xe9di\xe9 \xe0 la pneumologie et \xe0 l'ORL, l'H\xf4pital Larrey re\xe7oit les patients atteints de pathologies respiratoires complexes"},{name:"Clinique d'Occitanie Muret",shortName:"Clinique d'Occitanie Muret",spec:"chirurgie g\xe9n\xe9rale, urgences, m\xe9decine, maternit\xe9",location:"Muret, 20 km au sud de Toulouse",detail:"Principal \xe9tablissement de sant\xe9 du bassin muretain, la Clinique d'Occitanie propose un service d'urgences ouvert 24h/24 et couvre les besoins de tout le Volvestre"},{name:"Oncopole Claudius Regaud",shortName:"Oncopole Claudius Regaud",spec:"chimioth\xe9rapie, radioth\xe9rapie, immunoth\xe9rapie, h\xe9mato-oncologie",location:"Toulouse, campus de l'Institut Universitaire du Cancer",detail:"L'Institut Universitaire du Cancer de Toulouse — Oncopole est l'un des plus grands centres de lutte contre le cancer en France, regroupant soins, recherche et enseignement sur un campus d\xe9di\xe9"}].map(e=>({slug:`taxi-vsl-${x(e.name)}`,title:`Taxi VSL ${e.shortName} Toulouse : Transport M\xe9dical Conventionn\xe9 CPAM`,description:`Transport m\xe9dical conventionn\xe9 vers ${e.shortName} \xe0 Toulouse. Sp\xe9cialit\xe9s : ${e.spec.split(",")[0]}. Tiers payant CPAM int\xe9gral, d\xe9pose prioritaire. Disponible 24h/24.`,date:"2025-02-25",category:"H\xf4pitaux",readTime:"4 min",content:function(e){return`
<p>${e.detail}. Pour les patients qui doivent s'y rendre r\xe9guli\xe8rement — que ce soit pour une chimioth\xe9rapie, un suivi de dialyse, une consultation de sp\xe9cialit\xe9 ou une r\xe9\xe9ducation — le transport est une question centrale. C'est l\xe0 que notre r\xf4le commence.</p>

<h2>Se rendre \xe0 ${e.shortName} en taxi VSL conventionn\xe9</h2>
<p>En tant que taxi conventionn\xe9 CPAM, nous assurons les transports m\xe9dicaux vers ${e.shortName} depuis toute la Haute-Garonne et les d\xe9partements voisins d'Occitanie. Si vous \xeates en ALD \xe0 100%, le tiers payant int\xe9gral s'applique : vous ne d\xe9boursez rien.</p>

<p>Les principales sp\xe9cialit\xe9s accessibles en taxi VSL \xe0 ${e.shortName} : <strong>${e.spec}</strong>.</p>

<h2>Pourquoi faire confiance \xe0 un chauffeur qui conna\xeet ${e.shortName} ?</h2>
<p>Nous connaissons ${e.shortName} et son environnement depuis des ann\xe9es. Nous savons quelle entr\xe9e emprunter, o\xf9 se trouve l'accueil des consultations externes, quels jours la circulation est plus dense, et o\xf9 d\xe9poser les patients \xe0 mobilit\xe9 r\xe9duite au plus pr\xe8s du service. Ces d\xe9tails semblent anodins, mais pour un patient qui a d\xe9j\xe0 beaucoup \xe0 g\xe9rer, c'est un soulagement consid\xe9rable.</p>

<h2>Comment r\xe9server votre transport vers ${e.shortName} ?</h2>
<p>Munissez-vous de votre Prescription M\xe9dicale de Transport (PMT) et appelez-nous au <strong>07 72 33 98 92</strong>. Pour les rendez-vous r\xe9guliers, nous \xe9tablissons un planning sur plusieurs semaines afin que vous n'ayez \xe0 vous soucier de rien.</p>
<ul>
<li>Appelez-nous de pr\xe9f\xe9rence la veille ou 48h avant votre rendez-vous</li>
<li>Pour les traitements r\xe9guliers (dialyse, chimio, radio), une seule r\xe9servation pour plusieurs mois</li>
<li>Si votre rendez-vous prend du retard, nous attendons sans frais suppl\xe9mentaires</li>
</ul>

<blockquote>
<p>Le transport vers ${e.shortName} est une \xe9tape de votre parcours de soins que nous prenons en charge enti\xe8rement — du d\xe9part de votre domicile \xe0 l'entr\xe9e de votre service. Vous n'avez qu'\xe0 penser \xe0 votre sant\xe9.</p>
</blockquote>
`}(e)}))];var v=n(6577);let h="edge",f={width:1200,height:630},b="image/png",T={Guide:"#8b5cf6",Hôpitaux:"#ef4444","Transport M\xe9dical":"#3b82f6",Trajets:"#22c55e","Courses Priv\xe9es":"#eab308",Villes:"#64748b"};async function q(){return g.map(e=>({slug:e.slug}))}function C({params:e}){var t;let n=(t=e.slug,g.find(e=>e.slug===t)),o=n?.title??"Taxi Conventionn\xe9 CPAM Toulouse",s=n?.category??"Guide",a=T[s]??"#3b82f6",{brand:i,contact:r}=v.siteConfig;return new c.E((0,d.jsxs)("div",{style:{background:"linear-gradient(135deg, #0f172a 0%, #1e2d4a 100%)",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"56px 72px",fontFamily:"system-ui, sans-serif"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:16},children:[(0,d.jsx)("div",{style:{background:a,borderRadius:"8px",padding:"6px 16px",fontSize:13,fontWeight:800,color:"white",letterSpacing:"0.12em",textTransform:"uppercase",display:"flex"},children:s}),(0,d.jsx)("div",{style:{color:"#475569",fontSize:14,display:"flex"},children:"taxi-31-toulouse.fr"})]}),(0,d.jsx)("div",{style:{fontSize:o.length>60?40:48,fontWeight:900,color:"white",lineHeight:1.2,display:"flex",flex:1,alignItems:"center",padding:"24px 0"},children:o}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)("div",{style:{fontSize:22,fontWeight:800,color:"#eab308",display:"flex"},children:i.legalName}),(0,d.jsx)("div",{style:{fontSize:15,color:"#64748b",display:"flex"},children:"Taxi conventionn\xe9 CPAM • Tiers payant int\xe9gral"})]}),(0,d.jsx)("div",{style:{background:"#eab308",borderRadius:"12px",padding:"10px 24px",fontSize:20,fontWeight:900,color:"#0f172a",display:"flex"},children:r.phoneDisplay})]})]}),{...f})}let P={...o},L=P.default,A=P.generateImageMetadata;if("function"!=typeof L)throw Error('Default export is missing in "/Users/mondz/Downloads/taxi-occitanie-project/src/app/(site)/blog/[slug]/opengraph-image.tsx"');async function y(e,t){let n;let{__metadata_id__:o,...s}=t.params||{},a=o?.[0],i=A?await A({params:s}):null;return i&&null==(n=i.find(e=>e.id.toString()===a)?.id)?new p.xk("Not Found",{status:404}):L({params:t.params?s:void 0,id:n})}let M=new r.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/(site)/blog/[slug]/opengraph-image-fx5gi7/route",pathname:"/blog/[slug]/opengraph-image-fx5gi7",filename:"opengraph-image",bundlePath:"app/(site)/blog/[slug]/opengraph-image-fx5gi7/route"},resolvedPagePath:"next-metadata-route-loader?page=%2F(site)%2Fblog%2F%5Bslug%5D%2Fopengraph-image-fx5gi7%2Froute&filePath=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-occitanie-project%2Fsrc%2Fapp%2F(site)%2Fblog%2F%5Bslug%5D%2Fopengraph-image.tsx&isDynamic=1!?__next_metadata_route__",nextConfigOutput:"",userland:s}),{requestAsyncStorage:z,staticGenerationAsyncStorage:S,serverHooks:V}=M,D="/(site)/blog/[slug]/opengraph-image-fx5gi7/route";function N(){return(0,l.XH)({serverHooks:V,staticGenerationAsyncStorage:S})}let j=a,H=i.a.wrap(M)},6577:(e,t,n)=>{"use strict";n.d(t,{siteConfig:()=>o});let o={brand:{legalName:"OCCITANIE MEDI MOBILITY",shortName:"Taxi 31 Toulouse",displayName:"Taxi31Toulouse",highlight:"31",tagline:"Conventionn\xe9 CPAM",taglineAlt:"Conventionn\xe9 CPAM & Priv\xe9",cpamLabel:"Agr\xe9\xe9 CPAM Haute-Garonne"},domain:"https://www.taxi-31-toulouse.fr",contact:{phone:"0772339892",phoneDisplay:"07 72 33 98 92",phoneE164:"+33772339892",email:"contact@taxi-31-toulouse.fr",whatsapp:"https://wa.me/33772339892",smsBody:"Bonjour, je souhaite r\xe9server un taxi..."},address:{street:"6 rue Buissonni\xe8re Bat A",city:"Fonbeauzard",postalCode:"31140",region:"Haute-Garonne",country:"FR",display:"Toulouse & Occitanie",displaySub:"Haute-Garonne (31)"},geo:{lat:"43.6843",lng:"1.4230",metaRegion:"FR-OCC",metaCity:"Toulouse",metaPosition:"43.6047;1.4442",metaICBM:"43.6047, 1.4442"},google:{adsId:"AW-17844653906",searchConsole:"ETCwhGEYjo9LoL4TK82q9VWvXsOc5TTg8gg0WJzOZI",cid:"15905025186406049849",mapsUrl:"https://maps.google.com/?cid=15905025186406049849",reviewUrl:"https://g.page/r/Cbh2nxTvVS7cEBM/review",sameAsGPage:"https://g.page/r/Cbh2nxTvVS7cEAE"},seo:{title:"Taxi Conventionn\xe9 CPAM Toulouse | Transport M\xe9dical & Courses Priv\xe9es",titleTemplate:"%s | Taxi 31 Toulouse — Occitanie M\xe9di Mobility",description:"Taxi VSL conventionn\xe9 CPAM \xe0 Toulouse et en Occitanie. Transport m\xe9dical (dialyse, chimioth\xe9rapie, ALD) avec tiers payant int\xe9gral — 0€ d'avance. Courses priv\xe9es : A\xe9roport Blagnac, Gare Matabiau, \xe9v\xe9nements. Disponible 24h/24.",ogTitle:"Taxi Conventionn\xe9 CPAM Toulouse — Occitanie M\xe9di Mobility",ogDescription:"Transport m\xe9dical VSL rembours\xe9 CPAM (dialyse, chimio, ALD) et courses priv\xe9es (a\xe9roport, gare, mariages) \xe0 Toulouse et en Occitanie. Tiers payant int\xe9gral — 0€ d'avance.",twitterTitle:"Taxi Conventionn\xe9 CPAM Toulouse — Occitanie M\xe9di Mobility",twitterDescription:"Transport m\xe9dical VSL et courses priv\xe9es \xe0 Toulouse. Tiers payant int\xe9gral, 0€ d'avance. Disponible 24h/24.",localBusinessName:"Taxi Conventionn\xe9 CPAM Toulouse — Occitanie M\xe9di Mobility",localBusinessDescription:"Taxi conventionn\xe9 CPAM et VSL en Occitanie. Transport m\xe9dical assis (ALD, chimioth\xe9rapie, dialyse, radioth\xe9rapie) avec tiers payant int\xe9gral — 0€ d'avance. Courses priv\xe9es : a\xe9roport Toulouse-Blagnac, gare Matabiau, mariages, \xe9v\xe9nements. Disponible 24h/24."},cities31:["Toulouse","Muret","Colomiers","Tournefeuille","Blagnac","Plaisance-du-Touch","Cugnaux","Balma","Ramonville-Saint-Agne","Castanet-Tolosan","Fonsorbes","L'Union","Saint-Orens-de-Gameville","Saint-Jean","Castelginest","Portet-sur-Garonne","Auterive","Revel","Saint-Lys","L\xe9guevin","Frouzins","Grenade","Aussonne","Cornebarrieu","Launaguet","Aucamville","Fronton","Villemur-sur-Tarn","Beauzelle","Brugui\xe8res","Fenouillet","Saint-Jory","Gratentour","Montastruc-la-Conseill\xe8re","Verfeil","Carbonne","Caz\xe8res","Rieumes","Seysses","Eaunes","Labarthe-sur-L\xe8ze","Pins-Justaret","Roques","Saubens","Mondonville","Pibrac","Brax","Lherm","Lab\xe8ge","Escalquens","Lanta","Caraman","Nailloux","Villefranche-de-Lauragais","Montgiscard","L'Isle-Jourdain","Cintegabelle","Rieux-Volvestre"],regionalCities:["Pamiers","Foix","Saint-Girons","Albi","Castres","Montauban","Auch","Tarbes","Cahors","Carcassonne","Rodez","Millau","Mende","Figeac","Lourdes","Narbonne"]}}},e=>{var t=t=>e(e.s=t);e.O(0,[713],()=>t(1542));var n=e.O();(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_app/(site)/blog/[slug]/opengraph-image-fx5gi7/route"]=n}]);
//# sourceMappingURL=route.js.map