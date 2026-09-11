import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/3d_avatar.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import {
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiR,
  SiVscodium
} from 'react-icons/si';

const coreStacks = [
  "React", "React Native", "HTML5", "CSS3", "Python", "Firebase", "Flutter", "Dart",
  "Figma", "MySQL", "GitHub", "PowerBI", "Postman", "AI", "Tailwind CSS", "PHP", "JavaScript", "Snowflake", "prompt engineeering"
];

const qualities = [
  "Testing", "Fast Learner", "Works under deadlines", "Clean Code", "UX Polish",
  "Scalable Delivery", "System Design", "Problem Solving", "Team Player", "Agile"
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 md:px-16 pt-40 pb-20 overflow-hidden transition-colors duration-300">

      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full z-10">

        {/* 🔆 Background Glow Behind Avatar */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-orange-500 opacity-20 dark:opacity-20 blur-3xl top-40 right-0 pointer-events-none z-0" />

        {/* Left Side */}
        <div className="flex-1 z-10 space-y-10">
          {/* 🟢 Available for Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 dark:bg-green-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)] group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wider text-green-600 dark:text-green-400 uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <div>
            <motion.p
              className="text-xl font-medium text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-7xl font-extrabold leading-[1.1] tracking-tight mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Devindi<br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,115,0,0.3)]">Tharudini</span>
            </motion.h1>
          </div>

          <motion.div
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Engineer • UI/UX Designer • AI Engineer
          </motion.div>

          <motion.div
            className="text-lg text-gray-600 dark:text-gray-300 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: [
                  'Building intelligent software with modern tech.',
                  'Crafting intuitive user interfaces and experiences.',
                  'Developing robust AI-driven solutions.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold cursor-pointer shadow-lg shadow-orange-400/30 transition-transform hover:scale-105"
            >
              Hire Me
            </Link>

            <a
              href="/Devindi_CV.pdf"
              download
              className="px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-semibold transition shadow-lg shadow-orange-400/30 hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="group flex flex-col justify-center px-6 py-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300 shadow-sm">
              <span className="text-neutral-900 dark:text-white font-bold text-sm tracking-tight">Open to Full-Time Roles</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">Immediate join potential</span>
            </div>

            <div className="group flex flex-col justify-center px-6 py-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300 shadow-sm">
              <span className="text-neutral-900 dark:text-white font-bold text-sm tracking-tight">Sri Lanka, Colombo</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">Onsite, hybrid, or remote</span>
            </div>

            <div className="group flex flex-col justify-center px-6 py-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/30 transition-all duration-300 shadow-sm">
              <span className="text-neutral-900 dark:text-white font-bold text-sm tracking-tight">End-to-End Delivery</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">From concept to production</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side – 3D Avatar */}
        <div className="relative flex-1 flex justify-center z-10">
          {/* 🔆 Glowing Background Ring Behind Avatar */}
          <div className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full bg-orange-600 opacity-20 blur-2xl animate-pulse z-0" />

          <motion.img
            src={avatar}
            alt="Devindi 3D Avatar"
            className="w-[280px] md:w-[400px] drop-shadow-[0_10px_20px_rgba(255,115,0,0.4)] relative z-10"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Icons */}
          <SiFigma className="absolute text-[#F24E1E] animate-float-slow" style={{ top: '10%', left: '20%' }} size={28} />
          <SiHtml5 className="absolute text-[#E34F26] animate-float-slow" style={{ top: '20%', right: '15%' }} size={28} />
          <SiCss3 className="absolute text-[#1572B6] animate-float-slow" style={{ bottom: '25%', left: '10%' }} size={28} />
          <SiJavascript className="absolute text-[#F7DF1E] animate-float-slow" style={{ bottom: '15%', right: '18%' }} size={28} />
          <SiTailwindcss className="absolute text-[#38BDF8] animate-float-slow" style={{ top: '0%', right: '35%' }} size={28} />
          <SiPython className="absolute text-[#3776AB] animate-float-slow" style={{ top: '40%', left: '5%' }} size={28} />
          <SiNodedotjs className="absolute text-[#339933] animate-float-slow" style={{ bottom: '10%', left: '35%' }} size={28} />
          <SiDocker className="absolute text-[#2496ED] animate-float-slow" style={{ top: '60%', right: '10%' }} size={28} />
          <SiR className="absolute text-[#276DC3] animate-float-slow" style={{ top: '70%', left: '18%' }} size={28} />
          <SiVscodium className="absolute text-[#007ACC] animate-float-slow" style={{ bottom: '5%', right: '5%' }} size={28} />
        </div>
      </div> { /* End Main Content Wrapper */}

      {/* Marquee Section with Modern Backlight */}
      <div className="relative w-screen -mx-6 md:-mx-16 overflow-hidden my-12 md:my-16 pointer-events-none z-10 py-12 bg-white/5 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
        {/* Backlight Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-rose-500/10 to-orange-500/10 blur-[100px] -z-10" />

        <div className="flex flex-col gap-6">
          {/* Label */}
          <div className="flex justify-center mb-4">
            <span className="px-5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/80 backdrop-blur-md text-[10px] font-bold tracking-[0.25em] uppercase">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Core Stack + Delivery Strengths
              </span>
            </span>
          </div>

          {/* Row 1: Right to Left */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              className="flex gap-4 px-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {[...coreStacks, ...coreStacks].map((stack, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shadow-[0_0_8px_rgba(255,115,0,0.5)]" />
                  <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">{stack}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              className="flex gap-4 px-2"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            >
              {[...qualities, ...qualities].map((quality, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shadow-[0_0_8px_rgba(255,115,0,0.5)]" />
                  <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">{quality}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent z-20" />
      </div>

      {/* Float Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
