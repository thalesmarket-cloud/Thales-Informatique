import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Server, Database, Activity, RefreshCw, BarChart3, Users, Landmark, ShoppingCart, Percent, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";

interface HeroProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function Hero({ onDemoClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"finance" | "logistique" | "rh">("finance");
  const [ticker, setTicker] = useState(1480450);

  // Auto increment simulated profit ticker for business intelligence
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => prev + Math.floor(Math.random() * 45) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDiscoverSolutions = () => {
    const solSec = document.getElementById("solutions");
    if (solSec) {
      window.scrollTo({
        top: solSec.offsetTop - 85,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[#f8fafc] pt-32 pb-16 lg:pb-24 flex items-center"
    >
      {/* Abstract Background Design Elements matching Theme */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#007BFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-24 right-[-100px] w-[500px] h-[500px] border-[40px] border-[#00D4FF] rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] border-[20px] border-[#003B7A] rounded-full" />
      </div>

      {/* Decorative Blur Spheres for Polish */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#003B7A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#00D4FF]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Block: Core Message */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/25 bg-[#007BFF]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#007BFF]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>30 ANS D'INTÉGRATION ERP AU MAROC</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-[#001B3A] sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1]"
            >
              Transformez votre gestion d'entreprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B7A] to-[#00D4FF]">avec excellence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-slate-600 md:text-lg max-w-xl font-medium leading-relaxed"
            >
              Depuis plus de 30 ans, Thalès Informatique accompagne la transition numérique des entreprises marocaines grâce aux solutions Sage. Optimisez vos flux financiers, logistiques et ressources humaines avec un intégrateur Elite de premier plan.
            </motion.p>

            {/* Micro badges list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 font-semibold"
            >
              <span className="flex items-center gap-1.5 text-[#003B7A]">
                <Database className="h-4 w-4 text-[#007BFF]" /> Partenaire Sage Platinum
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5 text-[#003B7A]">
                <Server className="h-4 w-4 text-[#00D4FF]" /> Cloud Souverain Maroc
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="text-[#003B7A]">Support Dédié 6j/7</span>
            </motion.div>

            {/* Standard conversion CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onDemoClick()}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-6 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#003B7A] hover:shadow-blue-900/30 hover:scale-103 active:scale-98 transition-all cursor-pointer"
                id="hero-demo-btn"
              >
                <span>Demander une démo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleDiscoverSolutions}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                id="hero-discover-btn"
              >
                <span>Découvrir nos solutions</span>
                <Play className="h-3.5 w-3.5 text-[#007BFF] fill-[#007BFF]" />
              </button>
            </motion.div>

            {/* Quick Stats Overlay Row matching Theme design */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 mt-6"
            >
              <div>
                <div className="text-3xl font-black text-[#003B7A]">30+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Ans d'Expérience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#003B7A]">500+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Clients Accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#003B7A]">98%</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Satisfaction Client</div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Dynamic Interactive Dashboard Visualizer (Theme Polished) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl border border-slate-200/60 bg-white p-5 md:p-6 shadow-2xl overflow-hidden"
              id="hero-dashboard"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-[#00D4FF]/10 to-transparent blur-xl rounded-full pointer-events-none" />

              {/* Mock Dashboard Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 mb-5 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#003B7A]">THALÈS CLOUD ERP</span>
                    <span className="text-[9px] text-slate-400">Sage BI Actif • Casablanca</span>
                  </div>
                </div>
                
                {/* Visual simulator controls */}
                <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1 border border-slate-100 self-start">
                  <button
                    onClick={() => setActiveTab("finance")}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                      activeTab === "finance" ? "bg-[#003B7A] text-white shadow-sm" : "text-slate-500 hover:text-[#003B7A]"
                    }`}
                  >
                    Finance
                  </button>
                  <button
                    onClick={() => setActiveTab("logistique")}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                      activeTab === "logistique" ? "bg-[#003B7A] text-white shadow-sm" : "text-slate-500 hover:text-[#003B7A]"
                    }`}
                  >
                    Logistique
                  </button>
                  <button
                    onClick={() => setActiveTab("rh")}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                      activeTab === "rh" ? "bg-[#003B7A] text-white shadow-sm" : "text-slate-500 hover:text-[#003B7A]"
                    }`}
                  >
                    RH & Paie
                  </button>
                </div>
              </div>

              {/* Simulated Inner Panes */}
              {activeTab === "finance" && (
                <div className="space-y-4" id="db-finance">
                  {/* Top line of indicators */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 hover:border-[#007BFF]/20 transition-colors">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">C.A. Trimestriel</span>
                        <Landmark className="h-4 w-4 text-[#007BFF]" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-[#001B3A]">41 941 clients <span className="text-[10px] font-bold text-[#007BFF]">MAD</span></div>
                      <span className="text-[9px] text-green-600 font-bold flex items-center gap-0.5 mt-1">
                        <TrendingUp className="h-3 w-3" /> +14.6% vs Q1-Année Précédente
                      </span>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 hover:border-[#007BFF]/20 transition-colors">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Trésorerie Actuelle</span>
                        <Activity className="h-4 w-4 text-[#007BFF]" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-[#001B3A]">{ticker.toLocaleString("fr-FR")} <span className="text-[10px] font-bold text-[#003B7A]">MAD</span></div>
                      <span className="text-[9px] text-slate-500 flex items-center gap-1 mt-1 font-mono">
                        <RefreshCw className="h-3 w-3 animate-spin duration-3000 text-[#00D4FF]" /> Lettrage auto actif
                      </span>
                    </div>
                  </div>

                  {/* Flow chart area */}
                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 text-slate-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Flux de Trésorerie mensuelle</span>
                      <BarChart3 className="h-3.5 w-3.5 text-[#007BFF]" />
                    </div>

                    {/* Chart visual bars */}
                    <div className="h-28 flex items-end gap-3 pt-3.5 ps-1 border-b border-slate-200 relative">
                      <div className="absolute left-0 right-0 top-1/4 border-t border-slate-200/40 border-dashed" />
                      <div className="absolute left-0 right-0 top-2/4 border-t border-slate-200/40 border-dashed" />
                      <div className="absolute left-0 right-0 top-3/4 border-t border-slate-200/40 border-dashed" />

                      <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full bg-blue-100 rounded-t-md h-[40%] group-hover:bg-[#007BFF]/50 transition-all" />
                        <span className="text-[8px] font-semibold text-slate-400 font-mono">Jan</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full bg-blue-200 rounded-t-md h-[60%] group-hover:bg-[#007BFF]/75 transition-all" />
                        <span className="text-[8px] font-semibold text-slate-400 font-mono">Fev</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full bg-[#007BFF] rounded-t-md h-[85%] transition-all" />
                        <span className="text-[8px] font-semibold text-[#007BFF] font-mono">Mar</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full bg-blue-300 rounded-t-md h-[70%] group-hover:bg-[#007BFF]/90 transition-all" />
                        <span className="text-[8px] font-semibold text-slate-400 font-mono">Avr</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full bg-[#003B7A] rounded-t-md h-[100%] transition-all" />
                        <span className="text-[8px] font-semibold text-[#003B7A] font-mono">Mai</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "logistique" && (
                <div className="space-y-4" id="db-logistique">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Exactitude Stocks</span>
                        <ShoppingCart className="h-4 w-4 text-[#007BFF]" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-[#001B3A]">99.12 <span className="text-[10px] font-bold text-[#007BFF]">%</span></div>
                      <span className="text-[9px] text-[#003B7A] font-bold mt-1 block">Zéro écart de stock</span>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Rotations Clés</span>
                        <Percent className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-[#001B3A]">12.8 <span className="text-[10px] font-bold text-emerald-600">jours</span></div>
                      <span className="text-[9px] text-green-600 font-bold mt-1 block">-1.4j d'immobilisation</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 relative">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Capacité des dépôts nationaux
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[9px] text-slate-500 mb-1 font-semibold">
                          <span>Dépôt Central Basé à Ain Sebaâ (Casablanca)</span>
                          <span className="text-[#003B7A] font-bold">84% de Charge</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#003B7A] to-[#007BFF] rounded-full transition-all" style={{ width: "84%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[9px] text-slate-500 mb-1 font-semibold">
                          <span>Dépôt Régional - Port Tanger Med</span>
                          <span className="text-[#007BFF] font-bold">42% de Charge</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
                          <div className="h-full bg-[#007BFF] rounded-full transition-all" style={{ width: "42%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "rh" && (
                <div className="space-y-4" id="db-rh">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Effectifs Actifs</span>
                        <Users className="h-4 w-4 text-[#007BFF]" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-[#001B3A]">612 <span className="text-[10px] font-bold text-[#003B7A]">Salariés</span></div>
                      <span className="text-[9px] text-slate-500 mt-1 block">Télédéclarations validées</span>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Conformité Paie</span>
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div className="text-lg md:text-xl font-extrabold text-neutral-900">100 <span className="text-[10px] font-bold text-emerald-600">%</span></div>
                      <span className="text-[9px] text-emerald-600 font-bold mt-1 block">Réglementation I.R. Maroc</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 relative">
                    <div className="flex justify-between items-center text-xs text-slate-700 font-bold mb-2">
                      <span>Prochain bulletin de paie</span>
                      <span className="text-[#007BFF]">Juin 2026</span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <Server className="h-4 w-4 text-[#003B7A]" />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-[#001B3A] uppercase">Portail Damancom</span>
                          <span className="text-[9px] text-slate-400">Télédéclaration CNSS prête</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 rounded-full bg-emerald-50 px-2 py-0.5">Vérifié</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom simulator note */}
              <div className="mt-5 border-t border-slate-100 pt-3.5 text-center">
                <span className="text-[10px] text-slate-400 font-semibold italic">
                  💡 Module interactif : changez de filtre pour tester le suivi d'activité.
                </span>
              </div>
            </motion.div>

            {/* Float Badges mimicking theme mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/4 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce"
            >
              <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                <ShieldCheck className="h-4 w-4 text-[#003B7A]" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase leading-none">Expert Certifié</div>
                <div className="text-sm font-bold text-[#003B7A]">SAGE Platinum</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
