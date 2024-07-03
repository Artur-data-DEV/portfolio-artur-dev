"use client";
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleChar = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const splitter = new GraphemeSplitter();
  const parts = text.split("|br|");

  return (
    <div
      className={
        "mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center"
      }
    >
      <motion.h1
        className={`inline-block w-full text-left font-bold text-current ${className} duration-300 ease-in-out`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {parts.map((part, partIndex) => (
          <span key={"part" + partIndex}>
            {splitter.splitGraphemes(part).map((char, charIndex) => (
              <motion.span
                key={char + "-" + charIndex}
                className={"inline-block"}
                variants={singleChar}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {partIndex < parts.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
