'use client';

import { Phone, Clock, CheckCircle2, AlertCircle, MapPin, Calendar, User, Car, Ambulance } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function BookingForm() {
  // Votre ID Formspree
  const [state, handleSubmit] = useForm("mvgeydbp");

  if (state.succeeded) {
    return (
      <section id="reservation" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center shadow-lg animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-green-800 mb-4">Demande transmise !</h3>
            <p className="text-green-700 text-xl leading-relaxed">
              Nous avons reçu tous les détails de votre trajet.
              <br />
              <strong>Un chauffeur analyse votre demande et vous confirme la course rapidement.</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Réservez votre chauffeur
            </h2>
            <p className="text-lg text-slate-600">
              Remplissez les détails pour une prise en charge immédiate ou planifiée.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Choix du Type de Transport */}
            <div className="grid grid-cols-2 gap-4">
              <label className="cursor-pointer">
                <input type="radio" name="type_transport" value="Medical_CPAM" className="peer sr-only" defaultChecked />
                <div className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-200 rounded-xl peer-checked:border-medical-600 peer-checked:bg-medical-50 transition-all hover:border-medical-300">
                  <Ambulance className="w-8 h-8 text-medical-600 mb-2" />
                  <span className="font-bold text-slate-900">Médical (CPAM)</span>
                </div>
              </label>
              
              <label className="cursor-pointer">
                <input type="radio" name="type_transport" value="Prive_Gare_Aeroport" className="peer sr-only" />
                <div className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-200 rounded-xl peer-checked:border-taxi-500 peer-checked:bg-yellow-50 transition-all hover:border-taxi-300">
                  <Car className="w-8 h-8 text-taxi-500 mb-2" />
                  <span className="font-bold text-slate-900">Privé / Gare</span>
                </div>
              </label>
            </div>

            {/* 2. Détails du Trajet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Départ */}
              <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Départ</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    name="depart"
                    placeholder="Adresse ou Ville"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-medical-600 focus:ring-1 focus:ring-medical-600 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Arrivée */}
              <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Arrivée</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 text-taxi-500 w-5 h-5" />
                  <input 
                    type="text" 
                    name="arrivee"
                    placeholder="Hôpital, Gare, Domicile..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-taxi-500 focus:ring-1 focus:ring-taxi-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input 
                    type="date" 
                    name="date"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-medical-600 focus:ring-1 focus:ring-medical-600 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400 appearance-none"
                    required
                  />
                </div>
              </div>

              {/* Heure */}
              <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Heure</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input 
                    type="time" 
                    name="heure"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-medical-600 focus:ring-1 focus:ring-medical-600 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400 appearance-none"
                    required
                  />
                </div>
              </div>

            </div>

            {/* 3. Coordonnées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
               <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Votre Nom</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Nom complet"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-slate-500 outline-none transition-all bg-white text-slate-900"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-bold text-slate-700 mb-1 block ml-1">Votre Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input 
                    type="tel" 
                    name="telephone"
                    placeholder="06 00 00 00 00"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 focus:border-slate-500 outline-none transition-all bg-white text-slate-900"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bouton ENVOYER */}
            <button 
              type="submit"
              disabled={state.submitting}
              className="w-full py-4 bg-taxi-500 hover:bg-taxi-400 text-slate-900 text-xl font-bold rounded-xl transition-all shadow-lg shadow-taxi-500/20 flex items-center justify-center gap-3 mt-6 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.01]"
            >
              {state.submitting ? 'Envoi en cours...' : 'Envoyer la demande'}
              <Phone className="w-6 h-6 fill-slate-900" />
            </button>

          </form>
          
          {/* ✅ CORRECTION ICI : On vérifie juste si "state.errors" existe, sans .length */}
          {state.errors && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm justify-center">
              <AlertCircle size={16} />
              Vérifiez que tous les champs sont remplis.
            </div>
          )}

        </div>
      </div>
    </section>
  );
}