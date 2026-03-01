import React from "react";
import { personalInfo } from "./data/portfolioData";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+201224084982";

  const whatsappMessage =
    "Hello Omar, I would like to discuss a project with you!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=oalash55@gmail.com";

  const cvLink = "/omar_cv.pdf";

  return (
    <section id="contact" className="py-20 bg-transparent border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's <span className="text-purple-500">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            I'm currently available for freelance work or joining a team. The
            fastest way to reach me is directly through WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto backdrop-blur-3xl p-10 rounded-3xl border border-gray-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start a Conversation
            </h3>
            <p className="text-gray-400 mb-8">
              Click the button below to start a chat with me instantly on
              WhatsApp. I usually reply within minutes!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center duration-300 justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/40"
              >
                <FaWhatsapp size={24} />
                Chat on WhatsApp
              </a>

              <a
                href={cvLink}
                download="Omar_Abdalgilil_CV.pdf"
                className="inline-flex items-center justify-center gap-3 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/40"
              >
                <FaDownload size={20} />
                Download CV
              </a>
            </div>
          </div>

          <div className="hidden md:block w-px h-32 bg-gray-800"></div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-medium text-gray-300 mb-2">
              Or connect via
            </h4>
            <div className="flex gap-4">
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 p-4 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all shadow-md hover:shadow-red-500/50"
                title="Send me an Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className=" p-4 duration-300 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500/50"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" p-4 duration-300 rounded-full text-gray-300 hover:text-white border border-gray-700 hover:bg-purple-600 transition-all shadow-md hover:shadow-purple-500/50"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
