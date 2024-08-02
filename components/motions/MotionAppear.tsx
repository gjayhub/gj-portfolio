"use client";
import { animate, motion } from "framer-motion";

export const MotionAppear = ({
  children,
  className,
  direction,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  direction?: string;
}>) => {
  const initialX =
    direction === "left" ? -200 : direction === "right" ? 200 : 0;

  const inView = {
    initial: { opacity: 0, scale: 0.5, x: initialX },
    animate: { opacity: 1, scale: 1, x: 0 },
  };
  return (
    <motion.div
      variants={inView}
      initial='initial'
      whileInView='animate'
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
