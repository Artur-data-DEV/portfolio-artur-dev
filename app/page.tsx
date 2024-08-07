"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/app/_components/animated/animated-text";
import AnimatedMotionComponent from "@/app/_components/animated/animated-tag";
import { Button } from "@/app/_components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { SlClose } from "react-icons/sl";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
    setSelectedLanguage("");
  };

  const windowSize = useWindowSize();
  const isExtraLargeScreen = windowSize?.width
    ? windowSize.width > 1024
    : false;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    dropdownRef && document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-primary-foreground px-4 text-current sm:max-w-[1000px] sm:px-8 lg:max-w-[1200px] lg:flex-row xl:max-w-[1500px] 2xl:max-w-[2000px]">
      <AnimatedMotionComponent
        className={"h-full w-[40vw] sm:h-auto lg:mr-4 lg:w-1/3"}
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
      <div className="flex w-full flex-col items-center lg:ml-4 lg:w-2/3 lg:items-start">
        <AnimatedText
          text="Olá, eu sou o Artur! 👋|br|Transformando ideias em realidade com código e design 👨‍💻"
          className="text-2xl text-primary sm:text-2xl lg:text-3xl xl:text-5xl"
        />
        <AnimatedMotionComponent
          transition={{ duration: 1 }}
          className="my-4 text-xs drop-shadow-lg sm:text-sm lg:text-base"
          tag="p"
        >
          Desenvolvedor de software com mais de 5 anos de experiência em
          desenvolvimento web, um dev fullstack apaixonado por inovação e novos
          desafios de tecnologia!. Com habilidades em HTML, CSS, JavaScript,
          React, Node.js, MongoDB, TypeScript e <strong>muito mais!</strong>
        </AnimatedMotionComponent>
        <AnimatedMotionComponent
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-2 flex flex-wrap items-center gap-4 self-center lg:self-start"
          tag="div"
        >
          <div className="relative">
            <Button
              onClick={toggleDropdown}
              className={"text-foreground"}
              data-cy="download-curriculum-dropdown"
            >
              Download Curriculum
              <FaExternalLinkAlt className="mb-1 ml-1 w-4 sm:w-5 lg:w-6" />
            </Button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute left-0 top-full z-10 mt-1 h-fit w-full rounded-sm bg-white shadow-lg "
              >
                <Button
                  onClick={() => handleLanguageSelect("English")}
                  data-cy="dropdown-english-button"
                  className="w-full items-center justify-start gap-1 bg-transparent text-left align-middle text-sm text-gray-800 hover:bg-gray-100"
                >
                  <p className="flex items-center gap-1 px-5 align-middle">
                    <LiaFlagUsaSolid size={22} />
                    <span>English</span>
                  </p>
                </Button>
                <Button
                  onClick={() => handleLanguageSelect("Português")}
                  data-cy="dropdown-portuguese-button"
                  className="flex w-full items-center justify-start gap-1 bg-transparent text-left align-middle text-sm text-gray-800 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-1 px-5 align-middle">
                    <GiBrazilFlag size={22} />
                    <span>Português</span>
                  </div>
                </Button>
              </div>
            )}
          </div>
          {selectedLanguage && (
            <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
              <div className="relative rounded-lg bg-white">
                <iframe
                  src={
                    selectedLanguage === "English"
                      ? "https://drive.google.com/file/d/1sVaQhEoGYpKKYWrhgQBFuA5xlMYMQi_z/preview"
                      : "https://drive.google.com/file/d/1JdHBUSTqG3b-zzO0XU5GjWTDy2-couXa/preview"
                  }
                  className="h-[80vh] w-[80vw] border-none"
                  title={`Curriculum in ${selectedLanguage}`}
                ></iframe>
                <div className="-bottom-15 absolute left-0 right-0 flex justify-center p-4">
                  <Button
                    asChild
                    data-cy="download-curriculum"
                    className=" text-white hover:bg-accent hover:text-accent-foreground"
                  >
                    <Link
                      href={
                        selectedLanguage === "English"
                          ? "https://drive.google.com/uc?export=download&id=1sVaQhEoGYpKKYWrhgQBFuA5xlMYMQi_z"
                          : "https://drive.google.com/uc?export=download&id=1JdHBUSTqG3b-zzO0XU5GjWTDy2-couXa"
                      }
                    >
                      Download Curriculum - {selectedLanguage}
                    </Link>
                  </Button>
                </div>
                <button
                  onClick={closeDropdown}
                  className="absolute right-0 top-0 text-gray-600  focus:outline-none "
                  data-testid="close-iframe-button"
                >
                  <div className="absolute right-0 top-2 -mt-10 flex font-bold text-gray-600 transition duration-300 ease-in-out">
                    <SlClose className="hover:text-destructive" size={24} />
                  </div>
                </button>
              </div>
            </div>
          )}
          <Button
            asChild
            variant={"outline"}
            className="border-black"
            data-cy="curriculum-online-site"
          >
            <Link
              href="https://curriculum-artur.vercel.app/"
              target="_blank"
              className="lg:text-md text-xs text-primary sm:text-sm"
            >
              Currículo Online
            </Link>
          </Button>
        </AnimatedMotionComponent>
        <AnimatedMotionComponent
          className="mt-2 flex flex-wrap items-center gap-4 self-center lg:self-start"
          tag="div"
        >
          <Button
            asChild
            variant={"ghost"}
            className="mt-2"
            data-cy="get-in-touch"
          >
            <Link
              href={"mailto:arturcamposba99@gmail.com"}
              target="_blank"
              className="lg:text-md text-xs font-medium text-primary underline sm:text-sm"
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
            src={"programmer.png"}
            alt="developer"
            className="h-auto w-full rounded-full"
            width={0}
            height={0}
          />
        </AnimatedMotionComponent>
      )}
    </main>
  );
};

export default Home;
