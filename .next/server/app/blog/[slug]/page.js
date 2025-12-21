"use strict";(()=>{var e={};e.id=308,e.ids=[308],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{e.exports=require("path")},7360:e=>{e.exports=require("url")},7357:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>x,tree:()=>u}),r(8491),r(2628),r(2523);var n=r(3191),s=r(8716),a=r(7922),o=r.n(a),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8491)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/blog/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2628)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,2523)),"/Users/mondz/Downloads/taxi-occitanie-project/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1150))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/mondz/Downloads/taxi-occitanie-project/src/app/blog/[slug]/page.tsx"],d="/blog/[slug]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},2095:(e,t,r)=>{r.d(t,{D:()=>n});let n=[...["Muret","Colomiers","Tournefeuille","Blagnac","Plaisance-du-Touch","Cugnaux","Balma","Ramonville-Saint-Agne","Castanet-Tolosan","Saint-Gaudens","Fonsorbes","L'Union","Saint-Orens-de-Gameville","Saint-Jean","Castelginest","Portet-sur-Garonne","Auterive","Revel","Saint-Lys","Leguevin","Frouzins","Grenade","Aussonne","Cornebarrieu","Launaguet","Aucamville","Fronton","Villemur-sur-Tarn","Beauzelle","Brugui\xe8res","Fenouillet","Saint-Jory","Gratentour","Montastruc-la-Conseill\xe8re","Verfeil","Carbonne","Caz\xe8res","Rieumes","Seysses","Eaunes","Labarthe-sur-L\xe8ze","Pins-Justaret","Roques","Saubens","Mondonville","Pibrac","Brax"].map((e,t)=>{let r=[`Besoin d'un transport m\xe9dical au d\xe9part de ${e} ?`,`Votre Taxi VSL conventionn\xe9 sur le secteur de ${e}`,`Transport assis professionnalis\xe9 (TAP) depuis ${e}`][t%3];return{slug:`taxi-conventionne-vsl-${e.toLowerCase().replace(/ /g,"-").replace(/'/g,"").replace(/é/g,"e").replace(/è/g,"e").replace(/à/g,"a")}`,title:`Taxi Conventionn\xe9 ${e} (31) : Transport M\xe9dical VSL`,description:`R\xe9servez votre taxi conventionn\xe9 CPAM \xe0 ${e}. Transport m\xe9dical assis vers les h\xf4pitaux de Toulouse. Tiers payant int\xe9gral, aucune avance de frais.`,date:new Date().toISOString(),category:"Villes",content:`
      <p class="lead">Vous r\xe9sidez \xe0 <strong>${e}</strong> (31) et vous avez besoin d'un transport sanitaire pour vous rendre \xe0 un examen m\xe9dical, une dialyse ou une hospitalisation \xe0 Toulouse ?</p>
      
      <h2>${r}</h2>
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
    `}]},9755:(e,t,r)=>{r.d(t,{Z:()=>n});let n=(0,r(7162).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},2688:(e,t,r)=>{r.d(t,{Z:()=>n});let n=(0,r(7162).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},1085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return o},RedirectType:function(){return n.RedirectType},notFound:function(){return s.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),s=r(6399);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class o extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return g},getRedirectTypeFromError:function(){return x},getURLFromRedirectError:function(){return p},isRedirectError:function(){return d},permanentRedirect:function(){return c},redirect:function(){return u}});let s=r(4580),a=r(2934),o=r(8586),i="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=o.RedirectStatusCode.TemporaryRedirect);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r+";";let a=s.requestAsyncStorage.getStore();return a&&(n.mutableCookies=a.mutableCookies),n}function u(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?o.RedirectStatusCode.SeeOther:o.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,s]=e.digest.split(";",4),a=Number(s);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(a)&&a in o.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function x(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function g(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8491:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x,generateMetadata:()=>p,generateStaticParams:()=>d});var n=r(9510),s=r(1085),a=r(2095),o=r(9755),i=r(2688);let l=(0,r(7162).Z)("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);var u=r(7371),c=r(9706);async function d(){return a.D.map(e=>({slug:e.slug}))}async function p({params:e}){let t=a.D.find(t=>t.slug===e.slug);return t?{title:`${t.title} | Taxi 31 Toulouse`,description:t.description,alternates:{canonical:`https://taxi-31-toulouse.fr/blog/${t.slug}`}}:{}}function x({params:e}){let t=a.D.find(t=>t.slug===e.slug);return t||(0,s.notFound)(),(0,n.jsxs)("main",{className:"bg-slate-50 min-h-screen pt-24 pb-12",children:[(0,n.jsxs)("article",{className:"max-w-3xl mx-auto px-4 sm:px-6",children:[(0,n.jsxs)(u.default,{href:"/blog",className:"inline-flex items-center gap-2 text-slate-500 hover:text-yellow-600 transition-colors mb-8 font-medium",children:[n.jsx(o.Z,{size:20}),"Retour aux articles"]}),(0,n.jsxs)("header",{className:"mb-10",children:[(0,n.jsxs)("div",{className:"flex flex-wrap gap-4 text-sm text-slate-500 mb-4",children:[(0,n.jsxs)("span",{className:"flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-200",children:[n.jsx(i.Z,{size:14}),new Date(t.date).getFullYear()]}),(0,n.jsxs)("span",{className:"flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200 font-bold",children:[n.jsx(l,{size:14}),t.category]})]}),n.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6",children:t.title}),n.jsx("p",{className:"text-xl text-slate-600 leading-relaxed border-l-4 border-yellow-500 pl-6 italic",children:t.description})]}),n.jsx("div",{className:"prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200",dangerouslySetInnerHTML:{__html:t.content}})]}),n.jsx("div",{className:"mt-16",children:n.jsx(c.Z,{})})]})}},9706:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9510),s=r(7799),a=r(1319);let o=(0,r(7162).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);function i(){return(0,n.jsxs)("section",{id:"contact",className:"relative py-24 bg-yellow-500 overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]"}),(0,n.jsxs)("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[n.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight",children:"Besoin d'un taxi maintenant ?"}),(0,n.jsxs)("p",{className:"text-xl md:text-2xl text-slate-900 mb-12 max-w-3xl mx-auto font-medium leading-relaxed",children:["Urgence m\xe9dicale, d\xe9part gare ou simple consultation ?",n.jsx("br",{}),"Nous sommes disponibles pour vous r\xe9pondre imm\xe9diatement."]}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-6",children:[(0,n.jsxs)("a",{href:"tel:0772339892",className:"group relative w-full sm:w-auto bg-slate-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3",children:[n.jsx(s.Z,{className:"text-yellow-500 animate-pulse",size:24}),n.jsx("span",{className:"tracking-wide",children:"07 72 33 98 92"}),n.jsx("div",{className:"absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-yellow-500 animate-bounce",children:"R\xe9ponse Rapide"})]}),(0,n.jsxs)("a",{href:"mailto:contact@taxi-31-toulouse.fr",className:"w-full sm:w-auto bg-white border-2 border-white text-slate-900 px-8 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-lg",children:[n.jsx(a.Z,{className:"text-slate-900",size:24}),n.jsx("span",{children:"Demande de devis"})]})]}),(0,n.jsxs)("div",{className:"mt-10 flex items-center justify-center gap-2 text-slate-900 font-bold text-lg",children:[n.jsx(o,{size:22,className:"text-slate-900"}),n.jsx("span",{children:"Intervention sur Toulouse & Agglom\xe9ration"})]})]})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,122,365],()=>r(7357));module.exports=n})();