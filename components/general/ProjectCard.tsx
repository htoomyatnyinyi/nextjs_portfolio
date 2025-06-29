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
    <div className="glass rounded-lg p-4 hover:shadow-xl transition-all duration-300 animate-fade-in">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      {project.link && (
        <a
          href={project.link}
          className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded hover:scale-105 transition"
        >
          View Project
        </a>
      )}
    </div>
  );
}
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   link?: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
//       {project.imageUrl && (
//         <img
//           src={project.imageUrl}
//           alt={project.title}
//           className="w-full h-48 object-cover rounded"
//         />
//       )}
//       <h2 className="text-xl font-bold mt-2">{project.title}</h2>
//       <p className="text-gray-600">{project.description}</p>
//       {project.link && (
//         <a
//           href={project.link}
//           className="text-blue-500 hover:underline mt-2 block"
//         >
//           View Project
//         </a>
//       )}
//     </div>
//   );
// }
