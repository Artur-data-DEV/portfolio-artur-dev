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
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
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
    icon: FaHtml5,
    text: "HTML",
    color: "#E44D26", // Original HTML color
    link: "https://www.w3.org/html/",
  },
  {
    icon: FaCss3Alt,
    text: "CSS",
    color: "#2965F1", // Original CSS color
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    icon: FaJsSquare,
    text: "JavaScript",
    color: "#F0DB4F", // Original JavaScript color
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
    color: "#007ACC", // Original TypeScript color
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: FaReact,
    text: "React",
    color: "#61DAFB", // Original React color
    link: "https://reactjs.org/",
  },
  {
    icon: RiTailwindCssFill,
    text: "Tailwind CSS",
    color: "#38B2AC", // Original Tailwind CSS color
    link: "https://tailwindcss.com/",
  },
  {
    icon: SiNodedotjs,
    text: "Node.js",
    color: "#68A063", // Original Node.js color
    link: "https://nodejs.org/",
  },
  {
    icon: FaPython,
    text: "Python",
    color: "#306998", // Original Python color
    link: "https://www.python.org/",
  },
  {
    icon: DiMongodb,
    text: "MongoDB",
    color: "#47A248", // Original MongoDB color
    link: "https://www.mongodb.com/",
  },
  {
    icon: DiDocker,
    text: "Docker",
    color: "#2496ED", // Original Docker color
    link: "https://www.docker.com/",
  },
  {
    icon: SiKubernetes,
    text: "Kubernetes",
    color: "#326CE5", // Original Kubernetes color
    link: "https://kubernetes.io/",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
    color: "#1B222D", // Original Prisma color
    link: "https://www.prisma.io/",
  },
  {
    icon: RiNextjsFill,
    text: "Next.js",
    color: "#000000", // Original Next.js color
    link: "https://nextjs.org/",
  },
  {
    icon: SiNestjs,
    text: "Nest.js",
    color: "#E0234E", // Original Nest.js color
    link: "https://nestjs.com/",
  },
  {
    icon: SiNeovim,
    text: "NeonDB",
    color: "#57A143", // Original NeonDB color
    link: "https://neon.tech",
  },
  {
    icon: SiPostgresql,
    text: "PostgreSQL",
    color: "#336791", // Original PostgreSQL color
    link: "https://www.postgresql.org/",
  },
  {
    icon: FaAws,
    text: "AWS Cloud",
    color: "#232F3E", // Original AWS Cloud color
    link: "https://aws.amazon.com/",
  },
  {
    icon: SiGooglecloud,
    text: "Google Cloud",
    color: "#4285F4", // Original Google Cloud color
    link: "https://cloud.google.com/",
  },
  {
    icon: FaShieldDog,
    text: "Husky",
    color: "#fc0398", // Original Husky color
    link: "https://www.husky.io/",
  },
  {
    icon: FaGitAlt,
    text: "Git",
    color: "#F05032", // Original Git color
    link: "https://git-scm.com/",
  },
  {
    icon: SiGithubactions,
    text: "Github CI/CD",
    color: "#2088FF", // Original GitHub Actions color
    link: "https://github.com/features/actions",
  },
  {
    icon: FaLinux,
    text: "Bash Linux",
    color: "#000000", // Original Bash Linux color
    link: "https://www.linux.org/",
  },
  {
    icon: SiApachekafka,
    text: "Kafka",
    color: "#f75445", // Original Kafka color
    link: "https://kafka.apache.org/",
  },
  {
    icon: SiTrello,
    text: "Trello",
    color: "#0079BF", // Original Trello color
    link: "https://trello.com/",
  },
];
