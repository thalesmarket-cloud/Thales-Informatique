import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, FileText, ChevronRight, X, Globe } from "lucide-react";
import { SOLUTIONS } from "../data";

interface FooterProps {
  onNavClick: (id: string) => void;
  onDemoClick: (solutionId?: string) => void;
}

export default function Footer({ onNavClick, onDemoClick }: FooterProps) {
  const [legalDoc, setLegalDoc] = useState<{ title: string; content: string } | null>(null);

  const currentYear = new Date().getFullYear();

  const handleOpenLegal = (doc: string) => {
    if (doc === "mentions") {
      setLegalDoc({
        title: "Mentions Légales — Thalès Informatique S.A.",
        content: "Thalès Informatique S.A. au capital de 10.000.000 DH. Enregistré au Registre du Commerce de Casablanca sous le numéro RC 128475. Siège social : Boulevard d'Anfa, Résidence Elite, Ain Sebaâ, Casablanca, Maroc. Directeur de publication : M. El Alami, Président Directeur Général."
      });
    } else if (doc === "privacy") {
      setLegalDoc({
        title: "Politique de Confidentialité & RGPD (CNDP Maroc)",
        content: "Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel au Maroc, toutes les données collectées dans nos formulaires de démonstration (noms, emails, numéros de téléphone) font l'objet d'un traitement sécurisé et confidentiel. Elles ne sont en aucun cas revendues à des tiers et servent uniquement aux fins d'accompagnement logiciel."
      });
    } else {
      setLegalDoc({
        title: "Conditions Générales d'Intégration (CGI)",
        content: "Tous nos services de consulting Sage, d'audit préliminaire et de maintenance applicative (TMA) s'exécutent selon nos chartes de SLA et rapports d'intégrations officiels signés en commun accord. Les garanties techniques dépendent des conventions contractées auprès de Thalès Informatique."
      });
    }
  };

  return (
    <footer className="bg-[#001B3A] text-slate-300 border-t border-[#003B7A]/40" id="app-footer">
      
      {/* Top Footer Block */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#007BFF] p-2 text-white">
                <Database className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                THALÈS <span className="text-[#00D4FF] text-xs block font-extrabold tracking-widest">INFORMATIQUE</span>
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-300">
              Depuis 1996, Thalès Informatique accompagne la transition numérique des Petites, Moyennes et Grandes Entreprises marocaines. Intégrateur Elite Sage, nous vous garantissons la conformité, l'évolutivité et la rentabilité de vos processus métiers.
            </p>

            <div className="flex gap-3.5 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded bg-[#003B7A] border border-[#0052ad] hover:bg-[#007BFF] text-white flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded bg-[#003B7A] border border-[#0052ad] hover:bg-[#007BFF] text-white flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded bg-[#003B7A] border border-[#0052ad] hover:bg-[#007BFF] text-white flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions quicklinks */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-b border-[#003B7A] pb-2">
              Solutions Écosystème
            </h4>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <button
                    onClick={() => onDemoClick(sol.id)}
                    className="hover:text-white font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer text-left"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#007BFF] shrink-0" />
                    <span>{sol.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation quicklinks */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-b border-[#003B7A] pb-2">
              Société
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => onNavClick("accueil")} className="hover:text-white transition-all cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("solutions")} className="hover:text-white transition-all cursor-pointer">
                  Solutions ERP
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("expertise")} className="hover:text-white transition-all cursor-pointer">
                  Notre Expertise
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("process")} className="hover:text-white transition-all cursor-pointer">
                  Méthodologie
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick("blog")} className="hover:text-white transition-all cursor-pointer">
                  Actualités
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact metrics */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-b border-[#003B7A] pb-2">
              Thalès Maroc
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-semibold">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#007BFF] shrink-0" />
                <span>Boulevard d'Anfa, Résidence Elite, Ain Sebaâ, Casablanca, Maroc</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#007BFF] shrink-0" />
                <span>+212 522 45 46 47</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-[#007BFF] shrink-0" />
                <span>contact@thales-informatique.ma</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Globe className="h-4 w-4 text-[#007BFF] shrink-0" />
                <span>www.thales-informatique.ma</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#003B7A]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider">
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <button onClick={() => handleOpenLegal("mentions")} className="hover:text-white transition-colors cursor-pointer">Mentions Légales</button>
            <span>•</span>
            <button onClick={() => handleOpenLegal("privacy")} className="hover:text-white transition-colors cursor-pointer">Confidentialité</button>
            <span>•</span>
            <button onClick={() => handleOpenLegal("cgi")} className="hover:text-white transition-colors cursor-pointer">Conditions d'Intégration</button>
          </div>

          <p className="text-slate-400 text-center sm:text-right">
            © {currentYear} Thalès Informatique. Tous droits réservés. Intégrateur Elite Sage.
          </p>
        </div>
      </div>

      {/* Dynamic Legal Modals Frame */}
      <AnimatePresence>
        {legalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalDoc(null)}
              className="absolute inset-0 bg-[#001B3A]/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-[#001B3A] shadow-2xl"
              id="legal-reading-box"
            >
              <button
                onClick={() => setLegalDoc(null)}
                className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-[#007BFF] mb-4 border-b border-slate-150 pb-2">
                <FileText className="h-5 w-5" />
                <h4 className="text-sm font-black uppercase tracking-widest">{legalDoc.title}</h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-semibold mb-6">
                {legalDoc.content}
              </p>

              <button
                onClick={() => setLegalDoc(null)}
                className="w-full inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-all cursor-pointer border border-slate-200"
              >
                Fermer l'accord de lecture
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}
