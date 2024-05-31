"use client";
import { useEffect, useRef, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener,
      );
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/about", title: "Sobre" },
    { href: "/skills", title: "Skills" },
    { href: "/projects", title: "Projetos" },
    { href: "/contact", title: "Contato" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com", icon: <FaInstagram size={24} /> },
    {
      href: "https://www.github.com/Artur-data-DEV",
      icon: <FaGithub size={24} />,
    },
    {
      href: "https://www.linkedin.com/in/artur-campos-09243b303/",
      icon: <FaLinkedin size={24} />,
    },
    {
      href: "https://wa.me//556192835145?text=Vamos%20falar%20de%20codigo%20👨🏽‍💻",
      icon: <FaWhatsapp size={24} />,
    },
  ];

  return (
    <header className="flex w-full items-center justify-between bg-current px-4 py-4 font-medium text-current">
      <div className="flex w-full items-center justify-between">
        <nav className="hidden space-x-4 sm:flex">
          {navLinks.map((link) => (
            <CustomLink key={link.href} href={link.href} title={link.title} />
          ))}
        </nav>
        <div className="absolute left-1/2 top-2 -translate-x-1/2 transform sm:static sm:translate-x-0">
          <Logo />
        </div>
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="ml-10 flex items-center">
        <ThemeSwitcher className="hidden sm:block" />
        <motion.button
          className="text-white sm:hidden"
          onClick={toggleNavbar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            className={`fixed bottom-0 left-0 top-0 z-10 h-screen w-64 bg-gray-900 p-4 text-white sm:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            animate={"open"}
            variants={variants}
            initial={"closed"}
            exit={"closed"}
          >
            <motion.ul
              className="flex flex-col space-y-4"
              initial={"hidden"}
              animate="visible"
              exit="hidden"
              variants={navList}
            >
              <h2 className="self-center text-xl">Menu</h2>
              {navLinks.map((link, index) => (
                <motion.li key={index} variants={navItem}>
                  <CustomLink
                    key={link.href}
                    href={link.href}
                    title={link.title}
                  />
                </motion.li>
              ))}
              <ThemeSwitcher />
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
