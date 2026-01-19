import Link from 'next/link';
import { HeartPulse, Plane, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Transport Médical Conventionné",
    description: "Spécialiste du transport assis (TAP) vers les hôpitaux de Toulouse (Purpan, Oncopole, Rangueil).",
    icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
    // On lie vers ton article "Pilier" sur le remboursement/ALD
    href: "/blog/remboursement-transport-ald-100-tiers-payant", 
    cta: "Comprendre le remboursement",
    // Design "Premium" pour le service principal
    color: "bg-blue-50 border-blue-200 shadow-lg shadow-blue-100 relative overflow-hidden", 
    badge: "Agréé CPAM Haute-Garonne",
    features: [
      "Tiers Payant Intégral (0€ avance)",
      "Gestion administrative complète",
      "Accompagnement en service de soins",
      "Véhicule adapté et désinfecté"
    ],
  },
  {
    title: "Navette Aéroport & Gare",
    description: "Connexion directe vers l'Aéroport Toulouse-Blagnac et la Gare Matabiau. Service 24h/24 sur réservation.",
    icon: <Plane className="h-8 w-8 text-yellow-600" />,
    // On lie vers ton article spécifique Aéroport
    href: "/blog/reservation-taxi-aeroport-toulouse-blagnac-nuit",
    cta: "Voir les tarifs aéroport",
    color: "bg-white border-slate-200 hover:border-yellow-400",
    features: [
      "Ponctualité garantie (Départ 4h du matin)",
      "Sièges auto & réhausseurs gratuits",
      "Berline 7 places (Idéal Familles)",
      "Accueil pancarte personnalisé"
    ],
  },
  {
    title: "Transport Business & Privé",
    description: "Une alternative haut de gamme pour vos déplacements professionnels ou événements en Occitanie.",
    icon: <Briefcase className="h-8 w-8 text-slate-700" />,
    // Lien vers le contact ou une page entreprise si tu en crées une
    href: "/#contact", 
    cta: "Demander un devis",
    color: "bg-white border-slate-200 hover:border-slate-400",
    features: [
      "Facturation mensuelle (Pro)",
      "Conduite souple et sécurisée",
      "Discrétion absolue",
      "Mise à disposition (Mariage, Séminaire)"
    ],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section optimisé SEO Local */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Services de Transport 31
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-6 mb-6">
            Plus qu'un simple taxi, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              votre partenaire santé & mobilité
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Basé au nord de Toulouse, nous intervenons sur toute la Haute-Garonne. 
            Notre priorité : votre ponctualité et votre confort, que ce soit pour une dialyse ou un avion.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className={`
                group relative flex flex-col p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${service.color}
              `}
            >
              {/* Badge Spécial pour le médical */}
              {service.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                  {service.badge}
                </div>
              )}

              {/* Icône */}
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Titre & Description */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Liste à puces */}
              <div className="space-y-4 mb-8 border-t border-slate-100 pt-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bouton d'action (CTA) */}
              <div className="mt-auto flex items-center text-blue-700 font-bold text-sm group-hover:gap-2 transition-all">
                {service.cta} <ArrowRight size={18} className="ml-2 group-hover:ml-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}