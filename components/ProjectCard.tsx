interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h2 className="text-xl font-bold mt-2">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          className="text-blue-500 hover:underline mt-2 block"
        >
          View Project
        </a>
      )}
    </div>
  );
}
