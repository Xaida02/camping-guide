import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks, sideBarLinks } from "../consts/variables";
import { GiCampfire } from "react-icons/gi";
import { FaBars, FaBandcamp } from "react-icons/fa";
import { BsChevronDoubleDown, BsChevronCompactUp } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const buttonRef = useRef(null);
  const submenuRef = useRef(null);

  const placeSubmenu = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    console.log(buttonRect);
    const submenuRect = submenuRef.current.getBoundingClientRect();
    console.log(submenuRect);
    submenuRef.current.style.left = `${
      buttonRect.left + buttonRect.width / 2 - submenuRect.width / 2
    }px`;
  };

  useEffect(() => {
    placeSubmenu();
    window.addEventListener("resize", placeSubmenu);

    return () => window.removeEventListener("resize", placeSubmenu);
  }, [submenuRef.current]);

  const handleClick = (event) => {
    event.preventDefault();
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop - navbarHeight;
    window.scroll({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed flex bg-[#054502] ] sm:h-[80px] h-[85px] w-full justify-between items-center z-10"
      >
        <div
          onClick={() => setShowLinks((prev) => !prev)}
          className="relative flex justify-around items-center"
        >
          <h1
            className={`cursor-pointer capitalize ${
              !showLinks ? "text-[#fff]" : "text-[#ffff007b]"
            } sm:text-xl text-sm font-bold ml-4 duration-1000`}
          >
            Camping guide
          </h1>
          <button ref={buttonRef} className="absolute top-[30px] left-[50%]">
            <BsChevronDoubleDown
              className={`text-xl scale-x-150 font-bold  ${
                !showLinks
                  ? "fill-gray-100 hover:fill-[#1b7d1b]] ease duration-500"
                  : "fill-[#ffff007b] rotate-180 duration-500"
              }`}
            />
          </button>
          <div
            ref={submenuRef}
            className={`${
              showLinks
                ? "nav-links top-[67px] opacity-100"
                : "top-[-400px] z-0 opacity-0"
            }  w-[150px] sm:w-[200px] absolute z-10 pr-6 smooth-transition opacity-100 rounded-md shadow-2xl py-4 border-[1px] bg-[#f9fff9]`}
          >
            <ul className="capitalize flex flex-col">
              {sideBarLinks.map((link, index) => {
                const { name, id, url, icon } = link;
                return (
                  <li
                    className={`submenu-li py-2 pl-2 smooth-transition border-b border-[#00330020] hover:border-[#2f7d2b59] hover:bg-[white] hover:translate-x-1 hover:shadow-2xl text-[#2f7d2b] hover:text-[#003300] ${
                      index === sideBarLinks.length - 1
                        ? "mb-[0.5px]"
                        : "mb-[2px]"
                    }`}
                    key={id}
                  >
                    <a
                      onClick={handleClick}
                      className="flex items-center justify-around sm:justify-between text-sm sm:text-lg font-semibold text-center pr-2"
                      href={url}
                    >
                      <span>{icon}</span>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <BsChevronCompactUp
              onClick={() => setShowMenu(false)}
              className="text-4xl w-full absolute bottom-[-45px] stroke-1 stroke-[#238200d7] animate-bounce fill-[#238200d7] cursor-pointer"
            />
          </div>
        </div>
        <div className="overflow-hidden w-auto mr-[25px] logo flex items-center justify-center  relative">
          <div className="bg-cover rounded-full flex fire-gradient absolute w-[200px] scale-[0.6] h-[200px] z-0" />
          <img
            className="flex-shrink-0  w-[120px]  relative z-1"
            src="/assets/navKids.png"
            alt="logo of two kids sittings by a fire"
          />
        </div>
        <ul className="sm:flex hidden flex-row">
          {navLinks.map((link, index) => {
            return (
              <li className="capitalize" key={link.id}>
                <a
                  className={
                    "relative nav-link  text-[#FFF] hover:text-[white] duration-500 font-semibold " +
                    (index === navLinks.length - 1 ? " mr-3" : " mr-6")
                  }
                  to={link.url}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden flex mx-[30px] "
        >
          <FaBars
            className={`menu-icon duration-500 smooth-transition text-xl text-dimWhite ${
              showMenu ? "rotate-90 text-[#ffff007b]" : ""
            }`}
          />
        </button>
        <ul
          className={`submenu smooth-transition shadow-2xl top-[90px] bg-[#e6f0e6] absolute flex flex-col justify-around w-[112px] items-start h-[200px] rounded p-2.5 sm:hidden border-b-4 border-[#32cd325c] rounded-b-lg ${
            showMenu ? "right-[20px]" : "right-[-100%]"
          }`}
        >
          {navLinks.map((link) => {
            return (
              <li
                className="capitalize hover:bg-[#2f7d2b] bg-[#cce0cc] w-full pl-[5px] rounded border-[#2f7d2b] border-[2px] flex items-center"
                key={link.id}
              >
                <a
                  className={
                    "relative nav-link text-[14px] duration-500 font-normal hover:text-dimWhite text-[#2f7d2b] p-[4px] font-semibold flex items-center justify-around w-full h-full"
                  }
                  to={link.url}
                >
                  {link.name}
                  {link.icon}
                </a>
                <style>
                  {`
      li:hover & > .nav-link {
        color: [whitesmoke];
      }
    `}
                </style>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
