import { HeartPulse, Plane, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Transport Médical (VSL)",
    description: "Taxi conventionné CPAM pour vos rendez-vous médicaux, dialyses, radiothérapies et hospitalisations.",
    icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
    // Mise en avant visuelle pour le service principal (Bleu médical)
    color: "bg-blue-50 border-blue-200 shadow-blue-100", 
    features: [
      "Prise en charge à 100% (Tiers Payant)",
      "Aucune avance de frais",
      "Aide à la marche & administratif",
      "Toutes cliniques Toulouse & 31"
    ],
  },
  {
    title: "Gare & Aéroport Blagnac",
    description: "Navette fiable vers l'aéroport Toulouse-Blagnac et la Gare Matabiau. Ne ratez jamais votre départ.",
    icon: <Plane className="h-8 w-8 text-yellow-500" />,
    color: "bg-white border-slate-200",
    features: [
      "Ponctualité garantie",
      "Calcul d'itinéraire en temps réel",
      "Aide au portage des bagages",
      "Siège enfant sur demande"
    ],
  },
  {
    title: "Privé & Business",
    description: "Berline confort pour vos déplacements professionnels ou personnels en Haute-Garonne.",
    icon: <Briefcase className="h-8 w-8 text-slate-700" />,
    color: "bg-white border-slate-200",
    features: [
      "Conduite souple et sécurisée",
      "Véhicule climatisé et propre",
      "Discrétion assurée",
      "Mise à disposition possible"
    ],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Nos Prestations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-6">
            Un taxi adapté à <span className="text-yellow-500">chaque besoin</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Spécialiste du transport médical assis sur Toulouse et ses environs. 
            Nous assurons aussi vos trajets privés avec le même niveau d'exigence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${service.color}
              `}
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed h-24">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}