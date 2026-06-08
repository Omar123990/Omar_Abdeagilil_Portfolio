import React, { useRef } from "react";
import { personalInfo, projects } from "./data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectCardsRef = useRef([]);

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-300 mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projects crafted for performance, polish, and product value.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Discover real applications with clean interfaces, strong visuals,
            and a modern frontend foundation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#06111e]/95 shadow-[0_25px_80px_rgba(15,23,42,0.35)] min-w-0 transition-transform duration-400 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-teal-300/20"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="block overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="relative z-10 p-6">
                  <span className="inline-flex rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                    {index === 0 ? "Featured" : "Project"}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal-300/10 bg-teal-300/10 px-3 py-1 text-[11px] font-medium text-teal-200 max-w-full wrap-break-word"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="border-t border-white/10 p-6 bg-[#07111d]/95 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  <FaGithub aria-hidden="true" /> View code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-3 text-sm font-semibold text-teal-200 transition-all duration-300 hover:bg-teal-300/20 hover:text-white"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live demo
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-teal-300/30 bg-slate-950/90 px-8 py-4 text-sm font-semibold text-teal-200 transition-all duration-300 hover:border-teal-300 hover:bg-teal-400/10 hover:text-white"
          >
            <FaGithub size={18} aria-hidden="true" /> Explore more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
