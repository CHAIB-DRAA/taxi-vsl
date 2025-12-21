"use strict";(()=>{var e={};e.id=404,e.ids=[404],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{e.exports=require("path")},7360:e=>{e.exports=require("url")},4526:(e,t,s)=>{s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>d,tree:()=>u}),s(7791),s(2628),s(2523);var a=s(3191),r=s(8716),n=s(7922),o=s.n(n),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let u=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7791)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/blog/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2628)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,2523)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/mondz/Downloads/taxi-occitanie-project/src/app/blog/page.tsx"],x="/blog/page",p={require:s,loadChunk:()=>Promise.resolve()},d=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},2095:(e,t,s)=>{s.d(t,{D:()=>a});let a=[...["Muret","Colomiers","Tournefeuille","Blagnac","Plaisance-du-Touch","Cugnaux","Balma","Ramonville-Saint-Agne","Castanet-Tolosan","Saint-Gaudens","Fonsorbes","L'Union","Saint-Orens-de-Gameville","Saint-Jean","Castelginest","Portet-sur-Garonne","Auterive","Revel","Saint-Lys","Leguevin","Frouzins","Grenade","Aussonne","Cornebarrieu","Launaguet","Aucamville","Fronton","Villemur-sur-Tarn","Beauzelle","Brugui\xe8res","Fenouillet","Saint-Jory","Gratentour","Montastruc-la-Conseill\xe8re","Verfeil","Carbonne","Caz\xe8res","Rieumes","Seysses","Eaunes","Labarthe-sur-L\xe8ze","Pins-Justaret","Roques","Saubens","Mondonville","Pibrac","Brax"].map((e,t)=>{let s=[`Besoin d'un transport m\xe9dical au d\xe9part de ${e} ?`,`Votre Taxi VSL conventionn\xe9 sur le secteur de ${e}`,`Transport assis professionnalis\xe9 (TAP) depuis ${e}`][t%3];return{slug:`taxi-conventionne-vsl-${e.toLowerCase().replace(/ /g,"-").replace(/'/g,"").replace(/é/g,"e").replace(/è/g,"e").replace(/à/g,"a")}`,title:`Taxi Conventionn\xe9 ${e} (31) : Transport M\xe9dical VSL`,description:`R\xe9servez votre taxi conventionn\xe9 CPAM \xe0 ${e}. Transport m\xe9dical assis vers les h\xf4pitaux de Toulouse. Tiers payant int\xe9gral, aucune avance de frais.`,date:new Date().toISOString(),category:"Villes",content:`
      <p class="lead">Vous r\xe9sidez \xe0 <strong>${e}</strong> (31) et vous avez besoin d'un transport sanitaire pour vous rendre \xe0 un examen m\xe9dical, une dialyse ou une hospitalisation \xe0 Toulouse ?</p>
      
      <h2>${s}</h2>
      <p><strong>Taxi 31 Toulouse</strong> assure quotidiennement la liaison entre ${e} et tous les centres de soins de la r\xe9gion toulousaine. En tant que prestataire conventionn\xe9 par la S\xe9curit\xe9 Sociale (CPAM), nous vous offrons une alternative confortable aux ambulances et VSL classiques.</p>
      
      <h3>Pourquoi choisir notre service \xe0 ${e} ?</h3>
      <ul>
        <li><strong>Z\xe9ro avance de frais :</strong> Gr\xe2ce au Tiers Payant, si vous \xeates \xe0 100% (ALD), vous ne payez rien \xe0 bord.</li>
        <li><strong>Ponctualit\xe9 garantie :</strong> Nous connaissons les temps de trajet exacts entre ${e} et la rocade toulousaine aux heures de pointe.</li>
        <li><strong>Confort Berline :</strong> Voyagez dans un v\xe9hicule discret et climatis\xe9, bien plus agr\xe9able qu'un v\xe9hicule sanitaire blanc classique.</li>
        <li><strong>Aide administrative :</strong> Nous vous aidons \xe0 remplir les formalit\xe9s d'entr\xe9e \xe0 l'h\xf4pital.</li>
      </ul>

      <h2>Les trajets fr\xe9quents depuis ${e}</h2>
      <p>Nos chauffeurs effectuent tr\xe8s r\xe9guli\xe8rement les navettes suivantes. Nous connaissons les raccourcis pour \xe9viter les bouchons du p\xe9riph\xe9rique :</p>
      <ul>
        <li>Taxi ${e} ↔ <strong>CHU Purpan</strong> (Urgences, Consultations, Pierre-Paul Riquet)</li>
        <li>Taxi ${e} ↔ <strong>Oncopole</strong> (Institut Claudius Regaud)</li>
        <li>Taxi ${e} ↔ <strong>Clinique Pasteur</strong> et Clinique de l'Union</li>
        <li>Taxi ${e} ↔ <strong>H\xf4pital Rangueil</strong></li>
      </ul>

      <h3>Comment r\xe9server votre taxi VSL \xe0 ${e} ?</h3>
      <p>Pour b\xe9n\xe9ficier du tiers payant au d\xe9part de ${e}, vous devez simplement avoir votre <strong>Prescription M\xe9dicale de Transport</strong> (Bon de transport) sign\xe9e par votre m\xe9decin, ainsi que votre Carte Vitale.</p>
      <p>Contactez-nous au <strong>07 72 33 98 92</strong> pour bloquer votre cr\xe9neau horaire. Nous venons vous chercher directement \xe0 votre domicile.</p>
    `}}),...["H\xf4pital Purpan (CHU)","H\xf4pital Rangueil","Oncopole Claudius Regaud","Clinique Pasteur","Clinique des C\xe8dres","Clinique de l'Union","Clinique d'Occitanie (Muret)","H\xf4pital Pierre-Paul Riquet","Clinique Rive Gauche","Clinique Croix du Sud","H\xf4pital Larrey","H\xf4pital des Enfants","H\xf4pital Joseph Ducuing","Clinique Saint-Exup\xe9ry","H\xf4pital Marchant"].map(e=>({slug:`transport-taxi-${e.toLowerCase().replace(/ /g,"-").replace(/[\(\)']/g,"").replace(/é/g,"e")}`,title:`Taxi pour ${e} : D\xe9pose, Acc\xe8s et Remboursement`,description:`Comment aller \xe0 ${e} en taxi conventionn\xe9 ? Guide complet : points de d\xe9pose, admission et prise en charge CPAM avec Taxi 31 Toulouse.`,date:new Date().toISOString(),category:"H\xf4pitaux",content:`
    <p>Vous avez une convocation pour une consultation ou une hospitalisation \xe0 <strong>${e}</strong> ? Laissez-vous conduire par un expert du transport m\xe9dical toulousain.</p>
    
    <h2>Se rendre \xe0 ${e} sans stress</h2>
    <p>Les parkings de ${e} sont souvent satur\xe9s et co\xfbteux. En choisissant un <strong>Taxi Conventionn\xe9</strong>, vous \xe9vitez la fatigue de la conduite et le stress du stationnement. Votre chauffeur vous d\xe9pose au plus pr\xe8s de l'entr\xe9e de votre service.</p>
    
    <h3>O\xf9 se fait la d\xe9pose taxi \xe0 ${e} ?</h3>
    <p>Contrairement aux v\xe9hicules personnels, les taxis conventionn\xe9s ont acc\xe8s aux zones r\xe9serv\xe9es. Selon votre convocation, nous vous d\xe9poserons :</p>
    <ul>
      <li>Devant l'entr\xe9e principale pour les admissions classiques.</li>
      <li>\xc0 l'acc\xe8s "Ambulances/VSL" pour les s\xe9ances de dialyse ou chimioth\xe9rapie (acc\xe8s de plain-pied).</li>
      <li>Aux urgences si n\xe9cessaire.</li>
    </ul>
    
    <h2>Prise en charge \xe0 100% pour vos trajets vers ${e}</h2>
    <p>Si votre \xe9tat de sant\xe9 le justifie, votre m\xe9decin vous a prescrit un bon de transport. ${e} \xe9tant un \xe9tablissement de soins agr\xe9\xe9, vos trajets aller et retour sont couverts par la CPAM.</p>
    <p><strong>Rappel important :</strong> Pour ne pas avancer les frais, pr\xe9sentez au chauffeur votre attestation de droits \xe0 jour.</p>

    <h3>Le retour : Nous vous attendons</h3>
    <p>Une fois votre examen termin\xe9 \xe0 ${e}, il suffit de nous appeler ou de nous envoyer un SMS. Si le m\xe9decin a du retard, pas de panique : nous adaptons notre planning pour assurer votre retour \xe0 domicile en toute s\xe9r\xe9nit\xe9.</p>
  `})),{slug:"difference-taxi-conventionne-vsl-ambulance",title:"Taxi Conventionn\xe9, VSL ou Ambulance : Lequel choisir ?",description:"Comprendre la diff\xe9rence entre Taxi Conventionn\xe9, VSL et Ambulance. Lequel est rembours\xe9 ? Lequel est le plus confortable ? On vous explique tout.",date:new Date().toISOString(),category:"Conseils",content:`
      <h2>La grande confusion des transports sanitaires</h2>
      <p>Lorsqu'un m\xe9decin vous prescrit un "Transport Assis Professionnalis\xe9" (TAP), vous avez le choix entre un VSL (V\xe9hicule Sanitaire L\xe9ger) et un Taxi Conventionn\xe9. Beaucoup de patients pensent \xe0 tort que le VSL est obligatoire pour \xeatre rembours\xe9. C'est faux.</p>
      
      <h3>Tableau comparatif</h3>
      <table class="w-full border-collapse border border-slate-200 my-6">
        <thead>
          <tr class="bg-slate-100">
            <th class="border p-3 text-left">Crit\xe8re</th>
            <th class="border p-3 text-left">Taxi Conventionn\xe9</th>
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
            <td class="border p-3 font-bold">V\xe9hicule</td>
            <td class="border p-3">Berline confort (Mercedes, Tesla...)</td>
            <td class="border p-3">Petite voiture blanche utilitaire</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">Discr\xe9tion</td>
            <td class="border p-3">Totale (V\xe9hicule banalis\xe9)</td>
            <td class="border p-3">Faible (Croix bleue visible)</td>
          </tr>
          <tr>
            <td class="border p-3 font-bold">Hygi\xe8ne</td>
            <td class="border p-3">Stricte (Normes COVID)</td>
            <td class="border p-3">Stricte</td>
          </tr>
        </tbody>
      </table>

      <h2>Pourquoi privil\xe9gier le Taxi Conventionn\xe9 ?</h2>
      <p>Le taxi offre souvent un confort sup\xe9rieur (suspensions, espace aux jambes, climatisation) particuli\xe8rement appr\xe9ciable apr\xe8s une s\xe9ance de chimioth\xe9rapie ou une dialyse fatigante. De plus, pour des raisons de discr\xe9tion vis-\xe0-vis du voisinage, beaucoup de patients pr\xe9f\xe8rent monter dans une berline classique plut\xf4t que dans une ambulance blanche.</p>
      
      <h3>Comment reconna\xeetre un vrai taxi conventionn\xe9 ?</h3>
      <p>Il doit obligatoirement arborer le <strong>Logo Bleu "Taxi Conventionn\xe9"</strong> (rond bleu avec la voiture blanche) sur la vitre arri\xe8re droite. C'est la garantie qu'il est agr\xe9\xe9 par la Caisse Primaire d'Assurance Maladie de la Haute-Garonne.</p>
    `},{slug:"remboursement-transport-ald-100-tiers-payant",title:"Transport ALD et 100% : Le Guide du Remboursement",description:"Tout savoir sur la prise en charge \xe0 100% des transports en taxi pour les ALD (Affections Longue Dur\xe9e). Documents, proc\xe9dure et tiers payant.",date:new Date().toISOString(),category:"Remboursement",content:`
      <p>Le transport m\xe9dical peut repr\xe9senter un co\xfbt important s'il n'est pas pris en charge. Heureusement, le syst\xe8me fran\xe7ais prot\xe8ge bien les patients atteints de pathologies chroniques.</p>

      <h2>Qu'est-ce que le 100% ALD ?</h2>
      <p>L'ALD (Affection Longue Dur\xe9e) concerne des maladies n\xe9cessitant un suivi prolong\xe9 et co\xfbteux (Diab\xe8te, Cancer, Insuffisance cardiaque...). Si vos transports sont <strong>en rapport direct</strong> avec cette affection, ils sont pris en charge \xe0 100% par la S\xe9curit\xe9 Sociale.</p>
      
      <h3>Le Tiers Payant : Ne sortez pas votre carte bleue</h3>
      <p>Chez <strong>Taxi 31 Toulouse</strong>, nous appliquons syst\xe9matiquement le Tiers Payant pour les patients en ALD. Cela signifie que nous facturons directement la CPAM.</p>
      
      <h2>Les 2 documents \xe0 avoir absolument sur vous</h2>
      <p>Attention, "\xeatre \xe0 100%" ne suffit pas pour monter dans le taxi sans payer. Vous devez justifier de vos droits aupr\xe8s du chauffeur. Pr\xe9parez toujours :</p>
      <ol class="list-decimal pl-6 space-y-2 my-4">
        <li><strong>La Prescription M\xe9dicale de Transport (Cerfa n\xb011574*04) :</strong> Elle doit \xeatre remplie par le m\xe9decin, sign\xe9e, et surtout dat\xe9e d'avant le trajet.</li>
        <li><strong>Votre Carte Vitale \xe0 jour :</strong> Elle permet au chauffeur de v\xe9rifier vos droits en direct via son lecteur.</li>
      </ol>
      
      <h3>Et si je ne suis pas \xe0 100% ?</h3>
      <p>Si votre transport est prescrit mais que vous n'\xeates pas en ALD (ex: jambe cass\xe9e, r\xe9\xe9ducation ponctuelle), la S\xe9curit\xe9 Sociale rembourse g\xe9n\xe9ralement 65%. Les 35% restants sont souvent couverts par votre mutuelle sant\xe9. Dans ce cas, nous pouvons aussi pratiquer le tiers payant sur la part obligatoire.</p>
    `},{slug:"reservation-taxi-aeroport-toulouse-blagnac-nuit",title:"Taxi A\xe9roport Toulouse-Blagnac : Tarifs et R\xe9servation",description:"R\xe9servez votre navette taxi vers l'a\xe9roport de Toulouse-Blagnac. Trajets toutes distances, d\xe9part t\xf4t le matin (4h) et accueil pancarte.",date:new Date().toISOString(),category:"Services",content:`
      <p>Un avion \xe0 prendre t\xf4t le matin ou une arriv\xe9e tardive \xe0 Blagnac ? Ne comptez pas sur la chance. Le service de taxi sur r\xe9servation est la seule garantie d'arriver \xe0 l'heure.</p>
      
      <h2>Combien co\xfbte un taxi pour l'a\xe9roport de Blagnac ?</h2>
      <p>Le tarif est r\xe9glement\xe9 par la pr\xe9fecture de Haute-Garonne. Il fonctionne au compteur (taxim\xe8tre). Le prix d\xe9pend de :</p>
      <ul>
        <li>Votre point de d\xe9part (Centre-ville, Muret, Colomiers...).</li>
        <li>L'heure (Tarif de jour A/C ou Tarif de nuit B/D).</li>
        <li>L'approche (distance parcourue par le taxi pour venir vous chercher).</li>
      </ul>
      <p>Pour un devis pr\xe9cis, appelez-nous au <strong>07 72 33 98 92</strong>.</p>
      
      <h3>Les avantages Taxi 31 Toulouse</h3>
      <ul>
        <li><strong>Ponctualit\xe9 :</strong> Pour un vol \xe0 6h00 du matin, nous sommes devant chez vous \xe0 4h00 pr\xe9cises.</li>
        <li><strong>Van & Berline :</strong> Vous avez beaucoup de bagages ? Signalez-le nous, nous adapterons le v\xe9hicule.</li>
        <li><strong>Si\xe8ges enfants :</strong> Disponibles gratuitement sur demande \xe0 la r\xe9servation.</li>
      </ul>
    `},{slug:"transport-enfant-cmpp-camsp-toulouse",title:"Transport d'Enfant (CMPP, CAMSP, Orthophoniste)",description:"Transport scolaire sp\xe9cialis\xe9 pour enfants vers les centres de soins (CMPP, CAMSP) \xe0 Toulouse. Chauffeurs patients et bienveillants.",date:new Date().toISOString(),category:"P\xe9diatrie",content:`
      <p>La gestion des rendez-vous m\xe9dicaux de votre enfant (CMPP, CAMSP, Orthophoniste) est un casse-t\xeate avec votre travail ? Nous avons la solution.</p>
      
      <h2>Un accompagnement s\xe9curis\xe9 de A \xe0 Z</h2>
      <p>Nous ne nous contentons pas de conduire. Pour les enfants, notre service inclut :</p>
      <ol>
        <li>La r\xe9cup\xe9ration de l'enfant (\xe0 l'\xe9cole ou \xe0 la maison).</li>
        <li>Le trajet s\xe9curis\xe9 en r\xe9hausseur ou si\xe8ge auto adapt\xe9.</li>
        <li><strong>L'accompagnement physique</strong> jusqu'\xe0 la salle d'attente du praticien (nous ne laissons jamais l'enfant seul sur le trottoir).</li>
        <li>La transmission des informations ou documents si n\xe9cessaire.</li>
      </ol>
      
      <h3>Est-ce rembours\xe9 ?</h3>
      <p>Oui. Les transports vers les Centres M\xe9dico-Psycho-P\xe9dagogiques (CMPP) ou les Centres d'Action M\xe9dico-Sociale Pr\xe9coce (CAMSP) sont couverts \xe0 100% par la S\xe9curit\xe9 Sociale. Vous n'avez aucune avance de frais \xe0 faire.</p>
      
      <p>Nos chauffeurs sont p\xe8res et m\xe8res de famille, habitu\xe9s \xe0 rassurer les enfants et \xe0 faire du trajet un moment agr\xe9able.</p>
    `}]},2688:(e,t,s)=>{s.d(t,{Z:()=>a});let a=(0,s(7162).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},7791:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u,metadata:()=>l});var a=s(9510),r=s(2095),n=s(7371),o=s(2688),i=s(1733);let l={title:"Blog & Actualit\xe9s | Taxi 31 Toulouse",description:"Guides pratiques sur le transport VSL, remboursement CPAM et zones d'intervention."};function u(){return a.jsx("main",{className:"bg-slate-50 min-h-screen py-24",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"text-center mb-16",children:[(0,a.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold text-slate-900 mb-6",children:["Infos & ",a.jsx("span",{className:"text-yellow-500",children:"Guides Pratiques"})]}),a.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto",children:"Nos conseils d'experts sur le transport m\xe9dical."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.D.map(e=>a.jsx(n.default,{href:`/blog/${e.slug}`,className:"group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col",children:(0,a.jsxs)("div",{className:"p-8 flex-1 flex flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("span",{className:"text-xs font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full uppercase",children:e.category}),(0,a.jsxs)("span",{className:"text-slate-400 text-xs flex items-center gap-1",children:[a.jsx(o.Z,{size:12})," ",new Date(e.date).getFullYear()]})]}),a.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",children:e.title}),a.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1",children:e.description}),(0,a.jsxs)("div",{className:"flex items-center text-blue-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all",children:["Lire l'article ",a.jsx(i.Z,{size:16,className:"ml-1"})]})]})},e.slug))})]})})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,122,365],()=>s(4526));module.exports=a})();