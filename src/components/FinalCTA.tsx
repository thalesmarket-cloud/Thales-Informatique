import { ArrowRight, MessageSquareCode, Calendar, ShieldCheck, Mail } from "lucide-react";

interface FinalCTAProps {
  onDemoClick: () => void;
}

export default function FinalCTA({ onDemoClick }: FinalCTAProps) {
  return (
    <section className="relative py-20 bg-slate-50 text-[#001B3A] overflow-hidden border-t border-slate-200">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#007BFF]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 h-64 w-64 rounded-full bg-[#00D4FF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center" id="final-cta-frame">
        
        {/* Decorative badge block */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#007BFF] mb-6">
          <ShieldCheck className="h-4 w-4 text-[#007BFF]" />
          <span>GARANTIE DE SUCCÈS OPÉRATIONNEL SAGE MAROC</span>
        </div>

        {/* Main Header */}
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl max-w-4xl mx-auto leading-tight text-[#001B3A]">
          Prêt à accélérer votre <span className="bg-gradient-to-r from-[#003B7A] to-[#007BFF] bg-clip-text text-transparent">transformation digitale</span> ?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-semibold">
          Échangez avec nos consultants certifiés basés à Casablanca, Tanger et Agadir, 
          et découvrez la solution Sage la plus adaptée à vos charges métiers.
        </p>

        {/* Interactive buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onDemoClick}
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#003B7A] px-8 text-sm font-extrabold text-white shadow-xl shadow-blue-900/25 hover:bg-[#007BFF] transition-all cursor-pointer border border-[#003B7A]"
            id="cta-primary-demo"
          >
            <span>Planifier une démo gratuite</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </button>

          <button
            onClick={onDemoClick}
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-8 text-sm font-black text-[#003B7A] hover:bg-slate-50 transition-all cursor-pointer"
            id="cta-secondary-contact"
          >
            <Mail className="h-4 w-4 text-[#007BFF]" />
            <span>Contacter un expert</span>
          </button>
        </div>

        {/* Floating security indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-y-2 gap-x-8 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4.5 w-4.5 text-[#007BFF]" /> Engagement Certifié Gold</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4.5 w-4.5 text-[#007BFF]" /> Réponse sous 4 Heures ouvrées</span>
          <span className="flex items-center gap-1.5"><MessageSquareCode className="h-4.5 w-4.5 text-emerald-600" /> Évaluation budgétaire transparente</span>
        </div>

      </div>
    </section>
  );
}
