"use client";
import CustomLayout from "./_components/customLayout";
import Image from "next/image";
import AnimatedText from "./_components/animated/animated-text";
import Link from "next/link";
import { Button } from "./_components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import HireMe from "./_components/hire-me";
import Programmer from "../public/programmer.png";
import AnimatedMotionComponent from "./_components/animated/animated-tag";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home() {
  const windowSize = useWindowSize();
  const isMobileScreen = windowSize?.width ? windowSize.width <= 768 : false;
  const isExtraLargeScreen = windowSize?.width
    ? windowSize.width > 1024
    : false;
  return (
    <>
      <main className="text-dark flex min-h-screen w-full flex-col items-center justify-center px-4 sm:max-w-[1000px] sm:px-8 lg:max-w-[1200px] lg:flex-row xl:max-w-[1500px] 2xl:max-w-[1800px]">
        <CustomLayout>
          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            <AnimatedMotionComponent
              className={
                isMobileScreen ? "h-1/2 w-1/2" : "h-auto w-[40vw] lg:mr-4"
              }
              tag="div"
            >
              <Image
                src="/developer2-bgrm.png"
                alt="Artur Campos"
                className="h-auto w-full rounded-full p-2 sm:p-4 lg:p-8"
                width={0}
                height={0}
                sizes="100vw"
              />
            </AnimatedMotionComponent>
            <div className="flex w-full flex-col items-center lg:ml-4 lg:w-1/2 lg:items-start">
              <AnimatedText
                text="Olá, eu sou o Artur! 👋|br|Transformando ideias em realidade com código e design"
                className="text-left text-xl sm:text-2xl lg:text-3xl xl:text-5xl"
              />
              <AnimatedMotionComponent
                transition={{ duration: 1 }}
                className="my-4 text-xs sm:text-sm lg:text-base"
                tag="p"
              >
                Desenvolvedor de software com mais de 5 anos de experiência em
                desenvolvimento web, um dev fullstack apaixonado por inovação e
                novos desafios de tecnologia!. Com habilidades em HTML, CSS,
                JavaScript, React, Node.js, MongoDB, TypeScript e{" "}
                <strong>muito mais!</strong>
              </AnimatedMotionComponent>
              <AnimatedMotionComponent
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-2 flex flex-wrap items-center gap-4 self-center lg:self-start"
                tag="div"
              >
                <Button asChild>
                  <Link
                    href={"/curriculum.pdf"}
                    target="_blank"
                    download
                    className="text-xs font-semibold sm:text-sm lg:text-base"
                  >
                    Download Curriculum
                    <FaExternalLinkAlt className="mb-1 ml-1 w-4 sm:w-5 lg:w-6" />
                  </Link>
                </Button>
                <Button asChild variant={"outline"} className="border-black">
                  <Link
                    href="https://curriculum-sandy.vercel.app/"
                    target="_blank"
                    className="text-xs sm:text-sm lg:text-base"
                  >
                    Currículo Online
                  </Link>
                </Button>
              </AnimatedMotionComponent>
              <AnimatedMotionComponent
                className="mt-2 flex flex-wrap items-center gap-4 self-center lg:self-start"
                tag="div"
              >
                <Button asChild variant={"ghost"} className="mt-2">
                  <Link
                    href={"mailto:arturcamposba99@gmail.com"}
                    target="_blank"
                    className="text-xs font-medium underline sm:text-sm lg:text-base"
                  >
                    Entre em contato comigo
                  </Link>
                </Button>
              </AnimatedMotionComponent>
            </div>
            {isExtraLargeScreen && (
              <AnimatedMotionComponent
                transition={{ duration: 1, delay: 0.5 }}
                tag="div"
                className={"absolute bottom-0 right-0 h-1/4 w-1/4 rounded-full"}
              >
                <Image
                  src={Programmer}
                  alt="developer"
                  className="h-auto w-full rounded-full"
                  width={0}
                  height={0}
                />
              </AnimatedMotionComponent>
            )}
          </div>
        </CustomLayout>
        <HireMe />
      </main>
    </>
  );
}
