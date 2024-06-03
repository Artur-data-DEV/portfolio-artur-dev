"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { VscColorMode } from "react-icons/vsc";
import useTranslation from "next-translate/useTranslation";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { t } = useTranslation();
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
    <div className={`relative inline-block text-left ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        className="rounded-full bg-primary hover:bg-slate-400"
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {Object.entries(themeMapping).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => changeTheme(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full rounded-md px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  mounted && theme == key
                    ? "border border-primary bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
                role="menuitem"
              >
                {t(`Tema ${value}`)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
