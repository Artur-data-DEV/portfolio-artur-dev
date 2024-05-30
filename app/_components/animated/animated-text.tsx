"use client";
import { motion } from "framer-motion";

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
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const parts = text.split("|br|");

  return (
    <div
      className={
        "mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center"
      }
    >
      <motion.h1
        className={`inline-block w-full text-8xl font-bold capitalize text-black ${className} duration-300 ease-in-out`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {parts.map((part, partIndex) => (
          <span key={partIndex}>
            {part.split(" ").map((char, wordIndex) => (
              <motion.span
                key={char + "-" + wordIndex}
                className={"inline-block"}
                variants={singleWord}
              >
                {char}&nbsp;
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
