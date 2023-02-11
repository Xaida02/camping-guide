import React from "react";
import { GiCampfire } from "react-icons/gi";
import { socialLinks } from "../consts/variables";

const Footer = () => {
  return (
    <footer className="w-full bg-[#054502] text-gray-100 px-4 py-16 grid lg:grid-cols-3 gap-8">
      <div>
        <h1
          className={`capitalize cursor-pointer w.full sm:text-xl text-sm font-bold ml-4 duration-1000`}
        >
          Camping guide
        </h1>
        <p className="py-4">
          This guide, presented by the United States Government Environment
          Ministry, offers an introduction to its comprehensive, in-person
          program. Led by industry professionals, this program is made available
          to the public at no cost.
        </p>
        <div className="md:w-[75%] my-6 flex justify-between">
          {socialLinks.map((link, i) => (
            <a
              className="cursor-pointer hover:scale-125 smooth-transition :::::::::::::::"
              key={i}
              href={link.url}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div className="text-left">
          <h6 className="font-medium text-[white]">Vision</h6>
          <ul className="text-gray-200">
            <li className="py-2 cursor-pointer text-sm">Mission</li>
            <li className="py-2 cursor-pointer text-sm">History</li>
            <li className="py-2 cursor-pointer text-sm">Team</li>
            <li className="py-2 cursor-pointer text-sm">Contact</li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-[white]">Topics</h6>
          <ul className="text-gray-200">
            <li className="py-2 cursor-pointer text-sm">Sustain</li>
            <li className="py-2 cursor-pointer text-sm">illum</li>
            <li className="py-2 cursor-pointer text-sm">maiores</li>
            <li className="py-2 cursor-pointer text-sm">FAQ</li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-[white]">Support</h6>
          <ul className="text-gray-200">
            <li className="py-2 cursor-pointer text-sm">Contact</li>
            <li className="py-2 cursor-pointer text-sm">Center</li>
            <li className="py-2 cursor-pointer text-sm">Forums</li>
            <li className="py-2 cursor-pointer text-sm">Nami</li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-[white]">Legal</h6>
          <ul className="text-gray-200">
            <li className="py-2 cursor-pointer text-sm">Terms</li>
            <li className="py-2 cursor-pointer text-sm">Privacy</li>
            <li className="py-2 cursor-pointer text-sm">Cookies</li>
            <li className="py-2 cursor-pointer text-sm">IpsuM</li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-medium text-[white]">Resources</h6>
          <ul className="text-gray-200">
            <li className="py-2 cursor-pointer text-sm">Glossary</li>
            <li className="py-2 cursor-pointer text-sm">Tools</li>
            <li className="py-2 cursor-pointer text-sm">Related</li>
            <li className="py-2 cursor-pointer text-sm">lorem</li>
            <li className="py-2 cursor-pointer text-sm">illum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
