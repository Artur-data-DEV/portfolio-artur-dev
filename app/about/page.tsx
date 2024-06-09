"use client";
import Brain from "@/app/_components/animated/animated-brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import Skills from "../_components/skills";
import { calcularIdade } from "../utils/functions/calcularIdade";
import Experience from "../_components/experience";
import PlayOnce from "../icons/lordicon";
import Signature from "../_components/animated/animated-signature";
import itdev from "@/app/icons/itdev.json";
import fork from "@/app/icons/fork.json";
import webConference from "@/app/icons/web-conference.json";
import cmd from "@/app/icons/cmd.json";
import restApi from "@/app/icons/rest-api.json";
import puzzle from "@/app/icons/puzzle.json";

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
      initial={{ x: "-200vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="h-full overflow-x-hidden overflow-y-scroll lg:flex"
        ref={containerRef}
      >
        <div className="flex flex-col gap-24 p-4 md:gap-32 lg:w-2/3 lg:pr-0 xl:w-1/2 xl:gap-64 ">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex gap-5">
              <Image
                src={"/profile.png"}
                alt=""
                width={112}
                height={112}
                className="h-28 w-28 rounded-full object-cover"
              />
              <h1 className="self-end text-2xl font-bold">BIOGRAFIA</h1>
            </div>
            <div className="flex flex-col gap-5 px-1 text-justify text-lg">
              <div className="flex items-center">
                <span className="mr-2 inline-block">
                  <PlayOnce icon={fork} />
                </span>
                <p>
                  Natural de Brasília, tenho {calcularIdade("1999-09-29")} anos
                  e minha paixão pela tecnologia e pelo desenvolvimento de
                  software me instigaram a me tornar um <strong>mestre </strong>
                  na arte da programação!
                </p>
              </div>
              <div className="flex items-center">
                <p>
                  Desde cedo, eu já demonstrava interesse genuíno em explorar o
                  mundo da programação, alimentado pela curiosidade e
                  determinação de <strong>aprender </strong> coisas novas e a
                  <strong> inovar</strong> a partir delas.
                </p>
                <span className="ml-2 inline-block">
                  <PlayOnce icon={puzzle} />
                </span>
              </div>

              <div className="flex items-center">
                <span className="ml-2 inline-block">
                  <PlayOnce icon={restApi} />
                </span>
                <p>
                  Com uma formação sólida desenvolvimento de sistemas, me
                  especializei no desenvolvimento de aplicativos web utilizando
                  as tecnologias React e Node.
                </p>
              </div>
              <p className="flex items-center ">
                Creio que minha expertise em ambas as áreas me tornaram um
                profissional altamente qualificado, capaz de criar interfaces de
                usuário dinâmicas e eficientes, além de implementar servidores
                robustos e escaláveis.
                <span className="ml-2 inline-block">
                  <PlayOnce icon={cmd} />
                </span>
              </p>
              <div className="flex items-center">
                <span className="mr-2 inline-block">
                  <PlayOnce icon={webConference} />
                </span>
                <p>
                  Em minha jornada profissional, trabalhei em uma variedade de
                  projetos desafiadores, onde pude aplicar meu conhecimento para
                  criar soluções inovadoras e eficazes pra diversas empresas.
                  Focado nos resultados e na capacidade de resolver problemas
                  rapidamente, logo me tornei um atrativo para equipes de
                  desenvolvimento ágeis.
                </p>
              </div>
              <p className="flex items-center ">
                Além de ser minha profissão, sou entusiasta da comunidade de
                tecnologia, participando ativamente de eventos, meetups e
                contribuindo para projetos de código aberto, sou conhecido por
                compartilhar conhecimento e colaborar com outros profissionais
                de TI. Estou sempre em busca de novos desafios e oportunidades
                de crescimento, enquanto continuo a aprimorar e expandir meu
                conhecimento em tecnologias emergentes.
                <span className="ml-2 inline-block">
                  <PlayOnce icon={itdev} />
                </span>
              </p>
            </div>
            <span className="p-5 italic">
              - Desenvolvendo soluções que transcendem o código, moldando o
              futuro através da inovação.
            </span>
            <div className="-mt-12 mr-24 h-24 w-40 self-end">
              <div className="h-full w-full">
                <Signature />
              </div>
            </div>
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
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div ref={experienceRef} data-testid="experience-section">
            <motion.div
              id={"experience-container"}
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <Experience />
            </motion.div>
          </div>
        </div>
        <div className="sticky top-0 hidden w-1/3 overflow-hidden lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
