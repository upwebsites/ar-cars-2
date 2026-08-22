export interface Car {
  id: string;
  name: string;
  specs: {
    type: string; // e.g. "Chic", "SUV", "Urban"
    transmission: "Cambio Manuale" | "Cambio Automatico" | "Automatico";
    engine: "Mild Hybrid" | "100% Elettrica" | "Diesel" | "Hybrid" | "Benzina";
    seats: number;
    baggage: number;
    fuelConsumption?: string; // Optional spec
  };
  pricePerDay: number;
  image: string;
  popular: boolean;
  tagline: string;
}

export interface BookingDetails {
  carId: string;
  name: string;
  email: string;
  phone: string;
  days: number;
  pickupDate: string;
  accessories: {
    insurance: boolean; // Kasko
    gps: boolean;
    additionalDriver: boolean;
  };
  deliveryLocation: "HQ" | "Aeroporto" | "Hotel";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image?: string;
  comment: string;
  rating: number;
  carRented: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
