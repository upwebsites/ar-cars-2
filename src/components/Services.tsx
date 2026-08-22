import { Clock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const steps = [
    {
      title: "Zero Pensieri",
      subtitle: "Copertura Totale Inclusa",
      desc: "Nessuna sorpresa. La nostra formula include manutenzione completa, soccorso stradale h24 e assicurazione kasko per farti viaggiare in totale tranquillità.",
      icon: ShieldCheck,
      badge: "Incluso",
      color: "from-blue-600/20 to-blue-900/20",
    },
    {
      title: "Massima Flessibilità",
      subtitle: "Da 3-4 Giorni a 1 Mese",
      desc: "Studiato per adattarsi ai tuoi tempi. Che sia per un weekend di 3-4 giorni, una settimana completa o un mese di libertà, gestisci la tua tempistica senza vincoli.",
      icon: Clock,
      badge: "Flessibile",
      color: "from-[#DC2626]/20 to-[#E50914]/20",
    },
    {
      title: "Pronta Consegna",
      subtitle: "Ritiro Rapido & Parti",
      desc: "Processo di prenotazione digitalizzato ed efficiente. Compila la richiesta, ritira le chiavi presso il nostro centro o richiedi la consegna ed inizia il tuo viaggio.",
      icon: Zap,
      badge: "Rapido",
      color: "from-amber-600/20 to-amber-900/20",
    },
  ];

  const formulas = [
    {
      title: "Short Escape",
      duration: "3 - 4 Giorni",
      desc: "Perfetto per un weekend prolungato o una breve pausa al mare, con tutti i comfort inclusi.",
      highlight: "Flessibilità"
    },
    {
      title: "Weekly Premium",
      duration: "1 Settimana",
      desc: "Una settimana completa per viaggi più lunghi, vacanze o trasferte professionali.",
      highlight: "Prezzo Ottimale"
    },
    {
      title: "Monthly Premium",
      duration: "30 Giorni",
      desc: "Il massimo della libertà per un mese intero di viaggio senza preoccupazioni.",
      highlight: "Tariffa Scontata"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-sans tracking-[0.25em] text-[#DC2626] font-semibold mb-3">LA NOSTRA FORMULA</p>
          <h2 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight leading-tight">
            Noleggio a Breve Termine. <br/>
            <span className="font-extralight text-gray-400">Zero vincoli, massimo stile.</span>
          </h2>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={item.title}
              className="relative group rounded-2xl p-8 bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Colored light spot behind icon when hovered */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-white/5 text-[#DC2626] mb-6 group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-sans font-medium text-white">{item.title}</h3>
                  <span className="text-[10px] font-sans tracking-wider text-[#DC2626] bg-[#DC2626]/10 px-2.5 py-0.5 rounded-full uppercase font-semibold">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xs text-gray-400 font-sans tracking-wide mb-4">{item.subtitle}</h4>
                <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explaining the durations (1 day, weekend, 1 week) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#121215]/80 via-[#16161A]/80 to-[#101014]/80 border border-white/[0.08] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 max-w-md">
              <span className="text-xs font-sans text-[#DC2626] uppercase tracking-widest font-semibold block mb-2">PENSATO PER TE</span>
              <h3 className="text-2xl md:text-3xl font-sans font-light text-white mb-4">Le Opzioni Temporali</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Le nostre tariffe cambiano dinamicamente per premiare le noleggiate più lunghe. Il noleggio ora può arrivare fino a 1 mese, garantendo sempre auto fresche, sanificate ed impeccabili.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {formulas.map((f) => (
                <div key={f.title} className="bg-black/40 border border-white/[0.07] p-6 rounded-2xl flex flex-col justify-between hover:border-white/15 transition-all">
                  <div>
                    <span className="text-[11px] font-sans text-gray-400 font-medium tracking-wider block mb-1 uppercase">{f.title}</span>
                    <h4 className="text-lg font-sans font-semibold text-[#DC2626] mb-3">{f.duration}</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">{f.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] font-sans text-[#DC2626] font-semibold tracking-wide uppercase">{f.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
