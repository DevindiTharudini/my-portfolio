import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  ExternalLink,
  SortAsc,
  SortDesc,
  Linkedin,
  GraduationCap,
  Briefcase,
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
    category: "LinkedIn Learning",
    thumb: linkedinThumb,
  },
  {
    title: "Python Programming",
    issuer: "University of Moratuwa",
    date: "2024",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=sD9CXRAlLA",
    category: "Programming",
    thumb: moratuwaThumb,
  },
  {
    title: "Design Thinking",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/223ba38e61327cef1cc36df12bcf68a52585827d1660ed3aefa22ae7bf22cb30",
    category: "LinkedIn Learning",
    thumb: linkedinThumb,
  },
  {
    title: "Industry Exposure",
    issuer: "University Program",
    date: "2024",
    link: "https://example.com",
    category: "Other",
    thumb: industryThumb,
  },
];

const categoryIcons = {
  "LinkedIn Learning": <Linkedin className="text-orange-400" size={18} />,
  Programming: <GraduationCap className="text-orange-400" size={18} />,
  Other: <Briefcase className="text-orange-400" size={18} />,
};

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const categories = ["All", ...new Set(certificates.map((c) => c.category))];

  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "title"
      ? a.title.localeCompare(b.title)
      : b.date.localeCompare(a.date)
  );

  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-24"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-orange-500">Certificates</span>
      </motion.h2>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-md ${
              selectedCategory === cat
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40"
                : "bg-white/10 text-gray-300 border border-white/20 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {cat}
          </motion.button>
        ))}
        <button
          onClick={() =>
            setSortBy((prev) => (prev === "title" ? "date" : "title"))
          }
          className="ml-4 px-3 py-2 rounded-full text-xs flex items-center gap-1 border border-orange-400 text-orange-400 hover:bg-orange-500/10"
        >
          {sortBy === "title" ? <SortAsc size={16} /> : <SortDesc size={16} />} Sort
        </button>
      </div>

      {/* Certificate Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((cert, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            className="w-full"
          >
            <div className="relative w-full h-80 [perspective:1000px] group">
              <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl p-5 shadow-2xl [backface-visibility:hidden] flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold text-lg">
                    {categoryIcons[cert.category]} {cert.title}
                  </div>
                  <p className="text-sm text-gray-300">
                    <span className="text-white font-medium">Issuer:</span> {cert.issuer}
                    <br />
                    <span className="text-white font-medium">Year:</span> {cert.date}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-300 font-medium">
                    #{cert.category.replace(/ /g, "")}
                  </span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex flex-col items-center justify-center bg-gray-950 border border-orange-500 p-4">
                  <img
                    src={cert.thumb}
                    alt="Certificate"
                    className="w-full h-40 object-cover rounded-xl mb-4 border border-white/10"
                  />
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> View Certificate
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
