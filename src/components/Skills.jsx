import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "./data/portfolioData";


const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeSubSkill, setActiveSubSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSubSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeSubSkill]);

  return (
    <MotionSection
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 border-t border-gray-800 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <MotionH2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-20"
          variants={cardVariants}
        >
          Technical <span className="text-teal-300">Arsenal</span>
        </MotionH2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          <MotionDiv className="flex flex-col gap-4 md:gap-5" variants={cardVariants}>
            {skills.map((skill, index) => (
              <motion.button
                key={skill.title}
                onClick={() => setActiveSkill(index)}
                className={`flex items-center gap-4 p-5 rounded-3xl cursor-pointer transition-all duration-300 border text-left ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  activeSkill === index
                    ? "bg-linear-to-r from-teal-400/10 via-cyan-400/10 to-purple-500/10 border-teal-300/30 shadow-[0_20px_70px_rgba(56,189,248,0.12)]"
                    : "bg-white/5 border-white/10 hover:border-teal-300/40 hover:bg-white/5"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{ y: -2 }}
              >
                <div
                  className={`text-3xl transition-transform duration-300 ${activeSkill === index ? "scale-110" : ""}`}
                >
                  {skill.icon}
                </div>
                <div>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    {skill.title}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 hidden md:block">
                    {skill.subSkills.length} tools
                  </p>
                </div>
              </motion.button>
            ))}
          </MotionDiv>

          <MotionDiv className="relative rounded-4xl border border-white/10 bg-[#08101d]/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.5)] min-h-112" variants={cardVariants}>
            <div className="absolute -top-7 right-5 h-24 w-24 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl mb-6 text-teal-300 transition-transform duration-300">
                {skills[activeSkill].icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {skills[activeSkill].title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed italic">
                "{skills[activeSkill].description}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {skills[activeSkill].subSkills.map((sub) => (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubSkill(sub)}
                    className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:bg-teal-400/10 min-w-0"
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                      {sub.icon}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {sub.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {activeSubSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSubSkill(null)}
          />

          <div className="relative z-10 w-full max-w-xl rounded-[36px] border border-teal-300/10 bg-[#04111f] p-8 shadow-[0_20px_80px_rgba(16,185,129,0.18)]">
            <button
              onClick={() => setActiveSubSkill(null)}
              className="absolute right-6 top-6 rounded-full bg-white/5 p-3 text-xl text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              aria-label="Close details"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="mb-6 text-6xl text-teal-300">
                {activeSubSkill.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                {activeSubSkill.name}
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {activeSubSkill.desc}
              </p>
              <div className="mt-8 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-6 py-3 text-sm font-semibold text-teal-200">
                Click anywhere outside this card to close.
              </div>
            </div>
          </div>
        </div>
      )}
    </MotionSection>
  );
};

export default Skills;
