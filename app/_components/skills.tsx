import { useEffect, useState } from "react";
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
import { IconType } from "react-icons";

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
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, text, color, link }: SkillIconsProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center rounded-lg ${color} transform p-8 text-white transition-transform hover:scale-105`}
    >
      {icon({ size: 64 })} {/* Icon size increased to 64 */}
      <p className="text-md mt-2 text-center sm:text-xl">{text}</p>
    </a>
  );
};

const skills = [
  {
    icon: FaHtml5,
    text: "HTML",
    color: "bg-orange-500",
    link: "https://www.w3.org/html/",
  },
  {
    icon: FaCss3Alt,
    text: "CSS",
    color: "bg-indigo-500",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    icon: FaJsSquare,
    text: "JavaScript",
    color: "bg-amber-500",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
    color: "bg-blue-500",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: FaReact,
    text: "React",
    color: "bg-sky-400",
    link: "https://reactjs.org/",
  },
  {
    icon: RiTailwindCssFill,
    text: "Tailwind CSS",
    color: "bg-cyan-600",
    link: "https://tailwindcss.com/",
  },
  {
    icon: SiNodedotjs,
    text: "Node.js",
    color: "bg-lime-500",
    link: "https://nodejs.org/",
  },
  {
    icon: FaPython,
    text: "Python",
    color: "bg-indigo-700",
    link: "https://www.python.org/",
  },
  {
    icon: DiMongodb,
    text: "MongoDB",
    color: "bg-teal-700",
    link: "https://www.mongodb.com/",
  },
  {
    icon: DiDocker,
    text: "Docker",
    color: "bg-blue-700",
    link: "https://www.docker.com/",
  },
  {
    icon: SiKubernetes,
    text: "Kubernetes",
    color: "bg-blue-900",
    link: "https://kubernetes.io/",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
    color: "bg-cyan-900",
    link: "https://www.prisma.io/",
  },
  {
    icon: RiNextjsFill,
    text: "Next.js",
    color: "bg-slate-500",
    link: "https://nextjs.org/",
  },
  {
    icon: SiNestjs,
    text: "Nest.js",
    color: "bg-rose-700",
    link: "https://nestjs.com/",
  },
  {
    icon: SiNeovim,
    text: "NeonDB",
    color: "bg-green-600",
    link: "https://neon.tech",
  },
  {
    icon: SiPostgresql,
    text: "PostgreSQL",
    color: "bg-sky-900",
    link: "https://www.postgresql.org/",
  },
  {
    icon: FaAws,
    text: "AWS Cloud",
    color: "bg-amber-600",
    link: "https://aws.amazon.com/",
  },
  {
    icon: SiGooglecloud,
    text: "Google Cloud",
    color: "bg-slate-400",
    link: "https://cloud.google.com/",
  },
  {
    icon: FaShieldDog,
    text: "Husky",
    color: "bg-pink-700",
    link: "https://www.husky.io/",
  },
  {
    icon: FaGitAlt,
    text: "Git",
    color: "bg-orange-600",
    link: "https://git-scm.com/",
  },
  {
    icon: SiGithubactions,
    text: "Github CI/CD",
    color: "bg-fuchsia-800",
    link: "https://github.com/features/actions",
  },
  {
    icon: FaLinux,
    text: "Bash Linux",
    color: "bg-gray-600",
    link: "https://www.linux.org/",
  },
  {
    icon: SiApachekafka,
    text: "Kafka",
    color: "bg-red-600",
    link: "https://kafka.apache.org/",
  },
  {
    icon: SiTrello,
    text: "Trello",
    color: "bg-blue-600",
    link: "https://trello.com/",
  },
];

export default Skills;
