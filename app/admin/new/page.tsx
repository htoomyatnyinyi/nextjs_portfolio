import ProjectForm from "../_components/projectForm";
// import prisma from "@/lib/prisma";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { revalidateTag } from "next/cache";

// const getData = async () => {
//   const data = await prisma.project.findMany();
//   console.log(data, "data");
//   // revalidateTag("projects");

//   return data;
// };

const addNewProject = async () => {
  // const projects = await getData();
  // console.log(projects, " projec");
  return (
    <div>
      <div>
        {/* {projects?.map((project: any) => (
          <div>{project.title}</div>
        ))} */}
        Show List of Project
      </div>
      <h1>AddNewProject</h1>
      <ProjectForm />
    </div>
  );
};

export default addNewProject;
