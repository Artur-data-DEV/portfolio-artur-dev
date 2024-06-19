import dynamic from "next/dynamic";
import React from "react";
import { IconData } from "@lordicon/react/dist/interfaces";

type IconProps = {
  icon: IconData;
  delay: number;
};

type BiographyItemProps = {
  icon: IconProps["icon"];
  delay: IconProps["delay"];
  text: string;
  reverse?: boolean;
};

const DynamicLordicon = dynamic<IconProps>(() => import("../icons/lordicon"), {
  ssr: false,
});

const BiographyItem: React.FC<BiographyItemProps> = ({
  icon,
  delay,
  text,
  reverse,
}) => {
  return (
    <div
      className={`flex items-center ${reverse ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="flex-shrink-0 rounded-full bg-muted p-2">
        <DynamicLordicon icon={icon} delay={delay} />
      </div>
      <div className="ml-2 max-w-[calc(100%-2rem)] rounded-lg p-2 text-sm sm:text-base lg:text-lg xl:text-xl">
        {text}
      </div>
    </div>
  );
};

export default BiographyItem;
