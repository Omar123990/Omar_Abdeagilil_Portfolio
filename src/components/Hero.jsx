import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import photo from "../assets/profile.png";

const heroWords = [
  "Frontend Developer",
  "React & Next.js Developer",
  "Web Application Engineer",
  "JavaScript / TypeScript Expert",
  "Responsive Web Developer",
  "Clean Code Enthusiast",
];

const Hero = () => {
  const [typedText] = useTypewriter({
    words: heroWords,
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1700,
  });

  const MotionDiv = motion.div;

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="hero"
      className="min-h-screen py-20 sm:py-24 overflow-x-hidden flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <MotionDiv
          className="grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <MotionDiv
            className="relative z-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm text-teal-200 font-medium mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-300 animate-pulse" />
              Available for new projects
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight w-full wrap-break-word">
              I build modern web experiences with
            </h1>

            <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-teal-300 via-cyan-300 to-purple-400 leading-tight min-h-16 sm:min-h-22 wrap-break-word">
              <span className="inline">{typedText}</span>
              <Cursor cursorColor="#14b8a6" cursorBlinking />
            </h2>

            <p className="mt-6 sm:mt-8 max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed w-full wrap-break-word">
              {personalInfo.about} My focus is on smooth motion, clear user
              journeys, and interfaces that motivate users to take action.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-teal-400 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-slate-950 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-teal-400/30 w-full sm:w-auto"
              >
                View featured work
                <FaArrowRight size={16} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:border-teal-300 hover:text-teal-300 w-full sm:w-auto"
              >
                <FaGithub className="mr-1 text-lg" /> GitHub profile
              </a>
            </div>

            <div className="mt-10 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              {[
                { label: "Design systems", value: "Modern, reusable UI" },
                { label: "Performance", value: "Fast loading pages" },
                { label: "Reliability", value: "Clean React architecture" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#07111b]/95 p-4 sm:p-5 min-w-0 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-xl"
                >
                  <p className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-[0.24em] text-gray-400 mb-2 sm:mb-3 w-full wrap-break-word">
                    {item.label}
                  </p>
                  <p className="text-white text-base sm:text-lg font-semibold w-full wrap-break-word">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            className="relative mt-8 lg:mt-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute -top-10 -right-4 sm:-top-14 sm:-right-10 h-24 w-24 sm:h-36 sm:w-36 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-purple-500/10 blur-3xl" />

            <motion.div
              className="relative mx-auto max-w-[18rem] sm:max-w-sm overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-linear-to-br from-slate-950/90 to-slate-900/90 p-4 sm:p-6 shadow-xl shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl float-y"
              whileHover={{ y: -6, scale: 1.01, rotate: -1 }}
            >
              <div className="rounded-3xl sm:rounded-4xl bg-[#05101d] p-4 sm:p-6 text-center">
                <div className="relative mx-auto mb-4 sm:mb-6 h-52 w-52 sm:h-72 sm:w-72 overflow-hidden rounded-full border border-white/10 bg-slate-900 shadow-2xl">
                  <img
                    src={photo}
                    alt={personalInfo.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-widest sm:tracking-[0.28em] text-teal-300 mb-2 sm:mb-3">
                    Portfolio art
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {personalInfo.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Modern web visuals and high-impact interface concepts.
                  </p>
                </div>
              </div>
            </motion.div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Hero;
