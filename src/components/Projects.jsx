import React, { useEffect, useRef, useState } from "react";
import { personalInfo, projects } from "./data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectCardsRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeIndex: null });

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
          }, 1000);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

    setMousePos({ x, y, activeIndex: index });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, activeIndex: null });
  };

  return (
    <section
      id="projects"
      className="py-20 bg-transparent border-t border-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Latest <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="bg-linear-to-r from-purple-600/10 via-blue-500/10 to-purple-600/10 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-500 ease-out opacity-0 translate-y-10 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className="block relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-transform duration-200 ease-out"
                    style={{
                      transform:
                        mousePos.activeIndex === index
                          ? `translate(${mousePos.x}px, ${mousePos.y}px)`
                          : "translate(0, 0)",
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </span>
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30"
          >
            <FaGithub size={22} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
