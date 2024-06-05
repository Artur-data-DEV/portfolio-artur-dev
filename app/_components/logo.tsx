"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-950"
        whileHover={{
          scale: 1.3,
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "rgba(4, 120, 215, 1)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ backgroundColor: "white" }}
      >
        <MdOutlineConnectWithoutContact />
      </MotionLink>
    </div>
  );
};

export default Logo;
