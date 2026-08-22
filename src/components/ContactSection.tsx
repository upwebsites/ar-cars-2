import { Mail, ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const emailAddress = "noleggio@aerrecars.it";

  return (
    <section id="contact-section" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 animate-fade-in">

        {/* Contact glass wrapper box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#121215]/90 via-[#0A0A0C]/90 to-[#121215]/90 border border-white/[0.08] p-8 md:p-16 text-center select-none shadow-3xl backdrop-blur-xl">

          {/* Subtle logo detail background */}
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-2xl mx-auto">
            {/* Top support indicator icon */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="inline-flex p-3.5 bg-[#DC2626]/10 border border-[#DC2626]/30 text-[#DC2626] rounded-2xl mb-8"
            >
              <Headphones className="w-6 h-6" />
            </motion.div>

            <h3 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight leading-snug mb-6">
              AR Cars è il Leader del noleggio a breve e brevissimo termine
            </h3>
            <p className="text-sm md:text-base text-gray-400 font-sans font-light leading-relaxed mb-6">
              Offriamo soluzioni flessibili per 1 giorno, il weekend, 1 settimana e oltre, a partire da 20 EURO, senza costi giornalieri aggiuntivi.
            </p>

            {/* Email Highlighter Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-black/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 mb-8 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#DC2626]/10 rounded-xl text-[#DC2626]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-sans text-gray-400 uppercase tracking-wider block font-semibold">Invia Direttamente a</span>
                  <span className="text-sm font-sans font-semibold text-white tracking-wide">{emailAddress}</span>
                </div>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="text-xs font-sans font-semibold text-[#DC2626] hover:text-white uppercase tracking-wider flex items-center gap-1 group transition-colors cursor-pointer"
              >
                <span>Scrivici</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Large Contact mailto button */}
            <button
              id="large-contact-mailto-btn"
              onClick={() => window.location.href = `mailto:${emailAddress}`}
              className="group inline-flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#E50914] text-white text-xs font-sans font-semibold uppercase tracking-widest px-10 py-4.5 rounded-xl shadow-[0_5px_22px_rgba(220,10,10,0.35)] hover:shadow-[0_5px_30px_rgba(220,10,10,0.55)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>Contatta l'Assistenza Clienti</span>
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Additional contact for info */}
            <div className="mt-6 p-4 bg-black/30 border border-white/[0.06] rounded-xl text-center">
              <p className="text-sm text-gray-300 font-sans font-light">
                Per ulteriori informazioni, contattaci all’indirizzo&nbsp;
                <a href="mailto:info@aerrecars.it" className="text-[#DC2626] hover:underline font-normal">info@aerrecars.it</a>
              </p>
            </div>

            {/* Trust factors indicator list */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-gray-400 font-sans mt-10 pb-2">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#DC2626]" /> Risposta in 30 Minuti massimo</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#DC2626]" /> Assistenza Italiana Dedicata</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
