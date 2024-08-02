import React from "react";
import { Facebook, Instagram, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mt-16 py-5 bg-gradient-to-r from-[#1e0420] via-[#330249] to-[#1e0b22] text-center text-white '>
      <div>
        <h1 className='text-2xl'>Gee Jay Rivera</h1>
        <p className='text-slate-400 text-xs my-2'>Full-Stack Developer</p>
      </div>
      <p className='w-[70%] text-center m-auto text-sm'>
        Thank you for visiting my portfolio. If you have any further questions
        or would like to discuss potential collaborations, please don&apos;t
        hesitate to reach out to me. Have a great day!
      </p>
      <div className='flex flex-row justify-center items-center gap-10 mt-2'>
        <Link href='https://www.facebook.com/gee.jay.75033149/'>
          <Facebook />
        </Link>
        <Link href='https://www.instagram.com/i_am_not_gj/?igsh=MXZrZmdhd3BwODhr&fbclid=IwY2xjawEYDwpleHRuA2FlbQIxMAABHdvsOn2VWhJU_lRdVy-NHhxRZb2g-xVLpkdu9HDZlZzPA-ln9BHoiTwlnQ_aem_12ykK4ii4PQm67PBv5qYUA'>
          <Instagram />
        </Link>
        <Link href='https://www.instagram.com/i_am_not_gj/?igsh=MXZrZmdhd3BwODhr&fbclid=IwY2xjawEYDwpleHRuA2FlbQIxMAABHdvsOn2VWhJU_lRdVy-NHhxRZb2g-xVLpkdu9HDZlZzPA-ln9BHoiTwlnQ_aem_12ykK4ii4PQm67PBv5qYUA'>
          <Github />
        </Link>
      </div>
    </footer>
  );
}
