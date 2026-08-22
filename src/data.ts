import { Car, Testimonial, FAQItem } from "./types";

export const CUSTOM_FLEET: Car[] = [
  {
    id: "fiat-500",
    name: "Fiat 500 Hybrid",
    tagline: "L'icona dello stile italiano, scattante ed ecosostenibile.",
    specs: {
      type: "Chic / City Car",
      transmission: "Cambio Manuale",
      engine: "Hybrid",
      seats: 4,
      baggage: 1,
      fuelConsumption: "4.6L / 100km"
    },
    pricePerDay: 20,
    image: "/images/fiat_500_studio_1780647038964.png",
    popular: true
  },
  {
    id: "smart-eq",
    name: "Smart EQ Fortwo",
    tagline: "Agilità urbana insuperabile, 100% elettrica.",
    specs: {
      type: "Micro City Car",
      transmission: "Cambio Automatico",
      engine: "100% Elettrica",
      seats: 2,
      baggage: 1,
      fuelConsumption: "0 Emissioni"
    },
    pricePerDay: 20,
    image: "/images/smart_eq_studio_1780647072141.png",
    popular: false
  },
  {
    id: "fiat-panda",
    name: "Fiat Panda Hybrid",
    tagline: "La compagna più versatile per la tua quotidianità.",
    specs: {
      type: "Pratica / City Car",
      transmission: "Cambio Manuale",
      engine: "Hybrid",
      seats: 5,
      baggage: 2,
      fuelConsumption: "4.8L / 100km"
    },
    pricePerDay: 20,
    image: "/images/fiat_panda_studio_1780647090129.png",
    popular: false
  },
  {
    id: "fiat-600",
    name: "Fiat 600 Hybrid",
    tagline: "Il nuovo crossover urbano dal comfort superiore.",
    specs: {
      type: "Crossover / SUV",
      transmission: "Cambio Automatico",
      engine: "Hybrid",
      seats: 5,
      baggage: 3,
      fuelConsumption: "5.1L / 100km"
    },
    pricePerDay: 20,
    image: "/images/fiat_600_studio_1780647055755.png",
    popular: true
  },
  {
    id: "jeep-renegade",
    name: "Jeep Renegade",
    tagline: "Presenza su strada dominante, spazio senza compromessi.",
    specs: {
      type: "Premium SUV",
      transmission: "Cambio Manuale",
      engine: "Diesel",
      seats: 5,
      baggage: 4,
      fuelConsumption: "5.5L / 100km"
    },
    pricePerDay: 20,
    image: "/images/jeep_renegade_studio_1780647022547.png",
    popular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alessandro Visentin",
    role: "Professionista Milano",
    comment: "Servizio eccellente! Ho noleggiato la Fiat 600 Hybrid per un weekend di lavoro a Torino. Auto fiammante, pulitissima ed una flessibilità di ritiro mai trovata altrove.",
    rating: 5,
    carRented: "Fiat 600 Hybrid"
  },
  {
    id: "t2",
    name: "Elena Rossini",
    role: "Turista in Puglia",
    comment: "La Smart EQ Fortwo è stata la salvezza per le stradine e i parcheggi dei borghi storici. Risposte rapide tramite email ed un processo trasparente al 100%.",
    rating: 5,
    carRented: "Smart EQ Fortwo"
  },
  {
    id: "t3",
    name: "Marco D'Agostino",
    role: "Imprenditore Locale",
    comment: "Abbiamo noleggiato la Jeep Renegade per una gita in montagna con la famiglia. Auto robustissima, spaziosa e adatta ad ogni terreno. Consigliatissimo!",
    rating: 5,
    carRented: "Jeep Renegade"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Quali sono i requisiti necessari per noleggiare un'auto?",
    answer: "È necessario aver compiuto 21 anni, possedere una patente di guida in corso di validità da almeno 1 anno (originale e fisica) ed un documento d'identità valido. Non richiediamo depositi cauzionali eccessivi."
  },
  {
    id: "f2",
    question: "Quali sono la durata minima e massima del noleggio?",
    answer: "La nostra formula a breve termine ha una durata minima di 24 ore (1 giorno) ed una durata massima di 7 giorni (1 settimana). È studiata appositamente per chi necessita della massima flessibilità temporale senza impegni a lungo termine."
  },
  {
    id: "f3",
    question: "Cosa è incluso nel prezzo giornaliero?",
    answer: "La tariffa giornaliera base include manutenzione stradale, assistenza h24, assicurazione RC auto con franchigia standard e pulizia accurata del veicolo pre-consegna."
  },
  {
    id: "f4",
    question: "Come posso richiedere accessori extra come Kasko o GPS?",
    answer: "Contattaci direttamente all'indirizzo email noleggio@ar-cars.it per richiedere accessori extra come l'Assicurazione Kasko completa, il navigatore GPS o l'estensione per il Conducente Aggiuntivo. Il nostro team calcolerà il prezzo finale per te."
  },
  {
    id: "f5",
    question: "Posso cancellare o modificare la mia prenotazione?",
    answer: "Sì, offriamo la cancellazione gratuita fino a 24 ore prima dell'orario stabilito per il ritiro. Contattaci all'indirizzo email noleggio@ar-cars.it o rispondi alla conferma di disponibilità."
  }
];
