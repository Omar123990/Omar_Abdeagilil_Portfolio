import { motion } from "framer-motion";

const MotionDiv = motion.div;
import route from '../assets/Route_Frontend.png';
const RouteAcademy = () => {
  return (
    <div
      id="route-academy"
      className="py-20 bg-[#050816] border-t border-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <MotionDiv
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.36em] text-teal-300">
              Learning Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My Frontend path at Route Academy
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I studied Frontend at Route Academy, where I built a strong base
              in modern web development, responsive design, and real-world
              project thinking.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal-300">•</span>
                Hands-on projects and practical UI implementation.
              </li>
              <li className="flex gap-3">
                <span className="text-teal-300">•</span>
                Strong understanding of React, layout, and user experience.
              </li>
              <li className="flex gap-3">
                <span className="text-teal-300">•</span>A solid foundation for
                creating polished frontend products.
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            className="rounded-4xl border border-teal-400/20 bg-linear-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={route}
              alt="Route Academy Frontend learning illustration"
              className="h-auto w-full rounded-3xl object-cover"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default RouteAcademy;
