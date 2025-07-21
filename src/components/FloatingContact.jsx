import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg shadow-orange-500/30 z-50 transition duration-300"
      aria-label="Contact"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default FloatingContact;