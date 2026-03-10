import React, { useState, useRef } from "react";
import "./Title.css";

const Title = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 50, y: 50 });

  return (
    <section
      className="
  relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center
  px-6 sm:px-10 lg:px-16 py-12 md:py-16 overflow-hidden
  bg-[#f4faf4] dark:bg-[#0d1f0b]
"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-[#268912]/4 blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[45%] h-[45%] rounded-full bg-[#054502]/4 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-6xl flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        {/* Badge */}
        <div className="animate-enter-1 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/75 dark:bg-white/5 border border-[#268912]/25 dark:border-[#268912]/40 shadow-sm backdrop-blur-md">
          <span className="text-[#054502] dark:text-[#86efac] text-sm font-semibold uppercase tracking-wider">
            Free of charge • For everyone
          </span>
          <span className="text-[#268912] text-lg">🌿</span>
        </div>

        {/* Título */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="animate-enter-2 relative w-full select-none group"
          style={{
            "--mouse-x": `${mousePos.x}%`,
            "--mouse-y": `${mousePos.y}%`,
          }}
        >
          <h1
            className="
  font-['Playfair_Display'] font-black
  text-[clamp(3rem,9vw,8rem)] leading-[0.88] tracking-[-0.025em]
  text-[#054502] dark:text-[#86efac]
  transition-colors duration-700 ease-out
"
          >
            SUMMER
            <span className="block sm:inline"> </span>
            CAMPING
            <span className="block sm:inline"> </span>
            GUIDE
          </h1>
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-50 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),#26891240_0%,transparent_60%)] blur-2xl transition-opacity duration-800 ease-out" />
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),#05450230_0%,transparent_70%)] blur-xl transition-opacity duration-1000 ease-out" />
        </div>

        {/* Subtítulo */}
        <p className="animate-enter-3 font-['Poppins'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#054502]/75 dark:text-[#a8d4a4]/80 max-w-4xl leading-relaxed font-light">
          Your complete guide to responsible summer camping — tips, gear,
          safety, and nature respect
        </p>

        {/* Scroll hint */}
        <div className="animate-enter-4 mt-10 md:mt-16 flex flex-col items-center gap-2 text-[#054502]/35 text-xs uppercase tracking-widest animate-pulse-slow">
          <span>Scroll to explore</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Title;
