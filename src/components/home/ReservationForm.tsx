"use client";

import { useState } from "react";
import { Phone, MapPin, Calendar, Clock, User, CheckCircle2, AlertCircle, Loader2, ChevronDown } from "lucide-react";

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
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez appeler directement.");
    }
  }

  if (formState === "success") {
    return (
      <section id="reserver" className="py-20 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-12">
            <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-white mb-3">Demande envoyée !</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Votre demande de transport a bien été reçue. Le chauffeur vous contactera par SMS ou téléphone pour confirmer le créneau.
            </p>
            <p className="text-sm text-slate-400">
              Un problème urgent ? Appelez directement au{" "}
              <a href="tel:0772339892" className="text-yellow-400 font-bold">07 72 33 98 92</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reserver" className="py-20 px-4 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-1.5 rounded-full mb-5">
            <Calendar size={13} className="text-yellow-400" />
            <span className="text-yellow-200 font-bold text-xs uppercase tracking-wider">Réservation en ligne</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">
            Réservez votre transport
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Remplissez le formulaire ci-dessous. Le chauffeur confirme par SMS sous 2h. Pour une urgence, appelez directement.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8 space-y-5"
        >
          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Nom complet <span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  name="patientName"
                  value={form.patientName}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                  className="w-full bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Téléphone
              </label>
              <div className="relative">
                <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="tel"
                  name="patientPhone"
                  value={form.patientPhone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="w-full bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Departure */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Adresse de départ <span className="text-yellow-400">*</span>
            </label>
            <div className="relative">
              <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                name="startLocation"
                value={form.startLocation}
                onChange={handleChange}
                required
                placeholder="12 rue de la République, Toulouse"
                className="w-full bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Destination */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Destination
            </label>
            <div className="relative">
              <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="endLocation"
                value={form.endLocation}
                onChange={handleChange}
                placeholder="CHU Toulouse Rangueil, Aéroport Blagnac…"
                className="w-full bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {/* Row 4: Date + Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Date <span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-slate-700/60 border border-slate-600 text-white rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Heure <span className="text-yellow-400">*</span>
              </label>
              <div className="relative">
                <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/60 border border-slate-600 text-white rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          {/* Row 5: Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Type de transport
            </label>
            <div className="relative">
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-slate-700/60 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-yellow-500 transition-colors"
              >
                {TRIP_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 6: Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Informations complémentaires
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Fauteuil roulant, étage sans ascenseur, retour prévu…"
              className="w-full bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none"
            />
          </div>

          {/* Error */}
          {formState === "error" && (
            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-black text-base py-4 rounded-xl transition-colors shadow-lg shadow-yellow-500/20"
          >
            {formState === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Envoi en cours…
              </>
            ) : (
              <>
                <Calendar size={18} />
                Envoyer ma demande
              </>
            )}
          </button>

          <p className="text-xs text-slate-500 text-center">
            Confirmation par SMS sous 2h • Urgence :{" "}
            <a href="tel:0772339892" className="text-yellow-500 font-semibold">07 72 33 98 92</a>
          </p>
        </form>
      </div>
    </section>
  );
}
