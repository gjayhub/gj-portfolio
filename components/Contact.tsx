import React from "react";
import ContactForm from "./ui/ContactForm";

import { MotionAppear } from "./motions/MotionAppear";

export default function Contact() {
  return (
    <section
      id='contact'
      className='pb-28 mt-12 flex flex-wrap justify-center items-center gap-10 '
    >
      <MotionAppear
        direction='left'
        className='text-center mb-12 md:w-[45%] w-[90%]'
      >
        <h1 className='text-center leading-[3rem] text-[4rem] font-museo_muderno mb-4'>
          Contact me
        </h1>
        <p className='text-slate-400 mt-9 mx-auto text-center  text-4xl'>
          Get in touch and lets make a project together!
        </p>
      </MotionAppear>

      <MotionAppear
        direction='right'
        className='md:w-[45%] w-[90%] p-8  rounded-lg shadow-lg backdrop-blur-3xl bg-white/10 border border-white/10'
      >
        <ContactForm />
      </MotionAppear>
    </section>
  );
}
