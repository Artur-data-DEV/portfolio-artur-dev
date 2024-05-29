"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="mt2 flex items-center justify-center">
      <MotionLink
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-950"
        whileHover={{
          scale: 1.3,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <MdOutlineConnectWithoutContact />
      </MotionLink>
    </div>
  );
};

export default Logo;
