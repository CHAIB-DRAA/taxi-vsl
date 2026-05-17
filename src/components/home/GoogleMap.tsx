export default function GoogleMap() {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Notre zone d'intervention</h2>
          <p className="text-slate-400 text-sm">Toulouse, Aucamville et toute la Haute-Garonne (31)</p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl h-[380px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.6165463088487!2d1.4290078761953913!3d43.67754927110093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea5cf9fe1fe35%3A0xdc2e55ef149f76b8!2sTaxi%20Vsl%20conventionn%C3%A9%20TOULOUSE%20%7C%7C%20Occitanie%20Medi%20Mobility!5e1!3m2!1sfr!2sfr!4v1773478146687!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Occitanie Médi Mobility — Taxi VSL Toulouse sur Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
