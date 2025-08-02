import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="relative mx-auto w-[90%] max-w-6xl mt-4 rounded-full px-6 shadow-md bg-white z-50">
      <div className="flex justify-between items-center w-[95%] sm:w-[90%] max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative flex items-center space-x-3 cursor-pointer">
            <img
              src="/creaativarrow.png"
              alt="Creativarrow Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 font-semibold text-[#002333] text-base xl:text-2xl">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 px-1 hover:text-yellow-500 transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="relative p-2 text-[#002333] hover:text-yellow-500 transition-all duration-300 hover:bg-yellow-50 rounded-lg"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-3 sm:px-6 pb-4 pt-2 shadow-lg border-t border-gray-100">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#002333] font-semibold py-3 px-4 rounded-lg hover:bg-yellow-100 hover:text-yellow-600 transition-all duration-300 transform hover:translate-x-2 text-base"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isMenuOpen
                  ? "slideInLeft 0.5s ease-out forwards"
                  : "none",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Animation Keyframe */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
