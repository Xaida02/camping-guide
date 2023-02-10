import React from "react";

const SectionCamp = ({ reverse, name, img, heading, p1, p2 }) => {
  return (
    <section
      id={name}
      className={`px-10 mt-[20vh] w-full flex justify-evenly items-center my-[250px] ${
        reverse
          ? "sm:flex-row-reverse flex-col-reverse"
          : "sm:flex-row flex-col"
      }`}
    >
      <div className="max-w-[300px] sm:max-w-[400px]">
        <h2 className="px-auto py-4 text-5xl text-gradient font-bold leading-12">
          {heading}
        </h2>
        <p className="mt-6 text-[17px]  text-[#001400]">{p1}</p>
      </div>
      <div className=" py-6 flex justify-center flex-col my-10 sm:my-0 relative z-0 items-center">
        <img
          className="smooth-transition hover:brightness-125	hover:scale-105  w-[500px]"
          src={img}
          alt={`${name} related logo`}
        />
        <div className="gradient1 absolute w-[70%] h-[70%] bottom-[10px] z-[-1]" />
        <div className="gradient2 absolute w-[70%] h-[70%] left-[40px] z-[-1]" />
        <div className="gradient3 absolute w-[70%] h-[70%] top-[30px] z-[-1]" />
        <p className="italic max-w-[400] mt-[12px] font-bold text-[14.5px] text-[#096a04]">
          {p2}
        </p>
      </div>
    </section>
  );
};

export default SectionCamp;
