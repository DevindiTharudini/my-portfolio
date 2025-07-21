import React, { useState } from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/devindi-avatar.jpg';
import realImage from '../assets/real-devindi.jpg';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-24 flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-orange-500">Me</span>
      </motion.h2>

      <motion.div
        className="bg-white/10 border border-white/20 rounded-3xl shadow-xl backdrop-blur-xl max-w-4xl w-full p-10 md:p-14 flex flex-col md:flex-row gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Flip Card */}
        <div className="md:w-1/3 flex justify-center">
          <div
            className="group w-48 h-64 perspective relative cursor-pointer"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border-2 border-orange-500 glow shimmer z-20">
                <img
                  src={avatar}
                  alt="3D Avatar"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded-full font-semibold">
                  3D View
                </span>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-2xl overflow-hidden border-2 border-orange-500 glow z-10">
                <img
                  src={realImage}
                  alt="Real Devindi"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded-full font-semibold">
                  Real Me
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="md:w-2/3 space-y-5 text-gray-300">
          <p className="text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Devindi Tharudini</span>, an aspiring
            <span className="text-orange-400"> UI/UX Designer</span> and
            <span className="text-orange-400"> Frontend Developer</span> from Sri Lanka. I’m passionate about crafting intuitive, visually compelling user experiences.
          </p>
          <p className="text-base">
            I love UI/UX design — creating designs that feel natural and meaningful is what drives me. I enjoy prototyping in Figma and turning ideas into beautiful, usable interfaces.
          </p>
          <p className="text-base">
            I'm currently seeking an <span className="text-orange-400 font-medium">internship opportunity</span> to grow my skills and collaborate with a team of creative minds.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-white">
            <div className="bg-orange-500/10 border border-orange-400 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">10+</p>
              <p>Projects Completed</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-400 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">100%</p>
              <p>Passion for Design</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-400 rounded-xl p-4 text-center col-span-2">
              <p className="text-2xl font-bold">Actively</p>
              <p>Seeking Internship</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flip Styling */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .glow {
          box-shadow: 0 0 20px rgba(255, 115, 0, 0.5);
        }
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
          z-index: 30;
        }
        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
