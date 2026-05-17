import { Star, ShieldCheck, Clock, Euro } from 'lucide-react';

const stats = [
  { icon: Star, value: '5.0/5', label: 'Note Google', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: ShieldCheck, value: 'Agréé', label: 'CPAM Haute-Garonne', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Clock, value: '24h/7j', label: 'Disponibilité', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Euro, value: '0€', label: 'Avance de frais (ALD)', color: 'text-slate-700', bg: 'bg-slate-100' },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <div className={`${s.bg} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`h-7 w-7 ${s.color}`} />
                </div>
                <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-xs text-slate-500 font-medium mt-1">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
