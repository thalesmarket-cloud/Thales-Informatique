import { TRUSTED_LOGOS } from "../data";
import { Building2, Factory, Ship, Grape, Landmark } from "lucide-react";

export default function TrustedCompanies() {
  // Helper to draw realistic industry category icons
  const getIndustryIcon = (name: string) => {
    const cls = "h-4 w-4 text-[#007BFF] shrink-0";
    if (name.includes("Agro")) return <Grape className={cls} />;
    if (name.includes("Pack") || name.includes("Métal")) return <Factory className={cls} />;
    if (name.includes("Logistique")) return <Ship className={cls} />;
    if (name.includes("Technopark") || name.includes("Hôtels")) return <Building2 className={cls} />;
    return <Landmark className={cls} />;
  };

  return (
    <section className="relative py-12 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            INTÉGRATIONS À FORTE VALEUR AJOUTÉE
          </span>
          <h3 className="text-xs font-black uppercase tracking-widest text-[#003B7A] mt-1">
            Ils nous font confiance
          </h3>
        </div>

        {/* Infinitely moving logo ticker */}
        <div className="relative w-full overflow-hidden" id="logo-strip-viewport">
          {/* Fading left & right masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Double slider items to perform seamless infinite loops */}
          <div className="flex gap-10 items-center justify-center py-2 relative whitespace-nowrap">
            
            {/* Slide Track Line */}
            <div className="flex gap-16 animate-infinite-scroll divide-x divide-slate-100">
              
              {/* Loop original set */}
              {TRUSTED_LOGOS.map((company, index) => (
                <div key={index} className="flex items-center gap-2.5 ps-16">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-50 text-[#007BFF] border border-slate-100 shadow-sm">
                    {getIndustryIcon(company.name)}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight">{company.name}</span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-widest font-mono font-bold">{company.industry}</span>
                  </div>
                </div>
              ))}

              {/* Loop duplicate set for continuous seamless loop */}
              {TRUSTED_LOGOS.map((company, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-2.5 ps-16">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-50 text-[#007BFF] border border-slate-100 shadow-sm">
                    {getIndustryIcon(company.name)}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight">{company.name}</span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-widest font-mono font-bold">{company.industry}</span>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>

      {/* Embedded CSS for infinite scroll effect in Tailwind v4 safely */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 2rem)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
