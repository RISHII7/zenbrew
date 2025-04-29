"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navigation from "@/components/Navigation";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]"
          >
            <Image
              src="/assets/logo.svg"
              fill
              alt="Logo"
              className="object-contain"
            />
          </Link>
          {/* Nav trigger button */}
          <button
            onClick={() => setNavActive(!navActive)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
          >
            {/* 1 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            />
            {/* 2 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            />
            {/* 3 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Navigation */}
      <AnimatePresence mode="wait">
        {navActive && <Navigation />}
      </AnimatePresence>
    </header>
  );
};
export default Header;
