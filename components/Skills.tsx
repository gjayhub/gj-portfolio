import Image from "next/image";
import { HoverEffect } from "./ui/CardHoverEffect";

const listSkill = [
  {
    name: "NEXT.JS",
    image: "/nextjs.png",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation. It enhances performance and SEO for web applications.",
  },
  {
    name: "EXPO",
    image: "/expo.png",
    description:
      "Expo is a framework and platform for universal React applications, simplifying mobile development with its powerful tools and ease of use.",
  },
  {
    name: "TYPESCRIPT",
    image: "/typescript.png",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers type checking and improves code maintainability.",
  },
  {
    name: "FRAMER MOTION",
    image: "/framer.png",
    description:
      "Framer Motion is a production-ready motion library for React. It features a simple API and provides powerful animation capabilities.",
  },
  {
    name: "MONGO DB",
    image: "/mongo.png",
    description:
      "MongoDB is a NoSQL database known for its flexible, document-oriented data model and scalability.",
  },
  {
    name: "SUPABASE",
    image: "/supabase.png",
    description:
      "Supabase is an open-source backend that offers real-time databases, authentication, and storage solutions.",
  },
];
export default function Skills() {
  return (
    <section className='py-20' id='skills'>
      <h1 className='text-center text-[3rem] md:text-[4rem] font-museo_muderno'>
        These are my Skills
      </h1>
      <p className='text-slate-400 mt-5 text-center text-balance  mb-10'>
        I am passionate about keeping up with industry developments and
        constantly researching to expand my knowledge. I have extensive
        knowledge with the technologies and tools listed below. 
      </p>
      <HoverEffect items={listSkill} />
    </section>
  );
}
