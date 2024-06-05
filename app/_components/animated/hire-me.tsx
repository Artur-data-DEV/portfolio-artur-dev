import Link from "next/link";
import Fullstack from "/public/fullstack.svg";

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-1 flex items-center justify-center overflow-hidden opacity-60 lg:left-0">
      <div className="relative flex h-auto w-36 items-center justify-center hover:text-primary-foreground lg:w-48">
        <Fullstack className="animate-spin-slow fill-slate-600 " />
        <span className="text-primary hover:text-primary-foreground">
          <Link
            href="mailto:arturcamposba99@gmail.com"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid  border-primary bg-primary-foreground text-sm font-semibold text-primary  shadow-md hover:bg-primary hover:text-primary-foreground  lg:h-24 lg:w-24 lg:text-lg"
          >
            Contratar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HireMe;
