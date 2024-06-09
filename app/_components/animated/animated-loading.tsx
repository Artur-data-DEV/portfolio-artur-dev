"use client";
import { motion } from "framer-motion";
import { Vortex } from "react-loader-spinner";

const LoadingText = () => (
  <motion.span
    className="text-lg font-semibold text-gray-800"
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    Carregando
  </motion.span>
);

const LoadingVortex = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <LoadingText />
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default LoadingVortex;
