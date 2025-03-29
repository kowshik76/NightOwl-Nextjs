import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      <nav className="flex  justify-center p-4 font-bold">
        {/* Logo - Left Aligned */}

        {/* Nav Links */}
        <ul className="flex gap-10">
          <Link href="/">
            <li
              className="cursor-pointer relative transition-all duration-500
            after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              Home
            </li>
          </Link>
          <Link href="/Blog">
            <li
              className="cursor-pointer relative transition-all duration-500
            after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              Blog
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="cursor-pointer relative transition-all duration-500
            after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              Contact
            </li>
          </Link>
          <Link href="/about">
            <li
              className="cursor-pointer relative transition-all duration-500
            after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              About
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
