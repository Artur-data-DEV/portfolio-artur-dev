"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { VscColorMode } from "react-icons/vsc";

const themes = [
  { name: "Light Theme", value: "light" },
  { name: "Dark Theme", value: "dark" },
  { name: "Red Theme", value: "red" },
  { name: "Green Theme", value: "green" },
  { name: "Blue Theme", value: "blue" },
  { name: "Gold Theme", value: "gold" },
];

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(false);
  };

  const changeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        className="rounded-full"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="self-left"
        >
          <VscColorMode size={18} />
        </motion.div>
      </Button>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {themes.map((theme) => (
              <motion.button
                key={theme.value}
                onClick={() => changeTheme(theme.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
              >
                {theme.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
