"use client";
import { useState } from "react";
import CustomLink from "./custom-link";
import Logo from "./logo";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-4 py-4 font-medium text-white">
      <div className="flex w-full items-center justify-between">
        <nav className="hidden space-x-4 sm:flex">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="Sobre" />
          <CustomLink href="/skills" title="Skills" />
          <CustomLink href="/projects" title="Projetos" />
          <CustomLink href="/contact" title="Contato" />
        </nav>
        <div className="absolute left-1/2 top-2 -translate-x-1/2 transform sm:static sm:translate-x-0">
          <Logo />
        </div>
        <div className="flex space-x-3">
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://www.github.com/Artur-data-DEV"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/artur-campos-09243b303/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://wa.me//556192835145?text=Vamos%20falar%20de%20codigo%20👨🏽‍💻"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={24} />
          </motion.a>
        </div>
      </div>
      <motion.nav
        className="fixed left-0 top-0 h-full w-64 bg-gray-900 p-4 text-white sm:hidden"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className="flex flex-col space-y-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="Sobre" />
          <CustomLink href="/skills" title="Skills" />
          <CustomLink href="/projects" title="Projetos" />
          <CustomLink href="/contact" title="Contato" />
          <ThemeSwitcher />
        </div>
      </motion.nav>
      <motion.button
        className="text-white sm:hidden"
        onClick={toggleNavbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>
    </header>
  );
};

export default Navbar;
