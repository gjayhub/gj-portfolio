"use client";
import useActive from "@/utils/store/UseActive";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import Link from "next/link";
import { useDimensions } from "@/utils/hooks/useDimention";
import { MobileNavigation } from "./ui/MobileNav";
import { MenuItem } from "./ui/MenuItem";
import { MenuToggle } from "./ui/MenuToggle";

const NavBar: React.FC = () => {
  const [listNav] = useState<string[]>([
    "home",
    "skills",
    "projects",
    "contact",
  ]);
  const { activeTab, setActiveTab } = useActive();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    listNav.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveTab(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check to set active tab on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [listNav, setActiveTab]);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const variants = {
    active: {
      scale: 1.1,
      color: "#af01bb", // Example primary color
      transition: {
        duration: 0.3,
      },
    },
    inactive: {
      scale: 1,
      color: "#eee", // Example default color
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='w-full relative'>
      <div className='grid grid-cols-[70px 1fr]'>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className=' fixed md:hidden top:0 right-0 z-50  w-[300px] '
        >
          <motion.div
            className='md:hidden top:0 right-0 w-[300px]'
            variants={sidebar}
          />
          <MobileNavigation isOpen={isOpen} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
      <header
        className='fixed w-full max-w-[1300px]  hidden md:flex m-0 h-14 top-0 left-[50%] transform -translate-x-1/2 justify-between items-center px-[20px] z-10'
        style={{ backdropFilter: "blur(10px)" }}
      >
        <Link href='#home'>
          <Image
            className='z-50'
            src='/logo.png'
            width={70}
            height={70}
            alt='logo'
          />
        </Link>

        <nav className='flex gap-12'>
          {listNav.map((value, key) => (
            <Link key={key} href={`#${value}`}>
              <motion.span
                className='font-museo_muderno cursor-pointer capitalize'
                onClick={() => setActiveTab(value)}
                variants={variants}
                animate={activeTab === value ? "active" : "inactive"}
              >
                {value}
              </motion.span>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
