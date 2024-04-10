import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import logo from "@/assets/logo.png";
function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 bg-white shadow-lg">
      <div className="flex items-center">
        <Link href="/" className="w-28 sm:w-32 ml-5 mt-3">
          <Image
            src={logo}
            alt="Logo"
            className="object-cover w-20 h-10 rounded-full"
            width={80}
            height={50}
          />
        </Link>
      </div>
      <Navlinks />
    </nav>
  );
}

export default Navbar;
