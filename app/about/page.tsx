"use client";
import { motion, useInView, useScroll } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import Brain from "@/app/_components/animated/animated-brain";
import Experience from "../_components/experience";
import Skills from "@/app/_components/skills";
import Biography from "../_components/biography";

const AboutPage = () => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const scrollToSkills = () => {
    if (
      skillRef.current &&
      typeof skillRef.current.scrollIntoView === "function"
    ) {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    if (
      experienceRef.current &&
      typeof experienceRef.current.scrollIntoView === "function"
    ) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="h-screen w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="flex h-full overflow-x-hidden overflow-y-scroll lg:flex"
        ref={containerRef}
      >
        <div className="flex flex-col gap-24 space-y-96 p-4 md:gap-32 lg:w-2/3 lg:pr-0 xl:w-1/2 xl:gap-64 ">
          <div className="flex flex-col justify-center gap-12">
            <Biography />
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className={"items-center justify-center self-center"}
              onClick={scrollToSkills}
              data-testid="scroll-to-skills"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="currentColor" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="currentColor"
                strokeWidth="1"
              />
            </motion.svg>
          </div>
          <div
            className="flex flex-col justify-center gap-12"
            ref={skillRef}
            data-testid="skills-section"
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <Skills />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className={"self-center"}
              onClick={scrollToExperience}
              data-testid="scroll-to-experience"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="currentColor"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="currentColor" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="currentColor"
                strokeWidth="1"
              />
            </motion.svg>
          </div>
          <div ref={experienceRef} data-testid="experience-section">
            <motion.div
              id={"experience-container"}
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex flex-wrap py-3"
            >
              <Experience />
            </motion.div>
          </div>
        </div>
        <motion.div
          style={{ width: "50%", height: "100vh" }}
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="sticky top-0 block w-1/2 overflow-hidden"
        >
          <div className={"h-full w-full"}>
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
