import { useState, useEffect, FormEvent } from "react";
import { CUSTOM_FLEET } from "../data";
import { Car } from "../types";
import { X, Calendar, ShieldCheck, MapPin, BadgePercent, CheckCircle, Mail, Phone, User, Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedCarId }: BookingModalProps) {
  // Find initial car
  const defaultCar = CUSTOM_FLEET.find(c => c.id === selectedCarId) || CUSTOM_FLEET[0];
  
  const [car, setCar] = useState<Car>(defaultCar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState(3); // Default 3 days (perfect weekend)
  const [pickupDate, setPickupDate] = useState("");
  const [insurance, setInsurance] = useState(true); // Default Kasko checked
  const [gps, setGps] = useState(false);
  const [additionalDriver, setAdditionalDriver] = useState(false);
  const [location, setLocation] = useState<"HQ" | "Aeroporto" | "Hotel">("HQ");
  const [submitted, setSubmitted] = useState(false);

  // Sync state if selectedCarId changes
  useEffect(() => {
    if (selectedCarId) {
      const found = CUSTOM_FLEET.find(c => c.id === selectedCarId);
      if (found) setCar(found);
    }
  }, [selectedCarId]);

  // Price calculations
  const priceBasePerDay = car.pricePerDay;
  const priceInsurancePerDay = 15; // €/day
  const priceGpsPerDay = 5; // €/day
  const priceAdditionalDriverPerDay = 10; // €/day
  
  let deliveryFee = 0;
  if (location === "Aeroporto") deliveryFee = 30;
  if (location === "Hotel") deliveryFee = 25;

  const costBase = priceBasePerDay * days;
  const costInsurance = insurance ? priceInsurancePerDay * days : 0;
  const costGps = gps ? priceGpsPerDay * days : 0;
  const costAdditionalDriver = additionalDriver ? priceAdditionalDriverPerDay * days : 0;
  
  const totalCost = costBase + costInsurance + costGps + costAdditionalDriver + deliveryFee;

  // Handle email submit mailto creation
  const handleCalculateAndSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !pickupDate) {
      alert("Si prega di compilare tutti i campi obbligatori d'identità e data.");
      return;
    }

    // Prepare structured email text for luxury inquiries
    const subject = `Richiesta Preventivo Noleggio AR Cars - ${car.name}`;
    const mailtoBody = `Caro Team AR Cars,

Desidero richiedere la disponibilità e prenotare il seguente veicolo con la vostra formula a breve termine:

DATI CLIENTE:
- Nome e Cognome: ${name}
- Email: ${email}
- Telefono: ${phone}

DETTAGLI DEL NOLEGGIO:
- Veicolo richiesto: ${car.name} (Base: €${car.pricePerDay}/giorno)
- Data di Ritiro: ${pickupDate}
- Durata Noleggio: ${days} giorni (Min: 1g - Max: 7g)
- Luogo Riconsegna/Consegna: ${location === "HQ" ? "Ritiro in sede (HQ) - Gratuito" : location === "Aeroporto" ? "Aeroporto - Servizio Premium (€30)" : "Hotel - Consegna a domicilio (€25)"}

ACCESSORI SELEZIONATI:
- Assicurazione Kasko Completa: ${insurance ? "SÌ (€15/giorno, inclusa nel preventivo)" : "NO"}
- Navigatore GPS Satellitare: ${gps ? "SÌ (€5/giorno)" : "NO"}
- Conducente Aggiuntivo: ${additionalDriver ? "SÌ (€10/giorno)" : "NO"}

CALCOLO STIMATO DEL PREVENTIVO:
- Costo Base Veicolo (${days}g): €${costBase}
- Costo Coperture extra (${days}g): €${costInsurance + costGps + costAdditionalDriver}
- Costo Servizio Logistica: €${deliveryFee}

TOTAL PREVENTIVO STIMATO: €${totalCost}

Grazie mille. Attendo vostra conferma di disponibilità per procedere al ritiro.

Distinti saluti,
${name}`;

    // Standard client email redirecting open
    const formattedMailto = `mailto:noleggio@aerrecars.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = formattedMailto;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Black blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#09090A]/95 backdrop-blur-xl"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] bg-[#121214]/90 border border-white/10 rounded-3xl overflow-y-auto shadow-3xl z-10 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Header / Dismiss trigger */}
            <button
              id="close-booking-modal"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors z-30 cursor-pointer"
              aria-label="Chiudi Modale"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT SIDE: Configurator (7 columns) */}
            <div id="modal-configurator-left" className="lg:col-span-7 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#DC2626] uppercase font-bold">Configuratore Live %</span>
                <h3 className="text-2xl font-sans font-light text-white mt-1 mb-6">Personalizza il tuo Noleggio</h3>

                <form onSubmit={handleCalculateAndSubmit} className="space-y-6">
                  {/* Select Car trigger */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-2">Seleziona Veicolo</label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {CUSTOM_FLEET.map((c) => (
                        <button
                          id={`select-car-option-${c.id}`}
                          type="button"
                          key={c.id}
                          onClick={() => setCar(c)}
                          className={`px-3 py-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                            car.id === c.id
                              ? "bg-[#DC2626]/10 border-[#DC2626] text-white shadow-[0_0_12px_rgba(220,38,38,0.2)]"
                              : "bg-black/30 border-white/5 text-gray-400 hover:border-white/15 hover:text-white"
                          }`}
                        >
                          <span className="text-[11px] font-sans font-medium truncate tracking-tight">{c.name.split(" ")[0] || c.name}</span>
                          <span className="text-xs font-mono font-bold mt-1">€{c.pricePerDay}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#DC2626]" /> Nome Completo *
                      </label>
                      <input
                        id="booking-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome Cognome"
                        className="w-full bg-black/45 border border-white/5 hover:border-white/10 focus:border-[#DC2626] focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#DC2626]" /> Telefono *
                      </label>
                      <input
                        id="booking-input-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+39 333 1234567"
                        className="w-full bg-black/45 border border-white/5 hover:border-white/10 focus:border-[#DC2626] focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#DC2626]" /> Indirizzo Email *
                      </label>
                      <input
                        id="booking-input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@esempio.it"
                        className="w-full bg-black/45 border border-white/5 hover:border-white/10 focus:border-[#DC2626] focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#DC2626]" /> Data di Ritiro *
                      </label>
                      <input
                        id="booking-input-date"
                        type="date"
                        required
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full bg-black/45 border border-white/5 hover:border-white/10 focus:border-[#DC2626] focus:outline-none rounded-xl px-4 py-3 text-sm text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Range counter days (1 to 7) */}
                  <div className="bg-black/25 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wide">Durata del Noleggio (Giorni)</label>
                      <span className="text-sm font-sans font-semibold text-[#DC2626] px-3 py-1 bg-[#DC2626]/10 rounded-lg">{days} {days === 1 ? "giorno" : "giorni"}</span>
                    </div>
                    <input
                      id="duration-slider"
                      type="range"
                      min="1"
                      max="7"
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                      <span>1 Giorno (Min)</span>
                      <span>Weekend</span>
                      <span>7 Giorni (Max)</span>
                    </div>
                  </div>

                  {/* Delivery Location Preferences */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-2">Punto di Ritiro & Consegna</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        id="location-option-hq"
                        type="button"
                        onClick={() => setLocation("HQ")}
                        className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                          location === "HQ"
                            ? "bg-white/5 border-[#DC2626] text-[#DC2626]"
                            : "bg-black/30 border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <MapPin className="w-4 h-4 mb-1" />
                        <span className="text-[10px] font-sans font-medium tracking-tight">Venezia HQ (Sede)</span>
                        <span className="text-[9px] font-mono text-gray-500 mt-0.5">Gratis</span>
                      </button>

                      <button
                        id="location-option-airport"
                        type="button"
                        onClick={() => setLocation("Aeroporto")}
                        className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                          location === "Aeroporto"
                            ? "bg-[#DC2626]/10 border-[#DC2626] text-[#DC2626]"
                            : "bg-black/30 border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <MapPin className="w-4 h-4 mb-1" />
                        <span className="text-[10px] font-sans font-medium tracking-tight">Aeroporto (TS/VE)</span>
                        <span className="text-[9px] font-mono text-gray-500 mt-0.5">+€30</span>
                      </button>

                      <button
                        id="location-option-hotel"
                        type="button"
                        onClick={() => setLocation("Hotel")}
                        className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                          location === "Hotel"
                            ? "bg-white/5 border-[#DC2626] text-[#DC2626]"
                            : "bg-black/30 border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <MapPin className="w-4 h-4 mb-1" />
                        <span className="text-[10px] font-sans font-medium tracking-tight">Hotel / Domicilio</span>
                        <span className="text-[9px] font-mono text-gray-500 mt-0.5">+€25</span>
                      </button>
                    </div>
                  </div>

                  {/* Optional Accessories */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wide mb-2.5">Coperture ed Extra Professionali</label>
                    <div className="space-y-2">
                      {/* Kasko Insurance */}
                      <label className="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition-colors cursor-pointer select-none">
                        <div className="flex items-center gap-3">
                          <input
                            id="check-insurance"
                            type="checkbox"
                            checked={insurance}
                            onChange={(e) => setInsurance(e.target.checked)}
                            className="w-4.5 h-4.5 rounded text-[#DC2626] focus:ring-[#DC2626] bg-black border-white/10"
                          />
                          <div>
                            <span className="text-[13px] font-sans font-medium text-white block">Assicurazione Kasko Senza Franchigia</span>
                            <span className="text-[11px] text-gray-500 block leading-tight">Elimina la franchigia in caso di danni d'urto o graffi. Viaggia protetto.</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#DC2626] font-bold">+€15/g</span>
                      </label>

                      {/* GPS Sat */}
                      <label className="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition-colors cursor-pointer select-none">
                        <div className="flex items-center gap-3">
                          <input
                            id="check-gps"
                            type="checkbox"
                            checked={gps}
                            onChange={(e) => setGps(e.target.checked)}
                            className="w-4.5 h-4.5 rounded text-[#DC2626] focus:ring-[#DC2626] bg-black border-white/10"
                          />
                          <div>
                            <span className="text-[13px] font-sans font-medium text-white block">Sistema di Navigazione GPS Integrato</span>
                            <span className="text-[11px] text-gray-500 block leading-tight">Navigatore satellitare offline con aggiornamenti sul traffico live.</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#DC2626] font-bold">+€5/g</span>
                      </label>

                      {/* Additional Driver */}
                      <label className="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition-colors cursor-pointer select-none">
                        <div className="flex items-center gap-3">
                          <input
                            id="check-additional-driver"
                            type="checkbox"
                            checked={additionalDriver}
                            onChange={(e) => setAdditionalDriver(e.target.checked)}
                            className="w-4.5 h-4.5 rounded text-[#DC2626] focus:ring-[#DC2626] bg-black border-white/10"
                          />
                          <div>
                            <span className="text-[13px] font-sans font-medium text-white block">Estensione Conducente Aggiuntivo</span>
                            <span className="text-[11px] text-gray-500 block leading-tight">Consenti ad un amico o partner di guidare il veicolo a turno regolarmente.</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#DC2626] font-bold">+€10/g</span>
                      </label>
                    </div>
                  </div>

                  {/* Real confirmation buttons */}
                  <div className="pt-2">
                    <button
                      id="modal-submit-inquiry"
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#E50914] text-white py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#DC2626]/20 hover:shadow-[#DC2626]/40 transition-all duration-300 cursor-pointer"
                    >
                      <CheckCircle className="w-4.5 h-4.5" />
                      <span>Invia Richiesta Disponibilità</span>
                    </button>
                    <p className="text-[10px] text-gray-500 font-sans text-center mt-2">
                      * Aprendo il client email potrai confermare l'invio della configurazione generata.
                    </p>
                  </div>
                </form>

              </div>
            </div>

            {/* RIGHT SIDE: Real-time receipt summary (5 columns) */}
            <div id="modal-summary-right" className="lg:col-span-12 xl:col-span-5 lg:col-span-5 p-6 md:p-8 bg-[#09090A] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">La tua Scelta</span>
                    <h4 className="text-lg font-sans font-semibold text-white tracking-tight">{car.name}</h4>
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-white/5 py-1 px-3 rounded text-center">
                    {car.specs.type}
                  </span>
                </div>

                {/* Micro car visualization in card */}
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#121214] to-black border border-white/5 flex items-center justify-center p-4 mb-6 relative overflow-hidden group">
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-red-600/5 to-transparent blur-xl" />
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-[140px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Specs quick visual list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[10px] font-mono bg-white/5 text-gray-300 py-1 px-2.5 rounded-lg border border-white/5">
                    {car.specs.engine}
                  </span>
                  <span className="text-[10px] font-mono bg-white/5 text-gray-300 py-1 px-2.5 rounded-lg border border-white/5">
                    {car.specs.transmission}
                  </span>
                  <span className="text-[10px] font-mono bg-white/5 text-gray-300 py-1 px-2.5 rounded-lg border border-white/5">
                    {car.specs.seats} Posti
                  </span>
                </div>

                {/* Price list receipt calculation */}
                <h5 className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3">CONTO DETTAGLIATO</h5>
                <div className="space-y-2 border-b border-white/5 pb-4 mb-4">
                  
                  {/* Daily Base Rate row */}
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="font-sans font-light">Quota Base Veicolo (€{car.pricePerDay} × {days}g)</span>
                    <span className="font-mono font-medium text-white">€{costBase}</span>
                  </div>

                  {/* Kasko Insurance row */}
                  {insurance && (
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span className="font-sans font-light flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" /> Assicurazione Kasko (€15 × {days}g)
                      </span>
                      <span className="font-mono font-medium text-white">€{costInsurance}</span>
                    </div>
                  )}

                  {/* GPS Sat Row */}
                  {gps && (
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span className="font-sans font-light flex items-center gap-1">
                        <Settings className="w-3.5 h-3.5 text-[#DC2626]" /> Navigatore GPS (€5 × {days}g)
                      </span>
                      <span className="font-mono font-medium text-white">€{costGps}</span>
                    </div>
                  )}

                  {/* Additional Driver Row */}
                  {additionalDriver && (
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span className="font-sans font-light">Conducente Aggiuntivo (€10 × {days}g)</span>
                      <span className="font-mono font-medium text-white">€{costAdditionalDriver}</span>
                    </div>
                  )}

                  {/* Delivery Logistical Row */}
                  {deliveryFee > 0 && (
                    <div className="flex items-center justify-between text-xs text-gray-300 animate-fade-in">
                      <span className="font-sans font-light">Servizio Logistica ({location})</span>
                      <span className="font-mono font-medium text-white">€{deliveryFee}</span>
                    </div>
                  )}

                </div>

                {/* Grand Total widget */}
                <div className="bg-[#121214] p-4 rounded-2xl border border-white/10 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Totale Preventivo Stimato</span>
                    <span className="text-[10px] text-[#DC2626] font-mono">Formula Breve Termine</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-mono text-white font-bold tracking-tight">€{totalCost}</span>
                    <span className="text-[10px] text-gray-400 block font-light">Tutto incluso*</span>
                  </div>
                </div>
              </div>

              {/* Status information guidelines */}
              <div className="rounded-2xl bg-[#DC2626]/5 border border-[#DC2626]/20 p-4">
                <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold block mb-1">CON AR CARS RICEVI:</span>
                <ul className="text-xs text-gray-400 space-y-1 font-sans font-light">
                  <li className="flex items-center gap-1.5">• Chilometraggio ottimizzato incluso</li>
                  <li className="flex items-center gap-1.5">• Nessun addebito nascosto o a sorpresa</li>
                  <li className="flex items-center gap-1.5">• Assistenza stradale h24 inclusa</li>
                  <li className="flex items-center gap-1.5">• Auto pulita e igienizzata ad ozono</li>
                </ul>
              </div>

              {/* Submitted message alert */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs text-center"
                >
                  Richiesta elaborata! Abbiamo preparato una email di riepilogo da inviarci. Risponderemo entro 30 minuti.
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
