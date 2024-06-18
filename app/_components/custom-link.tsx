"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`${className} group relative pb-1 text-primary sm:text-primary-foreground`}
      >
        {title}
        <span
          className={`ease absolute bottom-0.5 left-1/2  h-[1px] bg-primary transition-[width] duration-300 group-hover:w-1/2 sm:bg-current ${pathname === href ? "w-1/2" : "w-0"}`}
        />
        <span
          className={`ease absolute bottom-0.5 right-1/2 h-[1px] bg-primary transition-[width] duration-300 group-hover:w-1/2 sm:bg-current ${pathname === href ? "w-1/2" : "w-0"}`}
        />
      </Link>
    </>
  );
};

export default CustomLink;
