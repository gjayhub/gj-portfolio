"use client";
import { motion } from "framer-motion";
export const MotionDiv = ({
  children,
  className,
  index,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  index?: number;
}>) => {
  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <motion.div
      variants={fadeInAnimationVariant}
      initial='initial'
      whileInView='animate'
      className={`${className}`}
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};
