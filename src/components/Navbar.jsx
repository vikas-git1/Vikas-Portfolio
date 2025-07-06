import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact Me"];
  const [isActiveBtn, setIsActiveBtn] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      paddingTop: 11,
      paddingBottom: 10,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="sticky top-0 bg-red-400 z-50 mb-10">
      {/* Laptop Display */}
      <div className="hidden h-[13vh] md:flex justify-between items-center px-8 bg-black">
        <div className={`text-2xl font-bold `}>
          <a href="#home">
            <span className="text-purple-500">Welcome </span>
            <span className="text-white">Visitor</span>
          </a>
        </div>
        <ul className="w-[40%] flex justify-between items-center">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`text-white font-bold cursor-pointer hover:underline hover:text-purple-500 ${
                isActiveBtn === item ? "md:text-purple-600 underline" : ""
              }`}
              onClick={() => {
                setIsActiveBtn(item);
              }}
            >
              <a href={`#${item.toLowerCase().replace(/[" "]/g, "-")}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/images/resume/myResume.pdf"
          download
          className="bg-purple-500 text-white font-bold px-5 py-2 rounded-2xl hover:bg-purple-600 cursor-pointer duration-200 ml-5"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Display */}
      <div className="md:hidden">
        <div className="bg-black flex justify-between items-center text-white p-2">
          <motion.div
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer bg-white text-purple-500 p-1.5 rounded-full hover:text-purple-700"
            whileTap={{ scale: 1.2 }}
          >
            {isOpen ? <MdCancel size={25} /> : <GiHamburgerMenu size={25} />}
          </motion.div>
          <button className="bg-purple-500 px-5 py-1 text-white font-bold text-[14px] rounded-xl cursor-pointer hover:bg-purple-600">
            Download CV
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-black flex flex-col items-center gap-2 overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="text-xl font-bold">
                <span className="text-purple-500">Welcome </span>
                <span className="text-white">Visitor</span>
              </div>
              <ul className="flex flex-col items-center gap-2">
                {navItems.map((item, i) => (
                  <li
                    key={i}
                    className={` cursor-pointer font-bold hover:text-purple-500 ${
                      isActiveBtn === item
                        ? "text-purple-500 underline font-bold"
                        : "text-white"
                    }`}
                    onClick={() => setIsActiveBtn(item)}
                  >
                    <a href={`#${item.toLowerCase().replace(/[" ]/g, "-")}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
