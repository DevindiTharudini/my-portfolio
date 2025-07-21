import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiPostman,
  SiSnowflake,
} from "react-icons/si";
import { Info } from "lucide-react";

const categories = {
  "UI/UX Design": [
    { name: "Figma", info: "UI design & prototyping", icon: <FaFigma />, top: true },
    { name: "Wireframing", info: "Layout planning", icon: <FaFigma /> },
    { name: "Prototyping", info: "Clickable mockups", icon: <FaFigma /> },
    { name: "User Flow", info: "UX journey logic", icon: <FaFigma /> },
  ],
  "Frontend Development": [
    { name: "React.js", info: "Component-based dev", icon: <FaReact />, top: true },
    { name: "JavaScript", info: "Logic & interaction", icon: <FaJs />, top: true },
    { name: "HTML", info: "Semantic structure", icon: <FaHtml5 /> },
    { name: "CSS", info: "Styling and layout", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", info: "Utility-first styling", icon: <SiTailwindcss /> },
  ],
  "Tools & Technologies": [
    { name: "Firebase", info: "Auth, Firestore", icon: <SiFirebase /> },
    { name: "Postman", info: "API testing", icon: <SiPostman /> },
    { name: "GitHub", info: "Version control", icon: <FaGithub /> },
    { name: "Snowflake SQL", info: "Data querying", icon: <SiSnowflake /> },
  ],
};

// Variants for container to stagger children animation
const containerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: 30 },
};

// Variants for each skill card fade/slide/scale in + scale on hover
const skillVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.05 },
};

// Variants for tooltip fade + slide
const tooltipVariants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 6 },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");

  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-24">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-orange-500">Skills</span>
      </motion.h2>

      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border text-sm font-semibold transition duration-300 
              ${
                activeCategory === category
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                  : "border-white/20 text-white hover:bg-orange-500/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {categories[activeCategory].map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareColor="#ff914d"
              className="rounded-2xl"
            >
              <motion.div
                className={`relative group p-5 border border-white/10 backdrop-blur-lg bg-white/5 rounded-2xl shadow-md hover:shadow-orange-500/20 transition duration-300 ${
                  skill.top ? "border-orange-500 shadow-orange-400/30" : ""
                }`}
                variants={skillVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2 text-orange-400 text-xl">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="relative group">
                    <Info size={16} className="text-gray-300 hover:text-orange-400" />

                    <AnimatePresence>
                      <motion.div
                        key="tooltip"
                        className="absolute top-6 right-0 bg-black text-white text-xs rounded-md px-3 py-2 z-10 shadow-lg border border-white/10 whitespace-nowrap"
                        variants={tooltipVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        {skill.info}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
