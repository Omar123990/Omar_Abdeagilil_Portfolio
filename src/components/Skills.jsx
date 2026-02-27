import React, { useEffect, useRef } from "react";
import { skills } from "./data/portfolioData";

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");

          setTimeout(() => {
            if (entry.target) {
              entry.target.style.transitionDelay = "0ms";
            }
          }, 800);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    skillRefs.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      skillRefs.current.forEach((skill) => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-32 bg-transparent border-t border-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Skills & <span className="text-purple-500">Technologies</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="bg-gray-800 border border-gray-700 text-gray-300 px-8 py-4 text-lg rounded-2xl shadow-sm hover:-translate-y-2 hover:border-purple-500 hover:text-purple-400 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-purple-500/50 hover:bg-[#0B0F19]/90 cursor-none opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
