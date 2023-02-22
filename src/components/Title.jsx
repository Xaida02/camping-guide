import React, { useState, useRef } from "react";
import "./Title.css";

const initialMousePosition = { x: 0, y: 0 };

const Title = () => {
  const [mousePos, setMousePos] = useState(initialMousePosition);

  const animatedContainer = useRef(null);

  const handleMouseMove = (e) => {
    let event = e.nativeEvent;
    const elem = animatedContainer.current;

    const newX = (event.offsetX / elem.clientWidth) * 100;
    const newY = (event.offsetY / elem.clientHeight) * 100;
    const newMousePos = {
      x: newX,
      y: newY,
    };

    setMousePos(newMousePos);
  };

  const handleMouseOut = () => {
    setMousePos(initialMousePosition);
  };

  return (
    <section className="h-auto lg:h-[74vh] mt-[100px] sm:h-[80vh] px-10 flex items-center">
      <div className="m-auto m-w-[800px] w-full text-center flex-col justify-center">
        <p className="font-semibold uppercase md:py-6 p-2 text-[#11770c] drop-shadow-lg">
          free of charge and for everyone
        </p>
        <div
          ref={animatedContainer}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={{
            "--maskX": mousePos.x,
            "--maskY": mousePos.y,
          }}
          className="smooth-transition relative w-auto h-auto flex justify-center"
        >
          <h1 className="title-original smooth-transition text-4xl text-[#0b8404] font-bold md:text-7xl sm:text-6xl relative">
            SUMMER CAMPING <br /> GUIDE
          </h1>
          <h1 className="smooth-transition title-clone absolute text-4xl text-[#36ff2b] font-bold md:text-7xl sm:text-6xl">
            SUMMER CAMPING <br /> GUIDE
          </h1>
        </div>
        <div>
          <p className="md:text-4xl sm:text-2xl py-2 text-xl text-[#054502c9] font-[Roboto] m-auto drop-shadow-lg">
            We will teach you how to survive!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
