import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Signature = () => {
  const [paths, setPaths] = useState<SVGPathElement[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    fetch("/signature.svg")
      .then((response) => response.text())
      .then((text) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const pathElements = Array.from(svgDoc.querySelectorAll("path"));
        setPaths(pathElements);
      });
  }, []);

  useEffect(() => {
    if (inView && paths.length > 0) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, paths, controls]);

  return (
    <div ref={ref} className="autograph-container">
      <svg
        ref={svgRef}
        className="autograph"
        height="200"
        viewBox="0 0 500 800"
        width="300px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          transform="translate(2 2)"
          className="stroke-current"
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              className="autograph__path"
              d={path.getAttribute("d") as string}
              initial="hidden"
              animate={controls}
              custom={index}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: (index) => ({
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }, // Adjust delay for staggered animation
                }),
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Signature;
