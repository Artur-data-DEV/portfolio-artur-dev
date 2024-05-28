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

const Skills = () => {
  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex flex-col items-center rounded-lg bg-orange-500 p-4">
          <FaHtml5 className="mb-2 text-4xl" />
          <p className="text-lg">HTML</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-indigo-500 p-4 text-white">
          <FaCss3Alt className="mb-2 text-4xl" />
          <p className="text-lg">CSS</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-amber-500 p-4">
          <FaJsSquare className="mb-2 text-4xl" />
          <p className="text-lg">JavaScript</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-500 p-4 text-white">
          <SiTypescript className="mb-2 text-4xl" />
          <p className="text-lg">TypeScript</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-sky-400 p-4">
          <FaReact className="mb-2 text-4xl" />
          <p className="text-lg">React</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-emerald-500 p-4 text-white">
          <RiTailwindCssFill className="mb-2 text-4xl" />
          <p className="text-lg">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-lime-500 p-4 text-white">
          <SiNodedotjs className="mb-2 text-4xl" />
          <p className="text-lg">Node</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-indigo-700 p-4 text-white">
          <FaPython className="mb-2 text-4xl" />
          <p className="text-lg">Python</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-teal-900 p-4">
          <DiMongodb className="mb-2 text-4xl" />
          <p className="text-lg">MongoDB</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-700 p-4 text-white">
          <DiDocker className="mb-2 text-4xl" />
          <p className="text-lg">Docker</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-900 p-4 text-white">
          <SiKubernetes className="mb-2 text-4xl" />
          <p className="text-lg">Kubernetes</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-cyan-900 p-4 text-white">
          <SiPrisma className="mb-2 text-4xl" />
          <p className="text-lg">Prisma</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-slate-500 p-4">
          <RiNextjsFill className="mb-2 text-4xl" />
          <p className="text-lg">Next.js</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-purple-600 p-4 text-white">
          <SiNestjs className="mb-2 text-4xl" />
          <p className="text-lg">Nest.js</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-emerald-800 p-4 text-white">
          <SiNeovim className="mb-2 text-4xl" />
          <p className="text-lg">NeonDB</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-lime-500 p-4 text-white">
          <SiPostgresql className="mb-2 text-4xl" />
          <p className="text-lg">Postgre SQL</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-orange-500 p-4 text-white">
          <FaAws className="mb-2 text-4xl" />
          <p className="text-lg">AWS Cloud</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-slate-200 p-4 shadow-md">
          <SiGooglecloud className="mb-2 text-4xl text-blue-500" />
          <p className="text-lg text-gray-800">Google Cloud</p>
        </div>

        <div className="flex flex-col items-center rounded-lg bg-rose-700 p-4 text-white">
          <FaShieldDog className="mb-2 text-4xl" />
          <p className="text-lg">Husky</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-orange-500 p-4 text-white">
          <FaGitAlt className="mb-2 text-4xl" />
          <p className="text-lg">Git</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-fuchsia-500 p-4 text-white">
          <SiGithubactions className="mb-2 text-4xl" />
          <p className="text-lg">Github CI/CD</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-gray-700 p-4 text-white">
          <FaLinux className="mb-2 text-4xl" />
          <p className="text-lg">Bash Linux</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-red-500 p-4 text-white">
          <SiApachekafka className="mb-2 text-4xl" />
          <p className="text-lg">Kafka</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-500 p-4 text-white">
          <SiTrello className="mb-2 text-4xl" />
          <p className="text-lg">Trello</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
