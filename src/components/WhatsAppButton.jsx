import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923328264639"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition"
    >
      <MessageCircle className="w-6 h-6 sm:w-[34px] sm:h-[34px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px]" />
    </a>
  );
};

export default WhatsAppButton;
