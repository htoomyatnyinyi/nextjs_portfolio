import prisma from "@/lib/prisma";
import Link from "next/link";

async function getUsers(): Promise<any> {
  try {
    // Simulate a delay to see loading states (optional)
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    return await prisma.project.findMany();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return []; // Return an empty array or throw the error, depending on desired handling
  }
}

// Define a type for your user data if you have specific fields you expect
// interface UserProfile {
//   id: string; // or number, depending on your schema
//   name: string | null;
//   email: string;
//   avatarUrl?: string; // Optional: if you have user avatars
//   bio?: string;       // Optional: a short bio for the user card
// }

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block mb-2 text-slate-700 dark:text-slate-300">
                Hello, I'm
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 dark:from-blue-500 dark:via-sky-400 dark:to-cyan-300 animate-pulse">
                HTOO MYAT NYI NYI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
              A Passionate Full-Stack Web Developer | OxWEB
            </p>
            <p className="text-md md:text-lg text-slate-500 dark:text-slate-500">
              Transforming ideas into powerful and engaging web experiences.
              Specializing in modern JavaScript frameworks, robust back-end
              solutions, and intuitive user interfaces.
            </p>
            <div className="pt-4">
              <a
                href="mailto:htoomyatnyinyi@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                GET IN TOUCH VIA EMAIL
              </a>
              <Link href="/products" className="p-2 m-1 bg-yellow-400">
                Porduct List
              </Link>
              <Link href="/auth" className="p-2 m-1 bg-sky-400">
                Auth{" "}
              </Link>
              <div className="flex-1 pt-4 ">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                  {/* <FaGithub className="text-3xl text-gray-600 hover:text-blue-500" /> */}
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                  {/* <FaTwitter className="text-3xl text-gray-600 hover:text-blue-500" /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* You could place an image, illustration, or a more complex animation here */}
            <div className="h-80 w-80 md:h-96 md:w-96 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-full shadow-2xl flex items-center justify-center">
              <div className="h-72 w-72 md:h-88 md:w-88 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-center p-4">
                {/* Placeholder for an icon or short motto */}
                <p className="text-lg font-semibold">
                  Crafting Digital Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section (Placeholder for Projects/Skills) */}
      <section
        id="features"
        className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800 px-4"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            What I Do
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I build responsive, scalable, and user-friendly web applications
            using cutting-edge technologies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Feature/Skill Card 1 */}
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
                Frontend Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Crafting beautiful and interactive user interfaces with React,
                Next.js, Vue, and modern CSS.
              </p>
            </div>
            {/* Example Feature/Skill Card 2 */}
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
                Backend Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Building robust and scalable server-side applications with
                Node.js, Express, Prisma, and databases like PostgreSQL/MySQL.
              </p>
            </div>
            {/* Example Feature/Skill Card 3 */}
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
                Full-Stack Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Delivering end-to-end web solutions, from database design to
                deployment and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Users Section */}
      {users &&
        users.length > 0 && ( // Conditionally render if users exist
          <section
            id="users-mysql"
            className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 px-4"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
                Our Community (Users from Database)
              </h2>
              {users.length === 0 && !prisma ? ( // Check if prisma client might not be available (dev vs prod)
                <p className="text-center text-slate-500 dark:text-slate-400">
                  Loading users or no users found.
                </p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          {/* Placeholder for an avatar */}
                          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 dark:from-blue-600 dark:to-sky-500 flex items-center justify-center text-white text-xl font-bold group-hover:scale-105 transition-transform">
                            {user.username
                              ? user.username.charAt(0).toUpperCase()
                              : "U"}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                              {user.username || "Anonymous User"}
                            </h3>
                            <p className="text-blue-600 dark:text-sky-400 text-sm break-all">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {/* Replace with actual user bio or relevant info if available */}
                          A valued member of our community. Dedicated to
                          exploring and contributing to our platform's growth.
                        </p>
                      </div>
                      {/* You could add a footer to the card for actions or more links */}
                      {/* <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
                                        <a href={`/users/${user.id}`} className="text-sm text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-500 font-medium">
                                            View Profile &rarr;
                                        </a>
                                    </div> */}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

      {/* Add a Contact Section or Footer for completeness */}
      <footer
        id="contact-section"
        className="py-12 bg-slate-200 dark:bg-slate-800 text-center px-4"
      >
        <p className="text-slate-700 dark:text-slate-300">
          Interested in working together or have a question?
        </p>
        <a
          href="mailto:your.email@example.com" // Replace with your actual email
          className="text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-500 font-semibold text-lg"
        >
          your.email@example.com
        </a>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} HTOO MYAT NYI NYI (OxWEB). All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
// // import Test from "@/components/common/Test";
// import { Button } from "@/components/ui/button";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function getUsers() {
//   return await prisma.user.findMany();
// }

// export default async function Home() {
//   const users = await getUsers();

//   return (
//     <div>
//       <div className="max-h-screen  ">
//         <div className="flex items-center w-full justify-center  backdrop-blur-sm shadow-2xl p-10">
//           <div className="text-center space-x-8 bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
//             <div className="text-5xl font-bold mb-4 ">
//               Hello, I'm
//               <h1
//                 className="text-wrap text-8xl
//               bg-gradient-to-tl from-slate-900 to-slate-500
//               bg-clip-text text-transparent animate-accordion-down  "
//               >
//                 HTOO MYAT NYI NYI
//                 <p className="text-sm">OxWEB</p>
//               </h1>
//             </div>
//             <p className="animate-accordion-up mb-10">
//               A passionate web developer creating awesome things
//             </p>
//             <Button className="">GET IN TOUCH</Button>
//             {/* <p className="bg-gradient-to-tl from-slate-900 to-slate-500
//               bg-clip-text text-transparent">
//               I'm a [Your Profession] with X years of experience in [Your
//               Skills]. I specialize in creating [Your Specialization], and I'm
//               passionate about building user-friendly, efficient, and beautiful
//               applications.
//             </p> */}
//           </div>
//           <div className="h-96 w-96 bg-slate-900 dark:bg-white rounded-full animate-collapsible-down border-2"></div>
//         </div>
//       </div>
//       <div className="min-h-110 grid grid-cols-2 gap-4">
//         <div className=" bg-slate-500"></div>
//         <div className=" bg-slate-500"></div>
//       </div>
//       <div>
//         <h2 className="text-xl font-semibold mt-4">Users from MySQL</h2>
//         <ul className="flex justify-around items-center  h-96">
//           {users.map((user) => (
//             <li
//               key={user.id}
//               className="text-center self-center bg-amber-300 m-1 p-2"
//             >
//               <div className="h-26 w-26 relative  bg-white text-green-400  rounded-full">
//                 hi
//               </div>
//               {user.username || "No name"} - {user.email}
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
//                 cum tenetur dignissimos nostrum. Praesentium accusamus debitis
//                 facere illum qui, est quam aspernatur sunt explicabo molestias
//                 ut voluptas autem natus modi!
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* test */}

//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 py-20 px-4">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//           <div className="text-center lg:text-left lg:w-1/2 space-y-6">
//             <h1 className="text-5xl md:text-7xl font-bold">
//               <span className="block mb-2 text-slate-700 dark:text-slate-300">
//                 Hello, I'm
//               </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 dark:from-blue-500 dark:via-sky-400 dark:to-cyan-300 animate-pulse">
//                 HTOO MYAT NYI NYI
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
//               A Passionate Full-Stack Web Developer | OxWEB
//             </p>
//             <p className="text-md md:text-lg text-slate-500 dark:text-slate-500">
//               Transforming ideas into powerful and engaging web experiences.
//               Specializing in modern JavaScript frameworks, robust back-end
//               solutions, and intuitive user interfaces.
//             </p>
//             <div className="pt-4">
//               <Button>GET IN TOUCH</Button>
//             </div>
//           </div>
//           <div className="lg:w-1/2 flex justify-center">
//             {/* You could place an image, illustration, or a more complex animation here */}
//             <div className="h-80 w-80 md:h-96 md:w-96 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-full shadow-2xl flex items-center justify-center">
//               <div className="h-72 w-72 md:h-88 md:w-88 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-center p-4">
//                 {/* Placeholder for an icon or short motto */}
//                 <p className="text-lg font-semibold">
//                   Crafting Digital Excellence
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Featured Section (Placeholder for Projects/Skills) */}
//       <section
//         id="features"
//         className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800 px-4"
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
//             What I Do
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
//             I build responsive, scalable, and user-friendly web applications
//             using cutting-edge technologies.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Example Feature/Skill Card 1 */}
//             <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
//                 Frontend Development
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300">
//                 Crafting beautiful and interactive user interfaces with React,
//                 Next.js, Vue, and modern CSS.
//               </p>
//             </div>
//             {/* Example Feature/Skill Card 2 */}
//             <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
//                 Backend Development
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300">
//                 Building robust and scalable server-side applications with
//                 Node.js, Express, Prisma, and databases like PostgreSQL/MySQL.
//               </p>
//             </div>
//             {/* Example Feature/Skill Card 3 */}
//             <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-sky-400">
//                 Full-Stack Solutions
//               </h3>
//               <p className="text-slate-600 dark:text-slate-300">
//                 Delivering end-to-end web solutions, from database design to
//                 deployment and maintenance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {users &&
//         users.length > 0 && ( // Conditionally render if users exist
//           <section
//             id="users-mysql"
//             className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 px-4"
//           >
//             <div className="container mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
//                 Our Community (Users from Database)
//               </h2>
//               {users.length === 0 && !prisma ? ( // Check if prisma client might not be available (dev vs prod)
//                 <p className="text-center text-slate-500 dark:text-slate-400">
//                   Loading users or no users found.
//                 </p>
//               ) : (
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                   {users.map((user) => (
//                     <li
//                       key={user.id}
//                       className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
//                     >
//                       <div className="p-6">
//                         <div className="flex items-center space-x-4 mb-4">
//                           {/* Placeholder for an avatar */}
//                           <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 dark:from-blue-600 dark:to-sky-500 flex items-center justify-center text-white text-xl font-bold group-hover:scale-105 transition-transform">
//                             {user.username
//                               ? user.username.charAt(0).toUpperCase()
//                               : "U"}
//                           </div>
//                           <div>
//                             <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
//                               {user.username || "Anonymous User"}
//                             </h3>
//                             <p className="text-blue-600 dark:text-sky-400 text-sm break-all">
//                               {user.email}
//                             </p>
//                           </div>
//                         </div>
//                         <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
//                           {/* Replace with actual user bio or relevant info if available */}
//                           A valued member of our community. Dedicated to
//                           exploring and contributing to our platform's growth.
//                         </p>
//                       </div>
//                       {/* You could add a footer to the card for actions or more links */}
//                       {/* <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
//                                         <a href={`/users/${user.id}`} className="text-sm text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-500 font-medium">
//                                             View Profile &rarr;
//                                         </a>
//                                     </div> */}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </section>
//         )}

//       <footer
//         id="contact-section"
//         className="py-12 bg-slate-200 dark:bg-slate-800 text-center px-4"
//       >
//         <p className="text-slate-700 dark:text-slate-300">
//           Interested in working together or have a question?
//         </p>
//         <a
//           href="mailto:your.email@example.com" // Replace with your actual email
//           className="text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-500 font-semibold text-lg"
//         >
//           your.email@example.com
//         </a>
//         <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
//           &copy; {new Date().getFullYear()} HTOO MYAT NYI NYI (OxWEB). All
//           rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }
