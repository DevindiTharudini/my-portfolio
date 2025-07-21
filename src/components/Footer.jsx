import React from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-8 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Devindi Tharudini. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/devindi-tharudini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/DevindiTharudini" // 👉 Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.instagram.com/devindi_tharudini/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/devindi.tharudini.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://wa.me/94704958496"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>

          <a
            href="mailto:devinditharudini07@gmail.com"
            className="hover:text-orange-500 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

          <a
            href="tel:+94704958496"
            className="hover:text-orange-500 transition"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
