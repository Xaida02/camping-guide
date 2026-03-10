import React from "react";
import { GiCampfire } from "react-icons/gi";
import { socialLinks } from "../consts/variables";

const footerLinks = {
  Vision: ["Mission", "History", "Team", "Contact"],
  Topics: ["Sustain", "Ecology", "Wildlife", "FAQ"],
  Support: ["Contact", "Center", "Forums", "Help"],
  Legal: ["Terms", "Privacy", "Cookies", "License"],
  Resources: ["Glossary", "Tools", "Related", "Blog", "Maps"],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#054502] text-white">
      {/* Línea decorativa superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Columna marca + descripción + redes */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <GiCampfire className="text-3xl text-green-300" />
              <h2 className="font-bold text-2xl tracking-tight">
                Camping Guide
              </h2>
            </div>

            <p className="text-green-100/70 leading-relaxed text-[15px] max-w-md">
              Your complete guide to responsible camping and enjoying nature.
              Practical tips, destinations, safety, and sustainability all in
              one place.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-5 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200/60 hover:text-green-300 hover:scale-125 transition-all duration-300"
                  aria-label={`Visitar ${link.name || "nuestra red social"}`}
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links organizados */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10">
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category} className="min-w-[120px]">
                <h6 className="text-green-300 font-semibold text-xs uppercase tracking-wider mb-4">
                  {category}
                </h6>
                <ul className="space-y-2.5 text-sm">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-green-100/70 hover:text-green-300 transition-colors duration-200 hover:underline underline-offset-4"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-green-800/30 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-green-100/50 text-xs">
          <div>
            © {new Date().getFullYear()} Camping Guide. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            Made with
            <GiCampfire className="text-green-400/70 text-base" />
            for the lovers of nature.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
