import Link from "next/link";
import Fullstack from "/public/fullstack.svg";

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <Fullstack className="animate-spin-slow fill-slate-600" />
        <Link
          href="mailto:arturcamposba99@gmail.com"
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center  justify-center rounded-full border border-solid border-primary-foreground bg-primary font-semibold text-primary-foreground shadow-md hover:bg-primary-foreground hover:text-primary"
        >
          Contratar
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
