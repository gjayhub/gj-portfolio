import Image from "next/image";
import React from "react";
import { Chrome, GitBranchIcon, Github, Wrench } from "lucide-react";
import { LinkPreview } from "./ui/Link-Preview";
import { MotionDiv } from "@/components/motions/MotionStagger";
import Link from "next/link";

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
    demo: [
      {
        code: "github",
        link: "https://expo.dev/artifacts/eas/SB81urVWVZnEQoA5RnYjH.apk",
        type: "apk",
      },
    ],
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
    demo: [{ code: "github", link: "/", type: "web" }],
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
    demo: [{ code: "github", link: "/", type: "web" }],
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20'>
      <h1 className='text-center text-[2rem] md:text-[4rem]font-museo_muderno'>
        These are my projects
      </h1>
      <h3 className='text-slate-400 mt-5 mb-14 mb text-center  text-pretty text-lg'>
        I have worked on a variety of projects that showcase my skills and
        problem-solving abilities. Here are a few examples
      </h3>
      <div className=''>
        {projectList.map((value, key) => (
          <MotionDiv
            index={key}
            key={key}
            className={`flex items-center justify-center  flex-col gap-4 mb-10  md:flex-row flex-wrap ${
              key % 2 === 0 ? "flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className='w-[90%] md:w-[45%] gap-10 bg-purple-black md:p-10 min-h-80 text-center rounded-3xl '>
              <Image
                className='rounded-xl shadow-dark min-h-96  object-cover m-auto '
                src={value.image}
                alt='boardhunt'
                width={400}
                height={400}
              />
            </div>

            <div className='w-[90%] md:w-[45%] relative '>
              <h3 className='text-xl font-bold '>{value.name}</h3>
              <p className='py-4 text-slate-300 '>{value.des}</p>
              <div className='flex justify-between gap-4  '>
                <div className='flex gap-4 text-center justify-center items-center'>
                  <h4 className='font-bold text-lg text-left '>Tools:</h4>
                  <div className='flex gap-4 flex-wrap'>
                    {value.tool.map((tool, idx) => (
                      <LinkPreview
                        key={idx}
                        url={tool.link}
                        className=' text-slate-400 text-sm '
                      >
                        {tool.name}
                      </LinkPreview>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mb-10'>
                <div>
                  {value.demo.map((item, idx) => (
                    <div key={idx} className='flex gap-6 mt-6'>
                      <Link href={item.code}>
                        <Github className='border-2  h-[30px] border-slate-500 rounded-md' />
                      </Link>
                      {item.type === "apk" ? (
                        <Link href={item.link}>
                          <Image
                            className='rounded-md h-[30px] bg-slate-200 border-2 border-slate-500'
                            src='/apk.png'
                            alt='apk'
                            height={30}
                            width={30}
                          />
                        </Link>
                      ) : (
                        <Link href='/'>
                          <Chrome className='border-2  h-[30px] border-slate-500 rounded-md' />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
