import React, { useState, useEffect, useRef } from "react";
import { skills } from "./data/portfolioData";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeSubSkill, setActiveSubSkill] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSkillChange = (index) => {
    setActiveSkill(index);
    setActiveSubSkill(null);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="pb-32 pt-10 md:pt-14 md:py-32 lg:py-32 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-20">
          Technical <span className="text-purple-500">Arsenal</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          <div className="flex flex-col gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillChange(index)}
                className={`flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
                  ${
                    activeSkill === index
                      ? "bg-purple-500/10 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                      : "bg-gray-800/40 border-gray-700 hover:border-gray-500 hover:bg-gray-800/60"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-2xl md:text-3xl transition-transform duration-300 ${activeSkill === index ? "scale-110" : ""}`}
                >
                  {skill.icon}
                </div>
                <span className="text-lg md:text-xl font-semibold text-white">
                  {skill.title}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-gray-800/20 border border-gray-700/50 p-5 md:p-8 lg:p-10 rounded-3xl backdrop-blur-sm lg:sticky top-24 h-auto lg:h-137.5 flex flex-col transition-all duration-500 overflow-hidden relative">
            <div
              className={`flex flex-col grow transition-opacity duration-500 ${activeSubSkill ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <div className="text-4xl md:text-6xl mb-4 text-purple-500 transition-transform duration-300">
                {skills[activeSkill].icon}
              </div>

              <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-5 underline decoration-purple-500/30 underline-offset-8 transition-opacity duration-300">
                {skills[activeSkill].title}
              </h3>

              <p className="text-gray-400 text-sm md:text-lg leading-relaxed italic transition-opacity duration-300">
                "{skills[activeSkill].description}"
              </p>

              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6 lg:mt-auto">
                {skills[activeSkill].subSkills.map((sub, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveSubSkill(sub)}
                    className="flex items-center gap-2 md:gap-4 bg-[#0B0F19]/60 p-2.5 md:p-4 rounded-xl border border-gray-700/50 group hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  >
                    <span className="text-lg md:text-2xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {sub.icon}
                    </span>
                    <span className="text-xs md:text-base text-gray-200 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {sub.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {activeSubSkill && (
              <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md z-10 flex flex-col justify-center items-center text-center p-5 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-y-auto">
                <button
                  onClick={() => setActiveSubSkill(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 z-20"
                  aria-label="Close details"
                >
                  ✕
                </button>

                <div className="text-5xl md:text-7xl mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-bounce-slow mt-6 lg:mt-0">
                  {activeSubSkill.icon}
                </div>

                <h4 className="text-xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                  {activeSubSkill.name}
                </h4>

                <div className="w-10 md:w-16 h-1 bg-purple-500 mx-auto mb-4 rounded-full shrink-0"></div>

                <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-sm mb-6">
                  {activeSubSkill.desc}
                </p>

                <button
                  onClick={() => setActiveSubSkill(null)}
                  className="mt-auto lg:mt-6 px-4 py-2 md:px-6 md:py-2 bg-purple-600/20 text-purple-400 border border-purple-500/50 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 text-xs md:text-base shrink-0"
                >
                  Back to Skills
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
