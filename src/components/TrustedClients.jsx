import React from "react";
import Logo1 from "../assets/Logo/LOGO 2.png";
import Logo2 from "../assets/Logo/LOGO LOGO.png";
import Logo3 from "../assets/Logo/LOGO-3-PNG.png";
import Logo4 from "../assets/Logo/LOGO.png";
import Logo5 from "../assets/Logo/LOGOO.png";
import Logo6 from "../assets/Logo/logopng.png";
import Logo7 from "../assets/Logo/WHITE-LOGO-PNG.png";
import Logo8 from "../assets/Logo/Untitled-1.png";

const TrustedClients = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

  return (
    <section className="py-20  text-white text-center px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-[#f4b018] mb-10">
        Creative 🤝 Partners
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-gray-700 max-w-4xl mx-auto overflow-hidden">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="border border-gray-800 flex items-center justify-center h-38 p-4"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-25 md:h-33 object-contain grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
