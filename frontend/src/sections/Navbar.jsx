import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="/home" className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a href="/work" className="nav-link">Work</a>
      </li>
      <li className="nav-li">
        <a href="/contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOPen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            <img src="assets/logo.png" alt="logo" className="w-[10rem] h-[5rem] inline-block mr-2" />
          </a>
          <button
            onClick={() => setIsOpen(!isOPen)}
            className="flex cursor-pointer text-netural-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOPen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex ">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOPen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
