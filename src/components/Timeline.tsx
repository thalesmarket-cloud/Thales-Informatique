import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  Search, 
  FileCode2, 
  Database, 
  GraduationCap, 
  Headphones, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  User,
  ShieldCheck,
  Check
} from "lucide-react";
import { TIMELINE_STEPS } from "../data";

interface TimelineProps {
  onDemoClick?: (solutionId?: string) => void;
}

const STEP_AUGMENTS = [
  {
    tagline: "Phase stratégique d'immersion",
    percent: 20,
    deliverablesTitle: "Livrables de cadrage",
    expert: "Consultant Architecte S.I.",
    icon: Search,
    color: "from-[#003B7A] to-[#0052A3]",
    bgLight: "bg-[#003B7A]/5",
    borderGlow: "group-hover:border-[#003B7A]/30",
    badgeColor: "bg-[#003B7A]/10 text-[#003B7A]"
  },
  {
    tagline: "Prototypage & validation fonctionnelle",
    percent: 40,
    deliverablesTitle: "Spécifications de maquettage",
    expert: "Chef de Projet Fonctionnel",
    icon: FileCode2,
    color: "from-[#0052A3] to-[#007BFF]",
    bgLight: "bg-[#0052A3]/5",
    borderGlow: "group-hover:border-[#0052A3]/30",
    badgeColor: "bg-[#0052A3]/10 text-[#0052A3]"
  },
  {
    tagline: "Précision industrielle & migration",
    percent: 65,
    deliverablesTitle: "Système & connecteurs",
    expert: "Ingénieur d'Intégration Sage",
    icon: Database,
    color: "from-[#007BFF] to-[#009EFA]",
    bgLight: "bg-[#007BFF]/5",
    borderGlow: "group-hover:border-[#007BFF]/30",
    badgeColor: "bg-[#007BFF]/10 text-[#007BFF]"
  },
  {
    tagline: "Transfert de compétences certifié",
    percent: 85,
    deliverablesTitle: "Validation de fin de formation",
    expert: "Formateur Agréé Sage",
    icon: GraduationCap,
    color: "from-[#002E5C] to-[#003B7A]",
    bgLight: "bg-[#002E5C]/5",
    borderGlow: "group-hover:border-[#002E5C]/30",
    badgeColor: "bg-[#002E5C]/10 text-[#002E5C]"
  },
  {
    tagline: "Exploitation garantie sous SLA",
    percent: 100,
    deliverablesTitle: "Pilotage TMA & support",
    expert: "Coordinateur Technique Support",
    icon: Headphones,
    color: "from-emerald-600 to-teal-500",
    bgLight: "bg-[#008B3A]/5",
    borderGlow: "group-hover:border-emerald-500/30",
    badgeColor: "bg-emerald-100 text-emerald-800"
  }
];

