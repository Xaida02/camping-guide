import React from "react";

const SectionInfo = ({ heading, text }) => {
  return (
    <>
      <div className="my-5 py-8 pl-4 bg-[#063a03] h-[auto] sm:h-[380px] relative z-2">
        <h4 className="text-2xl sm:text-4xl sm:pl-4 py-4 font-bold uppercase text-[white]">
          {heading}
        </h4>
        <div className="">
          <p className="text-xl px-4 leading-6 sm:leading-12 sm:text-2xl mb-10 text-[white] ">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionInfo;
