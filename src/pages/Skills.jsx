import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
  SiBootstrap,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
const skills = [
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },

  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Git", icon: <SiGit />, color: "text-red-500" },
  { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
  { name: "React Router", icon: <SiReactrouter />, color: "text-red-400" },
  { name: "Java", icon: <FaJava />, color: "text-orange-600" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-[13vh] md:h-[87.5vh] bg-[#111827] text-white px-6 py-10 md:px-20 border-b-2 border-purple-500 flex items-center"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-purple-500 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border border-purple-500 rounded-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-4xl ${skill.color}`}
              >
                {skill.icon}
              </motion.div>
              <p className="text-white font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
