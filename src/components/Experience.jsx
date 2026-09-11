import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, Sparkles, Layout, Code2, ArrowUpRight } from "lucide-react";

const experienceData = [
  {
    title: "Software Engineer",
    company: "Electricity Distribution Lanka (EDL)",
    period: "Full-time",
    location: "Colombo, Sri Lanka",
    icon: <Code2 size={20} />,
    color: "from-orange-500 to-rose-500",
    responsibilities: [
      "Contributed to the development of enterprise-level applications including the EDL Learning Management System (LMS) with AI-driven adaptive learning integration and the ASD (Automated IT Service Desk) platform",
      "Developed AI-powered learning workflows capable of analysing user skill levels (Beginner, Intermediate, Advanced) and dynamically recommending personalised learning paths, quizzes, and course progression based on performance and knowledge evaluation",
      "Worked across both frontend and backend development using React, PHP, Python, and SQL, contributing to system functionality, database operations, API integrations, debugging, and application improvements",
      "Participated in building intelligent quiz generation logic based on course content and user progression to improve personalised learning experiences within the LMS platform",
      "Collaborated within a team-based development environment, contributing to scalable system enhancements, issue resolution, and real-world production-level application development"
    ]
  },
  {
    title: "UI/UX Designer",
    company: "Futura Solutions",
    period: "Remote / Part-time",
    location: "Colombo, Sri Lanka",
    icon: <Layout size={20} />,
    color: "from-blue-500 to-indigo-500",
    responsibilities: [
      "Contributed to the UI/UX design and user experience development of enterprise and education-focused digital platforms including a POS system and the EduAra advanced student support application",
      "Designed modern, intuitive, and user-focused interfaces using Figma, Canva, and Adobe Illustrator, focusing on improving usability, accessibility, and visual consistency across web-based applications",
      "Created wireframes, user flows, interactive prototypes, dashboards, and responsive web application designs aligned with modern UI/UX principles and real-world business requirements",
      "Collaborated closely with developers and project teams to translate functional requirements into scalable and visually engaging digital experiences",
      "Supported design workflows from concept ideation to high-fidelity UI implementation while maintaining consistency across branding, layout systems, and user interaction patterns"
    ]
  }
];

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative"
  >
    {/* Animated Border/Glow */}
    <div className={`absolute -inset-[1px] bg-gradient-to-r ${exp.color} rounded-[2.5rem] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
    
    <div className="relative bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-900 rounded-[2.5rem] p-8 md:p-10 hover:border-orange-500/30 transition-all duration-500 shadow-xl overflow-hidden h-full">
      
      {/* Background Decor */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-[0.03] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.08] transition-all duration-700`} />

      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg shadow-orange-500/20`}>
                {exp.icon}
              </div>
              <div className="px-4 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">
                {exp.period}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
                {exp.title}
              </h3>
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 font-bold text-sm">
                <Building2 size={16} className="text-orange-500" />
                {exp.company}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-widest bg-neutral-50 dark:bg-white/5 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10">
              <MapPin size={12} />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4">
          <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <Sparkles size={12} className="text-orange-500" />
            Key Contributions
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed group/item">
                <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500/30 group-hover/item:bg-orange-500 group-hover/item:scale-125 transition-all" />
                <p className="flex-1 group-hover/item:text-neutral-900 dark:group-hover/item:text-neutral-200 transition-colors">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Interactive Element */}
        <div className="pt-4 mt-auto border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Enterprise Role</span>
          <ArrowUpRight size={20} className="text-neutral-300 dark:text-neutral-700 group-hover:text-orange-500 transition-colors" />
        </div>

      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-24 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Header */}
        <div className="flex flex-col items-center mb-20 text-center">
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
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Professional <span className="bg-gradient-to-r from-orange-400 to-rose-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm md:text-base font-medium"
          >
            A track record of contributing to enterprise systems, AI-driven solutions, and user-centric designs in high-impact environments.
          </motion.p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

