import ProjectCard from "@/components/ProjectCard";

async function getProjects() {
  const res_data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    {
      cache: "no-store",
    }
  );
  return res_data.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
