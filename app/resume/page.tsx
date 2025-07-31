import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const PersonalInformation = [
  { label: "Name", value: "Htoo Myat Nyi Nyi" },
  { label: "Email", value: "htoomyatnyinyi@gmail.com" },
  { label: "Phone", value: "+66 0814152515" },
  { label: "Location", value: "Thailand, Bangkok" },
  { label: "GitHub", value: "https://github.com/htoomyatnyinyi" },
];

const Education = [
  {
    institution: "Mawlamyine University",
    degree: "B.Sc Geology",
    duration: "2015 - 2019",
  },
];

const Skills = [
  { name: "Next.js", level: "Advanced" },
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Shadcn UI", level: "Intermediate" },
  { name: "Prisma ORM", level: "Advanced" },
  { name: "RAW SQL", level: "Intermediate" },
];

const Projects = [
  {
    title: "jobDiary - Job Application Tracker",
    description:
      "A web application for tracking job applications. It allows users to manage their job search process efficiently, including tracking applications, interviews, and follow-ups. (Please Note : When visit the jobdiary, you need to login with your github account to wait for a while to see all job list because i deployed it on free server on both backend and database so it may take some time to load the data)",
  },
  {
    title: "E-commerce App (Frontend)",
    description:
      "An e-commerce web application that allows users to browse products, add them to a cart, and manage their orders.(Frontend part - Under development)",
  },
  {
    title: "Node.js with Prisma ORM for E-commerce API",
    description:
      "A backend API for an e-commerce application built with Node.js and Prisma ORM. It provides endpoints for managing products, orders, and user authentication.",
  },
];

