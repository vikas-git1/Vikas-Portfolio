import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
const PracticeProjectCard = ({ project }) => {
  return (
    <div className="flex md:flex-row flex-col  border-2 border-purple-500 rounded-2xl overflow-hidden w-full shadow-md">
      <div className="h-60 relative">
        <img src={project.image} alt="" className="h-60  w-full object-cover" />
        <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2  text-white md:font-bold font-semibold md:text-2xl text-xl">
          {project.name}
        </h2>
      </div>
      <div className="p-4  flex flex-col   justify-between items-center gap-2">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold md:px-8 md:py-2 px-6 py-1 rounded-md"
        >
          <FaExternalLinkAlt /> Live
        </a>

        <a
          href={project.sourceCode}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm bg-black hover:bg-gray-700 text-white font-semibold md:px-8 md:py-2 px-6 py-1 rounded-md"
        >
          <FaGithub /> Code
        </a>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700  font-semiboldtext-white md:px-8 md:py-2 px-5 py-1 rounded-md"
        >
          <FaInfoCircle /> Details
        </button>
      </div>
    </div>
  );
};

export default PracticeProjectCard;
