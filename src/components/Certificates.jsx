import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Calendar,
  Linkedin,
  Filter,
  Award,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from "lucide-react";

import linkedinThumb from "../assets/linkedin-thumb.jpg";
import moratuwaThumb from "../assets/moratuwa-thumb.jpg";
import industryThumb from "../assets/industry-thumb.jpg";

const certificates = [
  {
    title: "UX Design Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/115b689db98fdf8fc78a07cc4ce53ed8af21cdca2fceba356054e74906d33da7",
    category: "Design",
    type: "Professional Certification",
    platform: "LinkedIn Learning",
    id: "ID: 115b689db..."
  },
  {
    title: "Python Programming",
    issuer: "University of Moratuwa",
    date: "2024",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=sD9CXRAlLA",
    category: "Programming",
    type: "University Certification",
    platform: "UOM - Open Learning",
    id: "ID: sD9CXRAlLA"
  },
  {
    title: "Design Thinking",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/223ba38e61327cef1cc36df12bcf68a52585827d1660ed3aefa22ae7bf22cb30",
    category: "Design",
    type: "Professional Certification",
    platform: "LinkedIn Learning",
    id: "ID: 223ba38e6..."
  },
  {
    title: "Industry Exposure",
    issuer: "University Program",
    date: "2024",
    link: "https://example.com",
    category: "Professional",
    type: "Experiential Learning",
    platform: "University Industry Hub",
    id: "Internal Recognition"
  },
];

const CertificateCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="relative h-full bg-[#0A0A0A] border border-neutral-800 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-rose-500/0 group-hover:from-orange-500/5 group-hover:to-rose-500/5 transition-colors duration-700" />
      
      {/* Verified Seal */}
      <div className="absolute top-6 right-6">
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full group-hover:bg-orange-500/40 transition-colors" />
          <div className="relative flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-orange-500/30 rounded-full">
            <ShieldCheck size={10} className="text-orange-500" />
            <span className="text-[8px] font-black text-orange-500 uppercase tracking-[0.2em]">Verified</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-neutral-900 border border-white/5 rounded-xl shadow-inner">
              {cert.category === "Design" ? <Award size={18} className="text-blue-400" /> : <Zap size={18} className="text-orange-400" />}
            </div>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">{cert.platform}</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-orange-500 transition-colors duration-300">
            {cert.title}
          </h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">Issuer</div>
            <div className="text-xs font-semibold text-neutral-300 truncate">{cert.issuer}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">Completed</div>
            <div className="text-xs font-semibold text-neutral-300">{cert.date}</div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="text-[9px] font-mono text-neutral-600 tracking-tighter">
            {cert.id}
          </div>
          
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 5 }}
            className="p-2.5 bg-white text-black rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-xl"
          >
            <ArrowUpRight size={18} strokeWidth={3} />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(certificates.map((c) => c.category))];

  const filtered = selectedCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-32 px-6 md:px-24 bg-[#050505] text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* High-End Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Luxury Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-neutral-800" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-orange-500">Recognition</span>
            <div className="w-12 h-[1px] bg-neutral-800" />
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tighter text-center leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Professional <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
        </div>

        {/* Ultra-Modern Filter Bar */}
        <div className="flex justify-center mb-20">
          <div className="p-1.5 bg-neutral-900/50 border border-white/5 rounded-2xl backdrop-blur-xl flex gap-2 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-black shadow-2xl"
                    : "text-neutral-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* High-Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cert, idx) => (
            <CertificateCard key={idx} cert={cert} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
