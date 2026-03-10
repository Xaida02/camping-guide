import React from "react";
import { GiCampfire, GiPineTree, GiCampingTent } from "react-icons/gi";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const estack = [
  {
    icon: <FaReact className="text-[#054502] dark:text-[#86efac] text-3xl" />,
    name: "React 18",
    desc: "Component-based UI",
  },
  {
    icon: (
      <SiTailwindcss className="text-[#054502] dark:text-[#86efac] text-3xl" />
    ),
    name: "Tailwind CSS",
    desc: "Utility-first styling",
  },
  {
    icon: <FaGithub className="text-[#054502] dark:text-[#86efac] text-3xl" />,
    name: "GitHub",
    desc: "Version control",
  },
];

const About = () => {
  return (
    <main className="w-full pt-[85px] bg-[#f4faf4] dark:bg-[#0d1f0b] min-h-screen">
      {/* Hero */}
      <section className="relative px-6 sm:px-16 lg:px-24 py-24 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-[-60px] left-[-60px] w-[350px] h-[350px] rounded-full bg-green-300/20 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[-40px] right-[-40px] w-[280px] h-[280px] rounded-full bg-green-200/25 blur-[70px] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <div className="w-10 h-1 rounded-full bg-[#268912]" />
          <h1 className="font-['Playfair_Display'] font-black text-5xl sm:text-6xl lg:text-7xl text-[#054502] dark:text-[#86efac] leading-tight">
            About this project
          </h1>
          <p className="text-lg text-[#054502]/70 dark:text-[#a8d4a4]/70 leading-relaxed font-light">
            A comprehensive camping guide built to help outdoor enthusiasts plan
            safer, more responsible adventures in nature.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-[#054502] px-6 sm:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-1 rounded-full bg-[#268912]" />
            <span className="text-[#86efac]/60 text-xs uppercase tracking-widest font-medium">
              What is this
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] font-bold text-3xl sm:text-4xl text-white leading-tight">
            A public camping education resource
          </h2>
          <p className="text-white/75 text-lg leading-relaxed font-light">
            This guide covers everything you need for a safe and enjoyable
            camping trip — from essential gear and proper clothing to food,
            wildlife safety, campfire rules, and even how to handle unexpected
            encounters in the wild.
          </p>
          <p className="text-white/75 text-lg leading-relaxed font-light">
            Presented as a public resource, the content is free for everyone and
            designed to be approachable for first-time campers and seasoned
            outdoor lovers alike.
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-12 text-white/20 text-5xl">
          <GiCampfire />
          <GiPineTree />
          <GiCampingTent />
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-6 sm:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-1 rounded-full bg-[#268912]" />
            <h2 className="font-['Playfair_Display'] font-bold text-3xl sm:text-4xl text-[#054502] dark:text-[#86efac] leading-tight">
              Built with
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {estack.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-[#1a3a16] border border-green-100 dark:border-[#268912]/30 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {item.icon}
                <h3 className="font-bold text-[#054502] dark:text-[#86efac] text-lg">
                  {item.name}
                </h3>
                <p className="text-[#054502]/60 dark:text-[#86efac] text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autor */}
      <section className="bg-[#054502] px-6 sm:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#268912]/40 border-2 border-[#268912] flex items-center justify-center text-4xl">
            🧑‍💻
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="w-10 h-1 rounded-full bg-[#268912] mx-auto sm:mx-0" />
            <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-white">
              Made by Tobías
            </h2>
            <p className="text-white/70 leading-relaxed font-light">
              Frontend developer in training, building projects to grow and
              learn. This guide is part of a personal portfolio focused on clean
              UI and real-world React applications.
            </p>
            <a
              href="https://github.com/Xaida02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#a3e635] hover:text-white transition-colors duration-200 font-medium text-sm mt-1"
            >
              <FaGithub /> github.com/Xaida02
            </a>
          </div>
        </div>
      </section>

      {/* Back home */}
      <section className="px-6 py-16 flex justify-center">
        <a
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#054502] text-white font-semibold hover:bg-[#268912] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          <GiCampfire />
          Back to the guide
        </a>
      </section>
    </main>
  );
};

export default About;
