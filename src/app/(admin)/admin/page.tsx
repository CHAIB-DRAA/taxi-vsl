"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Lock, LogOut, RefreshCw, CheckCircle2, XCircle, Clock,
  Globe, Smartphone, BarChart3, Users, Car, TrendingUp,
  Eye, EyeOff, ShieldCheck, Phone, MapPin, Calendar,
  ChevronDown, ChevronUp, Search, Filter, Bell, Settings,
  FileText, Activity, AlertTriangle, Plus, Trash2, Check,
  X, Edit3, CreditCard, UserCircle, Receipt, ChevronRight,
  Download, ArrowUpDown, Star, MessageSquare, Copy,
} from "lucide-react";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const GOOGLE_REVIEW_URL = "https://g.page/r/Cbh2nxTvVS7cEBM/review";

function buildReviewSms(patientName: string): string {
  const prenom = patientName.split(" ")[0];
  return `Bonjour ${prenom},\n\nMerci de votre confiance pour votre transport médical avec Occitanie Médi Mobility ! 🚖\n\nVotre avis aide d'autres patients à nous trouver. C'est rapide :\n👉 ${GOOGLE_REVIEW_URL}\n\nMerci et à très bientôt ! 🙏\n— Taxi31 Toulouse • 07 72 33 98 92`;
}

// ─── TYPES ────────────────────────────────────────────────────────────────────
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
  motif?: string;
  price?: number;
  realDistance?: number;
  tolls?: number;
  statuFacturation?: string;
  cancelReason?: string;
  isTpmr?: boolean;
  isRoundTrip?: boolean;
  chauffeurId?: { _id?: string; fullName?: string; email?: string } | null;
  startTime?: string;
  endTime?: string;
  createdAt?: string;
}

interface Stats {
  totalRides: number;
  totalUsers: number;
  webBookings: number;
  billedRides: number;
  pendingWeb: number;
  monthRides: number;
  totalRevenue: number;
  dailyRides: { _id: string; count: number }[];
}

interface AppUser {
  _id: string;
  fullName: string;
  email: string;
  rideCount: number;
  finishedCount: number;
  lastRide?: string;
  createdAt?: string;
}

interface Patient {
  _id: string;
  fullName: string;
  phone?: string;
  address?: string;
  chauffeurId?: { fullName?: string } | null;
  rideCount?: number;
}

interface BillingReport {
  rides: Ride[];
  summary: { count: number; totalKm: number; totalAmount: number; totalTolls: number };
}

type Tab = "dashboard" | "rides" | "pending" | "patients" | "chauffeurs" | "facturation";
type SortKey = "date" | "patientName" | "status" | "source" | "price";
type PageMode = "checking" | "setup" | "login" | "dashboard";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "En attente": { bg: "bg-amber-50 border-amber-200",   text: "text-amber-700",   dot: "bg-amber-400" },
  "À venir":    { bg: "bg-blue-50 border-blue-200",     text: "text-blue-700",    dot: "bg-blue-400" },
  "En cours":   { bg: "bg-violet-50 border-violet-200", text: "text-violet-700",  dot: "bg-violet-400" },
  "Terminée":   { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
  "Annulée":    { bg: "bg-red-50 border-red-200",       text: "text-red-700",     dot: "bg-red-400" },
};

const TYPE_LABELS: Record<string, string> = {
  Consultation: "Consultation", Dialyse: "Dialyse", Traitement: "Chimio",
  Hospit: "Hospit.", HDJ: "HDJ", Aller: "Privée", VSL: "VSL", Ambulance: "Ambulance", Retour: "Retour",
};

