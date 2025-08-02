import React from "react";
import { MessageCircle } from "lucide-react"; // Optional: Use a WhatsApp icon image instead

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923328264639"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
    >
      <MessageCircle size={67} />
    </a>
  );
};

export default WhatsAppButton;
