import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Milestone, Trophy, UserCheck, Flame, CheckCircle } from "lucide-react";
import { STATS } from "../data";

// Custom counting animation component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(duration / end), 16); // cap at ~60fps
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-black tracking-tight text-[#003B7A] mb-1.5 font-sans">
      {count.toLocaleString("fr-FR")}
      <span className="text-[#007BFF]">{suffix}</span>
    </div>
  );
}

export default function About() {
  const pillars = [
    {
      title: "Conseils stratégiques",
      description: "Co-conception de votre plan directeur informatique et analyse de la rentabilité opérationnelle globale."
    },
    {
      title: "Intégration d'ERP",
      description: "Paramétrages hautement sur-mesure et écriture de passerelles logicielles pour les solutions de l'écosystème Sage."
    },
    {
      title: "Support et TMA",
      description: "Assistance technique de haut niveau, traitement prioritaire des urgences de paie ou de facturation."
    },
    {
      title: "Formation continue",
      description: "Transfert de compétences intensif de vos équipes opérationnelles pour maximiser l'adoption des outils."
    }
  ];

  return (
    <section id="expertise" className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
      {/* Visual glowing patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left column: Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#007BFF] block">
                UNE EXPERTISE FORGÉE DURANT TROIS DÉCENNIES
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl leading-tight">
                Plus de 30 ans d'expertise au service des entreprises marocaines
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Fondé pour accompagner le développement économique et industriel du Royaume du Maroc, 
              <strong> Thalès Informatique</strong> s'est imposé comme l'intégrateur d'ERP de référence spécialisé 
              dans les technologies de gestion Sage (Platinum Elite). 
            </p>

            <p className="text-slate-500 leading-relaxed text-sm">
              Nous fusionnons conseils stratégiques, compétences techniques avancées et proximité humaine 
              pour implanter des solutions logicielles durables. De la finance à la paie de conformité locale 
              en passant par la gestion des d'approvisionnements logistiques, nos ingénieurs accompagnent votre croissance.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 mt-1">
                    <CheckCircle className="h-3 w-3 text-[#007BFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#001B3A] mb-0.5">{p.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Dynamic Statistics Grid */}
          <div className="lg:col-span-5 relative" id="stats-panel">
            {/* Visual background card */}
            <div className="absolute inset-0 bg-slate-50/50 rounded-2xl border border-slate-200/50 pointer-events-none" />
            
            <div className="relative grid grid-cols-2 gap-4 p-4 md:p-6">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#007BFF]/30 hover:shadow-xl hover:shadow-neutral-200/40 transition-all text-center flex flex-col justify-between h-44 group"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-[#007BFF] mb-2 group-hover:scale-105 transition-transform border border-slate-100">
                    {stat.id === "stat-1" && <Milestone className="h-5 w-5" />}
                    {stat.id === "stat-2" && <Trophy className="h-5 w-5" />}
                    {stat.id === "stat-3" && <UserCheck className="h-5 w-5" />}
                    {stat.id === "stat-4" && <Flame className="h-5 w-5" />}
                  </div>
                  
                  {/* Automated visual countdowns */}
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-[#001B3A] uppercase tracking-wider">{stat.label}</h3>
                    <p className="text-[10px] text-slate-400 leading-tight font-medium">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
