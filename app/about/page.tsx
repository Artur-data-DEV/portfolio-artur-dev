import { Metadata } from "next";
import CustomLayout from "../_components/customLayout";
import AnimatedText from "../_components/animated/animated-text";
import Image from "next/image";
import AnimatedNumbers from "../_components/animated/animated-numbers";

export const metadata: Metadata = {
  title: "Sobre | Artur Developer",
  description: "Sobre mim",
};

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center">
        <CustomLayout className="pt-16">
          <AnimatedText
            text="Paixão que alimenta meu propósito!"
            className="mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          />
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-8">
            <div className="col-span-1 flex flex-col items-center justify-start gap-4 pt-8 sm:col-span-2 sm:pt-12 lg:col-span-3 lg:pt-16 xl:pt-20">
              <h2 className="mb-4 text-base font-bold uppercase text-black/75 sm:text-lg">
                Biografia
              </h2>
              <p className="text-center font-medium sm:text-left">
                Olá! Sou um desenvolvedor apaixonado por criar soluções
                inovadoras e eficientes para desafios complexos. Minha jornada
                no desenvolvimento de software me levou a adquirir uma sólida
                base em diversas tecnologias e ferramentas modernas,
                permitindo-me trabalhar em projetos de ponta a ponta com uma
                abordagem full-stack.
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
                <span className="inline-block text-4xl font-bold sm:text-6xl lg:text-7xl">
                  <AnimatedNumbers
                    className="inline-block text-5xl font-bold sm:text-7xl lg:text-8xl"
                    value={20}
                  />
                  +
                </span>
                <h2 className="text-center sm:text-right">
                  clientes satisfeitos
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center sm:items-end">
                <span className="inline-block text-4xl font-bold sm:text-6xl lg:text-7xl">
                  <AnimatedNumbers
                    className="inline-block text-5xl font-bold sm:text-7xl lg:text-8xl"
                    value={30}
                  />
                  +
                </span>
                <h2 className="text-center sm:text-right">
                  projetos completados
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center sm:items-end">
                <span className="inline-block text-4xl font-bold sm:text-6xl lg:text-7xl">
                  <AnimatedNumbers
                    className="inline-block text-5xl font-bold sm:text-7xl lg:text-8xl"
                    value={5}
                  />
                  +
                </span>
                <h2 className="text-center sm:text-right">
                  anos de experiência em Tecnologia
                </h2>
              </div>
            </div>
          </div>
        </CustomLayout>
      </main>
    </>
  );
};

export default About;
