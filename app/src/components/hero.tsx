import Image from "next/image";
import Link from "next/link";
import { GitHub, Linkedin, Instagram } from "react-feather";

interface HeroProps {}

const empresas: string[] = [
  "Algar Telecom",
  "BRB",
  "Pipetech",
  "EBSERH",
  "Cartório Colorado",
];
const divideEmpresas = (empresas: string[]): string[][] => {
  const empresasDivididas: string[][] = [];
  const empresasOrdenadas = empresas.sort();

  let i = 0;
  while (i < empresas.length) {
    empresasDivididas.push(empresasOrdenadas.slice(i, i + 3));
    i += 3;
  }
  return empresasDivididas;
};

const Hero: React.FC<HeroProps> = () => {
  const empresasDivididas = divideEmpresas(empresas);

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
      <div className="mb-8 h-1/2 w-1/2 overflow-hidden rounded-full md:mr-8 md:h-1/3 md:w-1/3">
        <Image
          src="/profile.png"
          className="h-full w-full object-cover"
          alt="Artur Campos"
          sizes=" (max-width: 768px) 100vw, 33vw"
          loading="lazy"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center md:flex-1 md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          Olá, meu nome é Artur!👋
        </h1>
        <h2 className="mb-4 text-justify text-xl font-bold text-gray-300">
          Sou Artur Campos, um desenvolvedor fullstack com experiência em
          empresas de tecnologia como:
        </h2>
        <div className="ml-7 flex gap-5">
          {empresasDivididas.map((bloco, index) => (
            <ul
              key={index}
              className="flex list-disc flex-col text-lg text-gray-300 md:text-2xl"
            >
              {bloco.map((empresa, idx) => (
                <li
                  key={idx}
                  className="w-full text-left text-lg font-bold text-gray-300"
                >
                  {empresa}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <hr className="mx-3 my-2 border-gray-500" />
        <p className="mb-6 text-justify text-lg text-gray-400 md:mb-8 md:text-xl">
          Desenvolvi soluções inovadoras utilizando JavaScript, React, Node.js e
          tecnologias relacionadas. Trabalhei com microsserviços, Docker,
          Kubernetes e DevOps, e contribuí para o redesenho de páginas web na
          Algar Telecom utilizando Gatsby e React. Estou em busca de novos
          desafios no desenvolvimento fullstack, onde posso aplicar minhas
          habilidades e experiências para impulsionar projetos inovadores.
        </p>
        <div className="flex justify-center space-x-4 md:justify-start">
          <Link
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition duration-300 hover:text-gray-800"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition duration-300 hover:text-gray-800"
          >
            <GitHub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition duration-300 hover:text-gray-800"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
