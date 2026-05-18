"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Lock, LogOut, RefreshCw, CheckCircle2, XCircle, Clock,
  Globe, Smartphone, BarChart3, Users, Car, TrendingUp,
  Eye, EyeOff, ShieldCheck, Phone, MapPin, Calendar,
  ChevronDown, ChevronUp, Search, Filter, Bell, Settings,
  FileText, Activity, AlertTriangle,
} from "lucide-react";

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
  createdAt?: string;
}

interface Stats {
  totalRides: number;
  totalUsers: number;
  webBookings: number;
  billedRides: number;
}

type PageMode = "checking" | "setup" | "login" | "dashboard";
type SortKey = "date" | "patientName" | "status" | "source";

const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "En attente": { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-400" },
  "À venir":    { bg: "bg-blue-50 border-blue-200",   text: "text-blue-700",  dot: "bg-blue-400" },
  "En cours":   { bg: "bg-violet-50 border-violet-200", text: "text-violet-700", dot: "bg-violet-400" },
  Terminée:     { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
  Annulée:      { bg: "bg-red-50 border-red-200",     text: "text-red-700",   dot: "bg-red-400" },
};

const TYPE_LABELS: Record<string, string> = {
  Consultation: "Consultation", Dialyse: "Dialyse", Traitement: "Chimio",
  Hospit: "Hospit.", HDJ: "HDJ", Aller: "Privée", VSL: "VSL",
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_COLORS[status] || { bg: "bg-slate-50 border-slate-200", text: "text-slate-600", dot: "bg-slate-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

function AuthCard({ children, title, subtitle, icon }: {
  children: React.ReactNode; title: string; subtitle: string; icon: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/10">{icon}</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Occitanie Médi Mobility</div>
          <h1 className="text-2xl font-black text-white">{title}</h1>
          <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
        </div>
        <div className="bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-8">{children}</div>
      </div>
    </div>
  );
}

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
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("web");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [tab, setTab] = useState<"dashboard" | "rides" | "pending">("dashboard");

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) { setToken(saved); setMode("dashboard"); return; }
    fetch("/api/admin/status").then(r => r.json()).then(d => setMode(d.configured ? "login" : "setup")).catch(() => setMode("login"));
  }, []);

  async function handleSetup(e: React.FormEvent) {
    e.preventDefault(); setFormError("");
    if (password.length < 6) { setFormError("Minimum 6 caractères."); return; }
    if (password !== confirmPassword) { setFormError("Les mots de passe ne correspondent pas."); return; }
    setFormLoading(true);
    try {
      const res = await fetch("/api/admin/setup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      sessionStorage.setItem("admin_token", data.token); setToken(data.token); setMode("dashboard");
    } catch (err: unknown) { setFormError(err instanceof Error ? err.message : "Erreur."); }
    finally { setFormLoading(false); }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); setFormLoading(true); setFormError("");
    try {
      const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      sessionStorage.setItem("admin_token", data.token); setToken(data.token); setMode("dashboard");
    } catch (err: unknown) { setFormError(err instanceof Error ? err.message : "Erreur."); }
    finally { setFormLoading(false); }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_token"); setToken(null); setRides([]); setStats(null); setMode("login");
  }

  const fetchData = useCallback(async () => {
    if (!token) return; setLoading(true);
    try {
      const [rr, sr] = await Promise.all([
        fetch("/api/admin/rides", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("/api/admin/stats", { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      if (rr.status === 401) { handleLogout(); return; }
      const [rd, sd] = await Promise.all([rr.json(), sr.json()]);
      setRides(Array.isArray(rd) ? rd : []); setStats(sd); setLastRefresh(new Date());
    } catch { /* silent */ } finally { setLoading(false); }
  }, [token]);

  useEffect(() => { if (mode === "dashboard") fetchData(); }, [mode, fetchData]);

  const filtered = rides
    .filter(r => sourceFilter === "web" ? r.source === "Web" : sourceFilter === "app" ? r.source !== "Web" : true)
    .filter(r => statusFilter === "all" || r.status === statusFilter)
    .filter(r => !search || [r.patientName, r.patientPhone, r.startLocation, r.endLocation].join(" ").toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      let cmp = 0;
      if (sortKey === "date") cmp = new Date(a.date).getTime() - new Date(b.date).getTime();
      else if (sortKey === "patientName") cmp = (a.patientName || "").localeCompare(b.patientName || "");
      else if (sortKey === "status") cmp = (a.status || "").localeCompare(b.status || "");
      else if (sortKey === "source") cmp = (a.source || "").localeCompare(b.source || "");
      return sortAsc ? cmp : -cmp;
    });

  const pendingWeb = rides.filter(r => r.source === "Web" && r.status === "En attente");

  function toggleSort(key: SortKey) { if (sortKey === key) setSortAsc(!sortAsc); else { setSortKey(key); setSortAsc(false); } }

  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) return <ChevronDown size={12} className="text-slate-400" />;
    return sortAsc ? <ChevronUp size={12} className="text-blue-500" /> : <ChevronDown size={12} className="text-blue-500" />;
  }

  if (mode === "checking") return <div className="min-h-screen bg-slate-900 flex items-center justify-center"><RefreshCw className="animate-spin text-slate-500" size={24} /></div>;

  if (mode === "setup") return (
    <AuthCard title="Créer votre compte admin" subtitle="Première connexion — choisissez un mot de passe." icon={<ShieldCheck className="text-emerald-400" size={28} />}>
      <form onSubmit={handleSetup} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mot de passe (min. 6 car.)</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required minLength={6} autoFocus placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 focus:border-emerald-500 text-white placeholder-slate-500 rounded-xl px-4 pr-11 py-3 text-sm outline-none transition-colors" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff size={15} /> : <Eye size={15} />}</button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Confirmer</label>
          <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder="••••••••"
            className="w-full bg-white/5 border border-white/10 focus:border-emerald-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
        </div>
        {formError && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{formError}</p>}
        <button type="submit" disabled={formLoading} className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white font-black py-3 rounded-xl transition-colors mt-2">{formLoading ? "Création…" : "Créer mon accès admin"}</button>
      </form>
    </AuthCard>
  );

  if (mode === "login") return (
    <AuthCard title="Espace administrateur" subtitle="Taxi31 Toulouse — Accès réservé" icon={<Lock className="text-yellow-400" size={26} />}>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mot de passe</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required autoFocus placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 focus:border-yellow-500 text-white placeholder-slate-500 rounded-xl px-4 pr-11 py-3 text-sm outline-none transition-colors" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff size={15} /> : <Eye size={15} />}</button>
          </div>
        </div>
        {formError && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{formError}</p>}
        <button type="submit" disabled={formLoading} className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-slate-900 font-black py-3 rounded-xl transition-colors mt-2">{formLoading ? "Connexion…" : "Se connecter"}</button>
      </form>
    </AuthCard>
  );

  // Dashboard
  const colorMap: Record<string, { icon: string; bg: string }> = {
    blue: { icon: "text-blue-600", bg: "bg-blue-100" }, violet: { icon: "text-violet-600", bg: "bg-violet-100" },
    emerald: { icon: "text-emerald-600", bg: "bg-emerald-100" }, amber: { icon: "text-amber-600", bg: "bg-amber-100" },
  };
  const statCards = stats ? [
    { label: "Courses totales",   value: stats.totalRides,  icon: Car,      color: "blue",    sub: "Toutes sources" },
    { label: "Demandes web",      value: stats.webBookings, icon: Globe,    color: "violet",  sub: `${pendingWeb.length} en attente` },
    { label: "Facturées",         value: stats.billedRides, icon: FileText, color: "emerald", sub: "Statut Facturé" },
    { label: "Chauffeurs app",    value: stats.totalUsers,  icon: Users,    color: "amber",   sub: "Utilisateurs actifs" },
  ] : [];
  const ridesForTab = tab === "pending" ? rides.filter(r => r.source === "Web" && r.status === "En attente") : filtered;

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 flex flex-col shrink-0 min-h-screen fixed left-0 top-0 bottom-0 z-10">
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-xl flex items-center justify-center shrink-0"><Car size={17} className="text-slate-900" /></div>
            <div><p className="text-white font-black text-sm leading-tight">Taxi31 Admin</p><p className="text-slate-500 text-[10px] uppercase tracking-widest">Dashboard</p></div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {([
            { id: "dashboard", label: "Vue d'ensemble", icon: Activity },
            { id: "rides",     label: "Toutes les courses", icon: Car },
            { id: "pending",   label: "En attente", icon: Bell, badge: pendingWeb.length },
          ] as const).map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === item.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
              <item.icon size={16} />
              <span className="flex-1 text-left">{item.label}</span>
              {"badge" in item && item.badge > 0 && (
                <span className="bg-yellow-500 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-5 border-t border-white/10 pt-4 space-y-1">
          <a href="/" target="_blank" rel="noopener" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all">
            <Globe size={16} />Voir le site
          </a>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm font-semibold transition-all">
            <LogOut size={16} />Déconnexion
          </button>
        </div>
      </aside>

      {/* Main (offset by sidebar width) */}
      <div className="flex-1 flex flex-col ml-60 min-h-screen">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-slate-900 font-black text-lg">{tab === "dashboard" ? "Vue d'ensemble" : tab === "rides" ? "Toutes les courses" : "Demandes en attente"}</h1>
            <p className="text-slate-400 text-xs mt-0.5">{lastRefresh ? `Actualisé à ${lastRefresh.toLocaleTimeString("fr-FR")}` : "Chargement…"}</p>
          </div>
          <div className="flex items-center gap-3">
            {pendingWeb.length > 0 && (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-2 rounded-xl">
                <AlertTriangle size={13} />{pendingWeb.length} demande{pendingWeb.length > 1 ? "s" : ""} à traiter
              </div>
            )}
            <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-50">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />Actualiser
            </button>
          </div>
        </header>

        <div className="flex-1 px-8 py-6 space-y-6">

          {/* === DASHBOARD TAB === */}
          {tab === "dashboard" && (
            <>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                {statCards.map((card, i) => {
                  const c = colorMap[card.color];
                  return (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center mb-4`}><card.icon size={20} className={c.icon} /></div>
                      <p className="text-3xl font-black text-slate-900">{card.value ?? "—"}</p>
                      <p className="text-slate-700 font-semibold text-sm mt-1">{card.label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{card.sub}</p>
                    </div>
                  );
                })}
              </div>

              {pendingWeb.length > 0 && (
                <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 flex items-center gap-3">
                    <Bell size={16} className="text-amber-600" />
                    <h2 className="font-black text-amber-800 text-sm">Demandes web à traiter ({pendingWeb.length})</h2>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {pendingWeb.slice(0, 5).map(ride => (
                      <div key={ride._id} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                        <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0"><Globe size={16} className="text-amber-600" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-900 text-sm">{ride.patientName}</p>
                          <p className="text-slate-500 text-xs truncate">{ride.startLocation}{ride.endLocation && ride.endLocation !== "À préciser" ? ` → ${ride.endLocation}` : ""}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-slate-700 text-xs font-semibold">{new Date(ride.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}</p>
                          {ride.time && <p className="text-slate-400 text-xs">{ride.time}</p>}
                        </div>
                        {ride.patientPhone && (
                          <a href={`tel:${ride.patientPhone}`} className="shrink-0 p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"><Phone size={14} /></a>
                        )}
                      </div>
                    ))}
                  </div>
                  {pendingWeb.length > 5 && (
                    <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center">
                      <button onClick={() => setTab("pending")} className="text-blue-600 text-xs font-bold hover:underline">Voir toutes les demandes ({pendingWeb.length}) →</button>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2"><BarChart3 size={16} className="text-slate-400" /><h2 className="font-black text-slate-800 text-sm">Courses récentes</h2></div>
                  <button onClick={() => setTab("rides")} className="text-blue-600 text-xs font-bold hover:underline">Tout voir →</button>
                </div>
                <RidesTable rides={rides.slice(0, 8)} expandedRow={expandedRow} setExpandedRow={setExpandedRow} toggleSort={toggleSort} SortIcon={SortIcon} />
              </div>
            </>
          )}

          {/* === RIDES / PENDING TABS === */}
          {(tab === "rides" || tab === "pending") && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-slate-400" />
                  <h2 className="font-black text-slate-800 text-sm">{tab === "pending" ? "Demandes en attente" : "Toutes les courses"}</h2>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{ridesForTab.length}</span>
                </div>
                {tab === "rides" && (
                  <div className="flex flex-wrap gap-2">
                    <div className="relative">
                      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher…"
                        className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl pl-8 pr-3 py-2 outline-none focus:border-blue-400 w-44" />
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
                      {[["all","Tous"],["web","Web"],["app","App"]].map(([v,l]) => (
                        <button key={v} onClick={() => setSourceFilter(v)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${sourceFilter === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>{l}</button>
                      ))}
                    </div>
                    <div className="relative">
                      <Filter size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl pl-8 pr-3 py-2 outline-none appearance-none focus:border-blue-400">
                        <option value="all">Tous statuts</option>
                        {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                )}
              </div>
              {loading ? (
                <div className="py-20 text-center text-slate-400"><RefreshCw size={22} className="animate-spin mx-auto mb-3" />Chargement…</div>
              ) : ridesForTab.length === 0 ? (
                <div className="py-20 text-center text-slate-400"><CheckCircle2 size={30} className="mx-auto mb-3 text-slate-300" />Aucune course trouvée</div>
              ) : (
                <RidesTable rides={ridesForTab} expandedRow={expandedRow} setExpandedRow={setExpandedRow} toggleSort={toggleSort} SortIcon={SortIcon} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RidesTable({ rides, expandedRow, setExpandedRow, toggleSort, SortIcon }: {
  rides: Ride[]; expandedRow: string | null; setExpandedRow: (id: string | null) => void;
  toggleSort: (k: SortKey) => void;
  SortIcon: ({ k }: { k: SortKey }) => React.ReactElement;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-100">
          <tr>
            {(["patientName","date"] as SortKey[]).map((k, i) => (
              <th key={k} className="text-left px-5 py-3">
                <button onClick={() => toggleSort(k)} className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-slate-700">
                  {i === 0 ? "Patient" : "Date"} <SortIcon k={k} />
                </button>
              </th>
            ))}
            <th className="hidden lg:table-cell text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Trajet</th>
            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
            <th className="text-left px-5 py-3">
              <button onClick={() => toggleSort("status")} className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-slate-700">Statut <SortIcon k="status" /></button>
            </th>
            <th className="text-left px-5 py-3">
              <button onClick={() => toggleSort("source")} className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-slate-700">Source <SortIcon k="source" /></button>
            </th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rides.map(ride => (
            <>
              <tr key={ride._id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)}>
                <td className="px-5 py-3.5">
                  <p className="font-semibold text-slate-900 text-sm">{ride.patientName}</p>
                  {ride.patientPhone && (
                    <a href={`tel:${ride.patientPhone}`} onClick={e => e.stopPropagation()} className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:underline mt-0.5">
                      <Phone size={10} />{ride.patientPhone}
                    </a>
                  )}
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <p className="text-slate-800 font-semibold text-xs">{new Date(ride.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</p>
                  {ride.time && <p className="text-slate-400 text-[11px]">{ride.time}</p>}
                </td>
                <td className="hidden lg:table-cell px-5 py-3.5 max-w-[180px]">
                  <div className="flex items-start gap-1.5">
                    <MapPin size={11} className="text-blue-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-700 truncate">{ride.startLocation}</p>
                      {ride.endLocation && ride.endLocation !== "À préciser" && <p className="text-[11px] text-slate-400 truncate">→ {ride.endLocation}</p>}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{TYPE_LABELS[ride.type] || ride.type}</span>
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={ride.status} />
                </td>
                <td className="px-5 py-3.5">
                  {ride.source === "Web"
                    ? <span className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 bg-violet-50 px-2 py-1 rounded-lg border border-violet-100"><Globe size={10} />Web</span>
                    : <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100"><Smartphone size={10} />App</span>
                  }
                </td>
                <td className="px-5 py-3.5">
                  <ChevronDown size={14} className={`text-slate-400 transition-transform ${expandedRow === ride._id ? "rotate-180" : ""}`} />
                </td>
              </tr>
              {expandedRow === ride._id && (
                <tr key={`${ride._id}-exp`} className="bg-blue-50/40">
                  <td colSpan={7} className="px-5 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Départ</p><p className="text-slate-800">{ride.startLocation}</p></div>
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Destination</p><p className="text-slate-800">{ride.endLocation || "Non précisé"}</p></div>
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Date & heure</p><p className="text-slate-800">{new Date(ride.date).toLocaleDateString("fr-FR")} {ride.time && `à ${ride.time}`}</p></div>
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Chauffeur</p><p className="text-slate-800">{typeof ride.chauffeurId === "object" && ride.chauffeurId?.fullName ? ride.chauffeurId.fullName : "Non assigné"}</p></div>
                      {ride.notes && <div className="col-span-2 md:col-span-4"><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Notes</p><p className="text-slate-800 bg-white border border-slate-200 rounded-lg px-3 py-2">{ride.notes}</p></div>}
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
