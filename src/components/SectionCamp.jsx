import React, { useRef, useEffect, useState } from "react";
import "./SectionCamp.css";

const SectionCamp = ({ reverse, name, img, heading, p1, p2 }) => {
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  const firstDiv = useRef(null);
  const secondDiv = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === firstDiv.current) {
          setIsFirstVisible(entry.isIntersecting);
        } else if (entry.target === secondDiv.current) {
          setIsSecondVisible(entry.isIntersecting);
        }
      });
    });

    myObserver.observe(firstDiv.current);
    myObserver.observe(secondDiv.current);

    return () => {
      myObserver.disconnect();
    };
  }, []);

  return (
    <section
      id={name}
      className={`px-10 mt-[20vh] w-full flex justify-evenly items-center my-[250px] ${
        reverse
          ? "sm:flex-row-reverse flex-col-reverse"
          : "sm:flex-row flex-col"
      }`}
    >
      <div
        ref={firstDiv}
        className={`max-w-[300px] sm:max-w-[400px] relative ${
          isFirstVisible ? (reverse ? "fade-right" : "fade-left") : "opacity-0"
        }`}
      >
        <h2 className="px-auto py-4 text-5xl text-gradient font-bold leading-12">
          {heading}
        </h2>
        <p className="mt-6 text-[17px]  text-[#001400]">{p1}</p>
      </div>
      <div
        ref={secondDiv}
        className={`py-6 flex justify-center flex-col my-10 sm:my-0 relative z-0 items-center  ${
          isSecondVisible ? (reverse ? "fade-left" : "fade-right") : "opacity-0"
        }`}
      >
        <img
          className="smooth-transition hover:brightness-125	hover:scale-105  w-[500px]"
          src={img}
          alt={`${name} related logo`}
        />
        <div className="gradient1 absolute w-[70%] h-[70%] bottom-[10px] z-[-1]" />
        <div className="gradient2 absolute w-[70%] h-[70%] left-[40px] z-[-1]" />
        <div className="gradient3 absolute w-[70%] h-[70%] top-[30px] z-[-1]" />
        <p className="italic max-w-[400] mt-4 font-bold text-[14.5px] text-[#096a04]">
          {p2}
        </p>
      </div>
    </section>
  );
};

export default SectionCamp;
