import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star, MapPin, Building2 } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials gently over time
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#f8fafc] text-[#001B3A] overflow-hidden border-b border-slate-100">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            RETOURS D'EXPÉRIENCE DE NOS CLIENTS MAROC
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl">
            Ils nous font confiance pour leur transformation
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Découvrez de réels témoignages de décideurs financiers et directeurs généraux 
            qui pilotent sereinement leur croissance grâce à Thalès Informatique.
          </p>
        </div>

        {/* Carousel Visual Frame */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-carousel">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-lg shadow-neutral-100 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#007BFF]/10 stroke-2" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Executive Avatar portrait with location badge */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-[#007BFF]/10 scale-105" />
                    <img
                      src={TESTIMONIALS[activeIndex].image}
                      alt={TESTIMONIALS[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="relative h-24 w-24 rounded-full object-cover border-2 border-[#007BFF]/20 shadow-md"
                    />
                  </div>

                  <h3 className="text-base font-black text-[#003B7A]">
                    {TESTIMONIALS[activeIndex].name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold leading-normal mb-2.5 uppercase tracking-wide">
                    {TESTIMONIALS[activeIndex].role}
                  </p>

                  <div className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600 font-bold mb-1 border border-slate-200/50">
                    <Building2 className="h-3.5 w-3.5 text-[#003B7A]" />
                    <span>{TESTIMONIALS[activeIndex].company}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-[10px] text-[#007BFF] font-black uppercase tracking-wider">
                    <MapPin className="h-3 w-3" />
                    <span>{TESTIMONIALS[activeIndex].city}, Maroc</span>
                  </div>
                </div>

                {/* Testimonial Core text */}
                <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 pb-1">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold italic">
                    "{TESTIMONIALS[activeIndex].text}"
                  </p>

                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#003B7A] pt-4 border-t border-slate-100">
                    Projet d'Intégration certifié et accompagné par Thalès Informatique
                  </p>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#003B7A] hover:border-[#003B7A] hover:shadow-md cursor-pointer transition-all active:scale-90"
              id="carousel-prev"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Micro indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex ? "w-6 bg-[#003B7A]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#003B7A] hover:border-[#003B7A] hover:shadow-md cursor-pointer transition-all active:scale-90"
              id="carousel-next"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
