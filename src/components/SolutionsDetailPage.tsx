import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle, 
  ChevronDown, 
  Database,
  Building,
  Key,
  ShieldAlert,
  HelpCircle,
  TrendingUp,
  Cpu,
  Layers,
  Wrench,
  Coins,
  Users2
} from "lucide-react";
import { SOLUTIONS_DATA } from "../dataSolutions";
import Footer from "./Footer";

interface SolutionsDetailPageProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function SolutionsDetailPage({ onDemoClick }: SolutionsDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Guard clause if ID is wrong
  const solution = id ? SOLUTIONS_DATA[id] : null;

  useEffect(() => {
    // If invalid id, send back to hub
    if (!solution) {
      navigate("/solutions");
    }
    window.scrollTo(0, 0);
  }, [id, solution, navigate]);

  // Keep track of accordion states for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!solution) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ERP & Gestion":
        return <Cpu className="h-5 w-5 text-blue-600" />;
      case "Maintenance & Industrie":
        return <Wrench className="h-5 w-5 text-amber-500" />;
      case "Gestion Financière":
        return <Coins className="h-5 w-5 text-emerald-500" />;
      case "Ressources Humaines":
        return <Users2 className="h-5 w-5 text-purple-600" />;
      default:
        return <Layers className="h-5 w-5 text-[#003B7A]" />;
    }
  };

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Solutions", path: "/solutions" },
    { label: solution.name, path: solution.path }
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#001B3A] overflow-x-hidden antialiased pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50/30 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Glow circles */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-[#00D4FF]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
            {breadcrumbs.map((crumb, idx) => (
              <div key={crumb.path} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="h-3 w-3 text-slate-300 shrink-0" />}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[#007BFF] font-extrabold truncate">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-[#003B7A] transition-colors shrink-0">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#007BFF]/10 px-3 py-1 text-[10px] font-extrabold text-[#007BFF] uppercase tracking-wider">
                {getCategoryIcon(solution.category)}
                <span>{solution.category}</span>
              </span>

              <h1 className="text-3xl font-black tracking-tight text-[#001B3A] sm:text-4xl md:text-5xl leading-tight">
                {solution.heroTitle}
              </h1>

              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed border-l-4 border-[#007BFF] pl-4 italic">
                {solution.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onDemoClick(solution.id)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
                >
                  <span>Demander une démo personnalisée</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#overview"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all"
                >
                  Découvrir la brique
                </a>
              </div>
            </div>

            {/* Micro specs box */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl shadow-slate-100/50 space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Cible applicative principale</span>
                  <p className="text-xs font-bold text-[#003B7A] leading-relaxed">
                    {solution.targetMarket}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {solution.stats.map((st, i) => (
                    <div key={i} className="bg-[#f8fafc] border border-slate-100 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-[#007BFF]">{st.value}</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-tight">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">
                  <span>Intégrateur Certifié</span>
                  <span className="text-[#007BFF]">Thalès Informatique</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW SECTION */}
      <section id="overview" className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-[#007BFF] uppercase tracking-wider block">PRÉSENTATION DU PROGICIEL</span>
              <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] tracking-tight">
                Une gouvernance moderne pour votre outil
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                {solution.overviewText}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#f8fafc] border border-slate-200 p-6 rounded-2xl space-y-4">
              <h3 className="text-xs font-extrabold text-[#003B7A] uppercase tracking-wider">Pourquoi intégrer avec Thalès ?</h3>
              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 bg-blue-50 text-[#007BFF] rounded flex items-center justify-center shrink-0 border border-blue-100 text-xs font-bold">1</span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                    30 ans d'histoire sur le déploiement d'écosystèmes ERP de pointe.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 bg-blue-50 text-[#007BFF] rounded flex items-center justify-center shrink-0 border border-blue-100 text-xs font-bold">2</span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                    Support technique prioritaire basé à Casablanca et Rabat avec SLA garanti.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 bg-blue-50 text-[#007BFF] rounded flex items-center justify-center shrink-0 border border-blue-100 text-xs font-bold">3</span>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                    Formations spécialisées par modules pour vos cadres et agents opérationnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES SECTION */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-extrabold text-[#007BFF] uppercase tracking-widest block">FONCTIONNALITÉS ARCHITECTURALE</span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] tracking-tight">
              Une couverture fonctionnelle absolue de vos flux
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Découvrez la liste des fonctionnalités modulaires que nous activons et configurons dans votre maquette logicielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.features.map((feat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-all space-y-3">
                <div className="h-7 w-7 rounded-lg bg-blue-50 text-[#007BFF] flex items-center justify-center border border-blue-100">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-black text-[#003B7A]">{feat.title}</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BUSINESS BENEFITS SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-extrabold text-[#007BFF] uppercase tracking-widest block">GÉNÉRATEUR DE PERFORMANCE</span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] tracking-tight">
              Quels gains pour votre organisation ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              L'intégration de nos progiciels d'élite transforme vos processus pour libérer de la productivité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.benefits.map((ben, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-6 relative overflow-hidden space-y-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#001B3A]">{ben.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INDUSTRIES SERVED SECTION */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-extrabold text-[#007BFF] uppercase tracking-widest block">ADÉQUATION DE TERRAIN</span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] tracking-tight">
              Secteurs opérationnels d'application
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Nous adaptons la configuration de la solution {solution.name} selon les spécificités réglementaires et techniques de votre secteur.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {solution.industries.map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs font-bold text-xs text-[#003B7A] flex items-center gap-2">
                <Building className="h-4 w-4 text-[#007BFF]" />
                <span>{ind}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INTEGRATION CAPABILITIES SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold text-[#007BFF] uppercase tracking-wider block">OPÉRABILITÉ DES SYSTÈMES</span>
              <h2 className="text-xl sm:text-3xl font-black text-[#001B3A] tracking-tight">
                Une synergie parfaite de vos données d'entreprises
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Nos solutions ne fonctionnent pas en silos isolés. Nous construisons des liaisons étincelantes pour que vos flux (ventes, stocks, banque) soient unifiés de bout en bout.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {solution.integrations.map((it, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 flex gap-4 items-start">
                  <div className="h-6 w-6 bg-blue-50 text-[#007BFF] rounded-md flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                    <Key className="h-3 w-3" />
                  </div>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {it}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">FICHES CONSEILS TECHNIQUES</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#001B3A] tracking-tight">
              Foire Aux Questions - {solution.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              Obtenez des réponses transparentes quant au déploiement, à l'hébergement et aux licences.
            </p>
          </div>

          <div className="space-y-4">
            {solution.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#003B7A] hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 text-[#007BFF] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-slate-100 p-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="relative py-16 bg-[#001B3A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-blue-900),transparent_45%)]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#00D4FF] uppercase">
            PLANIFIER UN CADRAGE LOGICIEL
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black max-w-2xl mx-auto leading-tight">
            Prêt à faire une démonstration personnalisée de {solution.name} ?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
            Nos ingénieurs consultants certifiés vous proposent une présentation interactive avec vos propres fiches de données types.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDemoClick(solution.id)}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-8 text-xs font-extrabold text-white shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[#001B3A] transition-all cursor-pointer"
            >
              <span>Prendre rendez-vous avec Thalès</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-xs font-black text-white transition-all"
            >
              Contacter l'agence Maroc régionale
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />

    </div>
  );
}
