import { motion } from "motion/react";
import { Award, GraduationCap, Headphones, Settings, Compass, Box, HardHat } from "lucide-react";
import { WHY_REASONS } from "../data";

const WhyIcon = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Award":
      return <Award className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "Headphones":
      return <Headphones className={className} />;
    case "Settings":
      return <Settings className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Box":
      return <Box className={className} />;
    default:
      return <HardHat className={className} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="choose" className="relative py-24 bg-[#f8fafc] text-[#001B3A] overflow-hidden border-b border-slate-100">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            REJOIGNEZ NOS CLIENTS SATISFAITS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl">
            Pourquoi choisir Thalès Informatique ?
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Faites le choix d'un partenaire stable, d'ingénieurs d'affaires d'expérience 
            et d'un support technique local hautement disponible au Maroc.
          </p>
        </div>

        {/* Bento/Grid Layout of Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-grid">
          {WHY_REASONS.map((reason, idx) => (
            <motion.div
              key={reason.id}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-[#007BFF]/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Glowing Icon Base */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#007BFF] border border-slate-100 mb-5">
                  <WhyIcon name={reason.iconName} className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-black text-[#001B3A] mb-2.5">
                  {reason.title}
                </h3>

                <p className="text-sm text-[#001B3A]/70 leading-relaxed font-semibold">
                  {reason.description}
                </p>
              </div>

              {/* Minimal footer layout */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span>Pilier d'engagement {idx+1}</span>
                <span className="text-[#007BFF] uppercase font-bold">Thalès Informatique</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
