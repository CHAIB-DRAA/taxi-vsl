"use client";

import { useState } from "react";
import { Phone, MapPin, Calendar, Clock, User, CheckCircle2, AlertCircle, Loader2, ChevronDown, Zap, ArrowLeftRight } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const TRIP_TYPES = [
  { value: "Consultation", label: "Consultation médicale" },
  { value: "Dialyse", label: "Dialyse" },
  { value: "Traitement", label: "Chimiothérapie / Traitement" },
  { value: "Hospit", label: "Hospitalisation" },
  { value: "HDJ", label: "Hôpital de jour (HDJ)" },
  { value: "Aller", label: "Course privée (aéroport, gare…)" },
  { value: "VSL", label: "VSL — autre motif médical" },
];

export default function ReservationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    patientName: "",
    patientPhone: "",
    startLocation: "",
    endLocation: "",
    date: "",
    time: "",
    type: "Consultation",
    notes: "",
    isRoundTrip: false,
    returnDate: "",
    returnTime: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleRoundTrip() {
    setForm((prev) => ({ ...prev, isRoundTrip: !prev.isRoundTrip, returnDate: prev.date, returnTime: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rides/web-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: form.patientName.trim(),
          patientPhone: form.patientPhone.trim(),
          startLocation: form.startLocation.trim(),
          endLocation: form.endLocation.trim() || "À préciser",
          date: form.date,
          time: form.time,
          type: form.type,
          notes: form.notes.trim(),
          btStatus: "Non renseigné",
          isRoundTrip: form.isRoundTrip,
          returnDate: form.isRoundTrip ? form.returnDate : undefined,
          returnTime: form.isRoundTrip ? form.returnTime : undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue.");
      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez appeler directement.");
    }
  }

  if (formState === "success") {
    return (
      <section id="reserver" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500/10 border border-green-500/40 rounded-3xl p-14">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3">Demande envoyée !</h2>
            <p className="text-slate-300 mb-2 leading-relaxed text-lg">
              Votre demande a bien été reçue.
            </p>
            <p className="text-slate-400 mb-8 text-sm">
              Un SMS de confirmation vous a été envoyé. Le chauffeur vous recontacte pour valider le créneau.
            </p>
            <a
              href="tel:0772339892"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg transition-colors"
            >
              <Phone size={20} />
              Urgence : 07 72 33 98 92
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reserver" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">

        {/* Titre */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 px-5 py-2 rounded-full mb-6">
            <Zap size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-yellow-300 font-bold text-sm uppercase tracking-widest">Réservation directe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Réservez votre transport
            <br />
            <span className="text-yellow-400">en quelques secondes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Formulaire connecté directement à l'application du chauffeur. Confirmation SMS immédiate.
          </p>
        </div>

        {/* Carte */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nom + Téléphone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                  Nom complet <span className="text-yellow-400">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="text" name="patientName" value={form.patientName} onChange={handleChange} required
                    placeholder="Jean Dupont"
                    className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                  Téléphone <span className="text-yellow-400">*</span>
                  <span className="ml-1 text-slate-500 normal-case font-normal">(SMS de confirmation)</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="tel" name="patientPhone" value={form.patientPhone} onChange={handleChange} required
                    placeholder="06 12 34 56 78"
                    className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Départ */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                Adresse de départ <span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input type="text" name="startLocation" value={form.startLocation} onChange={handleChange} required
                  placeholder="12 rue de la République, Toulouse"
                  className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors" />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" name="endLocation" value={form.endLocation} onChange={handleChange}
                  placeholder="CHU Toulouse Rangueil, Aéroport Blagnac…"
                  className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors" />
              </div>
            </div>

            {/* Date + Heure aller */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                  Date <span className="text-yellow-400">*</span>
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="date" name="date" value={form.date} onChange={handleChange} required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors [color-scheme:dark]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                  Heure <span className="text-yellow-400">*</span>
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="time" name="time" value={form.time} onChange={handleChange} required
                    className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors [color-scheme:dark]" />
                </div>
              </div>
            </div>

            {/* Toggle Aller/Retour */}
            <button
              type="button"
              onClick={toggleRoundTrip}
              className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all text-sm font-semibold ${
                form.isRoundTrip
                  ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-300"
                  : "bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-500"
              }`}
            >
              <div className="flex items-center gap-3">
                <ArrowLeftRight size={16} className={form.isRoundTrip ? "text-yellow-400" : "text-slate-500"} />
                <span>Trajet aller-retour</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors relative ${form.isRoundTrip ? "bg-yellow-500" : "bg-slate-600"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${form.isRoundTrip ? "left-5" : "left-0.5"}`} />
              </div>
            </button>

            {/* Heure de retour (conditionnelle) */}
            {form.isRoundTrip && (
              <div className="grid grid-cols-2 gap-5 p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                <div>
                  <label className="block text-xs font-bold text-yellow-300 uppercase tracking-widest mb-2">
                    Date retour
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange}
                      min={form.date || new Date().toISOString().split("T")[0]}
                      className="w-full bg-slate-800 border border-slate-600 hover:border-yellow-500 focus:border-yellow-500 text-white rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors [color-scheme:dark]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-yellow-300 uppercase tracking-widest mb-2">
                    Heure retour
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input type="time" name="returnTime" value={form.returnTime} onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-600 hover:border-yellow-500 focus:border-yellow-500 text-white rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none transition-colors [color-scheme:dark]" />
                  </div>
                </div>
              </div>
            )}

            {/* Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                Type de transport
              </label>
              <div className="relative">
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                <select name="type" value={form.type} onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white rounded-xl px-4 py-3.5 text-sm appearance-none outline-none transition-colors">
                  {TRIP_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                Informations complémentaires
              </label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                placeholder="Fauteuil roulant, étage sans ascenseur, accompagnant…"
                className="w-full bg-slate-800 border border-slate-600 hover:border-slate-500 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none" />
            </div>

            {/* Erreur */}
            {formState === "error" && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <AlertCircle size={17} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm">{errorMsg}</p>
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={formState === "loading"}
              className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-black text-lg py-5 rounded-2xl transition-all shadow-xl shadow-yellow-500/25">
              {formState === "loading" ? (
                <><Loader2 size={20} className="animate-spin" />Envoi en cours…</>
              ) : (
                <><Calendar size={20} />Envoyer ma demande</>
              )}
            </button>

          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">Confirmation SMS immédiate · Réponse du chauffeur sous 2h</p>
            <a href="tel:0772339892" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors">
              <Phone size={15} />
              Urgence : 07 72 33 98 92
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
