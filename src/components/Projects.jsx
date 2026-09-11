import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Figma, Video, ExternalLink, Globe, Sparkles, ArrowRight, PlayCircle } from "lucide-react";

import stylora from "../assets/Stylora.png";
import medicaid from "../assets/medicaid.png";
import greenstay from "../assets/greenstay.png";
import greenpass from "../assets/greenpass.png";
import elephantpulse from "../assets/elephantpulse.png";
import zynerEvents from "../assets/zynerEvents.png";
import futuraPos from "../assets/futura-pos.png";
import edlAsd from "../assets/EDL_ASD.mp4";
import edlLms from "../assets/EDL_LMS.mp4";

const projects = [
  {
    title: "POS System",
    subtitle: "ADVANCED INVENTORY MANAGEMENT",
    category: "WEB APPLICATION",
    description: "Developed at Futura for a specialized client, this comprehensive POS and inventory system streamlines hardware retail operations. As the Lead UI/UX Designer, I focused on creating an intuitive, metric-driven interface for real-time sales and stock management.",
    image: futuraPos,
    year: "2026",
    type: "professional",
    tags: ["UI/UX Design", "React", "Node.js", "PostgreSQL", "Dashboard"],
    figma: "https://www.figma.com/design/c3tcWeTiBOlQvEKhMHdQe9/POS-SYSTEM?node-id=0-1&t=Io1P4rTNknlsvjXz-1",
    demo: "https://pos-system-web-hardware-rtbw.vercel.app/",
    status: "Production Ready"
  },
  {
    title: "EDL ASD",
    subtitle: "ENTERPRISE IT SERVICE PORTAL",
    category: "IT MANAGEMENT",
    description: "An internal Automated Service Desk platform for Electricity Distribution Lanka (EDL). Contributed to the frontend development, building responsive components and pages to streamline IT support requests and incident management workflows.",
    image: edlAsd,
    year: "2025",
    type: "professional",
    isVideo: true,
    tags: ["React", "Vite", "React Router", "Axios", "Frontend Dev"],
    demo: "https://example.com/demo-edl",
    status: "Internal Production"
  },
  {
    title: "EDL LMS",
    subtitle: "AI-POWERED EMPLOYEE LEARNING SYSTEM",
    category: "AI & EDTECH",
    description: "An AI-driven Learning Management System built for EDL employees. Integrated personalized course paths and adaptive quizzes powered by LLMs. Employees self-assess their level (Beginner, Intermediate, Advanced) to receive tailored content. Also built an intelligent AI chatbot for the platform and automated video audio muting using Python.",
    image: edlLms,
    year: "2026",
    type: "professional",
    isVideo: true,
    tags: ["Python", "LLM", "AI Chatbot", "LMS", "Personalization"],
    demo: "https://example.com/demo-edl-lms",
    status: "Internal Production"
  },
  {
    title: "StudyShot",
    subtitle: "ADAPTIVE LEARNING PLATFORM",
    category: "AI & EDUCATION",
    description: "A personalized AI-based e-learning system that adapts quizzes and content based on student performance using advanced RAG and LLM models.",
    image: "/videos/studyyshot.mp4",
    year: "2024",
    type: "academic",
    isVideo: true,
    tags: ["AI", "React", "Python", "LMS"],
    github: "https://github.com/DevindiTharudini/studyshot",
    figma: "https://www.figma.com/design/Rc8uMNEm3efg3qWPzqfbUR/STUDYSHOT?node-id=0-1",
    demo: "https://example.com/demo1",
    status: "Live Demo Available"
  },
  {
    title: "Stylora",
    subtitle: "FASHION E-COMMERCE",
    category: "E-COMMERCE",
    description: "A full-stack fashion e-commerce platform with real-time chat, cart, and secure login, focusing on a seamless user journey and high conversion design.",
    image: stylora,
    type: "academic",
    tags: ["Full Stack", "React", "Node.js", "Firebase"],
    github: "https://github.com/Plymouth-University/coursework-group_96",
    figma: "https://www.figma.com/design/UclXZ39NDctqUP8rNgBAxN/Anvogue---Multipurpose-eCommerce-Figma-Template?node-id=5270-8620",
    demo: "https://example.com/demo2",
    status: "Production Ready"
  },
  {
    title: "Elephant Pulse",
    subtitle: "WILDLIFE SAFETY SYSTEM",
    category: "IOT & AI",
    description: "An IoT-based platform using sensors and image processing to prevent train-elephant collisions, protecting biodiversity in Sri Lanka.",
    image: elephantpulse,
    type: "academic",
    tags: ["IoT", "Python", "Image Processing"],
    figma: "https://www.figma.com/design/EQMJtPPGIRQjIRCPk4d5hE/Elephant-pulse?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo3",
    status: "Hardware Integrated"
  },
  {
    title: "GreenStay",
    subtitle: "STUDENT ACCOMMODATION",
    category: "WEB PLATFORM",
    description: "A web platform helping students search and manage accommodation efficiently with integrated mapping and property verification.",
    image: greenstay,
    type: "academic",
    tags: ["Web Dev", "React", "SQL", "UX Design"],
    figma: "https://www.figma.com/design/NIOyFH6E77TAlGR1OeE9Yi/Untitled?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo4",
    status: "Public Beta"
  },
  {
    title: "zyner EVENTS",
    subtitle: "EVENT TICKETING SYSTEM",
    category: "MANAGEMENT APP",
    description: "A Web application for event ticketing & event browsering with real-time updates and secure ticket generation.",
    image: zynerEvents,
    type: "academic",
    tags: ["Web App", "Next.js", "Firebase", "API"],
    figma: "https://www.figma.com/design/Qh25Zz17k4Gnjm7esXlmxQ/Untitled?node-id=0-1&t=1qeilBiRL1rxJ76A-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo6",
    status: "Deployed"
  },
  {
    title: "GreenPass",
    subtitle: "UNIVERSITY EVENT MOBILE",
    category: "MOBILE APP",
    description: "A mobile app for browsing university events, ticket booking, and real-time validation via QR codes.",
    image: greenpass,
    type: "academic",
    tags: ["Mobile", "Flutter", "Firebase", "QR"],
    figma: "https://www.figma.com/design/qgwKBiAxU3iL1JVmogHVmq/Green-pass-tickets?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo5",
    status: "App Store Ready"
  },
  {
    title: "Medicaid",
    subtitle: "LOCATION-BASED PHARMACY",
    category: "HEALTH TECH",
    description: "A location-based app for finding nearby pharmacies, medicine availability, and blood donors with emergency alerts.",
    image: medicaid,
    type: "academic",
    tags: ["Mobile", "React Native", "Google Maps"],
    figma: "https://www.figma.com/design/RlhQZPMWVVqFvIwts8UVSx/Anvogue---Multipurpose-eCommerce-Figma-Template?node-id=5270-8620",
    github: "https://github.com/example",
    demo: "https://example.com/demo6",
    status: "Social Impact"
  },
  {
    title: "Purple Palace",
    subtitle: "3D FURNITURE VISUALIZER",
    category: "VR & E-COMMERCE",
    description: "An immersive 3D e-commerce platform to visualize furniture in a virtual room before buying using Three.js.",
    image: "/videos/purplepalace.mp4",
    type: "academic",
    isVideo: true,
    tags: ["3D", "Three.js", "E-commerce", "WebXR"],
    demo: "https://example.com/demo7",
    github: "https://github.com/example",
    figma: "https://www.figma.com/design/example",
    status: "Experimental"
  },
];

