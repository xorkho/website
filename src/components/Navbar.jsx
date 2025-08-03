import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-[95%] max-w-6xl mx-auto bg-white rounded-full shadow-md px-4 sm:px-6 mt-4 z-50 relative">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/creaativarrow.png"
              alt="Creativarrow Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Hamburger Toggle (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#002333] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 font-semibold text-[#002333] text-sm sm:text-base xl:text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-yellow-500 transition duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Links */}
      {isOpen && (
        <div className="sm:hidden w-[95%] max-w-6xl mx-auto mt-2 bg-white rounded-xl shadow-md py-4 px-6 flex flex-col items-center gap-4 font-semibold text-[#002333] text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-500 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
