import { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Title container */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase font-sans tracking-[0.25em] text-[#DC2626] font-semibold mb-3">SERVIZIO TRASPARENTE</p>
          <h2 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight">
            Domande Frequenti
          </h2>
          <p className="text-sm text-gray-400 font-sans font-light mt-2 max-w-md mx-auto">
            Tutto quello che c'è da sapere sulle tariffe, depositi, franchigie e procedure di ritiro.
          </p>
        </div>

        {/* FAQs container list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-[#121215]/60 border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#DC2626] shrink-0" />
                    <span className="font-sans font-medium text-sm sm:text-base text-white group-hover:text-red-500 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 px-1.5 rounded-lg bg-white/5 text-gray-400">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-body-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-300 font-sans font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
