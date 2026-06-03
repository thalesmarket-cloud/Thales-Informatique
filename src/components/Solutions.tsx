import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  BarChart3, 
  Lightbulb, 
  ArrowRight, 
  Check, 
  X,
  Boxes
} from "lucide-react";
import { SOLUTIONS } from "../data";
import { Solution } from "../types";

interface SolutionsProps {
  onDemoClick: (solutionId?: string) => void;
}

// Icon helper to dynamically render Lucide icons
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Users":
      return <Users className={className} />;
    case "HeartHandshake":
      return <HeartHandshake className={className} />;
    case "BarChart3":
      return <BarChart3 className={className} />;
    case "Lightbulb":
      return <Lightbulb className={className} />;
    default:
      return <Boxes className={className} />;
  }
};

export default function Solutions({ onDemoClick }: SolutionsProps) {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const handleOpenDetails = (sol: Solution) => {
    setSelectedSolution(sol);
  };

  const handleCloseDetails = () => {
    setSelectedSolution(null);
  };

  return (
    <section id="solutions" className="relative py-24 bg-[#f8fafc] text-[#001B3A] overflow-hidden border-b border-slate-100">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-[#007BFF]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-[#00D4FF]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            NOS SOLUTIONS APPLICATIVES & SERVICES ERP
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl md:text-5xl">
            L'excellence de notre écosystème logiciel au Maroc
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
            Découvrez une gamme complète d'outils interconnectés capables de centraliser vos ventes, 
            de piloter vos finances locales et d'automatiser votre production industrielle.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="solutions-grid">
          {SOLUTIONS.map((sol) => (
            <motion.div
              key={sol.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl bg-white border border-slate-200/60 p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-xl hover:border-[#007BFF]/20 group"
            >
              {/* Top Gradient Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#003B7A] group-hover:to-[#00D4FF] rounded-t-2xl transition-all" />

              <div>
                {/* Icon & Badge line */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#003B7A] border border-slate-100 group-hover:bg-[#003B7A] group-hover:text-white transition-all">
                    <IconRenderer name={sol.icon} className="h-6 w-6" />
                  </div>
                  {sol.badge && (
                    <span className="rounded-full bg-[#007BFF]/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#007BFF]">
                      {sol.badge}
                    </span>
                  )}
                </div>

                {/* Meta details */}
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1 block">
                  {sol.category}
                </span>

                <h3 className="text-lg font-extrabold text-[#001B3A] group-hover:text-[#007BFF] transition-colors mb-2">
                  {sol.name}
                </h3>

                <p className="text-xs text-slate-400 mb-4 font-semibold italic">
                  {sol.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {sol.description}
                </p>

                {/* Quick features mini representation */}
                <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                  {sol.features.slice(0, 3).map((feat, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <Check className="h-4 w-4 text-[#007BFF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => handleOpenDetails(sol)}
                  className="text-xs font-bold text-slate-500 hover:text-[#003B7A] transition-all cursor-pointer inline-flex items-center gap-1"
                >
                  Fiche Technique
                </button>

                <button
                  onClick={() => onDemoClick(sol.id)}
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#003B7A]/5 px-4 text-xs font-bold text-[#003B7A] hover:bg-[#003B7A] hover:text-white transition-all cursor-pointer"
                >
                  <span>Démonstration</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detailed Dialog (Drawer/Lightbox) for deep technical sheets */}
        <AnimatePresence>
          {selectedSolution && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseDetails}
                className="absolute inset-0 bg-[#001B3A]/60 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white p-6 md:p-8 text-left shadow-2xl border border-slate-200"
                id="solution-technical-sheet"
              >
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-4">
                  <span className="rounded-full bg-[#007BFF]/10 px-3 py-1 text-xs font-extrabold tracking-wider text-[#007BFF] uppercase">
                    {selectedSolution.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-[#003B7A]">
                    {selectedSolution.name}
                  </h3>
                  <p className="text-xs font-bold text-[#007BFF] mt-1.5 uppercase tracking-wide">
                    Cible : {selectedSolution.targetMarket}
                  </p>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {selectedSolution.description}
                </p>

                {/* Full Features lists */}
                <h4 className="text-xs font-bold text-[#001B3A] uppercase tracking-widest mb-3">
                  Spécificités techniques incluses :
                </h4>
                <div className="space-y-3 bg-slate-50 border border-slate-150 rounded-xl p-4 mb-6">
                  {selectedSolution.features.map((feat, index) => (
                    <div key={index} className="flex gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="h-4 w-4 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-emerald-700" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 items-center border-t border-slate-100 pt-5">
                  <button
                    onClick={() => {
                      handleCloseDetails();
                      onDemoClick(selectedSolution.id);
                    }}
                    className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#003B7A] text-sm font-bold text-white hover:bg-[#007BFF] shadow-lg shadow-blue-500/10 transition-all cursor-pointer"
                  >
                    <span>Réserver une présentation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleCloseDetails}
                    className="h-11 rounded-xl px-5 text-xs font-bold text-slate-500 hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
