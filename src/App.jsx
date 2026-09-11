import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import FloatingContact from "./components/FloatingContact";
import CustomCursor from "./components/CustomCursor";
import CTA from "./components/CTA";

import Experience from "./components/Experience";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === null ? true : savedTheme === "dark";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-sans cursor-none">
      <CustomCursor />
      <Loader loading={loading} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isLoading={loading} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CTA />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