export default function Timeline({ onDemoClick }: TimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  const step = TIMELINE_STEPS[activeStep];
  const augment = STEP_AUGMENTS[activeStep];
  const IconComponent = augment.icon;

  return (
    <section id="process" className="relative py-28 bg-[#fafcff] text-[#001B3A] overflow-hidden border-b border-slate-100">
      {/* Sleek, sophisticated geometric highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#007BFF]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#003B7A]/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute inset-y-0 left-12 w-px bg-slate-200/50 hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-slate-200/50 hidden xl:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with high architectural polish */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/70 px-4 py-1.5 text-xs font-bold tracking-widest text-[#0052A3] uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#007BFF] animate-pulse" />
            <span>Processus d'Intégration d'Élite</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#001B3A] sm:text-5xl leading-[1.1]">
            Un déploiement ERP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B7A] via-[#0052A3] to-[#007BFF]">
              structuré, serein et hautement sécurisé
            </span>
          </h2>
          <p className="text-slate-600 font-semibold text-base max-w-2xl mx-auto leading-relaxed">
            Depuis plus de 30 ans au Maroc, nous éliminons l'improvisation. Nous appliquons un protocole rigoureux et certifié pour garantir le succès fonctionnel complet de votre outil.
          </p>
        </div>

        {/* Master Explorer Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Adaptive Stepper Navigator (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block px-2">
                Les étapes de votre transition numérique
              </span>
              
              <div className="space-y-3 relative">
                {TIMELINE_STEPS.map((stepItem, idx) => {
                  const isPast = idx <= activeStep;
                  const isActive = idx === activeStep;
                  const stepAugment = STEP_AUGMENTS[idx];
                  const StepIcon = stepAugment.icon;

                  return (
                    <button
                      key={stepItem.number}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 relative group cursor-pointer flex items-center gap-4 ${
                        isActive
                          ? "bg-white border-slate-200 shadow-md shadow-blue-900/5 scale-[1.01]"
                          : "bg-white/40 border-slate-100 hover:bg-white/80 hover:border-slate-200"
                      }`}
                    >
                      {/* Active Background sliding-look helper (handled beautifully by layoutId) */}
                      {isActive && (
                        <motion.div
                          layoutId="active-stepper-glowing-bar"
                          className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-gradient-to-b from-[#003B7A] to-[#007BFF]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Step Indicator Shape */}
                      <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 font-mono text-xs font-bold ${
                        isActive
                          ? "bg-gradient-to-br from-[#003B7A] to-[#007BFF] text-white shadow-sm"
                          : isPast
                          ? "bg-blue-50 text-[#007BFF] border border-blue-100"
                          : "bg-slate-50 text-slate-400 border border-slate-100"
                      }`}>
                        <StepIcon className="h-4.5 w-4.5" />
                        <span className="absolute -bottom-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-[9px] font-black shadow-sm border border-slate-100 text-[#003B7A]">
                          {stepItem.number}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-xs font-extrabold transition-colors duration-300 uppercase tracking-wide truncate ${
                            isActive ? "text-[#003B7A]" : "text-slate-700 group-hover:text-[#0052A3]"
                          }`}>
                            {stepItem.title.split(". ")[1]}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400 font-bold shrink-0 ml-1">
                            {stepItem.duration}
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-400 font-semibold truncate mt-0.5">
                          {stepAugment.tagline}
                        </p>
                      </div>

                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isActive ? "text-[#007BFF] translate-x-0.5" : "text-slate-300 group-hover:text-slate-400"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SLA / Quality micro banner */}
            <div className="bg-gradient-to-br from-[#003B7A]/5 to-[#007BFF]/5 rounded-2xl p-4.5 border border-[#007BFF]/10 flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/80 border border-[#007BFF]/20 text-[#007BFF] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-black text-[#003B7A] uppercase tracking-wider">Norme d'Excellence Garantie</p>
                <p className="text-[10px] text-slate-500 font-semibold leading-normal">
                  Chaque étape est auditée par nos ingénieurs agréés Sage niveau Platinum.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Immersive Interactive Screen showing precise details (col-span-7) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xl shadow-slate-100 flex flex-col justify-between relative overflow-hidden" id="active-timeline">
              
              {/* Modern watermarked decorative background step number */}
              <div className="absolute right-[-20px] top-[-30px] text-[180px] font-black text-slate-50 pointer-events-none select-none leading-none tracking-tighter opacity-75">
                0{step.number}
              </div>

              <div className="relative z-10 space-y-6">
                {/* Meta details top block */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-50 text-[#007BFF] text-[9.5px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      DURÉE ESTIMÉE : {step.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10.5px] text-slate-400 font-bold bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <User className="h-3.5 w-3.5 text-[#007BFF]" />
                    <span>Livrable piloté par : <strong className="text-slate-600 font-extrabold">{augment.expert}</strong></span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#007BFF]">
                    <span className="text-[11px] font-mono tracking-widest font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#003B7A] to-[#007BFF]">
                      // ÉTAPE 0{step.number} SUR 05
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#001B3A] tracking-tight leading-snug">
                    {step.title.split(". ")[1]} : <span className="font-light text-slate-500">{augment.tagline}</span>
                  </h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar inside the screen */}
                <div className="space-y-1.5 bg-slate-50/70 rounded-2xl p-4 border border-slate-200/50">
                  <div className="flex items-center justify-between text-xs font-black text-[#003B7A] uppercase tracking-wider">
                    <span>Avancement du Projet</span>
                    <span className="font-mono">{augment.percent}%</span>
                  </div>
                  <div className="relative h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      className={`absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r ${augment.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${augment.percent}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                    ✓ {augment.percent < 100 ? "Validation conjointe des jalons requise pour passer à l'étape suivante" : "Processus entièrement sécurisé & finalisé"}
                  </p>
                </div>

                {/* Concrete Deliverables Blocks */}
                <div className="space-y-3">
                  <p className="text-xs font-extrabold text-[#003B7A] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#007BFF]" />
                    {augment.deliverablesTitle} fournis :
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <AnimatePresence mode="popLayout">
                      {step.details.map((detail, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          key={index} 
                          className="flex gap-2.5 items-start bg-slate-50/50 hover:bg-[#007BFF]/5 p-3 rounded-xl border border-slate-100 hover:border-blue-100 transition-all group duration-200"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-green-500/10 text-green-600 border border-green-500/20 group-hover:bg-[#007BFF]/10 group-hover:text-[#007BFF] group-hover:border-[#007BFF]/20 transition-colors mt-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-xs font-semibold text-slate-700 leading-tight">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

              </div>

              {/* Action buttons footer */}
              {onDemoClick && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    ⓘ Cadrage métrologique de faisabilité gratuit au Maroc
                  </div>
                  
                  <button
                    onClick={() => onDemoClick()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#003B7A] hover:bg-[#007BFF] hover:shadow-lg hover:shadow-blue-900/10 text-white px-5 py-2.5 text-xs font-black shadow-md shadow-[#003B7A]/10 transition-all cursor-pointer"
                  >
                    <span>Lancer ce process</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
