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
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-purple-300 uppercase tracking-[0.3em] text-sm mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent projects built with{" "}
            <span className="text-purple-500">clarity</span>
            and a strong user focus.
          </h2>
          <p className="text-gray-300 text-base">
            Each project balances performance, clean UX, and a polished visual
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-[28px] border border-gray-800 bg-linear-to-br from-purple-600/10 via-blue-500/10 to-purple-600/10 backdrop-blur-md opacity-0 translate-y-10 transition-all duration-500 ease-out hover:-translate-y-3 hover:border-purple-400/60 hover:shadow-[0_20px_80px_rgba(139,92,246,0.22)]"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className="block relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-56 object-cover object-top opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-purple-950/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-transform duration-200 ease-out"
                    style={{
                      transform:
                        mousePos.activeIndex === index
                          ? `translate(${mousePos.x}px, ${mousePos.y}px)`
                          : "translate(0, 0)",
                    }}
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                  </span>
                </div>
              </a>

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <FaGithub size={20} aria-hidden="true" />
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
            aria-label="View All Projects on GitHub"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30"
          >
            <FaGithub size={22} aria-hidden="true" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
