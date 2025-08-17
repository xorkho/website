import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#f4b018]">
              Creativarrow
            </h2>
            <p className="mb-4 text-gray-300 text-sm md:text-base">
              Elevating brands through design <br/>
              strategy & digital excellence.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="https://www.facebook.com/creativaarrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-[#f4b018] w-5 h-5 md:w-6 md:h-6 cursor-pointer transition" />
              </a>
              <a
                href="https://www.instagram.com/creativaarrow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-[#f4b018] w-5 h-5 md:w-6 md:h-6 cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#f4b018]">
              Core Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="hover:text-[#f4b018] transition cursor-pointer">Branding</li>
              <li className="hover:text-[#f4b018] transition cursor-pointer">Video Editing</li>
              <li className="hover:text-[#f4b018] transition cursor-pointer">Digital Marketing</li>
              <li className="hover:text-[#f4b018] transition cursor-pointer">Website Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#f4b018]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail size={18} />
                <a
                  href="mailto:contact@creativarrow.com"
                  className="hover:text-[#f4b018]"
                >
                  creativarrow@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm md:text-base text-white border-t border-white/20 pt-4">
          &copy; 2023 <span className="text-[#f4b018]">Creativarrow</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
