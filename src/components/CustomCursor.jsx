import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      if (outlineRef.current) {
        outlineRef.current.animate(
          {
            transform: `translate(${x}px, ${y}px)`,
          },
          { duration: 500, fill: "forwards" },
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-8 h-8 border border-purple-500/50 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-all duration-150 ease-out"
      />
    </>
  );
};

export default CustomCursor;
