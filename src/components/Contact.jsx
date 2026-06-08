import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionA = motion.a;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hover: { y: -4, scale: 1.01 },
};

const Contact = () => {
  const whatsappNumber = "+201224084982";

  const whatsappMessage =
    "Hello Omar, I would like to discuss a project with you!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=omar.abdelglil.work@gmail.com";

  const cvLink = "/omar_cv.pdf";

  return (
    <MotionSection
      id="contact"
      className="py-16 sm:py-20 bg-transparent border-t border-gray-800"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's <span className="text-teal-300">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            I&apos;m available for freelance work or joining a strong team.
            Let&apos;s create a polished Next.js experience with a smooth,
            modern frontend that looks great on every screen.
          </p>
        </div>

        <MotionDiv
          className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] border border-teal-300/10 bg-[#06111f]/90 p-5 sm:p-8 md:p-10 shadow-[0_35px_90px_rgba(16,185,129,0.12)] overflow-hidden"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <MotionDiv
              className="space-y-6 wrap-break-word"
              variants={cardVariants}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-teal-300/15 bg-teal-300/10 px-4 py-2 text-xs sm:text-sm text-teal-100 w-full sm:w-auto">
                <span className="h-2 w-2 rounded-full bg-teal-300 animate-pulse shrink-0" />
                <span className="truncate">
                  Ready to start your next React / Next.js project.
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  Start a conversation with confidence.
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I build fast, accessible, and visually polished web
                  interfaces. Reach out and let&apos;s discuss how to turn your
                  idea into a strong frontend product.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <MotionA
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-400 px-6 sm:px-8 py-4 text-sm font-semibold text-slate-950 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-400/20 w-full sm:w-auto cursor-pointer"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <FaWhatsapp size={22} /> Chat on WhatsApp
                </MotionA>
                <MotionA
                  href={cvLink}
                  download="Omar_Abdelgilil_CV.pdf"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-teal-300/20 bg-white/5 px-6 sm:px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-teal-300 hover:text-teal-300 w-full sm:w-auto cursor-pointer"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <FaDownload size={20} /> Download CV
                </MotionA>
              </div>
            </MotionDiv>

            <MotionDiv
              className="rounded-3xl sm:rounded-[30px] border border-white/10 bg-[#07131e]/80 p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] w-full"
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3 wrap-break-word">
                Connect directly
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Prefer email, LinkedIn, or GitHub? I&apos;m available on every
                platform and ready to collaborate.
              </p>

              <div className="grid gap-3.5 w-full">
                <MotionA
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-red-600/10 px-5 py-3.5 text-sm text-red-200 transition-colors duration-300 hover:bg-red-600/20 hover:text-white w-full cursor-pointer"
                  whileHover="hover"
                  variants={buttonVariants}
                  title="Send me an Email"
                >
                  <FaEnvelope size={18} /> Email
                </MotionA>
                <MotionA
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-blue-600/10 px-5 py-3.5 text-sm text-blue-200 transition-colors duration-300 hover:bg-blue-600/20 hover:text-white w-full cursor-pointer"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <FaLinkedin size={18} /> LinkedIn
                </MotionA>
                <MotionA
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-purple-600/10 px-5 py-3.5 text-sm text-purple-200 transition-colors duration-300 hover:bg-purple-600/20 hover:text-white w-full cursor-pointer"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <FaGithub size={18} /> GitHub
                </MotionA>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Contact;
