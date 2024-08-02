import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Link from "next/link";
import Image from "next/image";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const sidebar = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
};

export const MobileNavigation = ({ isOpen }: any) => {
  return (
    <motion.div
      variants={sidebar}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0 }}
      className='  m-0 absolute top-0 right-0 rounded-bl-lg w-[150px] bg-black z-50'
    >
      <Link href='#home' className='absolute top-2 left-10'>
        <Image
          className='z-50'
          src='/logo.png'
          width={70}
          height={70}
          alt='logo'
        />
      </Link>
      <motion.ul className='mt-20' variants={variants}>
        {listNav.map((item, i) => (
          <MenuItem item={item} i={i} key={i} />
        ))}
      </motion.ul>{" "}
    </motion.div>
  );
};

const listNav = ["home", "skills", "projects", "contact"];
