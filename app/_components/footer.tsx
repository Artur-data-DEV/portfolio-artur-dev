/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-fit w-full bg-primary py-3 text-primary-foreground">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-center text-sm text-muted">
        © Artur's Dev Portfólio {currentYear} - Todos os direitos reservados. 
        </p>
        <span className="text-xs text-muted">Produzido com Next.js</span>
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition duration-300 hover:text-muted-foreground"
        >
          <SiNextdotjs size={14} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
