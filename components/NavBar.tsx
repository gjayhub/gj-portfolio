"use client";
import useActive from "@/utils/store/UseActive";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [listNav] = useState<string[]>([
    "home",
    "skills",
    "projects",
    "contact",
  ]);
  const { activeTab, setActiveTab } = useActive();

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
    <header
      className='fixed w-full max-w-[1300px] h-14 top-0 left-[50%] transform -translate-x-1/2 flex justify-between items-center px-[20px] z-30'
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
  );
};

export default NavBar;
