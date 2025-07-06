import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oiak89a", // ✅ Your service ID
        "template_8kfwxql", // ✅ Your template ID
        form.current,
        "pVMBd8mng8ZseOATO" // ✅ Your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset(); // clear the form
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact-me"
      className="scroll-mt-[13vh] md:h-[87.5vh] bg-[#111827] text-white px-6 py-10 md:px-20 border-t-2 border-purple-500 flex items-center"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-4xl font-bold text-purple-500 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          I'm actively looking for Front-End Developer opportunities. Whether
          you have a job, freelance project, or collaboration, feel free to
          reach out.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between gap-10 mt-6">
          {/* Contact Info */}
          <motion.div
            className="space-y-5 md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-purple-400 font-medium">Email</p>
              <a
                href="mailto:vikasmewara.dev@gmail.com"
                className="hover:underline block"
              >
                vikasmewara.dev@gmail.com
              </a>
            </div>
            <div>
              <p className="text-purple-400 font-medium">Phone / WhatsApp</p>
              <p>+91-6264632670</p>
            </div>
            <div>
              <p className="text-purple-400 font-medium">Location</p>
              <p>India (Open to remote & relocation)</p>
            </div>
            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://www.linkedin.com/in/vikas-mewara-059935323/"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-2xl hover:scale-105 transition"
                whileTap={{ scale: 1.1 }}
              >
                <IoLogoLinkedin className="text-blue-500" size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/vikas-git1"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-2xl hover:scale-105 transition"
                whileTap={{ scale: 1.1 }}
              >
                <PiGithubLogoFill className="text-black" size={28} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vikaas_8x"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-2xl hover:scale-105 transition"
                whileTap={{ scale: 1.1 }}
              >
                <FaInstagramSquare className="text-red-500" size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-[#1f2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-[#1f2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-[#1f2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold py-3 px-6 rounded hover:bg-purple-700 transition duration-200 w-fit"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
