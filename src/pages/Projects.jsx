import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";
import practiceProjectsData from "../data/practiceProjectsData.json";
import PracticeProjectCard from "../components/PracticeProjectCard";

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

      {/* Practice Projects Slider */}
      <h2 className="text-2xl font-semibold text-purple-400 mt-8">
        Beginners Friendly Projects
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
          speed={600} // smooth animation
          spaceBetween={30}
        >
          {practiceProjectsData.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <PracticeProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Beautiful Arrows */}
        <button className="swiper-button-prev absolute top-1/2 -left-6 -translate-y-1/2 bg-white hover:bg-purple-100 transition-all duration-300 w-10 h-10 rounded-full shadow-lg z-10 flex items-center justify-center">
          <HiChevronLeft className="text-purple-500 text-2xl" />
        </button>

        <button className="swiper-button-next absolute top-1/2 -right-6 -translate-y-1/2 bg-white hover:bg-purple-100 transition-all duration-300 w-10 h-10 rounded-full shadow-lg z-10 flex items-center justify-center">
          <HiChevronRight className="text-purple-500 text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
