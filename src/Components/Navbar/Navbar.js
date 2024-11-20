import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, link: "home" },
    { id: 2, link: "qrcode" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-white shadow-lg text-black fixed px-4 z-50">
      <div>
        <h1 className="text-5xl font-signature">
          My<span className="text-2xl text-blue-600">+ WEBB</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navLinks.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy
              activeClass="text-blue-600 font-bold"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={36} /> : <FaBars size={36} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-98 bg-gradient-to-b from-blue-950 to-blue-300 text-gray-300">
          {navLinks.map(({ link, id }) => (
            <li
              key={id}
              className="border-blue-50 px-4 cursor-pointer capitalize py-4 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
