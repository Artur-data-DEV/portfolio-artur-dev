import { motion } from "framer-motion";
import { experiences } from "../utils/data";
import ExperienceItem from "./experience-item";

const Experience = () => {
  return (
    <div className="flex w-full flex-col justify-center">
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

export default Experience;
