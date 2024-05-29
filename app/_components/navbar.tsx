"use client";
import CustomLink from "./custom-link";
import Logo from "./logo";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-32 py-8 font-medium text-white">
      <nav className="flex items-center justify-between">
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"Sobre"} className="mx-4" />
        <CustomLink href="/skills" title={"Skills"} className="mx-4" />
        <CustomLink href="/projects" title={"Projetos"} className="mx-4" />
        <CustomLink href="/contact" title={"Contato"} className="ml-4" />
      </nav>
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          className="mr-3 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://www.github.com/Artur-data-DEV"
          target="_blank"
          className="mr-3 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="mr-3 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="mr-3 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp size={24} />
        </motion.a>
      </nav>

      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
