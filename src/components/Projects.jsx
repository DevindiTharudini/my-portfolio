import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Figma, Video, ExternalLink } from "lucide-react";
import Modal from "react-modal";

import stylora from "../assets/Stylora.png";
import medicaid from "../assets/medicaid.png";
import greenstay from "../assets/greenstay.png";
import greenpass from "../assets/greenpass.png";
import elephantpulse from "../assets/elephantpulse.png";

const projects = [
  {
    title: "StudyShot – Adaptive Learning",
    description: "A personalized AI-based e-learning system that adapts quizzes and content based on student performance.",
    image: "/videos/studyyshot.mp4",
    isVideo: true,
    github: "https://github.com/DevindiTharudini/studyshot",
    figma: "https://www.figma.com/design/Rc8uMNEm3efg3qWPzqfbUR/STUDYSHOT?node-id=0-1",
    demo: "https://example.com/demo1",
  },
  {
    title: "Stylora – Ecommerce Web App",
    description: "A full-stack fashion e-commerce platform with real-time chat, cart, and secure login.",
    image: stylora,
    github: "https://github.com/Plymouth-University/coursework-group_96",
    figma: "https://www.figma.com/design/UclXZ39NDctqUP8rNgBAxN/Anvogue---Multipurpose-eCommerce-Figma-Template?node-id=5270-8620",
    demo: "https://example.com/demo2",
  },
  {
    title: "Elephant Pulse – Wildlife Safety App",
    description: "An IoT-based platform using sensors and image processing to prevent train-elephant collisions.",
    image: elephantpulse,
    figma: "https://www.figma.com/design/EQMJtPPGIRQjIRCPk4d5hE/Elephant-pulse?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo3",
  },
  {
    title: "GreenStay – Student Accommodation Portal",
    description: "A web platform helping students search and manage accommodation efficiently.",
    image: greenstay,
    figma: "https://www.figma.com/design/NIOyFH6E77TAlGR1OeE9Yi/Untitled?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo4",
  },
  {
    title: "GreenPass – Event Ticketing App",
    description: "A mobile app for browsing university events, ticket booking, and real-time validation.",
    image: greenpass,
    figma: "https://www.figma.com/design/qgwKBiAxU3iL1JVmogHVmq/Green-pass-tickets?node-id=0-1",
    github: "https://github.com/example",
    demo: "https://example.com/demo5",
  },
  {
    title: "Medicaid – Medicine Finder App",
    description: "A location-based app for finding nearby pharmacies, medicine availability, and blood donors.",
    image: medicaid,
    figma: "https://www.figma.com/design/RlhQZPMWVVqFvIwts8UVSx/Anvogue---Multipurpose-eCommerce-Figma-Template?node-id=5270-8620",
    github: "https://github.com/example",
    demo: "https://example.com/demo6",
  },
  {
    title: "Purple Palace – 3D Furniture Web",
    description: "An immersive 3D e-commerce platform to visualize furniture in a virtual room before buying.",
    image: "/videos/purplepalace.mp4",
    isVideo: true,
    demo: "https://example.com/demo7",
    github: "https://github.com/example",
    figma: "https://www.figma.com/design/example",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-24 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-orange-500">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden border border-orange-400 bg-white/5 backdrop-blur-md group shadow-[0_0_20px_#f97316aa] hover:shadow-[0_0_35px_#f97316] transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              {project.isVideo ? (
                <video
                  src={project.image}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <Github className="text-white hover:text-orange-400 transition" />
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Figma"
                    >
                      <Figma className="text-white hover:text-orange-400 transition" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <ExternalLink className="text-white hover:text-orange-400 transition" />
                    </a>
                  )}
                  {project.isVideo && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      title="Preview"
                    >
                      <Video className="text-white hover:text-orange-400 transition" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            isOpen={true}
            onRequestClose={() => setSelectedProject(null)}
            className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
            overlayClassName="overlay"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-black p-4 rounded-xl max-w-3xl w-full"
            >
              <video
                src={selectedProject.image}
                controls
                autoPlay
                className="w-full rounded-md"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
