import React, { useState, useRef, useEffect } from "react";
import { navLinks, sideBarLinks } from "../consts/variables";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GiPineTree } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [showSections, setShowSections] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLinks = sideBarLinks.filter((link) =>
    link.name.toLowerCase().includes(search.toLowerCase()),
  );

  const buttonRef = useRef(null);
  const submenuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positionSubmenu = () => {
    if (!buttonRef.current || !submenuRef.current) return;
    const btnRect = buttonRef.current.getBoundingClientRect();
    const subWidth = submenuRef.current.offsetWidth;
    let left = btnRect.left + btnRect.width / 2 - subWidth / 2;
    left = Math.max(16, Math.min(left, window.innerWidth - subWidth - 16));
    submenuRef.current.style.left = `${left}px`;
  };

  useEffect(() => {
    if (showSections) positionSubmenu();
    window.addEventListener("resize", positionSubmenu);
    return () => window.removeEventListener("resize", positionSubmenu);
  }, [showSections]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) setShowMobileMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowSections(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (e) => {
    setSearch("");

    e.preventDefault();
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const offset = navbar.offsetHeight + 10;
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
    }
    setShowSections(false);
    setSearch("");
    setShowMobileMenu(false);
  };

  const handleNavClick = (e, url) => {
    if (url.startsWith("#")) {
      handleSmoothScroll(e);
    } else {
      setShowMobileMenu(false);
      setShowSections(false);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-[#054502]/95 backdrop-blur-md shadow-lg"
            : "h-20 bg-[#054502]"
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Izquierda: logo + dropdown */}
          <div className="relative flex items-center gap-3">
            <button
              ref={buttonRef}
              onClick={() => setShowSections((prev) => !prev)}
              className="flex items-center gap-2 group"
              aria-expanded={showSections}
              aria-label="Toggle sections menu"
            >
              <GiPineTree
                className={`text-2xl transition-transform duration-300 ${
                  showSections
                    ? "rotate-12 scale-110 text-[#a3e635]"
                    : "text-[#86efac]/70 group-hover:text-[#a3e635]"
                }`}
              />
              <span
                className={`font-['Playfair_Display'] font-bold transition-colors duration-300 ${
                  scrolled ? "text-base" : "text-lg sm:text-xl"
                } ${showSections ? "text-[#a3e635]" : "text-white group-hover:text-[#a3e635]"}`}
              >
                Camping Guide
              </span>
              {showSections ? (
                <BsChevronUp className="text-[#a3e635] text-sm" />
              ) : (
                <BsChevronDown className="text-white/60 group-hover:text-[#a3e635] text-sm" />
              )}
            </button>

            {/* Dropdown secciones */}
            <div
              ref={submenuRef}
              className={`absolute top-full mt-3 z-50 w-64 rounded-xl bg-[#054502] border border-[#268912]/30 shadow-2xl py-4 transition-all duration-300 ${
                showSections
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className="px-5 pb-3 text-xs uppercase tracking-widest text-[#86efac]/60 font-medium">
                Where to?
              </p>

              {/* Buscador */}
              <div className="px-4 pb-3">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search sections..."
                  className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/30 text-sm outline-none border border-white/10 focus:border-[#268912]/60 transition-colors"
                />
              </div>

              <ul className="flex flex-col">
                {filteredLinks.length > 0 ? (
                  filteredLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        onClick={handleSmoothScroll}
                        className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-white/90 hover:bg-[#268912]/20 hover:text-[#a3e635] transition-colors"
                      >
                        <span className="text-lg text-[#86efac]/70">
                          {link.icon}
                        </span>
                        {link.name}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="px-5 py-3 text-sm text-white/30 italic">
                    No sections found
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Centro: logo imagen */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center">
            <img
              src="/assets/navKids.webp"
              alt="Kids enjoying a campfire"
              className={`transition-all duration-500 drop-shadow-lg cursor-pointer hover:scale-105 ${
                scrolled ? "w-14" : "w-20"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Derecha: dark mode toggle + links desktop */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <MdLightMode className="text-yellow-300 text-lg" />
              ) : (
                <MdDarkMode className="text-white/80 text-lg" />
              )}
            </button>

            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    onClick={(e) => handleNavClick(e, link.url)}
                    className="flex items-center gap-2 text-white/90 hover:text-[#a3e635] text-sm font-medium tracking-wide transition-colors duration-200"
                  >
                    {link.icon && (
                      <span className="text-[#86efac]/70">{link.icon}</span>
                    )}
                    <span className="capitalize">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburguesa mobile */}
            <button
              onClick={() => setShowMobileMenu((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {showMobileMenu ? (
                <FaTimes className="text-white text-xl" />
              ) : (
                <FaBars className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#268912]/40 to-transparent" />
      </nav>

      {/* Menú mobile */}
      {showMobileMenu && (
        <div
          className={`fixed inset-x-0 ${scrolled ? "top-16" : "top-20"} bottom-0 bg-[#054502] z-40 overflow-y-auto`}
        >
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleNavClick(e, link.url)}
                className="flex items-center gap-3 py-4 px-5 text-lg font-medium text-white/90 hover:bg-[#268912]/30 hover:text-[#a3e635] rounded-xl transition-colors"
              >
                {link.icon && (
                  <span className="text-2xl text-[#86efac]/70">
                    {link.icon}
                  </span>
                )}
                <span className="capitalize">{link.name}</span>
              </a>
            ))}
            <div className="mt-4 border-t border-[#268912]/30 pt-4">
              <p className="text-xs uppercase tracking-widest text-[#86efac]/40 font-medium px-5 pb-3">
                Jump to section
              </p>
              {sideBarLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  onClick={handleSmoothScroll}
                  className="flex items-center gap-3 py-3 px-5 text-base font-medium text-white/70 hover:bg-[#268912]/20 hover:text-[#a3e635] rounded-xl transition-colors"
                >
                  <span className="text-xl text-[#86efac]/60">{link.icon}</span>
                  <span className="capitalize">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
