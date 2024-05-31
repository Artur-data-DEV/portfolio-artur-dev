"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    toggleDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <FaMoon size={24} />
      </Button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <motion.button
              onClick={() => changeTheme("light")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
              role="menuitem"
            >
              Light Theme
            </motion.button>
            <motion.button
              onClick={() => changeTheme("dark")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
              role="menuitem"
            >
              Dark Theme
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
