import { Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-sans tracking-[0.25em] text-[#DC2626] font-semibold mb-3">RECENSIONI REALI</p>
          <h2 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight">
            Cosa dice chi viaggia con noi
          </h2>
          <p className="text-sm text-gray-400 font-sans font-light mt-2 max-w-lg mx-auto">
            La qualità del nostro servizio a breve termine si riflette nella piena soddisfazione e il sorriso dei nostri clienti fedeli.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={t.id}
              className="bg-[#121215]/60 border border-white/[0.08] p-8 rounded-3xl relative flex flex-col justify-between group hover:border-white/20 hover:shadow-2xl hover:shadow-[#DC2626]/5 transition-all duration-300 backdrop-blur-md"
            >
              <div>
                {/* Gold Rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#DC2626] text-[#DC2626]" />
                  ))}
                </div>

                {/* Comment quote text */}
                <p className="text-sm text-gray-300 font-sans font-light leading-relaxed mb-6 italic h-24 overflow-y-auto">
                  "{t.comment}"
                </p>
              </div>

              {/* Bottom Client Specs details */}
              <div className="pt-5 border-t border-white/5 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-sans font-medium text-white">{t.name}</h4>
                  <span className="text-[11px] font-sans text-gray-400">{t.role}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-sans text-[#DC2626] uppercase tracking-wider block font-semibold">Auto Noleggiata</span>
                  <span className="text-xs text-gray-300 font-sans font-light block">{t.carRented}</span>
                </div>
              </div>

              {/* Abstract decorative graphic icon in background layout */}
              <div className="absolute top-6 right-6 opacity-[0.03] text-white">
                <MessageSquareQuote className="w-16 h-16" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
