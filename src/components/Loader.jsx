// Loader.jsx - Glitch Loader with Portfolio Theme (No Circuit Background)

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] text-center overflow-hidden">
      {/* Glitch Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 relative glitch"
      >
        Loading My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-white text-lg md:text-xl font-medium mb-6"
      >
        Getting things ready
        <span className="inline-flex ml-2 text-xl">
          <span className="animate-bounce [animation-delay:0s]">.</span>
          <span className="animate-bounce [animation-delay:0.2s]">.</span>
          <span className="animate-bounce [animation-delay:0.4s]">.</span>
        </span>
      </motion.p>

      {/* Orange Spinner with glow */}
      <motion.div
        className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(255,115,0,0.6)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-6 text-sm text-gray-400"
      >
        Crafting smooth experience ✨
      </motion.p>

      {/* Glitch effect style */}
      <style>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: orange;
          z-index: -1;
        }
        .glitch::before {
          animation: glitchTop 1.5s infinite linear alternate-reverse;
          top: -2px;
        }
        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          top: 2px;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          50% { clip: rect(0, 9999px, 10px, 0); left: 1px; }
          100% { clip: rect(0, 9999px, 0, 0); left: -1px; }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          50% { clip: rect(10px, 9999px, 9999px, 0); left: -1px; }
          100% { clip: rect(0, 9999px, 0, 0); left: 1px; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
