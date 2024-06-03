import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-primary pb-2 text-primary-foreground">
      <hr className="my-5 border-primary-foreground" />
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Artur Campos Portfolio. Todos os
          direitos reservados.
        </p>
        <div className="mt-2 flex space-x-4">
          <Link
            href="https://www.instagram.com/artur-batista"
            passHref
            target="_blank"
          >
            <FaInstagram
              size={18}
              className="cursor-pointer text-muted transition duration-300 hover:text-muted-foreground"
            />
          </Link>
          <Link
            href="https://github.com/Artur-data-DEV"
            passHref
            target="_blank"
          >
            <FaGithub
              size={18}
              className="cursor-pointer text-muted transition duration-300 hover:text-muted-foreground"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/artur-campos-09243b303/"
            passHref
            target="_blank"
          >
            <FaLinkedin
              size={18}
              className="cursor-pointer text-muted transition duration-300 hover:text-muted-foreground"
            />
          </Link>
        </div>
        <div>
          <div className="mt-3 flex flex-col justify-center">
            <span className={"text-sm text-muted"}>Produzido com NextJS</span>
            <Link
              href={"https://nextjs.org/"}
              className="self-center text-gray-500"
            >
              <SiNextdotjs
                size={14}
                className="cursor-pointer text-muted transition duration-300 hover:text-muted-foreground"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
