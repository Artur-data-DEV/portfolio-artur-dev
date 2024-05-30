"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumbersProps {
  className: string;
  value: number;
}

const AnimatedNumbers = ({ className, value }: AnimatedNumbersProps) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        (ref.current as HTMLElement).innerText = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span className={className} ref={ref} />;
};

export default AnimatedNumbers;
