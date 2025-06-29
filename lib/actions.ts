// app/lib/actions.ts (or app/actions.ts)
"use server"; // <-- IMPORTANT: This directive marks the file/function as a Server Action

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache"; // To revalidate the data after adding

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string; // Assuming you might add more fields

  if (!title) {
    return { success: false, message: "Title is required." };
  }

  try {
    const newProject = await prisma.project.create({
      data: {
        title: title,
        // Add other fields as per your Prisma schema
        description: description, // Example
      },
    });
    console.log("New project created:", newProject);

    // Revalidate the path where the projects are displayed
    // This tells Next.js to refetch the data for the specified path on the next request.
    revalidatePath("/"); // Revalidate the home page or wherever your 'About' component is
    revalidatePath("/about"); // Also revalidate the /about page specifically

    return { success: true, project: newProject };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
}
