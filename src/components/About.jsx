import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2, Award, Cpu, Layout, Zap, Database, Download, Mail, Star } from 'lucide-react';
import avatar from '../assets/devindi-avatar.jpg';
import realImage from '../assets/real-devindi.jpg';

const MetricCard = ({ value, label }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-50 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-orange-500/50 transition-all group"
  >
    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">{value}</h3>
    <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1 font-bold">{label}</p>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex flex-col gap-3 hover:border-orange-500/30 transition-all group">
    <div className="p-2 bg-orange-500/10 rounded-lg w-fit group-hover:bg-orange-500/20 transition-colors">
      <Icon className="text-orange-500" size={18} />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CareerCard = ({ type, title, subtitle, tag, tagColor }) => (
  <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex flex-col gap-3 flex-1 hover:border-orange-500/30 transition-all">
    <div className="space-y-1">
      <h5 className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">{type}</h5>
      <h4 className="text-xs font-semibold text-neutral-900 dark:text-white leading-tight">{title}</h4>
      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{subtitle}</p>
    </div>
    <div className={`mt-auto px-2 py-0.5 rounded-full text-[8px] font-bold uppercase w-fit ${tagColor}`}>
      {tag}
    </div>
  </div>
);

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  const handleClick = () => setIsFlipped(prev => !prev);

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white py-12 md:py-20 px-6 md:px-24 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-orange-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-600 dark:text-orange-500">Discovery</span>
            <div className="w-8 h-[1px] bg-orange-500" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
        </div>

        {/* Scaled Down Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          <MetricCard value="1+" label="Year Enterprise Exp" />
          <MetricCard value="6+" label="Certifications" />
          <MetricCard value="12+" label="Production Projects" />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Side: Bio & Photo */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex flex-col sm:flex-row gap-10 items-start">
              {/* Photo Card */}
              <div 
                className="relative w-48 md:w-56 aspect-[3/4] perspective cursor-pointer group shrink-0 mx-auto sm:mx-0"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 ${isFlipped ? 'rotate-y-180' : ''}`}>
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                    <img src={avatar} alt="3D Avatar" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-[8px] text-white font-bold uppercase tracking-widest text-center">3D Digital Avatar</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden border-2 border-orange-500 shadow-lg">
                    <img src={realImage} alt="Real Devindi" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-orange-600/80 to-transparent">
                      <p className="text-[8px] text-white font-bold uppercase tracking-widest text-center">Real Me</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Bio Text */}
              <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                <p>
                  I’m a <span className="text-neutral-900 dark:text-white font-bold underline decoration-orange-500/30 underline-offset-4">Software Engineer and UI/UX Designer</span> with hands-on experience in building real-world digital systems and user-focused interfaces. At <span className="text-neutral-900 dark:text-white font-bold">Electricity Distribution Lanka (EDL)</span>, I contributed to enterprise-level applications including the EDL LMS with AI integration and the ASD (Automated IT Service Desk) system, focusing on developing practical, scalable solutions that improve operational efficiency and user experience.
                </p>
                <p>
                  I also worked in a UI/UX design environment at <span className="text-neutral-900 dark:text-white font-bold">Futura Solutions</span>, where I contributed to creating modern, intuitive, and user-friendly interfaces for web applications, improving usability and overall design quality.
                </p>
                <p>
                  I specialise in frontend development, UI/UX engineering, and modern web application development using <span className="text-orange-500 font-bold underline underline-offset-4 decoration-orange-500/20">React, Firebase, SQL, Tailwind CSS, Figma, and AI-integrated solutions</span>. I thrive in collaborative tech environments where clean design, scalable development, and user experience are equally important.
                </p>
                <p className="font-medium text-neutral-900 dark:text-white/90 italic">
                  Experienced in translating complex requirements into intuitive digital solutions, improving workflows, contributing to production-level systems, and delivering responsive applications that balance functionality with modern visual design.
                </p>
              </div>
            </div>

            {/* Career Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CareerCard 
                type="Education" 
                title="BSc (Hons) Computer Science" 
                subtitle="Plymouth · 2025" 
                tag="Second Class" 
                tagColor="bg-orange-500/10 text-orange-600"
              />
              <CareerCard 
                type="Previous Role" 
                title="Software Engineer" 
                subtitle="EDL" 
                tag="Full Stack" 
                tagColor="bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
              />
              <CareerCard 
                type="Previous Role" 
                title="UI/UX Designer" 
                subtitle="Futura Solutions" 
                tag="Design" 
                tagColor="bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
              />
            </div>
          </div>

          {/* Right Side: Services Highlights */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            <ServiceCard 
              icon={Building2} 
              title="Enterprise Systems" 
              description="Robust architectures for large-scale applications." 
            />
            <ServiceCard 
              icon={Layout} 
              title="UI/UX Engineering" 
              description="High-fidelity, accessible interfaces." 
            />
            <ServiceCard 
              icon={Cpu} 
              title="AI Integration" 
              description="Gemini & GenAI-powered features." 
            />
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <motion.a 
                href="/Devindi_CV.pdf"
                download="Devindi_CV.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all text-xs"
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=devinditharudini07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-semibold rounded-xl hover:bg-neutral-200 dark:hover:bg-white/10 transition-all text-xs"
              >
                Contact Me
                <Mail size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};

export default About;
