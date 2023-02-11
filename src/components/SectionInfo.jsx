import React from "react";
import {
  GiCampfire,
  GiForestCamp,
  GiCampingTent,
  GiCampCookingPot,
} from "react-icons/gi";

const SectionInfo = ({ heading, text }) => {
  return (
    <section className="my-5 py-8 pl-4 bg-[#063a03] h-[auto] sm:h-[380px] relative z-2">
      <h4 className="text-2xl sm:text-4xl sm:pl-4 py-4 font-bold uppercase text-[white]">
        {heading}
      </h4>
      <div className="">
        <p className="subpixel-antialiased text-xl px-4 leading-6 sm:leading-12 sm:text-2xl mb-10 text-[white] ">
          {text}
        </p>
      </div>
      <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 flex justify-between w-[200px] text-2xl sm:text-4xl text-[#ffffff83]">
        <GiForestCamp className="hover:text-[#ffffffdc] smooth-transition" />
        <GiCampfire className="hover:text-[#ffffffdc] smooth-transition" />
        <GiCampingTent className="hover:text-[#ffffffdc] smooth-transition" />
        <GiCampCookingPot className="hover:text-[#ffffffdc] smooth-transition" />
      </div>
    </section>
  );
};

export default SectionInfo;
