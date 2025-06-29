import ProjectForm from "@/components/ProjectForm";

export default function Admin() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Project</h1>
      <ProjectForm />
    </main>
  );
}
