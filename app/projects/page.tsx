import ProjectCard from "@/components/general/ProjectCard";

async function getProjects() {
  const url = "/api/projects";
  console.log("Fetching projects from:", url);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch error:", {
        status: res.status,
        statusText: res.statusText,
        response: errorText,
      });
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
    }
    return res.json();
  } catch (error) {
    console.error("Fetch request failed:", error);
    throw error;
  }
}

export default async function Home() {
  let projects = [];
  try {
    projects = await getProjects();
  } catch (error: any) {
    console.error("Home page error:", error);
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">My Portfolio</h1>
        <p className="text-red-500 text-center">
          Error loading projects: {error}
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore my projects built with passion and creativity.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any, index: number) => (
          <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
// import ProjectCard from "@/components/ProjectCard";

// async function getProjects() {
//   const res_data = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
//     {
//       cache: "no-store",
//     }
//   );
//   return res_data.json();
// }

// export default async function Home() {
//   const projects = await getProjects();

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {projects.map((project: any) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </main>
//   );
// }
