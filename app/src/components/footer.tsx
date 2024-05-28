import Link from "next/link";
import {GitHub, Linkedin, Instagram} from 'react-feather';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-500 my-8" />
      <div className="flex flex-col items-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Artur Campos Portfolio. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4 mt-4">
          <Link href="https://twitter.com/artur-batista" passHref target="_blank">
            <Instagram size={24} className="text-gray-500 hover:text-gray-400 transition duration-300 cursor-pointer" />
          </Link>
          <Link href="https://github.com/Artur-data-DEV" passHref  target="_blank">
            <GitHub size={24} className="text-gray-500 hover:text-gray-400 transition duration-300 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/artur-campos-09243b303/" passHref target="_blank">
            <Linkedin size={24} className="text-gray-500 hover:text-gray-400 transition duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
