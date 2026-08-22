import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Star } from "lucide-react";

const emailAddress = "noleggio@ar-cars.it";

export default function App() {
  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div 
      id="main-application-wrapper" 
      className="min-h-screen bg-[#070709] text-[#F3F4F6] relative font-sans antialiased selection:bg-[#DC2626] selection:text-white overflow-x-hidden"
    >
      {/* ------------------------------------------------------------- */}
      {/* CONTINUOUS UNBROKEN RED AMBIENT GLOW ATMOSPHERE */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-Right Hero Glow */}
        <div className="absolute -top-32 -right-32 w-[850px] md:w-[1100px] h-[850px] md:h-[1100px] bg-red-600/[0.14] rounded-full blur-[180px]" />
        
        {/* Top-Left Ambient Orb */}
        <div className="absolute top-[8%] -left-48 w-[700px] h-[700px] bg-[#DC2626]/[0.09] rounded-full blur-[170px]" />
        
        {/* Stats & Services Ambient Red Flare */}
        <div className="absolute top-[22%] -right-40 w-[800px] h-[800px] bg-red-600/[0.12] rounded-full blur-[180px]" />
        
        {/* Fleet Section Left-Side Glow */}
        <div className="absolute top-[42%] -left-40 w-[850px] h-[850px] bg-[#DC2626]/[0.11] rounded-full blur-[180px]" />
        
        {/* Reviews & FAQ Right-Side Glow */}
        <div className="absolute top-[62%] -right-44 w-[900px] h-[900px] bg-red-600/[0.13] rounded-full blur-[190px]" />
        
        {/* Contact Section Center-Left Glow */}
        <div className="absolute top-[80%] -left-36 w-[850px] h-[850px] bg-[#DC2626]/[0.12] rounded-full blur-[180px]" />
        
        {/* Bottom Footer Intense Crimson Glow */}
        <div className="absolute -bottom-40 -right-40 w-[950px] h-[950px] bg-red-600/[0.18] rounded-full blur-[200px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[500px] bg-[#DC2626]/[0.10] rounded-full blur-[160px]" />
      </div>

      {/* Dynamic Floating Navbar */}
      <Navbar onBookClick={handleContactClick} />

      {/* Hero Header Section */}
      <Hero onContactClick={handleContactClick} />

      {/* Trust & Performance Statistics Banner (Seamless & No Monospace) */}
      <section id="stats-banner" className="py-14 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-sans text-white font-extrabold tracking-tight">
              <span>99</span>
              <span className="text-[#DC2626]">%</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans font-medium mt-1.5">Clienti Soddisfatti</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-sans text-white font-extrabold tracking-tight">
              <span>30</span>
              <span className="text-sm text-gray-400 font-sans font-normal ml-0.5">Min</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans font-medium mt-1.5">Tempo Risposta</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 text-3xl md:text-4xl font-sans text-white font-extrabold tracking-tight">
              <span className="text-amber-500">5.0</span>
              <Star className="w-5 h-5 fill-amber-500 text-amber-500 shrink-0" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans font-medium mt-1.5">Punteggio Recensioni</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-sans text-white font-extrabold tracking-tight">
              <span>0</span>
              <span className="text-sm text-[#DC2626] font-sans font-normal ml-0.5">Costi</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans font-medium mt-1.5">Nessun Costo Nascosto</p>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Fleet Catalog Slider Section */}
      <Fleet onSelectCar={handleContactClick} />

      {/* Testimonials Customer Reviews */}
      <Reviews />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Call To Action & Direct Mailto Section */}
      <ContactSection />

      {/* Clean Premium Footer */}
      <Footer onBookClick={handleContactClick} />
    </div>
  );
}
