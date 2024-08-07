import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MotionAppear } from "./motions/MotionAppear";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id='home'
      className='md:pt-36 mt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10  '
    >
      <div className='font-museo_muderno'>
        <MotionAppear className='px-4 text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1em]'>
          <div>
            <p className=''>MY NAME IS </p>
            <span className=' block name-animation p-2 rounded-lg'>
              GEE JAY
            </span>
            <TextGenerateEffect
              words="I am a skilled Full-stack Web Developer with a strong background in
          Next.js, Firebase, and MongoDB. I seek opportunities where I can
          leverage my expertise to deliver efficient and sustainable websites
          that contribute to your business's growth in the digital world."
              className='text-slate-400  my-8 border-l-4 pl-10 border-primary text-base  lg:text-lg'
            />
          </div>
          <Link
            href='/CV.pdf'
            target='_blank'
            className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
          >
            {" "}
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
              Download CV
            </span>
          </Link>{" "}
        </MotionAppear>
      </div>
      <div className='text-center '>
        <MotionAppear className='inline-flex  flex-col  shadow-large hover:shadow-large-lighter'>
          <Image
            src='/Hero.jpg'
            className='object-cover min-height object-top clip-poligon '
            height={600}
            width={400}
            alt='Hero image'
          />
          <div className='bg-slate-300 text-[#010824]  text-center gap-2 p-2 text-lg'>
            <p className='font-bold font-museo_muderno'>Full-Stack Developer</p>
            <div className='flex flex-row justify-center items-center gap-10 mt-2'>
              <Link href='https://www.facebook.com/gee.jay.75033149/'>
                <Facebook />
              </Link>
              <Link href='www.linkedin.com/in/gj0241'>
                <Linkedin />
              </Link>
              <Link href='https://www.instagram.com/i_am_not_gj/?igsh=MXZrZmdhd3BwODhr&fbclid=IwY2xjawEYDwpleHRuA2FlbQIxMAABHdvsOn2VWhJU_lRdVy-NHhxRZb2g-xVLpkdu9HDZlZzPA-ln9BHoiTwlnQ_aem_12ykK4ii4PQm67PBv5qYUA'>
                <Github />
              </Link>
            </div>
          </div>
        </MotionAppear>
      </div>
    </section>
  );
}
