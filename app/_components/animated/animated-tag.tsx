import { motion } from "framer-motion";

interface AnimatedMotionComponentProps {
  tag: string;
  children: React.ReactNode;
  initial?: { [key: string]: any };
  [key: string]: any;
}

const AnimatedMotionComponent = ({
  tag,
  children,
  initial = { opacity: 0, y: 50 },
  ...rest
}: AnimatedMotionComponentProps) => {
  const MotionTag = motion[tag as keyof typeof motion] || motion.div;

  return (
    <MotionTag
      initial={initial}
      animate={{ opacity: 1, y: 0, visibility: "visible" }}
      transition={{ duration: 1 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedMotionComponent;
