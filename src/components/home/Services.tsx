import { HeartPulse, Plane, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Médical Conventionné",
    description: "Transport Assis (TAP) remboursé par la Sécurité Sociale. Nous vous accompagnons jusqu'au service de soins.",
    icon: <HeartPulse className="h-8 w-8 text-medical-600" />,
    color: "bg-medical-50 border-medical-100", // Style spécifique bleu
    features: ["Dialyse, Rayons, Consultations", "Tiers payant intégral", "Aide à la marche", "Accompagnement administratif"],
  },
  {
    title: "Gares & Aéroports",
    description: "Liaisons fiables vers Blagnac et Matabiau. Idéal pour ne pas stresser avant un départ.",
    icon: <Plane className="h-8 w-8 text-taxi-500" />,
    color: "bg-white border-slate-200",
    features: ["Ponctualité garantie", "Aide aux bagages", "Attente panneau (sur demande)", "Siège bébé disponible"],
  },
  {
    title: "Privé & Business",
    description: "Berline confort pour vos rendez-vous d'affaires ou déplacements personnels.",
    icon: <Briefcase className="h-8 w-8 text-slate-700" />,
    color: "bg-white border-slate-200",
    features: ["Conduite souple", "Véhicule impeccable", "Discrétion assurée", "Longue distance possible"],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-medical-600 font-bold tracking-wide uppercase text-sm bg-medical-50 px-3 py-1 rounded-full">
            Nos Prestations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Un service adapté à <span className="text-taxi-500">chaque besoin</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Du transport médical délicat au transfert aéroportuaire efficace, 
            nous adaptons notre conduite et notre attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${service.color}
              `}
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}