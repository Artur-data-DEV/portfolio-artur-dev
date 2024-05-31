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
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-4 py-4 font-medium text-white sm:px-8 lg:px-32">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="text-white sm:hidden">
            <FaBars size={24} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col bg-gray-900 text-white"
        >
          <SheetClose asChild>
            <button className="self-end px-4 py-2">
              <FaTimes size={24} />
            </button>
          </SheetClose>
          <nav className="flex flex-col items-start space-y-4 p-4">
            <CustomLink href="/" title={"Home"} />
            <CustomLink href="/about" title={"Sobre"} />
            <CustomLink href="/skills" title={"Skills"} />
            <CustomLink href="/projects" title={"Projetos"} />
            <CustomLink href="/contact" title={"Contato"} />
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden items-center justify-between space-x-4 sm:flex sm:flex-row">
        <CustomLink href="/" title={"Home"} />
        <CustomLink href="/about" title={"Sobre"} />
        <CustomLink href="/skills" title={"Skills"} />
        <CustomLink href="/projects" title={"Projetos"} />
        <CustomLink href="/contact" title={"Contato"} />
      </nav>
      <nav className="flex items-center justify-center space-x-3 sm:ml-4">
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
      </nav>
      <div className="absolute left-1/2 top-2 -translate-x-1/2 transform">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
