import Link from 'next/link';
import { HeartPulse, Car, CheckCircle2, ArrowRight, ShieldCheck, Plane } from 'lucide-react';

const services = [
  {
    id: 'medical',
    icon: HeartPulse,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    badge: 'Conventionné CPAM',
    badgeColor: 'bg-blue-600 text-white',
    title: 'Transport Médical Conventionné',
    subtitle: '0€ d\'avance — Tiers Payant Intégral',
    description: 'Spécialiste du transport assis (TAP/VSL) pour les patients en ALD vers tous les hôpitaux et cliniques de Toulouse et d\'Occitanie.',
    href: '/transport-medical',
    cta: 'Découvrir le service médical',
    cardClass: 'bg-blue-50 border-blue-200 ring-2 ring-blue-100',
    features: [
      'Chimiothérapie (Oncopole)',
      'Dialyse régulière (planning sur plusieurs mois)',
      'Suivi post-opératoire & consultations',
      'Trajets longue distance Ariège, Tarn, Gers...',
      'Aide administrative & gestion CPAM',
    ],
  },
  {
    id: 'prive',
    icon: Car,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    badge: 'Tarif fixe',
    badgeColor: 'bg-yellow-500 text-slate-900',
    title: 'Courses Privées',
    subtitle: 'Aéroport · Gare · Événements · Business',
    description: 'Un service fiable et élégant pour vos déplacements personnels et professionnels à Toulouse et en Occitanie.',
    href: '/courses-privees',
    cta: 'Voir les courses privées',
    cardClass: 'bg-white border-slate-200 hover:border-yellow-300',
    features: [
      'Aéroport Toulouse-Blagnac (dès 4h du matin)',
      'Gare Matabiau — ponctualité garantie',
      'Mariages & événements — véhicule élégant',
      'Transferts business & séminaires',
      'Facturation mensuelle pour les entreprises',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
            Médical ou privé,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              toujours à votre service
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Deux expertises complémentaires, un seul engagement : vous transporter confortablement, ponctuellement, sans stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col p-8 rounded-3xl border-2 ${service.cardClass} transition-all duration-300`}
              >
                {/* Badge */}
                <div className={`absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </div>

                {/* Icône */}
                <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 border border-white shadow-sm`}>
                  <Icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>

                {/* Texte */}
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{service.subtitle}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8 border-t border-slate-200/60 pt-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <CheckCircle2 size={17} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:gap-3 transition-all"
                >
                  {service.cta} <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Encart trust */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
          <div className="bg-green-100 p-3 rounded-xl shrink-0">
            <ShieldCheck className="h-7 w-7 text-green-600" />
          </div>
          <div>
            <p className="font-bold text-slate-900">Agrément CPAM Haute-Garonne & Préfecture</p>
            <p className="text-slate-500 text-sm">Tous nos transports médicaux sont conformes aux exigences de l'Assurance Maladie. Nous gérons l'intégralité des démarches administratives à votre place.</p>
          </div>
          <Link
            href="/blog/guide-taxi-vsl-conventionne-cpam-toulouse"
            className="ml-auto shrink-0 flex items-center gap-2 text-blue-600 font-bold text-sm whitespace-nowrap hover:underline"
          >
            Guide complet <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
