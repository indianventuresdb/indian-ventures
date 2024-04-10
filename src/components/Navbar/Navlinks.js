"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";

const Navlinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6  manrope ">
      <div className="flex items-center xl:space-x-8 space-x-4 max-md:hidden">
        <Link
          href="/"
          className="text-mblack
           text-lg font-semibold hover:text-gray-500"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-mblack
           text-lg font-semibold hover:text-gray-500"
        >
          About us
        </Link>
        <Link
          href="/technologies"
          className="text-mblack
           text-lg font-semibold hover:text-gray-500"
        >
          Technologies
        </Link>
        <Link
          href="/services"
          className="text-mblack
           text-lg font-semibold hover:text-gray-500"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-mblack
           text-lg font-semibold hover:text-gray-500"
        >
          Contact us
        </Link>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <BsList className="h-8 w-8 text-mblack" />
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-[60%] sm:w-1/3 h-80 bg-white z-50 flex flex-col px-2 pt-10 py-4">
          <Link
            href="/"
            className="text-mblack
             text-lg font-semibold mb-4 hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-mblack
             text-lg font-semibold mb-4 hover:text-gray-500"
          >
            About us
          </Link>
          <Link
            href="/technologies"
            className="text-mblack
             text-lg font-semibold mb-4 hover:text-gray-500"
          >
            Technologies
          </Link>
          <Link
            href="/services"
            className="text-mblack
             text-lg font-semibold mb-4 hover:text-gray-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-mblack
             text-lg font-semibold hover:text-gray-500"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navlinks;
