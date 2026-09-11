import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Calendar, MapPin, Zap } from "lucide-react";

const educationData = [
  {
    title: "BSc (Hons) Computer Science",
    institution: "University of Plymouth / NSBM Green University",
    period: "Graduated 2025",
    grade: "Second Class Honours",
    location: "Homagama, Sri Lanka",
    icon: <GraduationCap size={18} className="text-orange-500" />,
    type: "Bachelor's Degree"
  },
  {
    title: "Advanced Certificate in Computer Science",
    institution: "NSBM Green University",
    period: "2022",
    location: "Homagama, Sri Lanka",
    icon: <BookOpen size={18} className="text-blue-500" />,
    type: "Professional Qualification"
  },
  {
    title: "G.C.E A/L - Physical Science Stream (English Medium)",
    institution: "St Joseph's Balika Maha Vidyalaya",
    period: "2020",
    location: "Kegalle, Sri Lanka",
    icon: <School size={18} className="text-emerald-500" />,
    type: "Secondary Education"
  },
  {
    title: "G.C.E O/L - English Medium",
    institution: "St Joseph's Balika Maha Vidyalaya",
    period: "2017",
    location: "Kegalle, Sri Lanka",
    icon: <BookOpen size={18} className="text-purple-500" />,
    type: "Secondary Education"
  },
];

const EducationCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group relative w-full"
  >
    {/* Card Container with Gradient & Glass */}
    <div className="relative bg-gradient-to-br from-white/10 via-white/[0.02] to-orange-500/[0.05] dark:from-white/[0.05] dark:via-transparent dark:to-orange-500/[0.08] backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 shadow-xl flex items-center gap-6 overflow-hidden">

      {/* Animated Gradient Accent (Modern Color) */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 via-orange-600 to-rose-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      {/* High-End Radial Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-rose-500/20 blur-[100px] rounded-full group-hover:opacity-100 opacity-40 transition-opacity duration-700 pointer-events-none" />

      {/* Icon with Modern Gradient Background */}
      <div className="shrink-0 relative z-10">
        <div className="p-3.5 bg-neutral-900/90 backdrop-blur-2xl rounded-xl border border-white/10 shadow-2xl group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden group/icon">
          {/* Subtle gradient fill for icon box */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {item.icon}
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 space-y-1.5 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[10px] font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase tracking-[0.2em]">{item.type}</div>
          <div className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[9px] font-bold text-neutral-500 uppercase tracking-widest">
            {item.period}
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 dark:text-white truncate group-hover:text-orange-500 transition-colors duration-300">
          {item.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
          <span className="flex items-center gap-2">
            <School size={14} className="text-neutral-500 dark:text-neutral-600" />
            <span className="group-hover:text-neutral-300 transition-colors">{item.institution}</span>
          </span>
          {item.grade && (
            <div className="flex items-center gap-2 px-2.5 py-1 bg-gradient-to-r from-orange-500/10 to-rose-500/10 text-orange-600 dark:text-orange-400 rounded-md font-black text-[9px] uppercase tracking-wider border border-orange-500/20 backdrop-blur-md">
              <Zap size={10} className="text-orange-500 animate-pulse" />
              {item.grade}
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-24 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Modern Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600 dark:text-orange-500">Journey</span>
            <div className="w-8 h-[1px] bg-orange-500" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Academic <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Background</span>
          </motion.h2>
        </div>

        {/* Education Stack */}
        <div className="flex flex-col gap-10">
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
