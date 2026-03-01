import quizMasterImg from "../../assets/QuizMaster.png";
import cosmosImg from "../../assets/Cosmos-Dashboard.png";
import lammaImg from "../../assets/Lamma-Social.png";
import adasaImg from "../../assets/Adasa.png";
import clarityImg from "../../assets/Clarity-Digital.png";
import nutriPlanImg from "../../assets/NutriPlan.png";
import whatsfordinnerImg from "../../assets/what's-for-dinner.png";
import portfolioImg from "../../assets/port.png";
import contactHubImg from "../../assets/ContactHub.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaCubes,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFramer,
  SiAntdesign,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const personalInfo = {
  name: "Omar Abdalgilil",
  role: "Frontend Developer",
  about:
    "A passionate Frontend Developer specializing in building modern web applications and exceptional user experiences. I focus on writing clean code, creating responsive designs, and utilizing the latest web technologies.",
  github: "https://github.com/Omar123990",
  email: "oalash55@gmail.com",
  linkedin: "https://www.linkedin.com/in/omar-abdalgilil-7b162b374",
};

export const skills = [
  {
    title: "Frontend Core",
    icon: <SiJavascript className="text-yellow-400" />,
    description:
      "The strong foundational web technologies I use to build robust, high-performance, and clean-coded applications.",
    subSkills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        desc: "The standard markup language used to define the structure and content of web pages.",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
        desc: "The style sheet language used to design and control the visual presentation of the website.",
      },
      {
        name: "JavaScript ES6+",
        icon: <SiJavascript className="text-yellow-400" />,
        desc: "A powerful programming language that enables interactive, dynamic, and complex features on the web.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        desc: "A strongly typed superset of JavaScript that catches errors early and improves code maintainability.",
      },
    ],
  },
  {
    title: "React Ecosystem",
    icon: <FaReact className="text-cyan-400 animate-spin-slow" />,
    description:
      "My primary expertise lies in building complex, interactive web applications using React and efficiently managing application state.",
    subSkills: [
      {
        name: "React.js",
        icon: <FaReact className="text-cyan-400" />,
        desc: "A declarative, efficient, and flexible JavaScript library for building component-based user interfaces.",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux className="text-purple-500" />,
        desc: "The official, opinionated, and standardized tool for managing global application state efficiently.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
        desc: "A powerful React framework for production that enables Server-Side Rendering (SSR) and optimized performance.",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-500" />,
        desc: "A production-ready motion library for React used to create smooth, complex, and highly customizable animations.",
      },
    ],
  },
  {
    title: "CSS Frameworks",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description:
      "Designing modern, highly responsive, and user-friendly interfaces rapidly using industry-standard styling tools.",
    subSkills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
        desc: "A utility-first CSS framework packed with classes that allows for rapid UI building directly in the markup.",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-600" />,
        desc: "A popular, feature-rich CSS framework providing pre-built components for responsive and fast development.",
      },
    ],
  },
  {
    title: "UI Libraries",
    icon: <FaCubes className="text-indigo-400" />,
    description:
      "Leveraging pre-built, highly customizable, and accessible component libraries to accelerate UI development and ensure consistency.",
    subSkills: [
      {
        name: "shadcn/ui",
        icon: <FaCubes className="text-white" />,
        desc: "A collection of beautifully designed, accessible components that you can copy and paste into your apps.",
      },
      {
        name: "HeroUI",
        icon: <FaCubes className="text-blue-400" />,
        desc: "A modern, highly customizable UI component library for building fast, beautiful web interfaces.",
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="text-blue-500" />,
        desc: "An enterprise-class UI design language and React UI library with a set of high-quality components.",
      },
    ],
  },
  {
    title: "Development Tools",
    icon: <FaTools className="text-gray-400" />,
    description:
      "Essential build tools, package managers, and version control systems that streamline my development workflow.",
    subSkills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-white" />,
        desc: "Version control system and collaborative platform for tracking code changes and team collaboration.",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-500" />,
        desc: "A blazing fast, next-generation frontend build tool that provides a leaner development experience.",
      },
      {
        name: "NPM",
        icon: <FaNpm className="text-red-500" />,
        desc: "The default package manager for JavaScript, used to install, share, and manage project dependencies.",
      },
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-500" />,
        desc: "A powerful, lightweight source-code editor with built-in debugging and extensive extension support.",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Lamma Social",
    description:
      "A social media platform for sharing posts and interacting with friends.",
    image: lammaImg,
    liveLink: "https://lamma-app-amber.vercel.app/",
    githubLink: "https://github.com/Omar123990/Lamma-App",
  },
  {
    id: 2,
    title: "QuizMaster",
    description:
      "An interactive trivia challenge application to test general knowledge.",
    image: quizMasterImg,
    liveLink: "https://omar123990.github.io/Quiz-App/",
    githubLink: "https://github.com/Omar123990/Quiz-App",
  },
  {
    id: 3,
    title: "NutriPlan",
    description:
      "A meal planning and recipe discovery app for a healthy wellness journey.",
    image: nutriPlanImg,
    liveLink: "https://omar123990.github.io/Nutriplan---Design/",
    githubLink: "https://github.com/Omar123990/Nutriplan---Design",
  },
  {
    id: 4,
    title: "Adasa",
    description:
      "A photography blog to discover the art of photography and read articles.",
    image: adasaImg,
    liveLink: "https://adasa-nu.vercel.app/",
    githubLink: "https://github.com/Omar123990/adasa",
  },
  {
    id: 5,
    title: "Clarity Digital",
    description:
      "A digital solutions landing page showcasing services and business growth.",
    image: clarityImg,
    liveLink:
      "https://omar123990.github.io/Clarity---Digital-Solutions-Platform/",
    githubLink:
      "https://github.com/Omar123990/Clarity---Digital-Solutions-Platform",
  },
  {
    id: 6,
    title: "Cosmos Dashboard",
    description:
      "A space dashboard displaying real-time data and the astronomy picture of the day.",
    image: cosmosImg,
    liveLink: "https://omar123990.github.io/COSMOS---Space-Dashboard/",
    githubLink: "https://github.com/Omar123990/COSMOS---Space-Dashboard",
  },
  {
    id: 7,
    title: "what'sfordinner",
    description:
      "A meal planning and recipe discovery app for a healthy wellness journey.",
    image: whatsfordinnerImg,
    liveLink: "https://omar123990.github.io/What-s-For-Dinner/",
    githubLink: "https://github.com/Omar123990/What-s-For-Dinner.git",
  },
  {
    id: 8,
    title: "ContactHub",
    description:
      "A contact management application for organizing and managing personal contacts.",
    image: contactHubImg,
    liveLink: "https://omar123990.github.io/ContactHub/",

    githubLink: "https://github.com/Omar123990/What-s-For-Dinner.git",
  },
  {
    id: 9,
    title: "Ahmed Hassan Portfolio",
    description:
      "A portfolio website showcasing the work and skills of Ahmed Hassan.",
    image: portfolioImg,
    liveLink: "https://omar123990.github.io/Personal-Portfolio-2/",
    githubLink: "https://github.com/Omar123990/Personal-Portfolio-2.git",
  },
];
// https://github.com/Omar123990/ContactHub.git
// https://omar123990.github.io/ContactHub/