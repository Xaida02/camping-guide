import React, { useRef, useEffect, useState } from "react";
import "./SectionCamp.css";

const SectionCamp = ({ reverse = false, name, img, heading, p1, p2 }) => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current) {
            setTextVisible(entry.isIntersecting);
          }
          if (entry.target === imageRef.current) {
            setImageVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={name}
      className={`
        relative w-full py-20 sm:py-28 lg:py-36
        bg-[#f4faf4] overflow-hidden
        flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
        items-center justify-between gap-12 lg:gap-16 px-6 sm:px-10 lg:px-16
      `}
    >
      {/* Bloque de texto */}
      <div
        ref={textRef}
        className={`
          w-full lg:w-5/12 max-w-xl flex flex-col gap-6 lg:gap-8
          transition-all duration-900 ease-out
          ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="w-12 h-1 rounded-full bg-[#268912]" />

        <h2
          className="
            font-['Playfair_Display'] font-bold
            text-4xl sm:text-5xl lg:text-6xl
            text-[#054502] leading-tight tracking-tight
          "
        >
          {heading}
        </h2>

        <p className="font-['Poppins'] text-base sm:text-lg leading-relaxed text-[#054502]/80 font-light">
          {p1}
        </p>
      </div>

      {/* Bloque de imagen + caption */}
      <div
        ref={imageRef}
        className={`
          relative w-full lg:w-7/12 max-w-2xl flex flex-col items-center gap-6
          transition-all duration-900 ease-out
          ${imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="relative group w-full">
          {/* Glow verde difuso */}
          <div
            className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-br from-[#268912]/20 to-[#054502]/10
            blur-2xl opacity-0 group-hover:opacity-70
            transition-opacity duration-700 ease-out
            pointer-events-none
          "
          />

          <img
            src={img}
            alt={`${heading} – Guía de camping responsable`}
            className="
              relative z-10 w-full rounded-2xl
              object-cover transition-all duration-500 ease-out
              group-hover:scale-[1.015] 
            "
            loading="lazy"
          />
        </div>

        {p2 && (
          <p
            className="
            font-['Poppins'] italic text-sm sm:text-base
            text-[#054502]/70 text-center max-w-lg leading-relaxed
          "
          >
            {p2}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionCamp;
