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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 bg-black text-white px-6 md:px-16 py-20 overflow-hidden">

      {/* 🔆 Background Glow Behind Avatar */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-orange-500 opacity-20 blur-3xl top-40 right-0 pointer-events-none z-0" />

      {/* Left Side */}
      <div className="flex-1 z-10 space-y-6">
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-orange-500 font-semibold">Devindi Tharudini</span>
        </motion.p>

        <motion.h1
          className="text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          UI/UX Designer <span className="text-orange-500">&</span><br /> Frontend Developer
        </motion.h1>

        <motion.div
          className="text-lg text-gray-300 max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter
            options={{
              strings: [
                'Passionate about crafting smooth user experiences.',
                'Lover of clean UI and powerful frontend code.'
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
          className="flex gap-6 mt-6"
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
