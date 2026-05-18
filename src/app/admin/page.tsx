"use client";

import { useState, useEffect, useCallback } from "react";
import { Lock, LogOut, RefreshCw, CheckCircle2, XCircle, Clock, Globe, Smartphone, BarChart3, Users, Car, TrendingUp, Eye, EyeOff, ShieldCheck } from "lucide-react";

interface Ride {
  _id: string;
  patientName: string;
  patientPhone?: string;
  startLocation: string;
  endLocation?: string;
  date: string;
  time?: string;
  type: string;
  status: string;
  source?: string;
  notes?: string;
  chauffeurId?: { fullName?: string; email?: string } | null;
}

interface Stats {
  totalRides: number;
  totalUsers: number;
  webBookings: number;
  billedRides: number;
}

type PageMode = "checking" | "setup" | "login" | "dashboard";

const STATUS_COLORS: Record<string, string> = {
  "En attente": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "À venir": "bg-blue-100 text-blue-800 border-blue-200",
  "En cours": "bg-purple-100 text-purple-800 border-purple-200",
  Terminée: "bg-green-100 text-green-800 border-green-200",
  Annulée: "bg-red-100 text-red-800 border-red-200",
};

export default function AdminPage() {
  const [mode, setMode] = useState<PageMode>("checking");
  const [token, setToken] = useState<string | null>(null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const [rides, setRides] = useState<Ride[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "web" | "pending">("web");
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  // Check if admin is configured or needs first-time setup
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) {
      setToken(saved);
      setMode("dashboard");
      return;
    }

    fetch("/api/admin/status")
      .then((r) => r.json())
      .then((d) => setMode(d.configured ? "login" : "setup"))
      .catch(() => setMode("login"));
  }, []);

  async function handleSetup(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    if (password.length < 6) { setFormError("Minimum 6 caractères."); return; }
    if (password !== confirmPassword) { setFormError("Les mots de passe ne correspondent pas."); return; }

    setFormLoading(true);
    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur lors de la création.");
      sessionStorage.setItem("admin_token", data.token);
      setToken(data.token);
      setMode("dashboard");
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : "Erreur.");
    } finally {
      setFormLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Mot de passe incorrect.");
      sessionStorage.setItem("admin_token", data.token);
      setToken(data.token);
      setMode("dashboard");
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : "Erreur de connexion.");
    } finally {
      setFormLoading(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_token");
    setToken(null);
    setRides([]);
    setStats(null);
    setMode("login");
  }

  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [ridesRes, statsRes] = await Promise.all([
        fetch("/api/admin/rides", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("/api/admin/stats", { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      if (ridesRes.status === 401) { handleLogout(); return; }
      const [ridesData, statsData] = await Promise.all([ridesRes.json(), statsRes.json()]);
      setRides(Array.isArray(ridesData) ? ridesData : []);
      setStats(statsData);
      setLastRefresh(new Date());
    } catch { /* silent */ }
    finally { setLoading(false); }
  }, [token]);

  useEffect(() => {
    if (mode === "dashboard" && token) fetchData();
  }, [mode, token, fetchData]);

  const filteredRides = rides.filter((r) => {
    if (filter === "web") return r.source === "Web";
    if (filter === "pending") return r.source === "Web" && r.status === "En attente";
    return true;
  });
  const pendingCount = rides.filter((r) => r.source === "Web" && r.status === "En attente").length;

  // ── Checking ──
  if (mode === "checking") {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400 text-sm">Chargement…</div>
      </main>
    );
  }

  // ── First-time setup ──
  if (mode === "setup") {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-green-400" size={28} />
            </div>
            <h1 className="text-2xl font-black text-white">Créer votre compte admin</h1>
            <p className="text-slate-400 text-sm mt-2">Première connexion — choisissez un mot de passe sécurisé.</p>
          </div>

          <form onSubmit={handleSetup} className="bg-slate-800 border border-slate-700 rounded-3xl p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Mot de passe (min. 6 caractères)
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoFocus
                  placeholder="••••••••"
                  className="w-full bg-slate-700 border border-slate-600 focus:border-green-500 text-white placeholder-slate-500 rounded-xl px-4 pr-11 py-3.5 text-sm outline-none transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-slate-700 border border-slate-600 focus:border-green-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
              />
            </div>

            {formError && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5">{formError}</p>
            )}

            <button
              type="submit"
              disabled={formLoading}
              className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-60 text-white font-black py-3.5 rounded-xl transition-colors"
            >
              {formLoading ? "Création…" : "Créer mon compte admin"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // ── Login ──
  if (mode === "login") {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-yellow-400" size={28} />
            </div>
            <h1 className="text-2xl font-black text-white">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm mt-2">Taxi31 Toulouse — Accès réservé</p>
          </div>

          <form onSubmit={handleLogin} className="bg-slate-800 border border-slate-700 rounded-3xl p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Mot de passe admin
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                  placeholder="••••••••"
                  className="w-full bg-slate-700 border border-slate-600 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl px-4 pr-11 py-3.5 text-sm outline-none transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {formError && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5">{formError}</p>
            )}

            <button
              type="submit"
              disabled={formLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-slate-900 font-black py-3.5 rounded-xl transition-colors"
            >
              {formLoading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // ── Dashboard ──
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 border-b border-slate-700 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-black text-xl">Admin Dashboard</h1>
            <p className="text-slate-400 text-xs mt-0.5">
              {lastRefresh ? `Mis à jour : ${lastRefresh.toLocaleTimeString("fr-FR")}` : "Chargement…"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-60"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Actualiser
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <LogOut size={14} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Courses totales", value: stats.totalRides, icon: Car, color: "blue", sub: "Dans la base" },
              { label: "Demandes web", value: stats.webBookings, icon: Globe, color: "yellow", sub: pendingCount > 0 ? `${pendingCount} en attente` : "Aucune en attente" },
              { label: "Chauffeurs", value: stats.totalUsers, icon: Users, color: "green", sub: "Utilisateurs app" },
              { label: "Courses facturées", value: stats.billedRides, icon: TrendingUp, color: "purple", sub: "Statut Facturé" },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  card.color === "blue" ? "bg-blue-100" : card.color === "yellow" ? "bg-yellow-100" :
                  card.color === "green" ? "bg-green-100" : "bg-purple-100"
                }`}>
                  <card.icon size={20} className={
                    card.color === "blue" ? "text-blue-600" : card.color === "yellow" ? "text-yellow-600" :
                    card.color === "green" ? "text-green-600" : "text-purple-600"
                  } />
                </div>
                <p className="text-3xl font-black text-slate-900">{card.value}</p>
                <p className="text-slate-700 font-semibold text-sm mt-1">{card.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{card.sub}</p>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-slate-500" />
              <h2 className="font-black text-slate-900">Courses</h2>
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">{filteredRides.length}</span>
            </div>
            <div className="flex gap-2">
              {(["web", "pending", "all"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-colors ${
                    filter === f ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f === "web" ? "Demandes web" : f === "pending" ? "En attente" : "Tout voir"}
                  {f === "pending" && pendingCount > 0 && (
                    <span className="ml-1.5 bg-yellow-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-full">{pendingCount}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <RefreshCw size={24} className="animate-spin mx-auto mb-3" />Chargement…
            </div>
          ) : filteredRides.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              <CheckCircle2 size={32} className="mx-auto mb-3 text-slate-300" />Aucune course trouvée
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Patient</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date / Heure</th>
                    <th className="hidden md:table-cell text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Trajet</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredRides.map((ride) => (
                    <tr key={ride._id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-900">{ride.patientName}</p>
                        {ride.patientPhone && (
                          <a href={`tel:${ride.patientPhone}`} className="text-xs text-blue-600 hover:underline">{ride.patientPhone}</a>
                        )}
                      </td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                        <p className="font-semibold">
                          {new Date(ride.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })}
                        </p>
                        {ride.time && <p className="text-xs text-slate-400">{ride.time}</p>}
                      </td>
                      <td className="hidden md:table-cell px-5 py-4 text-slate-600 max-w-[200px]">
                        <p className="truncate text-xs">{ride.startLocation}</p>
                        {ride.endLocation && ride.endLocation !== "À préciser" && (
                          <p className="truncate text-xs text-slate-400">→ {ride.endLocation}</p>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{ride.type}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg border ${STATUS_COLORS[ride.status] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                          {ride.status === "En attente" && <Clock size={11} />}
                          {ride.status === "Terminée" && <CheckCircle2 size={11} />}
                          {ride.status === "Annulée" && <XCircle size={11} />}
                          {ride.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {ride.source === "Web" ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-lg">
                            <Globe size={11} />Web
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                            <Smartphone size={11} />App
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
