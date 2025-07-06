import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section id="home" className="scroll-mt-[13vh]">
      <div className="px-10 pb-2 border-b-2 border-purple-500 h-[89.5vh] md:h-[87vh] flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-around items-center">
        <div className="text-left  font-white font-extrabold text-white text-xl md:text-4xl leading-loose">
          <p>Hellow,</p>

          <motion.p>
            I'm
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.01 }}
            >
              <span className="text-purple-500 text-3xl md:text-6xl">
                {" "}
                Vikas Mewara
              </span>
            </motion.span>
          </motion.p>
          <p>Front-End Developer</p>
          <a
            href="#contact-me"
            className="bg-purple-500 text-white text-xl font-bold px-12 py-2 rounded-2xl hover:bg-purple-600 cursor-pointer duration-200 "
          >
            Hit Me Up!
          </a>
        </div>

        <div className="rounded-full overflow-hidden">
          <img
            src="./images/home/swap1.png"
            alt="developer's images"
            className=" md:h-140 h-120 w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
