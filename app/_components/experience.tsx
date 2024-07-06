import { motion, useInView } from "framer-motion";
import { experiences } from "@/app/_utils/data";
import { useRef } from "react";
import Image from "next/image";

interface ExperienceItem {
  reverse: boolean;
  experience: {
    id: number;
    title: string;
    company: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
}

const Experience = () => {
  return (
    <div className="flex w-full flex-col justify-center" id="experience-div">
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={{ x: "0" }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold"
      >
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <div className="max-w-full">
        {/* MAP EXPERIENCES */}
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience, reverse }: ExperienceItem) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ x: reverse ? "300px" : "-300px", opacity: 0, decelerate: 2.5 }}
      animate={isInView ? { x: "0", opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={`flex h-auto w-full justify-stretch ${reverse ? "flex-row-reverse" : ""}`}
    >
      {/* LEFT */}
      <div className="flex w-11/12 items-center justify-center align-middle">
        <Image
          src={experience.image?.url || ""}
          alt={experience.company}
          width={experience.image?.width || 0}
          height={experience.image?.height || 0}
          sizes="100vw"
        />
      </div>
      {/* CENTER */}
      <div className="flex w-1/12 justify-center">
        {/* LINE */}
        <div className="relative h-full w-1 rounded bg-gray-600">
          {/* LINE CIRCLE */}
          <div className="absolute -left-2 h-5 w-5 rounded-full ring-4 ring-red-400"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-11/12">
        <div className={"p-1"}>
          <div className="rounded-b-lg rounded-s-lg py-3 text-sm font-semibold text-secondary md:text-base">
            {experience.title}
            {/* JOB COMPANY */}
            <div className="w-fit rounded p-1 text-xs font-semibold text-accent sm:text-sm">
              - {experience.company}
            </div>
          </div>
          {/* JOB DESC */}
          <div className="pb-2 text-xs sm:text-sm">
            {experience.description}
          </div>
          {/* JOB DATE */}
          <div className="text-xs font-semibold italic text-destructive sm:text-sm">
            Início: {experience.startDate} <br />
            Fim: {experience.endDate}
          </div>
        </div>
        {/* JOB TITLE */}
      </div>
    </motion.div>
  );
};

export default Experience;
