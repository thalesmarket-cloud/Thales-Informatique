import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Coins, 
  Users2, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Filter,
  Layers,
  HelpCircle,
  Database
} from "lucide-react";
import { METIERS_DATA, MetierData } from "../dataMetiers";
import Footer from "./Footer";

interface MetiersHubPageProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function MetiersHubPage({ onDemoClick }: MetiersHubPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter & Search logic
  const filteredMetiers = useMemo(() => {
    return Object.values(METIERS_DATA).filter((metier) => {
      const matchesSearch = 
        metier.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        metier.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        metier.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "Tous" || metier.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Dynamic icon helper matching Moroccan colors
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Finance":
        return <Coins className="h-5 w-5 text-[#007BFF]" />;
      case "Ressources Humaines":
        return <Users2 className="h-5 w-5 text-emerald-500" />;
      case "Opérations & ERP":
        return <Cpu className="h-5 w-5 text-indigo-500" />;
      default:
        return <Layers className="h-5 w-5 text-[#003B7A]" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Finance":
        return "bg-blue-50 text-[#007BFF] border-blue-100";
      case "Ressources Humaines":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Opérations & ERP":
        return "bg-indigo-50 text-indigo-700 border-indigo-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#001B3A] overflow-x-hidden antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Glow backdrop bubbles */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-[#00D4FF]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#003B7A] transition-colors shrink-0">Accueil</Link>
            <ChevronRight className="h-3 w-3 text-slate-300 shrink-0" />
            <span className="text-[#007BFF] font-extrabold">Nos Métiers</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1 text-[10px] font-extrabold tracking-widest text-[#003B7A] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              SOLUTIONS PAR DIRECTIONS OPÉRATIONNELLES
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5.5xl font-black text-[#001B3A] tracking-tight leading-tight">
              Découvrez nos expertises configurées pour <span className="text-[#007BFF]">chaque métier</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 italic font-semibold leading-relaxed max-w-3xl border-l-3 border-[#007BFF] pl-4">
              "Fini le prêt-à-porter logiciel. Nous alignons l'écosystème Sage sur les d'organisation financière, RH et industrielle de votre entreprise au Maroc."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onDemoClick()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
              >
                <span>Demander un diagnostic métier</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <a 
                href="#all-metiers"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                Parcourir la grille
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL METIERS CHRONOLOGY & INTERACTIVE GRID */}
      <section id="all-metiers" className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filter & Search Bar Area */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-[#f8fafc] border border-slate-200/80 p-4 rounded-2xl shadow-sm">
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute top-2.5 left-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un métier (ex: paie, TVA, production...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007BFF] transition-all"
              />
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5" id="metiers-filters">
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="h-3 w-3" /> Filtrer :
              </span>
              {["Tous", "Finance", "Ressources Humaines", "Opérations & ERP"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#003B7A] text-white border-[#003B7A] shadow-sm"
                      : "bg-white text-slate-500 border-slate-200 hover:border-[#007BFF] hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count State */}
          {filteredMetiers.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
              <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-600 mb-1">Aucun métier ne correspond à votre recherche</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">Essayez de saisir un autre mot clé comme 'trésorerie', 'logistique', ou sélectionnez une autre catégorie.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("Tous"); }}
                className="mt-4 text-xs font-bold text-[#007BFF] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredMetiers.map((metier) => (
                <div
                  key={metier.id}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#007BFF]/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header badge row */}
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-[#003B7A]/5 border border-slate-100 flex items-center justify-center">
                        {getCategoryIcon(metier.category)}
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border ${getCategoryTheme(metier.category)}`}>
                        {metier.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base font-black text-[#001B3A] tracking-tight group-hover:text-[#007BFF] transition-colors mb-1.5">
                        <Link to={metier.path}>{metier.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold line-clamp-3 leading-relaxed">
                        {metier.shortDescription}
                      </p>
                    </div>

                    {/* Technical details badge bullet */}
                    <div className="pt-2">
                      <span className="text-[10px] font-extrabold uppercase text-[#003B7A] tracking-wider block mb-1">Configurations phares de l'outil :</span>
                      <div className="space-y-1">
                        {metier.recommendedSolutions.map((sol, index) => (
                          <div key={index} className="flex gap-1.5 text-[10px] text-slate-400 font-semibold items-center">
                            <span className="h-1 w-1 rounded-full bg-[#007BFF]" />
                            <span>{sol.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer button section */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={metier.path}
                      className="text-xs font-extrabold text-[#007BFF] hover:text-[#003B7A] flex items-center gap-1 group/btn transition-all"
                    >
                      <span>Étudier ce métier</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                      Conforme Maroc
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 3. PLATFORM RECOMMENDED INTEGRATED CONFIGS */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#007BFF]/10 px-3 py-1 text-[10px] font-extrabold text-[#007BFF] uppercase tracking-wider">
              <Database className="h-3.5 w-3.5" />
              SAGE PLATFORM INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001B3A] tracking-tight">
              Une architecture logicielle unique pour unifier vos métiers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
              Plutôt que d'accumuler de multiples logiciels déconnectés qui compliquent vos exports de données, optez pour la puissance des modules intégrés de l'écosystème Sage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="h-10 w-10 bg-blue-50 text-[#007BFF] rounded-xl flex items-center justify-center mb-4 border border-blue-100 font-black">
                01
              </div>
              <h3 className="text-sm font-black text-[#003B7A] mb-2 uppercase tracking-wide">Comptabilité intégrée à la paie</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Les journaux d'OD de paie, les charges CNSS et de mutuelles se déversent d'office en comptabilité générale d'un simple clic de validation mensuel.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="h-10 w-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 border border-emerald-100 font-black">
                02
              </div>
              <h3 className="text-sm font-black text-[#003B7A] mb-2 uppercase tracking-wide">Stocks corrélés à la facturation</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Toute validation de facture ou de bon de livraison d'agence de Casablanca mouvementera l'état réel d'inventaire de vos entrepôts de Tanger.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 border border-indigo-100 font-black">
                03
              </div>
              <h3 className="text-sm font-black text-[#003B7A] mb-2 uppercase tracking-wide">Business Intelligence unifiée</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Notre module Sage BI Reporting interroge en direct vos bases financières, de paye et de production pour de parfaits graphiques de pilotages.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONVERSION CTA SECTION */}
      <section className="relative py-16 bg-[#001B3A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-blue-900),transparent_45%)]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#00D4FF] uppercase">
            BUREAU D'AUDIT TECHNIQUE THALÈS
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black max-w-2xl mx-auto leading-tight">
            Prêt à cartographier les gains de rentabilité de vos métiers ?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
            Nos consultants certifiés sont à votre disposition pour dresser une analyse d'écart préalable gratuite de vos processus actuels au Maroc.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDemoClick()}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-8 text-xs font-extrabold text-white shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[#001B3A] transition-all cursor-pointer"
            >
              <span>Échanger avec un consultant</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-xs font-black text-white transition-all"
            >
              Déposer un cahier des charges
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />

    </div>
  );
}
