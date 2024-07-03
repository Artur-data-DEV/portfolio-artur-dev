"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SkillsPage() {
  const [isSkillsLoaded, setIsSkillsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSkillsLoaded(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex h-full items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5 },
        }}
      >
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{
            scale: isSkillsLoaded ? 1 : 0,
            transition: { delay: 0.7, duration: 0.5 },
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            style={{ background: "white", borderRadius: "50%" }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{
              opacity: isSkillsLoaded ? 0 : 1,
              scale: isSkillsLoaded ? 1 : 0,
              transition: { duration: 0.5 },
            }}
          />
          <motion.h1
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isSkillsLoaded ? 1 : 0,
              y: isSkillsLoaded ? 0 : -10,
              transition: { delay: 0.9, duration: 0.5 },
            }}
          >
            Skills
          </motion.h1>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isSkillsLoaded ? 1 : 0,
            scale: isSkillsLoaded ? 1 : 0,
            transition: { delay: 1.2, duration: 0.5 },
          }}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isSkillsLoaded ? 1 : 0,
                scale: isSkillsLoaded ? 1 : 0,
                transition: { delay: 1.5 + index * 0.1, duration: 0.5 },
              }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                style={{
                  background: "white",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                }}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: isSkillsLoaded ? 0 : 1,
                  transition: { duration: 0.5 },
                }}
              />
              <motion.div
                className="flex items-center justify-center"
                style={{
                  background: "white",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isSkillsLoaded ? 1 : 0,
                  scale: isSkillsLoaded ? 1 : 0,
                  transition: { duration: 0.5 },
                }}
              >
                <motion.h1
                  className="text-3xl font-bold text-black"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isSkillsLoaded ? 1 : 0,
                    scale: isSkillsLoaded ? 1 : 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  Skill
                </motion.h1>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
