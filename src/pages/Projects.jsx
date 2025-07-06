import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";

const Projects = () => {
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
    </section>
  );
};

export default Projects;
