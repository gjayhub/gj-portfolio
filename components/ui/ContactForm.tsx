"use client";

import { sendEmail } from "@/utils/action";
import { LoaderIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom"; // Make sure this is correct

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitButton } from "./SubmitButton";

export default function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, { message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "error") {
      toast("Oops! Something went wrong!");
    }
    if (state.message === "success") {
      toast("Your message has been sent!");
      formRef?.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className='space-y-6'>
      <h2 className='text-2xl font-semibold text-center mb-6'>
        Send me a message
      </h2>
      <div>
        <label htmlFor='name' className='block font-bold  text-slate-300'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='mt-1 block w-full text-slate-950 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Your name'
          required
        />
      </div>

      <div>
        <label htmlFor='email' className='block font-bold  text-slate-300'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='mt-1 block w-full px-3 py-2 text-slate-950 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='you@example.com'
          required
        />
      </div>

      <div>
        <label htmlFor='message' className='block font-bold  text-slate-300'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          className='mt-1 block w-full px-3 py-2 border text-slate-950 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Your message'
          required
        />
      </div>

      <div className='text-center'>
        <SubmitButton />
      </div>
    </form>
  );
}
