"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlicebarButton from "./_components/SlicebarButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "jobDiary - Job Application Tracker",
    description:
      "A web application for tracking job applications. It allows users to manage their job search process efficiently, including tracking applications, interviews, and follow-ups. (Please Note : When visit the jobdiary, you need to login with your github account to wait for a while to see all job list because i deployed it on free server on both backend and database so it may take some time to load the data)",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Redux Toolkit" },
      { name: "RTK Query" },
      { name: "TypeScript" },
      { name: "Nodejs /Express" },
      { name: "Raw SQL" },
    ],
    image: "/assets/details.png",
    live: "https://jobdiary.vercel.app/",
    github: "https://www.github.com/htoomyatnyinyi",
  },
  {
    num: "02",
    category: "frontend",
    title: "Ecommerce",
    description:
      "An e-commerce web application that allows users to browse products, add them to a cart, and manage their orders.(Frontend part - Under development)",
    stack: [
      { name: "ReactJs" },
      { name: "TailwindCSS" },
      { name: "shadcn/ui" },
      { name: "Reduxtoolkit" },
      { name: "RTK Query" },
      { name: "Typescript" },
      { name: "Some necessary frontend library" },
    ],
    image: "/assets/ecommerce.png",
    live: "",
    github: "https://github.com/htoomyatnyinyi/ecommerce_client.git",
  },
  {
    num: "03",
    category: "backend",
    title: "Nodejs With Prisma ORM for Ecommerce API",
    description:
      "A backend API for an e-commerce application built with Node.js and Prisma ORM. It provides endpoints for managing products, orders, and user authentication.",
    stack: [
      { name: "Nodejs with Express" },
      { name: "Prisma ORM" },
      { name: "Typescript" },
      { name: "Some necessary backend library" },
    ],
    image: "/assets/project_2.png",
    live: "",
    github: "https://github.com/htoomyatnyinyi/ecommerce_server.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const handleSlideChange = (swiper: any) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-12 items-start">
          {/* Left Side */}
          <div className="w-full xl:w-1/2 order-2 xl:order-none mt-8 xl:mt-0">
            <div className="flex flex-col gap-6">
              <div className="text-7xl md:text-8xl font-extrabold text-gray-100">
                {project.num}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white hover:text-green-500 transition-colors capitalize">
                {project.category} Project
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-3">
                {project.stack?.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm md:text-base text-green-500 font-medium px-3 py-1 border border-green-500 rounded-full"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20 my-4"></div>

              {/* Buttons */}
              <div className="flex items-center gap-6">
                <Link href={project.live || "#"} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="h-16 w-16 flex justify-center items-center bg-white/10 hover:bg-white/20 transition rounded-full group">
                        <BsArrowUpRight className="text-2xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github || "#"} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="h-16 w-16 flex justify-center items-center bg-white/10 hover:bg-white/20 transition rounded-full group">
                        <BsGithub className="text-2xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>GitHub Repo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full xl:w-1/2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-8"
              onSlideChange={handleSlideChange}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-xl shadow-lg border border-white/10 object-cover w-full h-[300px] md:h-[400px] xl:h-[500px]"
                  />
                </SwiperSlide>
              ))}
              <SlicebarButton />
            </Swiper>

            {/* Custom Nav Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                ref={prevRef}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                ref={nextRef}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

// "use client";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import SlicebarButton from "./_components/SlicebarButton";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet temporibus expedita quos, ea id velit provident, debitis perspiciatis quam ex pariatur magni distinctio labore aspernatur consectetur unde veniam accusantium?",
//     stack: [
//       { name: "react" },
//       { name: "tailwindcss" },
//       { name: "reduxtoolkit" },
//       { name: "rtk query" },
//     ],
//     image: "/assets/hmnn.jpeg",
//     live: "",
//     github: "https://www.github.com/htoomyatnyinyi/project1",
//   },
//   {
//     num: "02",
//     category: "fullstack",
//     title: "project 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet temporibus expedita quos, ea id velit provident, debitis perspiciatis quam ex pariatur magni distinctio labore aspernatur consectetur unde veniam accusantium?",
//     stack: [
//       { name: "Nextjs" },
//       { name: "tailwindcss" },
//       { name: "seo" },
//       { name: "prisma ORM" },
//       { name: "shadcn ui" },
//     ],
//     image: "/assets/hmnn.jpeg",
//     live: "",
//     github: "https://www.github.com/htoomyatnyinyi/project1",
//   },
//   {
//     num: "03",
//     category: "fullstack",
//     title: "project 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet temporibus expedita quos, ea id velit provident, debitis perspiciatis quam ex pariatur magni distinctio labore aspernatur consectetur unde veniam accusantium?",
//     stack: [
//       { name: "Nextjs" },
//       { name: "tailwindcss" },
//       { name: "seo" },
//       { name: "prisma ORM" },
//       { name: "shadcn ui" },
//     ],
//     image: "/assets/hmnn.jpeg",
//     live: "",
//     github: "https://www.github.com/htoomyatnyinyi/project1",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);
//   const handleSlideChange = (swiper: any) => {
//     console.log(swiper, "handle");
//     // get current index
//     const currentIndex = swiper.activeIndex;
//     // update project base on index
//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 2, duration: 0.2 }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-9 ">
//           <div className="w-full xl:w-1/2 xl:h-100 flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-6 h-1/2 ">
//               <div className="text-8xl font-extrabold  ">{project.num}</div>

//               <h2 className="text-4xl font-bold leading-none hover:text-green-500 transition-all duration-500 capitalize">
//                 {project.category} Project
//               </h2>
//               <p className=" text-white/60">{project.description}</p>
//               {/* tech stack */}
//               <ul className="flex gap-4 capitalize">
//                 {project.stack?.map((item, index) => (
//                   <li key={index} className="text-xl text-green-500">
//                     {item.name}
//                     {index !== project.stack.length - 1 && ","}
//                   </li>
//                 ))}
//               </ul>
//               {/* border */}
//               <div className="border border-white/60"></div>
//               {/* live project */}
//               <div className="flex items-center gap-4">
//                 <Link href={project.live || "#"}>
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger className="h-20 w-20 flex justify-center items-center bg-white/5 rounded-full group">
//                         <BsArrowUpRight className="text-3xl group-hover:text-green-500" />
//                       </TooltipTrigger>
//                       <TooltipContent>Live Project</TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//                 {/* github */}
//                 <Link href={project.github || "#"}>
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger className="h-20 w-20 flex justify-center items-center bg-white/5 rounded-full group">
//                         <BsGithub className="text-3xl group-hover:text-green-500" />
//                       </TooltipTrigger>
//                       <TooltipContent>Github Repo </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-1/2 ">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12"
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((p, index) => (
//                 <SwiperSlide key={index} className="w-full">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className=" h-auto relative rounded-lg"
//                   />
//                 </SwiperSlide>
//               ))}
//               <SlicebarButton />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Work;

// {
//   /*
//   // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectLabel,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
//   <div>
//   <Select>
//     <SelectTrigger>
//       <SelectValue placeholder="select a service" />
//     </SelectTrigger>
//     <SelectContent>
//       <SelectGroup>
//         <SelectLabel>Select a Service</SelectLabel>
//         <SelectItem value="frontend">Frontend Development</SelectItem>
//         <SelectItem value="backend">Backend Development</SelectItem>
//         <SelectItem value="database">Database Development </SelectItem>
//         <SelectItem value="deploy">Deploy </SelectItem>
//       </SelectGroup>
//     </SelectContent>
//   </Select>
// </div>; */
// }
