import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { ERP_BENEFITS, STATS } from "../data";

export default function ERPBenefits() {
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <section id="benefits" className="relative py-24 bg-white text-[#001B3A] overflow-hidden border-b border-slate-100">
      {/* Absolute vectors */}
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#007BFF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            BÉNÉFICES ET RENDEMENTS ERP SAGE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl">
            Mesurez l'impact immédiat sur vos marges
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Découvrez comment Thalès configure de réels gains de productivité opérationnels. 
            Comparez le quotidien de vos services avec ou sans outil Sage intégré.
          </p>
        </div>

        {/* Impact Toggle Simulator */}
        <div className="max-w-4xl mx-auto mb-10 text-center flex flex-col items-center justify-center gap-4">
          <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wide">
            SIMULATEUR DE RENDEMENT DE GESTION
          </span>
          <div className="relative inline-flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-full p-1.5 shadow-inner">
            <button
              onClick={() => setShowOptimized(false)}
              className={`px-5 py-2 text-xs font-bold uppercase rounded-full transition-all cursor-pointer ${
                !showOptimized ? "bg-[#003B7A] text-white shadow-sm" : "text-slate-500 hover:text-[#003B7A]"
              }`}
            >
              Données Dispersées (Avant)
            </button>
            <button
              onClick={() => setShowOptimized(true)}
              className={`px-5 py-2 text-xs font-bold uppercase rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                showOptimized ? "bg-[#007BFF] text-white font-extrabold shadow-sm" : "text-slate-500 hover:text-[#003B7A]"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span>Optimisation Sage (Après)</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Cards Block */}
        <div className="max-w-4xl mx-auto" id="benefits-interactive-grid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {ERP_BENEFITS.map((item) => {
              const displayState = showOptimized;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[300px] transition-all duration-500"
                >
                  {/* Decorative glowing gradient according to active optimized state */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all ${
                    displayState ? "bg-[#007BFF]" : "bg-red-500/60"
                  }`} />

                  {/* Header info */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                      {item.aspect}
                    </span>

                    <AnimatePresence mode="wait">
                      {!displayState ? (
                        <motion.div
                          key="before"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center gap-2 text-red-500">
                            <AlertCircle className="h-5 w-5" />
                            <h4 className="text-sm font-black uppercase tracking-wider">{item.before.status}</h4>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                            {item.before.description}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="after"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center gap-2 text-[#007BFF]">
                            <CheckCircle2 className="h-5 w-5 text-[#007BFF]" />
                            <h4 className="text-sm font-black uppercase tracking-wider">{item.after.status}</h4>
                          </div>
                          <p className="text-xs text-[#003B7A] leading-relaxed font-bold">
                            {item.after.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Operational stats values */}
                  <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold uppercase">
                    <span className="text-slate-400 font-bold">Bilan Opérationnel</span>
                    <span className={`font-mono font-bold ${
                      displayState ? "text-[#007BFF]" : "text-red-500"
                    }`}>
                      {displayState ? "Gain de temps : -70%" : "Risques d'erreurs : +40%"}
                    </span>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Simulated result callout */}
        <div className="mt-12 text-center max-w-sm mx-auto">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            *Métriques observées auprès de nos {STATS[2].value}+ clients marocains équipés d'une solution Sage.
          </p>
        </div>

      </div>
    </section>
  );
}
