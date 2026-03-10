import React from "react";
import {
  GiCampfire,
  GiForestCamp,
  GiCampingTent,
  GiCampCookingPot,
} from "react-icons/gi";

const icons = [GiForestCamp, GiCampfire, GiCampingTent, GiCampCookingPot];

const SectionInfo = ({ heading, text, className = "" }) => {
  return (
    <section className={`relative my-16 sm:my-20 lg:my-24 ${className}`}>
      <div
        className="
          relative overflow-hidden 
          bg-[#054502]
          px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-20
          border border-[#268912]/20 shadow-xl
        "
      >
        {/* Extremely subtle ambient glow */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#268912]/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 lg:gap-10">
          {/* Decorative line + label */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[#268912] rounded-full" />
            <span className="text-[#86efac]/60 text-xs uppercase tracking-widest font-medium">
              Info
            </span>
          </div>

          <h4
            className="
              font-['Playfair_Display'] font-bold
              text-3xl sm:text-4xl lg:text-5xl
              leading-tight tracking-tight
              text-white
            "
          >
            {heading}
          </h4>

          <p
            className="
              font-['Poppins'] text-base sm:text-lg lg:text-xl
              text-white/90 leading-relaxed font-light max-w-3xl
            "
          >
            {text}
          </p>
        </div>

        {/* Subtle footer icons – fewer, smaller, centered */}
        <div className="relative z-10 flex justify-center gap-8 sm:gap-12 mt-10 opacity-30">
          {icons.slice(0, 4).map((Icon, i) => (
            <Icon key={i} className="text-2xl sm:text-3xl text-[#86efac]" />
          ))}
        </div>
      </div>

      {/* Very subtle bottom separator */}
      <div className="h-px w-full mt-2 bg-gradient-to-r from-transparent via-[#268912]/30 to-transparent" />
    </section>
  );
};

export default SectionInfo;
