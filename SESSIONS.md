# Journal des sessions de développement

## Session du 17 mai 2026 — SEO & Refonte complète

### Contexte
Site Next.js pour **Occitanie Médi Mobility** — taxi conventionné CPAM, Toulouse / Haute-Garonne.
URL de production : https://www.taxi-31-toulouse.fr

---

### Travaux réalisés

#### Architecture SEO (layout.tsx)
- Correction des erreurs critiques de configuration metadata
- Canonical URLs, OpenGraph et Twitter Cards correctement configurés

#### Système d'articles blog (lib/articles.ts)
- 70+ articles dynamiques organisés en clusters thématiques :
  - Transport Médical (ALD, chimiothérapie, dialyse, radiothérapie)
  - Hôpitaux (Purpan, Rangueil, Paule de Viguier, Larrey…)
  - Courses Privées (aéroport, gare, événements)
  - Trajets spécifiques (Toulouse→Pamiers, Toulouse→Albi…)
  - Villes desservies (Blagnac, Colomiers, Muret…)
  - Guides pratiques

#### Pages créées
| Route | Description |
|---|---|
| `/transport-medical` | Landing page transport médical conventionné CPAM |
| `/courses-privees` | Landing page courses privées (aéroport, gare, événements) |
| `/blog` | Index blog avec filtres par catégorie |
| `/blog/[slug]` | Pages articles dynamiques (70+ pages via generateStaticParams) |
| `/a-propos` | Page À propos avec signaux E-E-A-T |
| `/mentions-legales` | Mentions légales SASU 994 307 486 |
| `/politique-confidentialite` | Politique RGPD/CNIL |

#### Composants créés / refactorisés
- **Navigation** — menu mobile hamburger, liens services structurés
- **Footer** — liens internes par service (SEO authority clustering)
- **MobileStickyBar** — appel + SMS + WhatsApp, thème sombre
- **Hero** — gradient, liens vers piliers services, trust signals
- **LocalBusinessSchema** — Schema.org Organization + TaxiService + LocalBusiness
  - Adresse corrigée : 6 rue Buissonnière Bat A, 31140 Fonbeauzard
  - GPS : 43.6843, 1.4230
- **FAQSchema** — FAQ structurée avec contenu médical (ALD, tiers payant, CPAM)

#### SEO technique
- `sitemap.ts` — sitemap dynamique (pages statiques + 70+ articles, priorités par catégorie)
- `robots.ts` — Googlebot autorisé, crawlers concurrents bloqués (AhrefsBot, SemrushBot…)
- `global.css` — styles contenu blog + animations

#### next.config.js
- Nettoyage et simplification
- Rewrites vers système de réservation externe (Render)
- Route admin configurée

---

### Données entreprise
| Champ | Valeur |
|---|---|
| Nom | OCCITANIE MEDI MOBILITY (SASU) |
| SIREN | 994 307 486 |
| Adresse | 6 rue Buissonnière Bat A, 31140 Fonbeauzard |
| Téléphone | +33 7 72 33 98 92 |
| Email | contact@taxi-31-toulouse.fr |
| Site | https://www.taxi-31-toulouse.fr |
| Google Maps | https://g.page/r/Cbh2nxTvVS7cEAE |

---

### État du build (fin de session)
- TypeScript : 0 erreur
- Build production : succès — 28 pages statiques
- First Load JS : ~101 kB

---

### Tâches restantes
- [ ] Créer `/reserver/page.tsx` — formulaire de réservation (référencé dans les CTAs mais non implémenté)
- [ ] Valider les schémas Schema.org via Google Rich Results Test
- [ ] Test responsive design (mobile, tablette)
- [ ] Audit Lighthouse (performance, SEO, accessibilité)
