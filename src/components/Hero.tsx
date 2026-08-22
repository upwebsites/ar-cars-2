import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleExploreClick = () => {
    const element = document.getElementById("fleet");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-transparent text-gray-400 font-sans select-none"
    >
      {/* ------------------------------------------------------------- */}
      {/* MAIN SPLIT-SCREEN 2-COLUMN HERO CONTAINER */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(88vh-80px)]">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Headline + Subtitle + CTA (No extra photos) */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center pt-6 lg:pt-0 z-20">
            
            {/* Sleek Minimalist Badge (No photos) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gray-300">
                Formula Breve Termine • Da 20€/gg
              </span>
            </motion.div>

            {/* Main Multi-Line Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-sans font-extrabold tracking-tight text-white leading-[1.0] text-left">
                <span className="block text-white">Zero</span>
                <span className="block text-white">Vincoli</span>
                <span className="block bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Pieno Stile
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-lg mb-8 leading-relaxed text-left"
            >
              Guida il tuo viaggio alle tue regole. Zero costi nascosti, vetture sempre sanificate e tariffe chiare a partire da soli <strong className="text-white font-normal">20€ al giorno</strong>.
            </motion.p>

            {/* Primary Action Button (Pill Button with Arrow Circle) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                id="hero-explore-features-btn"
                onClick={handleExploreClick}
                className="group inline-flex items-center gap-3.5 bg-[#DC2626] hover:bg-[#E50914] text-white text-sm sm:text-base font-medium pl-7 pr-3 py-3 rounded-full shadow-[0_6px_28px_rgba(220,38,38,0.45)] hover:shadow-[0_8px_36px_rgba(220,38,38,0.65)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Esplora la Flotta</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>

              <button
                id="hero-contact-quick-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] text-gray-300 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>Contattaci</span>
              </button>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Sole Hero Supercar Image (Ferrari 488 Pista) */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center lg:justify-end py-6"
          >
            <div className="relative w-full max-w-[680px] group flex items-center justify-center">
              
              {/* Intense Crimson Radial Spotlight behind Ferrari */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[250px] sm:h-[350px] bg-red-600/[0.25] rounded-full blur-[110px] pointer-events-none" 
                aria-hidden="true"
              />

              {/* Red Ferrari Image (Attached User Supercar) */}
              <motion.img
                src="/images/ferrari_hero.png"
                alt="AR Cars Ferrari Supercar"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] select-none pointer-events-auto cursor-pointer"
              />

              {/* Floating Supercar Badge */}
              <div className="absolute -bottom-2 right-4 sm:right-8 z-20 bg-[#121215]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span className="text-xs font-sans font-medium text-gray-200">AR Cars Supercar Edition</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM MANIFESTO SECTION (Seamless Text Banner) */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-12 text-center max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase font-sans tracking-[0.25em] text-[#DC2626] font-semibold mb-4">
            LA NOSTRA VISIONE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-light tracking-tight text-white leading-snug">
            Crediamo che il futuro della mobilità sia <strong className="font-normal text-white">flessibile</strong>,{" "}
            <span className="text-gray-400">intelligente e senza vincoli.</span> La nostra missione è offrirti un noleggio impeccabile a partire da soli 20€ al giorno.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
