import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";
import { FaRocket, FaPalette, FaShieldAlt } from "react-icons/fa";

const MotionDiv = motion.div;

const aboutCards = [
  {
    title: "Fast, polished UI",
    description:
      "I build responsive interfaces that load quickly and feel premium on every screen size.",
    icon: <FaRocket className="text-orange-400" />,
  },
  {
    title: "Design with purpose",
    description:
      "Every section has a clear goal: engage visitors, communicate trust, and drive action.",
    icon: <FaPalette className="text-teal-400" />,
  },
  {
    title: "Reliable delivery",
    description:
      "I focus on clean React code, fast load times, and polished interactions for real projects.",
    icon: <FaShieldAlt className="text-violet-400" />,
  },
];

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="py-20 bg-[#060912] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <MotionDiv
          className="max-w-4xl mx-auto text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.36em] text-teal-300 mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white wrap-break-word">
            A modern portfolio crafted for product-focused web experiences.
          </h2>
        </MotionDiv>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <MotionDiv
            className="space-y-6 text-white"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            <p className="text-gray-300 leading-relaxed text-lg wrap-break-word">
              I&apos;m {personalInfo.name}, a frontend developer who turns ideas
              into polished user experiences. My portfolio showcases thoughtful
              projects, careful interaction details, and a fresh visual style.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg wrap-break-word">
              I work with React, Tailwind, and modern frontend tooling to
              deliver web apps that feel fast, accessible, and memorable.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {aboutCards.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  className="rounded-3xl border border-gray-800 bg-white/5 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/40 hover:bg-white/10 min-w-0"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/80 text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 wrap-break-word">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed wrap-break-word">
                    {item.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <div className="rounded-[36px] border border-teal-500/10 bg-linear-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95 p-8 shadow-xl">
            <div className="rounded-4xl border border-white/10 bg-[#07111b] p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                What I bring to every project
              </h3>
              <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-teal-300">•</span>
                  Clean, reusable React components and maintainable structure.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-300">•</span>
                  Thoughtful information hierarchy that helps users scan fast.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-300">•</span>
                  Smooth animations, accessible buttons, and strong contrast.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
