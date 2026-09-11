import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, SunIcon, MoonIcon } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // 👈 import scroll link

const Navbar = ({ darkMode, setDarkMode, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Education", "Contact"];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', closeMenuOnClickOutside);
    return () => document.removeEventListener('click', closeMenuOnClickOutside);
  }, [isOpen]);

  // Button-style nav link with scroll
  const renderLink = (link, index) => {
    const isActive = activeLink === link;

    return (
      <motion.li
        key={index}
        className="relative"
      >
        <ScrollLink
          to={link.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onSetActive={() => setActiveLink(link)}
          className={`px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 
            ${isActive
              ? "text-white bg-orange-500 shadow-md"
              : "text-inherit border border-transparent hover:border-orange-400 hover:bg-orange-400/10"}
          `}
        >
          {link}
        </ScrollLink>

        {isActive && (
          <motion.div
            layoutId="pill-background"
            className="absolute inset-0 rounded-full bg-orange-500 z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </motion.li>
    );
  };

  if (isLoading) return null;

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[10000] 
                  w-[calc(100%-48px)] max-w-7xl
                  px-6 py-3 rounded-2xl shadow-xl backdrop-blur-xl border border-gray-200 dark:border-white/10
                  transition-all duration-300 
                  ${darkMode ? "bg-black/80 text-white" : "bg-white/80 text-black"}`}
      initial={{ x: "calc(-50% + 150px)", opacity: 0 }}
      animate={{ x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo and Nav */}
        <div className="flex items-center gap-10">
          <h1 className="text-xl font-bold uppercase tracking-widest whitespace-nowrap">
            Devindi Tharudini
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 text-sm font-medium tracking-wide items-center">
            {navLinks.map((link, index) => renderLink(link, index))}
          </ul>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full backdrop-blur-md bg-gray-100 dark:bg-white/10 shadow-inner"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="mt-4 flex flex-col gap-3 md:hidden text-sm font-medium tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link, index) => renderLink(link, index))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
