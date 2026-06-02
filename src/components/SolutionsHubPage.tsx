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
  Filter,
  Layers,
  HelpCircle,
  Database,
  Briefcase,
  Zap,
  LayoutGrid,
  TrendingUp,
  Wrench,
  Check
} from "lucide-react";
import { SOLUTIONS_DATA, SolutionDetails } from "../dataSolutions";
import Footer from "./Footer";

interface SolutionsHubPageProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function SolutionsHubPage({ onDemoClick }: SolutionsHubPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter & Search logic
  const filteredSolutions = useMemo(() => {
    return Object.values(SOLUTIONS_DATA).filter((sol) => {
      const matchesSearch = 
        sol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.overviewText.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "Tous" || sol.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ERP & Gestion":
        return <Cpu className="h-5 w-5 text-blue-600" />;
      case "Maintenance & Industrie":
        return <Wrench className="h-5 w-5 text-amber-500" />;
      case "Gestion Financière":
        return <Coins className="h-5 w-5 text-emerald-500" />;
      case "Ressources Humaines":
        return <Users2 className="h-5 w-5 text-[#003B7A]" />;
      default:
        return <Layers className="h-5 w-5 text-[#003B7A]" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "ERP & Gestion":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Maintenance & Industrie":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Gestion Financière":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Ressources Humaines":
        return "bg-purple-50 text-purple-700 border-purple-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  const categoriesList = ["Tous", "ERP & Gestion", "Maintenance & Industrie", "Gestion Financière", "Ressources Humaines"];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#001B3A] overflow-x-hidden antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Glow backdrop bubble */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-[#00D4FF]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#003B7A] transition-colors shrink-0">Accueil</Link>
            <ChevronRight className="h-3 w-3 text-slate-300 shrink-0" />
            <span className="text-[#007BFF] font-extrabold">Solutions Logicielles</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1 text-[10px] font-extrabold tracking-widest text-[#003B7A] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              PORTFOLIO LOGICIEL D'ÉLITE
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5.5xl font-black text-[#001B3A] tracking-tight leading-none">
              Des solutions de gestion pour <span className="text-[#007BFF]">propulser vos résultats</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold leading-relaxed max-w-3xl border-l-3 border-[#007BFF] pl-4 italic">
              "Nous installons et configurons l'élite du logiciel professionnel pour structurer votre finance, moderniser vos ressources humaines et fiabiliser vos usines de Casablanca à Tanger."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onDemoClick()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
              >
                <span>Obtenir une consultation gratuite</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <a 
                href="#all-solutions"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                Explorer le catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SECTOR FILTER & SEARCH GRID */}
      <section id="all-solutions" className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-[#f8fafc] border border-slate-200/80 p-4 rounded-2xl shadow-sm">
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute top-2.5 left-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un logiciel (ex: Sage X3, Factorial, GMAO...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007BFF] transition-all"
              />
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5" id="solutions-filters">
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="h-3 w-3" /> Catégorie :
              </span>
              {categoriesList.map((cat) => (
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

          {/* Solutions list rendering */}
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
              <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-600 mb-1">Aucune solution ne correspond</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">Recherchez un terme différent ou réinitialisez les filtres.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("Tous"); }}
                className="mt-4 text-xs font-bold text-[#007BFF] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredSolutions.map((sol) => (
                <div
                  key={sol.id}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#007BFF]/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header badge row */}
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-[#003B7A]/5 border border-slate-100 flex items-center justify-center">
                        {getCategoryIcon(sol.category)}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border ${getCategoryTheme(sol.category)}`}>
                        {sol.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-black text-[#001B3A] tracking-tight group-hover:text-[#007BFF] transition-colors">
                          <Link to={sol.path}>{sol.name}</Link>
                        </h3>
                        {sol.badge && (
                          <span className="bg-[#007BFF]/10 text-[#007BFF] border border-blue-100 text-[8px] font-black rounded px-1.5 py-0.5 uppercase tracking-wide">
                            {sol.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-semibold line-clamp-3 leading-relaxed">
                        {sol.tagline}
                      </p>
                    </div>

                    {/* Features list bullet points */}
                    <div className="pt-2">
                      <span className="text-[10px] font-extrabold uppercase text-[#003B7A] tracking-wider block mb-1">Forces clés du logiciel :</span>
                      <div className="space-y-1">
                        {sol.features.slice(0, 3).map((f, index) => (
                          <div key={index} className="flex gap-1.5 text-[10px] text-slate-400 font-semibold items-center">
                            <span className="h-1 w-1 rounded-full bg-[#007BFF]" />
                            <span className="line-clamp-1">{f.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer button section */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={sol.path}
                      className="text-xs font-extrabold text-[#007BFF] hover:text-[#003B7A] flex items-center gap-1 group/btn transition-all"
                    >
                      <span>Découvrir la solution</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                    <button
                      onClick={() => onDemoClick(sol.id)}
                      className="text-[9px] font-extrabold bg-[#003B7A] text-white hover:bg-[#007BFF] transition-all px-2.5 py-1 rounded"
                    >
                      Démo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 3. SOFTWARE COMPARISON SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#007BFF]/10 px-3 py-1 text-[10px] font-extrabold text-[#007BFF] uppercase tracking-wider">
              <Database className="h-3.5 w-3.5" />
              SÉLECTION COMPARATIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001B3A] tracking-tight">
              Tableau d'adéquation de notre catalogue
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
              Pour vous guider dans votre choix stratégique, voici une vue synthétique des cibles opérationnelles types de nos modules d'intégration.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-[#003B7A] text-[10px] font-extrabold uppercase tracking-wider">
                  <th className="p-4 pl-6">LOGICIEL</th>
                  <th className="p-4">SEGMENT D'ENTREPRISE</th>
                  <th className="p-4">DÉFI PRINCIPAL</th>
                  <th className="p-4">HÉBERGEMENT PREFERÉ</th>
                  <th className="p-4 text-right pr-6">DEGRÉ D'URGENCE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600 font-semibold">
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">Sage X3</td>
                  <td className="p-4">Holdings, ETI, Groupes Industriels</td>
                  <td className="p-4">Silos d'informations multisites</td>
                  <td className="p-4">SaaS d'entreprise / Sur-serveurs</td>
                  <td className="p-4 text-right pr-6 text-amber-500 font-black">★★★ Stratégique</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">Sage 100</td>
                  <td className="p-4">TPE structurées, PME en croissance</td>
                  <td className="p-4">Gestion manuelle, double-saisie</td>
                  <td className="p-4">Cloud réplica / On-Premise</td>
                  <td className="p-4 text-right pr-6 text-amber-500 font-black">★★ Essentiel</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">Sage FRP 1000</td>
                  <td className="p-4 font-bold text-[#003B7A]">Directions Financières (DAF)</td>
                  <td className="p-4">Audit comptable, consolidation</td>
                  <td className="p-4">SaaS hybride</td>
                  <td className="p-4 text-right pr-6 text-amber-500 font-black">★★★ Technique</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">DimoMaint GMAO</td>
                  <td className="p-4">Dépôts, Usines, Services techniques</td>
                  <td className="p-4">Pannes machines imprévues</td>
                  <td className="p-4">100% Cloud Web & Tables</td>
                  <td className="p-4 text-right pr-6 text-amber-500 font-black">★★ Préventif</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">Eloficash</td>
                  <td className="p-4">DAF, Direction Commerciale</td>
                  <td className="p-4">Impayés chroniques, DSO long</td>
                  <td className="p-4">Cloud et local combiné</td>
                  <td className="p-4 text-right pr-6 text-[#007BFF] font-black">★★★ Priorité Cash</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-black text-[#001B3A]">Factorial</td>
                  <td className="p-4">Services RH, Équipes distribués</td>
                  <td className="p-4">Délais congés paperasse, onboarding</td>
                  <td className="p-4">100% Mobile & Web Cloud</td>
                  <td className="p-4 text-right pr-6 text-emerald-600 font-black">★★ Modernisation</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. INDUSTRIES SERVED SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-100">
              <Briefcase className="h-4 w-4" />
              CONTEXTE SECTORIEL MAROC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001B3A] tracking-tight">
              Une adaptation rigoureuse par secteur
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
              Chaque secteur détient sa propre grille de contraintes logistiques, fiscales ou légales. Notre force réside dans la configuration de maquettes prêtes à l'emploi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="text-xl font-bold text-[#003B7A]">01</div>
              <h3 className="text-sm font-black text-[#001B3A]">Agroalimentaire</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Suivi total de traçabilité des lots d'après les normes ONSSA, dates limites de consommation (DLC) et gestion de pesées intégrées.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="text-xl font-bold text-[#003B7A]">02</div>
              <h3 className="text-sm font-black text-[#001B3A]">Distribution</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Contrôle complet des marges, structures complexes de promotions temporaires pour grossistes et de liaisons inter-dépôts.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="text-xl font-bold text-[#003B7A]">03</div>
              <h3 className="text-sm font-black text-[#001B3A]">Service & Conseil</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Suivi rigoureux des heures facturables passées d'après projet, portail de congés et élaboration de budgets simplifiés.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="text-xl font-bold text-[#003B7A]">04</div>
              <h3 className="text-sm font-black text-[#001B3A]">Industrie & Usine</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Ordonnancement de machines, planification de charges d'ateliers, traçabiité de pièces de rechange techniques et GPAO.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONVERSION CTA SECTION */}
      <section className="relative py-16 bg-[#001B3A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-blue-900),transparent_45%)]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#00D4FF] uppercase">
            BUREAU D'AUDIT TECHNIQUE THALÈS
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black max-w-2xl mx-auto leading-tight">
            Prêt à cartographier la transition numérique de vos flux ?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
            Nos experts basés à Casablanca sont à votre disposition pour dresser une analyse gratuite de vos besoins applicatifs logiciels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDemoClick()}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-8 text-xs font-extrabold text-white shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[#001B3A] transition-all cursor-pointer"
            >
              <span>Échanger avec un ingénieur-expert d'affaires</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-xs font-black text-white transition-all"
            >
              Soumettre un cahier des charges
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />

    </div>
  );
}
