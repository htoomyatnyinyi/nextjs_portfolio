import ProjectForm from "@/components/general/ProjectForm";
import prisma from "@/lib/prisma";
import React from "react";

type Project = {
  id: number;
  title: string;
  description: string;

  // Add other fields as needed
};

const About = async () => {
  // const data = await prisma.project.findMany();
  // console.log(data, "prisma");

  let data: Project[] = [];
  let error: string | null = null;
  try {
    data = await prisma.project.findMany();
  } catch (e) {
    console.error("Error fetching projects:", e);
    error = "Failed to load projects. Please try again later.";
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProjectForm />
      <div>
        {!error &&
          data.map((project) => (
            <div key={project.id}>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;
