import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  X, 
  HelpCircle,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Award,
  Database,
  Phone,
  Mail,
  MapPin,
  ChevronDown
} from "lucide-react";
import { METIERS_DATA } from "../dataMetiers";
import Footer from "./Footer";

interface MetiersDetailPageProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function MetiersDetailPage({ onDemoClick }: MetiersDetailPageProps) {
  const { subId } = useParams<{ subId: string }>();
  const navigate = useNavigate();
  
  // Guard clause if ID is wrong
  const metier = subId ? METIERS_DATA[subId] : null;

  useEffect(() => {
    // If invalid id, send back to hub
    if (!metier) {
      navigate("/metiers");
    }
    window.scrollTo(0, 0);
  }, [subId, metier, navigate]);

  // Keep track of accordion states for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!metier) return null;

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos Métiers", path: "/metiers" },
    { label: metier.title, path: metier.path }
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#001B3A] overflow-x-hidden antialiased pt-24">
      
      {/* 1. SEO META PLACEHOLDERS (IN-PAGE VISUAL INDICATION) */}
      <div className="hidden" id="seo-meta-registry">
        <span id="meta-title">{metier.metaTitle}</span>
        <span id="meta-desc">{metier.metaDescription}</span>
        <h1 id="seo-h1">{metier.title} - Intégration Sage au Maroc par Thalès</h1>
      </div>

      {/* 2. HERO SECTION */}
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
                <Sparkles className="h-3.5 w-3.5" />
                MÉTIER : {metier.category}
              </span>

              <h2 className="text-3xl font-black tracking-tight text-[#001B3A] sm:text-4xl md:text-5.5xl leading-tight">
                Solutions Sage pour : <span className="text-[#003B7A] block">{metier.title}</span>
              </h2>

              <p className="text-sm sm:text-base font-bold text-slate-500 uppercase tracking-wide leading-relaxed border-l-2 border-[#007BFF] pl-4">
                {metier.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                {metier.metaDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onDemoClick(metier.id)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
                >
                  <span>Demander une démo {metier.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#challenges"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all"
                >
                  Analyser les enjeux
                </a>
              </div>
            </div>

            {/* Metric / Category Focus Side Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-xl shadow-slate-100 flex flex-col justify-between min-h-[280px] overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-slate-50 rounded-bl-full border-l border-b border-slate-100 pointer-events-none -mr-4 -mt-4" />
                
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">NATURE DE L'ACCOMPAGNEMENT</span>
                  <div className="text-4xl font-black text-[#003B7A] font-sans">
                    100%
                  </div>
                  <p className="text-xs font-bold text-[#007BFF] uppercase tracking-wide">SUR-MESURE & CONFORME MAROC</p>
                  
                  <div className="space-y-2 bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs font-semibold text-slate-500">
                    <div className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007BFF] shrink-0" />
                      <span>Réglementations locales actualisées</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007BFF] shrink-0" />
                      <span>Support réactif basé au Maroc (SLA)</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[9px] text-[#007BFF] font-black uppercase tracking-wider">
                  <span>Partenaire technologique</span>
                  <span>Thalès Informatique</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES SECTION */}
      <section id="challenges" className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">LES ENJEUX OPÉRATIONNELS</span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-extrabold tracking-tight text-[#001B3A] leading-tight">
              Quels défis pose la brique {metier.title} au quotidien ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
              Sans un progiciel haut de gamme synchronisé, de nombreuses frictions ralentissent vos cadres, diminuent votre rentabilité commerciale ou débouchent sur des pénalités comptables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metier.challenges.map((chal, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-6 relative overflow-hidden space-y-3">
                <div className="h-8 w-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center border border-red-100 shrink-0">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#001B3A]">{chal.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                  {chal.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. RECOMMENDED SOLUTIONS SECTION */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 bg-[#003B7A]/5 rounded-full px-3 py-1 text-[10px] font-extrabold text-[#003B7A] uppercase tracking-wider">
              <Database className="h-3.5 w-3.5" />
              SAGE ECOSYSTEM
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] tracking-tight">
              Quelles configurations de progiciels Sage intégrer ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto leading-relaxed">
              Découvrez les briques logicielles que nous configurons sur-mesure pour fiabiliser votre direction {metier.category.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {metier.recommendedSolutions.map((sol, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#007BFF]/35 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#007BFF] border border-blue-100">
                      {sol.badge}
                    </span>
                    <span className="text-[9px] font-extrabold text-[#00D4FF] uppercase tracking-widest">SAGE APPROVED</span>
                  </div>
                  <h3 className="text-base font-black text-[#003B7A]">{sol.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between">
                  <Link 
                    to={sol.path}
                    className="text-xs font-bold text-[#007BFF] hover:text-[#003B7A] flex items-center gap-1"
                  >
                    <span>Fiche logicielle</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <button
                    onClick={() => onDemoClick(metier.id)}
                    className="text-[10px] font-black bg-[#003B7A] text-white px-3 py-1.5 rounded-lg hover:bg-[#007BFF] transition-colors"
                  >
                    Demander une démo
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">LES GAINS DE TRANSITION</span>
            <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black text-[#001B3A] leading-tight">
              Quels bénéfices retirez-vous de l'intégration sous Sage ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Assurez la sérénité réglementaire de votre direction opérationnelle avec des automatismes métiers développés et optimisés spécifiquement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metier.benefits.map((benefit, idx) => (
              <div key={idx} className="space-y-3 p-5 rounded-2xl border border-slate-200/70 hover:border-[#007BFF]/20 transition-all">
                <div className="h-8 w-8 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center border border-emerald-100 shrink-0">
                  <Lightbulb className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#001B3A]">{benefit.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER SUCCESS SECTION */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-slate-50 rounded-bl-full pointer-events-none" />
            
            <div className="lg:col-span-8 space-y-5 relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-100">
                <Award className="h-4 w-4" /> SUCCESS STORY CLIENT
              </span>

              <h3 className="text-lg sm:text-xl font-black text-[#003B7A]">
                Découvrez l'avis de "{metier.customerSuccess.clientName}"
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 italic font-medium leading-relaxed">
                "{metier.customerSuccess.quote}"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-1 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                <span>SECTEUR : <strong className="text-slate-600">{metier.customerSuccess.sector}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 text-center space-y-2 relative z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">GAIN QUANTIFIABLE OBSERVÉ</span>
              <div className="text-3xl font-black text-[#003B7A] tracking-tight">{metier.customerSuccess.result}</div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Retour sur investissement mesuré</p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">DES RÉPONSES À VOS QUESTIONS</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#001B3A] tracking-tight">
              Foire Aux Questions - {metier.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              Nos consultants ingénieurs expliquent de façon transparente le paramétrage, l'hébergement et l'implémentation de cette brique métier au Maroc.
            </p>
          </div>

          <div className="space-y-4">
            {metier.faqs.map((faq, index) => {
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
            COMMENCER UNE TRANSITION SEREINE
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3.5xl font-black max-w-2xl mx-auto leading-tight">
            Souhaitez-vous une démonstration personnalisée de {metier.title} ?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
            Planifiez un appel de cadrage gratuit avec notre équipe pour évaluer l'adéquation technique et financière pour vos équipes de terrain au Maroc.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDemoClick(metier.id)}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-8 text-xs font-extrabold text-white shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[#001B3A] transition-all cursor-pointer"
            >
              <span>Demander une démo de l'expert</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-xs font-black text-white transition-all"
            >
              Contacter le siège de Casablanca
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />

    </div>
  );
}
