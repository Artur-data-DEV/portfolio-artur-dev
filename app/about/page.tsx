"use client";
import CustomLayout from "../_components/customLayout";
import AnimatedText from "../_components/animated/animated-text";
import Image from "next/image";
import AnimatedNumbers from "../_components/animated/animated-numbers";
import Brain from "../_components/animated/brain";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Sobre | Artur Developer",
//   description: "Sobre mim",
// };

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const brainRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  useEffect(() => {
    console.log(containerRef);
    console.log(brainRef, "brain");
  });

  useEffect(() => {
    const brainElement = brainRef.current;

    const handleScroll = () => {
      if (brainElement) {
        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;
        const brainHeight = brainElement.offsetHeight;

        const bottomPosition = screenHeight - brainHeight - 20;
        const isFixed = scrollY > bottomPosition;

        if (isFixed) {
          brainElement.style.position = "fixed";
          brainElement.style.bottom = "20px";
          brainElement.style.left = "20px"; // Change to left for bottom left corner
          brainElement.style.width = "50px"; // Set a smaller width
          brainElement.style.height = "auto"; // Allow height to adjust automatically
        } else {
          brainElement.style.position = "static";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <main ref={containerRef}>
        <div className="flex w-full flex-col items-center justify-center">
          <CustomLayout className="pt-16">
            <AnimatedText
              text="Transformando ideias em realidade"
              className="mb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            />
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-8">
              <div className="col-span-1 flex flex-col items-center justify-start gap-4 pl-10 pt-8 sm:col-span-2 sm:pt-12 lg:col-span-3 lg:pt-16 xl:pt-20">
                <h2 className="text-current/75 mb-4 text-sm font-bold uppercase sm:text-base">
                  Biografia
                </h2>
                <p className="text-justify text-lg font-medium sm:text-left sm:text-base">
                  Sou um desenvolvedor apaixonado por criar soluções inovadoras
                  e eficientes para desafios complexos. Minha jornada no
                  desenvolvimento de software me levou a adquirir uma sólida
                  base em diversas tecnologias e ferramentas modernas,
                  permitindo-me trabalhar em projetos de ponta a ponta.
                </p>
              </div>
              <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-black bg-white p-4 sm:col-span-2 sm:p-8 lg:col-span-3">
                <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-black/80" />
                <Image
                  src="/profile.png"
                  alt="Artur Campos"
                  className="h-full w-full rounded-full p-2 sm:p-4 lg:p-8"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="col-span-1 flex flex-col items-center justify-between sm:col-span-2 sm:items-end lg:col-span-2">
                <div className="flex flex-col items-center justify-center sm:items-end">
                  <span className="inline-block text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <AnimatedNumbers
                      className="inline-block text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                      value={20}
                    />
                    +
                  </span>
                  <h2 className="text-center sm:text-right sm:text-base lg:text-xl ">
                    clientes satisfeitos
                  </h2>
                </div>

                <div className="flex flex-col items-center justify-center sm:items-end">
                  <span className="inline-block text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <AnimatedNumbers
                      className="inline-block text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                      value={30}
                    />
                    +
                  </span>
                  <h2 className="text-center text-sm sm:text-right sm:text-base lg:text-xl">
                    projetos completados
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center sm:items-end">
                  <span className="inline-block text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <AnimatedNumbers
                      className="inline-block text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                      value={5}
                    />
                    +
                  </span>
                  <h2 className="text-center text-sm sm:text-right sm:text-base lg:text-xl">
                    anos de experiência em Tecnologia
                  </h2>
                </div>
              </div>
            </div>
            <span
              className="absolute bottom-0 left-0 max-h-full max-w-full"
              ref={brainRef}
            >
              <Brain scrollYProgress={scrollYProgress} />
            </span>
          </CustomLayout>
        </div>
      </main>
    </>
  );
};

export default About;
