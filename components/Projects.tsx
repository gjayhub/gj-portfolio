import Image from "next/image";
import React from "react";
import { GitBranchIcon, Github, Wrench } from "lucide-react";
import { LinkPreview } from "./ui/Link-Preview";
import { MotionDiv } from "@/components/motions/MotionStagger";

const projectList = [
  {
    name: "BoardHunt",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum assumenda voluptatibus eius illum sed non doloribus aspernatur optio quis.",
    tool: [
      { name: "Expo", link: "https://expo.dev/" },
      { name: "Supabase", link: "https://supabase.com/" },
      { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
    ],
    image: "/boardhunt.png",
  },
  {
    name: "Ecommerce",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum assumenda voluptatibus eius illum sed non doloribus aspernatur optio quis.",
    tool: [
      { name: "NextJs", link: "https://expo.dev/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    ],
    image: "/ecommerce.png",
  },
  {
    name: "AniLib",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum assumenda voluptatibus eius illum sed non doloribus aspernatur optio quis.",
    tool: [
      { name: "NextJs", link: "https://expo.dev/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
    ],
    image: "/anime.jpg",
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20'>
      <h1 className='text-center text-[4rem] font-museo_muderno'>
        These are my projects
      </h1>
      <h3 className='text-slate-400 text-center m-auto max-w-[40vw] text-pretty text-lg'>
        I have worked on a variety of projects that showcase my skills and
        problem-solving abilities. Here are a few examples
      </h3>
      <div className='mt-24'>
        {projectList.map((value, key) => (
          <MotionDiv
            index={key}
            key={key}
            className={`flex justify-between items-center lg:mb-4 lg:gap-20 md:gap-20  md:mb-14 mb-28  gap-6 flex-wrap ${
              key % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* image container */}
            <div className='flex-1 bg-purple-black p-10 min-h-80 min-w-80 text-center rounded-3xl overflow-hidden'>
              <Image
                className='rounded-xl shadow-dark min-h-96 min-w-[90%]  object-cover m-auto '
                src={value.image}
                alt='boardhunt'
                width={400}
                height={400}
              />
            </div>
            {/* description container */}
            <div className=' flex-1 w-[50%] relative pb-20'>
              <h3 className='text-5xl font-bold m-0'>{value.name}</h3>
              <p className='text-left py-4 text-slate-300'>{value.des}</p>
              <div className='grid grid-cols-[70px_1fr] gap-4 mt-8 items-center'>
                <div>
                  <Wrench />
                </div>
                <div className=''>
                  <h4 className='font-bold text-lg'>Tools</h4>
                  <div className='flex gap-8 w-[350px]'>
                    {value.tool.map((tool, idx) => (
                      <LinkPreview
                        key={idx}
                        url={tool.link}
                        className='pt-4 text-slate-400 text-sm '
                      >
                        {tool.name}
                      </LinkPreview>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute right-5'>
                <div className='flex gap-6 mt-6'>
                  <Github className='border-2 w-[30px] h-[30px] border-slate-500 rounded-md' />
                  <Image
                    className='rounded-md'
                    src='/expo.png'
                    alt='expo'
                    height={30}
                    width={30}
                  />
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
