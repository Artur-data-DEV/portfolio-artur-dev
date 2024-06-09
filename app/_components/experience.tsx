import { motion } from "framer-motion";
import { experiences } from "../utils/data";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center gap-12">
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
      <motion.div initial={{ x: "-300px" }} animate={{ x: "0" }} className="">
        {/* MAP EXPERIENCES */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex h-auto justify-between ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* LEFT */}
            <div className="w-1/3"></div>
            {/* CENTER */}
            <div className="flex w-1/6 justify-center">
              {/* LINE */}
              <div className="relative h-full w-1 rounded bg-gray-600">
                {/* LINE CIRCLE */}
                <div className="absolute -left-2 h-5 w-5 rounded-full ring-4  ring-red-400"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-1/3">
              {/* JOB TITLE */}
              <div className="rounded-b-lg rounded-s-lg p-3 font-semibold text-md">
                {experience.title}
                {/* JOB COMPANY */}
              <div className="w-fit rounded  p-1 text-xs font-semibold text-muted-foreground">
                - {experience.company}
              </div>
              </div>
              {/* JOB DESC */}
              <div className="p-3 text-sm italic">{experience.description}</div>
              {/* JOB DATE */}
              <div className="p-3 text-sm font-semibold text-red-400">
                Início: {experience.startDate} - Fim: {experience.endDate}
              </div>
              
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
