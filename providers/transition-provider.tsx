"use client";
import HireMe from "@/app/_components/animated/hire-me";
import Loading from "@/app/loading";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    if (pathName === "/about") {
      window.scrollTo(0, 0);
    }
  }, [pathName]);

  return (
    <AnimatePresence data-testid="animate-presence">
      {!isReady ? (
        <Loading />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
            }}
          >
            {children}
          </motion.div>
          <HireMe />
        </>
      )}
    </AnimatePresence>
  );
};

export default TransitionProvider;
