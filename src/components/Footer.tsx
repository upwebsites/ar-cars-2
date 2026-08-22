import React, { useState } from "react";
import { Download, ArrowUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onBookClick?: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Inserisci un indirizzo email valido.");
      return;
    }
    if (!agreed) {
      setStatus("error");
      setErrorMessage("Accetta l'invio delle comunicazioni per procedere.");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => {
      setStatus("idle");
    }, 6000);
  };

  const handleCtaClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const fleetEl = document.getElementById("fleet");
      if (fleetEl) {
        fleetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:noleggio@aerrecars.it";
      }
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-transparent text-gray-400 font-sans pt-24 pb-12 overflow-hidden select-none"
    >
      {/* 3D Perspective Retro-Futuristic Wireframe Grid Floor at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] overflow-hidden pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-60"
          viewBox="0 0 1440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footer-grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#070709" stopOpacity="1" />
              <stop offset="35%" stopColor="#070709" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#070709" stopOpacity="0" />
              <stop offset="100%" stopColor="#070709" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="footer-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#DC2626" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="footer-vert-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* Perspective Converging Lines (Vanishing Point at x=720, y=-120) */}
          <g stroke="url(#footer-vert-grad)" strokeWidth="1.2">
            <line x1="720" y1="20" x2="-200" y2="280" />
            <line x1="720" y1="20" x2="-100" y2="280" />
            <line x1="720" y1="20" x2="0" y2="280" />
            <line x1="720" y1="20" x2="100" y2="280" />
            <line x1="720" y1="20" x2="200" y2="280" />
            <line x1="720" y1="20" x2="300" y2="280" />
            <line x1="720" y1="20" x2="400" y2="280" />
            <line x1="720" y1="20" x2="500" y2="280" />
            <line x1="720" y1="20" x2="600" y2="280" />
            <line x1="720" y1="20" x2="680" y2="280" />
            <line x1="720" y1="20" x2="720" y2="280" />
            <line x1="720" y1="20" x2="760" y2="280" />
            <line x1="720" y1="20" x2="840" y2="280" />
            <line x1="720" y1="20" x2="940" y2="280" />
            <line x1="720" y1="20" x2="1040" y2="280" />
            <line x1="720" y1="20" x2="1140" y2="280" />
            <line x1="720" y1="20" x2="1240" y2="280" />
            <line x1="720" y1="20" x2="1340" y2="280" />
            <line x1="720" y1="20" x2="1440" y2="280" />
            <line x1="720" y1="20" x2="1540" y2="280" />
            <line x1="720" y1="20" x2="1640" y2="280" />
          </g>

          {/* Perspective Transverse Lines (Exponential depth spacing) */}
          <g stroke="url(#footer-line-grad)" strokeWidth="1.2">
            <line x1="0" y1="280" x2="1440" y2="280" strokeWidth="2" />
            <line x1="0" y1="262" x2="1440" y2="262" />
            <line x1="0" y1="240" x2="1440" y2="240" />
            <line x1="0" y1="215" x2="1440" y2="215" />
            <line x1="0" y1="186" x2="1440" y2="186" />
            <line x1="0" y1="154" x2="1440" y2="154" />
            <line x1="0" y1="120" x2="1440" y2="120" />
            <line x1="0" y1="85" x2="1440" y2="85" />
            <line x1="0" y1="52" x2="1440" y2="52" strokeOpacity="0.5" />
            <line x1="0" y1="25" x2="1440" y2="25" strokeOpacity="0.2" />
          </g>

          {/* Grid Fade Overlay */}
          <rect x="0" y="0" width="1440" height="280" fill="url(#footer-grid-fade)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">

        {/* ------------------------------------------------------------- */}
        {/* TOP CTA HERO BLOCK (Centered Badge + Headline + Subtitle + CTA) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
          
          {/* Glassmorphic Rounded Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[22px] bg-gradient-to-b from-white/[0.12] via-[#151518]/90 to-[#0A0A0C] border border-white/[0.15] shadow-[0_12px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center mb-8 backdrop-blur-xl group hover:border-white/30 transition-all duration-300"
          >
            {/* Iridescent Intertwined Logo Emblem */}
            <svg
              className="w-9 h-9 md:w-11 md:h-11 filter drop-shadow-[0_4px_12px_rgba(220,38,38,0.4)] group-hover:scale-105 transition-transform duration-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="emblem-red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F87171" />
                  <stop offset="50%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
                <linearGradient id="emblem-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="50%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="emblem-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67E8F9" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
              </defs>
              
              <path
                d="M24 10C17.5 10 12 14.5 12 20C12 24.5 15.5 28 20 30L24 26C21 24.5 19 22.5 19 20C19 17 21.5 14.5 24 14.5C26.5 14.5 29 17 29 20C29 22.5 27 24.5 24 26L28 30C32.5 28 36 24.5 36 20C36 14.5 30.5 10 24 10Z"
                fill="url(#emblem-purple-grad)"
                opacity="0.95"
              />
              <path
                d="M17 34C13.5 30 11 25.5 11 20.5C11 16.5 13.5 13 17 11.5L19 16C16.8 17 15.5 18.8 15.5 20.5C15.5 23.5 17.5 26.5 20 29L17 34Z"
                fill="url(#emblem-cyan-grad)"
                opacity="0.9"
              />
              <path
                d="M24 38C19 38 14.5 35 12 31L16 27C17.8 29.5 20.8 31.5 24 31.5C28.5 31.5 32 28.5 32 25C32 22 29.5 20 26 19L27.5 14.5C33.5 16 36.5 20 36.5 25C36.5 32 30.5 38 24 38Z"
                fill="url(#emblem-red-grad)"
              />
            </svg>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-white leading-tight mb-4"
          >
            Scopri un nuovo approccio al noleggio
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm md:text-base text-gray-400 font-sans font-light max-w-xl mx-auto leading-relaxed mb-8"
          >
            Scegli AR Cars ed entra a far parte di una clientela esclusiva, dai privati che cercano massima flessibilità alle aziende leader in tutta Italia.
          </motion.p>

          {/* Violet/Indigo Gradient CTA Button */}
          <motion.button
            id="footer-get-started-btn"
            onClick={handleCtaClick}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#7C3AED] hover:from-[#4F46E5] hover:to-[#6D28D9] text-white text-xs sm:text-sm font-sans font-medium px-6 py-3.5 rounded-xl shadow-[0_6px_28px_rgba(124,58,237,0.45)] hover:shadow-[0_8px_36px_rgba(124,58,237,0.65)] transition-all duration-300 cursor-pointer"
          >
            <span>Inizia subito il noleggio</span>
            <Download className="w-4 h-4 text-white/90 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4 COLUMNS NAVIGATION LINKS WITH '// ' PREFIX */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Flotta / Prodotti */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans mb-4 text-gray-400 font-semibold tracking-wider">
              <span className="text-gray-600 font-normal">//</span>
              <span>Flotta</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light text-gray-400">
              <li>
                <button
                  onClick={() => handleScrollTo("fleet")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  City Car & Compatte
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("fleet")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  SUV & Crossover
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("fleet")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Berline & Premium
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Formula Breve Termine
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("fleet")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Noleggio Weekend
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("fleet")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Tutte le Vetture
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Supporto */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans mb-4 text-gray-400 font-semibold tracking-wider">
              <span className="text-gray-600 font-normal">//</span>
              <span>Supporto</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light text-gray-400">
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Ritiro e Consegna Rapida
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact-section")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Centro Assistenza Clienti
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Domande Frequenti (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Soccorso Stradale 24/7
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Documenti Necessari
                </button>
              </li>
              <li>
                <a
                  href="mailto:noleggio@aerrecars.it"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Supporto Email Dedicato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Risorse */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans mb-4 text-gray-400 font-semibold tracking-wider">
              <span className="text-gray-600 font-normal">//</span>
              <span>Risorse</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light text-gray-400">
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Tariffe & Trasparenza
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Copertura Kasko & Servizi
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("reviews")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Recensioni & Esperienze
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("stats-banner")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Vantaggi AR Cars
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Convenzioni Aziendali
                </button>
              </li>
              <li>
                <a
                  href="#newsletter-input"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Newsletter Esclusiva
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Azienda */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans mb-4 text-gray-400 font-semibold tracking-wider">
              <span className="text-gray-600 font-normal">//</span>
              <span>Azienda</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light text-gray-400">
              <li>
                <button
                  onClick={() => handleScrollTo("hero-section")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact-section")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Sede & Uffici
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors duration-200 text-left cursor-pointer"
                >
                  Sicurezza e Garanzie
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@aerrecars.it"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Diventa Partner
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Informativa Privacy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* HORIZONTAL DIVIDER LINE */}
        {/* ------------------------------------------------------------- */}
        <div className="w-full h-px bg-white/[0.08] mb-12" />

        {/* ------------------------------------------------------------- */}
        {/* NEWSLETTER ROW */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
          
          {/* Left Text Block */}
          <div className="max-w-md">
            <h3 className="text-sm sm:text-base font-sans font-semibold text-white tracking-tight mb-2">
              Resta sempre aggiornato
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-400 font-sans font-light leading-relaxed">
              Ricevi in anteprima le offerte speciali, nuovi arrivi in flotta e promozioni di <strong className="text-gray-200 font-normal">AR Cars</strong> direttamente nella tua email. Zero spam, massimo un messaggio al mese.
            </p>
          </div>

          {/* Right Newsletter Form */}
          <div className="w-full lg:w-auto">
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <input
                  id="newsletter-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@email.com"
                  className="bg-[#241315]/80 hover:bg-[#2b1619]/90 focus:bg-[#200f11] border border-red-900/30 hover:border-red-700/50 focus:border-red-500/80 text-white placeholder-gray-500 text-xs sm:text-sm font-sans px-4 py-3 rounded-xl w-full sm:w-72 focus:outline-none focus:ring-1 focus:ring-red-500/40 transition-all"
                />
                <button
                  id="newsletter-join-btn"
                  type="submit"
                  className="bg-white hover:bg-gray-100 active:bg-gray-200 text-black font-sans font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-[0_2px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer shrink-0"
                >
                  Iscriviti
                </button>
              </div>

              {/* Marketing consent checkbox */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none text-[11px] sm:text-xs text-gray-400 hover:text-gray-300 transition-colors pt-1 font-sans">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 text-[#DC2626] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#DC2626]"
                />
                <span>Accetto di ricevere comunicazioni promozionali da AR Cars</span>
              </label>

              {/* Status feedback */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-400 font-sans font-light"
                  >
                    {errorMessage}
                  </motion.p>
                )}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-emerald-400 font-sans font-light flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Iscrizione completata con successo!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUB-FOOTER BOTTOM BAR (Copyright + Legal links + Back to top) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-4 font-sans">
          
          <div className="text-center sm:text-left text-gray-500 font-light text-[11px] sm:text-xs">
            © {new Date().getFullYear()} AR Cars. Sviluppato per un'esperienza di guida superiore.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 text-[11px] sm:text-xs text-gray-400 font-light">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Termini di Servizio
            </a>
            <a href="#cookies" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>

            {/* Subtle Back to top arrow button */}
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Torna su"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200 cursor-pointer ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
