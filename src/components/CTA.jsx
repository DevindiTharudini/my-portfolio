import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-scroll';

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-neutral-900 rounded-[3rem] p-10 md:p-16 overflow-hidden group"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            
            {/* Professional Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[9px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-[0.2em]">Open for New Projects</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900 dark:text-white leading-[1]">
              Let's build something <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 bg-clip-text text-transparent italic">
                remarkable.
              </span>
            </h2>

            {/* High-End Subtext */}
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-medium">
              Elevate your digital presence with enterprise-grade solutions. 
              Whether it's a scalable backend or a high-conversion frontend, I'm here to bring your vision to life.
            </p>

            {/* Refined Button Group */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-orange-500 text-white font-bold rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-all text-sm uppercase tracking-widest"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-2 text-neutral-400 text-[10px] uppercase font-bold tracking-widest">
                <Zap size={14} className="text-orange-500" />
                Response time: &lt; 24h
              </div>
            </div>

          </div>

          {/* Decorative Corner Icons */}
          <Sparkles className="absolute top-10 right-10 text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-700" size={40} />
          <MessageSquare className="absolute bottom-10 left-10 text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-700" size={40} />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
