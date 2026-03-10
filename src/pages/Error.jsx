import React from "react";
import { GiCampfire, GiPineTree } from "react-icons/gi";

const Error = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-10 text-center bg-[#f4faf4] dark:bg-[#0d1f0b]">
      {/* Iconos decorativos */}
      <div className="flex items-center gap-4 text-[#268912]/30 dark:text-[#268912]/20 text-5xl">
        <GiPineTree />
        <GiCampfire />
        <GiPineTree />
      </div>

      {/* 404 */}
      <h1 className="font-['Playfair_Display'] font-black text-[clamp(6rem,20vw,14rem)] leading-none text-gradient">
        404
      </h1>

      {/* Mensaje */}
      <div className="flex flex-col gap-3 max-w-md">
        <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#054502] dark:text-[#86efac]">
          You got lost in the forest
        </h2>
        <p className="text-[#054502]/60 dark:text-[#a8d4a4]/60 text-base leading-relaxed font-light">
          This page doesn't exist — but the campfire is still burning back{" "}
          <a className="font-semibold" href="/">
            home
          </a>
          .
        </p>
      </div>

      {/* Botón */}
      <a
        href="/"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#054502] text-white font-semibold hover:bg-[#268912] transition-colors duration-300 shadow-lg hover:shadow-xl mt-2"
      >
        <GiCampfire />
        Back to the guide
      </a>
    </main>
  );
};

export default Error;
