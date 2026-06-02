import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { PAGES_REGISTRY } from "../dataPages";
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  HelpCircle, 
  FileText, 
  Send,
  Sliders,
  Award,
  Zap,
  CheckCircle2,
  ChevronRight,
  Database
} from "lucide-react";
import Footer from "./Footer";

interface PageTemplateProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function PageTemplate({ onDemoClick }: PageTemplateProps) {
  const { pathname } = useLocation();
  const pageData = PAGES_REGISTRY[pathname] || PAGES_REGISTRY["/solutions"];

  // Automatically scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    ...(pageData.parentPath ? [{ label: pageData.parent, path: pageData.parentPath }] : []),
    { label: pageData.title, path: pathname },
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Glow vector background */}
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-[#00D4FF]/[0.03] rounded-full blur-3xl pointer-events-none" />

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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#007BFF]/10 px-3 py-1 text-xs font-extrabold text-[#007BFF] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                {pageData.category} • Thalès Maroc
              </span>

              <h1 className="text-3xl font-black tracking-tight text-[#001B3A] sm:text-4xl md:text-5xl leading-tight">
                {pageData.title}
              </h1>

              <p className="text-base font-bold text-slate-600 uppercase tracking-wide leading-relaxed border-l-2 border-[#007BFF] pl-4">
                {pageData.tagline}
              </p>

              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-semibold">
                {pageData.description}
              </p>

              {/* Bullet actions preview */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onDemoClick(pageData.path.replace(/\//g, "-"))}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-900/15 hover:bg-[#007BFF] transition-all cursor-pointer"
                >
                  <span>{pageData.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-[#003B7A] hover:bg-slate-50 transition-all"
                >
                  Consulter les spécifications
                </Link>
              </div>
            </div>

            {/* Hero Badge illustration side */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-xl shadow-slate-100 flex flex-col justify-between min-h-[300px] overflow-hidden">
                {/* Visual grid decor */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-slate-50 rounded-bl-full border-l border-b border-slate-100 pointer-events-none -mr-4 -mt-4" />
                
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">MÉTRIQUE CLÉ DE TRANSFORMATION</span>
                  <div className="text-5xl md:text-6xl font-black tracking-tight text-[#003B7A] mb-2 font-sans">
                    {pageData.metric.value}
                  </div>
                  <p className="text-sm font-bold text-[#007BFF] uppercase tracking-wide mb-6">{pageData.metric.label}</p>
                  
                  <div className="space-y-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                    <div className="flex gap-2 text-xs font-semibold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-[#007BFF] shrink-0" />
                      <span>Certifié conforme Sage Platinum Elite</span>
                    </div>
                    <div className="flex gap-2 text-xs font-semibold text-slate-500">
                      <Sliders className="h-4 w-4 text-[#007BFF] shrink-0" />
                      <span>Paramétrage 100% sur-mesure</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Partenaire technologique</span>
                  <span className="text-[#007BFF]">Thalès Informatique Maroc</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT PLACEHOLDER --- */}
      <section className="relative py-20 bg-white overflow-hidden border-b border-slate-100">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Functional specifications & checklists */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block mb-2">SPÉCIFICATIONS PROTOCOLAIRES</span>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#001B3A] sm:text-3xl leading-tight">
                  Ce que comprend l'intégration méthodique de Thalès Informatique
                </h2>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed font-semibold">
                  Chaque module et page d'intégration est développé pour s'imbriquer avec intégrité dans votre infrastructure. Notre équipe s'occupe de l'import, de l'audit préparatoire de données, des formations de formateurs, et de la maintenance TMA.
                </p>
              </div>

              {/* Dynamic highlights list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {pageData.highlights.map((hlt, index) => (
                  <div key={index} className="rounded-xl border border-slate-200/60 p-5 bg-[#f8fafc] hover:border-[#007BFF]/30 transition-all flex gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-[#007BFF]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#001B3A] mb-1">Pilier {index + 1}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">{hlt}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Placeholder text layout matching sap/office design */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#003B7A]">DOCUMENTATION & INTÉGRATION CONTINUE</h4>
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4 items-start">
                  <HelpCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide">Note de pré-cadrage de la maquette</p>
                    <p className="text-xs text-[#001B3A]/70 leading-relaxed font-semibold">
                      Cette page présente actuellement la structure fonctionnelle et esthétique complète validée pour notre écosystème commercial. Des cahiers d'intégration, spécificités de champs SQL et workflows approuvés par notre comité interne de programmation viendront l'enrichir dans la phase suivante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Informational sidebar or checklist */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                <span className="text-[10px] font-bold text-[#003B7A] tracking-wider uppercase block border-b border-slate-200 pb-2">FICHE SÉCURITÉ & SLA SAGE</span>
                
                <ul className="space-y-4">
                  <li className="flex gap-2.5 items-start text-xs font-semibold text-slate-500">
                    <Award className="h-5 w-5 text-[#007BFF] shrink-0" />
                    <div>
                      <span className="text-slate-800 font-bold block mb-0.5">Agrément Platinum Elite</span>
                      <span>Qualité d'ingénierie absolue certifiée directement par l'éditeur Sage.</span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start text-xs font-semibold text-slate-500">
                    <Zap className="h-5 w-5 text-[#007BFF] shrink-0" />
                    <div>
                      <span className="text-slate-800 font-bold block mb-0.5">Activation Instantanée</span>
                      <span>Paramètres de pré-configuration marocaine chargés en moins de 48 heures.</span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start text-xs font-semibold text-slate-500">
                    <MapPin className="h-5 w-5 text-[#007BFF] shrink-0" />
                    <div>
                      <span className="text-slate-800 font-bold block mb-0.5">Savoir-faire Local</span>
                      <span>Prise en compte parfaite de la charte de facturation d'importateur-exportateur en devises.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- CTA SECTION PLACEHOLDER --- */}
      <section className="relative py-16 bg-[#001B3A] text-white overflow-hidden border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-blue-900),transparent_45%)]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-widest text-[#00D4FF] uppercase">
            BUREAU CONSEIL THALÈS EXPERTISE
          </span>

          <h2 className="text-2xl font-black md:text-3.5xl max-w-2xl mx-auto leading-tight">
            Prêt à étudier l'adéquation de {pageData.title} à vos volumes de flux ?
          </h2>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
            Nos directeurs d'études organisent des séances préparatoires de démonstration pour dechiffrer vos d'approvisionnement et simuler vos gains d'amortissement.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onDemoClick(pageData.path.replace(/\//g, "-"))}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-8 text-xs font-extrabold text-white shadow-xl shadow-blue-500/20 hover:bg-white hover:text-[#001B3A] transition-all cursor-pointer"
            >
              <span>{pageData.ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="tel:+212522548780"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 text-xs font-black text-white transition-all"
            >
              Contacter le siège
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION PLACEHOLDER --- */}
      <section className="relative py-20 bg-slate-50 overflow-hidden" id="inline-contact">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">ASSISTANCE DE PLACEMENT COMMERCIAL</span>
              <h3 className="text-2xl font-black text-[#003B7A] tracking-tight">
                Consignez votre projet de transition numérique
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Complétez ces repères. Un ingénieur d'affaires certifié Thalès reviendra vers vous sous 4 heures pour soumettre un plan de démonstration ou de cadrage gratuit, adapté à votre effectif et vos progiciels actuels.
              </p>

              <div className="space-y-3.5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-600">
                <div className="flex gap-2.5 items-center">
                  <Phone className="h-4 w-4 text-[#007BFF]" />
                  <span>Assistance téléphonique : +212 5 22 54 87 80</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Mail className="h-4 w-4 text-[#007BFF]" />
                  <span>Messagerie officielle : contact@thales.ma</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <MapPin className="h-4 w-4 text-[#007BFF]" />
                  <span>Siège Social : 310 Rue Hadj Omar Riffi, Casablanca</span>
                </div>
              </div>
            </div>

            {/* Form layout */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">FORMULAIRE DE CADRAGE RAPIDE</span>
              
              <form onSubmit={(e) => { e.preventDefault(); onDemoClick(pageData.path.replace(/\//g, "-")); }} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Votre Nom complet</label>
                  <div className="relative">
                    <User className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                    <input type="text" placeholder="Moffadel Alami" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Email professionnel</label>
                  <div className="relative">
                    <Mail className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                    <input type="email" placeholder="alami@entreprise.ma" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Numéro de téléphone</label>
                  <div className="relative">
                    <Phone className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                    <input type="tel" placeholder="0661234567" className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Société & Ville</label>
                  <div className="relative">
                    <Building2 className="absolute top-2.5 left-3 h-3.5 w-3.5 text-slate-400" />
                    <input type="text" placeholder="Casa Export S.A." className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" required />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Message d'expression des charges</label>
                  <textarea rows={2} placeholder={`Notre projet d'implémentation pour la brique ${pageData.title}...`} className="w-full rounded-md border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#007BFF] focus:bg-white transition-all" />
                </div>

                <button type="submit" className="sm:col-span-2 w-full inline-flex h-10 items-center justify-center gap-2.5 rounded-lg bg-[#003B7A] text-xs font-extrabold text-white shadow hover:bg-[#007BFF] transition-all cursor-pointer">
                  <span>Valider la fiche d'intérêt</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER INCLUDED --- */}
      <Footer onNavClick={() => {}} onDemoClick={onDemoClick} />

    </div>
  );
}
