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
  console.log("pathname", pathname);
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute bottom-0.5 left-1/2  h-[1px] bg-white transition-[width] duration-300 group-hover:w-1/2 ${pathname === href ? "w-1/2" : "w-0"}`}
      />
      <span
        className={`ease absolute bottom-0.5 right-1/2 h-[1px] bg-white transition-[width] duration-300 group-hover:w-1/2 ${pathname === href ? "w-1/2" : "w-0"}`}
      />
    </Link>
  );
};

export default CustomLink;
