import Link from "next/link";
import CustomLink from "./custom-link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav className="flex items-center justify-between">
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"Sobre"} className="mx-4" />
        <CustomLink href="/skills" title={"Skills"} className="mx-4" />
        <CustomLink href="/projects" title={"Projetos"} className="mx-4" />
        <CustomLink href="/contact" title={"Contato"} className="ml-4" />
      </nav>
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>

      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
