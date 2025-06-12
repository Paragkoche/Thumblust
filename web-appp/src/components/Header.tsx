"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window) {
      document.body.style.overflowY = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);
  return (
    <header className="px-5 lg:px-[150px] py-3 w-full border-b border-b-black flex items-center justify-between">
      <div>
        <img src={"/logo.png"} className="h-20 w-20" />
      </div>
      <nav className="hidden lg:block">
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <div
        className="flex w-16 lg:hidden h-16 flex-col gap-1  justify-center items-center border border-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20, display: "initial" }}
        animate={{
          y: isOpen ? 0 : -20,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "initial" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="absolute z-99999999999 bg-background top-24 lg:!hidden w-screen left-0 p-5 border-b border-b-black"
      >
        <nav className="flex flex-col gap-3 uppercase">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
