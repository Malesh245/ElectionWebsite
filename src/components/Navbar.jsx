import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 border-b-2 shadow-lg">
      <nav className="flex items-center justify-between py-6">
        <Link
          to="/"
          className="flex justify-between items-center gap-2 text-black"
        >
          <img src={logo} alt="Shaurya Logo" className="w-8" />
          <span className="text-lg font-bold">SHAURYA</span>
        </Link>
        <ul className="flex gap-4">
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
