import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link href="/">
          <span>Portfólio</span>
        </Link>
      </div>
      <Link href="/resume">
        <span className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition duration-300">
          Resume
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
