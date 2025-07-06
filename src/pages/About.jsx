import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[13vh] md:h-[87vh] flex flex-col items-center  gap-5 border-b-2 border-purple-500 bg-[#111827] text-white px-6 py-10 md:px-20"
    >
      <motion.h1
        className="text-4xl font-bold text-purple-500 mb-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        About Me
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <p>
          Hello! I'm{" "}
          <span className="font-semibold text-purple-400">Vikas Mewara</span>, a
          passionate and detail-oriented{" "}
          <span className="text-purple-400">Front-End React Developer</span>{" "}
          from India. I specialize in building modern, responsive, and
          interactive web interfaces using React.js, HTML, CSS, JavaScript, and
          Tailwind CSS.
        </p>

        <p>
          I completed my{" "}
          <span className="text-purple-400 font-medium">
            Master of Computer Applications (MCA)
          </span>{" "}
          in 2024 from{" "}
          <a
            href="https://www.sssutms.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline"
          >
            Sri Satya Sai University of Technology and Medical Sciences
          </a>
          .
        </p>

        <p>
          Since October 2024, I've been working as a{" "}
          <span className="text-purple-400">Front-End Intern</span> at{" "}
          <a
            href="https://arpanasoftwaressolution.co.in/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline"
          >
            Arpana Software Solutions
          </a>
          . This internship has provided me with hands-on experience in UI
          development, team collaboration, version control with Git, and working
          on real-world projects.
        </p>

        <p>
          I'm constantly learning and working on personal projects to sharpen my
          skills. My goal is to become a full-time front-end developer and build
          meaningful, user-friendly software solutions.
        </p>

        <p className="text-purple-400 font-medium">
          Thank you for taking the time to learn more about me!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
