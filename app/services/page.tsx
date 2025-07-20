import { Code2, Database, Server, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-green-500" />,
    title: "Frontend Development",
    description:
      "Responsive, SEO-friendly interfaces using Next.js, React, and Tailwind.",
    tags: ["Next.js", "Tailwind", "ShadCN UI"],
  },
  {
    icon: <Server className="w-8 h-8 text-blue-500" />,
    title: "Backend Development",
    description:
      "Scalable APIs with Node.js and Prisma for efficient data handling.",
    tags: ["Node.js", "Prisma", "REST API"],
  },
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    title: "Database Design",
    description:
      "Robust schemas and optimized queries for high-performance apps.",
    tags: ["Prisma ORM", "PostgreSQL", "SQL"],
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    title: "Deployment",
    description:
      "Deploy and scale your apps on Vercel, AWS, or Docker environments.",
    tags: ["Vercel", "Docker", "CI/CD"],
  },
];

export default function Services() {
  return (
    <section className="py-16 " id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6  rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-start gap-4"
            >
              <div className="p-3 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-2 py-1 text-xs rounded-full  text-green-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// const page = () => {
//   return (
//     <div className="h-full">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
//           <h1>My Services</h1>
//           <p>I offer a variety of services to help you succeed.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

// // "use client";

// // const Services = () => {
// //   const info = {
// //     name: "hmnn",
// //     age: 28,
// //     skill: [
// //       {
// //         name: "electronic",
// //       },
// //       {
// //         name: "it",
// //       },
// //       {
// //         name: "mechanical",
// //       },
// //       {
// //         name: "programming",
// //       },
// //     ],
// //     education: [
// //       {
// //         degree: "B.Sc Geoloyg",
// //         location: "Mawlamyine",
// //         year: "2014-2019",
// //       },
// //       {
// //         degree: "Diploma in M&E",
// //         location: "Yangon",
// //         year: "2020-2020",
// //       },
// //     ],
// //   };

// //   // console.log({ ...info, age: 29 });

// //   // Destructure the skill array and replace the first item
// //   const [firstSkill, b, ...restSkills] = info.skill;
// //   const updatedSkills = [{ name: "robotics" }, ...restSkills];
// //   const updatedInfo = { ...info, skill: updatedSkills };

// //   const dir = { ...info, skill:  };

// //   console.log(dir, "arr");

// //   return (
// //     <div>
// //       <h1>{info.name}</h1>
// //       <h2>{info.age}</h2>
// //     </div>
// //   );
// // };

// // export default Services;
