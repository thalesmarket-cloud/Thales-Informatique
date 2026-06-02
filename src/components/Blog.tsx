import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Calendar, ArrowRight, X, Heart, MessageSquare, ClipboardCheck } from "lucide-react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";

// Simulated full detailed text content for Moroccan ERP success
const ARTICLE_BODIES: Record<string, { body: string; tips: string[] }> = {
  "blog-1": {
    body: "La transition numérique n'est plus une option de confort mais un impératif de pérennité pour les PME au Maroc. Avec la digitalisation croissante des administrations fiscales marocaine (Simpl, Damancom, télédéclarations obligatoires), disposer d'un outil ERP unifié permet d'éliminer les erreurs d'écritures manuelles. En 2026, l'État marocain encourage activement via divers programmes d'aide l'acquisition de technologies d'optimisation opérationnelle. Le succès repose avant tout sur un audit honnête des frictions internes avant d'entamer tout paramétrage technique.",
    tips: [
      "Préparez une cartographie complète de vos processus actuels.",
      "Impliquez les responsables opérationnels dès l'étape de cadrage.",
      "Assurez-vous de la compatibilité locale Maroc (IR, CNSS, TVA multidimensionnelle)."
    ]
  },
  "blog-2": {
    body: "Choisir le bon ERP Sage détermine l'efficacité de vos workflows pour les dix prochaines années. D'un côté, Sage 100 s'adresse aux PME dynamiques cherchant à unifier facturation, comptabilité générale et stock physique de façon agile. De l'autre côté, Sage X3 représente la puissance absolue de planification industrielle (GPAO) et de logistique multisites (SMC) pour les ETI et grands groupes marocains gérant plusieurs filiales et devises. Une analyse budgétaire et de volume de flux s'impose pour évaluer le coût total de possession (TCO) optimal.",
    tips: [
      "Optez pour Sage 100 si vous cherchez un outil agile rapide à déployer (< 3 mois).",
      "Optez pour Sage X3 pour piloter une usine de production complexe ou de la logistique portuaire.",
      "Vérifiez les certifications et accréditations de l'intégrateur qui vous accompagne."
    ]
  },
  "blog-3": {
    body: "Prendre des décisions sur la base de balances comptables éditées 15 jours après la fin du mois est un risque majeur pour votre trésorerie. L'interconnexion en direct de vos bases logicielles avec vos rapports de synthèse Excel via Sage BI Reporting permet d'obtenir des tableaux de bord instantanés. Plus besoin de ressaisir péniblement des lignes de ventes ou de stocks : les graphiques s'actualisent en temps réel d'un seul clic. C'est l'atout favori des Directeurs Financiers et Directeurs Généraux au Maroc.",
    tips: [
      "Mettez en place des indicateurs clés (KPIs) de marge brute par familles d'articles.",
      "Automatisez l'envoi hebdomadaire des résultats clés aux décideurs de l'entreprise.",
      "Formez vos analystes à l'interrogation directe via l'environnement sécurisé Excel."
    ]
  }
};

interface BlogProps {
  onDemoClick: (solutionId?: string) => void;
}

export default function Blog({ onDemoClick }: BlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleOpenArticle = (post: BlogPost) => {
    setSelectedArticle(post);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section id="blog" className="relative py-24 bg-white text-[#001B3A] overflow-hidden border-b border-slate-100">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-1/4 h-80 w-80 bg-[#007BFF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#003B7A]/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-[#003B7A] uppercase">
            NOTRE ACTUALITÉ ERP & PILOTAGE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001B3A] sm:text-4xl">
            Le Blog Décisionnel de Thalès
          </h2>
          <p className="text-slate-600 font-medium text-sm leading-relaxed">
            Retrouvez les conseils juridiques, réglementaires, technologiques et logistiques 
            rédigés par nos ingénieurs consultants pour réussir votre transition au Maroc.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#007BFF]/20 transition-all duration-300 group"
            >
              {/* Cover cover picture with gradient fade-over */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent z-10 opacity-75" />
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 z-20 rounded bg-[#003B7A] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Core Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-3 font-mono font-bold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#007BFF]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#007BFF]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#001B3A] group-hover:text-[#007BFF] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-semibold mb-5 line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenArticle(post)}
                    className="text-xs font-bold text-[#007BFF] hover:text-[#003B7A] transition-all flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <div className="flex gap-2.5 text-slate-300">
                    <Heart className="h-3.5 w-3.5 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageSquare className="h-3.5 w-3.5 hover:text-[#007BFF] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Dynamic Reader Dialog Panel */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseArticle}
                className="absolute inset-0 bg-[#001B3A]/60 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-[#001B3A] shadow-2xl"
                id="blog-reading-frame"
              >
                {/* Visual Header image */}
                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  
                  <button
                    onClick={handleCloseArticle}
                    className="absolute top-4 right-4 z-20 rounded-full bg-white/80 backdrop-blur-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-800 cursor-pointer border border-slate-100 shadow-sm"
                    aria-label="Fermer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <span className="absolute bottom-4 left-6 z-20 rounded bg-[#003B7A] px-3 py-1 text-[10px] font-extrabold uppercase text-white shadow-md">
                    {selectedArticle.category}
                  </span>
                </div>

                {/* Article Read Body */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-mono font-bold uppercase">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-[#007BFF]" /> {selectedArticle.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-[#007BFF]" /> {selectedArticle.readTime}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-[#003B7A] mb-4 leading-tight">
                    {selectedArticle.title}
                  </h3>

                  <div className="space-y-4 text-sm text-[#001B3A]/85 leading-relaxed font-semibold">
                    <p className="text-slate-500 font-bold italic border-l-2 border-[#007BFF] pl-3">
                      "{selectedArticle.summary}"
                    </p>
                    <p>
                      {ARTICLE_BODIES[selectedArticle.id]?.body || "Article complet en cours de synchronisation."}
                    </p>
                  </div>

                  {/* Recommendations callbox */}
                  <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5">
                    <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#007BFF] mb-3">
                      <ClipboardCheck className="h-4 w-4" />
                      Recommandation officielle Thalès :
                    </h4>
                    <ul className="space-y-2">
                      {(ARTICLE_BODIES[selectedArticle.id]?.tips || []).map((tip, i) => (
                        <li key={i} className="text-xs text-slate-600 flex gap-2 font-medium">
                          <span className="text-[#007BFF] font-black shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Trigger Action bar */}
                <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-bold">Des questions sur ce sujet d'actualité fiscal / ERP ?</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleCloseArticle();
                        onDemoClick();
                      }}
                      className="inline-flex h-9 items-center justify-center rounded-lg bg-[#003B7A] px-5 text-xs font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all cursor-pointer"
                    >
                      Consulter un expert
                    </button>
                    <button
                      onClick={handleCloseArticle}
                      className="inline-flex h-9 items-center justify-center rounded-lg bg-white border border-slate-200 px-4 text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
