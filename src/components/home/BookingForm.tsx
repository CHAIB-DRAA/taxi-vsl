'use client';

import { Phone, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section id="reservation" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Besoin d'un taxi ou d'un VSL ?
            </h2>
            <p className="text-xl text-slate-600">
              Ne vous embêtez pas à remplir un long formulaire. <br/>
              <strong>Laissez votre numéro, nous vous rappelons de suite.</strong>
            </p>
          </div>

          {isSent ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Demande reçue !</h3>
              <p className="text-green-700 text-lg">
                Un chauffeur va vous recontacter sur le numéro indiqué dans quelques minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Votre Nom"
                  className="w-full h-16 px-6 rounded-xl border-2 border-slate-300 text-lg focus:border-blue-600 focus:ring-0 outline-none transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              <div className="flex-1">
                <input 
                  type="tel" 
                  placeholder="Votre Téléphone (06...)"
                  className="w-full h-16 px-6 rounded-xl border-2 border-slate-300 text-lg focus:border-blue-600 focus:ring-0 outline-none transition-colors bg-white text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="h-16 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? 'Envoi...' : 'Être rappelé'}
                <Phone className="w-5 h-5" />
              </button>

            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 font-medium">
            <Clock size={20} />
            <span>Réponse moyenne : 5 minutes</span>
          </div>

        </div>
      </div>
    </section>
  );
}