const API = (path: string) => `/api/admin/${path}`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function fmt(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit" });
}
function fmtFull(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
}
function fmtTime(date: string) {
  return new Date(date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const s = STATUS_COLORS[status] || { bg: "bg-slate-50 border-slate-200", text: "text-slate-600", dot: "bg-slate-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

function SourceBadge({ source }: { source?: string }) {
  if (source === "Web")
    return <span className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 bg-violet-50 px-2 py-1 rounded-lg border border-violet-100"><Globe size={10} />Web</span>;
  return <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100"><Smartphone size={10} />App</span>;
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

// ─── MINI BAR CHART (no external lib) ────────────────────────────────────────
function MiniBarChart({ data }: { data: { _id: string; count: number }[] }) {
  const max = Math.max(...data.map(d => d.count), 1);
  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  return (
    <div className="flex items-end gap-1.5 h-16">
      {data.map((d) => {
        const pct = Math.round((d.count / max) * 100);
        const dayOfWeek = new Date(d._id).getDay();
        return (
          <div key={d._id} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[9px] text-slate-500 font-bold">{d.count}</span>
            <div className="w-full bg-blue-600 rounded-t-sm transition-all" style={{ height: `${Math.max(pct * 0.48, 4)}px` }} title={`${fmtFull(d._id)} : ${d.count} courses`} />
            <span className="text-[9px] text-slate-400">{days[dayOfWeek]}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── CONFIRM MODAL ────────────────────────────────────────────────────────────
function ConfirmModal({ title, message, confirmLabel, danger, onConfirm, onCancel }: {
  title: string; message: string; confirmLabel: string; danger?: boolean;
  onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 className="font-black text-slate-900 text-lg mb-2">{title}</h3>
        <p className="text-slate-500 text-sm mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">Annuler</button>
          <button onClick={onConfirm} className={`flex-1 font-black py-2.5 rounded-xl text-sm text-white transition-colors ${danger ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"}`}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

// ─── CREATE RIDE MODAL ────────────────────────────────────────────────────────
function CreateRideModal({ users, onClose, onCreated, token }: {
  users: AppUser[]; onClose: () => void; onCreated: () => void; token: string;
}) {
  const [form, setForm] = useState({ patientName: "", patientPhone: "", startLocation: "", endLocation: "", date: "", time: "", type: "Consultation", notes: "", chauffeurId: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError(""); setLoading(true);
    try {
      const combinedDate = new Date(`${form.date}T${form.time || "08:00"}:00`);
      const res = await fetch(API("rides"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, date: combinedDate, source: "Web" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      onCreated();
    } catch (err: unknown) { setError(err instanceof Error ? err.message : "Erreur"); }
    finally { setLoading(false); }
  }

  const inp = "w-full bg-slate-50 border border-slate-200 focus:border-blue-400 text-slate-800 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="font-black text-slate-900">Nouvelle course</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Patient *</label>
              <input required value={form.patientName} onChange={e => setForm({...form, patientName: e.target.value})} placeholder="Nom du patient" className={inp} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Téléphone</label>
              <input value={form.patientPhone} onChange={e => setForm({...form, patientPhone: e.target.value})} placeholder="06 XX XX XX XX" className={inp} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Départ *</label>
            <input required value={form.startLocation} onChange={e => setForm({...form, startLocation: e.target.value})} placeholder="Adresse de départ" className={inp} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Destination</label>
            <input value={form.endLocation} onChange={e => setForm({...form, endLocation: e.target.value})} placeholder="Adresse de destination" className={inp} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Date *</label>
              <input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className={inp} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Heure</label>
              <input type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} className={inp} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Type</label>
              <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className={inp}>
                {["Consultation","Dialyse","Traitement","Hospit","HDJ","Aller","VSL"].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          {users.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Chauffeur</label>
              <select value={form.chauffeurId} onChange={e => setForm({...form, chauffeurId: e.target.value})} className={inp}>
                <option value="">Non assigné</option>
                {users.map(u => <option key={u._id} value={u._id}>{u.fullName}</option>)}
              </select>
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Notes</label>
            <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={2} placeholder="Notes internes..." className={`${inp} resize-none`} />
          </div>
          {error && <p className="text-red-500 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 text-sm">Annuler</button>
            <button type="submit" disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-black py-2.5 rounded-xl text-sm transition-colors">{loading ? "Création…" : "Créer la course"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── REVIEW SMS MODAL ────────────────────────────────────────────────────────
function ReviewSmsModal({ ride, token, onClose }: { ride: Ride; token: string; onClose: () => void }) {
  const [text, setText] = useState(() => buildReviewSms(ride.patientName));
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleSend() {
    setSending(true); setError("");
    try {
      const res = await fetch(API(`rides/${ride._id}/review-sms`), {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setDone(true);
    } catch (err: unknown) { setError(err instanceof Error ? err.message : "Erreur d'envoi"); }
    finally { setSending(false); }
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const segments = Math.ceil(text.length / 153) || 1;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center"><Star size={16} className="text-amber-600" /></div>
            <div>
              <h3 className="font-black text-slate-900 text-sm">Demande d'avis client</h3>
              <p className="text-slate-400 text-xs">{ride.patientName} • {ride.patientPhone}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
        </div>

        {done ? (
          <div className="p-10 text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={28} className="text-emerald-500" /></div>
            <p className="font-black text-slate-900 text-lg mb-1">SMS envoyé !</p>
            <p className="text-slate-500 text-sm">Message envoyé à {ride.patientPhone}</p>
            <button onClick={onClose} className="mt-6 px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-700 transition-colors">Fermer</button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message SMS (modifiable)</label>
                <span className="text-[10px] text-slate-400">{text.length} car. · {segments} SMS</span>
              </div>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                rows={9}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 rounded-xl px-3 py-2.5 text-xs text-slate-800 outline-none resize-none font-mono leading-relaxed transition-colors"
              />
            </div>
            {GOOGLE_REVIEW_URL.includes("VOTRE_ID_GOOGLE") && (
              <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5">
                <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                <span>Remplacez <strong>VOTRE_ID_GOOGLE</strong> dans le lien par votre vrai identifiant Google My Business avant d'envoyer.</span>
              </div>
            )}
            {error && <p className="text-red-500 text-xs bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}
            <div className="flex gap-3 pt-1">
              <button
                onClick={handleCopy}
                className="flex-1 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                {copied ? "Copié !" : "Copier"}
              </button>
              <button
                onClick={handleSend}
                disabled={sending || !text.trim()}
                className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-black py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {sending ? <RefreshCw size={13} className="animate-spin" /> : <MessageSquare size={13} />}
                {sending ? "Envoi…" : "Envoyer le SMS"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
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
  const [users, setUsers] = useState<AppUser[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [billing, setBilling] = useState<BillingReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const [tab, setTab] = useState<Tab>("dashboard");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortAsc, setSortAsc] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const [billingFrom, setBillingFrom] = useState("");
  const [billingTo, setBillingTo] = useState("");
  const [billingStatus, setBillingStatus] = useState("");
  const [patientSearch, setPatientSearch] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [reviewRide, setReviewRide] = useState<Ride | null>(null);
  const [confirmAction, setConfirmAction] = useState<null | { title: string; message: string; label: string; danger?: boolean; action: () => void }>(null);
  const [statusDropdownId, setStatusDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auth
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) { setToken(saved); setMode("dashboard"); return; }
    fetch(API("status")).then(r => r.json()).then(d => setMode(d.configured ? "login" : "setup")).catch(() => setMode("login"));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setStatusDropdownId(null);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("admin_token");
    setToken(null); setRides([]); setStats(null); setUsers([]); setPatients([]); setBilling(null);
    setMode("login");
  }

  const authFetch = useCallback((url: string, opts: RequestInit = {}) => {
    return fetch(url, { ...opts, headers: { ...(opts.headers || {}), Authorization: `Bearer ${token}` } });
  }, [token]);

  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setDataError(null);
    try {
      const [rr, sr, ur] = await Promise.all([
        authFetch(API("rides")),
        authFetch(API("stats")),
        authFetch(API("users")),
      ]);
      if (rr.status === 401 || sr.status === 401 || ur.status === 401) { handleLogout(); return; }
      if (!rr.ok) throw new Error(`Courses: ${rr.status} ${rr.statusText}`);
      if (!sr.ok) throw new Error(`Stats: ${sr.status} ${sr.statusText}`);
      if (!ur.ok) throw new Error(`Utilisateurs: ${ur.status} ${ur.statusText}`);
      const [rd, sd, ud] = await Promise.all([rr.json(), sr.json(), ur.json()]);
      setRides(Array.isArray(rd) ? rd : []);
      setStats(sd && typeof sd === "object" && !sd.message ? sd : null);
      setUsers(Array.isArray(ud) ? ud : []);
      setLastRefresh(new Date());
    } catch (err: unknown) {
      setDataError(err instanceof Error ? err.message : "Erreur de chargement");
    }
    finally { setLoading(false); }
  }, [token, authFetch]);

  const fetchPatients = useCallback(async () => {
    if (!token) return;
    const res = await authFetch(API("patients"));
    const data = await res.json();
    setPatients(Array.isArray(data) ? data : []);
  }, [token, authFetch]);

  const fetchBilling = useCallback(async () => {
    if (!token) return;
    const params = new URLSearchParams();
    if (billingFrom) params.set("from", billingFrom);
    if (billingTo) params.set("to", billingTo);
    if (billingStatus) params.set("statuFacturation", billingStatus);
    const res = await authFetch(API(`billing?${params}`));
    const data = await res.json();
    setBilling(data);
  }, [token, authFetch, billingFrom, billingTo, billingStatus]);

  useEffect(() => { if (mode === "dashboard") fetchData(); }, [mode, fetchData]);
  useEffect(() => { if (tab === "patients" && patients.length === 0) fetchPatients(); }, [tab, patients.length, fetchPatients]);
  useEffect(() => { if (tab === "facturation") fetchBilling(); }, [tab, fetchBilling]);

  // ── Auth forms ──
  async function handleSetup(e: React.FormEvent) {
    e.preventDefault(); setFormError("");
    if (password.length < 6) { setFormError("Minimum 6 caractères."); return; }
    if (password !== confirmPassword) { setFormError("Les mots de passe ne correspondent pas."); return; }
    setFormLoading(true);
    try {
      const res = await fetch(API("setup"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      sessionStorage.setItem("admin_token", data.token); setToken(data.token); setMode("dashboard");
    } catch (err: unknown) { setFormError(err instanceof Error ? err.message : "Erreur."); }
    finally { setFormLoading(false); }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); setFormLoading(true); setFormError("");
    try {
      const res = await fetch(API("login"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      sessionStorage.setItem("admin_token", data.token); setToken(data.token); setMode("dashboard");
    } catch (err: unknown) { setFormError(err instanceof Error ? err.message : "Erreur."); }
    finally { setFormLoading(false); }
  }

  // ── Ride actions ──
  async function updateStatus(rideId: string, status: string) {
    setStatusDropdownId(null);
    const res = await authFetch(API(`rides/${rideId}/status`), {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const updated = await res.json();
      setRides(prev => prev.map(r => r._id === rideId ? { ...r, ...updated } : r));
    }
  }

  async function acceptRide(rideId: string) {
    const res = await authFetch(API(`rides/${rideId}/accept`), { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({}) });
    if (res.ok) setRides(prev => prev.map(r => r._id === rideId ? { ...r, status: "À venir" } : r));
  }

  async function rejectRide(rideId: string) {
    const res = await authFetch(API(`rides/${rideId}/reject`), { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({}) });
    if (res.ok) setRides(prev => prev.map(r => r._id === rideId ? { ...r, status: "Annulée" } : r));
  }

  async function deleteRide(rideId: string) {
    const res = await authFetch(API(`rides/${rideId}`), { method: "DELETE" });
    if (res.ok) setRides(prev => prev.filter(r => r._id !== rideId));
  }

  async function toggleBilling(ride: Ride) {
    const next = ride.statuFacturation === "Facturé" ? "Non facturé" : "Facturé";
    const res = await authFetch(API(`rides/${ride._id}/billing`), {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ statuFacturation: next }),
    });
    if (res.ok) {
      setRides(prev => prev.map(r => r._id === ride._id ? { ...r, statuFacturation: next } : r));
      if (billing) setBilling(prev => prev ? { ...prev, rides: prev.rides.map(r => r._id === ride._id ? { ...r, statuFacturation: next } : r) } : prev);
    }
  }

  function confirm(title: string, message: string, label: string, action: () => void, danger = true) {
    setConfirmAction({ title, message, label, danger, action });
  }

  // ── Filtered rides ──
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
      else if (sortKey === "price") cmp = (a.price || 0) - (b.price || 0);
      return sortAsc ? cmp : -cmp;
    });

  const pendingWeb = rides.filter(r => r.source === "Web" && r.status === "En attente");

  function toggleSort(k: SortKey) { if (sortKey === k) setSortAsc(!sortAsc); else { setSortKey(k); setSortAsc(false); } }
  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) return <ArrowUpDown size={11} className="text-slate-400" />;
    return sortAsc ? <ChevronUp size={11} className="text-blue-500" /> : <ChevronDown size={11} className="text-blue-500" />;
  }

  // ── Render auth screens ──
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

  // ─── DASHBOARD ────────────────────────────────────────────────────────────────
  const navItems = [
    { id: "dashboard",    label: "Vue d'ensemble",  icon: Activity },
    { id: "rides",        label: "Toutes les courses", icon: Car },
    { id: "pending",      label: "En attente",       icon: Bell, badge: pendingWeb.length },
    { id: "patients",     label: "Patients",         icon: UserCircle },
    { id: "chauffeurs",   label: "Chauffeurs",       icon: Users },
    { id: "facturation",  label: "Facturation CPAM", icon: Receipt },
  ] as const;

  const colorMap: Record<string, { icon: string; bg: string }> = {
    blue:    { icon: "text-blue-600",    bg: "bg-blue-100" },
    violet:  { icon: "text-violet-600",  bg: "bg-violet-100" },
    emerald: { icon: "text-emerald-600", bg: "bg-emerald-100" },
    amber:   { icon: "text-amber-600",   bg: "bg-amber-100" },
    rose:    { icon: "text-rose-600",    bg: "bg-rose-100" },
    teal:    { icon: "text-teal-600",    bg: "bg-teal-100" },
  };

  const statCards = stats ? [
    { label: "Courses totales",  value: stats.totalRides,     icon: Car,       color: "blue",    sub: `${stats.monthRides} ce mois-ci` },
    { label: "Demandes web",     value: stats.webBookings,    icon: Globe,     color: "violet",  sub: `${stats.pendingWeb} en attente` },
    { label: "Facturées",        value: stats.billedRides,    icon: Receipt,   color: "emerald", sub: "Statut CPAM Facturé" },
    { label: "Chauffeurs",       value: stats.totalUsers,     icon: Users,     color: "amber",   sub: "Utilisateurs actifs" },
    { label: "CA estimé",        value: `${stats.totalRevenue.toFixed(0)} €`, icon: TrendingUp, color: "teal", sub: "Courses terminées" },
    { label: "En attente web",   value: stats.pendingWeb,    icon: AlertTriangle, color: "rose", sub: "À traiter maintenant" },
  ] : [];

  const tabTitle: Record<Tab, string> = {
    dashboard: "Vue d'ensemble", rides: "Toutes les courses",
    pending: "Demandes en attente", patients: "Patients",
    chauffeurs: "Chauffeurs", facturation: "Facturation CPAM",
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* ── SIDEBAR ── */}
      <aside className="w-60 bg-slate-900 flex flex-col shrink-0 min-h-screen fixed left-0 top-0 bottom-0 z-20">
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-xl flex items-center justify-center shrink-0"><Car size={17} className="text-slate-900" /></div>
            <div><p className="text-white font-black text-sm leading-tight">Taxi31 Admin</p><p className="text-slate-500 text-[10px] uppercase tracking-widest">Panneau de gestion</p></div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(item => (
            <button key={item.id} onClick={() => setTab(item.id as Tab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === item.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
              <item.icon size={15} />
              <span className="flex-1 text-left">{item.label}</span>
              {"badge" in item && item.badge > 0 && (
                <span className="bg-yellow-500 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-5 border-t border-white/10 pt-4 space-y-0.5">
          <a href="/" target="_blank" rel="noopener" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all">
            <Globe size={15} />Voir le site
          </a>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm font-semibold transition-all">
            <LogOut size={15} />Déconnexion
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col ml-60 min-h-screen">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-slate-900 font-black text-lg">{tabTitle[tab]}</h1>
            <p className="text-slate-400 text-xs mt-0.5">{lastRefresh ? `Actualisé à ${lastRefresh.toLocaleTimeString("fr-FR")}` : "Chargement…"}</p>
          </div>
          <div className="flex items-center gap-3">
            {pendingWeb.length > 0 && tab !== "pending" && (
              <button onClick={() => setTab("pending")} className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors">
                <AlertTriangle size={13} />{pendingWeb.length} en attente
              </button>
            )}
            {tab === "rides" && (
              <button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors">
                <Plus size={15} />Nouvelle course
              </button>
            )}
            <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-50">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />Actualiser
            </button>
          </div>
        </header>

        <div className="flex-1 px-8 py-6 space-y-6">

          {/* Error banner */}
          {dataError && (
            <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 flex items-start gap-3">
              <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-bold text-sm">Erreur de chargement</p>
                <p className="text-red-600 text-xs mt-0.5">{dataError}</p>
                <p className="text-red-400 text-xs mt-1">Vérifiez que le serveur backend est bien démarré et redéployé.</p>
              </div>
              <button onClick={fetchData} className="text-red-600 hover:text-red-800 text-xs font-bold underline shrink-0">Réessayer</button>
            </div>
          )}

          {/* ═══════════════ DASHBOARD ═══════════════ */}
          {tab === "dashboard" && (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                {statCards.map((card, i) => {
                  const c = colorMap[card.color];
                  return (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center mb-3`}><card.icon size={20} className={c.icon} /></div>
                      <p className="text-3xl font-black text-slate-900">{card.value ?? "—"}</p>
                      <p className="text-slate-700 font-semibold text-sm mt-1">{card.label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{card.sub}</p>
                    </div>
                  );
                })}
              </div>

              {/* 7-day chart */}
              {stats && (stats.dailyRides?.length ?? 0) > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-black text-slate-900 text-sm flex items-center gap-2"><BarChart3 size={16} className="text-blue-500" />Courses — 7 derniers jours</h2>
                    <span className="text-xs text-slate-400">{stats.dailyRides.reduce((s, d) => s + d.count, 0)} courses au total</span>
                  </div>
                  <MiniBarChart data={stats.dailyRides} />
                </div>
              )}

              {/* Pending web */}
              {pendingWeb.length > 0 && (
                <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Bell size={16} className="text-amber-600" /><h2 className="font-black text-amber-800 text-sm">Demandes web à traiter ({pendingWeb.length})</h2></div>
                    <button onClick={() => setTab("pending")} className="text-amber-700 text-xs font-bold hover:underline">Voir tout →</button>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {pendingWeb.slice(0, 4).map(ride => (
                      <div key={ride._id} className="px-6 py-4 flex items-center gap-4">
                        <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0"><Globe size={16} className="text-amber-600" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-900 text-sm">{ride.patientName}</p>
                          <p className="text-slate-500 text-xs truncate">{ride.startLocation}{ride.endLocation && ride.endLocation !== "À préciser" ? ` → ${ride.endLocation}` : ""}</p>
                        </div>
                        <div className="text-right shrink-0 mr-2">
                          <p className="text-slate-700 text-xs font-semibold">{fmt(ride.date)}</p>
                          {ride.date && <p className="text-slate-400 text-xs">{fmtTime(ride.date)}</p>}
                        </div>
                        <div className="flex gap-2 shrink-0">
                          {ride.patientPhone && <a href={`tel:${ride.patientPhone}`} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors"><Phone size={13} /></a>}
                          <button onClick={() => confirm("Accepter la course ?", `Accepter la demande de ${ride.patientName} ?`, "Accepter", () => acceptRide(ride._id), false)}
                            className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"><Check size={12} />Accepter</button>
                          <button onClick={() => confirm("Refuser la course ?", `Refuser la demande de ${ride.patientName} ? Elle passera en "Annulée".`, "Refuser", () => rejectRide(ride._id))}
                            className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"><X size={12} />Refuser</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent rides */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2"><BarChart3 size={16} className="text-slate-400" /><h2 className="font-black text-slate-800 text-sm">Courses récentes</h2></div>
                  <button onClick={() => setTab("rides")} className="text-blue-600 text-xs font-bold hover:underline">Tout voir →</button>
                </div>
                <RidesTable rides={rides.filter(r => r.status !== "En attente").slice(0, 6)} expandedRow={expandedRow} setExpandedRow={setExpandedRow}
                  toggleSort={toggleSort} SortIcon={SortIcon} onStatusChange={updateStatus} onDelete={(id) => confirm("Supprimer la course ?", "Cette action est irréversible.", "Supprimer", () => deleteRide(id))}
                  onToggleBilling={toggleBilling} onReview={setReviewRide} statusDropdownId={statusDropdownId} setStatusDropdownId={setStatusDropdownId} dropdownRef={dropdownRef} />
              </div>
            </>
          )}

          {/* ═══════════════ RIDES ═══════════════ */}
          {tab === "rides" && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100">
                <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-slate-800 text-sm">Toutes les courses</h2>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{filtered.length}</span>
                  </div>
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
                </div>
              </div>
              {loading ? (
                <div className="py-16 text-center text-slate-400"><RefreshCw size={20} className="animate-spin mx-auto mb-3" />Chargement…</div>
              ) : filtered.length === 0 ? (
                <div className="py-16 text-center text-slate-400"><CheckCircle2 size={28} className="mx-auto mb-3 text-slate-300" />Aucune course trouvée</div>
              ) : (
                <RidesTable rides={filtered} expandedRow={expandedRow} setExpandedRow={setExpandedRow}
                  toggleSort={toggleSort} SortIcon={SortIcon} onStatusChange={updateStatus} onDelete={(id) => confirm("Supprimer la course ?", "Cette action est irréversible.", "Supprimer", () => deleteRide(id))}
                  onToggleBilling={toggleBilling} onReview={setReviewRide} statusDropdownId={statusDropdownId} setStatusDropdownId={setStatusDropdownId} dropdownRef={dropdownRef} />
              )}
            </div>
          )}

          {/* ═══════════════ PENDING ═══════════════ */}
          {tab === "pending" && (
            <div className="space-y-4">
              {pendingWeb.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 py-20 text-center">
                  <CheckCircle2 size={40} className="mx-auto mb-3 text-emerald-300" />
                  <p className="text-slate-500 font-bold">Aucune demande en attente</p>
                  <p className="text-slate-400 text-sm mt-1">Toutes les demandes web ont été traitées.</p>
                </div>
              ) : pendingWeb.map(ride => (
                <div key={ride._id} className="bg-white rounded-2xl border border-amber-200 p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0"><Globe size={20} className="text-amber-600" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-black text-slate-900 text-base">{ride.patientName}</h3>
                          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">Demande web</span>
                          {ride.type && <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">{TYPE_LABELS[ride.type] || ride.type}</span>}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-2">
                          <MapPin size={13} className="text-blue-400 shrink-0" />
                          <span className="truncate">{ride.startLocation}</span>
                          {ride.endLocation && ride.endLocation !== "À préciser" && <><ChevronRight size={13} className="text-slate-400 shrink-0" /><span className="truncate">{ride.endLocation}</span></>}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Calendar size={11} />{fmtFull(ride.date)} à {fmtTime(ride.date)}</span>
                          {ride.patientPhone && <span className="flex items-center gap-1"><Phone size={11} />{ride.patientPhone}</span>}
                        </div>
                        {ride.notes && <p className="mt-3 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">{ride.notes}</p>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      {ride.patientPhone && (
                        <a href={`tel:${ride.patientPhone}`} className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors">
                          <Phone size={13} />Appeler
                        </a>
                      )}
                      <button onClick={() => confirm("Accepter la course ?", `Accepter la demande de ${ride.patientName} pour le ${fmtFull(ride.date)} ?`, "Accepter", () => acceptRide(ride._id), false)}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black rounded-xl transition-colors">
                        <Check size={13} />Accepter
                      </button>
                      <button onClick={() => confirm("Refuser la demande ?", `Refuser la course de ${ride.patientName} ? Elle passera en statut "Annulée".`, "Refuser", () => rejectRide(ride._id))}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-black rounded-xl transition-colors">
                        <X size={13} />Refuser
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ═══════════════ PATIENTS ═══════════════ */}
          {tab === "patients" && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="font-black text-slate-800 text-sm">Patients</h2>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{patients.length}</span>
                </div>
                <div className="relative">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input value={patientSearch} onChange={e => setPatientSearch(e.target.value)} placeholder="Rechercher un patient…"
                    className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl pl-8 pr-3 py-2 outline-none focus:border-blue-400 w-52" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      {["Patient","Téléphone","Adresse","Chauffeur","Courses"].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {patients.filter(p => !patientSearch || p.fullName.toLowerCase().includes(patientSearch.toLowerCase())).map(p => (
                      <tr key={p._id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">{p.fullName[0]?.toUpperCase()}</div>
                            <span className="font-semibold text-slate-900">{p.fullName}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          {p.phone ? <a href={`tel:${p.phone}`} className="text-blue-600 hover:underline text-xs flex items-center gap-1"><Phone size={11} />{p.phone}</a> : <span className="text-slate-400 text-xs">—</span>}
                        </td>
                        <td className="px-5 py-3.5 text-xs text-slate-600 max-w-[200px] truncate">{p.address || "—"}</td>
                        <td className="px-5 py-3.5 text-xs text-slate-600">{typeof p.chauffeurId === "object" ? p.chauffeurId?.fullName : "—"}</td>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">{p.rideCount || 0} courses</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {patients.length === 0 && <div className="py-16 text-center text-slate-400"><UserCircle size={28} className="mx-auto mb-3 text-slate-300" />Aucun patient</div>}
              </div>
            </div>
          )}

          {/* ═══════════════ CHAUFFEURS ═══════════════ */}
          {tab === "chauffeurs" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {users.map(u => (
                  <div key={u._id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0">{u.fullName[0]?.toUpperCase()}</div>
                      <div>
                        <p className="font-black text-slate-900">{u.fullName}</p>
                        <p className="text-slate-400 text-xs">{u.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-50 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-slate-900">{u.rideCount}</p>
                        <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Courses</p>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-emerald-700">{u.finishedCount}</p>
                        <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Terminées</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <p className="text-xl font-black text-blue-700">{u.rideCount - u.finishedCount}</p>
                        <p className="text-[10px] text-blue-600 font-semibold mt-0.5">En cours</p>
                      </div>
                    </div>
                    {u.lastRide && (
                      <p className="text-xs text-slate-400 mt-3 flex items-center gap-1"><Clock size={11} />Dernière course : {fmtFull(u.lastRide)}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Calendar size={11} />Inscrit le {u.createdAt ? fmt(u.createdAt) : "—"}</p>
                  </div>
                ))}
                {users.length === 0 && (
                  <div className="col-span-3 bg-white rounded-2xl border border-slate-200 py-16 text-center">
                    <Users size={28} className="mx-auto mb-3 text-slate-300" /><p className="text-slate-400">Aucun chauffeur enregistré</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════ FACTURATION ═══════════════ */}
          {tab === "facturation" && (
            <div className="space-y-5">
              {/* Filters */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-black text-slate-800 text-sm mb-4 flex items-center gap-2"><Filter size={15} className="text-slate-400" />Filtres</h3>
                <div className="flex flex-wrap gap-3 items-end">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Du</label>
                    <input type="date" value={billingFrom} onChange={e => setBillingFrom(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Au</label>
                    <input type="date" value={billingTo} onChange={e => setBillingTo(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Statut facturation</label>
                    <select value={billingStatus} onChange={e => setBillingStatus(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-3 py-2 outline-none focus:border-blue-400 appearance-none">
                      <option value="">Tous</option>
                      <option value="Non facturé">Non facturé</option>
                      <option value="Facturé">Facturé</option>
                    </select>
                  </div>
                  <button onClick={fetchBilling} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors">Appliquer</button>
                </div>
              </div>

              {/* Summary */}
              {billing && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Courses terminées", value: billing.summary.count, color: "blue" },
                    { label: "Kilomètres totaux", value: `${billing.summary.totalKm} km`, color: "violet" },
                    { label: "Péages", value: `${billing.summary.totalTolls.toFixed(2)} €`, color: "amber" },
                    { label: "Montant total CPAM", value: `${billing.summary.totalAmount.toFixed(2)} €`, color: "emerald" },
                  ].map((c, i) => {
                    const cl = colorMap[c.color];
                    return (
                      <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5">
                        <p className="text-2xl font-black text-slate-900">{c.value}</p>
                        <p className="text-slate-600 text-xs font-semibold mt-1">{c.label}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Table */}
              {billing && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Receipt size={16} className="text-slate-400" /><h2 className="font-black text-slate-800 text-sm">Détail des courses facturables</h2><span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{billing.rides.length}</span></div>
                  </div>
                  {billing.rides.length === 0 ? (
                    <div className="py-16 text-center text-slate-400"><Receipt size={28} className="mx-auto mb-3 text-slate-300" />Aucune course trouvée pour cette période</div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100">
                          <tr>
                            {["Patient","Date","Type","Km","Péages","Montant","Chauffeur","Statut facturation"].map(h => (
                              <th key={h} className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {billing.rides.map(ride => (
                            <tr key={ride._id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-5 py-3.5 font-semibold text-slate-900">{ride.patientName}</td>
                              <td className="px-5 py-3.5 text-slate-600 whitespace-nowrap text-xs">{fmtFull(ride.date)}</td>
                              <td className="px-5 py-3.5"><span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{TYPE_LABELS[ride.type] || ride.type}</span></td>
                              <td className="px-5 py-3.5 text-slate-600 text-xs">{ride.realDistance ? `${ride.realDistance} km` : "—"}</td>
                              <td className="px-5 py-3.5 text-slate-600 text-xs">{ride.tolls ? `${ride.tolls.toFixed(2)} €` : "—"}</td>
                              <td className="px-5 py-3.5 font-bold text-slate-900">{ride.price ? `${ride.price.toFixed(2)} €` : "—"}</td>
                              <td className="px-5 py-3.5 text-xs text-slate-500">{typeof ride.chauffeurId === "object" ? ride.chauffeurId?.fullName : "—"}</td>
                              <td className="px-5 py-3.5">
                                <button onClick={() => toggleBilling(ride)}
                                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${ride.statuFacturation === "Facturé" ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" : "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"}`}>
                                  {ride.statuFacturation || "Non facturé"}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* ── MODALS ── */}
      {showCreateModal && token && (
        <CreateRideModal users={users} token={token} onClose={() => setShowCreateModal(false)} onCreated={() => { setShowCreateModal(false); fetchData(); }} />
      )}
      {reviewRide && token && (
        <ReviewSmsModal ride={reviewRide} token={token} onClose={() => setReviewRide(null)} />
      )}
      {confirmAction && (
        <ConfirmModal title={confirmAction.title} message={confirmAction.message} confirmLabel={confirmAction.label} danger={confirmAction.danger}
          onConfirm={() => { confirmAction.action(); setConfirmAction(null); }} onCancel={() => setConfirmAction(null)} />
      )}
    </div>
  );
}

// ─── RIDES TABLE ──────────────────────────────────────────────────────────────
function RidesTable({ rides, expandedRow, setExpandedRow, toggleSort, SortIcon, onStatusChange, onDelete, onToggleBilling, onReview, statusDropdownId, setStatusDropdownId, dropdownRef }: {
  rides: Ride[];
  expandedRow: string | null;
  setExpandedRow: (id: string | null) => void;
  toggleSort: (k: SortKey) => void;
  SortIcon: ({ k }: { k: SortKey }) => React.ReactElement;
  onStatusChange: (id: string, status: string) => void;
  onDelete: (id: string) => void;
  onToggleBilling: (ride: Ride) => void;
  onReview?: (ride: Ride) => void;
  statusDropdownId: string | null;
  setStatusDropdownId: (id: string | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
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
            <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rides.map(ride => (
            <React.Fragment key={ride._id}>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5 cursor-pointer" onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)}>
                  <p className="font-semibold text-slate-900 text-sm">{ride.patientName}</p>
                  {ride.patientPhone && (
                    <a href={`tel:${ride.patientPhone}`} onClick={e => e.stopPropagation()} className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:underline mt-0.5">
                      <Phone size={10} />{ride.patientPhone}
                    </a>
                  )}
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap cursor-pointer" onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)}>
                  <p className="text-slate-800 font-semibold text-xs">{new Date(ride.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</p>
                  <p className="text-slate-400 text-[11px]">{new Date(ride.date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
                </td>
                <td className="hidden lg:table-cell px-5 py-3.5 max-w-[180px] cursor-pointer" onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)}>
                  <div className="flex items-start gap-1.5">
                    <MapPin size={11} className="text-blue-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-700 truncate">{ride.startLocation}</p>
                      {ride.endLocation && ride.endLocation !== "À préciser" && <p className="text-[11px] text-slate-400 truncate">→ {ride.endLocation}</p>}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 cursor-pointer" onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)}>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{TYPE_LABELS[ride.type] || ride.type}</span>
                </td>
                <td className="px-5 py-3.5">
                  {/* Status dropdown */}
                  <div className="relative inline-block" ref={statusDropdownId === ride._id ? dropdownRef : undefined}>
                    <button onClick={(e) => { e.stopPropagation(); setStatusDropdownId(statusDropdownId === ride._id ? null : ride._id); }}
                      className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                      <StatusBadge status={ride.status} />
                      <ChevronDown size={12} className="text-slate-400" />
                    </button>
                    {statusDropdownId === ride._id && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-30 py-1 min-w-[140px]">
                        {Object.keys(STATUS_COLORS).map(s => (
                          <button key={s} onClick={(e) => { e.stopPropagation(); onStatusChange(ride._id, s); }}
                            className={`w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center gap-2 ${s === ride.status ? "text-blue-600" : "text-slate-700"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[s].dot}`} />{s}{s === ride.status && <Check size={11} className="ml-auto text-blue-500" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <SourceBadge source={ride.source} />
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5 justify-end">
                    {ride.source === "Web" && ride.status === "En attente" && (
                      <>
                        <button onClick={() => onStatusChange(ride._id, "À venir")} title="Accepter" className="p-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors"><Check size={12} /></button>
                        <button onClick={() => onStatusChange(ride._id, "Annulée")} title="Refuser" className="p-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"><X size={12} /></button>
                      </>
                    )}
                    <button onClick={() => onToggleBilling(ride)} title={ride.statuFacturation === "Facturé" ? "Marquer non facturé" : "Marquer facturé"}
                      className={`p-1.5 rounded-lg transition-colors ${ride.statuFacturation === "Facturé" ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}>
                      <CreditCard size={12} />
                    </button>
                    {ride.status === "Terminée" && ride.patientPhone && onReview && (
                      <button onClick={(e) => { e.stopPropagation(); onReview(ride); }} title="Demander un avis client" className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-lg transition-colors">
                        <Star size={12} />
                      </button>
                    )}
                    <button onClick={() => onDelete(ride._id)} title="Supprimer" className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-colors"><Trash2 size={12} /></button>
                    <button onClick={() => setExpandedRow(expandedRow === ride._id ? null : ride._id)} className="p-1.5 text-slate-400 hover:text-slate-600">
                      <ChevronDown size={14} className={`transition-transform ${expandedRow === ride._id ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </td>
              </tr>
              {expandedRow === ride._id && (
                <tr key={`${ride._id}-exp`} className="bg-blue-50/30">
                  <td colSpan={7} className="px-5 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mb-3">
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Départ</p><p className="text-slate-800">{ride.startLocation}</p></div>
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Destination</p><p className="text-slate-800">{ride.endLocation || "Non précisé"}</p></div>
                      <div>
                        <p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Date prévue</p>
                        <p className="text-slate-800">{new Date(ride.date).toLocaleDateString("fr-FR")} à {new Date(ride.date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
                      </div>
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Chauffeur</p><p className="text-slate-800">{typeof ride.chauffeurId === "object" && ride.chauffeurId?.fullName ? ride.chauffeurId.fullName : "Non assigné"}</p></div>
                      {ride.startTime && (
                        <div>
                          <p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Heure de début</p>
                          <p className="text-slate-800 font-semibold">{new Date(ride.startTime).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
                        </div>
                      )}
                      {ride.endTime && (
                        <div>
                          <p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Heure de fin</p>
                          <p className="text-slate-800 font-semibold">{new Date(ride.endTime).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
                          {ride.startTime && (
                            <p className="text-[10px] text-slate-400 mt-0.5">
                              Durée : {Math.round((new Date(ride.endTime).getTime() - new Date(ride.startTime).getTime()) / 60000)} min
                            </p>
                          )}
                        </div>
                      )}
                      {ride.price ? <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Montant CPAM</p><p className="text-slate-800 font-bold">{ride.price.toFixed(2)} €</p></div> : null}
                      {ride.realDistance ? <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Distance réelle</p><p className="text-slate-800">{ride.realDistance} km</p></div> : null}
                      {ride.tolls ? <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Péages</p><p className="text-slate-800">{ride.tolls.toFixed(2)} €</p></div> : null}
                      <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Facturation</p>
                        <button onClick={() => onToggleBilling(ride)} className={`text-[11px] font-bold px-2 py-0.5 rounded-full border transition-colors ${ride.statuFacturation === "Facturé" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"}`}>
                          {ride.statuFacturation || "Non facturé"}
                        </button>
                      </div>
                    </div>
                    {ride.status === "Terminée" && ride.patientPhone && onReview && (
                      <button
                        onClick={() => onReview(ride)}
                        className="mt-3 flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-black rounded-xl transition-colors"
                      >
                        <Star size={13} />Demander un avis client par SMS
                      </button>
                    )}
                    {ride.notes && <div><p className="font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]">Notes</p><p className="text-slate-800 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs">{ride.notes}</p></div>}
                    {ride.cancelReason && <div className="mt-2"><p className="font-bold text-red-400 uppercase tracking-wider mb-1 text-[10px]">Motif annulation</p><p className="text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-xs">{ride.cancelReason}</p></div>}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
