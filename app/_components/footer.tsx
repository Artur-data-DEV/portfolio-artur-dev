import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="my-8 border-gray-500" />
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Artur Campos Portfolio. Todos os
          direitos reservados.
        </p>
        <div className="mt-4 flex space-x-4">
          <Link
            href="https://twitter.com/artur-batista"
            passHref
            target="_blank"
          >
            <FaInstagram
              size={24}
              className="cursor-pointer text-gray-500 transition duration-300 hover:text-gray-400"
            />
          </Link>
          <Link
            href="https://github.com/Artur-data-DEV"
            passHref
            target="_blank"
          >
            <FaGithub
              size={24}
              className="cursor-pointer text-gray-500 transition duration-300 hover:text-gray-400"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/artur-campos-09243b303/"
            passHref
            target="_blank"
          >
            <FaLinkedin
              size={24}
              className="cursor-pointer text-gray-500 transition duration-300 hover:text-gray-400"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
