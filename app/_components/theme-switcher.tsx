"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { VscColorMode } from "react-icons/vsc";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const themeMapping: Record<string, string> = {
    light: "Default",
    "dark-classic": "Dark",
    tangerine: "Tangerine",
    "dark-tangerine": "Tangerine (dark)",
    mint: "Mint",
    "dark-mint": "Mint (dark)",
  };
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div className={`relative inline-block ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        className="rounded-full bg-primary hover:bg-muted-foreground"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="self-left text-primary-foreground "
        >
          <VscColorMode size={18} />
        </motion.div>
      </Button>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute right-1 top-16 z-30 mt-3 w-48 origin-top-right rounded-md bg-primary-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            role="none"
          >
            {Object.entries(themeMapping).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => changeTheme(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative block w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  theme === key
                    ? "border border-primary bg-primary text-primary-foreground"
                    : "bg-primary-foreground text-primary"
                }`}
                role="menuitem"
              >
                <span className="text-current">{value}</span>
                <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-primary to-primary-foreground opacity-20"></div>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-end pr-4 text-primary-foreground">
                  {theme === key && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4"
                    >
                      <path
                        fill="none"
                        stroke="primary"
                        strokeWidth="2"
                        d="M3 3l18 18M21 3L3 21"
                      />
                    </svg>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
