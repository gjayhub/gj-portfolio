"use client";

import { LoaderIcon } from "lucide-react";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export function SubmitButton() {
  const { pending } = useFormStatus();
  useEffect(() => {}, [pending]);
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type='submit'
      disabled={pending}
      className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
        {pending ? (
          <p>
            Sending
            <LoaderIcon className='animate-spin inline-block ml-2' />
          </p>
        ) : (
          "Send Message"
        )}
      </span>
    </motion.button>
  );
}
