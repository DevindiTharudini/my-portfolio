import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, CheckCircle } from "lucide-react";
import Typewriter from "typewriter-effect";

// Assets
import avatar from "../assets/chat-avatar.jpg";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import whatsappIcon from "../assets/whatsapp.png";

// Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/xqalkqva";

const Contact = () => {
  const [popup, setPopup] = useState("");
  const [success, setSuccess] = useState(false);

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000);
  };

  const handleFormSubmit = (e) => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-24 py-20 bg-black text-white overflow-hidden"
    >
      {/* ✅ Success popup with blur */}
      <AnimatePresence>
        {success && (
          <motion.div
            key="success-popup"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 border border-white/20 text-white px-8 py-6 rounded-xl shadow-xl text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CheckCircle className="text-green-400 mb-2 mx-auto" size={40} />
              <h3 className="text-lg font-semibold">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-300 mt-1">I'll get back to you soon 😊</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            key="link-popup"
            className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {popup}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's <span className="text-orange-500">Connect</span>
      </motion.h2>

      <div className="text-center text-gray-400 text-lg mb-12">
        <Typewriter
          options={{
            strings: ["Got a project idea?", "Want to collaborate?", "Say hello!"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar + Icons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-52 h-52 object-cover rounded-full border-4 border-orange-500 shadow-[0_0_30px_rgba(255,115,0,0.3)]"
          />

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            {[
              { url: "https://www.linkedin.com/in/devindi-tharudini/", icon: linkedinIcon, label: "LinkedIn" },
              { url: "https://www.facebook.com/devindi.tharudini.3/", icon: facebookIcon, label: "Facebook" },
              { url: "https://www.instagram.com/devindi_tharudini/", icon: instagramIcon, label: "Instagram" },
              { url: "https://wa.me/94704958496", icon: whatsappIcon, label: "WhatsApp" },
            ].map(({ url, icon, label }, i) => (
              <button
                key={i}
                onClick={() => {
                  window.open(url, "_blank");
                  showPopup(`Opening ${label}...`);
                }}
                className="hover:scale-110 transition-transform"
                aria-label={label}
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(255,115,0,0.5)] transition-all"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Native HTML Form + hidden iframe */}
        <motion.form
          action={FORM_ENDPOINT}
          method="POST"
          target="hiddenFrame"
          onSubmit={handleFormSubmit}
          className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md space-y-8 shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["name", "email", "message"].map((field, idx) => (
            <div className="relative" key={idx}>
              {field === "message" ? (
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 placeholder-transparent focus:outline-none focus:border-orange-500"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 placeholder-transparent focus:outline-none focus:border-orange-500"
                />
              )}
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition shadow-xl shadow-orange-500/20"
          >
            Send Message <SendHorizonal size={18} />
          </motion.button>
        </motion.form>
      </div>

      {/* Hidden iframe to prevent redirect */}
      <iframe name="hiddenFrame" style={{ display: "none" }} />
    </section>
  );
};

export default Contact;
