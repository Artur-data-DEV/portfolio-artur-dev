import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
      <div className="text-xl font-bold">
        <Link href="/">
          <span>Portfólio</span>
        </Link>
      </div>
      <Link href="/resume">
        <span className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-yellow-400">
          Resume
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
