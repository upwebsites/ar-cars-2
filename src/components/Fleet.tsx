import { useState } from "react";
import { ChevronLeft, ChevronRight, Fuel, Gauge, Sparkles, Star, Users, Briefcase, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CUSTOM_FLEET } from "../data";

interface FleetProps {
  onSelectCar: (carId: string) => void;
}

export default function Fleet({ onSelectCar }: FleetProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const currentCar = CUSTOM_FLEET[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CUSTOM_FLEET.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === CUSTOM_FLEET.length - 1 ? 0 : prevIndex + 1));
  };

  // Framer Motion slide variants for the image slider
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 26 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 26 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  // Text transition variants
  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  };

  return (
    <section id="fleet" className="bg-transparent text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
            <span className="text-xs text-[#DC2626] uppercase tracking-widest font-sans font-semibold">
              Scegli la tua corsa
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-light tracking-tight mb-4 text-[#F3F4F6]">
            Auto a disposizione
          </h2>
          <p className="text-base text-gray-400 font-sans font-light">
            Esplora le nostre auto premium ideali per viaggi di piacere o di lavoro. Scopri i dettagli tecnici e prenota ora.
          </p>
        </div>

        {/* Carousel Slider Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card Slider with Controls */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group select-none flex items-center justify-center backdrop-blur-md">
              
              {/* Slider Image Container */}
              <div className="w-full h-full p-6 sm:p-10 flex items-center justify-center z-10 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentCar.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    src={currentCar.image}
                    alt={currentCar.name}
                    className="w-[90%] sm:w-[95%] h-full object-contain filter drop-shadow-[0_15px_30px_rgba(220,38,38,0.25)] select-none pointer-events-none"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation overlay controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 z-20"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 z-20"
                aria-label="Successiva"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Popular Tag Indicator */}
              {currentCar.popular && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#DC2626] to-[#E50914] text-white text-[10px] font-sans font-bold tracking-widest px-3 py-1.5 rounded-xl uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span>Popolare</span>
                </div>
              )}

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {CUSTOM_FLEET.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? "w-6 bg-[#DC2626]" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Car Details & Specs Table */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentCar.id}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Details Meta Header */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#DC2626] font-sans font-semibold">
                    {currentCar.specs.type}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-sans font-medium text-white mt-1">
                    {currentCar.name}
                  </h3>
                </div>

                {/* Tagline Paragraph */}
                <p className="text-gray-300 font-sans font-light leading-relaxed text-base">
                  {currentCar.tagline} Ideata per assicurare il massimo comfort di guida e ottimizzare i consumi sia nei vicoli cittadini che sui lunghi percorsi stradali.
                </p>

                {/* Specs Grid/Table */}
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden p-5 shadow-inner backdrop-blur-md">
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-sans font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#DC2626]" />
                    Caratteristiche Tecniche
                  </h4>

                  <table className="w-full text-sm border-collapse text-left font-sans">
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="py-2.5 text-gray-400 font-light">Motore / Alimentazione</td>
                        <td className="py-2.5 text-white text-right font-medium">{currentCar.specs.engine}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2.5 text-gray-400 font-light">Trasmissione / Cambio</td>
                        <td className="py-2.5 text-white text-right font-medium">{currentCar.specs.transmission}</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2.5 text-gray-400 font-light">Posti a Sedere</td>
                        <td className="py-2.5 text-white text-right font-medium flex items-center justify-end gap-1.5">
                          <Users className="w-4 h-4 text-[#DC2626]" />
                          {currentCar.specs.seats}
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2.5 text-gray-400 font-light">Capacità Bagagli</td>
                        <td className="py-2.5 text-white text-right font-medium flex items-center justify-end gap-1.5">
                          <Briefcase className="w-4 h-4 text-[#DC2626]" />
                          {currentCar.specs.baggage} {currentCar.specs.baggage > 1 ? "valigie" : "valigia"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-gray-400 font-light">Consumi Medi</td>
                        <td className="py-2.5 text-white text-right font-medium flex items-center justify-end gap-1.5">
                          <Gauge className="w-4 h-4 text-[#DC2626]" />
                          {currentCar.specs.fuelConsumption}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Booking Call-to-Action button */}
                <button
                  onClick={() => onSelectCar(currentCar.id)}
                  className="group relative flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#E50914] text-white text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 rounded-xl shadow-[0_5px_25px_rgba(220,38,38,0.40)] transition-all duration-300 cursor-pointer overflow-hidden w-full active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>Richiedi Disponibilità</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Special Offer Banner placed below the section */}
        <div className="relative mt-20 overflow-hidden bg-gradient-to-r from-red-600/90 via-red-700/90 to-red-800/90 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(220,38,38,0.3)] border border-red-500/20 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-8 z-10 backdrop-blur-md">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/25 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE600] fill-[#FFE600]" />
              <span className="text-[10px] text-white uppercase tracking-widest font-sans font-bold">
                Tariffa Promo Attiva
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Offerta Speciale
            </h3>
            <p className="text-white/90 font-sans font-light leading-relaxed text-sm md:text-base">
              Tutte le nostre auto sono disponibili per il noleggio a partire da soli <strong className="font-semibold text-[#FFE600]">20€ / giorno</strong>. Nessun costo nascosto, chilometraggio opzionale e sanificazione certificata h24 sempre inclusa.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <button
              onClick={() => onSelectCar(currentCar.id)}
              className="bg-white hover:bg-gray-100 text-[#DC2626] font-sans font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <span>Approfitta della promo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