const Resume = () => {
  return (
    <div className="flex items-center justify-center py-12 xl:py-24 ">
      <div className="container mx-auto h-full px-4">
        <Tabs defaultValue="personal_information" className="w-full">
          {/* Tab Buttons */}
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6  p-2 rounded-2xl shadow">
            <TabsTrigger value="personal_information">
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent
            value="personal_information"
            className="p-6  rounded-xl shadow space-y-4"
          >
            {PersonalInformation.map((info, index) => (
              <div
                key={index}
                className="flex justify-between border-b last:border-none pb-2"
              >
                <span className="font-medium ">{info.label}</span>
                <span className="">{info.value}</span>
              </div>
            ))}
          </TabsContent>

          {/* Education */}
          <TabsContent
            value="education"
            className="p-6  rounded-xl shadow space-y-4"
          >
            {Education.map((edu, index) => (
              <div key={index} className="border-b last:border-none pb-4">
                <h3 className="text-lg font-semibold ">{edu.degree}</h3>
                <p className="">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
            ))}
          </TabsContent>

          {/* Skills */}
          <TabsContent
            value="skills"
            className="p-6  rounded-xl shadow space-y-3"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex justify-between border p-3 rounded-lg hover:shadow transition"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Projects */}
          <TabsContent
            value="projects"
            className="p-6  rounded-xl shadow space-y-4"
          >
            {Projects.map((project, index) => (
              <div
                key={index}
                className="border-b last:border-none pb-4 hover: p-2 rounded-lg transition"
              >
                <Link href="/work">
                  {/* <Link href={`/work/${project.title.toLowerCase().replace(/ /g, "-")}`}> */}
                  <h3 className="text-lg font-semibold hover:underline ">
                    {project.title}
                  </h3>
                  <p className="">{project.description}</p>
                </Link>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const PersonalInformatino = [
//   {
//     label: "Name",
//     value: "Htoo Myat Nyi Nyi",
//   },
//   {
//     label: "Email",
//     value: "htoomyatnyinyi@gmail.com",
//   },
//   {
//     label: "Phone",
//     value: "+1 (234) 567-8901",
//   },
//   {
//     label: "Location",
//     value: "City, Country",
//   },
//   {
//     label: "Git",
//     value: "http://github.com/htoomyatnyinyi",
//   },
// ];

// const Education = [
//   {
//     institution: "Mawlamyine University",
//     degree: "B.Sc Geology",
//     duration: "2015 - 2019",
//   },
// ];

// const Skills = [
//   {
//     name: "Nextjs",
//     level: "Expert",
//   },
//   {
//     name: "React",
//     level: "Advanced",
//   },
//   {
//     name: "Node.js",
//     level: "Advanced",
//   },
//   {
//     name: "Tailwind CSS",
//     level: "Advanced",
//   },
//   {
//     name: "Prisma ORM",
//     level: "Advanced",
//   },
//   { name: "RAW SQL", level: "Intermediate" },
//   { name: "ShadCN", level: "Intermediate" },
// ];

// const Experience = [
//   {
//     title: "Junior Developer",
//     company: "Tech Company",
//     duration: "Jan 2020 - Present",
//     description: "Developing web applications using Next.js and React.",
//   },
//   {
//     title: "Freelance Developer",
//     company: "Full Stack Projects",
//     duration: "Jun 2018 - Dec 2019",
//     description:
//       "Building responsive user interfaces with React and Tailwind CSS.",
//   },
// ];

// const Resume = () => {
//   return (
//     <div className="flex items-center justify-center py-12 xl:py-0">
//       <div className="container mx-auto h-full">
//         <Tabs defaultValue="personal_information ">
//           <TabsList>
//             <TabsTrigger value="personal_information">
//               Personal Information
//             </TabsTrigger>
//             <TabsTrigger value="education">Education</TabsTrigger>
//             <TabsTrigger value="skills">Skills</TabsTrigger>
//             <TabsTrigger value="projects">Projects</TabsTrigger>
//           </TabsList>

//           <div className="order-1 xl:order-none mb-8 xl:mb-0">
//             <TabsContent value="personal_information">
//               {PersonalInformatino.map((info, index) => (
//                 <div key={index}>
//                   {info.label} : {info.value}
//                   <p>{info.label}</p>
//                   <p>{info.value}</p>
//                 </div>
//               ))}
//             </TabsContent>
//             <TabsContent value="education">
//               {Education.map((education, index) => (
//                 <div key={index}>
//                   <p>{education.degree}</p>
//                   <p>{education.institution}</p>
//                   <p>{education.duration}</p>
//                 </div>
//               ))}
//             </TabsContent>
//           </div>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Resume;

// // const Resume = () => {
// //   return (
// //     <div className="h-full">
// //       <div className="container mx-auto h-full">
// //         <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
// //           <div className="text-center xl:text-left order-2 xl:order-none ">
// //             <h1 className="text-[48px] xl:text-[80px] font-semibold">
// //               My Resume
// //             </h1>
// //             <p className="max-w-[500px] mb-9">
// //               Here is a brief overview of my professional journey and skills.
// //             </p>

// //             <Tabs defaultValue="personal_information">
// //               <TabsList>
// //                 <TabsTrigger value="personal_information">
// //                   Personal Information
// //                 </TabsTrigger>
// //                 <TabsTrigger value="education">Education</TabsTrigger>
// //                 <TabsTrigger value="skills">Skills</TabsTrigger>
// //                 <TabsTrigger value="projects">Projects</TabsTrigger>
// //               </TabsList>
// //               <div className="order-1 xl:order-none mb-8 xl:mb-0">
// //                 <TabsContent value="personal_information">
// //                   {PersonalInformatino.map((info) => (
// //                     <div className="">
// //                       {/* {info.label} : {info.value} */}
// //                       <p>{info.label}</p>
// //                       <p>{info.value}</p>
// //                     </div>
// //                   ))}
// //                 </TabsContent>
// //                 <TabsContent value="education">
// //                   {Education.map((education) => (
// //                     <div>
// //                       <p>{education.degree}</p>
// //                       <p>{education.institution}</p>
// //                       <p>{education.duration}</p>
// //                     </div>
// //                   ))}
// //                 </TabsContent>
// //               </div>
// //             </Tabs>
// //           </div>
// //           <div className="order-1 xl:order-none mb-8 xl:mb-0">
// //             {PersonalInformatino.map((info) => (
// //               <div className="">
// //                 <p>{info.label}</p>
// //                 <p>{info.value}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Resume;
