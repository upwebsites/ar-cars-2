import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Handler for the Explore click – logs action for now
  const onExploreClick = () => {
    console.log('Explore button clicked');
  };

  const navLinks = [
    { label: "La Flotta", onClick: () => {
      const element = document.getElementById("fleet");
      element?.scrollIntoView({ behavior: "smooth" });
    }},
    { label: "Garanzie e Servizi", onClick: () => {
      const element = document.getElementById("services");
      element?.scrollIntoView({ behavior: "smooth" });
    }},
    { label: "Domande Frequenti", onClick: () => {
      const element = document.getElementById("faq");
      element?.scrollIntoView({ behavior: "smooth" });
    }},
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
      {/* Container with premium glassmorphism effect */}
      <div id="navbar-container" className="max-w-7xl mx-auto bg-[#0B0B0C]/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl px-6 py-4 flex items-center justify-between">
        {/* Logo "AR Cars" with custom red accent letter and speed vibe */}
        <div 
          onClick={onExploreClick}
          className="flex items-center cursor-pointer group"
        >
          <Logo className="h-8 md:h-9 w-auto hover:scale-105 transition-transform duration-300" glow={true} />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              key={link.label}
              onClick={link.onClick}
              className="text-sm font-sans font-medium text-gray-400 hover:text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA "Contattaci" */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-cta-btn"
            onClick={onBookClick}
            className="group relative inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#E50914] text-white text-xs font-sans font-semibold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.30)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.50)] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <Mail className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span>Contattaci</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-[#121214]/95 border border-white/5 shadow-3xl rounded-2xl p-6 backdrop-blur-xl z-50 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                key={link.label}
                onClick={() => {
                  setIsOpen(false);
                  link.onClick();
                }}
                className="text-left py-2 font-sans font-light text-gray-300 hover:text-[#DC2626] text-base border-b border-white/5 hover:pl-2 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              id="mobile-nav-cta-btn"
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#DC2626] text-white py-3 rounded-xl font-sans font-bold uppercase tracking-wider text-xs shadow-lg cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contattaci</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