const ProjectCard = ({ project, index, onVideoClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="group relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-neutral-900 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all duration-500 p-4 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12"
  >
    {/* Left: Media Showcase */}
    <div className="w-full lg:w-[45%] aspect-video rounded-2xl overflow-hidden relative group/media shadow-2xl">
      {project.isVideo ? (
        <video 
          src={project.image} 
          muted 
          loop 
          autoPlay 
          playsInline 
          onContextMenu={e => e.preventDefault()}
          className="w-full h-full object-cover" 
        />
      ) : (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      )}
      
      {/* Media Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center gap-4">
        {project.isVideo && (
          <motion.button onClick={onVideoClick} whileHover={{ scale: 1.1 }} className="p-4 bg-orange-500 text-white rounded-full shadow-lg">
            <PlayCircle size={24} />
          </motion.button>
        )}
      </div>
      
      {/* Year/Badge Overlay */}
      <div className="absolute bottom-4 left-4 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.year || "2024"} • COMPLETED</span>
      </div>
    </div>

    {/* Right: Project Details */}
    <div className="flex-1 flex flex-col justify-center space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[9px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">{project.category}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
          <Sparkles size={10} className="text-green-500" />
          <span className="text-[9px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">{project.status}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-xl">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-4 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase text-neutral-600 dark:text-neutral-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <motion.a 
          href={project.demo} 
          target="_blank"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all text-sm uppercase tracking-wider"
        >
          View Case Study <ArrowRight size={16} />
        </motion.a>
        
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" className="text-neutral-400 hover:text-orange-500 transition-colors" title="GitHub Source">
              <Github size={20} />
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" className="text-neutral-400 hover:text-[#F24E1E] transition-colors" title="Figma Design">
              <Figma size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="pt-2">
        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.2em]">Tap to open full details</span>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("professional");

  const filteredProjects = projects.filter(p => p.type === activeTab);

  return (
    <section id="projects" className="py-24 px-6 md:px-24 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600 dark:text-orange-500">Portfolio</span>
            <div className="w-8 h-[1px] bg-orange-500" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Featured <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
        </div>

        {/* Tab Switching */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm relative">
            {["professional", "academic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab 
                  ? "text-orange-500" 
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-white dark:bg-black rounded-xl shadow-lg -z-10 border border-neutral-200 dark:border-neutral-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab === "professional" ? "Professional Work" : "Academic & Personal"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-12 md:gap-20 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 md:gap-20"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index} 
                  onVideoClick={() => setSelectedProject(project)} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <video 
                src={selectedProject.image} 
                controls 
                autoPlay 
                muted
                controlsList="nodownload nofullscreen"
                onContextMenu={e => e.preventDefault()}
                disablePictureInPicture
                className="w-full aspect-video" 
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-orange-500 text-white rounded-full transition-colors"
              >
                <ArrowRight size={24} className="rotate-45" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
