"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Spotlight } from "./Spotlight";
import { MotionDiv } from "@/components/motions/MotionStagger";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className='relative group  block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <MotionDiv index={idx}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 h-full w-full bg-purple-900/[0.4]  block  rounded-3xl'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <Image
                key={item.name}
                className='bg-slate-200 rounded-md'
                src={item.image}
                alt={item.name}
                height={50}
                width={50}
              />
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </MotionDiv>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-purple-orange border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Spotlight
          className='-top-40 left-0 md:left-60 md:-top-20 z-50'
          fill='white'
        />
      </motion.div>

      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
