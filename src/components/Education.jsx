import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "BSc (Hons) Computer Science",
    institution: "University of Plymouth / NSBM Green University",
    period: "2022 – 2025",
    description: "Currently pursuing Computer Science with a focus on UI/UX design, frontend technologies, and full-stack development.",
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Advanced Certificate in Computer Science",
    institution: "NSBM Green University",
    period: "2022",
    description: "Completed advanced certificate course ",
    icon: <BookOpen size={20} />,
  },
  {
    title: "G.C.E A/L - Physical Science Stream",
    institution: "Sri Lankan National Curriculum",
    period: "2020",
    description: "Completed advanced Level (Studied Physics, Combined Maths, and ICT under the physical science stream)",
    icon: <BookOpen size={20} />,
  },
  {
    title: "G.C.E O/L - English Medium",
    institution: "Sri Lankan National Curriculum",
    period: "2017",
    description: "Passed all subjects in English medium with strong results.",
    icon: <BookOpen size={20} />,
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-black text-white py-20 px-6 md:px-24">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-orange-500">Education</span>
      </motion.h2>

      <div className="relative pl-6 border-l-2 border-orange-400">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Animated Dot */}
            <span className="absolute -left-3.5 top-2 w-4 h-4 rounded-full bg-orange-500 animate-ping shadow-lg"></span>
            <span className="absolute -left-3.5 top-2 w-4 h-4 rounded-full bg-orange-500 border-2 border-black z-10"></span>

            {/* Content Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md">
              <div className="flex items-center gap-3 text-orange-400 mb-1">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm font-medium text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-400 italic mb-2">{item.period}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
