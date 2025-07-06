import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        className="bg-[#1f2937] border border-purple-600 rounded-2xl shadow-lg w-full max-w-sm overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Image with project name overlay */}
        <div className="relative w-full h-44">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover "
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center py-2 rounded-b-md">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4 flex justify-between items-center gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-1 rounded-md"
          >
            <FaExternalLinkAlt /> Live
          </a>

          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm bg-black hover:bg-gray-700 text-white font-semibold px-5 py-1 rounded-md"
          >
            <FaGithub /> Code
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 font-semiboldtext-white px-5 py-1 rounded-md"
          >
            <FaInfoCircle /> Details
          </button>
        </div>
      </motion.div>

      {/* Modal for Description */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1f2937] text-white max-w-2xl w-[90%] p-6 rounded-lg shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {project.name} - Description
              </h3>
              <div className="max-h-[60vh] overflow-y-auto pr-1 text-sm leading-relaxed">
                {project.description || "No detailed description provided yet."}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
