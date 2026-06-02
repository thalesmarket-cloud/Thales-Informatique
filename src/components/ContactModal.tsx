import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Building2, User, Mail, Phone, MapPin, Users, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import { SOLUTIONS } from "../data";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedSolution?: string;
}

export default function ContactModal({ isOpen, onClose, initialSelectedSolution = "" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    employees: "10-49",
    solution: initialSelectedSolution,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise-level transmission API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Save query locally to simulate durable history
      const prevRequests = JSON.parse(localStorage.getItem("thales_requests") || "[]");
      localStorage.setItem("thales_requests", JSON.stringify([...prevRequests, {
        ...formData,
        date: new Date().toISOString()
      }]));
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      employees: "10-49",
      solution: "",
      message: ""
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#001B3A]/60 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-[#001B3A] shadow-2xl"
            id="modal-card"
          >
            {/* Top gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#003B7A] via-[#007BFF] to-[#00D4FF]" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer border border-transparent"
              id="close-modal-btn"
              aria-label="Fermer la modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#007BFF]/10 px-3 py-1.5 text-xs font-bold tracking-widest text-[#007BFF] uppercase">
                      Demande de Démonstration Gratuite
                    </span>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-[#003B7A] md:text-3xl">
                      Lancez votre transformation
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 font-semibold leading-relaxed">
                      Remplissez le formulaire ci-dessous. Un ingénieur-expert Thalès vous contactera dans les plus brefs délais pour planifier une démonstration sur-mesure.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Name */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Nom complet</label>
                        <div className="relative">
                          <User className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                            placeholder="Moffadel Alami"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email professionnel</label>
                        <div className="relative">
                          <Mail className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            required
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                            placeholder="direction@entreprise.ma"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Phone */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Téléphone professionnel</label>
                        <div className="relative">
                          <Phone className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            pattern="(\+212|0)[5-7][0-9]{8}"
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                            placeholder="0661234567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">Format marocain (ex: 0661234567 ou +212...)</span>
                      </div>

                      {/* Company Name */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Nom de l'entreprise</label>
                        <div className="relative">
                          <Building2 className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                            placeholder="Maroc Industrie S.A."
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* City */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Ville (Maroc)</label>
                        <div className="relative">
                          <MapPin className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                            placeholder="Casablanca, Tanger, Rabat..."
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Company size */}
                      <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Taille de l'entreprise</label>
                        <div className="relative">
                          <Users className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                          <select
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                            value={formData.employees}
                            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                          >
                            <option value="1-9">Moins de 10 salariés</option>
                            <option value="10-49">10 - 49 salariés</option>
                            <option value="50-249">50 - 249 salariés</option>
                            <option value="250+">Plus de 250 salariés (ETI / Grand Groupe)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Solutions list */}
                    <div className="relative">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Solution d'intérêt principale</label>
                      <div className="relative">
                        <ShieldCheck className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
                        <select
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                          value={formData.solution}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        >
                          <option value="">-- Sélectionnez une solution --</option>
                          {SOLUTIONS.map((sol) => (
                            <option key={sol.id} value={sol.id}>
                              {sol.name} — {sol.category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Brief message */}
                    <div className="relative">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Dites-nous en plus sur vos besoins (Optionnel)</label>
                      <textarea
                        rows={3}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#007BFF] focus:bg-white focus:outline-none transition-all font-semibold"
                        placeholder="Ex: Nous souhaitons migrer de notre outil de facturation interne vers Sage 100..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <HeartHandshake className="h-4 w-4 text-[#007BFF]" />
                        <span>Confidentialité assurée • Données hébergées au Maroc</span>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#003B7A] px-6 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/10 hover:bg-[#007BFF] transition-all disabled:opacity-50 cursor-pointer"
                        id="submit-contact"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            <span>Soumettre la demande</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10"
                  id="success-form-pane"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#007BFF]/20 duration-1000" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20 text-[#007BFF]">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-[#003B7A] mb-2">
                    Demande reçue avec succès !
                  </h3>
                  <p className="max-w-md text-sm text-slate-600 font-semibold mb-6">
                    M. <span className="text-[#003B7A] font-extrabold">{formData.name}</span>, vos informations ont été soumises et transmises de façon sécurisée à l'équipe commerciale de <span className="text-[#007BFF] font-extrabold">Thalès Informatique</span>.
                  </p>

                  <div className="w-full max-w-sm rounded-xl bg-slate-50 border border-slate-150 p-4 mb-8 text-left text-xs space-y-2 text-slate-600 font-semibold">
                    <div className="flex justify-between"><span className="text-slate-400">Entreprise :</span> <span className="text-[#003B7A] font-extrabold">{formData.company} ({formData.city})</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Solution :</span> <span className="text-[#007BFF] font-extrabold">{SOLUTIONS.find(s => s.id === formData.solution)?.name || "Conseil global ERP"}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Étape suivante :</span> <span className="text-[#007BFF] font-extrabold">Appel d'un ingénieur Thalès aujourd'hui</span></div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:bg-slate-250 transition-all cursor-pointer"
                    id="success-modal-done"
                  >
                    Fermer la fenêtre
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
