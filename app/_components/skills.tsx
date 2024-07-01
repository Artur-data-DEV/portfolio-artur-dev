"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaAws,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { DiMongodb, DiDocker } from "react-icons/di";
import {
  SiKubernetes,
  SiPrisma,
  SiNestjs,
  SiNeovim,
  SiTypescript,
  SiGooglecloud,
  SiGithubactions,
  SiApachekafka,
  SiPostgresql,
  SiTrello,
  SiNodedotjs,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaShieldDog } from "react-icons/fa6";
import Link from "next/link";

interface SkillIconsProps {
  icon: IconType;
  text: string;
  color: string;
  link: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`px-4 py-2 ${isVisible ? "animate-fade-in" : ""}`}>
      <motion.div
        className="grid grid-cols-3 gap-4 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {skills.map((skill) => (
          <SkillIcon key={skill.id} {...skill} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillIcon = ({ icon, text, color, link }: SkillIconsProps) => {
  // Determine background pattern or element based on the skill

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center rounded-3xl bg-card p-4 shadow-md transition duration-300`}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {icon({
          size: 64,
          color: color,
        })}
      </motion.div>
      <motion.p
        className={` text-center text-base font-semibold text-muted-foreground  `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {text}
      </motion.p>
    </Link>
  );
};

export default Skills;
const skills = [
  {
    id: 1,
    icon: FaHtml5,
    text: "HTML",
    color: "#E44D26",
    link: "https://www.w3.org/html/",
  },
  {
    id: 2,
    icon: FaCss3Alt,
    text: "CSS",
    color: "#2965F1",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    id: 3,
    icon: FaJsSquare,
    text: "JavaScript",
    color: "#F0DB4F",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 4,
    icon: SiTypescript,
    text: "TypeScript",
    color: "#007ACC",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    icon: FaReact,
    text: "React",
    color: "#61DAFB",
    link: "https://reactjs.org/",
  },
  {
    id: 6,
    icon: RiTailwindCssFill,
    text: "Tailwind CSS",
    color: "#38B2AC",
    link: "https://tailwindcss.com/",
  },
  {
    id: 7,
    icon: SiNodedotjs,
    text: "Node.js",
    color: "#68A063",
    link: "https://nodejs.org/",
  },
  {
    id: 8,
    icon: FaPython,
    text: "Python",
    color: "#306998",
    link: "https://www.python.org/",
  },
  {
    id: 9,
    icon: DiMongodb,
    text: "MongoDB",
    color: "#47A248",
    link: "https://www.mongodb.com/",
  },
  {
    id: 10,
    icon: DiDocker,
    text: "Docker",
    color: "#2496ED",
    link: "https://www.docker.com/",
  },
  {
    id: 11,
    icon: SiKubernetes,
    text: "Kubernetes",
    color: "#326CE5",
    link: "https://kubernetes.io/",
  },
  {
    id: 12,
    icon: SiPrisma,
    text: "Prisma",
    color: "#1B222D",
    link: "https://www.prisma.io/",
  },
  {
    id: 13,
    icon: RiNextjsFill,
    text: "Next.js",
    color: "#000000",
    link: "https://nextjs.org/",
  },
  {
    id: 14,
    icon: SiNestjs,
    text: "Nest.js",
    color: "#E0234E",
    link: "https://nestjs.com/",
  },
  {
    id: 15,
    icon: SiNeovim,
    text: "NeonDB",
    color: "#57A143",
    link: "https://neon.tech",
  },
  {
    id: 16,
    icon: SiPostgresql,
    text: "PostgreSQL",
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    id: 17,
    icon: FaAws,
    text: "AWS Cloud",
    color: "#232F3E",
    link: "https://aws.amazon.com/",
  },
  {
    id: 18,
    icon: SiGooglecloud,
    text: "Google Cloud",
    color: "#4285F4",
    link: "https://cloud.google.com/",
  },
  {
    id: 19,
    icon: FaShieldDog,
    text: "Husky",
    color: "#fc0398",
    link: "https://www.husky.io/",
  },
  {
    id: 20,
    icon: FaGitAlt,
    text: "Git",
    color: "#F05032",
    link: "https://git-scm.com/",
  },
  {
    id: 21,
    icon: SiGithubactions,
    text: "Github CI/CD",
    color: "#2088FF",
    link: "https://github.com/features/actions",
  },
  {
    id: 22,
    icon: FaLinux,
    text: "Bash Linux",
    color: "#000000",
    link: "https://www.linux.org/",
  },
  {
    id: 23,
    icon: SiApachekafka,
    text: "Kafka",
    color: "#f75445",
    link: "https://kafka.apache.org/",
  },
  {
    id: 24,
    icon: SiTrello,
    text: "Trello",
    color: "#0079BF",
    link: "https://trello.com/",
  },
];
