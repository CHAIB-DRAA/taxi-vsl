import Link from 'next/link';
import { FileText, CreditCard, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const docs = [
  {
    icon: FileText,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
    num: '1',
    title: 'Bon de Transport (PMT)',
    subtitle: 'Prescription Médicale de Transport',
    desc: 'Remplie et signée par votre médecin traitant ou spécialiste avant le trajet.',
    checks: [
      'Signée & datée avant le jour du transport',
      'Mode de transport "Taxi" ou "VSL" coché',
      'Destination et motif médical mentionnés',
    ],
  },
  {
    icon: CreditCard,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    borderHover: 'hover:border-green-200',
    num: '2',
    title: 'Carte Vitale',
    subtitle: 'À présenter au début du trajet',
    desc: 'Votre carte Vitale à jour permet la télétransmission directe à la CPAM. Aucun avancement de frais.',
    checks: [
      'Carte à jour (informations récentes)',
      'Attestation papier conseillée en complément',
      'Vérification des droits ALD en direct',
    ],
  },
];

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Tiers Payant — 0€ d'avance
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-6 mb-4">
            Seulement <span className="text-blue-600">2 documents</span> à préparer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Pour bénéficier du remboursement intégral par la Sécurité Sociale, vous n'avez besoin que de ces deux documents.
            Nous gérons toute la facturation avec la CPAM à votre place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {docs.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.num}
                className={`relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200 ${doc.borderHover} transition-all flex flex-col`}
              >
                <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  Obligatoire
                </div>

                <div className={`${doc.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className={`h-7 w-7 ${doc.iconColor}`} />
                </div>

                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Document {doc.num}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.title}</h3>
                <p className="text-xs text-slate-500 mb-4 font-medium">{doc.subtitle}</p>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{doc.desc}</p>

                <div className="bg-slate-50 rounded-xl p-4 space-y-2.5 mt-auto border border-slate-100">
                  {doc.checks.map((check) => (
                    <div key={check} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-green-500 shrink-0 mt-0.5" />
                      {check}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Alerte */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 mb-8">
          <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={22} />
          <div>
            <h4 className="font-bold text-amber-900 text-sm mb-1">Règle importante CPAM</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              La date de signature du bon de transport doit être <strong>antérieure ou égale</strong> à la date du trajet.
              Un bon daté après le transport sera automatiquement refusé par la Sécurité Sociale.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog/documents-prescription-medicale-transport-cpam"
            className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:underline"
          >
            <FileText size={17} />
            Guide complet sur les documents et le remboursement CPAM
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
