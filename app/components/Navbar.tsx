"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-5 pt-[52px] lg:px-[60px] xl:px-[100px]">
      <Logo />

      <div className="lg:hidden mb-[10px]">
        <button
          onClick={toggleMenu}
          className="text-[30px] text-[#0A2640] focus:outline-none"
        >
          &#8801;
        </button>
      </div>

      <ul
        className={`lg:flex items-center gap-8 pt-5 ${
          isMenuOpen
            ? "flex flex-col absolute top-[155px] left-0 right-0 bg-white"
            : "hidden"
        }`}
      >
        <li>
          <Link className="text-[16px] font-semibold text-[#0A2640]" href={"#"}>
            Product
          </Link>
        </li>
        <li>
          <Link className="text-[16px] font-semibold text-[#0A2640]" href={"#"}>
            Services
          </Link>
        </li>
        <li>
          <Link className="text-[16px] font-semibold text-[#0A2640]" href={"#"}>
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-[16px] font-bold text-[#0A2640] border-2 border-[#0A2640] rounded-[24px] px-[20px] py-[8px]"
            href={"#"}
          >
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
