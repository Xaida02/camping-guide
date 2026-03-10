import React, { useState, useEffect } from "react";
import { BsChevronCompactUp } from "react-icons/bs";

const ScrollTop = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTopButton(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-6 right-6
        flex justify-center items-center
        w-11 h-11
        rounded-full
        bg-[#054502] border border-[#39791888]
        text-white
        shadow-[0px_5px_20px_5px_rgba(0,0,0,0.45)]
        animate-bounce
        transition-opacity duration-300
        hover:brightness-125 hover:scale-110
        ${showBackToTopButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <BsChevronCompactUp size={26} />
    </button>
  );
};

export default ScrollTop;
