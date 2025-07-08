import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";
import PracticeProjectCard from "../components/PracticeProjectCard";
import projectsData from "../data/projectsData.json";
import practiceProjectsData from "../data/practiceProjectsData.json";
import { FaTimes } from "react-icons/fa";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-[13vh] min-h-screen flex flex-col items-center gap-6 border-b-2 border-purple-500 bg-[#111827] text-white px-6 py-10"
    >
      <h1 className="text-4xl font-bold text-purple-500 text-center">
        Projects
      </h1>

      {/* Major Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Practice Projects Slider */}
      <h2 className="text-2xl font-semibold text-white mt-8">
        20+ Practice Projects
      </h2>

      <div className="w-full max-w-xl relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          speed={600}
          spaceBetween={30}
        >
          {practiceProjectsData.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <PracticeProjectCard project={project} onOpen={openModal} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="swiper-button-prev absolute top-1/2 -left-6 -translate-y-1/2 bg-white hover:bg-purple-100 transition-all duration-300 w-10 h-10 rounded-full shadow-lg z-10 flex items-center justify-center">
          <HiChevronLeft className="text-purple-500 text-2xl" />
        </button>

        <button className="swiper-button-next absolute top-1/2 -right-6 -translate-y-1/2 bg-white hover:bg-purple-100 transition-all duration-300 w-10 h-10 rounded-full shadow-lg z-10 flex items-center justify-center">
          <HiChevronRight className="text-purple-500 text-2xl" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center"
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
                onClick={closeModal}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {selectedProject.name} - Description
              </h3>
              <div className="max-h-[60vh] overflow-y-auto pr-1 text-sm leading-relaxed">
                {selectedProject.description ||
                  "No detailed description provided yet."}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
