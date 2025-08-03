import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-[#f4b018]">Creativarrow</h2>
          <p className="mb-4 text-gray-300">
            Elevating brands through design, strategy, and digital excellence.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/creativaarrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-[#f4b018] cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/creativaarrow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-[#f4b018] cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f4b018]">Core Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#f4b018] transition">Branding</li>
            <li className="hover:text-[#f4b018] transition">Video Editing</li>
            <li className="hover:text-[#f4b018] transition">Digital Marketing</li>
            <li className="hover:text-[#f4b018] transition">Website Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f4b018]">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:contact@creativarrow.com" className="hover:text-[#f4b018]">
                creativarrow@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#f4b018]">Address</h3>
          <p className="text-gray-300">Karachi, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-white border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#f4b018]">Creativarrow</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
