import Link from "next/link";
import Fullstack from "/public/fullstack.svg";
const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <Fullstack className="animate-spin-slow fill-emerald-800" />
        <Link
          href="mailto:arturcamposdev@gmail.com"
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-black bg-gray-700 font-semibold text-white shadow-md hover:bg-white hover:text-black"
        >
          Contratar
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
