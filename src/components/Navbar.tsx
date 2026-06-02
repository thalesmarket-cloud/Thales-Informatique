import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Database, 
  PhoneCall, 
  Sparkles, 
  FileText, 
  Sliders, 
  Workflow, 
  MapPin, 
  HeartHandshake, 
  Compass, 
  BookOpen, 
  BarChart3, 
  Award,
  Users,
  Settings,
  ShieldAlert,
  ChevronRight
} from "lucide-react";

interface NavbarProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function Navbar({ onDemoClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setActiveMega(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (menuName: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMega(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMega(null);
    }, 150);
  };

  const toggleMobileAccordion = (accordionName: string) => {
    if (activeMobileAccordion === accordionName) {
      setActiveMobileAccordion(null);
    } else {
      setActiveMobileAccordion(accordionName);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // --- REGISTRY DATA FOR NAVIGATION ---
  const SOLUTIONS_MEGA = [
    {
      groupTitle: "Solutions ERP",
      items: [
        { name: "Sage X3", subtitle: "Grandes entreprises & industries", path: "/solutions/sage-x3", icon: Workflow },
        { name: "Sage 100", subtitle: "Gestion intégrée pour PME agiles", path: "/solutions/sage-100", icon: Settings }
      ]
    },
    {
      groupTitle: "Gestion RH",
      items: [
        { name: "Sage Paie & RH", subtitle: "Législation marocaine & CNDP", path: "/solutions/sage-paie-rh", icon: Users }
      ]
    },
    {
      groupTitle: "Relation Client",
      items: [
        { name: "Sage CRM", subtitle: "Outils forces de vente & SAV", path: "/solutions/sage-crm", icon: HeartHandshake }
      ]
    },
    {
      groupTitle: "Pilotage & Reporting",
      items: [
        { name: "Sage BI Reporting", subtitle: "Décisions stratégiques sur Excel", path: "/solutions/sage-bi-reporting", icon: BarChart3 }
      ]
    }
  ];

  const SERVICES_MEGA = [
    {
      groupTitle: "Conseil",
      items: [
        { name: "Audit & Conseil", subtitle: "Cadrage préliminaire de vos flux", path: "/services/audit-conseil", icon: Compass }
      ]
    },
    {
      groupTitle: "Intégration",
      items: [
        { name: "Intégration ERP", subtitle: "Développements de connecteurs API", path: "/services/integration-erp", icon: Sliders }
      ]
    },
    {
      groupTitle: "Formation",
      items: [
        { name: "Formation Utilisateurs", subtitle: "Maximisation pédagogique locale", path: "/services/formation", icon: BookOpen }
      ]
    },
    {
      groupTitle: "Support",
      items: [
        { name: "Support & Maintenance", subtitle: "Accords de niveau de service SLA", path: "/services/support-maintenance", icon: Award },
        { name: "Assistance Utilisateurs", subtitle: "Téléassistance et déblocages 24/7", path: "/services/assistance-utilisateurs", icon: PhoneCall }
      ]
    }
  ];

  const SECTEURS_ITEMS = [
    { name: "Industrie", subtitle: "Ordonnanciers & bilans GPAO", path: "/secteurs/industrie" },
    { name: "Négoce & Distribution", subtitle: "Logistique multi-sociétés & stocks", path: "/secteurs/negoce-distribution" },
    { name: "Services", subtitle: "Taux de charge de consultants", path: "/secteurs/services" },
    { name: "BTP", subtitle: "Chantiers & déboursés d'ouvrages", path: "/secteurs/btp" },
    { name: "Agroalimentaire", subtitle: "Normes ONSSA & traçabilité HACCP", path: "/secteurs/agroalimentaire" }
  ];

  const REFERENCES_ITEMS = [
    { name: "Nos Clients", subtitle: "Plus de 500 fleurons au Maroc", path: "/references/clients" },
    { name: "Études de cas", subtitle: "Retours chiffrés d'implémentation", path: "/references/etudes-de-cas" },
    { name: "Témoignages", subtitle: "La parole aux dirigeants et DAF", path: "/references/temoignages" }
  ];

  const RESSOURCES_ITEMS = [
    { name: "Blog Décisionnel", subtitle: "Transformation digitale marocaine", path: "/blog" },
    { name: "Guides ERP", subtitle: "Cahiers des charges types et audits", path: "/guides-erp" },
    { name: "Actualités", subtitle: "Nouveautés de la loi de finance", path: "/actualites" },
    { name: "FAQ", subtitle: "Réponses de nos ingénieurs experts", path: "/faq" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4"
        }`}
        id="app-header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center">
            
            {/* Logo */}
            <a
              href="/"
              onClick={handleHomeClick}
              className="flex items-center gap-3 group cursor-pointer justify-start"
              id="brand-logo"
            >
              <img
                src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1772030743/logo_thal%C3%A8s_1_tkhzkc.png"
                alt="Thalès Informatique"
                referrerPolicy="no-referrer"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-1" id="desktop-menu">
              
              {/* ACCUEIL */}
              <Link
                to="/"
                className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive("/")
                    ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                    : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                }`}
              >
                Accueil
              </Link>

              {/* SOLUTIONS (MEGA MENU) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive("/solutions")
                      ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                      : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                <AnimatePresence>
                  {activeMega === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl z-50 grid grid-cols-12 gap-6"
                    >
                      {/* Left helper bar */}
                      <div className="col-span-3 bg-gradient-to-b from-[#003B7A]/5 to-[#007BFF]/10 rounded-xl p-4 border border-blue-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-extrabold text-[#007BFF] uppercase tracking-widest block mb-2">SAGE ÉCOSYSTÈME</span>
                          <h4 className="text-xs font-black text-[#001B3A] uppercase mb-2">Intégration Pro</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">Toutes nos solutions comptent une intégration marocaine certifiée.</p>
                        </div>
                        <Link to="/solutions" className="inline-flex items-center gap-1 text-[10px] text-[#007BFF] font-black uppercase hover:underline mt-4">
                          <span>Voir tout</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>

                      {/* Right lists */}
                      <div className="col-span-9 grid grid-cols-2 gap-4">
                        {SOLUTIONS_MEGA.map((gp, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <span className="text-[10px] font-black tracking-widest text-[#003B7A] uppercase border-b border-slate-100 pb-1 block">
                              {gp.groupTitle}
                            </span>
                            <div className="space-y-1">
                              {gp.items.map((it) => {
                                const IconComp = it.icon;
                                return (
                                  <Link
                                    key={it.name}
                                    to={it.path}
                                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 group transition-all"
                                  >
                                    <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-50 text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-colors mt-0.5 shrink-0">
                                      <IconComp className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#007BFF] transition-colors">{it.name}</p>
                                      <p className="text-[9px] text-slate-400 font-semibold">{it.subtitle}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SERVICES (MEGA MENU) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive("/services")
                      ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                      : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                <AnimatePresence>
                  {activeMega === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl z-50 grid grid-cols-12 gap-6"
                    >
                      {/* Left helper bar */}
                      <div className="col-span-3 bg-gradient-to-b from-[#003B7A]/5 to-[#007BFF]/10 rounded-xl p-4 border border-blue-100 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-extrabold text-[#007BFF] uppercase tracking-widest block mb-2">QUALITÉ ACCRÉDITÉE</span>
                          <h4 className="text-xs font-black text-[#001B3A] uppercase mb-2">Nos Services</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">TMA et support sous engagement de réactivité SLA marocaine.</p>
                        </div>
                        <Link to="/services" className="inline-flex items-center gap-1 text-[10px] text-[#007BFF] font-black uppercase hover:underline mt-4">
                          <span>Voir tout</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>

                      {/* Right lists */}
                      <div className="col-span-9 grid grid-cols-2 gap-4">
                        {SERVICES_MEGA.map((gp, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <span className="text-[10px] font-black tracking-widest text-[#003B7A] uppercase border-b border-slate-100 pb-1 block">
                              {gp.groupTitle}
                            </span>
                            <div className="space-y-1">
                              {gp.items.map((it) => {
                                const IconComp = it.icon;
                                return (
                                  <Link
                                    key={it.name}
                                    to={it.path}
                                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 group transition-all"
                                  >
                                    <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-50 text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-colors mt-0.5 shrink-0">
                                      <IconComp className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#007BFF] transition-colors">{it.name}</p>
                                      <p className="text-[9px] text-slate-400 font-semibold">{it.subtitle}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SECTEURS D'ACTIVITÉ */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("secteurs")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive("/secteurs")
                      ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                      : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                  }`}
                >
                  <span>Secteurs</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                <AnimatePresence>
                  {activeMega === "secteurs" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl z-50 space-y-3"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#003B7A] border-b border-slate-100 pb-1.5 block">
                        Verticalité Industrielle
                      </span>
                      <div className="space-y-1">
                        {SECTEURS_ITEMS.map((it) => (
                          <Link
                            key={it.name}
                            to={it.path}
                            className="block p-2 rounded-lg hover:bg-slate-50 group text-left"
                          >
                            <p className="text-xs font-bold text-slate-800 group-hover:text-[#007BFF] transition-colors">{it.name}</p>
                            <p className="text-[9px] text-slate-400 font-semibold">{it.subtitle}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RÉFÉRENCES */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("references")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive("/references")
                      ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                      : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                  }`}
                >
                  <span>Références</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                <AnimatePresence>
                  {activeMega === "references" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl z-50 space-y-3"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#003B7A] border-b border-slate-100 pb-1.5 block">
                        Partenaires de Confiance
                      </span>
                      <div className="space-y-1">
                        {REFERENCES_ITEMS.map((it) => (
                          <Link
                            key={it.name}
                            to={it.path}
                            className="block p-2 rounded-lg hover:bg-slate-50 group text-left"
                          >
                            <p className="text-xs font-bold text-slate-800 group-hover:text-[#007BFF] transition-colors">{it.name}</p>
                            <p className="text-[9px] text-slate-400 font-semibold">{it.subtitle}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RESSOURCES */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("ressources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive("/ressources") || isActive("/blog") || isActive("/guides-erp") || isActive("/actualites") || isActive("/faq")
                      ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                      : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                  }`}
                >
                  <span>Ressources</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                <AnimatePresence>
                  {activeMega === "ressources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl z-50 space-y-3"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#003B7A] border-b border-slate-100 pb-1.5 block">
                        Dossiers documentaires
                      </span>
                      <div className="space-y-1">
                        {RESSOURCES_ITEMS.map((it) => (
                          <Link
                            key={it.name}
                            to={it.path}
                            className="block p-2 rounded-lg hover:bg-slate-50 group text-left"
                          >
                            <p className="text-xs font-bold text-slate-800 group-hover:text-[#007BFF] transition-colors">{it.name}</p>
                            <p className="text-[9px] text-slate-400 font-semibold">{it.subtitle}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTACT */}
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive("/contact")
                    ? "text-[#007BFF] bg-[#007BFF]/5 font-extrabold"
                    : "text-slate-600 hover:text-[#003B7A] hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA & hotline */}
            <div className="hidden lg:flex items-center justify-end gap-4" id="desktop-ctas">
              <button
                onClick={() => onDemoClick()}
                className="bg-[#003B7A] text-white px-5 py-2.5 rounded-full text-xs font-extrabold shadow-md shadow-[#003B7A]/15 hover:bg-[#007BFF] hover:shadow-lg transition-all cursor-pointer"
                id="header-cta"
              >
                <span>Demander une démo</span>
              </button>
            </div>

            {/* Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onDemoClick()}
                className="bg-[#003B7A] text-white px-3 py-1.5 rounded-full text-[10px] font-extrabold hover:bg-[#007BFF] transition-all cursor-pointer"
                id="header-cta-mobile-fixed"
              >
                <span>Démo</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 cursor-pointer"
                id="hamburger-btn"
                aria-label="Ouvrir le menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile / Tablet Accordion Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[64px] z-50 bg-white border-b border-slate-200 py-3 shadow-2xl lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
            id="mobile-drawer"
          >
            <div className="space-y-1 px-4 pb-6 pt-1">
              
              {/* Accueil simple link */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider"
              >
                Accueil
              </Link>

              {/* Solutions Accordion */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion("solutions")}
                  className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileAccordion === "solutions" ? "rotate-180 text-[#007BFF]" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-1 space-y-3 shrink-0"
                    >
                      {SOLUTIONS_MEGA.map((gp) => (
                        <div key={gp.groupTitle} className="space-y-1">
                          <p className="text-[10px] font-extrabold text-[#003B7A] tracking-wider uppercase">{gp.groupTitle}</p>
                          {gp.items.map((it) => (
                            <Link
                              key={it.name}
                              to={it.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-xs text-slate-600 hover:text-[#007BFF] font-semibold"
                            >
                              • {it.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Accordion */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion("services")}
                  className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileAccordion === "services" ? "rotate-180 text-[#007BFF]" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-1 space-y-3 shrink-0"
                    >
                      {SERVICES_MEGA.map((gp) => (
                        <div key={gp.groupTitle} className="space-y-1">
                          <p className="text-[10px] font-extrabold text-[#003B7A] tracking-wider uppercase">{gp.groupTitle}</p>
                          {gp.items.map((it) => (
                            <Link
                              key={it.name}
                              to={it.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-xs text-slate-600 hover:text-[#007BFF] font-semibold"
                            >
                              • {it.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Secteurs Accordion */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion("secteurs")}
                  className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider cursor-pointer"
                >
                  <span>Secteurs</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileAccordion === "secteurs" ? "rotate-180 text-[#007BFF]" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "secteurs" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-1.5 space-y-1.5 shrink-0"
                    >
                      {SECTEURS_ITEMS.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-slate-600 hover:text-[#007BFF] font-semibold"
                        >
                          • {it.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Références Accordion */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion("references")}
                  className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider cursor-pointer"
                >
                  <span>Références</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileAccordion === "references" ? "rotate-180 text-[#007BFF]" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "references" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-1.5 space-y-1.5 shrink-0"
                    >
                      {REFERENCES_ITEMS.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-slate-600 hover:text-[#007BFF] font-semibold"
                        >
                          • {it.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ressources Accordion */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion("ressources")}
                  className="flex w-full items-center justify-between py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider cursor-pointer"
                >
                  <span>Ressources</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMobileAccordion === "ressources" ? "rotate-180 text-[#007BFF]" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "ressources" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-1.5 space-y-1.5 shrink-0"
                    >
                      {RESSOURCES_ITEMS.map((it) => (
                        <Link
                          key={it.name}
                          to={it.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-slate-600 hover:text-[#007BFF] font-semibold"
                        >
                          • {it.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact direct link */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 px-3 rounded-lg text-left text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase tracking-wider pl-3"
              >
                Contact
              </Link>

              {/* Bottom drawer elements */}
              <div className="pt-4 border-t border-slate-100 mt-4 flex flex-col gap-3">
                <a
                  href="tel:+212522548780"
                  className="flex items-center gap-2 py-1 px-3 text-xs text-slate-700 hover:text-[#007BFF]"
                >
                  <PhoneCall className="h-4 w-4 text-[#007BFF]" />
                  <span className="font-mono">+212 5 22 54 87 80</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDemoClick();
                  }}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#003B7A] text-xs font-extrabold text-white shadow-md hover:bg-[#007BFF] transition-all cursor-pointer"
                >
                  <span>Demander une démo gratuite</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
