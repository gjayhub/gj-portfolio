import Image from "next/image";
import { HoverEffect } from "./ui/CardHoverEffect";

const listSkill = [
  {
    name: "NEXT.JS",
    image: "/nextjs.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
  {
    name: "EXPO",
    image: "/expo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
  {
    name: "TYPESCRIPT",
    image: "/typescript.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
  {
    name: "FRAMER MOTION",
    image: "/framer.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
  {
    name: "MONGO DB",
    image: "/mongo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
  {
    name: "FIREBASE",
    image: "/firebase.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos neque sit aliquid nobis, fugit ex labore ea distinctio suscipit",
  },
];
export default function Skills() {
  return (
    <section className='py-20 w-full' id='skills'>
      <h1 className='text-center text-[4rem] font-museo_muderno'>
        These are my Skills
      </h1>
      <p className='text-slate-400 text-center text-balance m-auto mb-10'>
        I am passionate about keeping up with industry developments and
        constantly researching to expand my knowledge. I have extensive
        knowledge with the technologies and tools listed below. 
      </p>
      <HoverEffect items={listSkill} />
    </section>
  );
}
