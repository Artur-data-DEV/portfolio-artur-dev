// import Hero from "./_components/hero";
// import About from "./_components/about";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
// import Skills from "./_components/skills";
// import Projects from "./_components/projects";
// import ContactForm from "./_components/contact";
import Head from "next/head";
import CustomLayout from "./_components/customLayout";
import Image from "next/image";
import AnimatedText from "./_components/animated-text";
import Link from "next/link";
import { Button } from "./_components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import HireMe from "./_components/hire-me";
export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Campos</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <main className="text-dark flex min-h-screen w-full items-center">
        <CustomLayout>
          <div className="flex w-full flex-col items-center justify-between lg:flex-row ">
            <div className="h-full w-full max-w-[50%] sm:w-1/2">
              <Image
                src="/developer2.jpeg"
                alt="Artur Campos"
                className="h-auto w-full rounded-full p-16"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
              <AnimatedText
                text={
                  "Olá, eu sou o Artur! Transformando ideias em realidade com código e design"
                }
                className="text-left text-4xl lg:text-5xl"
              />
              <p className="my-4 text-base font-medium lg:text-lg">
                Desenvolvedor de software com mais de 5 anos de experiência em
                desenvolvimento web, um dev fullstack apaixonado por inovação e
                novos desafios de tecnologia!. Com habilidades em HTML, CSS,
                JavaScript, React, Node.js, MongoDB, TypeScript e{" "}
                <strong>muito mais!</strong>
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4 self-start">
                <Button asChild>
                  <Link
                    href={"/curriculum.pdf"}
                    target="_blank"
                    download
                    className="text-lg font-semibold"
                  >
                    Download Curriculum
                    <FaExternalLinkAlt className="mb-1 ml-1 w-6" />
                  </Link>
                </Button>
                <Button asChild variant={"outline"}>
                  <Link
                    href="https://curriculum-sandy.vercel.app/"
                    target="_blank"
                  >
                    Currículo Online
                  </Link>
                </Button>
              </div>
              <Button asChild variant={"ghost"} className="mt-2">
                <Link
                  href={"mailto:arturcamposba99@gmail.com"}
                  target="_blank"
                  className="pl-2 text-lg font-medium underline"
                >
                  Entre em contato comigo
                </Link>
              </Button>
            </div>
          </div>
        </CustomLayout>
      </main>

      <HireMe />
      <Footer />
    </>
  );
}
