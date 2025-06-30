import Skill from "@/components/sections/Skill";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ScienceBlock } from "@/components/sections/Skill";
import { FaGit, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

import bg2 from "@/public/bg2.jpg";
import htoo from "@/public/htoo.jpeg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 lg:text-left space-y-10 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="mb-2 block">Hello, I'm </span>
              <span
                className="text-transparent bg-clip-text animate-pulse
              bg-gradient-to-tl from-slate-600 via-white to-slate-900"
              >
                HTOO MYAT NYI NYI
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium">
              A Passionate Full-Stack Web Developer | OxWEB
            </p>
            <p className="text-md md:text-lg">
              Transforming ideas into powerful and engaging web experiences.
              Specializing in modern JavaScript frameworks, robust back-end
              solutions, and intuitive user interfaces.
            </p>
            <div className="flex items-center space-x-5">
              <a
                href="mailto:htoomyatnyinyi@gmail.com"
                className=" dark:bg-sky-500 dark:hover:bg-sky-600  
                font-semibold py-3 px-8 rounded-lg shadow-lg
                transform transition-transform scale-100 hover:scale-105"
              >
                GET IN TOUCH VIA EMAIL
              </a>
            </div>
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl text-slate-600 hover:text-slate-500" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl text-slate-600 hover:text-slate-500" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl text-slate-600 hover:text-slate-500" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center  h-screen">
            <div className="h-80 w-80 md:h-[760px] md:w-[760px]  bg-slate-500 rounded-full shadow-2xl flex items-center justify-center ">
              <div className="h-72 w-72 md:h-[700px] md:w-[700px] bg-slate-900 rounded-full shadow-2xl flex items-center justify-center">
                <Image
                  src={htoo}
                  alt="bg2"
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skill />
      <AboutMe />
      <ScienceBlock />
      <Footer />
    </div>
  );
};

export default Home;

// <div className="lg:w-1/2 flex items-center justify-center  h-screen ">
//   <div className="h-80 w-80 md:h-full md:w-full bg-sky-500 rounded-full shadow-2xl flex items-center justify-center ">
//     <div className="h-72 w-72 md:h-88 md:w-88 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center">
//       <Image
//         src={bg2}
//         alt="bg2"
//         className="object-cover rounded-full h-full w-full"
//       />
//     </div>
//   </div>
// </div>;

const HeroSection = () => {
  return (
    <div>
      <section className="min-h-[50vh] flex items-center justify-center py-8 sm:py-12">
        {/* Adjusted min-h for better mobile display, added padding */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 lg:text-left space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="mb-2 block">Hello, I'm </span>
              <span
                className="text-transparent bg-clip-text animate-pulse
              bg-gradient-to-tl from-slate-600 via-white to-slate-900"
              >
                HTOO MYAT NYI NYI
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium">
              A Passionate Junior Full-Stack Web Developer | OxWEB
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Transforming ideas into powerful and engaging web experiences.
              Specializing in modern JavaScript frameworks, robust back-end
              solutions, and intuitive user interfaces.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="mailto:htoomyatnyinyi@gmail.com"
                className="dark:bg-sky-500 dark:hover:bg-sky-600  
              font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg
              transform transition-transform scale-100 hover:scale-105
              text-sm sm:text-base"
              >
                GET IN TOUCH VIA EMAIL
              </a>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4 items-baseline">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl sm:text-3xl text-slate-600 hover:text-slate-500" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl sm:text-3xl text-slate-600 hover:text-slate-500" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl sm:text-3xl text-slate-600 hover:text-slate-500" />
              </a>
            </div>
          </div>
          {/* Right Section: Circular Image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            {/* Responsive circle sizes with more breakpoints */}
            <div className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[450px] xl:w-[450px] bg-slate-500 rounded-full shadow-2xl flex items-center justify-center">
              <div className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-88 lg:w-88 xl:h-[410px] xl:w-[410px] bg-slate-900 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src={htoo}
                  alt="Profile picture of Htoo Myat Nyi Nyi"
                  width={352} // Matches lg:h-88 lg:w-88 (352px)
                  height={352}
                  className="object-cover rounded-full h-full w-full"
                  priority // Optional: Improves loading for above-the-fold image
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-1/2 w-1/2 text-wrap text-left p-10">
        <h1 className="text-3xl font-semibold">
          Hello, I’m Htoo Myat Nyi Nyi!{" "}
        </h1>
        <br />
        <p>
          I’m a self-taught front-end developer base in Yangon, Myanmar. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>
        <br />
        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online.
        </p>
        <br />
        <p>
          I'm always try to learn about the newest technology and framework.
        </p>
        <br />
        <div>
          <ul>3. Database (Data Storage & Management):</ul>
          <li>
            Relational Database: You have MySQL, a very widely used relational
            database. PostgreSQL is another popular open-source alternative
            often favored for its advanced features.
          </li>
          <li>
            ORM (Object-Relational Mapper): Prisma ORM is an excellent, modern
            choice that provides type-safety and a great developer experience.
            Alternatives include TypeORM or Sequelize.
          </li>
        </div>
      </div>

      <div>
        <div className="space-y-1">
          <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
          <p className="text-muted-foreground text-sm">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <p>I'm interested in freelance oppertunities</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact-section" className=" text-center px-4">
      <p className="">Interested in working together or have a question?</p>
      <a
        href="mailto:your.email@example.com" // Replace with your actual email
        className="text-sky-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-500 font-semibold text-lg"
      >
        htoomyatnyinyi@gmail.com
      </a>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} HTOO MYAT NYI NYI (OxWEB)
      </p>
    </footer>
  );
};
