import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Monitor, 
  Server, 
  Database as DbIcon, 
  Cloud, 
  BrainCircuit, 
  Palette, 
  Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "LANGUAGES",
    icon: <Code2 size={18} />,
    skills: ["JavaScript", "SQL", "Python", "HTML5", "CSS3"]
  },
  {
    title: "FRONTEND",
    icon: <Monitor size={18} />,
    skills: ["React", "Tailwind CSS", "Next.js", "Framer Motion", "Vite"]
  },
  {
    title: "BACKEND",
    icon: <Server size={18} />,
    skills: ["Firebase", "Node.js", "REST APIs", "SQL", "Authentication"]
  },
  {
    title: "DATABASE",
    icon: <DbIcon size={18} />,
    skills: ["PostgreSQL", "Firestore", "Snowflake SQL", "Data Modeling"]
  },
  {
    title: "UI/UX DESIGN",
    icon: <Palette size={18} />,
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"]
  },
  {
    title: "AI & LLM",
    icon: <BrainCircuit size={18} />,
    skills: ["Gemini", "Prompt Engineering", "Generative AI", "AI Agents"]
  },
  {
    title: "CLOUD & TOOLS",
    icon: <Cloud size={18} />,
    skills: ["GitHub", "Firebase Hosting", "Vercel", "Postman", "Agile"]
  }
];

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:border-orange-500/50 transition-colors">
    {name}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-black text-neutral-900 dark:text-white py-12 md:py-20 px-6 md:px-24 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Header - Synced with About */}
        <div className="flex flex-col items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600 dark:text-orange-500">Expertise</span>
            <div className="w-8 h-[1px] bg-orange-500" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Capabilities</span>
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-neutral-900 rounded-3xl hover:border-orange-500/30 transition-all duration-500 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 rounded-xl text-orange-500 shadow-xl border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                  {category.icon}
                </div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
